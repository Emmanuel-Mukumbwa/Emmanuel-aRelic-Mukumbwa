// src/data/projects.js
const projects = [
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
    repo: 'https://github.com/Emmanuel-Mukumbwa/campus-talent-frontend'
  },
  {
    id: 2,
    slug: 'weather-app',
    title: 'Weather App',
    shortDescription: 'Real-time weather info for any location.',
    description: 'A responsive weather app using a public weather API, showing forecast and favorites.',
    heroImage: '/screenshots/weather-hero.png',
    images: ['/screenshots/weather-1.png'],
    tech: ['React', 'OpenWeather API', 'Bootstrap'],
    role: 'Frontend',
    features: ['Search by city', 'Favorites', '7-day forecast'],
    outcome: ['Polished UI, mobile friendly'],
    demo: 'https://weather-app-vert-theta-10.vercel.app/',
    repo: ''
  },
  {
    id: 3,
    slug: 'password-generator',
    title: 'Password Generator App',
    shortDescription: 'Secure, customizable password generator',
    description: 'Generate secure passwords with options for length, complexity and exclusion lists.',
    heroImage: '/screenshots/password-hero.png',
    images: ['/screenshots/password-1.png'],
    tech: ['React'],
    role: 'Frontend',
    features: ['Copy to clipboard', 'Complexity options'],
    outcome: ['Useful utility with small footprint'],
    demo: 'https://password-generator-app-lime.vercel.app/',
    repo: ''
  }
];

export default projects;
