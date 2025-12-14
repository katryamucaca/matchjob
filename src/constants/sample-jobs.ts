import { JobData } from "@/components/general/job-card";

export interface ExtendedJobData extends JobData {
  employmentType: string;
  salaryRange: string;
  postedDate: string;
  about: string;
  requirements: string[];
  externalUrl?: string;
}

export const SAMPLE_JOBS: ExtendedJobData[] = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    description:
      "We're looking for an experienced frontend developer with expertise in React, TypeScript, and modern web technologies. Join our dynamic team building next-generation web applications.",
    matchPercentage: 95,
    employmentType: "Full-time",
    salaryRange: "$120k - $180k",
    postedDate: "Posted 2 days ago",
    about:
      "We're looking for an experienced frontend developer with expertise in React, TypeScript, and modern web technologies. Join our dynamic team building next-generation web applications that serve millions of users worldwide.",
    requirements: [
      "5+ years of experience with React and TypeScript",
      "Strong understanding of modern web development practices",
      "Experience with state management libraries (Redux, Zustand, etc.)",
      "Excellent communication and collaboration skills",
    ],
    externalUrl: "https://example.com/job/1",
  },
  {
    id: "2",
    title: "Full Stack Engineer",
    company: "StartupHub",
    location: "Remote",
    description:
      "Join our fast-growing startup as a full stack engineer. Work with React, Node.js, and cloud technologies to build scalable solutions for our customers.",
    matchPercentage: 92,
    employmentType: "Full-time",
    salaryRange: "$110k - $150k",
    postedDate: "Posted 5 days ago",
    about:
      "Join our fast-growing startup as a Full Stack Engineer. You'll work on exciting projects across the entire stack, from backend APIs to beautiful user interfaces. Be part of a team that values innovation and creativity.",
    requirements: [
      "3+ years of full stack development experience",
      "Proficiency in Node.js and React",
      "Experience with databases (PostgreSQL, MongoDB)",
      "Strong problem-solving skills",
    ],
    externalUrl: "https://example.com/job/2",
  },
  {
    id: "3",
    title: "UI/UX Developer",
    company: "Design Studio Pro",
    location: "New York, NY",
    description:
      "Passionate about creating beautiful, user-friendly interfaces? We need a UI/UX developer who can bridge the gap between design and development.",
    matchPercentage: 88,
    employmentType: "Full-time",
    salaryRange: "$100k - $140k",
    postedDate: "Posted 1 week ago",
    about:
      "We're seeking a talented UI/UX Developer to bridge the gap between design and development. Create stunning, user-friendly interfaces that delight our customers and push the boundaries of web design.",
    requirements: [
      "Strong portfolio showcasing UI/UX work",
      "Proficiency in modern CSS and JavaScript",
      "Experience with design tools (Figma, Sketch)",
      "Understanding of accessibility standards",
    ],
    externalUrl: "https://example.com/job/3",
  },
  {
    id: "4",
    title: "React Developer",
    company: "Digital Solutions",
    location: "Austin, TX",
    description:
      "Looking for a React specialist to help build our new product line. Experience with hooks, context, and state management libraries required.",
    matchPercentage: 87,
    employmentType: "Full-time",
    salaryRange: "$95k - $125k",
    postedDate: "Posted 3 days ago",
    about:
      "Looking for a React specialist to help build our new product line. You'll work with the latest React features and help shape the future of our applications.",
    requirements: [
      "3+ years of React development experience",
      "Deep understanding of React hooks and context",
      "Experience with modern build tools",
      "Team player with strong communication skills",
    ],
    externalUrl: "https://example.com/job/4",
  },
  {
    id: "5",
    title: "JavaScript Engineer",
    company: "WebWorks Agency",
    location: "Boston, MA",
    description:
      "Join our team of JavaScript experts building cutting-edge web applications. Knowledge of modern frameworks and best practices essential.",
    matchPercentage: 85,
    employmentType: "Full-time",
    salaryRange: "$105k - $135k",
    postedDate: "Posted 1 week ago",
    about:
      "Join our team of JavaScript experts building cutting-edge web applications. We work with the latest technologies and prioritize clean, maintainable code.",
    requirements: [
      "4+ years of JavaScript development",
      "Experience with modern frameworks (React, Vue, or Angular)",
      "Strong understanding of ES6+ features",
      "Passion for writing clean, tested code",
    ],
    externalUrl: "https://example.com/job/5",
  },
  {
    id: "6",
    title: "Frontend Architect",
    company: "Enterprise Solutions",
    location: "Seattle, WA",
    description:
      "Lead our frontend architecture initiatives. Design scalable, maintainable systems and mentor junior developers in best practices.",
    matchPercentage: 83,
    employmentType: "Full-time",
    salaryRange: "$130k - $160k",
    postedDate: "Posted 4 days ago",
    about:
      "Lead our frontend architecture initiatives. Design scalable, maintainable systems and mentor junior developers in best practices. Shape the technical direction of our products.",
    requirements: [
      "7+ years of frontend development experience",
      "Proven experience in architecture design",
      "Strong leadership and mentoring skills",
      "Excellent understanding of performance optimization",
    ],
    externalUrl: "https://example.com/job/6",
  },
  {
    id: "7",
    title: "Web Developer",
    company: "Creative Labs",
    location: "Los Angeles, CA",
    description:
      "Create engaging web experiences for our diverse client base. Work with the latest technologies in a creative, collaborative environment.",
    matchPercentage: 80,
    employmentType: "Full-time",
    salaryRange: "$85k - $115k",
    postedDate: "Posted 6 days ago",
    about:
      "Create engaging web experiences for our diverse client base. Work with the latest technologies in a creative, collaborative environment where your ideas matter.",
    requirements: [
      "2+ years of web development experience",
      "Proficiency in HTML, CSS, and JavaScript",
      "Experience with at least one modern framework",
      "Creative problem-solving abilities",
    ],
    externalUrl: "https://example.com/job/7",
  },
  {
    id: "8",
    title: "Software Engineer - Frontend",
    company: "Innovation Inc.",
    location: "Chicago, IL",
    description:
      "Be part of our engineering team building products that impact millions of users. Strong JavaScript skills and attention to detail required.",
    matchPercentage: 78,
    employmentType: "Full-time",
    salaryRange: "$90k - $120k",
    postedDate: "Posted 2 weeks ago",
    about:
      "Be part of our engineering team building products that impact millions of users. We value quality, collaboration, and continuous learning.",
    requirements: [
      "3+ years of frontend development experience",
      "Strong JavaScript and modern framework skills",
      "Attention to detail and quality",
      "Experience with testing and CI/CD",
    ],
    externalUrl: "https://example.com/job/8",
  },
];
