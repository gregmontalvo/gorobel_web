export interface Center {
  id: string;
  name: string;
  city: string;
  address: string;
  surface: string;
  description: string;
  activities: string[];
  phone: string;
  email: string;
  mapsUrl: string;
  embedUrl: string;
  image: string;
  imageAlt: string;
  isNew?: boolean;
  openingSoon?: boolean;
}

export const centers: Center[] = [
  {
    id: "llodio-crosstraining",
    name: "Gorobel Llodio — CrossTraining",
    city: "Llodio",
    address: "Polígono Industrialdea, Pabellón 42, Llodio, Álava",
    surface: "500 m²",
    description:
      "Nuestra sede principal en Llodio. 500 m² de instalaciones de alto rendimiento dedicados al CrossTraining, Boxeo y Kickboxing. El lugar donde empezó todo en 2010.",
    activities: ["CrossTraining", "Boxeo", "Kick Boxing", "OCR"],
    phone: "+34 667 521 542",
    email: "info@gorobelgara.com",
    mapsUrl: "https://maps.app.goo.gl/pXgDgb97bp8ZG5gK7",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2919.5!2d-3.0077!3d43.1408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDA4JzI2LjkiTiAzwrAwMCcyNy43Ilc!5e0!3m2!1ses!2ses!4v1609459200000",
    image:
      "https://gorobelgara.com/wp-content/uploads/2025/06/ARG02501-scaled-e1749203039962.jpg",
    imageAlt: "Instalaciones de CrossTraining en Gorobel Llodio",
  },
  {
    id: "llodio-contacto",
    name: "Gorobel Llodio — Sala Contacto",
    city: "Llodio",
    address: "Llodio, Álava",
    surface: "200 m²",
    description:
      "Espacio especializado en artes marciales y deportes de contacto. 200 m² dedicados al Jiu Jitsu, Kick Boxing y artes marciales en Llodio.",
    activities: ["Jiu Jitsu", "Kick Boxing", "Boxeo"],
    phone: "+34 667 521 542",
    email: "info@gorobelgara.com",
    mapsUrl: "https://maps.app.goo.gl/pXgDgb97bp8ZG5gK7",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2919.5!2d-3.0077!3d43.1408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDA4JzI2LjkiTiAzwrAwMCcyNy43Ilc!5e0!3m2!1ses!2ses!4v1609459200000",
    image:
      "https://gorobelgara.com/wp-content/uploads/2025/06/Entreno-49.jpg",
    imageAlt: "Sala de artes marciales Gorobel Llodio",
  },
  {
    id: "amurrio",
    name: "Gorobel Amurrio",
    city: "Amurrio",
    address: "Amurrio, Álava",
    surface: "300 m²",
    description:
      "Nuestra extensión en Amurrio. 300 m² con el mismo ambiente, calidad de coaching y programación que en Llodio. La comunidad Gorobel crece en Euskadi.",
    activities: ["CrossTraining", "Jiu Jitsu"],
    phone: "+34 667 521 542",
    email: "info@gorobelgara.com",
    mapsUrl: "https://maps.app.goo.gl/7LhEu3Cq8Qz9yM1J6",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2919.5!2d-3.0!3d43.05!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDAzJzAwLjAiTiAzwrAwMCcwMC4wIlc!5e0!3m2!1ses!2ses!4v1609459200000",
    image:
      "https://gorobelgara.com/wp-content/uploads/2025/06/1-Editada-e1749203233595.png",
    imageAlt: "Centro Gorobel Amurrio",
  },
  {
    id: "garazi",
    name: "Gorobel Garazi",
    city: "Llodio",
    address: "Llodio, Álava",
    surface: "300 m²",
    description:
      "Garazi — nuestro tercer espacio en Llodio. 300 m² diseñados para complementar la oferta deportiva de Gorobel y acercarnos a más personas.",
    activities: ["CrossTraining", "Kickboxing"],
    phone: "+34 667 521 542",
    email: "info@gorobelgara.com",
    mapsUrl: "https://maps.app.goo.gl/pXgDgb97bp8ZG5gK7",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2919.5!2d-3.0077!3d43.1408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDA4JzI2LjkiTiAzwrAwMCcyNy43Ilc!5e0!3m2!1ses!2ses!4v1609459200000",
    image:
      "https://gorobelgara.com/wp-content/uploads/2024/03/insta.png",
    imageAlt: "Centro Gorobel Garazi",
  },
];

export const newCenter = {
  id: "llodio-musculacion",
  name: "Gorobel Musculación",
  city: "Llodio",
  address: "Llodio, Álava",
  surface: "500 m²",
  description:
    "El mayor centro de musculación de la zona. 500 m² con los mejores equipos de musculación del mercado. Una inversión de más de 300.000€ en equipamiento para darte lo mejor.",
  equipment: [
    "Zona de peso libre premium",
    "Cardio de última generación",
    "Sala de entrenamiento funcional",
    "Vestuarios de primera",
    "Zona de recuperación",
  ],
  openingDate: "Finales de 2026",
  founderPrice: "TBD — contacta para precio especial",
  image:
    "https://gorobelgara.com/wp-content/uploads/2025/06/ARG02501-scaled-e1749203039962.jpg",
  isNew: true,
};
