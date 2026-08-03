# Design Document: Home Page Enhancement

## Overview

This design document outlines the technical approach for enhancing the Virgo Praedicanda International School home page. The enhancement focuses on four main areas: removing the About section, implementing an advanced hero carousel with navigation controls and text overlays, relocating existing hero text content, and integrating a comprehensive gallery section that reuses existing gallery functionality.

The design maintains the existing responsive architecture, color scheme, and visual hierarchy while modernizing the user experience through enhanced interactivity and improved content organization.

## Architecture

### Component Structure

The enhanced home page follows a React component architecture with these main components:

```
App (Main Container)
├── Navbar (Unchanged)
├── Hero (Enhanced Carousel + Relocated Text)
├── Testimonials (Unchanged)  
├── Contact (Unchanged)
├── Gallery (New Integration)
├── SchoolBrand (Unchanged)
└── Footer (Unchanged)
```

### State Management

The application uses React's built-in `useState` hook for component-level state management:

- **Hero Carousel**: Manages current slide index, auto-scroll timing, and pause state
- **Gallery Component**: Manages view mode (carousel vs grid), lightbox state, and current image index
- **Navigation**: Maintains mobile menu state

### Data Flow

1. **Hero Carousel Data**: Static image array with metadata for each slide
2. **Gallery Data**: Reuses existing image array from current Gallery component  
3. **Content Data**: Hero text content moved to appropriate section based on semantic hierarchy

## Components and Interfaces

### Enhanced Hero Component

The Hero component is restructured to prioritize the carousel while maintaining content accessibility:

#### HeroCarousel Subcomponent

**Props Interface:**
```typescript
interface HeroCarouselSlide {
  src: string;
  alt: string;
  overlay?: {
    title: string;
    subtitle?: string;
  };
}

interface HeroCarouselProps {
  slides: HeroCarouselSlide[];
  autoScrollInterval?: number;  // Default: 4000ms
  pauseOnHover?: boolean;      // Default: true
  showArrows?: boolean;        // Default: true
  showDots?: boolean;          // Default: true
}
```

**Key Features:**
- **Auto-scroll**: Configurable timing with pause on user interaction
- **Manual Navigation**: Previous/Next arrows and dot indicators
- **Content Overlays**: Optional text overlays for each slide
- **Responsive Design**: Adapts to mobile and desktop breakpoints
- **Accessibility**: Proper ARIA labels and keyboard navigation support

**State Management:**
```typescript
const [currentSlide, setCurrentSlide] = useState(0);
const [isPaused, setIsPaused] = useState(false);
const [isUserInteracting, setIsUserInteracting] = useState(false);
```

#### Content Relocation Strategy

The existing "Building Global Champions" content is relocated to a dedicated section between Hero and Testimonials:

**New Component: HeroContentSection**
```typescript
interface HeroContentSectionProps {
  tagline: string;
  title: string;
  description: string;
  showActions?: boolean;
}
```

### Gallery Integration Component

The Gallery component integrates existing gallery functionality from the standalone gallery page:

#### Gallery Component Interface

**Props:**
```typescript
interface GalleryImage {
  src: string;
  alt: string;
  category?: string;
}

interface GalleryProps {
  images: GalleryImage[];
  initialView?: 'carousel' | 'grid';  // Default: 'carousel'
  showViewToggle?: boolean;           // Default: true
  lightboxEnabled?: boolean;          // Default: true
}
```

**Features:**
- **Dual View Modes**: Horizontal carousel and grid layout
- **Lightbox Integration**: Full-screen image viewing with navigation
- **Responsive Layout**: Adapts grid columns based on screen size
- **Smooth Transitions**: CSS transforms for image scaling and transitions

### Navigation Updates

The navigation component requires minimal updates:

**Changes:**
- Remove or update About Us link based on content relocation decision
- Ensure Gallery link points to new integrated section
- Maintain existing mobile navigation functionality

## Data Models

### Hero Carousel Data Structure

