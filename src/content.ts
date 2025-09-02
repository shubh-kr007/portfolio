
export interface IDate {
  month: number,
  year: number
}

export interface IProjects {
  time: {
    start: IDate,
    end: IDate
  },
  logo?: string,
  company: string,
  title: string,
  mode: string,
  location: string,
  description: string[],
  tools: string[],
  media?: IMedia[]
}

export interface ILinkMedia {
  type: 'link'
  payload: string
}

export type IMedia = ILinkMedia

export interface ITime {
  start: number,
  end: number
}

export interface IEducation {
  institute: string,
  location: string,
  time: ITime
  degree?: string
}

export interface IHomepage {
  about: {
    description: string
  },
  projects: IProjects[],
  education: IEducation[]
}

export interface IContent {
  homepage: IHomepage
}

const Content: IContent = {
  homepage: {
    about: {
      description: "Full Stack Developer skilled in React.js, Node.js, TypeScript, Tailwind, Bootstrap, and database management. Passionate about building responsive web applications and continuously learning new technologies in dynamic development environments."
    },

projects: [
  {
    time: { start: { month: 5, year: 2024 }, end: { month: 6, year: 2024 } }, // Approximate dates for the project
    logo: "synapse_logo.png", 
    company: "Synapse.hr", 
    title: "AI Mock Interview Platform", 
    mode: "Personal Project",
    location: "Remote",
    description: [
      "Built a platform enabling realistic AI voice-driven mock interviews.",
      "Delivered modern UI with instant AI feedback and transcripts.",
      "Enhanced user preparation efficiency for job interviews."
    ],
    tools: ["Next.js", "Firebase", "Tailwind CSS", "Vapi AI"]
  },
  {
    time: { start: { month: 4, year: 2024 }, end: { month: 5, year: 2024 } },
    logo: "hirify_logo.png", 
    company: "Hirify",
    title: "AI Job Tracking App",
    mode: "Personal Project",
    location: "Remote",
    description: [
      "Developed AI-powered tracker to manage job applications.",
      "Implemented resume parsing, reminders, and JWT authentication.",
      "Improved candidate efficiency with AI-based insights."
    ],
    tools: ["React", "Node.js", "MongoDB", "OpenAI API"]
  },
  {
    time: { start: { month: 3, year: 2024 }, end: { month: 4, year: 2024 } },
    logo: "aitools_logo.png", 
    company: "AI Tools Finder",
    title: "Discovery Platform",
    mode: "Personal Project",
    location: "Remote",
    description: [
      "Created searchable platform for exploring AI tools.",
      "Integrated authentication and admin panel.",
      "Delivered responsive futuristic UI improving tool discovery."
    ],
    tools: ["Java", "JSP", "Servlets", "SQL"]
  }
],
    
    education: [{
      institute: 'KCC Institute of Technology and Management (AKTU)',
    location: 'Noida, India',
    degree: 'B.Tech, Computer Science and Engineering',
    time: { start: 2022, end: 2026 }
    }, {
      institute: 'Don Bosco Academy',
    location: 'Patna, India',
    degree: 'Senior Secondary (XII)',
    time: { start: 2020, end: 2022 }
    }, {
      institute: 'Red Carpet High School',
    location: 'Patna, India',
    degree: 'High School (X)',
    time: { start: 2018, end: 2020 }
    
    }]
  },
}

export default Content
