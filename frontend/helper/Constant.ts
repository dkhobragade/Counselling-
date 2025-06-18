import { CollapseProps } from "antd";
import { faUserTie,faChess ,faTasks,faChartLine,faBookOpen,faClipboardCheck} from "@fortawesome/free-solid-svg-icons";
import { BookOutlined, CalendarOutlined, CheckCircleOutlined, ClockCircleOutlined, FileTextOutlined, TeamOutlined, TrophyOutlined } from '@ant-design/icons'

export const packages=[
     {
            id: 1,
            title: "Basic Counselling",
            duration: "30 minutes",
            price: "₹999",
            features: [
                "One-on-one session with MPSC expert",
                "Personalized study plan",
                "Strategy discussion",
                "Basic doubt clearing",
            ],
            color: "bg-blue-50",
            accent: "bg-blue-500",
        },
        {
            id: 2,
            title: "Standard Counselling",
            duration: "60 minutes",
            price: "₹1,799",
            features: [
                "Extended one-on-one session",
                "Comprehensive study plan",
                "Mock interview preparation",
                "Previous year paper analysis",
                "Subject-specific guidance",
            ],
            color: "bg-purple-50",
            accent: "bg-purple-500",
            popular: true,
        },
        {
            id: 3,
            title: "Premium Counselling",
            duration: "90 minutes",
            price: "₹2,499",
            features: [
                "In-depth counselling session",
                "Advanced strategy planning",
                "Personalized resource recommendations",
                "Strength & weakness analysis",
                "Follow-up email support",
                "Priority booking for next session",
            ],
            color: "bg-amber-50",
            accent: "bg-amber-500",
        },
]

export const timeSlots = [
    "09:00 AM - 09:30 AM",
    "10:00 AM - 10:30 AM",
    "11:00 AM - 11:30 AM",
    "12:00 PM - 12:30 PM",
    "02:00 PM - 02:30 PM",
    "03:00 PM - 03:30 PM",
    "04:00 PM - 04:30 PM",
    "05:00 PM - 05:30 PM",
  ];

export const faqs:CollapseProps['items'] = [
    {
      key:'1',
      label: "How do I prepare for my counselling session?",
      children:
        "To make the most of your session, prepare a list of specific labels or topics you'd like to discuss. Have your current study materials and previous attempt details (if any) ready. Think about your strengths, weaknesses, and specific areas where you need guidance.",
    },
    {
       key:'2',
       label: "Can I reschedule my booked session?",
       children:
        "Yes, you can reschedule your session up to 24 hours before the scheduled time without any additional charges. Rescheduling requests made less than 24 hours before the session may incur a fee of 25% of the session cost.",
    },
    {
      key:'3',
      label: "How are the mentors selected?",
      children:
        "All our mentors are carefully selected based on their expertise in MPSC examination, teaching experience, and success record. They undergo a rigorous vetting process and are regularly evaluated based on student feedback.",
    },
    {
      key:'4',
      label: "Will I get a recording of my session?",
      children:
        "Yes, upon request, we can provide a recording of your counselling session for future reference. This must be requested at the time of booking.",
    },
    {
      key:'5',
      label: "What happens if I'm not satisfied with my session?",
      children:
        "We have a satisfaction guarantee policy. If you're not satisfied with your counselling session, you can provide detailed feedback, and we'll offer you another session with a different mentor at a 50% discount.",
    },
  ];



export const journeySteps = [
    {
      id: 1,
      title: "Initial Assessment",
      description:
        "Begin with a comprehensive evaluation of your current preparation level, strengths, and areas for improvement.",
      icon: faClipboardCheck,
      color: "bg-blue-500",
      point: "high",
    },
    {
      id: 2,
      title: "Strategy Development",
      description:
        "Create a personalized study plan tailored to your learning style, available time, and exam goals.",
      icon: faChess,
      color: "bg-purple-500",
      point: "high",
    },
    {
      id: 3,
      title: "Resource Optimization",
      description:
        "Get guidance on the most effective study materials and resources to maximize your learning efficiency.",
      icon: faBookOpen,
      color: "bg-green-500",
      point: "medium",
    },
    {
      id: 4,
      title: "Regular Progress Tracking",
      description:
        "Monitor your improvement with periodic assessments and adjust your strategy as needed.",
      icon: faChartLine,
      color: "bg-amber-500",
      point: "low",
    },
    {
      id: 5,
      title: "Mock Tests & Analysis",
      description:
        "Practice with simulated exam conditions and receive detailed performance analysis.",
      icon: faTasks,
      color: "bg-red-500",
      point: "high",
    },
    {
      id: 6,
      title: "Interview Preparation",
      description:
        "Comprehensive guidance for the personality test and interview stages with mock sessions.",
      icon: faUserTie,
      color: "bg-indigo-500",
      point: "high",
    },
  ];


