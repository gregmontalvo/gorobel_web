export interface Activity {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  image: string;
  imageAlt: string;
  color: string; // Tailwind-compatible CSS var color
}

export const activities: Activity[] = [
  {
    id: "crosstraining",
    name: "CrossTraining",
    tagline: "Fuerza. Resistencia. Comunidad.",
    description:
      "Entrenamiento funcional que combina halterofilia, gimnasia y cardio. Sesiones de 1 hora, totalmente escalables para cualquier nivel. Pioneros en España desde 2010.",
    features: [
      "Sesiones programadas diariamente",
      "Coaches certificados",
      "Todos los niveles bienvenidos",
      "Comunidad activa y comprometida",
    ],
    image:
      "https://gorobelgara.com/wp-content/uploads/2024/03/photo_2024-02-28_23-33-44-1024x768.jpg",
    imageAlt: "Atletas practicando CrossTraining en Gorobel Llodio",
    color: "#2A5741",
  },
  {
    id: "boxeo",
    name: "Boxeo",
    tagline: "Técnica. Disciplina. Confianza.",
    description:
      "Aprende el arte del boxeo en Llodio. Clases adaptadas a todos los niveles, grupos reducidos y coaches apasionados que cuidan tu técnica y tu progresión.",
    features: [
      "Grupos reducidos",
      "Clases para principiantes y avanzados",
      "Entrenamiento personalizado",
      "Ambiente motivador y profesional",
    ],
    image: "https://gorobelgara.com/wp-content/uploads/2024/04/2.png",
    imageAlt: "Dos personas entrenando boxeo en Gorobel Llodio",
    color: "#B5714A",
  },
  {
    id: "kickboxing",
    name: "Kick Boxing",
    tagline: "Potencia. Velocidad. Control mental.",
    description:
      "Combina golpes de boxeo con patadas de artes marciales. Una disciplina completa que transforma tu cuerpo y entrena tu mente. Alta intensidad con técnica exigente.",
    features: [
      "Técnica de golpeo completa",
      "Mejora cardiovascular extrema",
      "Defensa personal efectiva",
      "Coaches con experiencia en competición",
    ],
    image: "https://gorobelgara.com/wp-content/uploads/2024/04/3.png",
    imageAlt: "Combate de Kickboxing en Gorobel",
    color: "#4A7C59",
  },
  {
    id: "jiujitsu",
    name: "Jiu Jitsu",
    tagline: "Mente. Técnica. Superación.",
    description:
      "Arte marcial de combate en suelo que desarrolla habilidades de defensa personal, disciplina y confianza. Un camino de superación constante y mejora mental.",
    features: [
      "Defensa personal real y efectiva",
      "Desarrolla disciplina y concentración",
      "Ideal para todas las edades",
      "Comunidad acogedora y respetuosa",
    ],
    image:
      "https://gorobelgara.com/wp-content/uploads/2024/04/photo_2024-04-01_23-32-22.jpg",
    imageAlt: "Técnica de Jiu Jitsu en Gorobel",
    color: "#2E3C42",
  },
  {
    id: "ocr",
    name: "OCR",
    tagline: "Barro. Obstáculos. Victoria.",
    description:
      "Obstacle Course Racing — prepárate para las carreras de obstáculos más exigentes del mercado. Entrenamiento específico para superar cualquier barrera.",
    features: [
      "Preparación para Spartan, Tough Mudder",
      "Entrenamiento outdoor",
      "Equipo de personas con tu misma pasión",
      "Retos que te hacen crecer",
    ],
    image:
      "https://gorobelgara.com/wp-content/uploads/2025/06/Podcast-y-entreno-73.jpg",
    imageAlt: "Entrenamiento OCR en Gorobel",
    color: "#4A5568",
  },
];
