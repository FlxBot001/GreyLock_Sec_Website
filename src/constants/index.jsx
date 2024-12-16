import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Features", href: "#" },
  { label: "Workflow", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Testimonials", href: "#" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Advanced Threat Detection",
    description:
      "Utilize cutting-edge algorithms and AI-powered technology to identify and neutralize potential threats in real-time.",
  },
  {
    icon: <Fingerprint />,
    text: "Multi-Cloud Security Integration",
    description:
      "Seamlessly secure your infrastructure across multiple cloud platforms with GreyLock's robust and adaptable solutions.",
  },
  {
    icon: <ShieldHalf />,
    text: "Real-Time Monitoring",
    description:
      "Stay ahead with live updates and real-time visibility into your network and systems, enabling swift threat mitigation.",
  },
  {
    icon: <BatteryCharging />,
    text: "Customizable Security Policies",
    description:
      "Tailor security policies to your organization's unique needs, ensuring optimal protection for your data and systems.",
  },
  {
    icon: <PlugZap />,
    text: "Team Collaboration Hub",
    description:
      "Empower your security teams with collaborative tools for streamlined communication, incident handling, and decision-making.",
  },
  {
    icon: <GlobeLock />,
    text: "Comprehensive Analytics Dashboard",
    description:
      "Access a detailed analytics dashboard for actionable insights into security trends, vulnerabilities, and system health.",
  },
];

export const checklistItems = [
  {
    "title": "Simplify Threat Mitigation",
    "description": "Easily track and neutralize cyber threats with intuitive AI-driven workflows."
  },
  {
    "title": "Review Security Incidents Worry-Free",
    "description": "Gain real-time insights and detailed analysis to address vulnerabilities effortlessly."
  },
  {
    "title": "AI Assistance for Faster Resolutions",
    "description": "Leverage AI to automate repetitive security tasks and significantly reduce response times."
  },
  {
    "title": "Collaborate and Act in Minutes",
    "description": "Share incident reports and collaborate with your team seamlessly for rapid resolutions."
  }
];

export const pricingOptions = [
  {
    "title": "Starter",
    "price": "$0",
    "features": [
      "Basic Threat Detection",
      "5 GB Encrypted Data Storage",
      "Real-Time Security Notifications",
      "Basic Web Threat Analytics",
      "Limited Access to AI Assistance"
    ]
  },
  {
    "title": "Professional",
    "price": "$49",
    "features": [
      "Advanced Threat Detection and Mitigation",
      "50 GB Encrypted Data Storage",
      "Advanced Security Notifications",
      "Comprehensive Web Threat Analytics",
      "AI Assistance for Threat Analysis",
      "Multi-User Collaboration with Role-Based Access"
    ]
  },
  {
    "title": "Enterprise",
    "price": "$499",
    "features": [
      "Comprehensive Threat Detection and Mitigation",
      "Unlimited Encrypted Data Storage",
      "Enterprise-Grade Security Network",
      "Custom Web Threat Analytics Dashboards",
      "Dedicated AI Security Advisor",
      "Multi-Tenant Support",
      "24/7 Priority Support",
      "Custom Integrations for Business Workflows",
      "Compliance Monitoring and Reporting"
    ]
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Carrers" },
];

export const socialLinks = [
  { href: "#", text: "X"}
  { href: "#", text: "Facebook"}
  { href: "#", text: "LinkedIn"}
  { href: "#", text: "Instagram"}
  { href: "#", text: "Github"}
]