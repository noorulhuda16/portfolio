"use client"

import type React from "react"
import { use, useState } from "react"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  ArrowLeft,
  ChevronRight,
  Lightbulb,
  Target,
  Trophy,
  Globe,
  Layout,
  Zap,
  Palette,
  Type,
  Code,
  Mail,
  ExternalLink,
  Eye,
  Info,
  Monitor,
  FileText,
  ImageIcon,
  ChevronLeft,
} from "lucide-react"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.8 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.6 },
}

interface CaseStudyProps {
  params: Promise<{
    id: string
  }>
}

// Combined projects array with all categories
const projects = [
  // UI/UX Projects (existing)
  {
    id: 2,
    title: "Pizza Hub",
    category: "uiux",
    challenge:
      "Creating a pizza customization experience that wouldn't overwhelm users with too many choices at once. We needed to break down the process into digestible steps while maintaining visual appeal and ensuring users could easily track their selections and pricing.",
    solution:
      "Implemented a step-by-step pizza builder with clear visual progression, showing the pizza evolving as users make selections. Used a bold red and white color scheme with intuitive controls and large, appetizing imagery at each customization stage.",
    outcome:
      "The UI design demonstrates an engaging approach to custom pizza ordering that reduces cognitive load while making the process enjoyable. The design effectively showcases modern mobile app principles with a focus on user experience and visual appeal.",
    technologies: ["Figma", "Canva"],
    images: ["/images/projects/2.png"],
    overview:
      "Designed a conceptual pizza ordering application that simplifies the custom pizza creation process. The UI design focuses on providing an intuitive and engaging experience for users to build their perfect pizza through a step-by-step customization flow. This fictional project showcases a modern approach to food ordering apps with a playful yet professional aesthetic.",
    colorPalette: [
      "#FFFFFF", // Primary red
      "#E8DEF8", // Light yellow
      "#757575", // Light gray
      "#E9C097",
      "#EC9919",
      "#EB642F",
      "#B81D09",
      "#000000",
    ],
    typography: ["Scheherazade (Primary)", "Roboto (Secondary)", "Ovo"],
    prototypeVideo: ["/images/projects/pizza-vid-1.mp4", "/images/projects/pizza-vid-2.mp4"],
    prototypeImages: [
      "/images/projects/pizza-1.png",
      "/images/projects/pizza-2.png",
      "/images/projects/pizza-3.png",
      "/images/projects/pizza-4.png",
      "/images/projects/pizza-5.png",
      "/images/projects/pizza-6.png",
    ],
  },
  {
    id: 3,
    title: "Yummy Sweet Treats",
    category: "uiux",
    challenge:
      "One of the key challenges was to establish a distinct visual identity that reflects the brand’s fun and indulgent nature while maintaining a professional appearance. The website needed to offer a smooth and intuitive navigation experience, allowing users to explore the menu easily and find their favorite donuts. Additionally, clear call-to-action buttons were necessary to drive conversions without overwhelming the user with too many choices.",
    solution:
      "A bright and playful color scheme was used to make the website visually inviting, complemented by high-quality donut images to entice users. The navigation was structured with clear menu categories, making it easy for customers to browse different donut varieties. Strategically placed CTAs, such as 'Order Now' and 'Check Our Menu' help guide users toward making a purchase, while responsive design ensures a seamless experience across all devices.",
    outcome:
      "The final design resulted in a visually delightful and highly functional website that effectively represents the donut brand. The engaging layout and structured menu enhance user experience, making it easier for customers to explore and place orders. With a seamless ordering process and appealing visuals, the website successfully encourages higher user engagement and conversions.",
    technologies: ["Figma", "Canva"],
    images: ["/images/projects/3.png"],
    overview:
      "This project focuses on designing a visually appealing and user-friendly website for a donut brand. The goal was to create a delightful and engaging digital experience that reflects the brand’s fun and indulgent nature. The website showcases handcrafted donuts with a bright, playful theme while ensuring smooth navigation for users exploring the menu and placing orders.",
    colorPalette: [
      "#FFFFFF",
      "#F7F4E1", // Primary red
      "#F9E7D7",
      "#FDF3D0",
      "#88DAF0",
      "#C3F3DD",
      "#DCAFC5", // Light yellow
      "#EE963E", // Green accent
      "#F8628D", // Light gray
    ],
    typography: ["Bagel Fat One (Primary)", "Cagliostro (Secondary)"],
    prototypeVideo: ["/images/projects/donut-1.mp4", "/images/projects/donut-2.mp4"],
    prototypeImages: [
      "/images/projects/donut-1.png",
      "/images/projects/donut-2.png",
      "/images/projects/donut-3.png",
      "/images/projects/donut-4.png",
      "/images/projects/donut-5.png",
      "/images/projects/donut-6.png",
      "/images/projects/donut-7.png",
      "/images/projects/donut-8.png",
      "/images/projects/donut-9.png",
    ],
  },
  {
    id: 4,
    title: "Mosaica – Explore & Admire Timeless Art",
    category: "uiux",
    challenge: "Developing a visually stunning and performant WordPress theme for a high-traffic travel blog.",
    solution: "Created a custom theme with optimized images, lazy loading, and a content-first approach.",
    outcome: "Improved page load times by 50% and increased average time on site by 3 minutes.",
    technologies: ["WordPress", "PHP", "JavaScript", "SASS"],
    images: ["/images/projects/4.png"],
    // prototypeUrl:
    //   "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FyourPrototypeId",
    overview:
      "Pizza Hub is a mobile application designed for a pizza restaurant chain that allows customers to browse the menu, customize their orders, and track delivery in real-time. The design focuses on creating an intuitive and visually appealing interface that enhances the ordering experience.",
    colorPalette: [
      "#FFFFFF", // Primary red
      "#866B5F", // Light yellow
      "#6D5647", // Green accent
      "#362A25", // Light gray
      "#B21F1F",
      "#111918", // Dark gray
    ],
    typography: ["Scheherazade (Primary)", "Sedan SC (Secondary)", "Radley", "Nautigal", "Spectral SC"],
    prototypeVideo: "/images/projects/art.mp4",
    prototypeImages: [
      "/images/projects/art-1.png",
      "/images/projects/art-2.png",
      "/images/projects/art-3.png",
      "/images/projects/art-4.png",
      "/images/projects/art-5.png",
      "/images/projects/art-6.png",
    ],
  },
  {
    id: 5,
    title: "Royal Retreat Hotel & Spa",
    category: "uiux",
    challenge:
      "Creating a visually stunning yet functional design that effectively communicates luxury while maintaining usability presented our main challenge. We needed to balance aesthetic appeal with practical functionality, ensuring the fictional booking process remained intuitive. Additionally, we faced the challenge of designing a responsive layout that would showcase room options and amenities elegantly across all device sizes.",
    solution:
      "We implemented a clean, minimalist design language with carefully selected typography and a sophisticated color palette dominated by neutral tones with amber accents. The fictional booking interface was streamlined to minimize steps, while room displays utilized card-based designs with high-quality imagery. We incorporated subtle animations and transitions to enhance the luxury feel, and designed a testimonial carousel to demonstrate effective social proof presentation.",
    outcome:
      "This conceptual design successfully demonstrates effective UI patterns for luxury hospitality websites. The fictional project illustrates how thoughtful layout design can enhance user engagement and showcase premium offerings. The testimonial section effectively demonstrates social proof concepts, while the room display cards show optimal ways to present accommodation options. This Figma concept serves as an excellent reference for future hospitality website design projects.    ",
    technologies: ["Figma", "Canva"],
    images: ["/images/projects/hotel-1.png"],
    overview:
      "The Royal Retreat Hotel & Spa website is a comprehensive digital platform designed to showcase the luxury accommodations and premium services offered by the hotel. The website features an elegant, user-friendly interface that allows potential guests to explore room options, view amenities, read customer testimonials, and make reservations seamlessly. The design emphasizes sophistication and comfort, reflecting the hotel's commitment to providing exceptional hospitality experiences.",
    colorPalette: [
      "#FFFFFF", // Primary red
      "#DDE0E4", // Light yellow
      "#D3DCE7", // Green accent
      "#486284", // Light gray
      "#273F5B", // Dark gray
      "#6A4E3B",
    ],
    typography: ["Marcellus (Primary)", "Scheherazade (Secondary)", "Joan", "Zen Antique"],
    prototypeVideo: "/images/projects/hotel-prototype.mp4",
    prototypeImages: [
      "/images/projects/hotel-1.png",
      "/images/projects/hotel-2.png",
      "/images/projects/hotel-3.png",
      "/images/projects/hotel-4.png",
      "/images/projects/hotel-5.png",
      "/images/projects/hotel-6.png",
    ],
  },
  {
    id: 6,
    title: "Brew – Perfect Coffee, Just a Tap Away",
    category: "uiux",
    challenge:
      "The key challenge was balancing aesthetics with usability, ensuring the website remained visually rich yet functional. The menu needed a clear, structured layout, and the contact page had to be simple yet engaging. Maintaining brand consistency, mobile responsiveness, and intuitive navigation were also crucial factors.",
    solution:
      "A hero image on the landing page set the café’s ambiance, while the structured menu page with images and pricing enhanced usability. The contact form was designed with a clean overlay for easy interaction. A warm color scheme, elegant typography, and mobile optimization ensured a seamless user experience.",
    outcome:
      "The final design improved Brew.’s online presence, making it more engaging and user-friendly. The structured menu enhanced product visibility, while the simple contact page increased inquiries. Overall, the project resulted in better user experience, brand perception, and customer engagement.",
    technologies: ["Figma", "Canva"],
    images: ["/images/projects/6.png"],
    overview:
      "Brew. is a coffee shop that offers a cozy, community-driven atmosphere with handcrafted coffee and gourmet treats. The goal of this UI design project was to create a visually appealing and functional website that reflects the brand’s warmth and premium quality. The design includes a Landing Page, Menu Page, and Contact Page, ensuring an engaging user experience while maintaining a clean, modern aesthetic.",
    colorPalette: [
      "#000000", // Primary red
      "#3B0F06", // Green accent
      "#692020",
      "#8F3C04", // Light gray
      "#D9D9D9", // Dark gray
      "#FFFFFF",
    ],
    typography: ["Shippori Mincho B1", "Mrs Saint Delafield (Secondary)", "Judson", "Lilita One"],
    prototypeVideo: "/images/projects/coffee-prototype.mp4",
    prototypeImages: [
      "/images/projects/coffee-1.png",
      "/images/projects/coffee-2.png",
      "/images/projects/coffee-3.png",
      "/images/projects/coffee-4.png",
      "/images/projects/coffee-5.png",
      "/images/projects/coffee-6.png",
      "/images/projects/coffee-7.png",
      "/images/projects/coffee-8.png",
      "/images/projects/coffee-9.png",
    ],
  },

  // Code Projects
  {
    id: 1,
    title: "E-Commerce Website",
    category: "react",
    challenge:
      "Building a unified codebase that serves distinct user interfaces while maintaining performance was our main hurdle. We needed to implement complex data visualizations, create accessible form components, and ensure smooth state management while keeping the application lightweight and responsive.",
    solution:
      "Implemented a component-based architecture with styled-components for the purple-white theme. Built custom form validation hooks for registration and checkout flows, and developed interactive charts using JavaScript for the analytics dashboard with optimized rendering patterns.",
    outcome:
      "Successfully delivered a front-end implementation that closely matches the design specifications while maintaining excellent performance metrics. The codebase is well-structured with comprehensive documentation, making it easy for other developers to understand and contribute to the project.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    images: ["/images/projects/1.png"],
    githubUrl: "https://github.com/yourusername/ecommerce-nextjs",
    liveUrl: "https://ecommerce-demo.vercel.app",
    overview:
      "Developed a comprehensive e-commerce platform with Next JS and TypeScript, implementing responsive layouts that adapt seamlessly across devices. Created reusable component architecture for both customer-facing interfaces and seller dashboards, ensuring consistent styling through a custom design system. Utilized modern front-end practices to deliver a performant application with optimized loading times.",
    colorPalette: [
      "#DEE2E7", // Primary blue
      "#FFE3E3", // Accent red
      "#E59819",
      "#FA8232",
      "#954BAF", // Success green
      "#806491", // Background gray
      "#7C7C7C", // Text dark
    ],
    typography: ["Inter (Primary)", "Poppins (Secondary)", "Lato", "Roboto"],
    prototypeImages: ["/images/projects/ecom-01.png"],
    emailContact: "nurdesignportfolio@gmail.com",
    additionalImages: [
      "/images/projects/ecom-01.png",
      "/images/projects/ecom-02.png",
      "/images/projects/ecom-03.png",
      "/images/projects/ecom-04.png",
      "/images/projects/ecom-1.png",
      "/images/projects/ecom-2.png",
      "/images/projects/ecom-3.png",
      "/images/projects/ecom-4.png",
      "/images/projects/ecom-5.png",
      "/images/projects/ecom-6.png",
      "/images/projects/ecom-7.png",
      "/images/projects/ecom-8.png",
      "/images/projects/ecom-9.png",
      "/images/projects/ecom-10.png",
    ],
    codeSnips: [
      "/images/projects/code-1.png",
      "/images/projects/code-2.png",
      "/images/projects/code-3.png",
      "/images/projects/code-4.png",
      "/images/projects/code-5.png",
      "/images/projects/code-6.png",
      "/images/projects/code-7.png",
      "/images/projects/code-8.png",
      "/images/projects/code-9.png",
    ],
    isFrontendOnly: true,
  },

  // WordPress Projects
  {
    id: 7,
    title: "The Daily Scroll – Stay Informed, Stay Ahead",
    category: "wordpress",
    description:
      "A modern and user-friendly news blog covering the latest stories, trends, and updates across all categories.",
    challenge:
      "The project needed to organize varied content categories while maintaining visual consistency, ensuring easy navigation for readers, and creating a platform that could effectively highlight featured content across multiple lifestyle niches.",
    solution:
      "A custom WordPress theme was developed with category-specific layouts, a responsive grid system, and strategic content organization that allows readers to easily browse by interest area while maintaining consistent branding throughout the site.",
    outcome:
      "The resulting blog successfully balances content diversity with cohesive design, featuring engaging layouts that highlight imagery while maintaining readability, resulting in improved user engagement and time spent on the site.",
    technologies: ["WordPress", "PHP", "Elementor"],
    features: [
      "Custom post types for different content categories",
      "Advanced filtering and search functionality",
      "Content Grid Layouts",
      "Featured Content Highlighting",
      "Responsive design for all devices",
    ],
    // images: ["/images/projects/7-main.jpg", "/images/projects/7-detail-1.jpg", "/images/projects/7-detail-2.jpg"],
    images: [
      "/images/projects/blog-1.png",
      "/images/projects/blog-2.png",
      "/images/projects/blog-3.png",
      "/images/projects/blog-4.png",
      "/images/projects/blog-5.png",
      "/images/projects/blog-6.png",
      "/images/projects/blog-7.png",
      "/images/projects/blog-8.png",
      "/images/projects/blog-9.png",
      "/images/projects/blog-10.png",
      "/images/projects/blog-11.png",
      "/images/projects/blog-12.png",
      "/images/projects/blog-13.png",
      "/images/projects/blog-14.png",
      "/images/projects/blog-15.png",
      "/images/projects/blog-16.png",
    ],
    liveUrl: "https://dailyscroll-demo.com",
    overview:
      "The Daily Scroll is a modern news blog built on WordPress that delivers the latest stories across various categories. The custom theme was designed to optimize content delivery while maintaining fast load times even with high traffic volumes.",
    colorPalette: [
      "#F9F7F4", // Primary blue
      "#E5E5E5", // Accent yellow
      "#3A8FB7", // White
      "#1A4E5C", // Light gray
      "#212121", // Dark gray
    ],
    typography: ["Cormorant Garamond (Primary)", "Mulish (Secondary)", "Roboto", "Cedarville"],
    // prototypeImages: ["/images/projects/7-main.jpg", "/images/projects/7-detail-2.jpg"],
    projectVideos: ["/images/projects/blog.mp4"],
  },
  {
    id: 8,
    title: "Jacqueline Photography - Capturing Moments, Telling Stories",
    category: "wordpress",
    challenge:
      "The project needed to balance visual appeal with functionality, creating a cohesive presentation of various photography styles while ensuring clear navigation and keeping the focus on the imagery.",
    solution:
      "A custom WordPress theme was developed featuring a grid-based portfolio layout, dedicated service sections, and strategic call-to-action buttons, all with responsive design that adapts seamlessly across devices.",
    outcome:
      "The website successfully positions the photographer as a premium service provider, with improved user engagement metrics and a clear communication of style that attracts ideal clients.",
    technologies: ["WordPress", "Elementor", "PHP"],
    features: [
      "Custom gallery layouts",
      "Image optimization",
      "Visual-First Design",
      "Elegant Typography System",
      "Cohesive Color Palette",
    ],
    images: [
      "/images/projects/photo-1.png",
      "/images/projects/photo-2.png",
      "/images/projects/photo-3.png",
      "/images/projects/photo-4.png",
      "/images/projects/photo-5.png",
      "/images/projects/photo-6.png",
      "/images/projects/photo-7.png",
      "/images/projects/photo-8.png",
      "/images/projects/photo-9.png",
      "/images/projects/photo-10.png",
      "/images/projects/photo-11.png",
      "/images/projects/photo-12.png",
      "/images/projects/photo-13.png",
      "/images/projects/photo-14.png",
      "/images/projects/photo-15.png",
      "/images/projects/photo-16.png",
    ],
    liveUrl: "https://jacqueline-photography-demo.com",
    overview:
      "This elegant photography portfolio website was developed using WordPress to showcase a diverse range of photography services and portfolio pieces. The site features a clean, minimalist design that puts the focus on the imagery while maintaining a sophisticated brand identity through consistent typography and color choices. The layout effectively guides visitors through the photographer's work and service offerings with intuitive navigation.",
    colorPalette: [
      "#FFFFFF", // Primary blue
      "##7A7A7A",
      "#e6f0f3", // Accent yellow
      "#4a6e7c", // White
      "#333333", // Light gray
    ],
    typography: ["Cormorant Garamond (Primary)", "Mulish (Secondary), Roboto"],
    projectVideos: ["/images/projects/photo.mp4"],
  },

  // Label Design Projects
  {
    id: 9,
    title: "Blossom Bliss Shower Gel",
    category: "label",
    designElements: [
      "Color Palette",
      "Typography",
      "Subtle floral illustrations",
      "Imagery & Graphics",
      "Layout & Composition",
    ],
    colorPalette: [
      "#697ea5",
      "#adbccb", // Medium aqua
      "#d8e2e9", // Bright aqua
      "#dde9f0", // Deep teal
      "#FFFFFF",
    ],
    typography: ["Montserrat (Primary)", "Helvetica (Secondary)"],
    technologies: ["Canva", "Mockup Templates"],
    images: ["/images/projects/9-label.png"],
    overview:
      "The Shower Gel Label Design was crafted to reflect a refreshing and luxurious bathing experience. The goal was to create a visually appealing label that communicates the product’s essence—cleanliness, hydration, and an invigorating scent. The design ensures that it not only stands out on shelves but also aligns with the target audience’s expectations for a high-quality self-care product.",
    prototypeImages: ["/images/projects/9-prototype-1.png"],
    projectVideos: ["/images/projects/9-prototype-2.mp4"],
  },
  {
    id: 10,
    title: "Velare – Scented Candle",
    category: "label",
    designElements: [
      "Minimalistic Aesthetic",
      "Color Scheme",
      "Minimalist typography",
      "Visual Elements",
      "Monochromatic color scheme",
      "Soft Floral Backgrounds",
    ],
    colorPalette: [
      "#1D665B", // Deep teal
      "#FFFFFF", // White
      "#000000", // Black
      "#EAE6E2 ",
      "#FFE5B4",
      "#FFD1DC",
      "#FFB6C1",
    ],
    typography: ["Margo (Primary)", "Montserrat (Secondary)"],
    technologies: ["Canva", "Mockup Templates"],
    // images: [
    //   "/images/projects/10-prototype-1.mp4",
    //   "/images/projects/10-prototype-2.mp4",
    //   "/images/projects/10-prototype-3.mp4",
    // ],
    images: ["/images/projects/10-label-1.png", "/images/projects/10-label-2.png", "/images/projects/10-label-3.png"],
    overview:
      "The Scented Candle Label Design was developed to capture the essence of relaxation, warmth, and sophistication. Since scented candles are often used for ambiance and aromatherapy, the label design focuses on minimalism and elegance while effectively conveying the candle’s scent profile and luxurious appeal.",
    // prototypeImages: [
    //   "/images/projects/10-prototype-1.mp4",
    //   "/images/projects/10-prototype-2.mp4",
    //   "/images/projects/10-prototype-3.mp4",
    // ],
    prototypeImages: ["/images/projects/10-label-1.png", "/images/projects/10-label-2.png", "/images/projects/10-label-3.png"],
    projectVideos: [
      "/images/projects/10-prototype-1.mp4",
      "/images/projects/10-prototype-2.mp4",
      "/images/projects/10-prototype-3.mp4",
    ],
  },
]
export default function CaseStudy({ params }: CaseStudyProps) {
  // Use the React 'use' hook to handle the Promise
  const { id } = use(params)
  const projectId = Number.parseInt(id, 10)
  const project = projects.find((p) => p.id === projectId)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [carouselIndex, setCarouselIndex] = useState(0)
  const [videoAdded, setVideoAdded] = useState(false)
  const [prototypeCarouselIndex, setPrototypeCarouselIndex] = useState(0)
  const [videoIndex, setVideoIndex] = useState(0)

  // Update the lightbox to include carousel functionality
  // Replace the existing lightbox code with this enhanced version
  // Change the lightboxImage state to also track the index
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  // Add these new state variables after the existing state declarations (around line 420)
  const [prototypeImageLightboxOpen, setPrototypeImageLightboxOpen] = useState(false)
  const [prototypeImageLightboxIndex, setPrototypeImageLightboxIndex] = useState(0)

  const openLightbox = (imageSrc: string, index: number, imageArray?: string[]) => {
    if (imageArray && project) {
      // Store the current images array
      const currentImages = [...project.images]
      // Temporarily set the project images to the provided array
      project.images = imageArray
      setLightboxIndex(index)
      setLightboxOpen(true)

      // Create a function to restore original images when lightbox closes
      const restoreImages = () => {
        if (project) {
          project.images = currentImages
        }
        document.removeEventListener("lightboxClosed", restoreImages)
      }

      // Listen for lightbox closed event
      document.addEventListener("lightboxClosed", restoreImages)
    } else {
      setLightboxIndex(index)
      setLightboxOpen(true)
    }
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    // Dispatch event when lightbox is closed
    document.dispatchEvent(new Event("lightboxClosed"))
  }

  const nextLightboxImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (project) {
      setLightboxIndex((prevIndex) => (prevIndex + 1 >= project.images.length ? 0 : prevIndex + 1))
    }
  }

  const prevLightboxImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (project) {
      setLightboxIndex((prevIndex) => (prevIndex - 1 < 0 ? project.images.length - 1 : prevIndex - 1))
    }
  }

  // Add these new functions after the existing lightbox functions (around line 450)
  const openPrototypeImageLightbox = (index: number) => {
    if (project && project.prototypeImages && project.prototypeImages.length > 0) {
      // Ensure index is within bounds
      const safeIndex = Math.min(Math.max(0, index), project.prototypeImages.length - 1)
      setPrototypeImageLightboxIndex(safeIndex)
      setPrototypeImageLightboxOpen(true)
    }
  }

  const closePrototypeImageLightbox = () => {
    setPrototypeImageLightboxOpen(false)
  }

  const nextPrototypeImageLightbox = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (project && project.prototypeImages) {
      setPrototypeImageLightboxIndex((prevIndex) =>
        prevIndex + 1 >= project.prototypeImages.length ? 0 : prevIndex + 1,
      )
    }
  }

  const prevPrototypeImageLightbox = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (project && project.prototypeImages) {
      setPrototypeImageLightboxIndex((prevIndex) =>
        prevIndex - 1 < 0 ? project.prototypeImages.length - 1 : prevIndex - 1,
      )
    }
  }

  const nextCarouselSlide = () => {
    if (project && project.images.length > 4) {
      setCarouselIndex((prevIndex) => (prevIndex + 4 >= project.images.length ? 0 : prevIndex + 4))
    }
  }

  const prevCarouselSlide = () => {
    if (project && project.images.length > 4) {
      setCarouselIndex((prevIndex) => (prevIndex - 4 < 0 ? Math.max(0, project.images.length - 4) : prevIndex - 4))
    }
  }

  const nextPrototypeCarouselSlide = () => {
    if (project && project.prototypeImages && project.prototypeImages.length > 0) {
      setPrototypeCarouselIndex((prevIndex) => {
        const nextIndex = prevIndex + 4
        return nextIndex >= project.prototypeImages.length ? prevIndex : nextIndex
      })
    }
  }

  const prevPrototypeCarouselSlide = () => {
    if (project && project.prototypeImages && project.prototypeImages.length > 0) {
      setPrototypeCarouselIndex((prevIndex) => {
        const prevIndex4 = prevIndex - 4
        return prevIndex4 < 0 ? 0 : prevIndex4
      })
    }
  }

  const addVideo = () => {
    if (project) {
      // In a real implementation, you would handle the video path differently
      // For demo purposes, we'll just update the UI
      if (project.category === "wordpress") {
        project.projectVideos = [...(project.projectVideos || [])]
      } else if (project.category === "label") {
        project.projectVideos = [...(project.projectVideos || [])]
      }
      setVideoAdded(true)
    }
  }

  // Update the project data for ID 9 and 10 to match the specifications
  // For project ID 9 (Shower Gel):
  // - Update to have 1 label image, 1 product image, and 1 video
  const project9Index = projects.findIndex((p) => p.id === 9)
  if (project9Index !== -1) {
    // projects[project9Index].images = [
    //   "/images/projects/9-label.png", // Label image
    // ]
    // projects[project9Index].prototypeImages = [
    //   "/images/projects/9-prototype-1.png", // Product image
    //   "/images/projects/9-prototype-2.mp4", // Video
    // ]
  }

  // For project ID 10 (Scented Candle):
  // - Update to have 3 label images, 0 product images, and 3 videos
  const project10Index = projects.findIndex((p) => p.id === 10)
  if (project10Index !== -1) {
    // projects[project10Index].images = [
    //   "/images/projects/10-label-1.png",
    //   "/images/projects/10-label-2.png",
    //   "/images/projects/10-label-3.png",
    // ]
    // projects[project10Index].prototypeImages = [
    //   "/images/projects/10-prototype-1.mp4",
    //   "/images/projects/10-prototype-2.mp4",
    //   "/images/projects/10-prototype-3.mp4",
    // ]
  }

  if (!project) {
    return notFound()
  }

  return (
    <div className="bg-gradient-to-br from-teal-50 to-slate-50 min-h-screen">
      <div className="container mx-auto px-4 py-20">
        <Link
          href="/portfolio"
          className="inline-flex items-center text-teal-500 hover:text-teal-700 mb-8 transition-colors duration-300"
        >
          <ArrowLeft className="mr-2" />
          Back to Portfolio
        </Link>

        <motion.h1
          className="text-7xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-teal-400 to-teal-300 leading-tight pb-2">
            {project.title}
          </span>
          <motion.div
            className="h-1 w-32 bg-gradient-to-r from-teal-500 to-teal-400 mx-auto mt-4"
            initial={{ width: 0 }}
            animate={{ width: "32rem" }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.h1>

        {/*  Project Overview Section - For all categories */}
        <motion.section
          className="mb-16 bg-white rounded-2xl shadow-xl overflow-hidden"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <div className="bg-gradient-to-r from-teal-500 to-teal-400 py-8 px-8 flex justify-between items-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full transform -translate-x-16 -translate-y-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full transform translate-x-16 translate-y-32"></div>

            <h2 className="text-3xl font-bold text-white flex items-center relative z-10">
              <Info className="w-8 h-8 mr-3" />
              Project Overview
            </h2>

            {project.category === "react" && project.isFrontendOnly && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="bg-white text-teal-500 px-4 py-2 rounded-full font-bold flex items-center shadow-lg relative z-10"
              >
                <Monitor className="w-4 h-4 mr-2" />
                Frontend Only
              </motion.div>
            )}
          </div>

          <div className="p-10 relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-50 opacity-20 rounded-full transform translate-x-32 -translate-y-32"></div>

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-2/3">
                  <p className="text-lg text-slate-700 leading-relaxed">
                    {project.overview ||
                      "This project showcases my skills in creating effective and engaging designs that meet client objectives while providing an exceptional user experience."}
                  </p>

                  {project.category === "react" && project.isFrontendOnly && (
                    <motion.div
                      className="mt-6 p-4 bg-teal-50 border-l-4 border-teal-500 rounded-r-lg"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      <p className="text-slate-800">
                        <strong>Note:</strong> This is a frontend-only project built with React and Next.js. It focuses
                        on creating a responsive, interactive user interface with clean, maintainable code and optimal
                        performance.
                      </p>
                    </motion.div>
                  )}
                </div>

                <div className="md:w-1/3">
                  <div className="bg-teal-50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-teal-700 mb-4">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies?.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-white px-3 py-1 rounded-full text-sm font-medium text-teal-500 shadow-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Non-label categories: Challenge, Solution, Outcome */}
        {project.category !== "label" && (
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div
              className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300"
              initial="initial"
              animate="animate"
              variants={fadeInUp}
            >
              <Target className="w-16 h-16 text-teal-500 mb-6" />
              <h2 className="text-2xl font-bold mb-4 text-slate-900">The Challenge</h2>
              <p className="text-slate-700 leading-relaxed">{project.challenge}</p>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300"
              initial="initial"
              animate="animate"
              variants={fadeInUp}
            >
              <Lightbulb className="w-16 h-16 text-teal-500 mb-6" />
              <h2 className="text-2xl font-bold mb-4 text-slate-900">The Solution</h2>
              <p className="text-slate-700 leading-relaxed">{project.solution}</p>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300"
              initial="initial"
              animate="animate"
              variants={fadeInUp}
            >
              <Trophy className="w-16 h-16 text-teal-500 mb-6" />
              <h2 className="text-2xl font-bold mb-4 text-slate-900">The Outcome</h2>
              <p className="text-slate-700 leading-relaxed">{project.outcome}</p>
            </motion.div>
          </div>
        )}

        {/* Label-specific Design Elements Section */}
        {project.category === "label" && project.designElements && (
          <motion.section className="mb-16" initial="initial" animate="animate" variants={fadeInUp}>
            <h2 className="text-4xl font-bold mb-12 text-center flex items-center justify-center">
              <FileText className="w-10 h-10 mr-3 text-teal-500" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-teal-400">
                Design Elements
              </span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {project.designElements.map((element, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h3 className="text-xl font-bold mb-4 text-slate-900 flex items-center">
                    <ChevronRight className="w-5 h-5 mr-2 text-teal-500" />
                    {element}
                  </h3>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}
        {/* Color Palette Section - For all categories */}
        <motion.section className="mb-16" initial="initial" animate="animate" variants={fadeInUp}>
          <h2 className="text-4xl font-bold mb-12 text-center flex items-center justify-center">
            <Palette className="w-10 h-10 mr-3 text-teal-500" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-teal-400">
              Color Palette
            </span>
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {(
              project.colorPalette || [
                "#3B82F6", // Default blue
                "#0EA5E9", // Default sky blue
                "#06B6D4", // Default cyan
                "#F5F5F5", // Default light gray
                "#18181B", // Default dark
              ]
            ).map((color, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <div
                  className="w-24 h-24 rounded-full shadow-lg mb-2 border-4 border-white"
                  style={{ backgroundColor: color }}
                ></div>
                <span className="text-slate-700 font-mono text-sm bg-white px-3 py-1 rounded-full shadow-sm">
                  {color}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Typography Section - For all categories */}
        <motion.section className="mb-16" initial="initial" animate="animate" variants={fadeInUp}>
          <h2 className="text-4xl font-bold mb-12 text-center flex items-center justify-center">
            <Type className="w-10 h-10 mr-3 text-teal-500" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-teal-400">Typography</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {(project.typography || ["Sans-serif", "Serif"]).map((font, index) => {
              // Extract just the font name without the (Primary) or (Secondary) part
              const fontName = font.split(" (")[0]
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl shadow-lg px-6 py-4 transform hover:scale-105 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    backgroundColor: "rgba(238, 242, 255, 0.5)",
                  }}
                  style={{
                    borderLeft: index === 0 ? "4px solid #3B82F6" : "4px solid #0EA5E9",
                    minWidth: "180px",
                  }}
                >
                  <h3
                    className="text-xl font-bold text-center"
                    style={{
                      fontFamily: fontName.includes("Sans")
                        ? "'Helvetica', sans-serif"
                        : fontName.includes("Serif")
                          ? "'Georgia', serif"
                          : fontName.includes("Montserrat")
                            ? "'Montserrat', sans-serif"
                            : fontName.includes("Poppins")
                              ? "'Poppins', sans-serif"
                              : fontName.includes("Cormorant")
                                ? "'Cormorant Garamond', serif"
                                : fontName.includes("Raleway")
                                  ? "'Raleway', sans-serif"
                                  : fontName.includes("Inter")
                                    ? "'Inter', sans-serif"
                                    : fontName.includes("Merriweather")
                                      ? "'Merriweather', serif"
                                      : fontName.includes("Source")
                                        ? "'Source Sans Pro', sans-serif"
                                        : fontName.includes("Margo")
                                          ? "'Margo', cursive"
                                          : "'Helvetica', sans-serif",
                    }}
                  >
                    {fontName}
                  </h3>
                </motion.div>
              )
            })}
          </div>
        </motion.section>

        {/* Project Prototype Section - For project ID 1 only */}
        {project.id === 1 && (
          <motion.section className="mb-16" initial="initial" animate="animate" variants={fadeInUp}>
            <h2 className="text-4xl font-bold mb-12 text-center flex items-center justify-center">
              <Eye className="w-10 h-10 mr-3 text-teal-500" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-teal-400">
                Project Prototype
              </span>
            </h2>

            <div className="max-w-6xl mx-auto flex flex-col items-center">
              {/* Single Video Container */}
              <div className="w-full max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-lg mb-8">
                <div className="aspect-video rounded-lg overflow-hidden">
                  {/* You can replace this video source with your actual prototype video */}
                  <video
                    src="/images/projects/ecom.mp4"
                    controls
                    className="w-full h-full object-contain"
                    poster={project.images[0]}
                  />
                </div>
              </div>
              <p className="text-center text-slate-600 max-w-2xl mx-auto">
                This interactive prototype demonstrates the core functionality of the e-commerce platform, including
                product browsing, filtering, cart management, and checkout process.
              </p>
            </div>
          </motion.section>
        )}

        {/* Project Prototype Section - For UI/UX category */}
        {project.category === "uiux" && (
          <motion.section className="mb-16" initial="initial" animate="animate" variants={fadeInUp}>
            <h2 className="text-4xl font-bold mb-12 text-center flex items-center justify-center">
              <Eye className="w-10 h-10 mr-3 text-teal-500" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-teal-400">
                Project Prototype
              </span>
            </h2>

            <div className="max-w-6xl mx-auto flex flex-col items-center">
              {/* Video Prototype Carousel */}
              {project.prototypeVideo && (
                <div className="w-full max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-lg mb-8">
                  {/* Carousel Navigation */}
                  <div className="flex justify-between items-center mb-4">
                    <button
                      onClick={() => setCurrentImageIndex((prev) => (prev === 0 ? 0 : prev - 1))}
                      className="bg-teal-500 hover:bg-teal-600 text-white p-2 rounded-full shadow-lg disabled:opacity-50"
                      disabled={currentImageIndex === 0}
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <span className="text-slate-600">
                      {currentImageIndex + 1} /{" "}
                      {Array.isArray(project.prototypeVideo) ? project.prototypeVideo.length : 1}
                    </span>
                    <button
                      onClick={() =>
                        setCurrentImageIndex((prev) =>
                          Array.isArray(project.prototypeVideo) && prev < project.prototypeVideo.length - 1
                            ? prev + 1
                            : prev,
                        )
                      }
                      className="bg-teal-500 hover:bg-teal-600 text-white p-2 rounded-full shadow-lg disabled:opacity-50"
                      disabled={
                        !Array.isArray(project.prototypeVideo) || currentImageIndex >= project.prototypeVideo.length - 1
                      }
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </div>

                  <div className="aspect-video rounded-lg overflow-hidden">
                    <video
                      src={
                        Array.isArray(project.prototypeVideo)
                          ? project.prototypeVideo[currentImageIndex]
                          : project.prototypeVideo
                      }
                      controls
                      className="w-full h-full object-contain"
                      poster={project.images[0]}
                    />
                  </div>
                  <p className="text-center text-slate-600 mt-4">
                    Interactive prototype demonstrating the core user flows and interactions
                  </p>
                </div>
              )}
            </div>
          </motion.section>
        )}

        {/* Prototype Screens Section - For UI/UX category */}
        {project.category === "uiux" && project.prototypeImages && project.prototypeImages.length > 0 && (
          <motion.section className="mb-16" initial="initial" animate="animate" variants={fadeInUp}>
            <h2 className="text-4xl font-bold mb-12 text-center flex items-center justify-center">
              <ImageIcon className="w-10 h-10 mr-3 text-teal-500" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-teal-400">
                Prototype Screens
              </span>
            </h2>

            <div className="max-w-6xl mx-auto">
              {/* Carousel Navigation */}
              <div className="flex justify-between items-center mb-6">
                <button
                  onClick={prevPrototypeCarouselSlide}
                  className="bg-teal-500 hover:bg-teal-600 text-white p-2 rounded-full shadow-lg disabled:opacity-50"
                  disabled={prototypeCarouselIndex === 0}
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <span className="text-slate-600">
                  {project.prototypeImages.length > 0 ? (
                    <>
                      {prototypeCarouselIndex + 1}-
                      {Math.min(prototypeCarouselIndex + 4, project.prototypeImages.length)} of{" "}
                      {project.prototypeImages.length}
                    </>
                  ) : (
                    "No images available"
                  )}
                </span>
                <button
                  onClick={nextPrototypeCarouselSlide}
                  className="bg-teal-500 hover:bg-teal-600 text-white p-2 rounded-full shadow-lg disabled:opacity-50"
                  disabled={prototypeCarouselIndex + 4 >= project.prototypeImages.length}
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Gallery Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.prototypeImages
                  .slice(prototypeCarouselIndex, prototypeCarouselIndex + 4)
                  .map((item, index) => (
                    <motion.div
                      key={`prototype-${index}`}
                      className="rounded-xl overflow-hidden shadow-xl cursor-pointer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ y: -5, scale: 1.02 }}
                      onClick={() => {
                        // Only open lightbox if it's an image, not a video
                        if (!item.match(/\.(mp4|webm|ogg)$/i)) {
                          openPrototypeImageLightbox(prototypeCarouselIndex + index)
                        }
                      }}
                    >
                      {/* Check if the item is a video */}
                      {item?.match(/\.(mp4|webm|ogg)$/i) ? (
                        <div className="aspect-video">
                          <video
                            src={item}
                            controls
                            className="w-full h-full object-cover"
                            poster={project.images[0]}
                            onClick={(e) => e.stopPropagation()} // Prevent lightbox when clicking video controls
                          />
                        </div>
                      ) : (
                        <div className={`${project.id === 2 ? "h-[744px]" : "h-80"} relative`}>
                          <Image
                            src={item || "/placeholder.svg"}
                            alt={`${project.title} prototype screen ${index + 1}`}
                            layout="fill"
                            objectFit="cover"
                            className="w-full h-full"
                          />
                        </div>
                      )}
                    </motion.div>
                  ))}
              </div>
            </div>
          </motion.section>
        )}

        {/* Project Gallery Section - For non-label categories except project ID 1 */}
        {project.category !== "label" && project.category !== "uiux" && project.id !== 1 && (
          <motion.section className="mb-16" initial="initial" animate="animate" variants={fadeInUp}>
            <h2 className="text-4xl font-bold mb-12 text-center flex items-center justify-center">
              <ImageIcon className="w-10 h-10 mr-3 text-teal-500" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-teal-400">
                Project Gallery
              </span>
            </h2>

            <div className="max-w-6xl mx-auto">
              {/* Carousel Navigation */}
              {project.images.length > 4 && (
                <div className="flex justify-between items-center mb-6">
                  <button
                    onClick={prevCarouselSlide}
                    className="bg-teal-500 hover:bg-teal-600 text-white p-2 rounded-full shadow-lg"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <span className="text-slate-600">
                    {carouselIndex + 1}-{Math.min(carouselIndex + 4, project.images.length)} of {project.images.length}
                  </span>
                  <button
                    onClick={nextCarouselSlide}
                    className="bg-teal-500 hover:bg-teal-600 text-white p-2 rounded-full shadow-lg"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              )}

              {/* Gallery Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.images.slice(carouselIndex, carouselIndex + 4).map((image, index) => (
                  <motion.div
                    key={`gallery-${index}`}
                    className="rounded-xl overflow-hidden shadow-xl cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    onClick={() => openLightbox(image, carouselIndex + index)}
                  >
                    <div className="h-80 relative">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${project.title} gallery image ${index + 1}`}
                        layout="fill"
                        objectFit="cover"
                        className="w-full h-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
        )}

        {/* Product Label Section - For label category */}
        {project.category === "label" && project.id === 9 && (
          <motion.section className="mb-16" initial="initial" animate="animate" variants={fadeInUp}>
            <h2 className="text-4xl font-bold mb-12 text-center flex items-center justify-center">
              <ImageIcon className="w-10 h-10 mr-3 text-teal-500" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-teal-400">
                Product Labels
              </span>
            </h2>

            <div className="max-w-6xl mx-auto flex justify-center">
              <motion.div
                className="w-full max-w-[500px] rounded-xl overflow-hidden shadow-xl cursor-pointer bg-yellow-200 flex justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -5, scale: 1.02 }}
                onClick={() => openLightbox("/images/projects/9-label.png", 0)}
              >
                <div className="h-80 w-full relative">
                  <Image
                    src="/images/projects/9-label.png"
                    alt={`${project.title} label`}
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full"
                  />
                </div>
              </motion.div>
            </div>
          </motion.section>
        )}

        {project.category === "label" && project.id === 10 && (
          <motion.section className="mb-16" initial="initial" animate="animate" variants={fadeInUp}>
            <h2 className="text-4xl font-bold mb-12 text-center flex items-center justify-center">
              <ImageIcon className="w-10 h-10 mr-3 text-teal-500" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-teal-400">
                Product Labels
              </span>
            </h2>

            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
              {[
                "/images/projects/10-label-1.png",
                "/images/projects/10-label-2.png",
                "/images/projects/10-label-3.png",
              ].map((image, index) => (
                <motion.div
                  key={`label-${index}`}
                  className="rounded-xl overflow-hidden shadow-xl cursor-pointer w-full max-w-[400px]" // Increased width here
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  onClick={() => openLightbox(image, index)}
                >
                  <div className="h-80 w-full relative">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${project.title} label ${index + 1}`}
                      layout="fill"
                      objectFit="cover"
                      className="w-full h-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Product Prototype Section - For label category */}

        {project.category === "label" && project.id === 9 && (
          <motion.section className="mb-16" initial="initial" animate="animate" variants={fadeInUp}>
            <h2 className="text-4xl font-bold mb-12 text-center flex items-center justify-center">
              <ImageIcon className="w-10 h-10 mr-3 text-teal-500" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-teal-400">
                Product Prototype
              </span>
            </h2>

            <div className="max-w-6xl mx-auto">
              <motion.div
                className="rounded-xl overflow-hidden shadow-xl cursor-pointer mx-auto max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -5, scale: 1.02 }}
                onClick={() => openPrototypeImageLightbox(0)}
              >
                <div className="h-[600px] relative">
                  <Image
                    src="/images/projects/9-prototype-1.png"
                    alt={`${project.title} prototype`}
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full"
                  />
                </div>
              </motion.div>
            </div>
          </motion.section>
        )}
        {/* {project.category === "label" && (
        <motion.section className="mb-16" initial="initial" animate="animate" variants={fadeInUp}>
          <h2 className="text-4xl font-bold mb-12 text-center flex items-center justify-center">
            <Eye className="w-10 h-10 mr-3 text-teal-500" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-teal-400">
              Product Prototypes
            </span>
          </h2>

          <div className="max-w-6xl mx-auto">
            
            {project.id === 9 ? (
              <motion.div
                className="rounded-xl overflow-hidden shadow-xl cursor-pointer mx-auto max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -5, scale: 1.02 }}
                onClick={() => openPrototypeImageLightbox(0)}
              >
                <div className="h-[600px] relative">
                  <Image
                    src="/images/projects/9-prototype-1.png"
                    alt={`${project.title} prototype`}
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full"
                  />
                </div>
              </motion.div>
            ) : null}
          </div>
        </motion.section>
      )} */}

        {/* Video Prototype Section - For label category */}
        {project.category === "label" && (
          <motion.section className="mb-16" initial="initial" animate="animate" variants={fadeInUp}>
            <h2 className="text-4xl font-bold mb-12 text-center flex items-center justify-center">
              <Eye className="w-10 h-10 mr-3 text-teal-500" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-teal-400">
                Video Prototypes
              </span>
            </h2>

            <div className="max-w-6xl mx-auto">
              {/* Show 1 video for product ID 9 and 3 videos for product ID 10 */}
              {project.id === 9 ? (
                <div className="w-full max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-lg mb-8">
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <video
                      src="/images/projects/9-prototype-2.mp4"
                      controls
                      className="w-full h-full object-contain"
                      poster={project.images[0]}
                    />
                  </div>
                  <p className="text-center text-slate-600 mt-4">Video prototype demonstrating the product in use</p>
                </div>
              ) : project.id === 10 ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    "/images/projects/10-prototype-1.mp4",
                    "/images/projects/10-prototype-2.mp4",
                    "/images/projects/10-prototype-3.mp4",
                  ].map((video, index) => (
                    <div key={`video-${index}`} className="bg-white p-4 rounded-xl shadow-lg">
                      <div className="aspect-video rounded-lg overflow-hidden">
                        <video
                          src={video}
                          controls
                          className="w-full h-full object-contain"
                          poster={project.images[0]}
                        />
                      </div>
                      <p className="text-center text-slate-600 mt-2">Video prototype {index + 1}</p>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          </motion.section>
        )}

        {/* Project Video Section - For WordPress category */}
        {project.category === "wordpress" && (
          <motion.section className="mb-16" initial="initial" animate="animate" variants={fadeInUp}>
            <h2 className="text-4xl font-bold mb-12 text-center flex items-center justify-center">
              <ImageIcon className="w-10 h-10 mr-3 text-teal-500" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-teal-400">
                Project Video
              </span>
            </h2>

            <div className="max-w-6xl mx-auto flex flex-col items-center">
              {/* Single Video Container */}
              <div className="w-full max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-lg mb-8">
                <div className="aspect-video rounded-lg overflow-hidden">
                  {project.projectVideos && project.projectVideos.length > 0 ? (
                    <video
                      src={project.projectVideos[0]}
                      controls
                      className="w-full h-full object-contain"
                      poster={project.images[0]}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-500">
                      <p>No video available</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.section>
        )}

        {/* WordPress-specific Features Section */}
        {project.category === "wordpress" && project.features && (
          <motion.section className="mb-16" initial="initial" animate="animate" variants={fadeInUp}>
            <h2 className="text-4xl font-bold mb-12 text-center text-slate-900">Key Features</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {project.features.slice(0, 3).map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* {index === 0 && <Layout className="w-12 h-12 text-teal-500 mb-6" />}
                  {index === 1 && <Zap className="w-12 h-12 text-teal-500 mb-6" />}
                  {index === 2 && <Globe className="w-12 h-12 text-teal-500 mb-6" />} */}

                  <h3 className="text-xl font-bold mb-4 text-slate-900">{feature}</h3>
                </motion.div>
              ))}
            </div>
            {project.features.length > 3 && (
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                {project.features.slice(3).map((feature, index) => (
                  <motion.div
                    key={index + 3}
                    className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
                  >
                    <h3 className="text-xl font-bold mb-4 text-slate-900">{feature}</h3>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.section>
        )}

        {/* Additional Images Section - for React projects (replacing Code Snippets) */}
        {project.category === "react" && project.additionalImages && (
          <motion.section className="mb-16" initial="initial" animate="animate" variants={fadeInUp}>
            <h2 className="text-4xl font-bold mb-12 text-center flex items-center justify-center">
              <ImageIcon className="w-10 h-10 mr-3 text-teal-500" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-teal-400">
                Additional Images
              </span>
            </h2>

            <div className="max-w-6xl mx-auto">
              {/* Carousel Navigation */}
              {project.additionalImages.length > 4 && (
                <div className="flex justify-between items-center mb-6">
                  <button
                    onClick={() => {
                      if (project.additionalImages.length > 4) {
                        setCurrentImageIndex((prev) =>
                          prev - 4 < 0 ? Math.max(0, project.additionalImages.length - 4) : prev - 4,
                        )
                      }
                    }}
                    className="bg-teal-500 hover:bg-teal-600 text-white p-2 rounded-full shadow-lg"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <span className="text-slate-600">
                    {currentImageIndex + 1}-{Math.min(currentImageIndex + 4, project.additionalImages.length)} of{" "}
                    {project.additionalImages.length}
                  </span>
                  <button
                    onClick={() => {
                      if (project.additionalImages.length > 4) {
                        setCurrentImageIndex((prev) => (prev + 4 >= project.additionalImages.length ? 0 : prev + 4))
                      }
                    }}
                    className="bg-teal-500 hover:bg-teal-600 text-white p-2 rounded-full shadow-lg"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              )}

              {/* Gallery Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.additionalImages.slice(currentImageIndex, currentImageIndex + 4).map((image, index) => (
                  <motion.div
                    key={`additional-${index}`}
                    className="rounded-xl overflow-hidden shadow-xl cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    onClick={() => openLightbox(image, currentImageIndex + index, project.additionalImages)}
                  >
                    <div className="h-80 relative">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${project.title} additional image ${index + 1}`}
                        layout="fill"
                        objectFit="cover"
                        className="w-full h-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
        )}

        {project.category === "react" && project.codeSnips && (
          <motion.section className="mb-16" initial="initial" animate="animate" variants={fadeInUp}>
            <h2 className="text-4xl font-bold mb-12 text-center flex items-center justify-center">
              <Code className="w-10 h-10 mr-3 text-teal-500" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-teal-400">
                Code Snippets
              </span>
            </h2>

            <div className="max-w-6xl mx-auto">
              {project.codeSnips.length > 4 && (
                <div className="flex justify-between items-center mb-6">
                  <button
                    onClick={() => {
                      if (project.codeSnips.length > 4) {
                        setCurrentImageIndex((prev) =>
                          prev - 4 < 0 ? Math.max(0, project.codeSnips.length - 4) : prev - 4,
                        )
                      }
                    }}
                    className="bg-teal-500 hover:bg-teal-600 text-white p-2 rounded-full shadow-lg"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <span className="text-slate-600">
                    {currentImageIndex + 1}-{Math.min(currentImageIndex + 4, project.codeSnips.length)} of{" "}
                    {project.codeSnips.length}
                  </span>
                  <button
                    onClick={() => {
                      if (project.codeSnips.length > 4) {
                        setCurrentImageIndex((prev) => (prev + 4 >= project.codeSnips.length ? 0 : prev + 4))
                      }
                    }}
                    className="bg-teal-500 hover:bg-teal-600 text-white p-2 rounded-full shadow-lg"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.codeSnips.slice(currentImageIndex, currentImageIndex + 4).map((image, index) => (
                  <motion.div
                    key={`snippet-${index}`}
                    className="rounded-xl overflow-hidden shadow-xl cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    onClick={() => openLightbox(image, currentImageIndex + index, project.codeSnips)}
                  >
                    <div className="h-80 relative">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${project.title} code snippet ${index + 1}`}
                        layout="fill"
                        objectFit="cover"
                        className="w-full h-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
        )}

        {/* GitHub, Live Site, and Email Contact - for React projects */}
        {project.category === "react" && (
          <motion.section className="mb-16" initial="initial" animate="animate" variants={fadeInUp}>
            <h2 className="text-4xl font-bold mb-12 text-center text-slate-900">Project Links</h2>
            <div className="flex flex-wrap justify-center gap-6">
              {/* {project.githubUrl && (
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-colors duration-300 flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Code className="w-5 h-5 mr-2" />
                  View GitHub Repository
                </motion.a>
              )} */}
              {project.liveUrl && (
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-teal-600 hover:bg-teal-500 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-colors duration-300 flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Visit Live Site
                </motion.a>
              )}
              {project.emailContact && (
                <motion.a
                  href={`mailto:${project.emailContact}?subject=Request for ${project.title} Code&body=Hello, I'm interested in getting the code for your ${project.title} project.`}
                  className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-colors duration-300 flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Request Project Code
                </motion.a>
              )}
            </div>
          </motion.section>
        )}

        {/* Visit Website Button - for WordPress projects */}
        {project.category === "wordpress" && project.liveUrl && (
          <motion.section className="mb-16 text-center" initial="initial" animate="animate" variants={fadeInUp}>
            <motion.div className="inline-block" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-to-r from-teal-500 to-teal-400 hover:from-teal-600 hover:to-teal-500 text-white font-bold py-5 px-12 rounded-xl shadow-lg transition-all duration-300"
              >
                <Globe className="w-6 h-6 mr-3" />
                Visit Live Website
              </a>
            </motion.div>
            <p className="text-teal-500 mt-4">See the project in action</p>
          </motion.section>
        )}

        {/* Scroll to top button */}
        <motion.div
          className="fixed bottom-8 right-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="bg-teal-500 hover:bg-teal-600 text-white p-3 rounded-full shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowLeft className="w-6 h-6 transform rotate-90" />
          </motion.button>
        </motion.div>
        {/* Lightbox with Carousel */}
        {lightboxOpen && project && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={closeLightbox}
          >
            <motion.div
              className="relative max-w-7xl max-h-[90vh] overflow-hidden object-contain"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", damping: 15 }}
            >
              <Image
                src={project.images[lightboxIndex] || "/placeholder.svg"}
                alt="Enlarged view"
                width={1200}
                height={800}
                className="w-full h-full object-contain"
                style={{
                  objectFit: project.id === 1 ? "contain" : "contain",
                  maxHeight: project.id === 1 ? "80vh" : "90vh",
                  width: "auto",
                  margin: "0 auto",
                }}
              />

              {/* Navigation buttons */}
              <button
                className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/20 hover:bg-white/40 rounded-full p-3 text-white transition-colors"
                onClick={prevLightboxImage}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/20 hover:bg-white/40 rounded-full p-3 text-white transition-colors"
                onClick={nextLightboxImage}
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              <button
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 rounded-full p-2 text-white transition-colors"
                onClick={(e) => {
                  e.stopPropagation()
                  closeLightbox()
                }}
              >
                <ArrowLeft className="w-6 h-6 transform rotate-45" />
              </button>

              {/* Image counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full">
                {lightboxIndex + 1} / {project.images.length}
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Request Figma File Button - For UI/UX category only */}
        {project.category === "uiux" && (
          <motion.section className="mb-16 text-center" initial="initial" animate="animate" variants={fadeInUp}>
            <motion.button
              className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-8 rounded-xl shadow-lg transition-colors duration-300 flex items-center mx-auto mb-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FileText className="w-5 h-5 mr-2" />
              Request Figma File
            </motion.button>
            <p className="text-slate-600">Get the fully editable figma file for ${project.id * 10} dollars</p>
          </motion.section>
        )}

        {/* Prototype Image Lightbox */}
        {prototypeImageLightboxOpen && project && project.prototypeImages && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={closePrototypeImageLightbox}
          >
            <motion.div
              className="relative max-w-7xl overflow-hidden object-contain"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", damping: 15 }}
              style={{
                height: project.id === 2 ? "auto" : "90vh",
                maxHeight: project.id === 2 ? "none" : "90vh",
              }}
            >
              <Image
                src={project.prototypeImages[prototypeImageLightboxIndex] || "/placeholder.svg"}
                alt="Enlarged prototype view"
                width={project.id === 2 ? 420 : 1200}
                height={project.id === 2 ? 744 : 800}
                className="w-full h-full object-contain"
              />

              {/* Navigation buttons */}
              <button
                className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/20 hover:bg-white/40 rounded-full p-3 text-white transition-colors"
                onClick={prevPrototypeImageLightbox}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/20 hover:bg-white/40 rounded-full p-3 text-white transition-colors"
                onClick={nextPrototypeImageLightbox}
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              <button
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 rounded-full p-2 text-white transition-colors"
                onClick={(e) => {
                  e.stopPropagation()
                  closePrototypeImageLightbox()
                }}
              >
                <ArrowLeft className="w-6 h-6 transform rotate-45" />
              </button>

              {/* Image counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full">
                {prototypeImageLightboxIndex + 1} / {project.prototypeImages.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  )
}

