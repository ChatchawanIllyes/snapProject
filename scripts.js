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
    image: "images/snapGym.webp"
  },
  {
    id: 1,
    title: "Benched 135 lbs",
    date: "2023-04-10",
    category: "fitness",
    difficulty: 6,
    description: "Officially hit one plate!",
    result: "Consistency gives the best results",
    image: "images/snap135.webp"
  },
  {
    id: 2,
    title: "Accepted into PALS leadership program",
    date: "2022-05-15",
    category: "academic",
    difficulty: 8,
    description: "Accepted into my school's PALS program to aid kids that are struggling with coursework and life.",
    result: "Become someone that can be looked up to, like a role model.",
    image: "images/snapPals.png"
  },
  {
    id: 3,
    title: "Built First Website",
    date: "2024-11-20",
    category: "career",
    difficulty: 5,
    description: "Self-taught HTML, CSS, and JavaScript to build a personal portfolio site.",
    result: "First proof I could ship something real.",
    image: "images/snapFirstSite.png"
  },
  {
    id: 4,
    title: "Ameriplex Software Engineer Intern",
    date: "2024-08-01",
    category: "career",
    difficulty: 7,
    description: "Engineered an Azure pipeline to automate MLS data processing and built an appointment scheduling system.",
    result: "Enabled faster release of 5000+ property listings and increased client conversion rate by 8%.",
    image: "images/snapAmeriplex.png"
  },
  {
    id: 5,
    title: "MobiSec VR Research Assistant",
    date: "2025-05-01",
    category: "career",
    difficulty: 8,
    description: "Developed a C#/.NET desktop app streaming VR content across multiple headsets and designed 360° adaptive bitrate streaming on Meta Quest.",
    result: "Reduced monthly cloud cost overages by 30%.",
    image: "images/snapMeta.webp"
  },
  {
    id: 6,
    title: "Gained 20 lbs of Muscle",
    date: "2024-06-01",
    category: "fitness",
    difficulty: 8,
    description: "Focused on a structured progressive overload program with disciplined nutrition to build mass.",
    result: "Gained 20 lbs of lean muscle. Biggest physical transformation to date.",
    image: "images/snapGain.png"
  },
  {
    id: 7,
    title: "Won JP Morgan Data for Good",
    date: "2025-10-18",
    category: "career",
    difficulty: 9,
    description: "Built a data-driven solution for a social impact problem at JP Morgan's challenge.",
    result: "Won first place.",
    image: "images/snapJPMorgan.png"
  },
  {
    id: 8,
    title: "Learned iOS Development",
    date: "2026-01-10",
    category: "career",
    difficulty: 7,
    description: "Self-taught Swift and iOS development to build and ship native mobile applications.",
    result: "Expanded skillset into mobile, opened a new lane for projects.",
    image: "images/snapFirstIOS.png"
  },
  {
    id: 9,
    title: "Benched 225 lbs",
    date: "2026-03-20",
    category: "fitness",
    difficulty: 9,
    description: "Two-plate bench press, years in the making.",
    result: "Hit 225 lbs for a clean rep. Biggest strength milestone yet.",
    image: "images/snap225.jpg"
  },
  {
    id: 10,
    title: "NASA L'space Program (NPWEE)",
    date: "2026-02-01",
    category: "career",
    difficulty: 9,
    description: "Authored a Physics-Informed Neural Network proposal for NASA's Lunar Gateway and designed a transfer learning pipeline for ISS Li-ion battery telemetry.",
    result: "Delivered technical scope to NASA reviewers across a 12-member interdisciplinary team.",
    image: "images/snapNasa.png"
  },
  {
    id: 11,
    title: "Built Portfolio & Learned Vercel Hosting",
    date: "2025-03-01",
    category: "career",
    difficulty: 4,
    description: "Designed and deployed a personal portfolio site, learning how to host and manage deployments with Vercel.",
    result: "Live portfolio accessible anywhere, a home for all my projects.",
    image: "images/snapPortfolio.png"
  },
  {
    id: 12,
    title: "HackRice, First Hackathon!",
    date: "2025-09-01",
    category: "career",
    difficulty: 7,
    description: "Competed at HackRice, building an AI-powered finance application under hackathon time pressure.",
    result: "Gained hands-on experience shipping a real AI finance app in a competitive environment.",
    image: "images/snapHackRice.png"
  },
  {
    id: 13,
    title: "Built MavMarket",
    date: "2026-04-01",
    category: "career",
    difficulty: 8,
    description: "Created MavMarket, a marketplace for University of Texas at Arlington students to buy and sell coursework materials and items.",
    result: "Built a real product solving a real need for my university community.",
    image: "images/snapMavMarket.png"
  },
  {
    id: 14,
    title: "AWS Student Club Technical Lead",
    date: "2026-02-01",
    category: "career",
    difficulty: 7,
    description: "Led technical demos using EC2, S3, Lambda, and RDS to teach 50+ members cloud computing concepts and organized AWS certification study sessions.",
    result: "Grew the club's technical depth and helped members work toward AWS certifications.",
    image: "images/snapAWS.webp"
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

//connections for each node
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
      if (fromPoint < achievements.length && toPoint < achievements.length) 
      {
        //x & y positions for both connecting nodes
        const pointX1 = positions[fromPoint].x;
        const pointY1 = positions[fromPoint].y;

        const pointX2 = positions[toPoint].x;
        const pointY2 = positions[toPoint].y;

        html += `<line x1="${pointX1}" y1="${pointY1}" x2="${pointX2}" y2="${pointY2}" stroke="#DADADA" stroke-width="1.5"/>`;


        
      }
    }
    return html;
  }

  //function to create the nodes by taking x and y position and then finding the color depending on type of achievement
  function drawNodes() 
  {
    let html = '';
    for(let i = 0; i < achievements.length; i++)
    {
      const centerX = positions[i].x;
      const centerY = positions[i].y;
      const color = colors[achievements[i].category];
      html += `<circle cx="${centerX}" cy="${centerY}" r="7" fill="${color}" class="tree-node" data-id="${i}" onclick="openCard(${i})"/>`;
    }
    return html;
  }

  function render() {
    const svg = document.getElementById('tree-svg');
    //tells the svg that its space goes from 0 to 1000 wide and 0 to 630 height
    svg.setAttribute('viewBox', '0 0 1000 630');
    svg.innerHTML = drawLines() + drawNodes();
    renderCatalog();
    const emptyMsg = document.querySelector('.tree-empty-msg');
    emptyMsg.style.display = achievements.length === 0 ? 'block' : 'none';
  }

  render();
  let selectId = null;

  function openCard(index)
  {
    //looks up achievement based on position in the array
    const achievement = achievements[index];

    //stores which node is open, so then removeSelect() knows which node to delete
    selectId = index;

    const categoryColor = colors[achievement.category];
    document.getElementById('side-panel').style.borderLeftColor = categoryColor;
    document.getElementById('side-panel').style.borderLeftWidth = '3px';

    document.getElementById('panel-title').textContent = achievement.title;
    document.getElementById('panel-category').textContent = achievement.category;
    document.getElementById('panel-date').textContent = achievement.date;
    document.getElementById('panel-difficulty').textContent = 'Difficulty: ' + achievement.difficulty + ' / 10';
    document.getElementById('panel-difficulty-bar').style.width = (achievement.difficulty / 10 * 100) + '%';
    document.getElementById('panel-description').value = achievement.description;
    document.getElementById('panel-result').value = achievement.result;
    const imageBox = document.getElementById('panel-image');
    const imgTag   = document.getElementById('panel-img-tag');
    if (achievement.image) {
      imgTag.src             = achievement.image;
      imageBox.style.display = 'block';
    } else {
      imageBox.style.display = 'none';
    }

    document.getElementById('side-panel').classList.remove('hidden');
    document.getElementById('tree-main').classList.add('panel-open');


  }

  function closePanel() 
  {
    document.getElementById('side-panel').classList.add('hidden');
    document.getElementById('tree-main').classList.remove('panel-open');
    selectId = null;
  }

  //saves description or result back to the achievements array as user types
  function saveField(field, value)
  {
    if (selectId === null) return;
    achievements[selectId][field] = value;
    renderCatalog();
  }

  //displays all the info for the catalog below the tree, grouped by category
  function renderCatalog()
  {
    const body = document.getElementById('catalog-body');
    const categories = ['fitness', 'academic', 'entertainment', 'career'];

    if (achievements.length === 0)
    {
      body.innerHTML = '<p class="catalog-empty">No achievements yet.</p>';
      return;
    }

    let html = '';
    for (let c = 0; c < categories.length; c++)
    {
      const cat = categories[c];
      const catColor = colors[cat];
      const filtered = [];

      for (let i = 0; i < achievements.length; i++)
      {
        if (achievements[i].category === cat) filtered.push(achievements[i]);
      }

      if (filtered.length === 0) continue;

      html += `<div class="catalog-group">`;
      html += `<div class="catalog-group-label" style="color: ${catColor}">${cat}</div>`;
      html += `<div class="catalog-track">`;

      for (let i = 0; i < filtered.length; i++)
      {
        const achievement = filtered[i];
        html += `
          <div class="catalog-card" style="--card-accent: ${catColor}">
            <div class="card-title">${achievement.title}</div>
            <div class="card-image-placeholder">
              ${achievement.image ? `<img src="${achievement.image}" />` : ''}
            </div>
            <div class="card-meta">${achievement.date} · Difficulty ${achievement.difficulty}/10</div>
            <div class="card-body">${achievement.description}</div>
            <div class="card-result">
              <span class="card-result-label">RESULT</span>
              <p>${achievement.result}</p>
            </div>
          </div>
        `;
      }

      html += `</div></div>`;
    }

    body.innerHTML = html;
  }

  function addAchievement() 
  {
    const title = document.getElementById('add-title').value.trim();
    const category = document.getElementById('add-category').value;
    const difficulty = parseInt(document.getElementById('add-difficulty').value)

    if (title === '')
    {
      return;
    }

    if (difficulty < 1 || difficulty > 10)
    {
      return;
    }

    const newAchievement = {
      id: achievements.length,
      title: title,
      category: category,
      difficulty: difficulty,
      date: new Date().toISOString().slice(0, 10),
      description: '',
      result: '',
      image: null
    };

    achievements.push(newAchievement);

    document.getElementById('add-title').value = '';
    document.getElementById('add-difficulty').value = '';
    render();

  }

  //remove node function
  function removeSelected() 
  {
    if (selectId === null)
    {
      return;
    }

    achievements.splice(selectId, 1);

    closePanel();
    render();
  }
  
  //function to search for achievement
  function searchAchievements(query)
  {
    const nodes = document.querySelectorAll('.tree-node');

    for (let i = 0; i < nodes.length; i++)
    {
      const title = achievements[i].title.toLocaleLowerCase();
      const search = query.toLocaleLowerCase();
    

    if (query === '')
    {
      nodes[i].setAttribute('opacity', '1');

    } else if (title.includes(search))
    {
      nodes[i].setAttribute('opacity', '1');

    } else
    {
      nodes[i].setAttribute('opacity', '0.15');
    }
  }
}

  