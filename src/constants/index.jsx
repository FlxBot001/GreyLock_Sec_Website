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
  { label: "Features", href: "#features" }, // Navigates to the Features section of the page
  { label: "Workflow", href: "#workflow" }, // Navigates to the Workflow section
  { label: "Pricing", href: "#pricing" }, // Navigates to the Pricing section
  { label: "Testimonials", href: "#testimonials" }, // Navigates to the Testimonials section
];

export const testimonials = [
  {
    user: "Mark Thompson",
    company: "SecureOps Solutions",
    image: user1,
    text: "GreyLock System revolutionized our security posture. Their real-time threat detection capabilities and seamless multi-cloud integration helped us mitigate vulnerabilities effectively. Their expertise in cybersecurity is unmatched.",
  },
  {
    user: "Sarah Collins",
    company: "NextGen Cloud Services",
    image: user2,
    text: "We were struggling with compliance and data security until GreyLock System came in. Their advanced analytics and automated reporting streamlined our compliance processes, saving us countless hours and ensuring audit readiness.",
  },
  {
    user: "James Walker",
    company: "Apex Financial Technologies",
    image: user3,
    text: "Partnering with GreyLock System was a game-changer for us. Their AI-driven threat intelligence platform detected anomalies in our transaction systems before they could escalate, safeguarding our operations and customer trust.",
  },
  {
    user: "Linda Carter",
    company: "SmartCity Innovators",
    image: user4,
    text: "The IoT security framework provided by GreyLock System was instrumental in securing our smart city infrastructure. Their proactive approach to device authentication and real-time monitoring ensured the safety of critical systems.",
  },
  {
    user: "Kevin Martinez",
    company: "Precision Healthcare",
    image: user5,
    text: "GreyLock System’s focus on data privacy and compliance helped us meet stringent healthcare regulations. Their automated tools for data management and reporting have become indispensable to our operations.",
  },
  {
    user: "Elizabeth Green",
    company: "CoreChain Logistics",
    image: user6,
    text: "We needed a secure and transparent blockchain solution for our supply chain, and GreyLock delivered beyond expectations. Their platform enhanced asset tracking and reduced discrepancies, building trust with our partners.",
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
  { href: "/features", text: "Features" }, // Redirects to a page detailing platform features
  { href: "/workflow", text: "Workflow" }, // Redirects to a page explaining the workflow and processes
  { href: "/subscription", text: "Subscription" }, // Redirects to the subscription plans and pricing page
  { href: "/downloads", text: "Downloads" }, // Redirects to a page offering downloads for tools, apps, or resources
  { href: "/release-notes", text: "Release Notes" }, // Redirects to a page listing platform updates and release notes
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Carrers" },
];

export const socialLinks = [
  { href: "#", text: "X"},
  { href: "#", text: "Facebook"},
  { href: "#", text: "LinkedIn"},
  { href: "#", text: "Instagram"},
  { href: "#", text: "Github"},
];

export const contactDetails = [
  {
    title: "Phone",
    value: "+254 1112-55301",
    icon: "📞", // Optional: Add emojis or icons to represent each detail.
  },
  {
    title: "Email",
    value: "support@greylock.com",
    icon: "✉️",
  },
  {
    title: "Address",
    value: "123 Cyber Lane, Secure City, NY 10001",
    icon: "📍",
  },
];