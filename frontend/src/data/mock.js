// Mock data for Keetch Elevators

export const companyInfo = {
  name: "Keetch Elevators",
  tagline: "Elevating Excellence Since 2015",
  description: "Premium elevator solutions for residential, commercial, and industrial spaces. We combine cutting-edge technology with exceptional craftsmanship.",
  founded: 2015,
  projectsCompleted: 500,
  happyClients: 350,
  yearsExperience: 10,
  teamMembers: 75
};

export const services = [
  {
    id: 1,
    title: "Elevator Installation",
    description: "Complete elevator installation services for new constructions. From planning to final testing, we handle every aspect with precision.",
    icon: "Building2",
    features: ["Custom Design", "Safety Compliance", "Modern Technology", "Warranty Included"]
  },
  {
    id: 2,
    title: "Maintenance & Repairs",
    description: "24/7 maintenance and emergency repair services to keep your elevators running smoothly and safely.",
    icon: "Wrench",
    features: ["24/7 Support", "Preventive Care", "Quick Response", "Certified Technicians"]
  },
  {
    id: 3,
    title: "Modernization",
    description: "Upgrade your existing elevators with the latest technology, improving efficiency, safety, and aesthetics.",
    icon: "RefreshCw",
    features: ["Energy Efficient", "Smart Controls", "Updated Design", "Code Compliance"]
  },
  {
    id: 4,
    title: "Consultation",
    description: "Expert consultation services for architects, builders, and property managers planning elevator systems.",
    icon: "MessageSquare",
    features: ["Site Analysis", "Cost Estimation", "Design Planning", "Regulatory Guidance"]
  }
];

export const projects = [
  {
    id: 1,
    title: "Skyline Tower",
    category: "Commercial",
    location: "Downtown Metro",
    elevators: 8,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    description: "High-speed elevator system for 45-story commercial complex"
  },
  {
    id: 2,
    title: "Harmony Residences",
    category: "Residential",
    location: "Westside District",
    elevators: 4,
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
    description: "Luxury residential elevators with custom interiors"
  },
  {
    id: 3,
    title: "City Medical Center",
    category: "Healthcare",
    location: "Medical Quarter",
    elevators: 12,
    image: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=800&q=80",
    description: "Hospital-grade elevators with emergency protocols"
  },
  {
    id: 4,
    title: "Grand Plaza Mall",
    category: "Retail",
    location: "Shopping District",
    elevators: 6,
    image: "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?w=800&q=80",
    description: "Panoramic glass elevators for premium retail experience"
  },
  {
    id: 5,
    title: "Heritage Hotel",
    category: "Hospitality",
    location: "Historic Downtown",
    elevators: 5,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    description: "Classic design elevators blending with historic architecture"
  },
  {
    id: 6,
    title: "Tech Innovation Hub",
    category: "Commercial",
    location: "Tech Park",
    elevators: 10,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    description: "Smart elevators with IoT integration and touchless controls"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Property Manager",
    company: "Skyline Properties",
    content: "Keetch Elevators transformed our building's vertical transportation. Their attention to detail and professional service exceeded our expectations.",
    rating: 5,
    avatar: "SM"
  },
  {
    id: 2,
    name: "James Chen",
    role: "Facilities Director",
    company: "Metro Healthcare",
    content: "The team's expertise in hospital elevator systems is unmatched. They understood our unique requirements and delivered flawlessly.",
    rating: 5,
    avatar: "JC"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Architect",
    company: "Modern Design Studio",
    content: "Working with Keetch on custom elevator designs has been a pleasure. They bring creative solutions to every project.",
    rating: 5,
    avatar: "ER"
  },
  {
    id: 4,
    name: "Michael Thompson",
    role: "Building Owner",
    company: "Thompson Realty",
    content: "Their maintenance program has kept our elevators running perfectly for years. Responsive, reliable, and professional.",
    rating: 5,
    avatar: "MT"
  }
];

export const serviceRequests = [
  {
    id: "SR-001",
    type: "Maintenance",
    status: "In Progress",
    date: "2025-08-10",
    description: "Annual maintenance checkup",
    building: "Tower A"
  },
  {
    id: "SR-002",
    type: "Repair",
    status: "Completed",
    date: "2025-08-05",
    description: "Door sensor replacement",
    building: "Main Office"
  },
  {
    id: "SR-003",
    type: "Inspection",
    status: "Scheduled",
    date: "2025-08-15",
    description: "Safety compliance inspection",
    building: "Tower B"
  }
];

export const chatMessages = [
  {
    id: 1,
    sender: "bot",
    message: "Hello! Welcome to Keetch Elevators. How can I assist you today?",
    timestamp: new Date()
  }
];

export const faqData = [
  {
    question: "How often should elevators be serviced?",
    answer: "We recommend monthly maintenance checks for commercial elevators and quarterly checks for residential units to ensure optimal performance and safety."
  },
  {
    question: "What is the typical installation timeline?",
    answer: "Installation timelines vary based on project complexity. A standard residential elevator takes 4-6 weeks, while commercial installations can take 8-16 weeks."
  },
  {
    question: "Do you offer emergency repair services?",
    answer: "Yes, we provide 24/7 emergency repair services. Our technicians are on call around the clock to address any urgent elevator issues."
  },
  {
    question: "What warranty do you offer?",
    answer: "We provide a comprehensive 5-year warranty on new installations and a 1-year warranty on repairs and replacement parts."
  }
];