```javascript
const heroCarouselSlides = [
  {
    src: "/assets/images/primary.jpeg",
    alt: "Primary school students in classroom",
    overlay: {
      title: "Excellence in Primary Education",
      subtitle: "Building strong foundations for lifelong learning"
    }
  },
  {
    src: "/assets/images/class photo_3.jpeg", 
    alt: "Class graduation ceremony",
    overlay: {
      title: "Celebrating Achievement",
      subtitle: "Recognizing student success and growth"
    }
  },
  {
    src: "/assets/images/students.jpeg",
    alt: "Students engaged in learning activities",
    overlay: {
      title: "Interactive Learning Environment",
      subtitle: "Fostering creativity and critical thinking"
    }
  },
  {
    src: "/assets/images/students_3.jpeg",
    alt: "Students participating in group activities",
    overlay: {
      title: "Collaborative Learning",
      subtitle: "Developing teamwork and communication skills"
    }
  }
];
```

### Gallery Data Integration

The gallery reuses the existing photo collection with enhanced metadata:

```javascript
const galleryImages = [
  { src: "/assets/images/kids_2.jpeg", alt: "Students enjoying outdoor activities" },
  { src: "/assets/images/class photo_3.jpeg", alt: "Class group photo" },
  { src: "/assets/images/creative art.jpeg", alt: "Creative arts and crafts session" },
  { src: "/assets/images/excursion 1.jpeg", alt: "Educational excursion - students exploring" },
  // ... additional images from existing collection
];
```

### Content Migration Schema

**Hero Text Content (to be relocated):**
```javascript
const heroContent = {
  tagline: "Building Global Champions",
  title: "VIRGO PRAEDICANDA INTERNATIONAL SCHOOL",
  description: "We develop young men and women with active and creative minds, a sense of compassion, courage, and a strong Christian character, ready to thrive in a rapidly changing world."
};
```

## Error Handling

### Image Loading

**Hero Carousel:**
- Implement lazy loading for non-active slides
- Provide fallback placeholder for failed image loads
- Graceful degradation if JavaScript is disabled

**Gallery Component:**
- Progressive image loading with skeleton placeholders
- Error boundaries for individual image failures
- Retry mechanism for failed network requests

### User Interaction Errors

**Carousel Navigation:**
- Prevent rapid clicking during slide transitions
- Handle edge cases at first/last slide positions
- Ensure accessibility for keyboard and screen reader users

**Gallery Lightbox:**
- Handle keyboard navigation edge cases
- Prevent scroll lock issues on mobile devices
- Ensure proper cleanup of event listeners

### Responsive Behavior

**Breakpoint Handling:**
- Graceful fallbacks for unsupported CSS features
- Touch gesture support validation for mobile devices
- Proper handling of orientation changes

## Testing Strategy

Given that this feature primarily involves UI enhancements, configuration updates, and content reorganization rather than complex business logic, property-based testing is not applicable. The testing strategy focuses on:

### Unit Testing Approach

**Component Testing:**
- Hero carousel auto-scroll functionality
- Navigation control interactions (arrows, dots)
- Gallery view mode switching
- Lightbox open/close behaviors
- Content overlay display logic

**Integration Testing:**
- Gallery lightbox keyboard navigation
- Mobile responsive behavior across breakpoints
- Image loading and error handling
- Cross-component state management

**Accessibility Testing:**
- Screen reader compatibility for carousel navigation
- Keyboard navigation through gallery items  
- ARIA label correctness for interactive elements
- Focus management in lightbox modal

### Visual Regression Testing

**Snapshot Testing:**
- Hero carousel layout across device sizes
- Gallery grid and carousel layouts
- Content section spacing and typography
- Navigation component updates

**Manual Testing Focus Areas:**
- Carousel auto-scroll timing and pause behavior
- Touch gesture support on mobile devices
- Image quality and aspect ratio handling
- Smooth transition animations

**Performance Testing:**
- Image loading optimization
- Carousel transition performance
- Gallery lightbox loading speed
- Overall page load impact with new components

### Cross-Browser Testing

- Carousel functionality across modern browsers
- CSS Grid and Flexbox layout consistency  
- Touch event handling on mobile browsers
- Image optimization format support (WebP fallbacks)

The testing approach emphasizes user experience validation, accessibility compliance, and performance optimization rather than algorithmic correctness, making it well-suited for this UI-focused enhancement project.