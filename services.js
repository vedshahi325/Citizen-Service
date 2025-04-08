// Service Information
const serviceInfo = {
    'Aadhaar': {
        title: 'Aadhaar Card Services',
        description: 'Aadhaar is a 12-digit unique identity number issued by the Unique Identification Authority of India (UIDAI).',
        services: [
            'New Aadhaar Card Application',
            'Aadhaar Card Update/Correction',
            'Download e-Aadhaar',
            'Aadhaar Card Status Check',
            'Aadhaar Card Verification'
        ],
        requirements: [
            'Valid ID proof (Passport, Voter ID, etc.)',
            'Address proof',
            'Date of birth proof',
            'Mobile number (for OTP verification)',
            'Email address (optional)'
        ],
        process: [
            'Visit the nearest Aadhaar Enrollment Center',
            'Fill the application form',
            'Submit required documents',
            'Biometric data collection (fingerprints and iris scan)',
            'Receive acknowledgment slip',
            'Aadhaar number will be sent to registered mobile number'
        ],
        links: [
            { text: 'Official UIDAI Website', url: 'https://uidai.gov.in/' },
            { text: 'Locate Enrollment Center', url: 'https://appointments.uidai.gov.in/' },
            { text: 'Download e-Aadhaar', url: 'https://eaadhaar.uidai.gov.in/' }
        ]
    },
    'PAN Card': {
        title: 'PAN Card Services',
        description: 'Permanent Account Number (PAN) is a unique 10-digit alphanumeric identity issued by the Income Tax Department.',
        services: [
            'New PAN Card Application',
            'PAN Card Correction',
            'PAN-Aadhaar Linking',
            'PAN Card Status Check',
            'Duplicate PAN Card'
        ],
        requirements: [
            'Valid ID proof',
            'Address proof',
            'Date of birth proof',
            'Photograph',
            'Mobile number and email'
        ],
        process: [
            'Fill online application form on NSDL or UTIITSL website',
            'Upload required documents',
            'Pay application fee',
            'Submit application',
            'Track application status',
            'Receive PAN card via courier'
        ],
        links: [
            { text: 'NSDL PAN Portal', url: 'https://www.incometax.gov.in/iec/foportal/' },
            { text: 'UTIITSL PAN Portal', url: 'https://www.utiitsl.com/UTIITSL_SITE/pan.html' },
            { text: 'PAN-Aadhaar Link', url: 'https://www.incometax.gov.in/iec/foportal/' }
        ]
    },
    'Passport': {
        title: 'Passport Services',
        description: 'Indian Passport is an official travel document issued by the Government of India to Indian citizens.',
        services: [
            'New Passport Application',
            'Passport Renewal',
            'Passport Re-issue',
            'Tatkal Passport',
            'Passport Status Check'
        ],
        requirements: [
            'Proof of Identity',
            'Proof of Address',
            'Date of Birth proof',
            'Educational Qualification proof',
            'Employment proof (if applicable)',
            'Photographs'
        ],
        process: [
            'Fill online application form on Passport Seva website',
            'Upload required documents',
            'Pay application fee',
            'Book appointment at Passport Seva Kendra',
            'Visit PSK for document verification',
            'Track application status',
            'Receive passport via Speed Post'
        ],
        links: [
            { text: 'Passport Seva Portal', url: 'https://portal2.passportindia.gov.in/' },
            { text: 'Track Application', url: 'https://portal2.passportindia.gov.in/AppOnlineProject/statusTracker/track' },
            { text: 'Fee Calculator', url: 'https://portal2.passportindia.gov.in/AppOnlineProject/feeCalculator' }
        ]
    },
    'Driving License': {
        title: 'Driving License Services',
        description: 'Driving License is an official document that authorizes an individual to drive motor vehicles on public roads.',
        services: [
            'New Driving License Application',
            'Driving License Renewal',
            'Driving License Duplicate',
            'Driving License Status Check',
            'International Driving Permit'
        ],
        requirements: [
            'Age proof',
            'Address proof',
            'Medical certificate (for commercial license)',
            'Educational qualification proof',
            'Photographs',
            'Training certificate (for commercial license)'
        ],
        process: [
            'Apply online on Sarathi or state RTO website',
            'Upload required documents',
            'Pay application fee',
            'Book appointment for driving test',
            'Appear for driving test',
            'Receive driving license via post'
        ],
        links: [
            { text: 'Sarathi Portal', url: 'https://sarathi.parivahan.gov.in/' },
            { text: 'State RTO Websites', url: 'https://transport.rajasthan.gov.in/content/transport/en/regional-transport-offices.html' },
            { text: 'Driving License Status', url: 'https://sarathi.parivahan.gov.in/sarathiservice/stateSelection.do' }
        ]
    },
    'Voter ID': {
        title: 'Voter ID Services',
        description: 'Voter ID or Electors Photo Identity Card (EPIC) is an identity document issued by the Election Commission of India.',
        services: [
            'New Voter ID Application',
            'Voter ID Correction',
            'Voter ID Transfer',
            'Voter ID Status Check',
            'Voter ID Duplicate'
        ],
        requirements: [
            'Age proof',
            'Address proof',
            'Photograph',
            'Mobile number and email'
        ],
        process: [
            'Fill Form 6 online on National Voters Service Portal',
            'Upload required documents',
            'Submit application',
            'Verification by Booth Level Officer',
            'Receive Voter ID via post'
        ],
        links: [
            { text: 'National Voters Service Portal', url: 'https://www.nvsp.in/' },
            { text: 'Track Application', url: 'https://www.nvsp.in/Forms/trackstatus' },
            { text: 'Search Your Name in Electoral Roll', url: 'https://www.nvsp.in/Forms/search' }
        ]
    },
    'Municipal Services': {
        title: 'Municipal Services',
        description: 'Various services provided by local municipal corporations for citizens.',
        services: [
            'Property Tax Payment',
            'Water Bill Payment',
            'Building Permissions',
            'Birth/Death Certificates',
            'Marriage Registration',
            'Property Registration'
        ],
        requirements: [
            'Property documents',
            'Identity proof',
            'Address proof',
            'Photographs',
            'Previous bills (for utility payments)'
        ],
        process: [
            'Visit municipal corporation website',
            'Select required service',
            'Fill application form',
            'Upload required documents',
            'Pay applicable fees',
            'Track application status'
        ],
        links: [
            { text: 'Property Tax Payment', url: 'https://municipality.gov.in/' },
            { text: 'Water Bill Payment', url: 'https://municipality.gov.in/' },
            { text: 'Birth/Death Certificate', url: 'https://municipality.gov.in/' }
        ]
    },
    'Welfare Schemes': {
        title: 'Government Welfare Schemes',
        description: 'Various welfare schemes launched by the Government of India for the benefit of citizens.',
        services: [
            'PM Kisan Samman Nidhi',
            'Ayushman Bharat',
            'PM Fasal Bima Yojana',
            'PM Awas Yojana',
            'PM Ujjwala Yojana',
            'PM Kisan Maan Dhan Yojana'
        ],
        requirements: [
            'Aadhaar Card',
            'Bank Account details',
            'Income certificate (for some schemes)',
            'Caste certificate (for some schemes)',
            'BPL card (for some schemes)'
        ],
        process: [
            'Visit the official website of the scheme',
            'Check eligibility criteria',
            'Fill application form',
            'Upload required documents',
            'Submit application',
            'Track application status'
        ],
        links: [
            { text: 'PM Kisan Portal', url: 'https://pmkisan.gov.in/' },
            { text: 'Ayushman Bharat', url: 'https://pmjay.gov.in/' },
            { text: 'PM Awas Yojana', url: 'https://pmay-urban.gov.in/' }
        ]
    },
    'Complaint Registration': {
        title: 'Complaint Registration Services',
        description: 'Various platforms to register complaints and grievances with government departments.',
        services: [
            'CPGRAMS (Centralized Public Grievance Redress and Monitoring System)',
            'PMO Grievance Portal',
            'National Consumer Helpline',
            'Anti-Corruption Complaints',
            'Police Complaints',
            'RTI Applications'
        ],
        requirements: [
            'Personal details',
            'Contact information',
            'Complaint details',
            'Supporting documents (if any)'
        ],
        process: [
            'Visit the respective complaint portal',
            'Create account or login',
            'Fill complaint form',
            'Upload supporting documents',
            'Submit complaint',
            'Track complaint status using complaint ID'
        ],
        links: [
            { text: 'CPGRAMS Portal', url: 'https://pgportal.gov.in/' },
            { text: 'PMO Grievance', url: 'https://www.pmindia.gov.in/en/grievance/' },
            { text: 'National Consumer Helpline', url: 'https://consumerhelpline.gov.in/' }
        ]
    }
}; 