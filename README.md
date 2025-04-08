
# Citizen Service Chatbot

A simple chatbot application designed to assist citizens with government-related services and information. The chatbot provides information about various government services such as Aadhaar, PAN card, passports, driving licenses, voter ID, municipal services, welfare schemes, and complaint registration.

## Features

- Interactive chat interface
- Information about multiple government services
- Detailed process steps and required documents
- Official website links
- Responsive design
- No server required - runs entirely in the browser
- Enhanced responses using Google's Gemini AI (optional)

## Tech Stack

- HTML5
- CSS3
- JavaScript (ES6+)
- Google Gemini API (optional)

## Usage

1. Simply open `index.html` in your web browser
2. Type your question about any government service
3. The chatbot will respond with relevant information including:
   - Service description
   - Required documents
   - Application process
   - Timeline
   - Official website link

## Gemini API Integration

The chatbot can be enhanced with Google's Gemini AI to provide more detailed and contextual responses:

1. Get a Gemini API key from [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Open `config.js` and replace `YOUR_GEMINI_API_KEY_HERE` with your actual API key
3. Set `USE_GEMINI` to `true` to enable Gemini responses
4. Set `USE_GEMINI` to `false` to use only local responses

## Supported Services

- Aadhaar Card
- PAN Card
- Passport
- Driving License
- Voter ID
- Municipal Services
- Welfare Schemes
- Complaint Registration

## Project Structure

```
frontend/
├── public/
│   ├── index.html      # Main HTML file
│   ├── styles.css      # CSS styles
│   ├── script.js       # Chat functionality
│   ├── services.js     # Service information
│   └── config.js       # Configuration and API keys
└── README.md           # Project documentation
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Government of India for providing public service information
- Google Gemini AI for enhanced response capabilities
- Open source community for various tools and libraries used in this project 
