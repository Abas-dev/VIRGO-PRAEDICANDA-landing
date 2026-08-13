import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const VPISPictures = () => {
  const [currentFolder, setCurrentFolder] = useState(null);
  const [lightboxData, setLightboxData] = useState({ isOpen: false, imageIndex: 0, images: [] });

  const galleryFolders = [
    {
      id: 'farm',
      name: 'Day on the Farm',
      description: 'DAY ON THE FARM',
      faceImage: '/assets/images/farm/school_photo_78.jpg',
      images: [
        '/assets/images/farm/school_photo_78.jpg',
        '/assets/images/farm/school_photo_79.jpg',
        '/assets/images/farm/school_photo_80.jpg',
        '/assets/images/farm/school_photo_81.jpg',
        '/assets/images/farm/school_photo_82.jpg',
        '/assets/images/farm/school_photo_83.jpg',
        '/assets/images/farm/school_photo_84.jpg',
        '/assets/images/farm/school_photo_85.jpg',
        '/assets/images/farm/school_photo_86.jpg',
        '/assets/images/farm/school_photo_87.jpg'
      ]
    },
    {
      id: 'art',
      name: 'Art Exhibition',
      description: 'CHILDREN\'S ART EXHIBITION',
      faceImage: '/assets/images/art/creative art.jpeg',
      images: [
        '/assets/images/art/creative art.jpeg',
        '/assets/images/art/school_photo_69.jpg',
        '/assets/images/art/school_photo_70.jpg',
        '/assets/images/art/school_photo_71.jpg',
        '/assets/images/art/school_photo_72.jpg',
        '/assets/images/art/school_photo_73.jpg',
        '/assets/images/art/school_photo_74.jpg',
        '/assets/images/art/school_photo_75.jpg',
        '/assets/images/art/school_photo_76.jpg',
        '/assets/images/art/school_photo_77.jpg'
      ]
    },
    {
      id: 'excursion',
      name: 'Excursions',
      description: 'EXCURSION TO DIFFERENTIAL ALUMINIUM ROOFING AND WINDOWS',
      faceImage: '/assets/images/excursion/excursion 1.jpeg',
      images: [
        '/assets/images/excursion/excursion 1.jpeg',
        '/assets/images/excursion/excursion 2.jpeg',
        '/assets/images/excursion/excursion 3.jpeg',
        '/assets/images/excursion/excursion 4.jpeg',
        '/assets/images/excursion/school_photo_56.jpg',
        '/assets/images/excursion/school_photo_57.jpg',
        '/assets/images/excursion/school_photo_58.jpg',
        '/assets/images/excursion/school_photo_63.jpg',
        '/assets/images/excursion/school_photo_64.jpg',
        '/assets/images/excursion/school_photo_65.jpg',
        '/assets/images/excursion/school_photo_66.jpg',
        '/assets/images/excursion/school_photo_67.jpg',
        '/assets/images/excursion/school_photo_68.jpg'
      ]
    },
    {
      id: 'interhouse',
      name: 'Sports',
      description: 'INTERHOUSE SPORT',
      faceImage: '/assets/images/interhouse/school_photo_35.jpg',
      images: [
        '/assets/images/interhouse/school_photo_35.jpg',
        '/assets/images/interhouse/school_photo_36.jpg',
        '/assets/images/interhouse/school_photo_37.jpg',
        '/assets/images/interhouse/school_photo_38.jpg',
        '/assets/images/interhouse/school_photo_39.jpg',
        '/assets/images/interhouse/school_photo_40.jpg',
        '/assets/images/interhouse/school_photo_41.jpg',
        '/assets/images/interhouse/school_photo_42.jpg',
        '/assets/images/interhouse/school_photo_43.jpg',
        '/assets/images/interhouse/school_photo_44.jpg'
      ]
    },
    {
      id: 'home_econs',
      name: 'Home Economics',
      description: 'HOME ECONOMICS PRACTICAL DAY',
      faceImage: '/assets/images/home_econs/school_photo_45.jpg',
      images: [
        '/assets/images/home_econs/school_photo_45.jpg',
        '/assets/images/home_econs/school_photo_46.jpg',
        '/assets/images/home_econs/school_photo_47.jpg',
        '/assets/images/home_econs/school_photo_48.jpg',
        '/assets/images/home_econs/school_photo_49.jpg',
        '/assets/images/home_econs/school_photo_50.jpg',
        '/assets/images/home_econs/school_photo_51.jpg'
      ]
    },
    {
      id: 'financial',
      name: 'Financial Literacy',
      description: 'FINANCIAL LITERACY PROGRAMME – VPIS 2026',
      faceImage: '/assets/images/literacy/financial/school_photo_22.jpg',
      images: [
        '/assets/images/literacy/financial/school_photo_22.jpg',
        '/assets/images/literacy/financial/school_photo_88.jpg',
        '/assets/images/literacy/financial/school_photo_89.jpg',
        '/assets/images/literacy/financial/school_photo_90.jpg',
        '/assets/images/literacy/financial/school_photo_91.jpg',
        '/assets/images/literacy/financial/school_photo_92.jpg',
        '/assets/images/literacy/financial/school_photo_93.jpg'
      ]
    },
    {
      id: 'graduation',
      name: 'Graduation Ceremony',
      description: 'GRADUATION CEREMONY – VPIS CLASS OF 2026',
      faceImage: '/assets/images/graduation/graduation_photo_1.jpg',
      images: [
        '/assets/images/graduation/graduation_photo_1.jpg',
        '/assets/images/graduation/graduation_photo_2.jpg',
        '/assets/images/graduation/graduation_photo_3.jpg',
        '/assets/images/graduation/graduation_photo_4.jpg',
        '/assets/images/graduation/graduation_photo_5.jpg',
        '/assets/images/graduation/graduation_photo_6.jpg',
        '/assets/images/graduation/graduation_photo_7.jpg',
        '/assets/images/graduation/graduation_photo_8.jpg',
        '/assets/images/graduation/graduation_photo_9.jpg',
        '/assets/images/graduation/graduation_photo_10.jpg',
        '/assets/images/graduation/graduation_photo_11.jpg',
        '/assets/images/graduation/graduation_photo_12.jpg',
        '/assets/images/graduation/graduation_photo_13.jpg',
        '/assets/images/graduation/graduation_photo_14.jpg',
        '/assets/images/graduation/graduation_photo_15.jpg',
        '/assets/images/graduation/graduation_photo_16.jpg',
        '/assets/images/graduation/graduation_photo_17.jpg',
        '/assets/images/graduation/graduation_photo_18.jpg',
        '/assets/images/graduation/graduation_photo_19.jpg',
        '/assets/images/graduation/graduation_photo_20.jpg',
        '/assets/images/graduation/graduation_photo_21.jpg',
        '/assets/images/graduation/graduation_photo_22.jpg',
        '/assets/images/graduation/graduation_photo_23.jpg',
        '/assets/images/graduation/graduation_photo_24.jpg',
        '/assets/images/graduation/graduation_photo_25.jpg',
        '/assets/images/graduation/graduation_photo_26.jpg',
        '/assets/images/graduation/graduation_photo_27.jpg',
        '/assets/images/graduation/graduation_photo_28.jpg',
        '/assets/images/graduation/graduation_photo_29.jpg',
        '/assets/images/graduation/graduation_photo_30.jpg',
        '/assets/images/graduation/graduation_photo_31.jpg',
        '/assets/images/graduation/graduation_photo_32.jpg'
      ]
    },
    {
      id: 'career_day',
      name: 'Career Day',
      description: 'CAREER DAY – DISCOVERING FUTURE PATHWAYS',
      faceImage: '/assets/images/career/career1.jpg',
      images: [
        '/assets/images/career/career1.jpg',
        '/assets/images/career/career2.jpg',
        '/assets/images/career/career3.jpg',
        '/assets/images/career/career4.jpg',
        '/assets/images/career/career5.jpg',
        '/assets/images/career/career6.jpg',
        '/assets/images/career/career7.jpg',
        '/assets/images/career/career8.jpg',
        '/assets/images/career/career9.jpg',
        '/assets/images/career/career10.jpg',
        '/assets/images/career/career11.jpg',
        '/assets/images/career/career12.jpg',
        '/assets/images/career/career13.jpg'
      ]
    },
    {
      id: 'museum',
      name: 'Visit to the Museum',
      description: 'VISIT TO THE MUSEUM – EXPLORING HISTORY AND CULTURE',
      faceImage: '/assets/images/museum/museum_photo_1.jpg',
      images: [
        '/assets/images/museum/museum_photo_1.jpg',
        '/assets/images/museum/museum_photo_2.jpg',
        '/assets/images/museum/museum_photo_3.jpg',
        '/assets/images/museum/museum_photo_4.jpg',
        '/assets/images/museum/museum_photo_5.jpg',
        '/assets/images/museum/museum_photo_6.jpg',
        '/assets/images/museum/museum_photo_7.jpg',
        '/assets/images/museum/museum_photo_8.jpg',
        '/assets/images/museum/museum_photo_9.jpg',
        '/assets/images/museum/museum_photo_10.jpg'
      ]
    },
    {
      id: 'competitions_science',
      name: 'Science Competition',
      description: 'CELEBRATING EXCELLENCE IN SCIENCE',
      faceImage: '/assets/images/competitions/science/school_photo_54.jpg',
      images: [
        '/assets/images/competitions/science/school_photo_54.jpg',
        '/assets/images/competitions/science/school_photo_55.jpg',
        '/assets/images/competitions/science/science_photo_1.jpg',
        '/assets/images/competitions/science/science_photo_2.jpg',
        '/assets/images/competitions/science/science_photo_3.jpg',
        '/assets/images/competitions/science/science_photo_4.jpg',
        '/assets/images/competitions/science/science_photo_5.jpg',
        '/assets/images/competitions/science/science_photo_6.jpg',
        '/assets/images/competitions/science/science_photo_7.jpg',
        '/assets/images/competitions/science/science_photo_8.jpg'
      ]
    },
    {
      id: 'competitions_bee',
      name: 'Spelling Bee',
      description: 'HEARTFELT CONGRATULATIONS',
      faceImage: '/assets/images/competitions/bee/school_photo_52.jpg',
      images: [
        '/assets/images/competitions/bee/school_photo_52.jpg',
        '/assets/images/competitions/bee/school_photo_53.jpg',
        '/assets/images/competitions/bee/school_photo_59.jpg',
        '/assets/images/competitions/bee/school_photo_60.jpg',
        '/assets/images/competitions/bee/school_photo_61.jpg',
        '/assets/images/competitions/bee/school_photo_62.jpg'
      ]
    },
    {
      id: 'literacy_book',
      name: 'Book Day',
      description: 'LITERARY AND BOOK DAY REVIEW',
      faceImage: '/assets/images/literacy/book_day/school_photo_17.jpg',
      images: [
        '/assets/images/literacy/book_day/school_photo_17.jpg',
        '/assets/images/literacy/book_day/school_photo_18.jpg',
        '/assets/images/literacy/book_day/school_photo_19.jpg',
        '/assets/images/literacy/book_day/school_photo_20.jpg',
        '/assets/images/literacy/book_day/school_photo_21.jpg'
      ]
    },
    {
      id: 'literacy_dental',
      name: 'Dental Care',
      description: 'DENTAL CARE DAY',
      faceImage: '/assets/images/literacy/dental/school_photo_23.jpg',
      images: [
        '/assets/images/literacy/dental/school_photo_23.jpg',
        '/assets/images/literacy/dental/school_photo_24.jpg',
        '/assets/images/literacy/dental/school_photo_25.jpg',
        '/assets/images/literacy/dental/school_photo_26.jpg',
        '/assets/images/literacy/dental/school_photo_27.jpg',
        '/assets/images/literacy/dental/school_photo_28.jpg'
      ]
    }
  ];

  const openFolder = (folder) => {
    setCurrentFolder(folder);
  };

  const closeFolder = () => {
    setCurrentFolder(null);
  };

  const openLightbox = (imageIndex) => {
    if (!currentFolder) return;
    setLightboxData({
      isOpen: true,
      imageIndex,
      images: currentFolder.images
    });
  };

  const closeLightbox = () => {
    setLightboxData(prev => ({ ...prev, isOpen: false }));
  };

  const navigateLightbox = (direction) => {
    setLightboxData(prev => ({
      ...prev,
      imageIndex: (prev.imageIndex + direction + prev.images.length) % prev.images.length
    }));
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxData.isOpen) return;
      
      if (e.key === 'ArrowLeft') {
        navigateLightbox(-1);
      } else if (e.key === 'ArrowRight') {
        navigateLightbox(1);
      } else if (e.key === 'Escape') {
        closeLightbox();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [lightboxData.isOpen]);

  // Lock page scroll while the lightbox is open
  useEffect(() => {
    if (lightboxData.isOpen) {
      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = previousOverflow;
      };
    }
  }, [lightboxData.isOpen]);

  return (
    <div className="vpis-pictures-page">
      <Navbar />
      
      {/* Hero */}
      <div className="about-hero">
        <div className="hero-label">School Gallery</div>
        <h1 className="hero-title">VPIS in Pictures</h1>
        <p className="hero-tagline">Capturing moments of learning, growth, and excellence.</p>
      </div>

      <div className="content">
        <div className="container">
          {!currentFolder && (
            <div className="gallery-folders-grid">
              {galleryFolders.map((folder) => (
                <div
                  key={folder.id}
                  className="gallery-folder"
                  role="button"
                  tabIndex={0}
                  aria-label={`Open ${folder.name} album`}
                  onClick={() => openFolder(folder)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      openFolder(folder);
                    }
                  }}
                >
                  <div className="folder-image-container">
                    <img src={folder.faceImage} alt={folder.name} loading="lazy" decoding="async" />
                    <div className="folder-overlay">
                      <div className="folder-description">{folder.description}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {currentFolder && (
            <div className="folder-detail-view active">
              <div className="folder-header">
                <h3>{currentFolder.name}</h3>
                <button className="close-folder-btn" onClick={closeFolder} aria-label="Close album">✕</button>
              </div>
              <div className="folder-images-grid">
                {currentFolder.images.map((src, index) => (
                  <div
                    key={src}
                    className="folder-image"
                    role="button"
                    tabIndex={0}
                    aria-label={`View ${currentFolder.name} photo ${index + 1}`}
                    onClick={() => openLightbox(index)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        openLightbox(index);
                      }
                    }}
                  >
                    <img src={src} alt={`${currentFolder.name} ${index + 1}`} loading="lazy" decoding="async" />
                    <div className="image-overlay"><span>View</span></div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxData.isOpen && (
        <div className="lightbox active" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox} aria-label="Close image viewer">&times;</button>
          <button
            className="lightbox-arrow lightbox-prev"
            aria-label="Previous image"
            onClick={(e) => { e.stopPropagation(); navigateLightbox(-1); }}
          >
            &#10094;
          </button>
          <img
            src={lightboxData.images[lightboxData.imageIndex]}
            alt={`${currentFolder?.name || 'Gallery'} ${lightboxData.imageIndex + 1}`}
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="lightbox-arrow lightbox-next"
            aria-label="Next image"
            onClick={(e) => { e.stopPropagation(); navigateLightbox(1); }}
          >
            &#10095;
          </button>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default VPISPictures;
