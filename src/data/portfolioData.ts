export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveDemoUrl: string;
  featured: boolean;
  highlights: string[];
}

export interface SkillCategory {
  category: string;
  description: string;
  icon: string;
  skills: { name: string; level: number; highlight?: boolean }[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  duration: string;
  period: string;
  description: string;
  highlights: string[];
  techTags: string[];
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  location: string;
  cgpa: string;
  year: string;
  status: string;
  highlights: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  status: string;
  date: string;
  description: string;
  badgeColor: string;
}

export const PORTFOLIO_DATA = {
  personalInfo: {
    name: "Srikanth Kapugorlla",
    title: "Java Full Stack Developer",
    typedTitles: [
      "Java Full Stack Developer",
      "Spring & Servlet Specialist",
      "SQL & Database Developer",
      "Web Application Engineer"
    ],
    subtitle:
      "Passionate Java Full Stack Developer specializing in Java, Spring, Servlets, JSP, JDBC, SQL, MySQL, HTML, CSS, JavaScript, and modern web technologies.",
    bio: "I'm an Electronics and Communication Engineering undergraduate passionate about software development and Java Full Stack Development. I enjoy building scalable applications, solving real-world problems, and continuously learning modern technologies.",
    location: "Nellore, Andhra Pradesh",
    email: "srikanthkapugorla10@gmail.com",
    phone: "+91 9515918074",
    linkedin: "https://www.linkedin.com/in/srikanth-kapugorlla-25a669331",
    github: "https://github.com/Srikanth2733003",
    resumePdfUrl: "/Srikanth_Kapugorlla_Resume.pdf",
    avatarUrl: "/srikanth-profile.jpg",
    statusText: "Available for Software Engineering Roles",
  },
  githubStats: {
    username: "Srikanth2733003",
    publicRepos: 12,
    totalCommits: "350+",
    contributionsThisYear: 284,
    topLanguage: "Java",
  },
  stats: [
    { label: "Core Skills", value: "12+" },
    { label: "Projects Completed", value: "2+" },
    { label: "Internship Months", value: "2" },
    { label: "CGPA", value: "7.2" },
  ],
  aboutHighlights: [
    "Java",
    "SQL",
    "JDBC",
    "Servlets",
    "JSP",
    "MySQL",
    "HTML",
    "CSS",
    "JavaScript",
    "Git",
    "GitHub",
  ],
  skillCategories: [
    {
      category: "Programming",
      description: "Core logic and database querying languages",
      icon: "Code2",
      skills: [
        { name: "Java", level: 90, highlight: true },
        { name: "SQL", level: 85, highlight: true },
      ],
    },
    {
      category: "Frontend",
      description: "User interfaces and responsive client layouts",
      icon: "Layout",
      skills: [
        { name: "HTML5", level: 90 },
        { name: "CSS3", level: 85 },
        { name: "JavaScript", level: 80 },
      ],
    },
    {
      category: "Backend",
      description: "Server-side architecture and web controllers",
      icon: "Server",
      skills: [
        { name: "JDBC", level: 85 },
        { name: "Servlets", level: 85 },
        { name: "JSP", level: 80 },
      ],
    },
    {
      category: "Database",
      description: "Relational database management systems",
      icon: "Database",
      skills: [{ name: "MySQL", level: 85 }],
    },
    {
      category: "Tools & Workflow",
      description: "Version control and development environments",
      icon: "Wrench",
      skills: [
        { name: "Git", level: 85 },
        { name: "GitHub", level: 85 },
        { name: "Eclipse IDE", level: 85 },
        { name: "VS Code", level: 90 },
      ],
    },
    {
      category: "Core Java Concepts",
      description: "Object-oriented and system fundamentals",
      icon: "Cpu",
      skills: [
        { name: "OOP (Object-Oriented Programming)", level: 90 },
        { name: "Collections Framework", level: 85 },
        { name: "Exception Handling", level: 90 },
        { name: "Multithreading", level: 80 },
      ],
    },
  ] as SkillCategory[],

  projects: [
    {
      id: "employee-management-system",
      title: "Employee Management System",
      subtitle: "Java Desktop / Console App with JDBC & MySQL Database",
      description:
        "Developed a Java-based Employee Management System using JDBC and MySQL implementing CRUD operations with clean architecture and robust exception handling.",
      techStack: ["Java", "JDBC", "MySQL", "Git"],
      githubUrl: "https://github.com/Srikanth2733003/EmployeeManagementSystem",
      liveDemoUrl: "https://srikanth2733003.github.io/EmployeeManagementSystem/",
      featured: true,
      highlights: [
        "Implemented full CRUD (Create, Read, Update, Delete) record management",
        "Clean layered architecture separating DB connection pool and business logic",
        "Comprehensive SQL query optimization and SQL injection prevention via PreparedStatements",
        "Custom exception handling for graceful error recovery",
      ],
    },
    {
      id: "student-management-system",
      title: "Student Management System",
      subtitle: "Full-Stack Web App with Admin Authentication & Session Control",
      description:
        "Developed a web-based Student Management System with Admin Login, Session Management, CRUD operations, Servlets, JSP, JDBC, MVC Architecture, HTML, CSS, JavaScript, and MySQL.",
      techStack: [
        "Java",
        "Servlets",
        "JSP",
        "JDBC",
        "MySQL",
        "HTML",
        "CSS",
        "JavaScript",
      ],
      githubUrl: "https://github.com/Srikanth2733003/StudentManagementSystem",
      liveDemoUrl: "https://srikanth2733003.github.io/StudentManagementSystem/",
      featured: true,
      highlights: [
        "Built administrative authentication with secure HTTP session tracking",
        "MVC Architecture separating View (JSP), Controller (Servlets), and Model (Java Beans)",
        "Dynamic tabular dashboards for viewing, updating, and filtering student records",
        "Responsive client UI designed with CSS3 and interactive JS validation",
      ],
    },
  ] as Project[],

  experience: [
    {
      role: "Vehicle Testing Intern",
      company: "Bosch",
      location: "Chennai, India",
      duration: "2 Months",
      period: "2 Months Internship",
      description:
        "Worked on vehicle testing, validation, and system verification while gaining industry exposure to testing methodologies and engineering workflows.",
      highlights: [
        "Executed systematic test protocols for system verification and validation",
        "Gained hands-on exposure to automotive software & hardware testing workflows",
        "Collaborated with cross-functional engineering teams at Bosch Chennai facilities",
        "Analyzed test log data to ensure strict quality standards and safety compliance",
      ],
      techTags: [
        "Vehicle Testing",
        "System Verification",
        "Validation",
        "Engineering Workflows",
        "Quality Assurance",
      ],
    },
  ] as ExperienceItem[],

  education: [
    {
      degree: "B.Tech",
      field: "Electronics and Communication Engineering",
      institution:
        "Bharath Institute of Higher Education and Research (BIHER)",
      location: "Chennai, India",
      cgpa: "7.2",
      year: "2022–2026",
      status: "Graduating 2026",
      highlights: [
        "Strong foundation in Object Oriented Software Engineering, Systems Engineering, and Logic Design",
        "Active member of campus developer and tech events",
        "Maintained strong academic performance with 7.2 CGPA",
      ],
    },
  ] as EducationItem[],

  certifications: [
    {
      title: "Full Stack Java Development",
      issuer: "Tap Academy",
      status: "Pursuing",
      date: "Ongoing",
      description:
        "Comprehensive hands-on training in Core Java, Advanced Java (Servlets, JSP, JDBC), Spring Framework, Web Development, and SQL database design.",
      badgeColor: "from-cyan-500 to-blue-600",
    },
    {
      title: "Vehicle Testing Internship Certification",
      issuer: "Bosch",
      status: "Completed",
      date: "2 Months",
      description:
        "Certificate of completion for intensive 2-month engineering internship focusing on vehicle testing, verification, and engineering processes.",
      badgeColor: "from-purple-500 to-indigo-600",
    },
  ] as CertificationItem[],
};
