import { getAssetPath } from '@/lib/utils';

export enum ProjectType {
  MOBILE = "mobile",
  WEB = "web",
  BOTH = "both",
}

export interface Project {
  slug: string;
  title: string;
  type: ProjectType;
  description: string;
  image: string;
  gallery: string[];
  tech: string[];
  link: string;
}

export const projects: Project[] = [
  {
    slug: "juber",
    title: "Juber - Super App for Integrated Digital Services",
    type: ProjectType.MOBILE,
    description:
      "Juber is a Flutter-based super app designed to simplify various digital services within a single ecosystem. Users can perform multiple transactions such as prepaid and postpaid electricity payments, mobile top-ups, food and product shopping, and even vehicle tax (SAMSAT) payments quickly and securely. The application integrates Firebase for authentication and real-time notifications, along with Google Maps API for location-based services like delivery and tracking. The backend is developed using Node.js and PostgreSQL to ensure scalability and reliable performance.",
    image: getAssetPath("/projects/cover_juber.png"),
    gallery: [
      getAssetPath("/projects/juber_1.png"),
      getAssetPath("/projects/juber_2.png"),
      getAssetPath("/projects/juber_3.png"),
      getAssetPath("/projects/juber_4.png"),
      getAssetPath("/projects/juber_5.png"),
      getAssetPath("/projects/juber_6.png"),
    ],
    tech: ["Flutter", "Firebase", "Google Maps API", "Node.js", "PostgreSQL", "Dart"],
    link: "https://github.com/isvarya27/juber",
  },
  
  {
    slug: "lam",
    title: "LAM - Leave Attendance Management System",
    type: ProjectType.MOBILE,
    description:
      "LAM (Leave Attendance Management) is a mobile application designed to simplify employee leave requests and approval workflows. Users can submit leave requests, track remaining leave quotas, and monitor their approval status in real time. The app features a role-based access system that adapts the user interface according to the user’s role — managers can access approval pages, while regular employees can only submit and view their leave requests. The backend is built with Node.js and MongoDB to ensure efficient data processing and secure operations.",
    image: getAssetPath("/projects/lam_1.png"),
    gallery: [
      getAssetPath("/projects/lam_1.png"),
      getAssetPath("/projects/lam_2.png"),
      getAssetPath("/projects/lam_3.png"),
      getAssetPath("/projects/lam_4.png"),
      getAssetPath("/projects/lam_5.png"),
      getAssetPath("/projects/lam_6.png"),
    ],
    tech: ["Flutter", "Flask", "MongoDB", "PostgreSQL"],
    link: "https://github.com/isvarya27/lam",
  },
  
  {
    slug: "dimen",
    title: "Dimentorin - Online Programming Mentorship Platform",
    type: ProjectType.MOBILE,
    description:
      "Dimentorin is an online private mentorship platform designed to help learners connect with expert programmers across various specialties. Users can easily book mentoring sessions with professionals in fields such as web development, software engineering, backend specialization, or quality assurance. The platform aims to make learning programming more accessible and personalized by matching learners with mentors based on their interests and goals. Built with Flutter and powered by Supabase and Stripe for authentication, data management, and secure payments.",
    image: getAssetPath("/projects/cover_dimen.png"),
    gallery: [
      getAssetPath("/projects/dimen_1.png"),
      getAssetPath("/projects/dimen_2.png"),
      getAssetPath("/projects/dimen_3.png"),
      getAssetPath("/projects/dimen_4.png"),
      getAssetPath("/projects/dimen_5.png"),
      getAssetPath("/projects/dimen_6.png"),
    ],
    tech: ["Flutter", "Next JS", "Node JS", "PostgreSQL","Dart"],
    link: "https://github.com/isvarya27/dimen",
  },
  {
    slug: "jform",
    title: "JForm - Custom Digital Form Builder for Enterprise Workflow",
    type: ProjectType.BOTH,
    description:
      "JForm is a customized digital form builder platform developed for Japfa Company to streamline their internal approval and data collection processes. Similar to Google Forms but tailored for enterprise needs, JForm supports advanced features such as approval workflows, dynamic form logic, skip-to-section functionality, and required/non-required field configurations. The platform is built using Next.js, Payload CMS, and PostgreSQL to ensure flexibility, scalability, and secure data management.",
    image: getAssetPath("/projects/cover_jform.png"),
    gallery: [
      getAssetPath("/projects/jform_1.png"),
      getAssetPath("/projects/jform_2.png"),
      getAssetPath("/projects/jform_3.png"),
      getAssetPath("/projects/jform_4.png"),
      getAssetPath("/projects/jform_5.png"),
      getAssetPath("/projects/jform_6.png"),
    ],
    tech: ["Flutter", "Flask", "PostgreSQL", "Firebase","Dart"],
    link: "https://github.com/isvarya27/jform",
  },
  {
    slug: "itqan",
    title: "Itqan - Sharia Cooperative Company Profile Website",
    type: ProjectType.WEB,
    description:
      "Itqan Web is a company profile website developed for Koperasi Syariah Itqan to showcase its services, vision, and cooperative values in a professional and modern way. The website provides detailed information about the cooperative’s financial programs, membership, and organizational background, serving as a digital presence that enhances credibility and accessibility. Built with React.js, Express.js, and MySQL to ensure a responsive interface and reliable performance.",
    image: getAssetPath("/projects/itqan_1.png"),
    gallery: [
      getAssetPath("/projects/itqan_1.png"),
      getAssetPath("/projects/itqan_2.png"),
      getAssetPath("/projects/itqan_3.png"),
      getAssetPath("/projects/itqan_4.png"),
      getAssetPath("/projects/itqan_5.png"),
      getAssetPath("/projects/itqan_6.png"),
    ],
    tech: ["React.js", "Express.js", "MySQL"],
    link: "https://github.com/isvarya27/itqan",
  },
  {
    slug: "closio",
    title: "Closio - Store & Client Management Mobile App",
    type: ProjectType.MOBILE,
    description:
      "Closio is a mobile application designed to help companies efficiently manage their clients, store locations, and product distribution processes. The platform allows company representatives to monitor client visits, track product deliveries, and record whether visits are conducted on-site or off-site. It also provides real-time status updates on orders and visit progress, helping teams maintain transparency and operational efficiency. Built with Flutter and powered by Firebase and TensorFlow Lite for data processing and intelligent tracking features.",
    image: getAssetPath("/projects/cover_closio.png"),
    gallery: [
      getAssetPath("/projects/closio_1.png"),
      getAssetPath("/projects/closio_2.png"),
      getAssetPath("/projects/closio_3.png"),
      getAssetPath("/projects/closio_4.png"),
      getAssetPath("/projects/closio_5.png"),
      getAssetPath("/projects/closio_6.png"),
    ],
    tech: ["Flutter", "Golang", "Firebase", "Postgree", "Dart"],
    link: "https://github.com/isvarya27/closio",
  },  
  {
    slug: "mpi",
    title: "MPI - Admin Panel for Itqan Cooperative Website",
    type: ProjectType.WEB,
    description:
      "MPI is an admin panel web platform developed to manage the content and internal data of Koperasi Syariah Itqan’s company profile website. It provides administrators with tools to manage articles, announcements, and organizational structures efficiently through an intuitive interface. The system is built using Next.js, Tailwind CSS, and Payload CMS to ensure flexibility, scalability, and a seamless content management experience.",
    image: getAssetPath("/projects/mpi_2.png"),
    gallery: [
      getAssetPath("/projects/mpi_1.png"),
      getAssetPath("/projects/mpi_2.png"),
      getAssetPath("/projects/mpi_3.png"),
      getAssetPath("/projects/mpi_4.png"),
      getAssetPath("/projects/mpi_5.png"),
    ],
    tech: ["Next.js", "Tailwind CSS", "Express JS", "PostgreSQL"],
    link: "https://github.com/isvarya27/mpi",
  },  
  {
    slug: "floxx",
    title: "Floxx - Poultry Farm Management App",
    type: ProjectType.MOBILE,
    description:
      "A mobile application developed for Ciomas Partners (a JAPFA subsidiary) to streamline poultry farm operations — tracking chicken populations, feed types and stock, feed distribution per cage, and harvest data in an integrated system.",
    image: getAssetPath("/projects/cover_floxx.png"),
    gallery: [
      getAssetPath("/projects/floxx_1.png"),
      getAssetPath("/projects/floxx_2.png"),
      getAssetPath("/projects/floxx_3.png"),
      getAssetPath("/projects/floxx_4.png"),
      getAssetPath("/projects/floxx_5.png"),
    ],
    tech: ["Flutter", "SQF Lite", "Dart", "Firebase","Navicat","Node JS", "S3","Riverpod", "Riverpod Generator", "Melos"],
    link: "https://github.com/isvarya27/floxx",
  },
];