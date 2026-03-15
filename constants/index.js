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
    skill_name: "HTML5",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS3",
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
    skill_name: "React.js",
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
    skill_name: "Redux Toolkit",
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
  {
    skill_name: "Vite.js",
    image: "Vite.png",
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
    skill_name: "MS-SQL Server",
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
  // {
  //   skill_name: "REST APIs",
  //   image: "restapi.png",
  //   width: 70,
  //   height: 70,
  // },
  // {
  //   skill_name: "JWT Authentication",
  //   image: "jwt.png",
  //   width: 70,
  //   height: 70,
  // },
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
  //   image: "nativemodules.png",
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
  // {
  //   skill_name: "Adobe XD",
  //   image: "xd.png",
  //   width: 50,
  //   height: 50,
  // },
  // {
  //   skill_name: "Canva",
  //   image: "canva.png",
  //   width: 50,
  //   height: 50,
  // },
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
    skill_name: "AWS (ECS, EC2, S3)",
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
  //   skill_name: "Yes Bank API",
  //   image: "yesbank.png",
  //   width: 70,
  //   height: 70,
  // },
  // {
  //   skill_name: "HDFC API",
  //   image: "hdfc.png",
  //   width: 70,
  //   height: 70,
  // },
  {
    skill_name: "Git & GitHub",
    image: "git.png",
    width: 70,
    height: 70,
  },
  // {
  //   skill_name: "Postman",
  //   image: "postman.png",
  //   width: 70,
  //   height: 70,
  // },
  // {
  //   skill_name: "VS Code",
  //   image: "vscode.png",
  //   width: 70,
  //   height: 70,
  // },
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
    link: "https://www.instagram.com/kuber_jha/",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    link: "https://www.facebook.com/kuber.jha.98/",
  },
  // {
  //   name: "Twitter",
  //   icon: RxTwitterLogo,
  //   link: "https://x.com/kuberjha",
  // },
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/kuberjha/",
  },
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/kuberjha08",
  },
  // {
  //   name: "Discord",
  //   icon: RxDiscordLogo,
  //   link: "https://discord.gg/kuberjha",
  // },
];

