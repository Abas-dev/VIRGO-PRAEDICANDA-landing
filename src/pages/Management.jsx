import { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Management = () => {
  const galleryRef = useRef(null);

  // Management team photos data
  const managementMembers = [
    { src: "/assets/images/management/school_photo_6.jpg", alt: "Proprietress", title: "Dr. Vivian Chinaza Dimmwobi -Proprietress and Director" },
    { src: "/assets/images/management/school_photo_29.jpg", alt: "Dean", title: "Chinedu Joseph -Dean of Studies, Chinda Campus" },
    { src: "/assets/images/management/school_photo_10.jpg", alt: "Head of Academics", title: "Ekeh Ifuynanya Blessing -Head of Academics" },
    { src: "/assets/images/management/school_photo_34.jpg", alt: "HOD", title: "Mrs Anthonia Kelechi Osuji -Head of Department, Nursery" },
    { src: "/assets/images/management/school_photo_2.jpg", alt: "HOS", title: "Mr Osuka Chidiebere -Head of School" },
    { src: "/assets/images/management/school_photo_8.jpg", alt: "Principal", title: "Mr Godwin John -Principal, Chinda Campus" },
    { src: "/assets/images/management/school_photo_4.jpg", alt: "School Admin", title: "Mrs Obiano Lynda -School Administrator" }
  ];

  // Intersection Observer for animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1 }
    );

    const items = galleryRef.current?.querySelectorAll('.management-item-single');
    items?.forEach((item, index) => {
      item.style.animationDelay = `${(index + 1) * 0.1}s`;
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="management-page">
      <Navbar />
      
      {/* Hero */}
      <div className="about-hero">
        <div className="hero-label">Leadership Excellence</div>
        <h1 className="hero-title">Our Management Team</h1>
        <p className="hero-tagline">
          Dedicated leaders committed to educational excellence and student
          success.
        </p>
      </div>

      <div className="page">
        {/* Management Gallery with animations */}
        <div className="management-gallery-single" ref={galleryRef}>
          {managementMembers.map((member, index) => (
            <div key={index} className="management-item-single">
              <img
                src={member.src}
                alt={member.alt}
                loading="lazy"
                decoding="async"
              />
              <h3 className="management-title">{member.title}</h3>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Management;
