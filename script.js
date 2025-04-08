document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const chatMessages = document.getElementById('chatMessages');
    const userInput = document.getElementById('userInput');
    const sendButton = document.getElementById('sendButton');
    const clearChatButton = document.getElementById('clearChat');
    const toggleThemeButton = document.getElementById('toggleTheme');

    // Add message to chat
    function addMessage(content, isUser = false) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${isUser ? 'user' : 'bot'}`;
        
        const messageContent = document.createElement('div');
        messageContent.className = 'message-content';
        
        if (isUser) {
            messageContent.textContent = content;
        } else {
            // Check if the content contains HTML
            if (typeof content === 'string' && content.includes('<')) {
                messageContent.innerHTML = content;
            } else {
                messageContent.textContent = content;
            }
        }
        
        messageDiv.appendChild(messageContent);
        chatMessages.appendChild(messageDiv);
        
        // Scroll to bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;
        
        return messageDiv;
    }

    // Process user query
    function processQuery(query) {
        query = query.toLowerCase();
        
        // Check if query matches any service
        for (const service in serviceInfo) {
            if (query.includes(service.toLowerCase())) {
                return service;
            }
        }
        
        return null;
    }

    // Fetch response from Gemini API
    async function fetchGeminiResponse(query) {
        try {
            // Show loading message
            const loadingMessage = addMessage('Thinking...');
            
            // Prepare the prompt
            const prompt = `You are a helpful government service assistant. Answer the following question about Indian government services: ${query}`;
            
            // Call Gemini API
            const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=' + config.GEMINI_API_KEY, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    contents: [{
                        parts: [{
                            text: prompt
                        }]
                    }]
                })
            });
            
            // Remove loading message
            if (loadingMessage && loadingMessage.parentNode) {
                loadingMessage.parentNode.removeChild(loadingMessage);
            }
            
            if (!response.ok) {
                throw new Error('API request failed');
            }
            
            const data = await response.json();
            
            if (data.candidates && data.candidates.length > 0 && 
                data.candidates[0].content && 
                data.candidates[0].content.parts && 
                data.candidates[0].content.parts.length > 0) {
                
                const responseText = data.candidates[0].content.parts[0].text;
                addMessage(responseText);
            } else {
                addMessage("I'm sorry, I couldn't find specific information about that. You can ask about: " + Object.keys(serviceInfo).join(', '));
            }
        } catch (error) {
            console.error('Error fetching response:', error);
            addMessage("I'm sorry, I encountered an error. Please try again later or ask about one of our services: " + Object.keys(serviceInfo).join(', '));
        }
    }

    // Handle user message
    function handleUserMessage() {
        const message = userInput.value.trim();
        if (!message) return;
        
        // Add user message to chat
        addMessage(message, true);
        userInput.value = '';
        
        // Process the query
        const matchedService = processQuery(message);
        
        if (matchedService) {
            // Display service information
            displayServiceInfo(matchedService);
        } else {
            // Use Gemini API for other queries
            fetchGeminiResponse(message);
        }
    }

    // Display service information
    function displayServiceInfo(service) {
        const info = serviceInfo[service];
        if (!info) return;
        
        let messageHTML = `
            <h3>${info.title}</h3>
            <p>${info.description}</p>
            
            <div class="service-info">
                <h3>Available Services</h3>
                <ul>
                    ${info.services.map(service => `<li>${service}</li>`).join('')}
                </ul>
                
                <h3>Requirements</h3>
                <ul>
                    ${info.requirements.map(req => `<li>${req}</li>`).join('')}
                </ul>
                
                <h3>Process</h3>
                <ol>
                    ${info.process.map(step => `<li>${step}</li>`).join('')}
                </ol>
                
                <h3>Useful Links</h3>
                <ul>
                    ${info.links.map(link => `<li><a href="${link.url}" target="_blank">${link.text}</a></li>`).join('')}
                </ul>
            </div>
        `;
        
        addMessage(messageHTML);
    }

    // Clear chat
    function clearChat() {
        chatMessages.innerHTML = '';
        
        // Add welcome message
        const welcomeMessage = `
            <h3>Hello! I'm your Citizen Service Assistant.</h3>
            <p>How can I help you today? You can ask me about:</p>
            <div class="service-grid">
                ${Object.keys(serviceInfo).map(service => `
                    <div class="service-card" data-service="${service}">
                        <i class="fas fa-${getServiceIcon(service)}"></i>
                        <span>${service}</span>
                    </div>
                `).join('')}
            </div>
        `;
        
        addMessage(welcomeMessage);
        
        // Re-add event listeners to service cards
        document.querySelectorAll('.service-card').forEach(card => {
            card.addEventListener('click', () => {
                const service = card.getAttribute('data-service');
                if (service && serviceInfo[service]) {
                    displayServiceInfo(service);
                }
            });
        });
    }

    // Get service icon
    function getServiceIcon(service) {
        const iconMap = {
            'Aadhaar': 'id-card',
            'PAN Card': 'file-alt',
            'Passport': 'passport',
            'Driving License': 'car',
            'Voter ID': 'vote-yea',
            'Municipal Services': 'city',
            'Welfare Schemes': 'hand-holding-heart',
            'Complaint Registration': 'exclamation-circle'
        };
        
        return iconMap[service] || 'question-circle';
    }

    // Theme functions
    function initializeTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-theme');
            toggleThemeButton.innerHTML = '<i class="fas fa-sun"></i>';
        }
    }

    function toggleTheme() {
        document.body.classList.toggle('dark-theme');
        const isDark = document.body.classList.contains('dark-theme');
        
        if (isDark) {
            localStorage.setItem('theme', 'dark');
            toggleThemeButton.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            localStorage.setItem('theme', 'light');
            toggleThemeButton.innerHTML = '<i class="fas fa-moon"></i>';
        }
    }

    // Event Listeners
    sendButton.addEventListener('click', handleUserMessage);
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleUserMessage();
        }
    });
    
    clearChatButton.addEventListener('click', clearChat);
    toggleThemeButton.addEventListener('click', toggleTheme);
    
    // Add event listeners to service cards
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('click', () => {
            const service = card.getAttribute('data-service');
            if (service && serviceInfo[service]) {
                displayServiceInfo(service);
            }
        });
    });
    
    // Add event listeners to service links in sidebar
    document.querySelectorAll('.service-links a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const service = link.getAttribute('data-service');
            if (service && serviceInfo[service]) {
                displayServiceInfo(service);
            }
        });
    });

    // Initialize theme
    initializeTheme();
}); 