// Each project gets a card on the home page and a page at /projects/<slug>.
//
// `challenges` and `nextSteps` are optional. Add them in your own words and
// they appear on the project page automatically:
//   challenges: ["The hardest part was..."],
//   nextSteps: ["If I rebuilt this, I would..."],
export const projects = [
  {
    slug: "my-tutor",
    name: "My Tutor",
    category: "AI feature at Apulza",
    summary:
      "A Socratic AI tutor that guides students through questions instead of handing over assignment answers.",
    tech: ["FastAPI", "PostgreSQL", "Next.js", "TypeScript", "Groq API"],
    links: [{ label: "About Apulza", href: "https://apulza-ai.com" }],
    role: "Designed and built at Apulza",
    screenshot: {
      src: "/projects/my-tutor-chat.png",
      width: 726,
      height: 623,
      alt: "My Tutor chat session for a data structures quiz, where the tutor explains that a stack is LIFO and a queue is FIFO, then asks for a real-world example",
      caption:
        "A study session: the tutor answers a basic question directly, then follows up with a guiding question.",
    },
    overview:
      "My Tutor helps students work through their coursework without doing it for them. It answers basic questions directly, but when a student asks for the actual assignment content, it redirects them with guiding questions and escalating hints. It's part of Apulza's study companion for ADHD and neurodivergent students, which is preparing for beta.",
    built: [
      "Designed the data model first, since it was the hardest decision to reverse, then built the session lifecycle, tutoring engine, and chat interface on top of it.",
      "Built a hint ladder that escalates support across turns, up to three levels.",
      "Built a classifier that detects requests for assignment content, combining heuristics with an LLM fallback that fails safely on errors.",
      "Added topic-based resource recommendations, with a weekly job that checks the links still work.",
      "Built student and counselor dashboards, plus session summaries and usage quotas.",
      "Wrote automated tests for session lifecycle, ownership checks, quotas, the classifier, the hint ladder, and privacy.",
    ],
    architecture: [
      "A new module alongside the existing platform, reusing its users, courses, and auth so current features stayed untouched.",
      "FastAPI endpoints with a PostgreSQL schema managed through migrations.",
      "Groq generates responses, with a system prompt that switches between direct answers and Socratic redirection for each message.",
      "Next.js and TypeScript chat interface with hint progress, resource cards, and session summaries.",
    ],
    challenges: [
      "Deciding when to help: a tutor that refuses everything is frustrating, so I revised the answer policy to give basic questions a direct answer and redirect only requests for assignment content.",
      "A silent failure: local development wasn't reaching Groq at all because the API key in .env was never loaded, so every reply was fallback text with no error logged. I caught it during live testing and fixed the environment loading.",
      "False alarms in the link checker: some sites rejected the script's requests, so I added a browser-like User-Agent and reported sites that can't be verified separately from links that are actually broken.",
    ],
  },
  {
    slug: "budgy",
    name: "Budgy",
    category: "Web app",
    summary:
      "A full-stack personal budgeting app for tracking accounts, expenses, income, and savings goals, with AI-generated financial tips.",
    tech: ["React", "TypeScript", "Supabase", "Tailwind CSS", "Recharts", "Groq API"],
    links: [
      { label: "Live app", href: "https://budget-buddy-budgy.vercel.app" },
      { label: "Code", href: "https://github.com/AndrewPal04/BudgetBuddy-Budgy" },
    ],
    role: "Designed and built solo",
    screenshot: {
      src: "/projects/budgy-expenses.png",
      width: 1016,
      height: 1570,
      alt: "Budgy expenses page listing sample expenses above a budget chart, with Dining Out shown over its monthly limit",
      caption: "Expenses roll up into monthly budget limits by category. Shown with sample data.",
    },
    challenges: [
      "Adding multiple accounts after expense tracking already existed meant reworking the data model with migrations, so expenses and income could link to an account.",
      "Keeping the Groq API key out of the browser by calling it from a Supabase Edge Function.",
    ],
    nextSteps: ["Add automated tests and CI, since the project doesn't have them yet."],
    overview:
      "Budgy brings accounts, spending, income, bills, and savings into one place. Users can see where their money goes and project how their savings will grow at different interest rates.",
    built: [
      "Multi-account tracking for checking and savings, with expense categorization, search, filtering, and CSV export.",
      "Interactive Recharts visualizations for spending breakdowns, budget limits, and savings growth, including configurable interest-rate projections per account.",
      "Personalized financial tips generated from each user's spending data with the Groq API.",
      "Full auth flows through Supabase: sign-up, email confirmation, password reset, and a guided first-run checklist.",
      "Form validation with Zod and React Hook Form.",
    ],
    architecture: [
      "React, TypeScript, and Vite frontend, with TanStack Query for data fetching.",
      "Supabase provides Postgres, auth, and Edge Functions, with the schema managed through migrations.",
      "Groq is called from a Supabase Edge Function, so the API key never reaches the browser.",
      "Deployed on Vercel.",
    ],
  },
  {
    slug: "campus-connect",
    name: "Campus Connect",
    category: "Mobile app",
    summary:
      "A cross-platform campus event app with event discovery, RSVPs, QR tickets, notifications, and an admin panel.",
    tech: ["React Native (Expo)", "Node.js", "Express", "PostgreSQL", "React"],
    links: [{ label: "Code", href: "https://github.com/AndrewPal04/CampusConnect" }],
    role: "Project lead on a three-person team, CS 4800",
    screenshot: {
      src: "/projects/campus-connect-events.png",
      width: 828,
      height: 1610,
      narrow: true,
      alt: "Campus Connect events screen with a search bar, category filters, a recommended event, and a list of upcoming campus events",
      caption:
        "The events screen, with search, category filters, and a rule-based event recommendation.",
    },
    challenges: [
      "Prototyped a client-side event bus for RSVP notifications, then replaced it with server-generated notifications.",
      "Protecting student data with request validation, rate limiting, and check-in responses that return only attendance counts.",
      "Keeping the events screen usable during common database connection failures: the API returns a degraded flag, and the app falls back to built-in sample events.",
    ],
    nextSteps: [
      "Add load testing and production monitoring, and validate push notification delivery on a development build.",
      "Replace keyword-based event categorization with an ML approach.",
    ],
    overview:
      "Campus Connect helps students find events and get into them. Students browse and search events, RSVP, and receive a QR ticket, while administrators manage users, organizations, and events from a separate web panel. It was built as a course project for CS 4800 and runs as a demo, not in production.",
    built: [
      "Led a three-person team, handling most of the planning and development, including the architecture and technical decisions.",
      "Mobile app with event search and filtering, RSVP and cancellation, QR tickets, and a notification feed.",
      "REST API covering auth, events, RSVPs, organizations, users, and QR check-in.",
      "Personalized event recommendations using rule-based scoring of RSVPs, viewed categories, interests, and event timing, with a popularity fallback for new users.",
      "Scraper that loads real events from Cal Poly Pomona's calendar feed, with seed data for demos.",
      "Role-based access for admin tools and event management.",
      "Web admin panel with pages for events, organizations, users, and analytics.",
    ],
    architecture: [
      "React Native (Expo) mobile app, with shared state in the React Context API.",
      "Node.js and Express API with JWT auth, request validation middleware, and a PostgreSQL database.",
      "Separate React admin panel built with Vite.",
    ],
  },
  {
    slug: "uav-search-and-rescue",
    name: "UAV Search and Rescue",
    category: "Robotics",
    featured: false,
    summary:
      "A team-built, dual-drone search and rescue system for GPS-denied areas: one drone maps and finds people, and the other flies to them autonomously.",
    tech: ["ROS2", "ORB-SLAM3", "MAVROS", "OMPL", "Gazebo", "XBee", "NVIDIA Jetson"],
    links: [],
    role: "Team member: research, system design, and code review",
    overview:
      "When GPS isn't available, drones have to work out where they are from what they can see. This system pairs a scout drone with a delivery drone on NVIDIA Jetson hardware, alongside a parallel Gazebo simulation for testing navigation logic.",
    built: [
      "Contributed to the planning and design of the physical dual-drone system.",
      "Researched pathfinding and human detection algorithms and presented them to guide the team's technical approach.",
      "Performed code reviews on Linux-based ROS2 node implementations.",
    ],
    architecture: [
      "The scout drone runs ORB-SLAM3 with a ZED stereo camera to build a 3D map of the search area and detect human targets.",
      "Coordinates and map data travel to the delivery drone through an XBee-to-ROS2 bridge.",
      "The delivery drone computes a flight path with OMPL-based planning through MAVROS, then navigates autonomously to the target.",
    ],
  },
];

export const otherWork = [
  {
    name: "UAV Search and Rescue",
    description: "Team-built dual-drone system for GPS-denied areas, using ROS2 and ORB-SLAM3.",
    href: "/projects/uav-search-and-rescue",
  },
  {
    name: "LeetRepo",
    description:
      "Contributed study features to this LeetCode tool, like Today's Plan and written recall capture, plus tests.",
    href: "https://github.com/daanniill/LeetRepo",
  },
  {
    name: "Data Analyst Agent",
    description: "GPT-4o writes and runs pandas code to answer plain-English questions about a CSV.",
    href: "https://github.com/AndrewPal04/Data-Analyst-Agent",
  },
  {
    name: "FitTrack",
    description: "Flutter and Firebase fitness tracker with workout logging and progress charts.",
    href: "https://github.com/AndrewPal04/fitTrack",
  },
  {
    name: "AI Writing Assistant",
    description: "Java app using the OpenAI API, built around Strategy, Factory, Singleton, and Observer patterns.",
    href: "https://github.com/AndrewPal04/WritingAssistant",
  },
];

export function getProject(slug) {
  return projects.find((project) => project.slug === slug);
}
