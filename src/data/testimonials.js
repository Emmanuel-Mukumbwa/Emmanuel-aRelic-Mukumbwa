// src/data/testimonials.js
// Central testimonials data. Images are imported so bundlers will include them.
// Put avatar/logo files under src/assets/avatars and src/assets/logos

import goodhopeAvatar from '../assets/avatars/test01.jpg';
import studentAvatar from '../assets/avatars/test02.jpg';
import lecturerAvatar from '../assets/avatars/test03.jpg';
import goodhopeLogo from '../assets/logos/test04.jpg';
import mzuniClubLogo from '../assets/logos/test05.jpg';
import paradoxLogo from '../assets/logos/test06.jpg';
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
    id: 2,
    name: 'Campus Club President',
    role: 'Student leader (Mzuni)',
    company: 'Mzuni Robotics Club',
    date: 'Jan 2025',
    quoteShort: 'Helped us build a lightweight event sign-up system that actually made attendance tracking painless.',
    quoteFull:
      'Helped us build a lightweight event sign-up system that actually made attendance tracking painless. The system worked well on phones and used very little data — perfect for our members.',
    avatar: studentAvatar || defaultAvatar,
    logo: mzuniClubLogo,
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
  }
];

export default testimonials;