export const categories = [
    { id: "all", name: "All Categories" },
    { id: "prelims", name: "Prelims" },
    { id: "mains", name: "Mains" },
    { id: "current-affairs", name: "Current Affairs" },
    { id: "history", name: "History" },
    { id: "geography", name: "Geography" },
    { id: "polity", name: "Polity" },
    { id: "economy", name: "Economy" },
  ];

export   const difficulties = [
    { id: "all", name: "All Levels" },
    { id: "easy", name: "Easy" },
    { id: "medium", name: "Medium" },
    { id: "hard", name: "Hard" },
  ];

export const types = [
    { id: "all", name: "All Types" },
    { id: "free", name: "Free" },
    { id: "paid", name: "Premium" },
  ];


export const syllabusData = [
        {
            paper: "Paper I (General Studies)",
            marks: 100,
            duration: "2 Hours",
            sections: [
                {
                    name: "Current Events of State, National & International Importance",
                    percentage: 20,
                },
                { name: "History of India & Maharashtra", percentage: 15 },
                { name: "Geography of India & Maharashtra", percentage: 15 },
                { name: "Indian Polity & Governance", percentage: 15 },
                { name: "Economic & Social Development", percentage: 15 },
                { name: "Environment & Biodiversity", percentage: 10 },
                { name: "General Science & Technology", percentage: 10 },
            ],
        },
        {
            paper: "Paper II (CSAT)",
            marks: 80,
            duration: "2 Hours",
            sections: [
                { name: "Comprehension", percentage: 25 },
                { name: "Interpersonal Skills & Communication", percentage: 15 },
                { name: "Logical Reasoning & Analytical Ability", percentage: 25 },
                { name: "Decision Making & Problem Solving", percentage: 15 },
                { name: "General Mental Ability", percentage: 10 },
                { name: "Basic Numeracy & Data Interpretation", percentage: 10 },
            ],
        },
    ];




export  const testimonials = [
        {
            name: "Rahul Sharma",
            rank: "MPSC Rank 12",
            content:
                "The prelims course at DKMPSC was instrumental in my success. The structured approach and quality study material helped me clear the exam with confidence.",
            year: "2024",
        },
        {
            name: "Priya Patil",
            rank: "MPSC Rank 24",
            content:
                "I attribute my success in MPSC Prelims to the exceptional guidance provided by DKMPSC. Their focus on conceptual clarity and practice tests made all the difference.",
            year: "2024",
        },
        {
            name: "Amit Deshmukh",
            rank: "MPSC Rank 37",
            content:
                "The prelims foundation course gave me a solid base to build upon. The faculty's expertise and personalized attention helped me overcome my weaknesses.",
            year: "2023",
        },
    ];


export
    const upcomingBatches = [
        {
            name: "Weekend Batch",
            startDate: "July 1, 2025",
            duration: "4 months",
            mode: "Classroom",
            seats: "Limited seats available",
        },
        {
            name: "Weekday Batch",
            startDate: "July 15, 2025",
            duration: "3 months",
            mode: "Classroom",
            seats: "Filling fast",
        },
        {
            name: "Online Batch",
            startDate: "August 1, 2025",
            duration: "4 months",
            mode: "Online Live",
            seats: "Open for registration",
        },
    ];

export const courseFeatures = [
        {
            // icon: <BookOutlined />,
            title: "Comprehensive Study Material",
            description:
                "Expertly crafted notes covering the entire MPSC Prelims syllabus",
        },
        {
            // icon: <FileTextOutlined />,
            title: "Daily Practice Questions",
            description:
                "Topic-wise MCQs with detailed explanations to strengthen concepts",
        },
        {
            // icon: <ClockCircleOutlined />,
            title: "Time Management Strategies",
            description:
                "Techniques to optimize your time during the actual examination",
        },
        {
            // icon: <TrophyOutlined />,
            title: "Mock Tests Series",
            description:
                "Full-length practice tests simulating the actual exam pattern",
        },
        {
            // icon: <TeamOutlined />,
            title: "Doubt Clearing Sessions",
            description: "Regular interactive sessions with subject matter experts",
        },
        {
            // icon: <CalendarOutlined />,
            title: "Structured Study Plan",
            description: "Day-wise schedule to complete the syllabus efficiently",
        },
    ];