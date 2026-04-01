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
    heroImage: 'projects/backyardbeats.jpg',
    images: [],
    tech: ['React', 'Bootstrap', 'Node.js', 'Express', 'MySQL', 'Cloudinary', 'JWT', 'Axios'],
    role: 'Full‑stack developer (solo project)',
    features: [
      'Artist onboarding with profile photo, bio, genres, moods',
      'Track upload with artwork and automatic duration detection',
      'Public track listing with filtering, search, and sorting',
      'Fan dashboard with recently played, favourites, and playlists',
      'Event creation and RSVP system',
      'Admin approval workflow for artists, tracks, and events',
      'Support ticketing system with file attachments',
      'Custom download endpoint with nice filenames and progress toasts',
      'Responsive React frontend with Bootstrap'
    ],
    outcome: [
      'Fully functional MVP deployed on Render (backend) and Vercel (frontend)',
      'Demonstrates full‑stack capabilities including file uploads, auth, and complex relational queries',
      'Ready for pilot with real artists and fans'
    ],
    demo: 'https://backyardbeats.vercel.app/',
    repo: 'https://github.com/Emmanuel-Mukumbwa/backyardbeats',
    category: 'Platform'
  },
  {
    id: 1,
    slug: 'campustalent',
    title: 'CampusTalent',
    shortDescription: 'Student gig marketplace connecting students and recruiters.',
    description: `CampusTalent connects university students with vetted gigs and recruiters.
Built as a full-stack React + Node.js application with recruiter verification,
portfolio builder, and gig matching by skills.`,
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
    outcome: [
      'MVP launched for student testing',
      'Reduced manual matchmaking time',
      'Platform-ready for onboarding recruiters'
    ],
    demo: 'https://campus-talent-front-end-f28i.vercel.app/',
    repo: 'https://github.com/Emmanuel-Mukumbwa/campus-talent-frontend',
    category: 'Platform'
  },
  {
    id: 4,
    slug: 'tee-attachment',
    title: 'Tee Components & Communications — Industrial Attachment',
    shortDescription: 'Industrial attachment focusing on communications systems, diagnostics and final technical reporting.',
    description: `Industrial attachment at Tee Components & Communications. Work included site diagnostics, system commissioning, cabling checks,
signal troubleshooting, hands-on installations and preparation of a final technical attachment report validated by the industry supervisor.`,
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
    outcome: [
      'Final report validated by industry supervisor and academic coordinator',
      'Improved site checklist and handover documentation',
      'Demonstrated practical competency in communications diagnostics and reporting'
    ],
    demo: '',
    repo: '',
    category: 'Attachment / Field Work'
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
    outcome: [
      'Three fully functional lab topologies with detailed configuration files',
      'Demonstrates practical understanding of enterprise networking fundamentals',
      'Ready to showcase in interviews for networking roles'
    ],
    demo: '',
    repo: 'https://github.com/Emmanuel-Mukumbwa/ccna-portfolio-emmanuelMukumbwa',
    category: 'Networking'
  },
  {
    id: 2,
    slug: 'weather-app',
    title: 'Weather App',
    shortDescription: 'Real-time weather info for any location.',
    description: 'A responsive weather app using a public weather API, showing forecast and favorites.',
    heroImage: 'projects/weather.png',
    images: ['/projects/weather.png'],
    tech: ['React', 'OpenWeather API', 'Bootstrap'],
    role: 'Frontend',
    features: ['Search by city', 'Favorites', '7-day forecast'],
    outcome: ['Polished UI, mobile friendly'],
    demo: 'https://weather-app-vert-theta-10.vercel.app/',
    repo: '',
    category: 'Utility'
  },
  {
    id: 3, 
    slug: 'password-generator',
    title: 'Password Generator App',
    shortDescription: 'Secure, customizable password generator',
    description: 'Generate secure passwords with options for length, complexity and exclusion lists.',
    heroImage: 'projects/password.png',
    images: ['/screenshots/password-1.png'],
    tech: ['React'],
    role: 'Frontend',
    features: ['Copy to clipboard', 'Complexity options'],
    outcome: ['Useful utility with small footprint'],
    demo: 'https://password-generator-app-lime.vercel.app/',
    repo: '',
    category: 'Utility'
  },
  {
    id: 6,
    slug: 'cloudimart-prototype',
    title: 'Cloudimart – University E-commerce Prototype',
    shortDescription: 'E-commerce platform for groceries and stationery delivery within Mzuzu University community.',
    description: `A full-stack e-commerce prototype for Cloudimart Limited, a Malawian startup. 
Built with Laravel (backend) and Next.js (frontend). Features location‑based checkout restricted to Mzuzu University community 
using GPS validation, unique order ID generation, and delivery verification workflow.`,
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
    outcome: [
      'Working prototype demonstrating core e-commerce functionality with location restriction',
      'Ready for pilot testing within Mzuzu University community'
    ],
    demo: '', // Add demo URL if available
    repo: 'https://github.com/Emmanuel-Mukumbwa/cloudimart-university-ecommerce',
    category: 'E-commerce'
  },
  {
    id: 7,
    slug: 'everyday-tech',
    title: 'Everyday Tech – Ecommerce Landing Page',
    shortDescription: 'Responsive ecommerce landing page with product cards, cart drawer, and checkout.',
    description: `A modern ecommerce landing page built with React and Bootstrap. 
Features product listings, modal preview, cart drawer, toast notifications, and a front‑only checkout flow. 
Uses local product data and React context for cart state.`,
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
    outcome: [
      'Clean, reusable component structure',
      'Fully responsive and accessible',
      'Ready to connect to a real backend'
    ],
    demo: 'https://everyday-tech-store.vercel.app/',
    repo: 'https://github.com/Emmanuel-Mukumbwa/everyday-tech',
    category: 'Frontend'
  },
  {
    id: 8,
    slug: 'food-tourism-malawi',
    title: 'Malawi Food & Travel',
    shortDescription: 'Discover Malawi’s culinary delights and travel destinations.',
    description: `A Next.js website promoting food tourism and travel in Malawi. 
Features dynamic destination pages with category filtering, a full‑width hero, and responsive design. 
Built with Next.js, Bootstrap, and custom CSS modules.`,
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
    outcome: [
      'Production‑ready tourism website',
      'Optimized for SEO with server‑side rendering',
      'Showcases Malawi’s food and travel offerings'
    ],
    demo: 'https://malawifoodandtravel.vercel.app/',
    repo: 'https://github.com/Emmanuel-Mukumbwa/malawifoodandtravel',
    category: 'Tourism'
  }
];

export default projects;