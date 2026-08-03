import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const VPISPictures = () => {
  const [currentFolder, setCurrentFolder] = useState(null);
  const [lightboxData, setLightboxData] = useState({ isOpen: false, imageIndex: 0, images: [] });
  const galleryRef = useRef(null);

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
      id: 'competitions_science',
      name: 'Science Competition',
      description: 'CELEBRATING EXCELLENCE IN SCIENCE',
      faceImage: '/assets/images/competitions/science/school_photo_54.jpg',
      images: [
        '/assets/images/competitions/science/school_photo_54.jpg',
        '/assets/images/competitions/science/school_photo_55.jpg'
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
          <Link to="/" className="back-link">← Back to Home</Link>
          
          {!currentFolder && (
            <div className="gallery-folders-grid" ref={galleryRef}>
              {galleryFolders.map((folder, index) => (
                <div key={folder.id} className="gallery-folder" onClick={() => openFolder(folder)}>
                  <div className="folder-image-container">
                    <img src={folder.faceImage} alt={folder.name} />
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
                <button className="close-folder-btn" onClick={closeFolder}>✕</button>
              </div>
              <div className="folder-images-grid">
                {currentFolder.images.map((src, index) => (
                  <div key={index} className="folder-image" onClick={() => openLightbox(index)}>
                    <img src={src} alt={`${currentFolder.name} ${index + 1}`} />
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
          <button className="lightbox-close" onClick={closeLightbox}>&times;</button>
          <button 
            className="lightbox-arrow lightbox-prev" 
            onClick={(e) => { e.stopPropagation(); navigateLightbox(-1); }}
          >
            &#10094;
          </button>
          <img 
            src={lightboxData.images[lightboxData.imageIndex]} 
            alt={`${currentFolder?.name} ${lightboxData.imageIndex + 1}`}
            onClick={(e) => e.stopPropagation()}
          />
          <button 
            className="lightbox-arrow lightbox-next" 
            onClick={(e) => { e.stopPropagation(); navigateLightbox(1); }}
          >
            &#10095;
          </button>
        </div>
      )}
    </div>
  );
};

export default VPISPictures;