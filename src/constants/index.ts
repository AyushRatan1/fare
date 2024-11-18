import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

// Navigation items
export const navigation = [
  { id: "0", title: "Features", url: "#features" },

  { id: "2", title: "How to use", url: "#how-to-use" },
  { id: "3", title: "Roadmap", url: "#roadmap" },
  { id: "4", title: "New account", url: "#signup", onlyMobile: true },
  { id: "5", title: "Sign in", url: "https://ved-ai-front.vercel.app/" },
];

// Hero section icons
export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

// Notification images
export const notificationImages = [notification4, notification3, notification2];

// Company logos
export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

// Ved AI-specific services
export const vedAiServices = [
  "Personalized learning content",
  "Dynamic profile enhancement",
  "Content generation and customization",
];

// Icons for Ved AI services
export const vedAiServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

// Roadmap specific to Ved AI
export const roadmap = [
  {
    id: "0",
    title: "Multi-language support",
    text: "Enable the AI to support multiple Indian languages for a more inclusive learning experience.",
    date: "2024",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Enhanced personal profile insights",
    text: "Improve user profiling to provide more personalized and adaptive learning recommendations.",
    date: "2024",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Gamified learning experience",
    text: "Add gamified elements, such as badges and rewards, to increase engagement and motivation.",
    date: "2024",
    status: "planned",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with external knowledge sources",
    text: "Allow Ved AI to access diverse content sources for more enriched learning recommendations.",
    date: "2024",
    status: "progress",
    imageUrl: roadmap4,
  },
];

// Collaboration section text
export const collabText =
  "Ved AI brings smart automation, secure collaboration, and seamless integration to support your learning and growth.";

// Collaboration content items for Ved AI
export const collabContent = [
  { id: "0", title: "Seamless Integration", text: collabText },
  { id: "1", title: "Smart Automation" },
  { id: "2", title: "Secure and Private" },
];

// Collaboration apps
export const collabApps = [
  { id: "0", title: "Figma", icon: figma, width: 26, height: 36 },
  { id: "1", title: "Notion", icon: notion, width: 34, height: 36 },
  { id: "2", title: "Discord", icon: discord, width: 36, height: 28 },
  { id: "3", title: "Slack", icon: slack, width: 34, height: 35 },
  { id: "4", title: "Photoshop", icon: photoshop, width: 34, height: 34 },
  { id: "5", title: "Protopie", icon: protopie, width: 34, height: 34 },
  { id: "6", title: "Framer", icon: framer, width: 26, height: 34 },
  { id: "7", title: "Raindrop", icon: raindrop, width: 38, height: 32 },
];

// Pricing plans
export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI tutoring, basic content customization",
    price: "0",
    features: [
      "AI-assisted tutoring for fundamental topics",
      "Basic customization of learning paths",
      "Access to the app’s basic features at no cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced tutoring, analytics dashboard, priority support",
    price: "9.99",
    features: [
      "Advanced AI-driven tutoring with complex topic support",
      "Analytics dashboard to track learning progress",
      "Priority support to assist with any inquiries",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI solutions, in-depth analytics, dedicated support",
    price: null,
    features: [
      "Custom AI tutoring tailored to specific organizational needs",
      "Detailed analytics to monitor user engagement and progress",
      "Dedicated support and customization options",
    ],
  },
];

// Benefits tailored to Ved AI
export const benefits = [
  {
    id: "0",
    title: "Ask anything",
    text: "Allows students to quickly find answers to learning questions without extensive searching.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Continuous learning",
    text: "Uses advanced AI to support adaptive learning and provide relevant content over time.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Accessible anywhere",
    text: "Enables access to Ved AI on any device, making learning more convenient.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Real-time responses",
    text: "Provides fast and accurate responses to support timely learning.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Comprehensive support",
    text: "Assists with a wide range of educational topics for a complete learning experience.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
];

// Social media links
export const socials = [
  { id: "0", title: "Discord", iconUrl: discordBlack, url: "#" },
  { id: "1", title: "Twitter", iconUrl: twitter, url: "#" },
  { id: "2", title: "Instagram", iconUrl: instagram, url: "#" },
  { id: "3", title: "Telegram", iconUrl: telegram, url: "#" },
  { id: "4", title: "Facebook", iconUrl: facebook, url: "#" },
];
