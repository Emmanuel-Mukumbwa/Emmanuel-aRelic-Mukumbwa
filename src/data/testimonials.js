// src/data/testimonials.js
// Central testimonials data. Images are imported so bundlers will include them.
// Put avatar/logo files under src/assets/avatars and src/assets/logos

import goodhopeAvatar from '../assets/avatars/test01.jpg';
import studentAvatar from '../assets/avatars/test02.jpg';
import lecturerAvatar from '../assets/avatars/test03.jpg';
import paychanguAvatar from '../assets/avatars/test03.jpg'; // new - add file
import recruiterAvatar from '../assets/avatars/test03.jpg'; // new - add file
import goodhopeLogo from '../assets/logos/test06.jpg';
import mzuniClubLogo from '../assets/logos/test05.jpg';
import paradoxLogo from '../assets/logos/test06.jpg';
import paychanguLogo from '../assets/logos/test04.jpg'; // new - add file
import defaultAvatar from '../assets/default.jpg';

const testimonials = [
  {
    id: 1,
    name: 'GoodHope Ministries',
    role: 'Client (Mzuzu NGO)',
    company: 'GoodHope Ministries',
    date: 'Mar 2024',
    quoteShort: 'Reliable and very responsive — built us a simple, fast site that our team can update without fuss.',
    quoteFull:
      'Reliable and very responsive — built us a simple, fast site that our team can update without fuss. The handover was clear, and Emmanuel followed up after deployment to help with the initial content updates. Highly recommended for small NGOs.',
    avatar: goodhopeAvatar || defaultAvatar,
    logo: goodhopeLogo,
    rating: 5
  },
  
  {
    id: 3,
    name: 'Lecturer — Paradox',
    role: 'Partner (Paradox Technical College)',
    company: 'Paradox Technical College',
    date: 'Dec 2023',
    quoteShort: 'Clear explanations and practical workshops — students came away with real skills.',
    quoteFull:
      'Clear explanations and practical workshops — students came away with real skills. Emmanuel tailored examples to local contexts which made the sessions engaging and directly applicable.',
    avatar: lecturerAvatar || defaultAvatar,
    logo: paradoxLogo,
    rating: 4
  },
  // New: PayChangu integration testimonial (friend / developer help)
  {
    id: 4,
    name: 'Product Owner — Local e-commerce',
    role: 'Merchant (Lilongwe)',
    company: 'Local e-commerce',
    date: 'Jun 2025',
    quoteShort: 'Helped integrate PayChangu so our store accepts mobile money and bank transfers reliably.',
    quoteFull:
      'Emmanuel helped us integrate the PayChangu payment gateway into our store. He set up sandbox keys, implemented secure webhook handling, and tested mobile money and instant bank-transfer flows end-to-end. After go-live he assisted with monitoring and small fixes — payments have been stable since. Highly recommended for any merchant needing a dependable payments integration.',
    avatar: paychanguAvatar || defaultAvatar,
    logo: paychanguLogo,
    rating: 5
  },
  // New: CampusTalent / recruiter testimonial
  {
    id: 5,
    name: 'Recruiter — Local Startup',
    role: 'Recruiter',
    company: 'Mzuzu Startup',
    date: 'Aug 2025',
    quoteShort: 'Implemented a verification and escrow-like flow that gave us confidence to hire students through the platform.',
    quoteFull:
      'We used Emmanuel’s CampusTalent platform to hire interns — the recruiter verification and escrow-style workflow reduced risk and made payments straightforward. The UI was intuitive and support was prompt when we needed small tweaks.',
    avatar: recruiterAvatar || defaultAvatar,
    logo: mzuniClubLogo,
    rating: 5
  }
];

export default testimonials;