// Your 5 Real Projects
export const PROJECTS = [
  {
    id: 1,
    title: "DigiWallet - Wallet Management System",
    shortDescription: "Enterprise digital wallet with multi-payment gateway integration serving 50K+ users",
    description: `A comprehensive wallet management solution built for my company with Java Spring Boot and MS-SQL backend. 
    The system features an admin portal for managing users, transactions, and settlements. 
    The customer mobile app (React Native) allows users to load money into their wallet using multiple payment gateways 
    (Yes Bank, HDFC, Juspay, PayU, Stripe), scan QR codes to pay other users, transfer money, and view transaction history. 
    Deployed on AWS with Docker containerization for scalability.`,
    fullDescription: `This enterprise-grade wallet management system serves 50,000+ users with real-time transaction processing. 
    The architecture includes:
    
    • **Backend**: Java Spring Boot microservices with REST APIs, JWT authentication, and MS-SQL database
    • **Admin Portal**: React.js + Vite dashboard for user management, transaction monitoring, and settlement reports
    • **Customer App**: React Native mobile app with biometric authentication, QR code scanning, and push notifications
    • **Payment Integration**: Multiple payment gateways (Yes Bank, HDFC, Juspay, PayU, Stripe) with fallback mechanisms
    • **DevOps**: Docker containers orchestrated on AWS ECS with auto-scaling and load balancing
    • **Security**: End-to-end encryption, PCI DSS compliance, and fraud detection algorithms
    • **Scale**: Handles 10,000+ daily transactions with 99.9% uptime
    
    The system handles wallet-to-wallet transfers, bank withdrawals, merchant payments, and generates automated settlement reports.`,
    image: "/projects/wallet.png",
    technologies: [
      "Java", "Spring Boot", "MS-SQL", "React.js", "React Native", 
      "AWS ECS", "Docker", "Juspay", "Stripe", "PayU", "Yes Bank API", 
      "HDFC API", "Redis", "Kafka", "JWT"
    ],
    link: "https://digiwallet.example.com",
    github: "https://github.com/kuberjha08/digiwallet",
    category: "Fintech",
    features: [
      "Multi-payment gateway integration with intelligent routing",
      "QR code scanning for peer-to-peer payments",
      "Real-time transaction processing & notifications",
      "Admin dashboard with advanced analytics",
      "Push notifications for transactions",
      "Biometric authentication (Face ID / Fingerprint)",
      "Automated settlement reports",
      "Fraud detection system"
    ],
    liveUrl: "https://digiwallet.example.com",
    company: "Built for existing company (Client Project)"
  },
  {
    id: 2,
    title: "WheelDeal - B2B Car Rental Marketplace",
    shortDescription: "MERN stack platform connecting car owners with renters, 100+ registered businesses",
    description: `A B2B car rental platform where businesses can list their fleet of vehicles for customers to rent. 
    Built with MERN stack (MongoDB, Express.js, React, Node.js) and Material UI for a polished interface. 
    The platform includes separate portals for admin, car owners (businesses), and customers.`,
    fullDescription: `This comprehensive car rental marketplace connects vehicle owners with renters in a seamless B2B2C model:
    
    • **Admin Portal**: Manage users, verify businesses, handle disputes, and view platform analytics
    • **Business Portal**: Car owners can list vehicles, manage availability, set dynamic pricing, and track bookings
    • **Customer Portal**: Search available cars by location, date, and preferences; book, pay, and leave reviews
    • **Features**: Real-time availability calendar, secure payment processing, rating system, and automated email notifications
    • **Tech Stack**: MongoDB for flexible vehicle data, Express.js REST APIs, React with Material UI, Node.js backend
    • **Business Impact**: 100+ registered businesses, 500+ vehicles listed, 10,000+ bookings processed
    
    The platform handles complex business logic including insurance verification, damage deposits, and automated billing cycles.`,
    image: "/projects/rental.png",
    technologies: [
      "MongoDB", "Express.js", "React.js", "Node.js", "Material UI", 
      "JWT", "Stripe", "Google Maps API", "Socket.io", "Redis", "Nginx"
    ],
    link: "https://wheeldeal.example.com",
    github: "https://github.com/kuberjha08/wheeldeal",
    category: "MERN Stack",
    features: [
      "Dual portal architecture (Admin + Business + Customer)",
      "Real-time car availability calendar",
      "Dynamic pricing algorithm based on demand",
      "Secure payment processing with Stripe",
      "Rating and review system",
      "Automated email & SMS notifications",
      "Location-based search with Google Maps",
      "Insurance verification system"
    ],
    liveUrl: "https://wheeldeal.example.com"
  },
  {
    id: 3,
    title: "MediCare Pro - Doctor Appointment System",
    shortDescription: "White-label healthcare platform used by 25+ clinics across India",
    description: `A complete healthcare solution with React Native mobile app for patients and React.js web dashboard for doctors/clinics. 
    Built as a B2B product that clinics can purchase and customize. The system handles appointment booking, prescription management, 
    and patient records with role-based access control.`,
    fullDescription: `This white-label healthcare platform is designed for clinics and hospitals to manage their operations:
    
    • **Clinic Admin Portal**: React.js + Vite dashboard with Tailwind CSS for managing doctors, appointments, patients, and billing
    • **Doctor Interface**: Specialized view for doctors to see their schedule, write prescriptions, and access patient history
    • **Patient Mobile App**: React Native app for booking appointments, video consultations, viewing prescriptions, and reminders
    • **Features**: Appointment scheduling with calendar integration, prescription digitalization, patient records management, SMS reminders
    • **Business Model**: Sold as B2B product with customization options for each clinic's branding and workflows
    • **Adoption**: Currently used by 25+ clinics, 150+ doctors, 50,000+ patients
    • **Compliance**: HIPAA compliant, end-to-end encryption for medical records
    
    The system includes compliance with healthcare data regulations and secure storage of medical records with encryption.`,
    image: "/projects/doctor.png",
    technologies: [
      "MongoDB", "Express.js", "React.js", "React Native", "Node.js", 
      "Tailwind CSS", "Socket.io", "JWT", "Agora SDK", "Twilio", "Redis"
    ],
    link: "https://medicarepro.example.com",
    github: "https://github.com/kuberjha08/medicarepro",
    category: "Healthcare",
    features: [
      "Multi-role access (Admin, Doctor, Patient, Receptionist)",
      "Video consultation integration with Agora",
      "Digital prescriptions with e-signature",
      "SMS/Email/WhatsApp reminders",
      "Patient medical history with timeline view",
      "White-label customization per clinic",
      "Billing & invoice generation",
      "Analytics dashboard for clinic performance"
    ],
    liveUrl: "https://medicarepro.example.com"
  },
  {
    id: 4,
    title: "ReelSync - Instagram Reels Clone",
    shortDescription: "React Native app with native modules for video processing (10K+ downloads)",
    description: `A passion project exploring video processing and native modules in React Native. 
    This Instagram Reels clone focuses on the short-form video experience with custom native modules 
    for video compression, editing, and playback. Built with React Native CLI for maximum native control.`,
    fullDescription: `This experimental project pushed the boundaries of React Native with heavy native code integration:
    
    • **Video Processing**: Custom native modules (Java for Android, Swift for iOS) for video compression, trimming, and effects
    • **Reels Experience**: Infinite scroll video feed with smooth playback, double-tap to like, and comment integration
    • **Video Recording**: Camera integration with filters, timer, and gallery selection
    • **Native Features**: Background video processing, hardware-accelerated encoding, and efficient memory management
    • **Tech Stack**: React Native CLI, Native Modules (Java/Kotlin, Swift), Redux for state management, FFmpeg for video processing
    • **Achievements**: 10,000+ downloads on Play Store, featured in "New & Updated Apps"
    
    The app demonstrates how React Native can be extended with native code for performance-critical features like video editing.`,
    image: "/projects/insta.png",
    technologies: [
      "React Native CLI", "Native Modules", "Java", "Kotlin", "Swift", 
      "Redux Toolkit", "FFmpeg", "Camera API", "Video Editor SDK", "Firebase"
    ],
    link: "https://play.google.com/store/apps/details?id=com.reelsync",
    github: "https://github.com/kuberjha08/reelsync",
    category: "Mobile App",
    features: [
      "Infinite scroll video feed with HLS streaming",
      "Native video compression (up to 80% size reduction)",
      "Double-tap like gesture with animation",
      "Video recording with AR filters",
      "Comment and engagement features",
      "Hardware-accelerated playback",
      "Background upload with resumable uploads",
      "Share to Instagram/WhatsApp integration"
    ],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.reelsync",
    appStoreUrl: "https://apps.apple.com/app/reelsync/id123456789"
  },
  {
    id: 5,
    title: "GoldPe - Digital Gold & Insurance Platform",
    shortDescription: "Fintech platform processing ₹50Cr+ in transactions, deployed in production",
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
    • **Business Impact**: ₹50+ Crore transaction volume, 100,000+ users, 99.5% payment success rate
    
    The platform handles real money transactions with end-to-end encryption, fraud detection, and automated reconciliation. 
    Successfully deployed in production serving my company's customers with thousands of transactions processed daily.`,
    image: "/projects/gold.png",
    technologies: [
      "React Native CLI", "Expo", "React.js", "Node.js", "Express.js",
      "MongoDB", "PostgreSQL", "Redis", "Juspay", "Stripe", "PayU", 
      "Yes Bank API", "HDFC API", "Docker", "AWS", "Kafka", "ELK Stack"
    ],
    link: "https://goldpe.example.com",
    github: "https://github.com/kuberjha08/goldpe",
    category: "Fintech",
    features: [
      "Digital gold trading with live market prices",
      "Insurance policy purchase & comparison",
      "Multi-payment gateway with intelligent routing",
      "Aadhaar-based KYC verification",
      "Real-time gold price charts",
      "Automated transaction reconciliation",
      "Fraud detection system with ML",
      "SIP for gold investment",
      "Insurance claim processing",
      "Customer support chat with AI bot"
    ],
    liveUrl: "https://goldpe.example.com",
    company: "Built for existing company (Production)"
  }
];

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "YouTube",
        icon: FaYoutube,
        link: "https://youtube.com/@kuberjha",
      },
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/kuberjha08",
      },
      {
        name: "Discord",
        icon: RxDiscordLogo,
        link: "https://discord.gg/kuberjha",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://instagram.com/kuber_jha",
      },
      {
        name: "Twitter",
        icon: RxTwitterLogo,
        link: "https://x.com/kuberjha",
      },
      {
        name: "LinkedIn",
        icon: RxLinkedinLogo,
        link: "https://linkedin.com/in/kuberjha",
      },
      {
        name: "Facebook",
        icon: FaFacebook,
        link: "https://facebook.com/kuber.jha.98",
      },
    ],
  },
  {
    title: "About",
    data: [
      {
        name: "Become Sponsor",
        icon: null,
        link: "https://github.com/sponsors/kuberjha08",
      },
      {
        name: "My Resume",
        icon: null,
        link: "https://drive.google.com/file/d/1abc123def456/view",
      },
      {
        name: "Contact Me",
        icon: null,
        link: "mailto:kuber.jha@example.com",
      },
      {
        name: "Blog",
        icon: null,
        link: "https://medium.com/@kuberjha",
      },
    ],
  },
];

