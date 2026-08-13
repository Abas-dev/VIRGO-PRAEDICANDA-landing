# VPIS Website - Quick Reference Guide

## 🔗 All Website Pages

### Main Navigation
- **Home**: `/` - Homepage with hero, academics, FAQ, contact
- **About**: `/about` - Vision, mission, core values, school history
- **Academics**: `/academics` - Curriculum, subjects, training programs
- **Admissions**: `/admissions` - Application process, requirements, downloads
- **Facilities**: `/facilities` - Campus facilities and locations
- **Management**: `/management` - Leadership team and staff
- **Proprietor Message**: `/proprietor-message` - Dr. C.V. Dimmwobi's message
- **Gallery**: `/vpis-pictures` - School photos and events

### New Pages
- **Careers**: `/careers` - Employment opportunities
- **Resources**: `/resources` - Downloads, documents, news
- **Fees**: `/fees` - Tuition and payment information
- **Accreditations**: `/accreditations` - Partnerships and recognition

### Legal Pages
- **Privacy Policy**: `/privacy-policy`
- **Terms of Use**: `/terms-of-use`
- **Safeguarding Policy**: `/safeguarding-policy`

### Special Sections
- **FAQ**: `/#faq` - Frequently asked questions (on homepage)
- **Contact**: `/#contact` - Contact information (on homepage)

---

## 📱 Contact Information

### Campus Locations
**Campus 1 (Woji)**
- Address: No 9 Marina Close, Woji, Port Harcourt, Rivers State, Nigeria

**Campus 2 (Chinda)**
- Address: No 100 Chinda, Ada George, Port Harcourt, Rivers State, Nigeria

### Contact Details
- **Phone**: +234 913 255 4783
- **Email**: Virgopraedicandaintschool@gmail.com
- **Alt Email**: Virgopotensintentionalschool@gmail.com
- **WhatsApp**: +234 913 255 4783

---

## 🎓 Curriculum Summary

### Primary School
- **Curriculum**: Pearson Edexcel iPrimary

### Secondary School
- **Key Stage 3**: Cambridge Checkpoint
- **Key Stage 4**: Cambridge IGCSE

### Global Exams
- WAEC (West African Examinations Council)
- SAT (Scholastic Assessment Test)
- IELTS (International English Language Testing System)

### Future
- **Sixth Form College**: Proposed/Coming Soon (UK Partnership)

---

## 📥 Available Downloads

Located at `/resources`:

### Currently Available
1. **School Prospectus** - PDF (2026/2027 session)
2. **Admission Form** - PDF
3. **Year Book 2026** - PDF

### Coming Soon
- Fee Schedule
- Academic Calendar
- Parent Handbook

---

## 🎯 Brand Messaging

### Primary Tagline
**"Raising Lights for the World"**

### Mission
"To develop young men and women with active and creative minds, a sense of understanding and compassion for others, and the courage to act on their beliefs."

### Vision
"To inspire and nurture excellent children for global impact."

### Core Values
- Academic Excellence
- Christian Character
- Faith in God
- Love & Compassion for Others
- Discipline
- Independence & Initiative

---

## 🔧 Technical Information

### Build Commands
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run code linter
```

### Key Technologies
- **Framework**: React 19
- **Router**: React Router DOM 7
- **Build Tool**: Vite 8
- **Animations**: AOS (Animate On Scroll), Framer Motion
- **Icons**: Lucide React, React Icons

### File Structure
```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── OurAchievements.jsx
│   ├── SchoolStats.jsx
│   └── whatsapp-widget/
├── pages/
│   ├── About.jsx
│   ├── Academics.jsx
│   ├── Admissions.jsx
│   ├── Facilities.jsx
│   ├── Management.jsx
│   ├── ProprietorMessage.jsx
│   ├── VPISPictures.jsx
│   ├── Careers.jsx
│   ├── Resources.jsx
│   ├── Fees.jsx
│   ├── Accreditations.jsx
│   ├── PrivacyPolicy.jsx
│   ├── TermsOfUse.jsx
│   └── SafeguardingPolicy.jsx
├── data/
│   └── faqData.js
├── App.jsx (Homepage)
├── Router.jsx
└── main.jsx
```

---

## 📋 FAQ Quick Reference

### Admissions
- **Q**: Do you take Muslim children?
- **A**: Yes, all faiths welcome

- **Q**: What is the school academic year?
- **A**: September to July

- **Q**: What age groups do you admit?
- **A**: Creche (6 weeks) through Secondary School

### Facilities
- **Q**: Do you have school bus service?
- **A**: No, parents responsible for transportation

- **Q**: Do you have boarding facilities?
- **A**: No, day school only

### Fees
- **Q**: What are your school fees?
- **A**: Fees depend on class level - contact admissions

### Scholarships
- **Q**: Do you offer scholarships?
- **A**: Yes, academic excellence scholarships available

---

## 🎨 Brand Colors & Assets

### Logo
Location: `/assets/images/logo.png`

### Accreditation Logos
- Cambridge: `/assets/images/cambridge.png`
- Pearson: `/assets/images/pearson.png`
- Scholastic: `/assets/images/scholastic.png`

### Hero Images
- Carousel 1: `/assets/images/carousel1.png`
- Carousel 2: `/assets/images/carousel2.png`
- Carousel 3: `/assets/images/carousel3.png`
- Carousel 4: `/assets/images/carousel4.png`

---

## 🔗 External Links

### Portal
- **School Portal**: https://portal.schoolpaddi.com

### Social/Communication
- **WhatsApp**: Direct link to school WhatsApp number integrated

### Accreditation Bodies
- Cambridge International
- Pearson Edexcel
- WAEC
- NERDC

---

## 📝 Content Update Guidelines

### To Update FAQ
Edit: `src/data/faqData.js`

### To Add Resources/Documents
Edit: `src/pages/Resources.jsx` - Add to `resources` array

### To Update Contact Info
Edit multiple files:
- `src/App.jsx` (Contact section)
- `src/components/Footer.jsx`

### To Update Curriculum Info
Edit: `src/pages/Academics.jsx`

### To Update About Info
Edit: `src/pages/About.jsx`

---

## ⚡ Quick Commands

### View Website Locally
```bash
npm run dev
# Opens at http://localhost:5173
```

### Build for Production
```bash
npm run build
# Creates /dist folder
```

### Deploy
Upload contents of `/dist` folder to your hosting provider

---

## 📞 Support

For technical support or questions about the website:
- Contact the development team
- Refer to `WEBSITE_UPDATE_SUMMARY.md` for detailed changes
- Check `IMPLEMENTATION_CHECKLIST.md` for completion status

---

**Last Updated**: January 2026
**Website Version**: 2.0
**Status**: ✅ Production Ready
