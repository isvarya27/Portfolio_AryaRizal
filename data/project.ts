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
  image: string; // cover utama
  gallery: string[]; // daftar foto proyek
  tech: string[];
  link: string;
}

export const projects: Project[] = [
  {
    slug: "juber",
    title: "Juber - Modern Ride Hailing App",
    type: ProjectType.MOBILE,
    description:
      "Aplikasi transportasi modern dengan fitur real-time tracking dan sistem pembayaran digital terintegrasi.",
    image: "/projects/cover_juber.png",
    gallery: [
      "/projects/juber_1.png",
      "/projects/juber_2.png",
      "/projects/juber_3.png",
      "/projects/juber_4.png",
      "/projects/juber_5.png",
      "/projects/juber_6.png",
    ],
    tech: ["Flutter", "Firebase", "Google Maps API"],
    link: "https://github.com/isvarya27/juber",
  },
  {
    slug: "lam",
    title: "LAM - Lifestyle & Music Platform",
    type: ProjectType.MOBILE,
    description:
      "Aplikasi media sosial interaktif dengan fokus pada musik, gaya hidup, dan komunitas kreatif.",
    image: "/projects/lam_1.png",
    gallery: [
      "/projects/lam_1.png",
      "/projects/lam_2.png",
      "/projects/lam_3.png",
      "/projects/lam_4.png",
      "/projects/lam_5.png",
      "/projects/lam_6.png",
    ],
    tech: ["Flutter", "Node.js", "MongoDB"],
    link: "https://github.com/isvarya27/lam",
  },
  {
    slug: "dimen",
    title: "Dimen - Digital Menu Restaurant",
    type: ProjectType.MOBILE,
    description:
      "Sistem pemesanan restoran digital yang elegan dengan menu interaktif dan manajemen pesanan otomatis.",
    image: "/projects/cover_dimen.png",
    gallery: [
      "/projects/dimen_1.png",
      "/projects/dimen_2.png",
      "/projects/dimen_3.png",
      "/projects/dimen_4.png",
      "/projects/dimen_5.png",
      "/projects/dimen_6.png",
    ],
    tech: ["Flutter", "Supabase", "Stripe"],
    link: "https://github.com/isvarya27/dimen",
  },
  {
    slug: "jform",
    title: "JForm - Digital Form Builder",
    type: ProjectType.BOTH,
    description:
      "Platform pembuatan formulir online yang fleksibel dengan dukungan workflow, analitik, dan notifikasi otomatis.",
    image: "/projects/cover_jform.png",
    gallery: [
      "/projects/jform_1.png",
      "/projects/jform_2.png",
      "/projects/jform_3.png",
      "/projects/jform_4.png",
      "/projects/jform_5.png",
      "/projects/jform_6.png",
    ],
    tech: ["Next.js", "Payload CMS", "PostgreSQL"],
    link: "https://github.com/isvarya27/jform",
  },
  {
    slug: "itqan",
    title: "Itqan - Business Management System",
    type: ProjectType.WEB,
    description:
      "Sistem manajemen bisnis terintegrasi mencakup inventory, HR, dan laporan keuangan real-time.",
    image: "/projects/itqan_1.png",
    gallery: [
      "/projects/itqan_1.png",
      "/projects/itqan_2.png",
      "/projects/itqan_3.png",
      "/projects/itqan_4.png",
      "/projects/itqan_5.png",
      "/projects/itqan_6.png",
    ],
    tech: ["React", "Express.js", "MySQL"],
    link: "https://github.com/isvarya27/itqan",
  },
  {
    slug: "closio",
    title: "Closio - Smart Closet Organizer",
    type: ProjectType.MOBILE,
    description:
      "Aplikasi pengatur pakaian cerdas yang merekomendasikan outfit harian berdasarkan cuaca dan preferensi pengguna.",
    image: "/projects/cover_closio.png",
    gallery: [
      "/projects/closio_1.png",
      "/projects/closio_2.png",
      "/projects/closio_3.png",
      "/projects/closio_4.png",
      "/projects/closio_5.png",
      "/projects/closio_6.png",
    ],
    tech: ["Flutter", "TensorFlow Lite", "Firebase"],
    link: "https://github.com/isvarya27/closio",
  },
  {
    slug: "mpi",
    title: "MPI Web Platform",
    type: ProjectType.WEB,
    description:
      "Website korporasi modern dengan panel admin untuk manajemen konten, berita, dan struktur organisasi.",
    image: "/projects/mpi_2.png",
    gallery: [
      "/projects/mpi_1.png",
      "/projects/mpi_2.png",
      "/projects/mpi_3.png",
      "/projects/mpi_4.png",
      "/projects/mpi_5.png",
    ],
    tech: ["Next.js", "Tailwind CSS", "Payload CMS"],
    link: "https://github.com/isvarya27/mpi",
  },
  {
    slug: "floxx",
    title: "Floxx - Finance Tracker",
    type: ProjectType.MOBILE,
    description:
      "Aplikasi pelacak keuangan pribadi dengan visualisasi grafik pengeluaran dan peringatan cerdas.",
    image: "/projects/cover_floxx.png",
    gallery: [
      "/projects/floxx_1.png",
      "/projects/floxx_2.png",
      "/projects/floxx_3.png",
      "/projects/floxx_4.png",
      "/projects/floxx_5.png",
    ],
    tech: ["Flutter", "Hive", "Dart"],
    link: "https://github.com/isvarya27/floxx",
  },
];