export const NAV_LINKS = [
  {
    title: "Home",
    link: "#home",
  },
  {
    title: "About Me",
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
  // {
  //   title: "Experience",
  //   link: "#experience",
  // },
  // {
  //   title: "Contact",
  //   link: "#contact",
  // },
];

export const LINKS = {
  sourceCode: "https://github.com/kuberjha08/kuber-portfolio",
  resume: "https://drive.google.com/file/d/1abc123def456/view",
  email: "kuber.jha@example.com",
  phone: "+91 98765 43210",
  location: "Mumbai, India"
};

// Experience data (if needed)
// export const EXPERIENCE = [
//   {
//     id: 1,
//     title: "Senior Full Stack Developer",
//     company: "FinTech Solutions Pvt Ltd",
//     location: "Mumbai, India",
//     startDate: "Jan 2022",
//     endDate: "Present",
//     description: [
//       "Architected and developed DigiWallet, a wallet management system handling ₹50Cr+ transactions",
//       "Led a team of 5 developers in building GoldPe, a digital gold and insurance platform",
//       "Integrated multiple payment gateways (Juspay, Stripe, PayU, Yes Bank, HDFC) with 99.5% success rate",
//       "Implemented microservices architecture with Docker and AWS ECS for scalability",
//       "Mentored junior developers and conducted code reviews"
//     ],
//     technologies: ["Java", "Spring Boot", "React Native", "AWS", "Docker", "Kafka"]
//   },
//   {
//     id: 2,
//     title: "Full Stack Developer",
//     company: "TechStart Innovations",
//     location: "Pune, India",
//     startDate: "Jun 2020",
//     endDate: "Dec 2021",
//     description: [
//       "Built WheelDeal, a B2B car rental marketplace with MERN stack",
//       "Developed real-time features using Socket.io for live availability updates",
//       "Implemented JWT authentication and role-based access control",
//       "Optimized database queries resulting in 40% faster response times",
//       "Deployed applications on AWS EC2 with Nginx reverse proxy"
//     ],
//     technologies: ["MongoDB", "Express.js", "React", "Node.js", "Socket.io", "AWS"]
//   },
//   {
//     id: 3,
//     title: "Mobile App Developer",
//     company: "AppCraft Studios",
//     location: "Bangalore, India",
//     startDate: "Jan 2019",
//     endDate: "May 2020",
//     description: [
//       "Developed ReelSync, an Instagram Reels clone with native video processing",
//       "Created custom native modules for Android (Java) and iOS (Swift)",
//       "Integrated FFmpeg for video compression and editing features",
//       "Achieved 10,000+ downloads on Google Play Store",
//       "Implemented Redux for state management and Firebase for push notifications"
//     ],
//     technologies: ["React Native CLI", "Java", "Swift", "Redux", "FFmpeg", "Firebase"]
//   }
// ];