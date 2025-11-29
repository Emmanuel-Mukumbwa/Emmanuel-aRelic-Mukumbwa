// src/data/testimonials.js
// Converted to show references only (no public contact details).
// Avatars will be generated at runtime if missing.

import goodhopeAvatar from '../assets/avatars/test01.jpg';
import studentAvatar from '../assets/avatars/test02.jpg';
import lecturerAvatar from '../assets/avatars/test03.jpg';
import goodhopeLogo from '../assets/logos/test06.jpg';
import mzuniClubLogo from '../assets/logos/test05.jpg';
import paradoxLogo from '../assets/logos/test06.jpg';
import paychanguLogo from '../assets/logos/test04.jpg';

const testimonials = [
  {
    id: 1,
    name: 'Mr Hillary Namakhwa',
    role: 'Industry Supervisor',
    company: 'Tee Components & Communications',
    date: '—',
    quoteShort: 'Supervised the industrial attachment and signed off on the final technical report.',
    quoteFull:
      'Supervised the industrial attachment and assessed the technical final report. Confirmed competency across diagnostics and practical communications tasks.',
    avatar: goodhopeAvatar,
    logo: null,
    rating: 5
  },
  {
    id: 2,
    name: 'Mr R. Mukumbwa',
    role: 'Director',
    company: 'Paradox Technical College',
    date: '—',
    quoteShort: 'Partner and academic contact during instructional work and small projects.',
    quoteFull:
      'Worked closely on curriculum delivery and practical sessions. Provided mentorship and evaluation during the ICT instructor engagement.',
    avatar: lecturerAvatar,
    logo: paradoxLogo,
    rating: 4
  },
  {
    id: 3,
    name: 'Mr Mbauwo Simkoko',
    role: 'Supervisor',
    company: 'Chikwawa Prison Station',
    date: '—',
    quoteShort: 'Oversaw practical duties and local technical tasks during attachments.',
    quoteFull:
      'Oversaw practical duties and local technical tasks. Provided feedback on reliability and practical problem-solving.',
    avatar: studentAvatar,
    logo: null,
    rating: 4
  },
  {
    id: 4,
    name: 'Mr Donald Phiri',
    role: 'Research Project Supervisor',
    company: 'Mzuzu University',
    date: '—',
    quoteShort: 'Supervised final-year research and validated the project outputs.',
    quoteFull:
      'Provided supervision during the final-year research project, offering academic guidance and sign-off on the project deliverables.',
    avatar: null,
    logo: mzuniClubLogo,
    rating: 5
  }
];

export default testimonials;
