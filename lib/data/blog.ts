export type SectionType =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string; author?: string }
  | { type: "highlight"; text: string };

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  imageAlt: string;
  featured: boolean;
  description: string;
  keywords: string[];
  author: string;
  body: SectionType[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "sala-musculacion-llodio-2026",
    title: "Por qué Llodio necesitaba una sala de musculación de verdad",
    excerpt:
      "En mayo de 2026 abriremos el mayor centro de musculación de Euskadi. Te contamos qué hay detrás de esta decisión y qué va a suponer para la zona.",
    category: "Instalaciones",
    date: "2026-02-15",
    readTime: "4 min",
    image: "https://gorobelgara.com/wp-content/uploads/2025/06/ARG02501-scaled-e1749203039962.jpg",
    imageAlt: "Nueva sala de musculación Gorobel Llodio 2026",
    featured: true,
    description:
      "En 2026 abrimos la mayor sala de musculación de Euskadi en Llodio: 500 m² y más de 300.000€ en equipamiento. Descubre por qué este proyecto nació y qué supone para la zona.",
    keywords: [
      "sala musculacion llodio 2026",
      "gimnasio musculación llodio",
      "nuevo gimnasio llodio",
      "centro deportivo euskadi",
      "musculación álava",
    ],
    author: "Gorobel Kirol Gunea",
    body: [
      {
        type: "p",
        text: "Llevamos más de 15 años siendo el referente del CrossFit y el entrenamiento funcional en Euskadi. Pero había algo que siempre nos pedían: una sala de musculación de verdad. No un espacio pequeño con cuatro mancuernas, sino un centro completo donde poder entrenar fuerza con el mismo nivel de calidad que ofrecemos en nuestras clases de CrossTraining.",
      },
      {
        type: "h2",
        text: "El vacío que existía en Llodio",
      },
      {
        type: "p",
        text: "Llodio y su comarca han crecido mucho en los últimos años. Más de 20.000 habitantes en el municipio y decenas de miles más en localidades cercanas. Sin embargo, la oferta de musculación seria era prácticamente inexistente. Los vecinos tenían que desplazarse hasta Bilbao o Vitoria para acceder a instalaciones de calidad. Eso es inaceptable.",
      },
      {
        type: "p",
        text: "Cuando empezamos a escuchar este feedback de forma consistente, de nuestros propios socios, de personas que nos escribían por Instagram, de padres que querían acompañar el entrenamiento de sus hijos adolescentes con peso libre, tomamos una decisión: hacerlo bien o no hacerlo.",
      },
      {
        type: "h2",
        text: "500 m² y más de 300.000€ en equipamiento",
      },
      {
        type: "p",
        text: "El nuevo centro de musculación de Gorobel en Llodio tendrá 500 metros cuadrados completamente equipados con lo mejor del mercado. Plataformas de halterofilia, zona de peso libre con barras olímpicas y discos de calidad, máquinas de cable, zona cardiovascular de alto rendimiento y áreas especializadas para glúteos, espalda, pecho y piernas.",
      },
      {
        type: "ul",
        items: [
          "Zona de peso libre con más de 40 pares de mancuernas",
          "Plataformas de halterofilia certificadas",
          "Racks y jaulas de potencia de calidad premium",
          "Zona de cardio con equipamiento de última generación",
          "Área especializada de accesorios y máquinas funcionales",
          "Vestuarios renovados con duchas individuales",
        ],
      },
      {
        type: "h2",
        text: "¿Por qué ahora y no antes?",
      },
      {
        type: "p",
        text: "La pregunta que muchos se hacen es: si lleváis 15 años, ¿por qué no lo habéis hecho antes? La respuesta es honesta: porque para hacer algo así hay que estar preparado. No solo económicamente, sino también en términos de equipo, comunidad y visión a largo plazo.",
      },
      {
        type: "quote",
        text: "No queríamos abrir otro gimnasio más. Queríamos abrir el mejor gimnasio de la comarca. Y para eso había que esperar el momento adecuado.",
        author: "Joseba, fundador de Gorobel",
      },
      {
        type: "p",
        text: "La comunidad que hemos construido en Gorobel durante estos 15 años es la que hace posible este proyecto. Sin el apoyo de nuestros socios —y muy especialmente de nuestros Founding Members— este salto no sería posible.",
      },
      {
        type: "h2",
        text: "El programa Founding Member: únete ahora",
      },
      {
        type: "p",
        text: "Para financiar parte del proyecto y reconocer a quienes confían en nosotros desde el primer momento, lanzamos el programa de Founding Members. Se trata de plazas limitadas a un precio especial de inauguración, con condiciones que no volverán a estar disponibles una vez abramos las puertas.",
      },
      {
        type: "highlight",
        text: "Los Founding Members tendrán acceso a la sala de musculación + acceso libre a todas las clases del grupo Gorobel durante el primer año de apertura. Plazas muy limitadas.",
      },
      {
        type: "p",
        text: "La apertura está prevista para mayo de 2026. Si vives en Llodio, Amurrio, Gordexola, Güeñes, Zalla o cualquier localidad de Euskadi, este es tu gimnasio.",
      },
    ],
  },
  {
    slug: "crossfit-principiantes-amurrio",
    title: "CrossTraining para principiantes en Amurrio: lo que nadie te cuenta",
    excerpt:
      "Si nunca has hecho CrossTraining y vives en Amurrio, este artículo es para ti. Sin mitos, sin miedo. Solo la verdad sobre cómo empezar bien.",
    category: "Guías",
    date: "2026-01-28",
    readTime: "6 min",
    image: "https://gorobelgara.com/wp-content/uploads/2024/03/photo_2024-02-28_23-33-44-1024x768.jpg",
    imageAlt: "Clase de CrossTraining para principiantes en Amurrio",
    featured: false,
    description:
      "Guía honesta para empezar CrossTraining en Amurrio. Desmontamos mitos, explicamos qué esperar en tu primera clase y por qué el CrossTraining es apto para todos los niveles.",
    keywords: [
      "crosstraining principiantes amurrio",
      "crossfit amurrio empezar",
      "clases crossfit amurrio",
      "gimnasio amurrio principiantes",
      "crosstraining sin experiencia",
    ],
    author: "Gorobel Kirol Gunea",
    body: [
      {
        type: "p",
        text: "Si llevas tiempo pensando en apuntarte a CrossTraining pero algo te frena —el miedo, los mitos que has escuchado, no saber si serás capaz— este artículo es para ti. En Gorobel Amurrio llevamos años viendo cómo personas que creían que el CrossTraining 'no era para ellas' se convierten en los socios más comprometidos del box.",
      },
      {
        type: "h2",
        text: "Mito 1: 'El CrossTraining es solo para deportistas en forma'",
      },
      {
        type: "p",
        text: "Este es el mito más extendido y el más dañino. La realidad es exactamente la contraria: el CrossTraining está diseñado para ser completamente escalable. Esto significa que cada ejercicio, cada carga y cada movimiento se adapta a tu nivel actual. El mismo entrenamiento que hace un atleta avanzado, lo hace también alguien que empieza desde cero —con las mismas mecánicas, pero con cargas y tiempos adaptados.",
      },
      {
        type: "p",
        text: "En nuestra clase de Amurrio tienes personas de 20 años y personas de 55. Tienes socios que compiten a nivel nacional y socios que vienen por primera vez en su vida a un gimnasio. Todos entrenan juntos, todos mejoran, nadie juzga a nadie.",
      },
      {
        type: "h2",
        text: "Mito 2: 'Me voy a lesionar'",
      },
      {
        type: "p",
        text: "El riesgo de lesión en CrossTraining bien supervisado es muy bajo. La clave está en las palabras 'bien supervisado'. En Gorobel, nuestros coaches prestan atención especial a la técnica desde el primer día. No te pondremos peso hasta que tu mecánica sea correcta. No te pediremos velocidad hasta que tengas control del movimiento.",
      },
      {
        type: "quote",
        text: "La mejor prevención de lesiones es la técnica. Y la técnica se aprende con paciencia y buen coaching, no con peso.",
      },
      {
        type: "h2",
        text: "Qué esperar en tu primera semana",
      },
      {
        type: "p",
        text: "Si es la primera vez que haces CrossTraining con nosotros, empezarás con una sesión de introducción donde tu coach te explicará los movimientos básicos y evaluará tu punto de partida. No te tirarán a una clase normal sin preparación.",
      },
      {
        type: "ul",
        items: [
          "Día 1: Evaluación inicial y movimientos básicos (sentadilla, peso muerto, press)",
          "Semana 1: Introducción progresiva a la metodología",
          "Semana 2-4: Integración en clases regulares con escala adaptada",
          "Mes 2: Primeras mejoras notables en fuerza y resistencia",
        ],
      },
      {
        type: "h2",
        text: "Por qué Amurrio tiene algo especial",
      },
      {
        type: "p",
        text: "El centro de Gorobel en Amurrio tiene 300 m² con un ambiente diferente al de la sede principal. Más íntimo, con grupos más reducidos. Si eres de esos que les da reparo empezar en un sitio grande y lleno de gente, Amurrio puede ser tu punto de entrada ideal.",
      },
      {
        type: "highlight",
        text: "Tenemos una política de puertas abiertas: ven a vernos, te enseñamos el centro, hablas con el coach y decides sin ningún tipo de presión ni compromiso.",
      },
      {
        type: "h2",
        text: "¿A partir de qué edad se puede hacer CrossTraining?",
      },
      {
        type: "p",
        text: "El CrossTraining es apto para mayores de 14 años con supervisión adecuada. Tenemos socios de todas las edades, pero el rango más frecuente va de los 25 a los 55 años. No hay límite superior: el CrossTraining se adapta a cualquier condición física, incluidas personas con problemas articulares o de movilidad.",
      },
      {
        type: "p",
        text: "¿Tienes dudas específicas sobre si tu estado de salud es compatible con el CrossTraining? Contáctanos y lo hablamos. Nuestra respuesta siempre será honesta.",
      },
    ],
  },
  {
    slug: "mejor-gimnasio-llodio",
    title: "¿Cuál es el mejor gimnasio para perder peso en Llodio?",
    excerpt:
      "Guía honesta para elegir el gimnasio en Llodio que mejor se adapta a tu objetivo. Comparamos opciones y te damos claves para tomar la decisión correcta.",
    category: "Guías",
    date: "2026-01-12",
    readTime: "5 min",
    image: "https://gorobelgara.com/wp-content/uploads/2025/06/Entreno-49.jpg",
    imageAlt: "Entrenamiento en Gorobel Kirol Gunea Llodio",
    featured: false,
    description:
      "¿Buscas el mejor gimnasio en Llodio para perder peso? Comparativa honesta de opciones de entrenamiento en Euskadi y por qué el CrossTraining supera a los gimnasios convencionales para perder grasa.",
    keywords: [
      "mejor gimnasio llodio",
      "gimnasio llodio perder peso",
      "crossfit vs gimnasio convencional llodio",
      "donde entrenar llodio",
      "gimnasio euskadi",
    ],
    author: "Gorobel Kirol Gunea",
    body: [
      {
        type: "p",
        text: "Si estás buscando el mejor gimnasio en Llodio para perder peso, probablemente hayas visto que las opciones son limitadas. Y esa limitación te obliga a ser más selectivo: no puedes permitirte elegir mal y perder meses (y dinero) en un sitio que no te ayuda a avanzar.",
      },
      {
        type: "p",
        text: "Vamos a ser directos: somos Gorobel y obvio que pensamos que somos la mejor opción. Pero también somos honestos. Así que en este artículo te explicamos qué buscar, qué preguntar y por qué el tipo de entrenamiento importa más que las instalaciones.",
      },
      {
        type: "h2",
        text: "La verdad sobre perder peso en un gimnasio convencional",
      },
      {
        type: "p",
        text: "Los gimnasios de fitness convencionales tienen un problema bien documentado: la tasa de abandono roza el 80% antes de los 3 meses. ¿Por qué? Porque la mayoría de personas no saben qué hacer, se aburren de la cinta de correr, y no tienen ningún sistema que les rinda cuentas ni les mantenga motivados.",
      },
      {
        type: "p",
        text: "Perder peso requiere consistencia. Y la consistencia requiere que el entrenamiento sea variado, medible y social. Esas tres cosas son exactamente lo que ofrece el CrossTraining.",
      },
      {
        type: "h2",
        text: "Qué hace mejor al CrossTraining para la pérdida de grasa",
      },
      {
        type: "ul",
        items: [
          "El entrenamiento de alta intensidad (HIIT) quema más calorías que el cardio convencional en el mismo tiempo",
          "El efecto afterburn: el metabolismo permanece elevado hasta 24-48 horas después de un WOD intenso",
          "La variedad diaria elimina el aburrimiento y mantiene la adherencia a largo plazo",
          "El componente comunitario crea responsabilidad: cuando alguien te espera en clase, no te quedas en casa",
          "Combinar fuerza y cardio en la misma sesión es más eficiente que hacerlos por separado",
        ],
      },
      {
        type: "h2",
        text: "Preguntas que debes hacer antes de apuntarte a cualquier gimnasio",
      },
      {
        type: "p",
        text: "Independientemente de que elijas Gorobel u otra opción, hay preguntas que te ayudarán a tomar la decisión correcta:",
      },
      {
        type: "ul",
        items: [
          "¿Hay coaches certificados presentes durante todas las clases o es solo sala libre?",
          "¿Cómo se personaliza el entrenamiento a mi nivel y objetivo?",
          "¿Puedo probar antes de comprometerme?",
          "¿Qué pasa si tengo una lesión o necesito modificar ejercicios?",
          "¿Hay comunidad o es un sitio donde cada uno va a lo suyo?",
        ],
      },
      {
        type: "h2",
        text: "Cuánto tiempo hasta ver resultados reales",
      },
      {
        type: "p",
        text: "Con 3-4 sesiones semanales de CrossTraining y una alimentación razonablemente ordenada (sin hacer dieta milagro), los primeros resultados visibles aparecen entre la semana 4 y la semana 8. Los resultados internos —más energía, mejor sueño, más fuerza— se notan mucho antes, frecuentemente en la segunda o tercera semana.",
      },
      {
        type: "quote",
        text: "No vendemos milagros. Vendemos método, comunidad y consistencia. Eso es lo que funciona.",
        author: "Joseba, fundador de Gorobel",
      },
      {
        type: "highlight",
        text: "En Gorobel tienes la clase de prueba gratuita. Ven, entrena, habla con el coach y decide. Sin presión, sin permanencia.",
      },
    ],
  },
  {
    slug: "kickboxing-beneficios",
    title: "5 razones por las que el Kickboxing te cambiará la vida",
    excerpt:
      "Más allá del golpe: el Kickboxing mejora tu cardiovascular, reduce el estrés, aumenta la confianza y crea una disciplina mental que trasciende el gym.",
    category: "Disciplinas",
    date: "2025-12-20",
    readTime: "4 min",
    image: "https://gorobelgara.com/wp-content/uploads/2024/04/3.png",
    imageAlt: "Clase de Kickboxing en Gorobel Llodio",
    featured: false,
    description:
      "Descubre los 5 beneficios del Kickboxing que van mucho más allá de la pérdida de peso: salud cardiovascular, gestión del estrés, confianza en uno mismo, disciplina mental y comunidad.",
    keywords: [
      "kickboxing beneficios llodio",
      "clases kickboxing llodio adultos",
      "kickboxing para principiantes llodio",
      "artes marciales llodio",
      "kickboxing salud mental",
    ],
    author: "Gorobel Kirol Gunea",
    body: [
      {
        type: "p",
        text: "Cuando la gente piensa en Kickboxing, piensa en golpes y combate. Y sí, hay golpes —eso es parte del encanto. Pero lo que realmente hace que cientos de personas en Euskadi se enganchen al Kickboxing y no lo abandonen tiene mucho más que ver con lo que pasa en tu cabeza que con lo que pasa en el saco.",
      },
      {
        type: "h2",
        text: "1. Destruye el estrés de forma catártica",
      },
      {
        type: "p",
        text: "Hay pocas terapias anti-estrés tan efectivas como golpear un saco de boxeo. Científicamente, el ejercicio de alta intensidad reduce los niveles de cortisol —la hormona del estrés— y libera endorfinas. Pero el Kickboxing añade un elemento extra: la descarga catártica. Después de 45 minutos de clase, el estrés del día desaparece. No es anecdótico; es fisiología.",
      },
      {
        type: "h2",
        text: "2. Transforma tu condición cardiovascular",
      },
      {
        type: "p",
        text: "Una sesión de Kickboxing quema entre 600 y 900 calorías por hora, dependiendo de la intensidad. Más importante que el número de calorías, mejora notablemente el VO2 max (la capacidad aeróbica máxima), la recuperación cardíaca y la resistencia general. Estudios muestran que 8 semanas de Kickboxing producen mejoras cardiovasculares equivalentes a meses de cardio convencional.",
      },
      {
        type: "h2",
        text: "3. Construye una confianza diferente",
      },
      {
        type: "p",
        text: "Hay algo muy particular en saber que puedes defenderte. No hace falta llegar a combatir; simplemente saber que dominas técnicas de golpeo y que tu cuerpo responde crea una seguridad en uno mismo que no se obtiene en ninguna otra actividad. Es una confianza que se nota en cómo caminas, cómo hablas, cómo te relacionas.",
      },
      {
        type: "quote",
        text: "Mis socias de Kickboxing siempre me dicen lo mismo: empezaron para ponerse en forma y se quedaron por cómo les hace sentir.",
      },
      {
        type: "h2",
        text: "4. Desarrolla coordinación y agilidad que se transfieren a la vida cotidiana",
      },
      {
        type: "p",
        text: "La combinación de manos, pies, caderas y visión periférica que requiere el Kickboxing desarrolla una coordinación neuromuscular excepcional. Esta mejora no se queda en el gimnasio: mejoras los reflejos, el equilibrio, la precisión motriz. Es especialmente beneficioso para personas mayores de 40 años como herramienta de prevención de caídas.",
      },
      {
        type: "h2",
        text: "5. La comunidad de Kickboxing en Gorobel",
      },
      {
        type: "p",
        text: "En Gorobel Llodio, las clases de Kickboxing tienen algo especial: el grupo. La comunidad que se forma en torno a una práctica de artes marciales es diferente a la de cualquier otra actividad. Hay respeto mutuo, compañerismo y una especie de código no escrito que lo convierte en un ambiente único.",
      },
      {
        type: "ul",
        items: [
          "Clases para todos los niveles, desde absolutos principiantes",
          "Grupos reducidos con atención personalizada",
          "Coaches con años de experiencia en competición y enseñanza",
          "Ambiente mixto y sin ego donde todos empujan en la misma dirección",
        ],
      },
      {
        type: "highlight",
        text: "¿Nunca has golpeado un saco? Perfecto. Empezar de cero es la mejor situación posible: sin vicios, sin miedos aprendidos. Ven a probarlo.",
      },
    ],
  },
  {
    slug: "crossfit-open-2026-llodio",
    title: "CrossFit Open 2026 en Gorobel: cómo prepararte y qué esperar",
    excerpt:
      "El CrossFit Open es la competición más grande del mundo. Te explicamos cómo prepararte desde Llodio y por qué participar aunque seas principiante.",
    category: "Competición",
    date: "2025-12-08",
    readTime: "7 min",
    image: "https://gorobelgara.com/wp-content/uploads/2025/06/Podcast-y-entreno-73.jpg",
    imageAlt: "Preparación CrossFit Open 2026 en Gorobel Kirol Gunea",
    featured: false,
    description:
      "Todo lo que necesitas saber sobre el CrossFit Open 2026 desde Gorobel Kirol Gunea en Llodio. Cómo prepararte, por qué participar aunque seas principiante, y qué esperar del evento.",
    keywords: [
      "crossfit open 2026 llodio",
      "crossfit open preparación españa",
      "competicion crossfit pais vasco",
      "crossfit open principiantes",
      "gorobel crossfit competicion",
    ],
    author: "Gorobel Kirol Gunea",
    body: [
      {
        type: "p",
        text: "El CrossFit Open es la competición de CrossFit más grande del mundo. Cada año, más de 400.000 atletas de más de 170 países se inscriben para realizar los mismos workouts en un período de cinco semanas. Desde Llodio, los socios de Gorobel llevan participando en el Open desde sus primeras ediciones.",
      },
      {
        type: "h2",
        text: "Qué es el CrossFit Open exactamente",
      },
      {
        type: "p",
        text: "El Open consta de cinco workouts publicados a lo largo de cinco semanas. Cada semana, CrossFit HQ lanza un WOD nuevo que debes completar en tu propio box, siendo validado por un juez certificado. Los resultados se suben a la plataforma global de CrossFit Games y ves cómo estás en comparación con todos los atletas del mundo, de tu país, de tu región y de tu edad.",
      },
      {
        type: "p",
        text: "Para los atletas de élite, el Open es el inicio del camino hacia los CrossFit Games. Para la inmensa mayoría —incluyendo los socios de Gorobel— es una experiencia única de comunidad y medición del progreso personal.",
      },
      {
        type: "h2",
        text: "Por qué participar aunque seas principiante",
      },
      {
        type: "p",
        text: "Aquí está el error más común: pensar que el Open es solo para atletas avanzados. No es así. CrossFit HQ diseña los workouts con versiones escaladas (scaled) pensadas precisamente para que atletas de cualquier nivel puedan participar con dignidad y competitividad dentro de su categoría.",
      },
      {
        type: "ul",
        items: [
          "Hay categorías Scaled y Foundations además de Rx (avanzado)",
          "Compites contra personas de tu mismo nivel en tu franja de edad",
          "Es la única oportunidad de medir tu fitness contra 400.000 atletas globales",
          "Genera una motivación única que acelera el progreso durante semanas",
          "El ambiente en el box durante el Open es incomparable",
        ],
      },
      {
        type: "h2",
        text: "Cómo prepararte para el Open 2026 desde ahora",
      },
      {
        type: "p",
        text: "Si quieres que el Open 2026 sea una experiencia positiva y no frustrante, hay ciertas habilidades que conviene trabajar con antelación. No se trata de volverse de repente un atleta élite, sino de adquirir el vocabulario técnico básico.",
      },
      {
        type: "ul",
        items: [
          "Double-unders (salto a la comba doble): son frecuentes en el Open scaled",
          "Toes-to-bar y knees-to-elbow: trabajo de core en barra",
          "Thruster y wallball: los clásicos que casi nunca faltan",
          "Pull-ups y ring rows para la categoría scaled",
          "Levantamientos de halterofilia con técnica sólida (clean, snatch)",
        ],
      },
      {
        type: "h2",
        text: "El Open en Gorobel: una experiencia de comunidad",
      },
      {
        type: "p",
        text: "En Gorobel organizamos el Open como un evento. Preparamos el box, ponemos música, los socios se animan mutuamente, los coaches dan feedback en tiempo real. No es solo completar un workout: es vivir en comunidad algo que hacen atletas de todo el mundo al mismo tiempo.",
      },
      {
        type: "quote",
        text: "El Open me hizo darme cuenta de que era más capaz de lo que creía. En mi primer año terminé en el top 30% de España de mi categoría. Con solo 8 meses de CrossTraining.",
        author: "Sara, socia de Gorobel Llodio",
      },
      {
        type: "h2",
        text: "Fechas y registro para el Open 2026",
      },
      {
        type: "p",
        text: "El CrossFit Open 2026 comenzará en febrero de 2026. La inscripción es a través de la plataforma oficial de CrossFit Games (games.crossfit.com). En Gorobel te ayudamos con el proceso de registro y te asignamos un juez para validar tus workouts.",
      },
      {
        type: "highlight",
        text: "¿Quieres prepararte en serio para el Open 2026? Habla con tu coach en Gorobel para diseñar un plan de preparación de 8-12 semanas.",
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getRelatedPosts(currentSlug: string, count = 3): BlogPost[] {
  return blogPosts.filter((p) => p.slug !== currentSlug).slice(0, count);
}
