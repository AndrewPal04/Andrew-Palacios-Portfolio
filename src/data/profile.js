export const profile = {
  name: "Andrew Palacios Jr.",
  initials: "AP",
  title: "Software Engineer",
  tagline: "I build full-stack web and mobile apps.",
  heroIntro:
    "Full-stack software engineer and recent Cal Poly Pomona Computer Science graduate. As Lead Software Engineer at Apulza, I build web, mobile, and AI features for a study app designed for neurodivergent students.",
  contactBlurb:
    "I'm looking for new grad software engineering roles and I'm open to relocating. Email is the best way to reach me.",
  email: "andrewpalacios2004@gmail.com",
  github: "https://github.com/AndrewPal04",
  linkedin: "https://www.linkedin.com/in/andrew-palacios-55ba29307",
  repo: "https://github.com/AndrewPal04/Andrew-Palacios-Portfolio",
  quickFacts: [
    { label: "Focus", value: "Full-stack web and mobile" },
    { label: "Based in", value: "Southern California" },
    { label: "Status", value: "New grad roles, open to relocating" },
  ],
  interests:
    "Football is my biggest hobby. I'm a Raiders fan and could talk about it for hours. I also love video games, with Pokémon as a longtime favorite, and teaching has become a hobby of its own. Outside of that, I like running, going to the gym, and hanging out with friends.",
  about: [
    "I'm a recent Computer Science graduate from Cal Poly Pomona, looking for a new grad software engineering role.",
    "I joined Apulza, a startup building a study companion for ADHD and neurodivergent students, as an intern and became Lead Software Engineer in September. I work across mobile, backend, and web, and I also help interview candidates, plan sprints, and manage interns. I've taught programming one-on-one since 2023, covering Python, Java, and introductory machine learning.",
  ],
};

export const experience = [
  {
    role: "Lead Software Engineer",
    org: "Apulza",
    orgUrl: "https://apulza-ai.com",
    detail: "Startup",
    dates: "Sep 2026 – Present",
    summary:
      "Leading engineering work across mobile, backend, and web as the product prepares for beta.",
    tech: ["FastAPI", "PostgreSQL", "Next.js", "TypeScript", "Groq API", "Cloudflare Workers"],
    points: [
      "Help interview candidates, plan sprints, and manage interns while building across the stack.",
      "Designed and built My Tutor, a Socratic AI tutoring module, including its data model, FastAPI endpoints, hint ladder, cheating classifier, student and counselor dashboards, and test suite.",
      "Led beta readiness work: invite-only sign-up with an admin allowlist, beta terms, account deletion, admin-editable plans and limits, and hosting docs and deployment setup.",
      "Added beta sign-up to the public marketing site using Cloudflare D1 with Google Sheets sync, plus a QR short link.",
      "Remain the only engineer on the mobile product.",
    ],
  },
  {
    role: "Software Engineer Intern",
    org: "Apulza",
    orgUrl: "https://apulza-ai.com",
    detail: "Startup",
    dates: "Jun 2026 – Aug 2026",
    summary: "Built the mobile app and worked across the stack on a study app for ADHD and neurodivergent students.",
    tech: ["React Native (Expo)", "TypeScript", "FastAPI", "PostgreSQL", "Next.js", "Vite"],
    points: [
      "Built the cross-platform mobile app from the ground up as its only engineer (Expo/React Native, TypeScript), including onboarding, courses, assignments, notifications, and gamification.",
      "Built AI assignment breakdowns with Groq and a rule-based fallback, in-app notifications, and encrypted Canvas token storage.",
      "Built features under an accessibility-first design framework for ADHD and neurodivergent users, applying cognitive-load and emotional-safety principles to UI and copy.",
      "Contributed UI features and fixes to the public marketing site (React, TypeScript, Vite), including a Meet the Team section. The site has reached roughly 2,000 unique visitors since launch.",
    ],
  },
  {
    role: "Coding Instructor",
    org: "Coding Minds Academy",
    detail: "Diamond Bar, CA",
    dates: "Sep 2023 – Present",
    summary: "One-on-one programming instruction for students across multiple languages.",
    tech: ["Python", "Java", "OOP", "Machine Learning"],
    points: [
      "Teach weekly one-on-one lessons to 12–15 students per semester across Python, Java, OOP, and introductory machine learning, and lead most of the Python and ML curriculum.",
      "Every student I've taught has placed in the top 3 at GameGala, with multiple 1st and 2nd place individual project finishes over two years.",
    ],
  },
];

export const education = {
  school: "California State Polytechnic University, Pomona",
  degree: "B.S. Computer Science",
  dates: "Aug 2022 – Aug 2026",
  honors: [
    "Magna Cum Laude",
    "3.67 GPA",
    "Dean's List 2023–2026",
    "President's List 2025–2026",
  ],
  coursework: [
    "Algorithms",
    "Operating Systems",
    "Computer Networks",
    "Database Systems",
    "Software Engineering",
    "Mobile Application Development",
    "Machine Learning",
    "Artificial Intelligence",
  ],
};

export const skills = [
  {
    label: "Languages",
    items: ["Python", "Java", "JavaScript", "TypeScript", "Dart", "C", "C++", "SQL"],
  },
  {
    label: "Web and mobile",
    items: [
      "React",
      "Next.js",
      "React Native (Expo)",
      "Flutter",
      "Node.js",
      "FastAPI",
      "TanStack Query",
    ],
  },
  {
    label: "Data and cloud",
    items: [
      "PostgreSQL",
      "SQLite",
      "Supabase",
      "Firebase",
      "Cloudflare Workers",
      "Cloudflare D1",
      "Google Cloud Platform",
    ],
  },
  {
    label: "Tools",
    items: ["Git", "Docker", "GitHub Actions", "Linux", "GDB", "Groq API", "OpenAI API"],
  },
  {
    label: "Robotics",
    items: ["ROS2", "MAVROS", "Gazebo", "ORB-SLAM3", "OMPL"],
  },
  {
    label: "Concepts",
    items: ["Distributed Systems", "Networking", "CI/CD", "Automated Testing", "OOP"],
  },
];
