//my achievements throughout my journey, starting from roughly late highschool years
const achievements = [
  {
    id: 0,
    title: "Started Going to the Gym",
    date: "2023-01-15",
    category: "fitness",
    difficulty: 5,
    description: "Committed to consistent gym training for the first time, dude PPLA. (Push, pull, legs, arms)",
    result: "Built a lasting training habit within the first month.",
    image: null
  },
  {
    id: 1,
    title: "Benched 135 lbs",
    date: "2023-04-10",
    category: "fitness",
    difficulty: 6,
    description: "Officially hit one plate!.",
    result: "Consistency gives the best results",
    image: null
  },
  {
    id: 2,
    title: "Accepted into PALS leadership program",
    date: "2022-05-15",
    category: "academic",
    difficulty: 8,
    description: "Accepted into my school's PALS program to aid kids that are struggling with coursework and life.",
    result: "Become someone that can be looked up to, like a role model.",
    image: null
  },
  {
    id: 3,
    title: "Built First Website",
    date: "2024-11-20",
    category: "career",
    difficulty: 5,
    description: "Self-taught HTML, CSS, and JavaScript to build a personal portfolio site.",
    result: "First proof I could ship something real.",
    image: null
  },
  {
    id: 4,
    title: "Ameriplex Software Engineer Intern",
    date: "2024-08-01",
    category: "career",
    difficulty: 7,
    description: "Engineered an Azure pipeline to automate MLS data processing and built an appointment scheduling system.",
    result: "Enabled faster release of 5000+ property listings and increased client conversion rate by 8%.",
    image: null
  },
  {
    id: 5,
    title: "MobiSec VR Research Assistant",
    date: "2025-05-01",
    category: "career",
    difficulty: 8,
    description: "Developed a C#/.NET desktop app streaming VR content across multiple headsets and designed 360° adaptive bitrate streaming on Meta Quest.",
    result: "Reduced monthly cloud cost overages by 30%.",
    image: null
  },
  {
    id: 6,
    title: "Gained 20 lbs of Muscle",
    date: "2024-06-01",
    category: "fitness",
    difficulty: 8,
    description: "Focused on a structured progressive overload program with disciplined nutrition to build mass.",
    result: "Gained 20 lbs of lean muscle. Biggest physical transformation to date.",
    image: null
  },
  {
    id: 7,
    title: "Won JP Morgan Data for Good",
    date: "2025-10-18",
    category: "career",
    difficulty: 9,
    description: "Built a data-driven solution for a social impact problem at JP Morgan's challenge.",
    result: "Won first place.",
    image: null
  },
  {
    id: 8,
    title: "Learned iOS Development",
    date: "2026-01-10",
    category: "career",
    difficulty: 7,
    description: "Self-taught Swift and iOS development to build and ship native mobile applications.",
    result: "Expanded skillset into mobile, opened a new lane for projects.",
    image: null
  },
  {
    id: 9,
    title: "Benched 225 lbs",
    date: "2026-03-20",
    category: "fitness",
    difficulty: 9,
    description: "Two-plate bench press, years in the making.",
    result: "Hit 225 lbs for a clean rep. Biggest strength milestone yet.",
    image: null
  },
  {
    id: 10,
    title: "NASA L'space Program (NPWEE)",
    date: "2026-02-01",
    category: "career",
    difficulty: 9,
    description: "Authored a Physics-Informed Neural Network proposal for NASA's Lunar Gateway and designed a transfer learning pipeline for ISS Li-ion battery telemetry.",
    result: "Delivered technical scope to NASA reviewers across a 12-member interdisciplinary team.",
    image: null
  },
  {
    id: 11,
    title: "Built Portfolio & Learned Vercel Hosting",
    date: "2025-03-01",
    category: "career",
    difficulty: 4,
    description: "Designed and deployed a personal portfolio site, learning how to host and manage deployments with Vercel.",
    result: "Live portfolio accessible anywhere, a home for all my projects.",
    image: null
  },
  {
    id: 12,
    title: "HackRice, First Hackathon!",
    date: "2025-09-01",
    category: "career",
    difficulty: 7,
    description: "Competed at HackRice, building an AI-powered finance application under hackathon time pressure.",
    result: "Gained hands-on experience shipping a real AI finance app in a competitive environment.",
    image: null
  },
  {
    id: 13,
    title: "Built MavMarket",
    date: "2026-04-01",
    category: "career",
    difficulty: 8,
    description: "Created MavMarket, a marketplace for University of Texas at Arlington students to buy and sell coursework materials and items.",
    result: "Built a real product solving a real need for my university community.",
    image: null
  },
  {
    id: 14,
    title: "AWS Student Club Technical Lead",
    date: "2026-02-01",
    category: "career",
    difficulty: 7,
    description: "Led technical demos using EC2, S3, Lambda, and RDS to teach 50+ members cloud computing concepts and organized AWS certification study sessions.",
    result: "Grew the club's technical depth and helped members work toward AWS certifications.",
    image: null
  }
];

//colors for each node depending on type
const colors = {
  fitness: '#111111',
  academic: '#444444',
  entertainment: '#777777',
  career: '#AAAAAA'
};

//hardcoded positions for nodes
const positions = [
  {x: 500, y: 590},
  {x: 238, y: 460},
  {x: 768, y: 442},
  {x: 108, y: 322},
  {x: 362, y: 298},
  {x: 645, y: 318},
  {x: 888, y: 302},
  {x: 48,  y: 182},
  {x: 175, y: 158},
  {x: 295, y: 178},
  {x: 452, y: 155},
  {x: 548, y: 183},
  {x: 675, y: 160},
  {x: 825, y: 175},
  {x: 955, y: 158},
  {x: 22,  y: 38},
  {x: 90,  y: 25},
  {x: 148, y: 42},
  {x: 222, y: 30},
  {x: 272, y: 45},
  {x: 338, y: 28}

];

//connections for eah node
const connections = [
    [0,1],  [0,2],
    [1,3],  [1,4],
    [2,5],  [2,6],
    [3,7],  [3,8],
    [4,9],  [4,10],
    [5,11], [5,12],
    [6,13], [6,14],
    [7,15], [7,16],
    [8,17], [8,18],
    [9,19], [9,20]
  ];

  function drawLines() 
  {
    let html = '';
    for(let i = 0; i < connections.length; i++)
    {
      const fromPoint = connections[i][0];
      const toPoint = connections[i][1];
      if (fromPoint < achievements.length && toPoint < achievements) 
      {
        //x & y positions for both connecting nodes
        const pointX1 = positions[fromPoint].x;
        const pointY1 = positions[fromPoint].y;

        const pointX2 = positions[toPoint].x;
        const pointY2 = positions[toPoint].y;

        html += `<line pointX1="${pointX1}" pointY1"="${pointY1}" pointX2="${pointX2}" pointY2="${pointY2}"
        stroke = "#DADADA"
        stroke-width = "1.5/>`;


        
      }
    }
    return html;
  }

  

