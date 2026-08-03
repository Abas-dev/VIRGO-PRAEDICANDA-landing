import { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';

const Management = () => {
  const galleryRef = useRef(null);

  // Management team photos data
  const managementPairs = [
    [
      { src: "/assets/images/management/school_photo_2.jpg", alt: "Management Team Member" },
      { src: "/assets/images/management/school_photo_3.jpg", alt: "Management Team Member" }
    ],
    [
      { src: "/assets/images/management/school_photo_4.jpg", alt: "Management Team Member" },
      { src: "/assets/images/management/school_photo_5.jpg", alt: "Management Team Member" }
    ],
    [
      { src: "/assets/images/management/school_photo_6.jpg", alt: "Management Team Member" },
      { src: "/assets/images/management/school_photo_7.jpg", alt: "Management Team Member" }
    ],
    [
      { src: "/assets/images/management/school_photo_8.jpg", alt: "Management Team Member" },
      { src: "/assets/images/management/school_photo_9.jpg", alt: "Management Team Member" }
    ],
    [
      { src: "/assets/images/management/school_photo_10.jpg", alt: "Management Team Member" },
      { src: "/assets/images/management/school_photo_11.jpg", alt: "Management Team Member" }
    ],
    [
      { src: "/assets/images/management/school_photo_29.jpg", alt: "Management Team Member" },
      { src: "/assets/images/management/school_photo_30.jpg", alt: "Management Team Member" }
    ],
    [
      { src: "/assets/images/management/school_photo_34.jpg", alt: "Management Team Member" },
      { src: "/assets/images/management/school_photo_33.jpg", alt: "Management Team Member" }
    ]
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

    const pairs = galleryRef.current?.querySelectorAll('.management-pair');
    pairs?.forEach((pair, index) => {
      pair.style.animationDelay = `${(index + 1) * 0.1}s`;
      observer.observe(pair);
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
        <div className="management-gallery" ref={galleryRef}>
          {managementPairs.map((pair, pairIndex) => (
            <div key={pairIndex} className="management-pair">
              {pair.map((member, memberIndex) => (
                <div key={memberIndex} className="management-item">
                  <img src={member.src} alt={member.alt} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Management;