// Configuration file for API keys and settings
const config = {
    // Your Gemini API key
    GEMINI_API_KEY: 'AIzaSyB5nrLSBBjUa7XfDU6XtVpvsDBjJNzoXKI',
    
    // Gemini API endpoint
    GEMINI_API_URL: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent',
    
    // Set to true to use Gemini API, false to use only local responses
    USE_GEMINI: true,
    
    // Fallback message when API fails
    FALLBACK_MESSAGE: 'I apologize, but I encountered an error while processing your query. Please try again or ask about one of the supported services.',
    
    // List of supported services for reference
    SUPPORTED_SERVICES: [
        'Aadhaar Card',
        'PAN Card',
        'Passport',
        'Driving License',
        'Voter ID',
        'Municipal Services',
        'Welfare Schemes',
        'Complaint Registration'
    ],
    
    // Debug mode - set to true to see console logs
    DEBUG: true
}; 