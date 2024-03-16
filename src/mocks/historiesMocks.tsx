import categoriesMocks from "./categoriesMocks";

const autor = {
  name: "",
  username: "suanhero",
};

const history: IHistory = {
  id: 101,
  title: "El Bosque Encantado",
  resumen: `Ian y Alira buscan el legendario Orbe de la Eternidad en el Bosque Encantado.`,
  history: `En lo profundo del Bosque Encantado, donde los árboles susurran secretos ancestrales y las criaturas mágicas danzan bajo la luz de la luna, se encontraba el joven mago Ian. Ian, dotado de poderes místicos desde su nacimiento, se aventuraba en busca del legendario Orbe de la Eternidad, una reliquia mágica que otorgaba poder absoluto a quien la poseía.

    Con su fiel compañero, el dragón Sombra, Ian avanzaba entre los senderos del bosque, enfrentándose a peligrosas criaturas y desafiando hechizos oscuros que protegían el preciado objeto. Sin embargo, en su viaje, Ian se encontró con la bella hechicera Alira, cuya magia rivalizaba con la suya.
    
    Al principio, Ian y Alira se enfrentaron con hechizos y trampas astutas, cada uno determinado a reclamar el Orbe para sí mismo. Pero a medida que sus encuentros continuaban, comenzaron a descubrir una conexión más profunda entre ellos, una chispa de entendimiento y complicidad que trascendía las diferencias.
    
    Finalmente, Ian y Alira se unieron en una alianza improbable, combinando sus habilidades mágicas para enfrentarse a las últimas pruebas que protegían el Orbe de la Eternidad. Con valentía y determinación, superaron los desafíos finales y llegaron ante la reliquia centenaria.
    
    En un momento de verdad, Ian y Alira compartieron un último hechizo, desbloqueando el poder del Orbe y liberando su energía antigua en el bosque. Con su misión cumplida, Ian y Alira comprendieron que su encuentro no fue un accidente, sino el inicio de una nueva aventura juntos, donde la magia y el amor se entrelazaban en el Bosque Encantado.`,
  categories: [categoriesMocks.fantasia, categoriesMocks.romance],
  //@ts-ignore
  autor,
  aproved_at: new Date(),
};
const history2: IHistory = {
  id: 102,
  title: "El Café de las Estrellas",
  resumen:
    "Laura y Daniel se encuentran en el Café de las Estrellas y comparten un romance bajo la luz de las estrellas.",
  history: `En una tranquila calle adoquinada, se alzaba el Café de las Estrellas, un lugar donde los sueños se tejían entre el aroma del café y las notas suaves de la música de jazz. Entre los clientes habituales del café se encontraban Laura y Daniel, dos almas solitarias cuyos destinos estaban a punto de cruzarse.

    Laura, una artista bohemia con un corazón lleno de esperanza, encontraba inspiración en cada sorbo de café y en las conversaciones con los extraños que frecuentaban el café. Daniel, un escritor tímido y reservado, buscaba refugio en las páginas de su cuaderno y en la calidez del ambiente del café.
    
    Una noche estrellada, Laura y Daniel se encontraron en una mesa al aire libre, bajo el resplandor de las estrellas y la luz suave de las farolas. Entre risas y confesiones, descubrieron que compartían una pasión por el arte y los sueños que parecían imposibles.
    
    Con el tiempo, las visitas al Café de las Estrellas se convirtieron en citas regulares para Laura y Daniel, donde compartían sus esperanzas, miedos y sueños más profundos. Entre las páginas de su cuaderno, Daniel escribía poemas de amor dedicados a Laura, mientras ella pintaba lienzos que capturaban la belleza del café y la magia de su amor.
    
    En una noche especial, bajo el dosel de las estrellas brillantes, Daniel tomó la mano de Laura y le confesó su amor en palabras sinceras y dulces. Con lágrimas de felicidad en sus ojos, Laura aceptó su amor y sellaron su unión con un beso tierno y eterno, en el Café de las Estrellas, donde los sueños se hacían realidad y el amor florecía en cada taza de café.`,
  categories: [categoriesMocks.fantasia],
  //@ts-ignore
  autor,
  aproved_at: new Date(),
};

const history3: IHistory = {
  id: 103,
  title: "El Café de las Estrellas tomo 2",
  resumen: "Laura y Daniel se encuentran en el Café",
  history: `En una tranquila calle adoquinada, se alzaba el Café de las Estrellas, un lugar donde los sueños se tejían entre el aroma del café y las notas suaves de la música de jazz. Entre los clientes habituales del café se encontraban Laura y Daniel, dos almas solitarias cuyos destinos estaban a punto de cruzarse.

    Laura, una artista bohemia con un corazón lleno de esperanza, encontraba inspiración en cada sorbo de café y en las conversaciones con los extraños que frecuentaban el café. Daniel, un escritor tímido y reservado, buscaba refugio en las páginas de su cuaderno y en la calidez del ambiente del café.
    
    Una noche estrellada, Laura y Daniel se encontraron en una mesa al aire libre, bajo el resplandor de las estrellas y la luz suave de las farolas. Entre risas y confesiones, descubrieron que compartían una pasión por el arte y los sueños que parecían imposibles.
    
    Con el tiempo, las visitas al Café de las Estrellas se convirtieron en citas regulares para Laura y Daniel, donde compartían sus esperanzas, miedos y sueños más profundos. Entre las páginas de su cuaderno, Daniel escribía poemas de amor dedicados a Laura, mientras ella pintaba lienzos que capturaban la belleza del café y la magia de su amor.
    
    En una noche especial, bajo el dosel de las estrellas brillantes, Daniel tomó la mano de Laura y le confesó su amor en palabras sinceras y dulces. Con lágrimas de felicidad en sus ojos, Laura aceptó su amor y sellaron su unión con un beso tierno y eterno, en el Café de las Estrellas, donde los sueños se hacían realidad y el amor florecía en cada taza de café.`,
  categories: [categoriesMocks.fantasia],
  //@ts-ignore
  autor,
  aproved_at: new Date(),
};

// Lista de categorías
const categorias = [
  "Fantasía",
  "Ciencia ficción",
  "Misterio",
  "Aventura",
  "Romance",
  "Terror",
  "Humor",
  "Drama",
  "Fábula",
  "Histórico",
  "Realista",
  "Mitología y folclore",
  "Acción",
  "Suspenso",
  "Infantil",
];

// Función para obtener un array con un listado de máximo 5 categorías
const obtenerCategoriasAleatorias = () => {
  // Copiar el array de categorías para evitar modificar el original
  const categoriasCopia = [...categoriesMocks.data];
  // Array para almacenar las categorías seleccionadas
  const categoriasSeleccionadas = [];

  // Mientras haya categorías en la copia y no se hayan seleccionado 5
  while (categoriasSeleccionadas.length < 5 && categoriasCopia.length > 0) {
    // Seleccionar un índice aleatorio de la copia de categorías
    const indiceAleatorio = Math.floor(Math.random() * categoriasCopia.length);
    // Obtener la categoría en el índice aleatorio y agregarla a las seleccionadas
    categoriasSeleccionadas.push(categoriasCopia.splice(indiceAleatorio, 1)[0]);
  }

  return categoriasSeleccionadas;
};

// Ejemplo de uso

