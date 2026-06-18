# RocketRhino Landing Page

## Project Overview

This is a professional landing page for RocketRhino™, a partnerships consulting service founded by Bilal Quddoos. The website showcases partnership strategy services for high-ticket B2B service businesses, featuring a modern, responsive design with interactive elements and smooth animations.

The landing page is built as a single-page application with multiple sections including hero, services, testimonials, FAQ, and contact information. It's designed to convert visitors into leads by highlighting the value proposition of structured partnership systems.

## Key Features

### Interactive Testimonials Carousel
- **Drag & Swipe Support**: Users can navigate testimonials by dragging (desktop) or swiping (mobile/tablet)
- **Snap Scrolling**: Smooth snap-to-position behavior for clean alignment
- **Responsive Layout**: 
  - Mobile: 1 testimonial per view
  - Tablet: 2 testimonials per view
  - Desktop: 3 testimonials per view
- **Dot Navigation**: Click dots to jump to specific testimonials
- **Auto-tracking**: Active dot updates as user scrolls

### Responsive Design
- Mobile-first approach with breakpoints for tablet and desktop
- Adaptive layouts that reorganize content based on screen size
- Touch-optimized for mobile devices
- Desktop-enhanced with hover states and larger interactive areas

### Component Architecture
- **Modular Components**: Each section is a separate React component
- **Reusable UI Elements**: StarIcon, CheckIcon, TestimonialCard, etc.
- **Import Organization**: Assets organized by component in `/src/imports/`
- **Figma Integration**: Components maintain connection to Figma design system

### Visual Design
- **Dark Theme**: Primary dark background (#05060a) with vibrant accent colors
- **Gradient Accents**: Purple-to-cyan gradients (#BF00FF to #22D3EE)
- **SVG Icons**: Scalable vector graphics with gradient fills and glow effects
- **Typography**: Custom font stack with Montserrat, Space Grotesk, and Inter
- **Smooth Animations**: CSS transitions for interactive elements

### Sections
1. **Hero Section**: Eye-catching introduction with value proposition
2. **About Bilal**: Founder profile with credentials and 5-star rating
3. **Strategic Partner Channels**: Service overview with icon illustrations
4. **High Trust Industries**: Target market visualization
5. **Testimonials**: Client reviews in interactive carousel
6. **FAQ Section**: Collapsible questions and answers
7. **Contact/CTA**: Lead capture and conversion elements

## Technical Stack

### Core Technologies
- **React 18.3.1**: UI component library
- **Vite 6.3.5**: Build tool and dev server
- **TypeScript**: Type-safe JavaScript (via .tsx files)

### Styling
- **Tailwind CSS 4.1.12**: Utility-first CSS framework
- **@tailwindcss/vite 4.1.12**: Tailwind integration for Vite
- **Custom CSS Variables**: Theme tokens in `/src/styles/theme.css`

### UI Libraries & Components
- **embla-carousel-react 8.6.0**: Carousel/slider with native drag support
- **Radix UI**: Accessible component primitives
  - Accordion, Dialog, Dropdown, Tabs, Tooltip, etc.
- **Lucide React 0.487.0**: Icon library
- **Motion 12.23.24**: Animation library (formerly Framer Motion)

### Additional Dependencies
- **react-slick 0.31.0**: Alternative carousel library
- **recharts 2.15.2**: Charting library
- **react-hook-form 7.55.0**: Form handling
- **sonner 2.0.3**: Toast notifications
- **class-variance-authority 0.7.1**: Variant-based styling
- **clsx 2.1.1**: Conditional className utility
- **tailwind-merge 3.2.0**: Merge Tailwind classes intelligently

### Development Tools
- **pnpm**: Package manager (preferred over npm)
- **@vitejs/plugin-react 4.7.0**: React support for Vite

### Project Structure
```
/src
  /app
    App.tsx                    # Main entry component
    /components                # Reusable components
      AboutBilal.tsx
      Testimonials.tsx
      FAQSection.tsx
      HighTrustIndustries.tsx
      StrategicPartnerChannels.tsx
      /ui                      # UI primitives
        carousel.tsx
        button.tsx
        slider.tsx
  /imports                     # Figma-imported assets
    /Frame264                  # AboutBilal assets
    /Testimonials              # Testimonial assets
    /HighTrust                 # Industry assets
    /Group228                  # Icon assets
  /styles
    index.css                  # Global styles
    theme.css                  # Design tokens
    fonts.css                  # Font imports
    carousel.css               # Carousel-specific styles
```

### Key Implementation Notes
- **Carousel**: Uses Embla Carousel with `dragFree: false` for snap behavior
- **SVG Paths**: Stored in TypeScript files as path data objects
- **Images**: Imported as ES modules, not hardcoded paths
- **Responsive**: Tailwind responsive prefixes (sm:, md:, lg:)
- **Figma Assets**: Use `figma:asset` virtual module scheme for raster images
