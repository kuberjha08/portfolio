// constants/index.js

import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

// Frontend Skills
export const FRONTEND_SKILL = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Material UI",
    image: "mui.png",
    width: 80,
    height: 80,
  },
];

// Backend Skills
export const BACKEND_SKILL = [
  {
    skill_name: "Java",
    image: "java.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Spring Boot",
    image: "spring.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
  },
  // {
  //   skill_name: "Python",
  //   image: "python.png",
  //   width: 80,
  //   height: 80,
  // },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "MS-SQL",
    image: "mssql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Firebase",
    image: "firebase.png",
    width: 55,
    height: 55,
  },
];

// Mobile Development Skills
export const MOBILE_SKILL = [
  {
    skill_name: "React Native",
    image: "reactnative.png",
    width: 70,
    height: 70,
  },
  // {
  //   skill_name: "React Native CLI",
  //   image: "reactnativecli.png",
  //   width: 70,
  //   height: 70,
  // },
  {
    skill_name: "Expo",
    image: "expo.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Android Studio",
    image: "android.png",
    width: 70,
    height: 70,
  },
  // {
  //   skill_name: "iOS Development",
  //   image: "ios.png",
  //   width: 70,
  //   height: 70,
  // },
  // {
  //   skill_name: "Native Modules",
  //   image: "native.png",
  //   width: 70,
  //   height: 70,
  // },
];

// UI/Design Tools
export const DESIGN_SKILL = [
  {
    skill_name: "Figma",
    image: "figma.png",
    width: 50,
    height: 50,
  },
];

// DevOps & Tools
export const OTHER_SKILL = [
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "AWS",
    image: "aws.png",
    width: 70,
    height: 70,
  },
  // {
  //   skill_name: "Juspay",
  //   image: "juspay.png",
  //   width: 70,
  //   height: 70,
  // },
  // {
  //   skill_name: "Stripe",
  //   image: "stripe.png",
  //   width: 70,
  //   height: 70,
  // },
  // {
  //   skill_name: "PayU",
  //   image: "payu.png",
  //   width: 70,
  //   height: 70,
  // },
  // {
  //   skill_name: "Yes Bank",
  //   image: "yesbank.png",
  //   width: 70,
  //   height: 70,
  // },
  // {
  //   skill_name: "HDFC",
  //   image: "hdfc.png",
  //   width: 70,
  //   height: 70,
  // },
  {
    skill_name: "Git",
    image: "git.png",
    width: 70,
    height: 70,
  },
];

// Combined SKILL_DATA
export const SKILL_DATA = [
  ...FRONTEND_SKILL,
  ...BACKEND_SKILL,
  ...MOBILE_SKILL,
  ...DESIGN_SKILL,
  ...OTHER_SKILL,
];

export const SOCIALS = [
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://instagram.com",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    link: "https://facebook.com",
  },
  {
    name: "Twitter",
    icon: RxTwitterLogo,
    link: "https://x.com/kuberjha",
  },
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://linkedin.com",
  },
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com",
  },
  {
    name: "Discord",
    icon: RxDiscordLogo,
    link: "https://discord.com",
  },
];