const renderdata = () => {
  const data = [
    {
      id: 1,
      title: "Assault on a Queen",
      resumen: "Osteonecrosis due to drugs of right radius",
      history: "Wall Protection",
      categories: [
        {
          name: "Drama|Thriller",
          keyname: "Drama",
        },
      ],
      autor: {
        name: "Hugues Vickerman",
        username: "hvickerman0",
      },
      aproved_at: "2023-05-05 03:02:48",
    },
    {
      id: 2,
      title: "Racing with the Moon",
      resumen: "Other contact with pig, subsequent encounter",
      history: "Plumbing & Medical Gas",
      categories: [
        {
          name: "Comedy|Drama|Fantasy|Sci-Fi",
          keyname: "Drama",
        },
        {
          name: "Comedy|Thriller",
          keyname: "Comedy|Drama",
        },
      ],
      autor: {
        name: "Dorene Armstead",
        username: "darmstead1",
      },
      aproved_at: "2023-06-03 18:05:39",
    },
    {
      id: 3,
      title: "Green Dragon",
      resumen: "Insect bite (nonvenomous), left foot, initial encounter",
      history: "Framing (Steel)",
      categories: [
        {
          name: "Documentary",
          keyname: "Comedy",
        },
      ],
      autor: {
        name: "Ruthanne Cubbin",
        username: "rcubbin2",
      },
      aproved_at: "2024-02-09 05:24:25",
    },
    {
      id: 4,
      title: "Reaching for the Moon",
      resumen: "Periumbilic abdominal tenderness",
      history: "Sitework & Site Utilities",
      categories: [
        {
          name: "Crime|Drama",
          keyname: "Drama",
        },
        {
          name: "Action|Adventure|Comedy|Western",
          keyname: "Action|Drama",
        },
        {
          name: "Drama|Musical",
          keyname: "(no genres listed)",
        },
      ],
      autor: {
        name: "Bellanca Coale",
        username: "bcoale3",
      },
      aproved_at: "2023-10-24 22:12:07",
    },
    {
      id: 5,
      title: "Venice/Venice",
      resumen:
        "Driver of heavy transport vehicle injured in collision with railway train or railway vehicle in traffic accident",
      history: "Elevator",
      categories: [],
      autor: {
        name: "Karina Hambribe",
        username: "khambribe4",
      },
      aproved_at: "2023-04-11 13:00:29",
    },
    {
      id: 6,
      title: "Caged",
      resumen:
        "Other fish poisoning, accidental (unintentional), initial encounter",
      history: "Retaining Wall and Brick Pavers",
      categories: [
        {
          name: "Adventure|Drama|Romance",
          keyname: "Comedy|Romance|War",
        },
      ],
      autor: {
        name: "Seline Pringuer",
        username: "springuer5",
      },
      aproved_at: "2024-03-06 02:33:25",
    },
    {
      id: 7,
      title: "Magic Town",
      resumen: "Prolonged stay in weightless environment, subsequent encounter",
      history: "Plumbing & Medical Gas",
      categories: [
        {
          name: "Drama|Romance|War",
          keyname: "Fantasy",
        },
        {
          name: "Drama",
          keyname: "Drama",
        },
        {
          name: "Drama|Romance",
          keyname: "Drama|Thriller",
        },
        {
          name: "Horror|Thriller",
          keyname: "Action|Drama|Mystery|Sci-Fi|Thriller|IMAX",
        },
      ],
      autor: {
        name: "Aharon Ratnage",
        username: "aratnage6",
      },
      aproved_at: "2023-11-17 16:46:44",
    },
    {
      id: 8,
      title: "Blue Steel",
      resumen: "Nonrheumatic aortic valve disorders",
      history: "Epoxy Flooring",
      categories: [
        {
          name: "Documentary",
          keyname: "Comedy|Drama",
        },
        {
          name: "Comedy",
          keyname: "Drama",
        },
        {
          name: "Documentary|IMAX",
          keyname: "Action|Crime|Drama",
        },
        {
          name: "Comedy|Western",
          keyname: "Animation|Drama|Mystery|Sci-Fi|Thriller",
        },
      ],
      autor: {
        name: "Kyle Chase",
        username: "kchase7",
      },
      aproved_at: "2023-04-04 21:36:50",
    },
    {
      id: 9,
      title: "Street Trash",
      resumen:
        "Displaced articular fracture of head of right femur, subsequent encounter for open fracture type IIIA, IIIB, or IIIC with malunion",
      history: "Asphalt Paving",
      categories: [
        {
          name: "Horror",
          keyname: "Drama",
        },
        {
          name: "Western",
          keyname: "Crime|Documentary|Drama",
        },
        {
          name: "Crime",
          keyname: "Drama|Romance",
        },
        {
          name: "Comedy|Musical",
          keyname: "Drama",
        },
        {
          name: "Action|Adventure",
          keyname: "Comedy|Romance",
        },
      ],
      autor: {
        name: "Andie Harg",
        username: "aharg8",
      },
      aproved_at: "2023-10-29 17:41:09",
    },
    {
      id: 10,
      title: "Cinderella II: Dreams Come True",
      resumen: "Unspecified superficial injury of unspecified hip",
      history: "Structural & Misc Steel Erection",
      categories: [],
      autor: {
        name: "Merilyn Anton",
        username: "manton9",
      },
      aproved_at: "2024-02-21 13:35:54",
    },
    {
      id: 11,
      title: "Dreamboat",
      resumen:
        "Passenger in three-wheeled motor vehicle injured in collision with unspecified motor vehicles in traffic accident, subsequent encounter",
      history: "Casework",
      categories: [
        {
          name: "Adventure|Comedy",
          keyname: "Adventure|Drama|Romance",
        },
        {
          name: "Children|Comedy",
          keyname: "Drama|War",
        },
        {
          name: "Western",
          keyname: "Comedy",
        },
        {
          name: "Action|Thriller",
          keyname: "Action|Adventure|Horror|Sci-Fi",
        },
      ],
      autor: {
        name: "Deborah Amar",
        username: "damara",
      },
      aproved_at: "2024-02-02 23:39:42",
    },
    {
      id: 12,
      title: "Rebecca",
      resumen:
        "War operations involving explosion of guided missile, military personnel",
      history: "Structural & Misc Steel Erection",
      categories: [
        {
          name: "Comedy|Drama",
          keyname: "Horror|Sci-Fi",
        },
        {
          name: "Drama|War",
          keyname: "Drama|Thriller",
        },
        {
          name: "Drama",
          keyname: "Action|Drama|Sci-Fi",
        },
      ],
      autor: {
        name: "Candida Brobak",
        username: "cbrobakb",
      },
      aproved_at: "2024-02-19 18:31:38",
    },
    {
      id: 13,
      title: "Moon Child",
      resumen:
        "Toxic effect of venom of brown recluse spider, intentional self-harm, sequela",
      history: "Retaining Wall and Brick Pavers",
      categories: [
        {
          name: "Documentary",
          keyname: "Drama|Thriller",
        },
        {
          name: "Comedy|Crime|Drama|Horror",
          keyname: "Drama",
        },
        {
          name: "Drama",
          keyname: "Comedy|Drama|Musical",
        },
        {
          name: "(no genres listed)",
          keyname: "Comedy|Crime",
        },
        {
          name: "Drama|Fantasy|Horror",
          keyname: "Drama",
        },
      ],
      autor: {
        name: "Nikola Spawton",
        username: "nspawtonc",
      },
      aproved_at: "2023-11-30 00:50:11",
    },
    {
      id: 14,
      title: "Terror's Advocate (Avocat de la terreur, L')",
      resumen: "Laceration of muscle, fascia and tendon of left hip",
      history: "Framing (Wood)",
      categories: [
        {
          name: "Documentary",
          keyname: "Musical|Romance",
        },
        {
          name: "Crime|Drama",
          keyname: "Action|Comedy|Crime|Thriller",
        },
      ],
      autor: {
        name: "Romy Wilden",
        username: "rwildend",
      },
      aproved_at: "2023-03-21 10:47:51",
    },
    {
      id: 15,
      title: "Freshman, The",
      resumen: "Fracture of body of talus",
      history: "Masonry & Precast",
      categories: [],
      autor: {
        name: "Darbie Haville",
        username: "dhavillee",
      },
      aproved_at: "2024-02-19 15:42:44",
    },
    {
      id: 16,
      title: "Brick",
      resumen: "Other infective (teno)synovitis, wrist",
      history: "Prefabricated Aluminum Metal Canopies",
      categories: [],
      autor: {
        name: "Andie Garnam",
        username: "agarnamf",
      },
      aproved_at: "2023-07-10 13:58:54",
    },
    {
      id: 17,
      title: "Daughters of the Dust",
      resumen:
        "Toxic effect of contact with venomous toad, intentional self-harm",
      history: "Epoxy Flooring",
      categories: [
        {
          name: "Drama",
          keyname: "Drama",
        },
        {
          name: "Drama",
          keyname: "Comedy|Drama",
        },
        {
          name: "Comedy|Drama",
          keyname: "Crime|Drama",
        },
      ],
      autor: {
        name: "Shannan Bartles",
        username: "sbartlesg",
      },
      aproved_at: "2023-07-20 05:46:50",
    },
    {
      id: 18,
      title: "Goat, The",
      resumen: "Occupational exposure to other air contaminants",
      history: "Plumbing & Medical Gas",
      categories: [
        {
          name: "Action",
          keyname: "Drama",
        },
        {
          name: "Drama|Romance",
          keyname: "Drama",
        },
        {
          name: "Drama|War",
          keyname: "Drama",
        },
        {
          name: "Comedy|Fantasy|Musical|Romance",
          keyname: "Comedy",
        },
        {
          name: "Drama|Mystery|Romance",
          keyname: "Animation|Children",
        },
      ],
      autor: {
        name: "Pattin Grattan",
        username: "pgrattanh",
      },
      aproved_at: "2023-08-30 08:06:52",
    },
    {
      id: 19,
      title: "Earth Entranced (Terra em Transe)",
      resumen:
        "Displaced transverse fracture of shaft of unspecified fibula, subsequent encounter for closed fracture with routine healing",
      history: "Framing (Steel)",
      categories: [
        {
          name: "Adventure",
          keyname: "Adventure|Drama",
        },
        {
          name: "Drama",
          keyname: "Comedy|Drama",
        },
        {
          name: "Drama|Romance",
          keyname: "Comedy",
        },
      ],
      autor: {
        name: "Marlo Stanbrooke",
        username: "mstanbrookei",
      },
      aproved_at: "2024-01-04 04:15:33",
    },
    {
      id: 20,
      title: "Last Time I Committed Suicide, The",
      resumen: "Chronic myringitis, unspecified ear",
      history: "EIFS",
      categories: [
        {
          name: "Drama|Thriller",
          keyname: "Drama",
        },
        {
          name: "Horror",
          keyname: "Drama",
        },
        {
          name: "Comedy",
          keyname: "Comedy",
        },
        {
          name: "Drama",
          keyname: "Drama|Thriller",
        },
        {
          name: "Horror",
          keyname: "Crime|Drama|Thriller",
        },
      ],
      autor: {
        name: "Eberhard Foad",
        username: "efoadj",
      },
      aproved_at: "2023-06-09 09:04:54",
    },
    {
      id: 21,
      title: "In Your Eyes",
      resumen:
        "Nondisplaced fracture of left tibial tuberosity, initial encounter for open fracture type IIIA, IIIB, or IIIC",
      history: "Fire Sprinkler System",
      categories: [
        {
          name: "Drama|War",
          keyname: "Drama",
        },
        {
          name: "Drama",
          keyname: "Comedy|Drama",
        },
        {
          name: "Documentary",
          keyname: "Horror|Sci-Fi",
        },
        {
          name: "Action|Adventure|Crime|Thriller",
          keyname: "Drama|Thriller",
        },
        {
          name: "Horror|Mystery",
          keyname: "Comedy",
        },
      ],
      autor: {
        name: "Sloan Pesek",
        username: "spesekk",
      },
      aproved_at: "2024-02-22 03:39:38",
    },
    {
      id: 22,
      title: "Harvey",
      resumen:
        "Coma scale, eyes open, spontaneous, 24 hours or more after hospital admission",
      history: "Electrical",
      categories: [
        {
          name: "Adventure|Children|Sci-Fi",
          keyname: "Comedy",
        },
        {
          name: "Action|Adventure|Drama|Musical|Romance|Thriller|War",
          keyname: "Action|Adventure|Comedy",
        },
        {
          name: "Drama",
          keyname: "Horror|Sci-Fi|Thriller",
        },
      ],
      autor: {
        name: "Del Snodden",
        username: "dsnoddenl",
      },
      aproved_at: "2023-04-20 03:16:13",
    },
    {
      id: 23,
      title: "Boys from Brazil, The",
      resumen: "Spastic entropion of left eye, unspecified eyelid",
      history: "Roofing (Metal)",
      categories: [
        {
          name: "Comedy|Drama|Romance",
          keyname: "Comedy",
        },
        {
          name: "Adventure|Comedy|Drama|Romance",
          keyname: "Crime|Drama|Thriller",
        },
        {
          name: "Documentary",
          keyname: "Comedy",
        },
      ],
      autor: {
        name: "Rose Drysdale",
        username: "rdrysdalem",
      },
      aproved_at: "2023-07-25 04:28:07",
    },
    {
      id: 24,
      title: "Zeder",
      resumen:
        "Poisoning by other specified systemic anti-infectives and antiparasitics, assault",
      history: "Drywall & Acoustical (MOB)",
      categories: [
        {
          name: "Drama",
          keyname: "Animation|Comedy|Drama",
        },
        {
          name: "Romance|Thriller",
          keyname: "Comedy",
        },
        {
          name: "Drama",
          keyname: "Drama|Musical",
        },
        {
          name: "Action|Adventure|Drama|Sci-Fi",
          keyname: "Drama",
        },
        {
          name: "Drama",
          keyname: "Documentary",
        },
      ],
      autor: {
        name: "Donnajean Gatecliff",
        username: "dgatecliffn",
      },
      aproved_at: "2023-12-13 19:12:03",
    },
    {
      id: 25,
      title: "Magic of Ordinary Days, The",
      resumen: "Burns involving 90% or more of body surface",
      history: "Construction Clean and Final Clean",
      categories: [
        {
          name: "Adventure|Children",
          keyname: "Comedy",
        },
        {
          name: "Comedy|Drama",
          keyname: "Drama|Romance",
        },
        {
          name: "Drama",
          keyname: "Action|Drama|War",
        },
        {
          name: "Comedy|Romance",
          keyname: "Fantasy|Mystery|Romance|Thriller",
        },
      ],
      autor: {
        name: "Valentin Aleshkov",
        username: "valeshkovo",
      },
      aproved_at: "2024-01-20 06:11:15",
    },
    {
      id: 26,
      title:
        "Night of the Day of the Dawn of the Son of the Bride of the Return of the Terror",
      resumen:
        "Salter-Harris Type II physeal fracture of left metatarsal, sequela",
      history: "Drilled Shafts",
      categories: [
        {
          name: "Action|Comedy|Documentary",
          keyname: "Musical",
        },
      ],
      autor: {
        name: "Jorry Paolazzi",
        username: "jpaolazzip",
      },
      aproved_at: "2023-12-16 18:18:21",
    },
    {
      id: 27,
      title: "Trishna",
      resumen:
        "Person boarding or alighting from bus injured in collision with fixed or stationary object",
      history: "Epoxy Flooring",
      categories: [
        {
          name: "Comedy|Western",
          keyname: "Comedy|Drama|Romance",
        },
        {
          name: "Comedy",
          keyname: "Drama|Romance",
        },
        {
          name: "Drama|War",
          keyname: "Comedy|Romance",
        },
        {
          name: "Drama|Fantasy|Mystery|Sci-Fi",
          keyname: "Documentary",
        },
      ],
      autor: {
        name: "Olivette Titterington",
        username: "otitteringtonq",
      },
      aproved_at: "2023-10-12 08:54:42",
    },
    {
      id: 28,
      title: "Documentarian",
      resumen:
        "Encounter for examination for period of delayed growth in childhood with abnormal findings",
      history: "Exterior Signage",
      categories: [],
      autor: {
        name: "Dannie Pollins",
        username: "dpollinsr",
      },
      aproved_at: "2023-04-17 02:46:07",
    },
    {
      id: 29,
      title: "She Does Not Drink, Smoke or Flirt But... She Talks",
      resumen: "Other infective spondylopathies, occipito-atlanto-axial region",
      history: "Marlite Panels (FED)",
      categories: [
        {
          name: "Documentary",
          keyname: "Drama|Thriller",
        },
        {
          name: "Drama|Sci-Fi|War",
          keyname: "Drama",
        },
      ],
      autor: {
        name: "Elga Stratiff",
        username: "estratiffs",
      },
      aproved_at: "2023-04-26 09:23:38",
    },
    {
      id: 30,
      title: "Love is Eternal While It Lasts",
      resumen:
        "Other specified injury of posterior tibial artery, left leg, subsequent encounter",
      history: "Drilled Shafts",
      categories: [
        {
          name: "Thriller",
          keyname: "Crime|Drama|Film-Noir|Thriller",
        },
        {
          name: "Action|Comedy",
          keyname: "Comedy|Horror",
        },
        {
          name: "Comedy",
          keyname: "Action|Drama|Fantasy",
        },
      ],
      autor: {
        name: "Skippy Paxton",
        username: "spaxtont",
      },
      aproved_at: "2023-12-03 14:45:18",
    },
    {
      id: 31,
      title: "Kirikou and the Sorceress (Kirikou et la sorcière)",
      resumen: "Other infective bursitis, right knee",
      history: "Exterior Signage",
      categories: [
        {
          name: "Comedy",
          keyname: "Drama|Horror|Mystery|Romance|Thriller",
        },
      ],
      autor: {
        name: "Carver Rugg",
        username: "cruggu",
      },
      aproved_at: "2023-05-02 18:57:20",
    },
    {
      id: 32,
      title: "20th Century Boys - Chapter 1: Beginning of the End",
      resumen:
        "Pathological fracture, left fibula, initial encounter for fracture",
      history: "Construction Clean and Final Clean",
      categories: [
        {
          name: "Adventure|Fantasy",
          keyname: "Comedy|Drama",
        },
      ],
      autor: {
        name: "Cherice Hamner",
        username: "chamnerv",
      },
      aproved_at: "2023-10-07 09:45:20",
    },
    {
      id: 33,
      title: "Unfaithful, The",
      resumen: "Other degenerative disorders of globe",
      history: "Asphalt Paving",
      categories: [
        {
          name: "Comedy|Crime|Drama|Musical",
          keyname: "Documentary",
        },
        {
          name: "Drama",
          keyname: "Comedy",
        },
        {
          name: "Comedy|Horror|Sci-Fi",
          keyname: "Documentary",
        },
        {
          name: "Comedy|Romance",
          keyname: "Comedy",
        },
        {
          name: "Drama",
          keyname: "Drama|Romance",
        },
      ],
      autor: {
        name: "Evelyn Emblow",
        username: "eembloww",
      },
      aproved_at: "2023-11-10 09:08:18",
    },
    {
      id: 34,
      title: "Diplomatic Immunity (2009– )",
      resumen: "Tinea imbricata",
      history: "Granite Surfaces",
      categories: [
        {
          name: "Documentary|Drama",
          keyname: "Action|Adventure|Crime|Thriller",
        },
        {
          name: "Adventure|Fantasy",
          keyname: "Drama",
        },
        {
          name: "Animation|Drama|Romance|War",
          keyname: "Drama",
        },
        {
          name: "Drama|Thriller",
          keyname: "Comedy",
        },
        {
          name: "Drama|Romance",
          keyname: "Comedy",
        },
      ],
      autor: {
        name: "Lee Stiffell",
        username: "lstiffellx",
      },
      aproved_at: "2023-07-12 18:18:07",
    },
    {
      id: 35,
      title: "Stay",
      resumen:
        "Displaced fracture of epiphysis (separation) (upper) of unspecified femur, subsequent encounter for closed fracture with malunion",
      history: "Temp Fencing, Decorative Fencing and Gates",
      categories: [
        {
          name: "Drama|Romance",
          keyname: "Drama",
        },
        {
          name: "Comedy",
          keyname: "Drama|Mystery|Romance",
        },
        {
          name: "Horror|Thriller",
          keyname: "Comedy|Horror|Mystery|Sci-Fi",
        },
        {
          name: "Horror|Sci-Fi|Thriller",
          keyname: "Documentary",
        },
      ],
      autor: {
        name: "Tamara Jikovsky",
        username: "tjikovskyy",
      },
      aproved_at: "2023-11-10 19:36:26",
    },
    {
      id: 36,
      title: "Masculin Féminin",
      resumen: "Abscess of Bartholin's gland",
      history: "Prefabricated Aluminum Metal Canopies",
      categories: [
        {
          name: "Drama|Horror|Mystery",
          keyname: "Drama",
        },
        {
          name: "Documentary",
          keyname: "Documentary",
        },
        {
          name: "Comedy",
          keyname: "Crime|Drama",
        },
        {
          name: "Comedy|Drama",
          keyname: "Comedy|Drama",
        },
        {
          name: "Sci-Fi",
          keyname: "Action|Sci-Fi",
        },
      ],
      autor: {
        name: "Shelagh Colcomb",
        username: "scolcombz",
      },
      aproved_at: "2023-09-11 13:38:13",
    },
    {
      id: 37,
      title: "Traffic Affairs (Mitfahrer)",
      resumen: "Other sarcomas of liver",
      history: "Masonry & Precast",
      categories: [
        {
          name: "Action|Adventure|Thriller",
          keyname: "Drama",
        },
        {
          name: "Drama",
          keyname: "Drama",
        },
      ],
      autor: {
        name: "Andee O'Shirine",
        username: "aoshirine10",
      },
      aproved_at: "2023-10-25 03:58:57",
    },
    {
      id: 38,
      title: "They Call Me Trinity",
      resumen:
        "Pedestrian with other conveyance injured in collision with pedal cycle in traffic accident, subsequent encounter",
      history: "Painting & Vinyl Wall Covering",
      categories: [
        {
          name: "Horror",
          keyname: "Documentary",
        },
        {
          name: "Drama",
          keyname: "Action|Adventure|Crime|IMAX",
        },
      ],
      autor: {
        name: "Lennie Winley",
        username: "lwinley11",
      },
      aproved_at: "2024-01-05 14:24:06",
    },
    {
      id: 39,
      title: "Bravo Two Zero ",
      resumen: "Injury of lateral plantar nerve, right leg, sequela",
      history: "Soft Flooring and Base",
      categories: [
        {
          name: "Adventure|Comedy",
          keyname: "Comedy",
        },
        {
          name: "Drama|Thriller",
          keyname: "Horror",
        },
        {
          name: "Comedy",
          keyname: "(no genres listed)",
        },
      ],
      autor: {
        name: "Laverne Dougan",
        username: "ldougan12",
      },
      aproved_at: "2024-03-01 14:18:47",
    },
    {
      id: 40,
      title: "From B Movie to Cult Film: Western",
      resumen:
        "Nondisplaced fracture of proximal phalanx of right great toe, initial encounter for closed fracture",
      history: "Termite Control",
      categories: [
        {
          name: "Crime|Drama",
          keyname: "Comedy|Drama",
        },
        {
          name: "Mystery|Western",
          keyname: "Comedy|Crime|Mystery",
        },
      ],
      autor: {
        name: "Evangelina Fernandes",
        username: "efernandes13",
      },
      aproved_at: "2023-04-18 22:57:02",
    },
    {
      id: 41,
      title: "Pornography (Pornografia)",
      resumen: "Charcot's joint, knee",
      history: "Structural and Misc Steel (Fabrication)",
      categories: [
        {
          name: "Comedy|Crime",
          keyname: "Fantasy|Horror|Mystery",
        },
      ],
      autor: {
        name: "Claude Blasoni",
        username: "cblasoni14",
      },
      aproved_at: "2024-03-06 13:44:48",
    },
    {
      id: 42,
      title: "Glue",
      resumen:
        "Stress fracture, right shoulder, initial encounter for fracture",
      history: "Waterproofing & Caulking",
      categories: [
        {
          name: "Crime|Drama",
          keyname: "Action|Adventure|Sci-Fi|Thriller",
        },
        {
          name: "Comedy|Romance",
          keyname: "Drama|War",
        },
      ],
      autor: {
        name: "Caz Yardley",
        username: "cyardley15",
      },
      aproved_at: "2024-01-13 14:49:31",
    },
    {
      id: 43,
      title: "Kidnapped For Christ",
      resumen:
        "Melanocytic nevi of unspecified ear and external auricular canal",
      history: "Prefabricated Aluminum Metal Canopies",
      categories: [],
      autor: {
        name: "Geoffry Matfield",
        username: "gmatfield16",
      },
      aproved_at: "2023-05-20 20:05:23",
    },
    {
      id: 44,
      title: "Adventures of Sebastian Cole, The",
      resumen: "Nondisplaced Zone II fracture of sacrum",
      history: "Marlite Panels (FED)",
      categories: [
        {
          name: "Drama|Romance",
          keyname: "Drama",
        },
        {
          name: "Documentary",
          keyname: "Adventure|Animation|Children|Comedy",
        },
        {
          name: "Documentary",
          keyname: "Comedy",
        },
      ],
      autor: {
        name: "Ringo O'Hartnett",
        username: "rohartnett17",
      },
      aproved_at: "2023-04-12 14:30:40",
    },
    {
      id: 45,
      title: "Lovely, Still",
      resumen:
        "Displaced fracture of greater trochanter of right femur, subsequent encounter for open fracture type I or II with routine healing",
      history: "Landscaping & Irrigation",
      categories: [
        {
          name: "Action|War",
          keyname: "Drama",
        },
        {
          name: "Drama",
          keyname: "Horror|Mystery",
        },
        {
          name: "Documentary",
          keyname: "Drama",
        },
        {
          name: "Documentary|War",
          keyname: "Action|Thriller",
        },
      ],
      autor: {
        name: "Thorsten Verne",
        username: "tverne18",
      },
      aproved_at: "2023-07-22 12:20:54",
    },
    {
      id: 46,
      title: "Beerfest",
      resumen: "Hydroxyapatite deposition disease, left ankle and foot",
      history: "Wall Protection",
      categories: [
        {
          name: "Comedy|Romance",
          keyname: "Crime|Drama|Thriller",
        },
        {
          name: "Drama|Mystery",
          keyname: "Comedy|Drama",
        },
        {
          name: "Crime|Horror|Sci-Fi",
          keyname: "Drama",
        },
        {
          name: "Adventure|Comedy|Romance",
          keyname: "Drama",
        },
        {
          name: "Comedy",
          keyname: "Horror|Sci-Fi",
        },
      ],
      autor: {
        name: "Efrem Raubenheim",
        username: "eraubenheim19",
      },
      aproved_at: "2023-12-20 04:26:05",
    },
    {
      id: 47,
      title: "Starsky & Hutch",
      resumen:
        "Fall into natural body of water striking water surface causing drowning and submersion, initial encounter",
      history: "Doors, Frames & Hardware",
      categories: [],
      autor: {
        name: "Laurette McNally",
        username: "lmcnally1a",
      },
      aproved_at: "2024-02-02 10:48:00",
    },
    {
      id: 48,
      title: "Revenant, The",
      resumen:
        "Pedestrian injured in nontraffic accident involving other motor vehicles",
      history: "HVAC",
      categories: [
        {
          name: "Crime|Drama",
          keyname: "Comedy|Crime|Drama",
        },
        {
          name: "Horror|Thriller",
          keyname: "Horror|Sci-Fi|Thriller",
        },
        {
          name: "Action|Adventure|Thriller",
          keyname: "Drama",
        },
        {
          name: "Documentary",
          keyname: "Documentary|Musical",
        },
        {
          name: "Drama",
          keyname: "Action|Crime|Western",
        },
      ],
      autor: {
        name: "Ferdy Challener",
        username: "fchallener1b",
      },
      aproved_at: "2023-08-04 13:28:01",
    },
    {
      id: 49,
      title: "Temptation of a Monk (You Seng)",
      resumen:
        "Laceration of abdominal wall with foreign body, right lower quadrant without penetration into peritoneal cavity, sequela",
      history: "Curb & Gutter",
      categories: [
        {
          name: "Adventure|Comedy",
          keyname: "Drama|War",
        },
        {
          name: "Horror|Mystery",
          keyname: "Drama",
        },
      ],
      autor: {
        name: "Gwenni Deamer",
        username: "gdeamer1c",
      },
      aproved_at: "2023-08-09 05:34:35",
    },
    {
      id: 50,
      title: "Borrower, The",
      resumen: "Insect bite (nonvenomous) of right hand",
      history: "Doors, Frames & Hardware",
      categories: [
        {
          name: "Comedy|Romance",
          keyname: "Drama",
        },
        {
          name: "Drama",
          keyname: "Action|Drama|War",
        },
      ],
      autor: {
        name: "Karim Towl",
        username: "ktowl1d",
      },
      aproved_at: "2023-04-13 18:38:00",
    },
    {
      id: 51,
      title: "Gimme Shelter",
      resumen:
        "Unspecified fracture of shaft of left femur, subsequent encounter for open fracture type IIIA, IIIB, or IIIC with malunion",
      history: "Hard Tile & Stone",
      categories: [
        {
          name: "Horror",
          keyname: "Drama",
        },
        {
          name: "Comedy|Crime|Thriller",
          keyname: "Adventure|Animation|Children|Fantasy",
        },
        {
          name: "Comedy|Fantasy|Musical",
          keyname: "Documentary",
        },
        {
          name: "Documentary|Fantasy",
          keyname: "Horror",
        },
        {
          name: "Fantasy|Horror",
          keyname: "Drama|Fantasy|Horror",
        },
      ],
      autor: {
        name: "Theodor Chessell",
        username: "tchessell1e",
      },
      aproved_at: "2024-01-04 04:53:55",
    },
    {
      id: 52,
      title: "Young Guns II",
      resumen: "Underdosing of macrolides, initial encounter",
      history: "Structural & Misc Steel Erection",
      categories: [
        {
          name: "Comedy|Drama|Romance",
          keyname: "Drama|Mystery|Thriller",
        },
        {
          name: "Comedy|Drama|War",
          keyname: "Horror|Thriller",
        },
      ],
      autor: {
        name: "Julia Crisford",
        username: "jcrisford1f",
      },
      aproved_at: "2023-05-06 12:32:35",
    },
    {
      id: 53,
      title: "The Sweet Ride",
      resumen:
        "Laceration of radial artery at forearm level, unspecified arm, initial encounter",
      history: "Drywall & Acoustical (MOB)",
      categories: [
        {
          name: "Drama",
          keyname: "Horror|Thriller",
        },
        {
          name: "Drama",
          keyname: "Action|Adventure|Children",
        },
      ],
      autor: {
        name: "Tomi Naerup",
        username: "tnaerup1g",
      },
      aproved_at: "2023-06-07 03:24:29",
    },
    {
      id: 54,
      title: "Running Man, The",
      resumen:
        "Unspecified focal traumatic brain injury with loss of consciousness of any duration with death due to other cause prior to regaining consciousness",
      history: "Soft Flooring and Base",
      categories: [
        {
          name: "Comedy|Drama|Romance",
          keyname: "Drama",
        },
        {
          name: "Drama",
          keyname: "Action|Crime|Drama",
        },
        {
          name: "Comedy|Drama",
          keyname: "Action|Drama",
        },
        {
          name: "Crime|Drama|Film-Noir|Thriller",
          keyname: "Western",
        },
        {
          name: "Comedy",
          keyname: "Documentary",
        },
      ],
      autor: {
        name: "Carmine Orrom",
        username: "corrom1h",
      },
      aproved_at: "2023-03-13 01:49:14",
    },
    {
      id: 55,
      title: "D.C.H. (Dil Chahta Hai)",
      resumen: "Open bite of right lesser toe(s) with damage to nail",
      history: "HVAC",
      categories: [
        {
          name: "Action|Drama",
          keyname: "Action|Comedy|Sci-Fi",
        },
        {
          name: "Drama",
          keyname: "Comedy",
        },
        {
          name: "Horror",
          keyname: "Documentary|IMAX",
        },
      ],
      autor: {
        name: "Neddy Stut",
        username: "nstut1i",
      },
      aproved_at: "2023-09-06 04:22:22",
    },
    {
      id: 56,
      title: "Exiles (Exils)",
      resumen: "Contact with nonvenomous snakes",
      history: "Roofing (Asphalt)",
      categories: [
        {
          name: "Animation|Comedy|Fantasy|Sci-Fi",
          keyname: "Comedy|Fantasy",
        },
        {
          name: "Comedy",
          keyname: "Horror",
        },
        {
          name: "Action|Comedy|Horror|Thriller",
          keyname: "Crime|Drama|Romance",
        },
        {
          name: "Drama|War",
          keyname: "Comedy|Drama|Romance",
        },
        {
          name: "Comedy",
          keyname: "Action|Comedy|Romance|Western",
        },
      ],
      autor: {
        name: "Blakelee Olivetti",
        username: "bolivetti1j",
      },
      aproved_at: "2024-02-05 06:02:24",
    },
    {
      id: 57,
      title: "Ip Man 2",
      resumen:
        "Rheumatoid polyneuropathy with rheumatoid arthritis of left ankle and foot",
      history: "Framing (Wood)",
      categories: [
        {
          name: "Comedy|Drama",
          keyname: "War",
        },
        {
          name: "Action|Drama|Romance|War",
          keyname: "Action|Adventure|Sci-Fi|IMAX",
        },
        {
          name: "Drama",
          keyname: "Comedy",
        },
        {
          name: "Drama|Fantasy|Romance",
          keyname: "Comedy",
        },
        {
          name: "Drama",
          keyname: "Action|Crime|Drama|Mystery|Sci-Fi|Thriller",
        },
      ],
      autor: {
        name: "Marya Olphert",
        username: "molphert1k",
      },
      aproved_at: "2023-03-30 16:16:41",
    },
    {
      id: 58,
      title: "Statues Also Die (Statues meurent aussi, Les)",
      resumen:
        "Displaced comminuted fracture of shaft of left fibula, subsequent encounter for open fracture type IIIA, IIIB, or IIIC with routine healing",
      history: "Electrical",
      categories: [
        {
          name: "Comedy|Romance",
          keyname: "Drama",
        },
        {
          name: "Drama|Horror|Mystery|Romance|Thriller",
          keyname: "Crime|Drama|Thriller",
        },
        {
          name: "Action|Crime|Thriller",
          keyname: "Children|Drama",
        },
        {
          name: "Adventure",
          keyname: "Drama|Mystery|Thriller",
        },
      ],
      autor: {
        name: "Sara Veighey",
        username: "sveighey1l",
      },
      aproved_at: "2023-10-09 00:12:12",
    },
    {
      id: 59,
      title: "Hollow Man",
      resumen: "Fused fingers, right hand",
      history: "Framing (Wood)",
      categories: [],
      autor: {
        name: "Suzie Plevin",
        username: "splevin1m",
      },
      aproved_at: "2023-05-23 12:02:35",
    },
    {
      id: 60,
      title: "City of Hope",
      resumen: "Acute embolism and thrombosis of internal jugular vein",
      history: "Granite Surfaces",
      categories: [
        {
          name: "Drama",
          keyname: "Comedy|Drama",
        },
        {
          name: "Drama|War",
          keyname: "Comedy|Crime",
        },
        {
          name: "Comedy",
          keyname: "Comedy|Drama|Romance",
        },
        {
          name: "Romance",
          keyname: "Mystery|Sci-Fi",
        },
        {
          name: "Comedy",
          keyname: "Western",
        },
      ],
      autor: {
        name: "Olly Cattrall",
        username: "ocattrall1n",
      },
      aproved_at: "2023-04-29 14:18:37",
    },
    {
      id: 61,
      title: "Reef, The",
      resumen: "Poisoning by methylphenidate, assault, initial encounter",
      history: "Fire Protection",
      categories: [],
      autor: {
        name: "Cherrita Rylstone",
        username: "crylstone1o",
      },
      aproved_at: "2023-10-22 13:35:52",
    },
    {
      id: 62,
      title: "Bettie Page Reveals All",
      resumen:
        "Strain of flexor muscle, fascia and tendon of unspecified finger at wrist and hand level, subsequent encounter",
      history: "Marlite Panels (FED)",
      categories: [
        {
          name: "Drama|Mystery|Romance|Thriller",
          keyname: "Drama",
        },
        {
          name: "Crime|Thriller|War",
          keyname: "Drama|Fantasy|Horror|Sci-Fi|Thriller",
        },
        {
          name: "Action|Drama",
          keyname: "Crime|Drama|Thriller",
        },
        {
          name: "Western",
          keyname: "Documentary",
        },
        {
          name: "Action|Adventure|Thriller",
          keyname: "Action|Drama",
        },
      ],
      autor: {
        name: "Hilton Spaice",
        username: "hspaice1p",
      },
      aproved_at: "2023-07-24 08:50:02",
    },
    {
      id: 63,
      title: "Junior Bonner",
      resumen: "Measles keratitis and keratoconjunctivitis",
      history: "HVAC",
      categories: [
        {
          name: "Documentary",
          keyname: "Comedy|Drama",
        },
        {
          name: "Drama|Romance",
          keyname: "Musical",
        },
      ],
      autor: {
        name: "Shelden Gantzer",
        username: "sgantzer1q",
      },
      aproved_at: "2023-06-03 08:46:55",
    },
    {
      id: 64,
      title: "Class Action",
      resumen:
        "Burn of second degree of multiple sites of unspecified wrist and hand, subsequent encounter",
      history: "Doors, Frames & Hardware",
      categories: [
        {
          name: "Drama|Mystery|Thriller",
          keyname: "Horror",
        },
        {
          name: "Horror|Romance",
          keyname: "Comedy",
        },
        {
          name: "Comedy",
          keyname: "Western",
        },
      ],
      autor: {
        name: "Florina Hincks",
        username: "fhincks1r",
      },
      aproved_at: "2024-03-05 07:46:39",
    },
    {
      id: 65,
      title: "White Stripes Under Great White Northern Lights, The",
      resumen:
        "External constriction of left eyelid and periocular area, subsequent encounter",
      history: "Electrical",
      categories: [
        {
          name: "Drama",
          keyname: "Crime|Drama|Thriller",
        },
      ],
      autor: {
        name: "Foster Hartwright",
        username: "fhartwright1s",
      },
      aproved_at: "2023-12-03 11:30:05",
    },
    {
      id: 66,
      title: "Colorado Territory",
      resumen: "Malignant neoplasm of thyroid gland",
      history: "Construction Clean and Final Clean",
      categories: [
        {
          name: "Drama",
          keyname: "Musical|Romance",
        },
        {
          name: "Adventure|Children|Comedy|Drama",
          keyname: "Drama|Thriller",
        },
        {
          name: "Documentary|War",
          keyname: "Comedy",
        },
        {
          name: "Comedy",
          keyname: "Action|Crime|Thriller",
        },
        {
          name: "Action|Adventure|Comedy",
          keyname: "Documentary",
        },
      ],
      autor: {
        name: "Shaw Bunn",
        username: "sbunn1t",
      },
      aproved_at: "2023-11-06 11:18:07",
    },
    {
      id: 67,
      title: "Isi & Disi: Amor a lo bestia",
      resumen: "Other fracture of talus",
      history: "Doors, Frames & Hardware",
      categories: [
        {
          name: "Drama|Fantasy|Romance",
          keyname: "Documentary",
        },
      ],
      autor: {
        name: "Sonni Tremble",
        username: "stremble1u",
      },
      aproved_at: "2023-07-19 01:41:40",
    },
    {
      id: 68,
      title: "Yes, But... (Oui, mais...)",
      resumen: "Nondisplaced other fracture of tuberosity of left calcaneus",
      history: "Framing (Steel)",
      categories: [
        {
          name: "Drama",
          keyname: "Documentary",
        },
        {
          name: "Drama",
          keyname: "Horror|Sci-Fi|Thriller",
        },
      ],
      autor: {
        name: "Rockwell Crayden",
        username: "rcrayden1v",
      },
      aproved_at: "2023-04-08 08:00:57",
    },
    {
      id: 69,
      title: "Blood on the Sun",
      resumen:
        "Injury of median nerve at upper arm level, unspecified arm, subsequent encounter",
      history: "Hard Tile & Stone",
      categories: [
        {
          name: "Drama",
          keyname: "Comedy|Drama",
        },
        {
          name: "Comedy|Drama|Romance",
          keyname: "Drama|Thriller",
        },
      ],
      autor: {
        name: "Mark Vernau",
        username: "mvernau1w",
      },
      aproved_at: "2023-06-13 17:39:00",
    },
    {
      id: 70,
      title: "Sleuth",
      resumen:
        "Poisoning by calcium-channel blockers, accidental (unintentional), initial encounter",
      history: "HVAC",
      categories: [
        {
          name: "Drama",
          keyname: "Crime|Mystery|Thriller",
        },
      ],
      autor: {
        name: "Teddy Bridell",
        username: "tbridell1x",
      },
      aproved_at: "2023-05-19 19:07:36",
    },
    {
      id: 71,
      title: "At Middleton",
      resumen:
        "Toxic effect of unspecified inorganic substance, accidental (unintentional), initial encounter",
      history: "Waterproofing & Caulking",
      categories: [
        {
          name: "Drama",
          keyname: "Comedy",
        },
        {
          name: "Children|Comedy|Musical",
          keyname: "Documentary",
        },
        {
          name: "Action|Drama",
          keyname: "Comedy",
        },
        {
          name: "Horror",
          keyname: "Comedy|Horror",
        },
        {
          name: "Drama",
          keyname: "Romance",
        },
      ],
      autor: {
        name: "Netti Bansal",
        username: "nbansal1y",
      },
      aproved_at: "2023-10-29 04:15:07",
    },
    {
      id: 72,
      title: "Signs",
      resumen: "Varicella [chickenpox]",
      history: "Granite Surfaces",
      categories: [
        {
          name: "Action|Comedy",
          keyname: "Comedy",
        },
        {
          name: "Crime|Thriller",
          keyname: "Action",
        },
        {
          name: "Documentary",
          keyname: "(no genres listed)",
        },
        {
          name: "Action|Comedy",
          keyname: "Drama",
        },
      ],
      autor: {
        name: "Reube Doornbos",
        username: "rdoornbos1z",
      },
      aproved_at: "2023-08-12 03:41:00",
    },
    {
      id: 73,
      title: "I Smile Back",
      resumen: "Puncture wound with foreign body of nose, sequela",
      history: "Drilled Shafts",
      categories: [
        {
          name: "Drama|Musical",
          keyname: "Drama",
        },
        {
          name: "Horror",
          keyname: "Documentary|War",
        },
        {
          name: "Comedy",
          keyname: "Horror|Mystery|Thriller",
        },
      ],
      autor: {
        name: "Federico Hazelgrove",
        username: "fhazelgrove20",
      },
      aproved_at: "2024-02-05 12:36:12",
    },
    {
      id: 74,
      title: "Gang Related",
      resumen:
        "Burn of third degree of shoulder and upper limb, except wrist and hand, unspecified site",
      history: "Drywall & Acoustical (MOB)",
      categories: [
        {
          name: "Comedy",
          keyname: "Adventure|Children|Comedy",
        },
        {
          name: "Horror|Thriller",
          keyname: "Drama|Fantasy|Horror|Mystery|Thriller",
        },
        {
          name: "Comedy|Drama",
          keyname: "Drama",
        },
      ],
      autor: {
        name: "Borden Cristol",
        username: "bcristol21",
      },
      aproved_at: "2023-12-26 18:37:21",
    },
    {
      id: 75,
      title: "Two Much",
      resumen:
        "Laceration with foreign body of right little finger with damage to nail, subsequent encounter",
      history: "Fire Protection",
      categories: [],
      autor: {
        name: "Karalee Regenhardt",
        username: "kregenhardt22",
      },
      aproved_at: "2023-12-23 16:33:32",
    },
    {
      id: 76,
      title: "Crave",
      resumen:
        "Poisoning by other nonsteroidal anti-inflammatory drugs [NSAID], undetermined, sequela",
      history: "Painting & Vinyl Wall Covering",
      categories: [
        {
          name: "Comedy",
          keyname: "Comedy|Musical|Romance",
        },
        {
          name: "Comedy|Sci-Fi",
          keyname: "Comedy|Drama|Romance",
        },
        {
          name: "Action|Comedy",
          keyname: "Drama",
        },
        {
          name: "Horror|Thriller",
          keyname: "Action|Comedy|Romance",
        },
      ],
      autor: {
        name: "Morly Facher",
        username: "mfacher23",
      },
      aproved_at: "2023-12-31 12:40:21",
    },
    {
      id: 77,
      title: "Jimmy's Hall",
      resumen:
        "Displaced trimalleolar fracture of right lower leg, subsequent encounter for open fracture type I or II with nonunion",
      history: "Roofing (Asphalt)",
      categories: [],
      autor: {
        name: "Sibilla Bulward",
        username: "sbulward24",
      },
      aproved_at: "2023-04-12 04:28:10",
    },
    {
      id: 78,
      title: "Man Who Couldn't Say No, The (Mies joka ei osannut sanoa EI)",
      resumen:
        "Traumatic rupture of unspecified ligament of right little finger at metacarpophalangeal and interphalangeal joint",
      history: "Structural and Misc Steel (Fabrication)",
      categories: [
        {
          name: "Action|Adventure|Romance|War",
          keyname: "Action|Thriller",
        },
      ],
      autor: {
        name: "Brewer Beste",
        username: "bbeste25",
      },
      aproved_at: "2023-12-22 18:12:03",
    },
    {
      id: 79,
      title: "Last Winter, The",
      resumen:
        "Labor and delivery complicated by other cord entanglement, without compression, not applicable or unspecified",
      history: "Drywall & Acoustical (MOB)",
      categories: [
        {
          name: "Horror|Mystery|Thriller",
          keyname: "Drama",
        },
      ],
      autor: {
        name: "Joanie O'Lennane",
        username: "jolennane26",
      },
      aproved_at: "2023-10-10 09:35:25",
    },
    {
      id: 80,
      title: "Revenge for Jolly!",
      resumen:
        "Unspecified fracture of shaft of left ulna, subsequent encounter for open fracture type IIIA, IIIB, or IIIC with malunion",
      history: "Epoxy Flooring",
      categories: [
        {
          name: "Comedy",
          keyname: "Comedy|Romance",
        },
        {
          name: "Adventure|Crime|Drama",
          keyname: "Documentary",
        },
        {
          name: "Drama",
          keyname: "Comedy",
        },
      ],
      autor: {
        name: "Christyna Kynsey",
        username: "ckynsey27",
      },
      aproved_at: "2023-05-25 17:56:31",
    },
    {
      id: 81,
      title: "Being Elmo: A Puppeteer's Journey",
      resumen: "Thiamine deficiency, unspecified",
      history: "Elevator",
      categories: [],
      autor: {
        name: "Cyrillus Haldane",
        username: "chaldane28",
      },
      aproved_at: "2023-10-21 14:00:14",
    },
    {
      id: 82,
      title: "Level Five",
      resumen: "Deformity of unspecified orbit due to trauma or surgery",
      history: "Ornamental Railings",
      categories: [
        {
          name: "Drama",
          keyname: "Drama|Romance|Thriller",
        },
      ],
      autor: {
        name: "Garwood McLaughlin",
        username: "gmclaughlin29",
      },
      aproved_at: "2023-12-01 16:40:25",
    },
    {
      id: 83,
      title: "Sea Wolf, The",
      resumen:
        "Displaced fracture of distal phalanx of left thumb, subsequent encounter for fracture with delayed healing",
      history: "Drywall & Acoustical (MOB)",
      categories: [
        {
          name: "Comedy|Romance",
          keyname: "Comedy|Drama|Fantasy",
        },
        {
          name: "Comedy|Romance",
          keyname: "Drama",
        },
      ],
      autor: {
        name: "Urbain L'Homme",
        username: "ulhomme2a",
      },
      aproved_at: "2024-01-29 17:48:31",
    },
    {
      id: 84,
      title: "The Lone Ranger",
      resumen:
        "Burn of third degree of left ear [any part, except ear drum], sequela",
      history: "Roofing (Asphalt)",
      categories: [],
      autor: {
        name: "Steward Leaves",
        username: "sleaves2b",
      },
      aproved_at: "2023-08-07 09:52:52",
    },
    {
      id: 85,
      title: "Not Quite Hollywood: The Wild, Untold Story of Ozploitation!",
      resumen: "Unspecified injury of urethra, subsequent encounter",
      history: "Framing (Steel)",
      categories: [
        {
          name: "Action|Drama|Romance",
          keyname: "Documentary",
        },
      ],
      autor: {
        name: "Verge Soff",
        username: "vsoff2c",
      },
      aproved_at: "2023-06-18 06:15:21",
    },
    {
      id: 86,
      title: "Loaded Weapon 1 (National Lampoon's Loaded Weapon 1)",
      resumen:
        "Car passenger injured in collision with other type car in traffic accident",
      history: "Sitework & Site Utilities",
      categories: [],
      autor: {
        name: "Glenna Repp",
        username: "grepp2d",
      },
      aproved_at: "2023-07-30 17:34:14",
    },
    {
      id: 87,
      title: "European Vacation (aka National Lampoon's European Vacation)",
      resumen: "Karyotype 47, XYY",
      history: "Roofing (Asphalt)",
      categories: [
        {
          name: "Drama",
          keyname: "Documentary",
        },
        {
          name: "Drama",
          keyname: "Horror|Thriller",
        },
        {
          name: "Documentary",
          keyname: "Comedy",
        },
        {
          name: "Drama",
          keyname: "Comedy|Musical",
        },
        {
          name: "Drama|Musical",
          keyname: "Action",
        },
      ],
      autor: {
        name: "Johann Pautard",
        username: "jpautard2e",
      },
      aproved_at: "2023-07-10 13:28:52",
    },
    {
      id: 88,
      title: "Beyond the Time Barrier",
      resumen:
        "Unspecified injury of superficial vein at shoulder and upper arm level, unspecified arm",
      history: "Wall Protection",
      categories: [
        {
          name: "Drama|War",
          keyname: "Drama",
        },
        {
          name: "Drama|Thriller",
          keyname: "Documentary",
        },
      ],
      autor: {
        name: "Bernelle Dalgarnocht",
        username: "bdalgarnocht2f",
      },
      aproved_at: "2023-08-09 03:42:41",
    },
    {
      id: 89,
      title: "Snow and Ashes",
      resumen: "Flail chest, sequela",
      history: "Exterior Signage",
      categories: [],
      autor: {
        name: "Zorana Jirik",
        username: "zjirik2g",
      },
      aproved_at: "2023-03-18 03:12:12",
    },
    {
      id: 90,
      title: "Secret Glory, The",
      resumen: "Twin pregnancy, dichorionic/diamniotic, first trimester",
      history: "Epoxy Flooring",
      categories: [
        {
          name: "Documentary",
          keyname: "Comedy|Crime",
        },
      ],
      autor: {
        name: "Raimund Strute",
        username: "rstrute2h",
      },
      aproved_at: "2023-06-28 04:33:40",
    },
    {
      id: 91,
      title: "Wilderness",
      resumen: "Folate deficiency anemia",
      history: "Ornamental Railings",
      categories: [
        {
          name: "Crime|Drama|Thriller",
          keyname: "Action|Adventure|Sci-Fi",
        },
        {
          name: "Drama|Romance",
          keyname: "Comedy|Fantasy",
        },
        {
          name: "Comedy|Romance",
          keyname: "Documentary",
        },
        {
          name: "Animation|Comedy|Fantasy",
          keyname: "Comedy",
        },
        {
          name: "Drama|Thriller|War",
          keyname: "Drama",
        },
      ],
      autor: {
        name: "Jordanna Braunroth",
        username: "jbraunroth2i",
      },
      aproved_at: "2023-09-21 10:01:29",
    },
    {
      id: 92,
      title: "From Beijing with Love",
      resumen: "Glasgow coma scale score 13-15",
      history: "Landscaping & Irrigation",
      categories: [
        {
          name: "Action",
          keyname: "Drama",
        },
        {
          name: "Comedy|Sci-Fi",
          keyname: "Children|Drama|Fantasy",
        },
        {
          name: "Drama|Romance",
          keyname: "Comedy|Drama|Romance",
        },
        {
          name: "Drama",
          keyname: "Comedy|Musical",
        },
        {
          name: "Drama|Romance",
          keyname: "Comedy|Romance",
        },
      ],
      autor: {
        name: "Ellerey M'Quhan",
        username: "emquhan2j",
      },
      aproved_at: "2023-09-02 06:51:38",
    },
    {
      id: 93,
      title: "Captain Ron",
      resumen:
        "Poisoning by intravenous anesthetics, undetermined, initial encounter",
      history: "Wall Protection",
      categories: [
        {
          name: "Comedy|Romance",
          keyname: "Horror",
        },
        {
          name: "Mystery|Thriller",
          keyname: "Comedy|Crime|Mystery",
        },
      ],
      autor: {
        name: "Lynnette Astupenas",
        username: "lastupenas2k",
      },
      aproved_at: "2023-09-11 20:35:10",
    },
    {
      id: 94,
      title: "Harper",
      resumen:
        "Torus fracture of lower end of right radius, subsequent encounter for fracture with routine healing",
      history: "Granite Surfaces",
      categories: [],
      autor: {
        name: "Wallis Hadingham",
        username: "whadingham2l",
      },
      aproved_at: "2023-12-19 19:43:38",
    },
    {
      id: 95,
      title: "Jar City (Mýrin)",
      resumen:
        "Displaced avulsion fracture of tuberosity of unspecified calcaneus",
      history: "Roofing (Metal)",
      categories: [
        {
          name: "Documentary",
          keyname: "Animation|Comedy",
        },
        {
          name: "Crime|Drama|Thriller",
          keyname: "Drama",
        },
        {
          name: "Drama|Sci-Fi",
          keyname: "Action|Adventure|Animation|Children|Comedy",
        },
        {
          name: "Action|War",
          keyname: "Drama|War",
        },
        {
          name: "Action|Crime|Thriller",
          keyname: "Documentary",
        },
      ],
      autor: {
        name: "Miguela Gregoli",
        username: "mgregoli2m",
      },
      aproved_at: "2023-11-15 07:37:04",
    },
    {
      id: 96,
      title: "Carol for Another Christmas",
      resumen: "Short Achilles tendon (acquired), right ankle",
      history: "Glass & Glazing",
      categories: [],
      autor: {
        name: "Sharai Holbury",
        username: "sholbury2n",
      },
      aproved_at: "2023-11-26 07:28:15",
    },
    {
      id: 97,
      title: "American in Paris, An",
      resumen: "Burn of third degree of right thigh, sequela",
      history: "Structural & Misc Steel Erection",
      categories: [
        {
          name: "Adventure|Drama",
          keyname: "Adventure|Animation|Children",
        },
        {
          name: "Action|Crime|Drama|Sci-Fi|Thriller",
          keyname: "Comedy",
        },
      ],
      autor: {
        name: "Donovan Shields",
        username: "dshields2o",
      },
      aproved_at: "2023-07-15 22:03:20",
    },
    {
      id: 98,
      title: "American Vagabond",
      resumen: "Other apnea of newborn",
      history: "Waterproofing & Caulking",
      categories: [
        {
          name: "Crime|Drama|Mystery",
          keyname: "Sci-Fi",
        },
        {
          name: "Comedy|Drama",
          keyname: "Comedy",
        },
        {
          name: "Drama|Romance",
          keyname: "Drama",
        },
        {
          name: "Romance|Western",
          keyname: "Drama|Romance",
        },
      ],
      autor: {
        name: "Jorey Wrankling",
        username: "jwrankling2p",
      },
      aproved_at: "2024-01-01 01:25:14",
    },
    {
      id: 99,
      title: "Advance to the Rear",
      resumen: "Contusion of left index finger with damage to nail",
      history: "EIFS",
      categories: [
        {
          name: "Drama|Romance|Western",
          keyname: "Documentary",
        },
        {
          name: "(no genres listed)",
          keyname: "Drama",
        },
        {
          name: "(no genres listed)",
          keyname: "Comedy",
        },
        {
          name: "Action|Adventure|Romance",
          keyname: "Drama",
        },
        {
          name: "Comedy",
          keyname: "Drama|Horror|Mystery",
        },
      ],
      autor: {
        name: "Koral Dunlop",
        username: "kdunlop2q",
      },
      aproved_at: "2024-01-18 07:44:27",
    },
    {
      id: 100,
      title: "Adore",
      resumen: "Mild to moderate pre-eclampsia, complicating the puerperium",
      history: "Marlite Panels (FED)",
      categories: [
        {
          name: "Horror",
          keyname: "Comedy|Romance",
        },
      ],
      autor: {
        name: "Pamelina Margerrison",
        username: "pmargerrison2r",
      },
      aproved_at: "2023-10-19 20:19:49",
    },
  ];

  const newData = data.map((item) => {
    const categoriasAleatorias = obtenerCategoriasAleatorias();
    return {
      ...item,
      history:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus odit laboriosam expedita, consectetur quod praesentium quo cum quidem possimus optio error vitae, doloremque nobis labore qui. Dolores earum cumque eos. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat consequuntur in sit expedita minima blanditiis aliquid, aliquam natus laborum distinctio nihil sint ducimus placeat dolorum non? Itaque maiores saepe alias!",
      categories: categoriasAleatorias,
      // categories: categoriasAleatorias.map((cat) => {
      //     return {
      //         name: cat,
      //         keyname: cat,
      //     }
      // })
    };
  });

  return newData;
};

const getHistoriesbyCategory = (categoryKeyname: string) => {
  const newbyCategory = historiesMocks.data.filter((item) =>
    item.categories.find((i) => i.keyname == categoryKeyname)
  );

  return newbyCategory;
};

const historiesMocks = {
  history,
  //data: [history, history2, history3],
  data: [history, history2, history3, ...renderdata()] as Array<IHistory>,
  histories: [
    history,
    history2,
  ],
  historiesToDay:{
    count: 10,
    data: [
      history,
      history2,
    ]
  },
  historyTop: [history3, history2, history, history2, history2],
  getHistoriesbyCategory
};

export default historiesMocks;
