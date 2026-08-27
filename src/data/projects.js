const projects = [
  {
    id: 0,
    slug: 'backyardbeats',
    title: 'BackyardBeats',
    shortDescription: 'Music platform for Malawian artists to upload tracks, gain fans, and connect.',
    description: `BackyardBeats is a full‑stack music platform designed for Malawian artists and fans. 
Artists can onboard, upload tracks with artwork, and manage their catalog. Fans can browse new releases, 
follow favourite artists, create playlists, rate tracks, and RSVP to events. The platform includes 
admin moderation, support tickets, and a custom download system with progress feedback.`,
    type: 'Full-Stack Web Application',
    year: 2025,
    status: 'MVP / Deployed',
    heroImage: 'projects/backyardbeats.jpg',
    images: [],
    tech: ['React', 'Bootstrap', 'Node.js', 'Express', 'MySQL', 'Cloudinary', 'JWT', 'Axios'],
    role: 'Full‑stack developer (solo project)',
    features: [
      'Track upload with artwork and automatic duration detection',
      'Public track listing with filtering, search, and sorting',
      'Fan dashboard with recently played, favourites, and playlists',
      'Event creation and RSVP system',
      'Admin approval workflow for artists, tracks, and events',
      'Support ticketing system with file attachments',
      'Custom download endpoint with nice filenames and progress toasts',
      'Responsive React frontend with Bootstrap'
    ],
    challenge: 'Malawian artists lacked a central platform to upload music, connect with fans, and manage their catalog.',
    solution: 'Built a full-stack platform with artist onboarding, track uploads, fan dashboards, event management, and admin moderation.',
    contributions: [
      'Designed and implemented REST API with Node/Express',
      'Developed React frontend with Bootstrap',
      'Integrated Cloudinary for media storage',
      'Implemented JWT authentication',
      'Built admin approval workflow'
    ],
    impact: {
      headline: 'Delivered a functional music platform ready for artist onboarding',
      metrics: [
        { value: '1', label: 'Full-stack MVP deployed' },
        { value: '3', label: 'user roles (artist, fan, admin)' }
      ],
      outcomes: [
        'Fully functional MVP deployed on Render (backend) and Vercel (frontend)',
        'Demonstrates full-stack capabilities including file uploads, auth, and complex relational queries',
        'Ready for pilot with real artists and fans'
      ],
      evidence: [
        'Live demo available at https://backyardbeats.vercel.app/',
        'GitHub repository with source code'
      ]
    },
    demo: 'https://backyardbeats.vercel.app/',
    repo: 'https://github.com/Emmanuel-Mukumbwa/backyardbeats',
    category: 'Platform',
    featured: false
  },
  {
    id: 1,
    slug: 'campustalent',
    title: 'CampusTalent',
    shortDescription: 'Student gig marketplace connecting students and recruiters.',
    description: `CampusTalent connects university students with vetted gigs and recruiters.
Built as a full-stack React + Node.js application with recruiter verification,
portfolio builder, and gig matching by skills.`,
    type: 'Full-Stack Web Application',
    year: 2025,
    status: 'MVP / Pilot',
    heroImage: 'projects/campus-hero.png',
    images: [
      '/screenshots/campustalent-1.png',
      '/screenshots/campustalent-2.png'
    ],
    tech: ['React', 'Bootstrap', 'NodeJS', 'MySQL', 'JWT', 'EmailJS'],
    role: 'Frontend + Backend (Auth, matching, API endpoints)',
    features: [
      'User authentication (JWT)',
      'Portfolio builder for students',
      'Gig posting & skill matching',
      'Recruiter verification workflow',
      'Gigs listing and application flows',
      'Simple escrow/payments integration (prototype)'
    ],
    challenge: 'Students needed a centralized way to discover gig opportunities and manage applications.',
    solution: 'Developed a platform with student profiles, recruiter workflows, skill matching, and application management.',
    contributions: [
      'Frontend architecture (React + Bootstrap)',
      'Backend API development (Node.js/Express)',
      'JWT authentication',
      'Database design (MySQL)',
      'Matching workflow',
      'Recruiter verification system'
    ],
    impact: {
      headline: 'Centralized student opportunity discovery and application workflow',
      metrics: [
        { value: '1', label: 'MVP launched for student testing' }
      ],
      outcomes: [
        'Reduced manual matchmaking time',
        'Platform-ready for onboarding recruiters'
      ],
      evidence: [
        'Student testing completed',
        'Live demo available at https://campus-talent-front-end-f28i.vercel.app/'
      ]
    },
    demo: 'https://campus-talent-front-end-f28i.vercel.app/',
    repo: 'https://github.com/Emmanuel-Mukumbwa/campus-talent-frontend',
    category: 'Platform',
    featured: true
  },
  {
    id: 2,
    slug: 'weather-app',
    title: 'Weather App',
    shortDescription: 'Real-time weather info for any location.',
    description: 'A responsive weather app using a public weather API, showing forecast and favorites.',
    type: 'Utility Web Application',
    year: 2024,
    status: 'Completed',
    heroImage: 'projects/weather.png',
    images: ['/projects/weather.png'],
    tech: ['React', 'OpenWeather API', 'Bootstrap'],
    role: 'Frontend',
    features: ['Search by city', 'Favorites', '7-day forecast'],
    challenge: 'Provide a simple, responsive weather lookup tool.',
    solution: 'Built a React app using OpenWeather API with search, favorites, and 7-day forecast.',
    contributions: [
      'Frontend development (React)',
      'API integration',
      'Responsive design'
    ],
    impact: {
      headline: 'Delivered a polished, mobile-friendly weather utility',
      metrics: [],
      outcomes: ['Polished UI, mobile friendly'],
      evidence: ['Live demo available at https://weather-app-vert-theta-10.vercel.app/']
    },
    demo: 'https://weather-app-vert-theta-10.vercel.app/',
    repo: '',
    category: 'Utility',
    featured: false
  },
  {
    id: 3,
    slug: 'password-generator',
    title: 'Password Generator App',
    shortDescription: 'Secure, customizable password generator',
    description: 'Generate secure passwords with options for length, complexity and exclusion lists.',
    type: 'Utility Application',
    year: 2024,
    status: 'Completed',
    heroImage: 'projects/password.png',
    images: ['/screenshots/password-1.png'],
    tech: ['React'],
    role: 'Frontend',
    features: ['Copy to clipboard', 'Complexity options'],
    challenge: 'Provide a secure, customizable password generator.',
    solution: 'Developed a React app with copy to clipboard and complexity options.',
    contributions: [
      'Frontend development',
      'Clipboard integration'
    ],
    impact: {
      headline: 'Useful utility with small footprint',
      metrics: [],
      outcomes: ['Useful utility with small footprint'],
      evidence: ['Live demo available at https://password-generator-app-lime.vercel.app/']
    },
    demo: 'https://password-generator-app-lime.vercel.app/',
    repo: '',
    category: 'Utility',
    featured: false
  },
  {
    id: 4,
    slug: 'tee-attachment',
    title: 'Tee Components & Communications — Industrial Attachment',
    shortDescription: 'Industrial attachment focusing on communications systems, diagnostics and final technical reporting.',
    description: `Industrial attachment at Tee Components & Communications. Work included site diagnostics, system commissioning, cabling checks,
signal troubleshooting, hands-on installations and preparation of a final technical attachment report validated by the industry supervisor.`,
    type: 'Industrial Attachment / Field Work',
    year: 2023,
    status: 'Completed',
    heroImage: 'projects/tee-attachment.jpg',
    images: [],
    tech: ['Kali Linux', 'Python', 'Linux', 'Networking', 'Diagnostics', 'Technical Reporting'],
    role: 'Industrial Attachment — Diagnostics & Final Report',
    features: [
      'Site diagnostics and signal testing',
      'Device commissioning and cabling checks',
      'Practical troubleshooting using Linux tools and Python scripts',
      'Final technical report documenting methodology, findings and recommendations'
    ],
    challenge: 'Need to diagnose and document communications systems during industrial attachment.',
    solution: 'Performed site diagnostics, system commissioning, and produced a final technical report validated by supervisors.',
    contributions: [
      'Site diagnostics and signal testing',
      'Device commissioning and cabling checks',
      'Used Linux tools and Python for troubleshooting',
      'Wrote final technical report'
    ],
    impact: {
      headline: 'Validated practical field work and technical reporting',
      metrics: [],
      outcomes: [
        'Final report validated by industry supervisor and academic coordinator',
        'Improved site checklist and handover documentation',
        'Demonstrated practical competency in communications diagnostics and reporting'
      ],
      evidence: [
        'Supervisor validation',
        'Final report'
      ]
    },
    demo: '',
    repo: '',
    category: 'Attachment / Field Work',
    featured: false
  },
  {
    id: 5,
    slug: 'ccna-portfolio',
    title: 'CCNA Portfolio: Networking Labs',
    shortDescription: 'A collection of Cisco networking labs demonstrating VLANs, NAT, DHCP, and security configurations.',
    description: `This portfolio contains three hands-on networking projects built in Cisco Packet Tracer, showcasing core CCNA skills:
**VLAN Segmentation & Inter-VLAN Routing (Router-on-a-Stick):** Created VLANs for clients, servers, and management; configured trunking; implemented Router-on-a-Stick with subinterfaces; set up DHCP pools.
**NAT & PAT Configuration:** Simulated WAN link, configured PAT (overload) to allow multiple internal hosts to share a single public IP, and implemented static NAT for port forwarding to an internal web server.
**Switch Port Security & DHCP Implementation:** Secured client-facing switch ports with sticky MAC learning, configured a dedicated DHCP server, and enabled DHCP relay to forward requests across VLANs.`,
    type: 'Networking Lab Portfolio',
    year: 2025,
    status: 'Completed',
    heroImage: 'projects/ccna-portfolio.png',
    images: [],
    tech: ['Cisco Packet Tracer', 'VLAN', '802.1Q Trunking', 'Router-on-a-Stick', 'NAT/PAT', 'DHCP', 'Port Security', 'OSPF', 'Cisco IOS CLI'],
    role: 'Network Designer & Configurator',
    features: [
      'VLAN segmentation and inter‑VLAN routing',
      'PAT (NAT Overload) for internet access',
      'Static NAT for port forwarding',
      'DHCP server and relay configuration',
      'Port security with sticky MAC addresses',
      'Comprehensive verification and testing commands documented'
    ],
    challenge: 'Demonstrate practical networking skills in VLANs, NAT, DHCP, and security.',
    solution: 'Built three functional Cisco Packet Tracer lab topologies covering VLAN segmentation, inter-VLAN routing, NAT/PAT, DHCP, and port security.',
    contributions: [
      'Designed and configured VLANs',
      'Implemented Router-on-a-Stick',
      'Configured NAT/PAT and static NAT',
      'Set up DHCP server and relay',
      'Implemented port security',
      'Documented verification commands'
    ],
    impact: {
      headline: 'Demonstrated core CCNA networking skills with three fully functional lab topologies',
      metrics: [
        { value: '3', label: 'lab topologies' }
      ],
      outcomes: [
        'Three fully functional lab topologies with detailed configuration files',
        'Practical understanding of enterprise networking fundamentals',
        'Ready to showcase in interviews for networking roles'
      ],
      evidence: [
        'Configuration files and documentation',
        'GitHub repository: https://github.com/Emmanuel-Mukumbwa/ccna-portfolio-emmanuelMukumbwa'
      ]
    },
    demo: '',
    repo: 'https://github.com/Emmanuel-Mukumbwa/ccna-portfolio-emmanuelMukumbwa',
    category: 'Networking',
    featured: true
  },
  {
    id: 6,
    slug: 'cloudimart-prototype',
    title: 'Cloudimart – University E-commerce Prototype',
    shortDescription: 'E-commerce platform for groceries and stationery delivery within Mzuzu University community.',
    description: `A full-stack e-commerce prototype for Cloudimart Limited, a Malawian startup. 
Built with Laravel (backend) and Next.js (frontend). Features location‑based checkout restricted to Mzuzu University community 
using GPS validation, unique order ID generation, and delivery verification workflow.`,
    type: 'Full-Stack E-commerce Prototype',
    year: 2024,
    status: 'Prototype',
    heroImage: 'projects/cloudimart.jpg',
    images: [],
    tech: ['Laravel', 'Next.js', 'MySQL', 'REST API', 'GPS Geolocation', 'Tailwind CSS'],
    role: 'Full‑stack developer',
    features: [
      'Product catalog with Stationery and Dairy categories',
      'Shopping cart with real-time updates',
      'Location‑based checkout using browser geolocation and radius validation',
      'Unique order ID generation (ORDER-YYYYMMDD-XXXXXX)',
      'Delivery verification with Order ID and phone number',
      'Admin dashboard for product and location management'
    ],
    challenge: 'Provide grocery and stationery delivery within Mzuzu University community.',
    solution: 'Built a full-stack e-commerce prototype with Laravel and Next.js, location-based checkout, and delivery verification.',
    contributions: [
      'Backend API (Laravel)',
      'Frontend (Next.js)',
      'Geolocation validation',
      'Order ID generation',
      'Admin dashboard'
    ],
    impact: {
      headline: 'Working prototype demonstrating location-restricted e-commerce',
      metrics: [],
      outcomes: [
        'Working prototype demonstrating core e-commerce functionality with location restriction',
        'Ready for pilot testing within Mzuzu University community'
      ],
      evidence: [
        'Ready for pilot testing',
        'GitHub repository: https://github.com/Emmanuel-Mukumbwa/cloudimart-university-ecommerce'
      ]
    },
    demo: '',
    repo: 'https://github.com/Emmanuel-Mukumbwa/cloudimart-university-ecommerce',
    category: 'E-commerce',
    featured: false
  },
  {
    id: 7,
    slug: 'everyday-tech',
    title: 'Everyday Tech – Ecommerce Landing Page',
    shortDescription: 'Responsive ecommerce landing page with product cards, cart drawer, and checkout.',
    description: `A modern ecommerce landing page built with React and Bootstrap. 
Features product listings, modal preview, cart drawer, toast notifications, and a front‑only checkout flow. 
Uses local product data and React context for cart state.`,
    type: 'E-commerce Landing Page',
    year: 2024,
    status: 'Completed',
    heroImage: 'projects/everyday-tech.jpg',
    images: [],
    tech: ['React', 'Bootstrap', 'React Context', 'CSS Modules'],
    role: 'Frontend developer',
    features: [
      'Product grid with auto‑rotating image carousels',
      'Product modal with slideshow and quick add to cart',
      'Slide‑out cart drawer with item management',
      'Toast notifications for user actions',
      'Responsive design for mobile and desktop'
    ],
    challenge: 'Create a modern, responsive e-commerce landing page with cart functionality.',
    solution: 'Built a React app with product cards, cart drawer, and toast notifications.',
    contributions: [
      'Frontend development',
      'Cart state management with Context',
      'Responsive design'
    ],
    impact: {
      headline: 'Clean, reusable component structure with responsive design',
      metrics: [],
      outcomes: [
        'Clean, reusable component structure',
        'Fully responsive and accessible',
        'Ready to connect to a real backend'
      ],
      evidence: [
        'Live demo: https://everyday-tech-store.vercel.app/',
        'GitHub repository: https://github.com/Emmanuel-Mukumbwa/everyday-tech'
      ]
    },
    demo: 'https://everyday-tech-store.vercel.app/',
    repo: 'https://github.com/Emmanuel-Mukumbwa/everyday-tech',
    category: 'Frontend',
    featured: false
  },
  {
    id: 8,
    slug: 'food-tourism-malawi',
    title: 'Malawi Food & Travel',
    shortDescription: 'Discover Malawi’s culinary delights and travel destinations.',
    description: `A Next.js website promoting food tourism and travel in Malawi. 
Features dynamic destination pages with category filtering, a full‑width hero, and responsive design. 
Built with Next.js, Bootstrap, and custom CSS modules.`,
    type: 'Tourism Website',
    year: 2024,
    status: 'Completed',
    heroImage: 'projects/foodandtravel.jpg',
    images: [],
    tech: ['Next.js', 'React', 'Bootstrap', 'CSS Modules', 'TypeScript'],
    role: 'Frontend developer',
    features: [
      'Responsive navigation with hamburger menu',
      'Hero section with background image overlay and call‑to‑action',
      'Categorized destination cards (culinary experiences, scenic sites, etc.)',
      'Filtered destinations page with dynamic query parameters',
      'About page with mission and contact information'
    ],
    challenge: 'Promote Malawi’s food and travel destinations.',
    solution: 'Built a Next.js website with dynamic destination pages, filtering, and SSR for SEO.',
    contributions: [
      'Frontend development (Next.js)',
      'Dynamic routing and filtering',
      'SEO optimization'
    ],
    impact: {
      headline: 'Production-ready tourism website optimized for SEO',
      metrics: [],
      outcomes: [
        'Production‑ready tourism website',
        'Optimized for SEO with server‑side rendering',
        'Showcases Malawi’s food and travel offerings'
      ],
      evidence: [
        'Live demo: https://malawifoodandtravel.vercel.app/',
        'GitHub repository: https://github.com/Emmanuel-Mukumbwa/malawifoodandtravel'
      ]
    },
    demo: 'https://malawifoodandtravel.vercel.app/',
    repo: 'https://github.com/Emmanuel-Mukumbwa/malawifoodandtravel',
    category: 'Tourism',
    featured: false
  },
  // ----- SCHOOL SCREEN APPS -----
  {
    id: 9,
    slug: 'school-screen-presenter',
    title: 'School Screen Presenter App',
    shortDescription: 'Flutter remote control for teachers to navigate slides, control media, and manage classroom presentations.',
    description: `A native Flutter app that turns a teacher’s tablet or phone into a full‑fledged remote control for the School Screen classroom platform. 
Connects via WebSocket to the hub, allowing teachers to navigate slides, play/pause video/audio, toggle black screen, reveal poll/quiz results, 
and control student slide visibility – all in real time.`,
    type: 'Mobile App (Flutter)',
    year: 2025,
    status: 'Deployed',
    heroImage: 'projects/presenter-app.jpg',
    images: ['/screenshots/presenter-controls.png', '/screenshots/presenter-slides.png'],
    tech: ['Flutter', 'Dart', 'Socket.IO', 'Video Player', 'Audio Players', 'SharedPreferences'],
    role: 'Mobile Developer',
    features: [
      'Real‑time slide navigation and media control',
      'Video and audio playback on both phone and TV simultaneously',
      'Poll and quiz result reveal with correct answer highlighting',
      'Black screen toggle for classroom focus',
      'Saved screen codes for quick re‑linking',
      'Student slide visibility toggle ("Look at TV" mode)',
      'Custom theme matching the web dashboard'
    ],
    challenge: 'Teachers needed a remote control for classroom presentations without being tied to the computer.',
    solution: 'Developed a Flutter app connecting to the hub via WebSocket, enabling slide navigation and media control from anywhere.',
    contributions: [
      'Flutter development',
      'WebSocket integration',
      'Video/audio playback controls',
      'Poll/quiz reveal',
      'Theme customization'
    ],
    impact: {
      headline: 'Real-time classroom control from a teacher’s tablet or phone',
      metrics: [
        { value: 'Android', label: 'tablet deployment' }
      ],
      outcomes: [
        'Deployed on Android tablets in Malawi classrooms',
        'Reduces teacher movement – control the lesson from anywhere',
        'Full native controls with low latency'
      ],
      evidence: [
        'Deployed on Android tablets in Malawi classrooms'
      ]
    },
    demo: '',
    repo: 'https://github.com/Emmanuel-Mukumbwa/school-screen-presenter-app',
    category: 'Mobile',
    featured: true
  },
  {
    id: 10,
    slug: 'school-screen-resource-manager',
    title: 'School Screen Resource Manager App',
    shortDescription: 'Flutter app to upload textbooks, scan pages with OCR, and manage resource libraries.',
    description: `A mobile app for teachers to build resource libraries for AI‑powered lesson generation. 
Upload PDFs, text files, markdown, and HTML. Scan textbook pages with on‑device OCR (Google ML Kit) to extract text, 
or paste text directly. All resources are indexed and made available to the School Screen hub for RAG‑based lesson planning.`,
    type: 'Mobile App (Flutter)',
    year: 2025,
    status: 'Deployed',
    heroImage: 'projects/resource-manager.jpg',
    images: ['/screenshots/scanning.png', '/screenshots/resource-library.png'],
    tech: ['Flutter', 'Google ML Kit (OCR)', 'File Picker', 'Image Picker', 'SharedPreferences', 'Path Provider'],
    role: 'Mobile Developer',
    features: [
      'Upload files (PDF, TXT, MD, HTML) to resource libraries',
      'OCR scanning – take photo, extract text, upload as resource',
      'Manual text paste for quick notes',
      'Create and manage collections with subject/yearGroup tags',
      'Real‑time resource status (Pending, Processing, Ready, Error)',
      'View extracted text chunks from scanned pages'
    ],
    challenge: 'Teachers needed to digitize textbooks and resources for AI lesson generation.',
    solution: 'Built a Flutter app with file upload and OCR scanning to extract text from printed pages.',
    contributions: [
      'Flutter development',
      'OCR integration with Google ML Kit',
      'File management',
      'Resource status tracking'
    ],
    impact: {
      headline: 'Enabled digitization of textbooks with high OCR accuracy',
      metrics: [
        { value: '90%+', label: 'OCR accuracy on printed pages' }
      ],
      outcomes: [
        'Enabled teachers to digitise textbooks and syllabi',
        'Resources feed directly into AI lesson generation'
      ],
      evidence: [
        'Deployed in Malawi classrooms',
        'OCR accuracy >90% on printed pages'
      ]
    },
    demo: '',
    repo: 'https://github.com/Emmanuel-Mukumbwa/resource-manager-app',
    category: 'Mobile',
    featured: true
  },
  {
    id: 11,
    slug: 'school-screen-student',
    title: 'School Screen Student App',
    shortDescription: 'Flutter student app to join lessons, answer polls, quizzes, and view slides.',
    description: `A lightweight Flutter app for students to participate in classroom lessons. 
Connects to the hub via WebSocket, allowing students to join a lesson with a 5‑digit code, 
register with their name, answer polls and quizzes in real time, and view slides on their devices 
(when permitted by the teacher).`,
    type: 'Mobile App (Flutter)',
    year: 2025,
    status: 'Deployed',
    heroImage: 'projects/student-app.jpg',
    images: ['/screenshots/student-join.png', '/screenshots/student-poll.png'],
    tech: ['Flutter', 'Socket.IO', 'SharedPreferences', 'UUID'],
    role: 'Mobile Developer',
    features: [
      'Join lessons with a 5‑digit code',
      'Student registration with name and participant type',
      'Poll voting with real‑time results',
      'Quiz answering with multiple questions',
      'Automatic slide sync with the TV',
      '"Look at TV" mode when teacher hides slides',
      'Disconnect when lesson ends'
    ],
    challenge: 'Students needed a way to participate in real-time classroom activities from their phones.',
    solution: 'Developed a Flutter app allowing students to join lessons, answer polls/quizzes, and view slides.',
    contributions: [
      'Flutter development',
      'WebSocket integration',
      'Real-time poll/quiz handling',
      'Slide sync'
    ],
    impact: {
      headline: 'Enabled real-time student participation in lessons',
      metrics: [
        { value: '50+', label: 'students per lesson' }
      ],
      outcomes: [
        'Deployed on student phones in Malawi classrooms',
        'Low latency responses for polls and quizzes'
      ],
      evidence: [
        'Deployed on student phones in Malawi classrooms',
        'Supports 50+ students per lesson'
      ]
    },
    demo: '',
    repo: 'https://github.com/Emmanuel-Mukumbwa/student-app',
    category: 'Mobile',
    featured: true
  }
];

export default projects;