// Your 5 Real Projects
export const PROJECTS = [
  {
    id: 1,
    title: "Wallet Management System",
    shortDescription: "Full-stack digital wallet with payment gateway integration",
    description: `A comprehensive wallet management solution built for my company with Java Spring Boot and MS-SQL backend. 
    The system features an admin portal for managing users, transactions, and settlements. 
    The customer mobile app (React Native) allows users to load money into their wallet using multiple payment gateways 
    (Yes Bank, HDFC, Juspay, PayU, Stripe), scan QR codes to pay other users, transfer money, and view transaction history. 
    Deployed on AWS with Docker containerization for scalability.`,
    fullDescription: `This enterprise-grade wallet management system serves thousands of users with real-time transaction processing. 
    The architecture includes:
    
    • **Backend**: Java Spring Boot microservices with REST APIs, JWT authentication, and MS-SQL database
    • **Admin Portal**: React.js + Vite dashboard for user management, transaction monitoring, and settlement reports
    • **Customer App**: React Native mobile app with biometric authentication, QR code scanning, and push notifications
    • **Payment Integration**: Multiple payment gateways (Yes Bank, HDFC, Juspay, PayU, Stripe) with fallback mechanisms
    • **DevOps**: Docker containers orchestrated on AWS ECS with auto-scaling and load balancing
    • **Security**: End-to-end encryption, PCI DSS compliance, and fraud detection algorithms
    
    The system handles wallet-to-wallet transfers, bank withdrawals, merchant payments, and generates automated settlement reports.`,
    image: "/projects/wallet.png",
    technologies: ["Java", "Spring Boot", "MS-SQL", "React", "React Native", "AWS", "Docker", "Juspay", "Stripe"],
    link: "https://example.com/wallet",
    github: "https://github.com/yourusername/wallet-management",
    category: "Full Stack",
    features: [
      "Multi-payment gateway integration",
      "QR code scanning for payments",
      "Real-time transaction processing",
      "Admin dashboard with analytics",
      "Push notifications for transactions",
      "Biometric authentication"
    ]
  },
  {
    id: 2,
    title: "Car Rental Platform",
    shortDescription: "B2B car rental marketplace with MERN stack",
    description: `A B2B car rental platform where businesses can list their fleet of vehicles for customers to rent. 
    Built with MERN stack (MongoDB, Express.js, React, Node.js) and Material UI for a polished interface. 
    The platform includes separate portals for admin, car owners (businesses), and customers.`,
    fullDescription: `This comprehensive car rental marketplace connects vehicle owners with renters in a seamless B2B2C model:
    
    • **Admin Portal**: Manage users, verify businesses, handle disputes, and view platform analytics
    • **Business Portal**: Car owners can list vehicles, manage availability, set dynamic pricing, and track bookings
    • **Customer Portal**: Search available cars by location, date, and preferences; book, pay, and leave reviews
    • **Features**: Real-time availability calendar, secure payment processing, rating system, and automated email notifications
    • **Tech Stack**: MongoDB for flexible vehicle data, Express.js REST APIs, React with Material UI, Node.js backend
    
    The platform handles complex business logic including insurance verification, damage deposits, and automated billing cycles.`,
    image: "/projects/rental.png",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "Material UI", "JWT", "Stripe"],
    link: "https://example.com/car-rental",
    github: "https://github.com/yourusername/car-rental",
    category: "MERN Stack",
    features: [
      "Dual portal architecture (Admin + Business)",
      "Real-time car availability",
      "Dynamic pricing algorithm",
      "Secure payment processing",
      "Rating and review system",
      "Automated email notifications"
    ]
  },
  {
    id: 3,
    title: "Doctor Appointment System",
    shortDescription: "Healthcare appointment platform with React Native mobile app",
    description: `A complete healthcare solution with React Native mobile app for patients and React.js web dashboard for doctors/clinics. 
    Built as a B2B product that clinics can purchase and customize. The system handles appointment booking, prescription management, 
    and patient records with role-based access control.`,
    fullDescription: `This white-label healthcare platform is designed for clinics and hospitals to manage their operations:
    
    • **Clinic Admin Portal**: React.js + Vite dashboard with Tailwind CSS for managing doctors, appointments, patients, and billing
    • **Doctor Interface**: Specialized view for doctors to see their schedule, write prescriptions, and access patient history
    • **Patient Mobile App**: React Native app for booking appointments, video consultations, viewing prescriptions, and reminders
    • **Features**: Appointment scheduling with calendar integration, prescription digitalization, patient records management, SMS reminders
    • **Business Model**: Sold as B2B product with customization options for each clinic's branding and workflows
    
    The system includes compliance with healthcare data regulations and secure storage of medical records with encryption.`,
    image: "/projects/doctor.png",
    technologies: ["MongoDB", "Express.js", "React", "React Native", "Node.js", "Tailwind CSS", "Socket.io", "JWT"],
    link: "https://example.com/doctor-appointment",
    github: "https://github.com/yourusername/doctor-appointment",
    category: "Full Stack + Mobile",
    features: [
      "Multi-role access (Admin, Doctor, Patient)",
      "Video consultation integration",
      "Digital prescriptions",
      "SMS/Email reminders",
      "Patient medical history",
      "White-label customization"
    ]
  },
  {
    id: 4,
    title: "Instagram Reels Clone",
    shortDescription: "React Native app with native modules for video processing",
    description: `A passion project exploring video processing and native modules in React Native. 
    This Instagram Reels clone focuses on the short-form video experience with custom native modules 
    for video compression, editing, and playback. Built with React Native CLI for maximum native control.`,
    fullDescription: `This experimental project pushed the boundaries of React Native with heavy native code integration:
    
    • **Video Processing**: Custom native modules (Java for Android, Swift for iOS) for video compression, trimming, and effects
    • **Reels Experience**: Infinite scroll video feed with smooth playback, double-tap to like, and comment integration
    • **Video Recording**: Camera integration with filters, timer, and gallery selection
    • **Native Features**: Background video processing, hardware-accelerated encoding, and efficient memory management
    • **Tech Stack**: React Native CLI, Native Modules (Java/Kotlin, Swift), Redux for state management, FFmpeg for video processing
    
    The app demonstrates how React Native can be extended with native code for performance-critical features like video editing.`,
    image: "/projects/insta.png",
    technologies: ["React Native CLI", "Native Modules", "Java", "Swift", "Redux", "FFmpeg", "Camera API"],
    link: "https://example.com/instagram-clone",
    github: "https://github.com/yourusername/instagram-clone",
    category: "Mobile App",
    features: [
      "Infinite scroll video feed",
      "Native video compression",
      "Double-tap like gesture",
      "Video recording with effects",
      "Comment and engagement features",
      "Hardware-accelerated playback"
    ]
  },
  {
    id: 5,
    title: "Digital Gold & Insurance Platform",
    shortDescription: "Fintech platform for gold investment and insurance purchase",
    description: `A comprehensive fintech solution enabling users to buy/sell digital gold and purchase insurance policies. 
    Integrated with multiple payment gateways (Yes Bank, HDFC, Juspay, PayU, Stripe) for seamless transactions. 
    Successfully deployed and sold to my company with both web and mobile applications.`,
    fullDescription: `This flagship fintech platform represents my most complex and successful project:
    
    • **Digital Gold Trading**: Users can buy/sell digital gold with real-time market prices, stored securely in vaults
    • **Insurance Marketplace**: Compare and purchase insurance policies from multiple providers with digital documentation
    • **Payment Integration**: Multiple gateways (Yes Bank, HDFC, Juspay, PayU, Stripe) with intelligent routing for optimal success rates
    • **Multi-Platform**: React Native CLI app for customers, Expo for quick iterations, and React.js web dashboard for admin
    • **Backend**: Node.js microservices handling transactions, user data, and integrations with banking APIs
    • **Compliance**: KYC verification, RBI guidelines for digital gold, IRDA compliance for insurance
    
    The platform handles real money transactions with end-to-end encryption, fraud detection, and automated reconciliation. 
    Successfully deployed in production serving my company's customers with thousands of transactions processed.`,
    image: "/projects/gold.png",
    technologies: [
      "React Native CLI", "Expo", "React", "Node.js", "Express.js",
      "MongoDB", "Juspay", "Stripe", "PayU", "Yes Bank API", "HDFC API",
      "Docker", "AWS"
    ],
    link: "https://example.com/digital-gold",
    github: "https://github.com/yourusername/digital-gold",
    category: "Fintech",
    features: [
      "Digital gold trading",
      "Insurance policy purchase",
      "Multi-payment gateway integration",
      "KYC verification",
      "Real-time market prices",
      "Transaction reconciliation",
      "Fraud detection system"
    ]
  }
];

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "YouTube",
        icon: FaYoutube,
        link: "https://youtube.com",
      },
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com",
      },
      {
        name: "Discord",
        icon: RxDiscordLogo,
        link: "https://discord.com",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://instagram.com",
      },
      {
        name: "Twitter",
        icon: RxTwitterLogo,
        link: "https://x.com/kuberjha",
      },
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://linkedin.com",
      },
    ],
  },
  {
    title: "About",
    data: [
      {
        name: "Become Sponsor",
        icon: null,
        link: "https://youtube.com",
      },
      {
        name: "Learning about me",
        icon: null,
        link: "https://example.com",
      },
      {
        name: "Contact Me",
        icon: null,
        link: "mailto:contact@example.com",
      },
    ],
  },
];

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
];

export const LINKS = {
  sourceCode: "https://github.com/kuberjha08/kuber-portfolio",
};