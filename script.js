const donnees = {
  nom: "Le Duff Ethan",
  initiales: "EL",                        
  photo: "Photo.jpg",
  titre: "Terminale Bac Pro CIEL : réseaux, systèmes et maintenance informatique",
  accroche: "Je m'appelle Ethan Le Duff et je suis en classe de Terminale Bac Pro CIEL au lycée Jean Moulin à Thouars. Je souhaite m'orienter vers la maintenance informatique, notamment celle des appareils multimédias comme les PC, les consoles de jeux et les téléphones portables.",

  competences: [
    {
      categorie: "Réseaux",
      items: ["Câblage VDI (RJ45, fibre optique)",
              "Adressage IPv4, DHCP, DNS, VLAN",
              "Configuration de routeurs, switchs et réseau Wi-Fi",
              "Simulation (Packet Tracer) et diagnostic réseau (ping, tracert, ipconfig)"]
    },
    {
      categorie: "Systèmes et serveurs",
      items: ["Installation de Windows et Linux, virtualisation (Hyper-V), Docker",
              "Installation et configuration de Windows Server et de NAS (web, partage de fichiers, annuaire)",
              "Ligne de commande Windows et Linux",
              "Gestion des utilisateurs et des droits"]
    },
    {
      categorie: "Électronique",
      items: ["Mesures électriques (tension, courant, résistance), oscilloscope",
              "Lecture de schémas, câblage et test de circuits logiques",
              "Soudure de composants électroniques"]
    },
    {
      categorie: "Maintenance matériel",
      items: ["Montage d'unité centrale, remplacement de composants",
              "Réparation de matériel (PC, consoles de jeux), installation de périphériques (imprimante)",
              "Diagnostic, benchmark matériel et dépannage de postes"]
    },
    {
      categorie: "Cybersécurité",
      items: ["Sécurisation des postes (mots de passe, mises à jour, antivirus)",
              "Sauvegarde et effacement sécurisé des données"]
    }
  ],

  experiences: [
    {
      lieu: "Repair Itech", niveau: "Stage de 1ère", date: "du 9 mars au 4 avril 2026",
      details: ["Installation et configuration de Windows 11",
                "Nettoyage et test de composants de PC (RAM, CPU, carte mère...)",
                "Test de résistances sur une carte électronique",
                "Démontage et remontage de téléphones Samsung",
                "Dépannage informatique à domicile chez des clients",
                "Gestion du stock avec le logiciel Phonilab",
                "Création de fiches clients"]
    },
    {
      lieu: "Espace culturel Bressuire", niveau: "Stage de 1ère", date: "du 19 novembre au 20 décembre 2025",
      details: ["Optimisation de la batterie d'un PC portable",
                "Vente de matériel informatique",
                "Renseignement des clients",
                "Mise en rayon et facing des produits"]
    },
    {
      lieu: "Bressuire Informatique", niveau: "Stage de 2nde", date: "du 26 mai au 4 juillet 2025",
      details: ["Installation d'OS Windows et Linux",
                "Installation et configuration de serveur",
                "Installation de machines virtuelles sous Hyper-V",
                "Installation de Docker sur Windows Server",
                "Installation et configuration d'un NAS",
                "Configuration d'imprimante",
                "Montage et démontage d'unité centrale",
                "Test des performances des composants principaux grâce à des logiciels",
                "Effacement de disque dur"]
    }
  ],

  jobsEte: [
    "Castrage de maïs (juillet 2025 et 2026)",
    "Service pour un mariage (14 juin 2025)"
  ],

  projets: [
    {
      nom: "Réparation de console",
      description: "Récemment, j’ai investi dans du matériel afin de me lancer dans la réparation de consoles à domicile. Passionné de jeux vidéo depuis mon plus jeune âge, il était évident qu'en intégrant ma filière actuelle, je m'intéresserais au fonctionnement de ces machines. C’est pourquoi j’ai décidé d’acheter des consoles HS sur des sites de revente pour leur donner une seconde vie. Mon objectif est double : préserver ces supports rétro et générer un peu de revenus. J’ai fait mes débuts en nettoyant mes propres vieilles consoles, puis j'ai progressivement appris à remplacer certaines pièces (boutons, coques, écrans…). Aujourd'hui, je m'initie également au maniement du fer à souder pour réparer les composants défectueux.",
      points: [],
      lien: "",
      texteLien: ""
    },
    {
      nom: "Casinodé",
      description: "Un jeu de dés en ligne que j'ai créé moi-même en HTML, CSS et JavaScript.",
      lien: "https://ethan-lds.github.io/Casinode/",
      texteLien: "Jouer à Casinodé"
    }
  ],

  loisirs: [
    {
      nom: "Les jeux vidéo",
      description: "« Ma passion numéro un est le jeu vidéo. Loin d'être un simple divertissement, c'est un média qui m'a énormément appris. À travers lui, j'ai pu m'attacher à des personnages marquants, suivre des scénarios captivants et me surpasser face à de grands défis de conception. Joueur passionné de JRPG comme Persona ou Final Fantasy, j’aime particulièrement l’aspect tactique : analyser une situation en combat pour trouver la meilleure stratégie, ou optimiser l'équipement de chaque coéquipier en amont. J'apprécie tout autant les jeux d'aventure tels que Zelda ou The Last of Us, qui me plongent au cœur d'univers et d'histoires immersives. Pour moi, le jeu vidéo est un art à part entière, et c’est cette richesse qui me passionne. »",
      points: [],
      lien: "",
      texteLien: ""
    },
    {
      nom: "Réparation, nettoyage et reconditionnement de consoles",
      description: "Comme dit précédemment dans la page <button class='lien-texte-interne' data-aller='projets' style='color:var(--accent); background:none; border:none; padding:0; font:inherit; font-weight:bold; cursor:pointer; text-decoration:underline;'>Mes projets</button>, je travaille actuellement sur le nettoyage et la réparation de consoles.",
      points: [],
      lien: "",
      texteLien: ""
    }
  ],

  photos: {
    competences: { gauche: ["classe.jpg", "cpu.jpeg", "pc.jpeg"], droite: ["linux.jpg", "hdd.jpg", "cisco.jpg"] },
    projets:     { gauche: ["2DS.jpg", "Lite.jpg", "joycon.jpg"], droite: ["port.jpg", "Bureau.jpg", "Casinode.png"] },
    experiences: { gauche: ["portable.jpg", "samsung.jpg", "test.jpg"], droite: ["serveur.jpg", "leclerc.png", "bios.jpg"] },
    loisirs:     { gauche: ["P4.webp", "oot.webp", "FFX.jpg"], droite: ["FF7.jpg", "tlou.jpg", "P5.jpg"] },
    
  },

   contact: [
    { label: "Email", valeur: "leduffethan09@gmail.com", image: "mail.png" },
    { label: "Téléphone", valeur: "07 66 87 90 47", image: "tel.webp" },
    { label: "GitHub", valeur: "<a href='https://github.com' target='_blank' rel='noopener' style='color:var(--accent-2); text-decoration:none; font-weight:bold;'>Ethan-LDS</a>", image: "github.webp" },
    { label: "Ville", valeur: "Bressuire", image: "addresse.jpg" }
  ]
};

const donneesEN = {
  titre: "Final-year (3rd year) Bac Pro CIEL: networks, systems and IT maintenance",
  accroche: "My name is Ethan Le Duff and I am in the final year of a Bac Pro CIEL (vocational baccalaureate in IT, networks and electronics) at Lycée Jean Moulin in Thouars. I want to work in IT maintenance, especially for multimedia devices such as PCs, game consoles and mobile phones.",

  competences: [
    { categorie: "Networks",
      items: ["Structured cabling (RJ45, optical fibre)",
              "IPv4 addressing, DHCP, DNS, VLAN",
              "Configuring routers, switches and Wi-Fi networks",
              "Simulation (Packet Tracer) and network diagnostics (ping, tracert, ipconfig)"] },
    { categorie: "Systems and servers",
      items: ["Installing Windows and Linux, virtualisation (Hyper-V), Docker",
              "Installing and configuring Windows Server and NAS (web, file sharing, directory)",
              "Windows and Linux command line",
              "User and permission management"] },
    { categorie: "Electronics",
      items: ["Electrical measurements (voltage, current, resistance), oscilloscope",
              "Reading schematics, wiring and testing logic circuits",
              "Soldering electronic components"] },
    { categorie: "Hardware maintenance",
      items: ["Building a desktop computer, replacing components",
              "Repairing hardware (PCs, game consoles), installing peripherals (printer)",
              "Diagnostics, hardware benchmarking and troubleshooting workstations"] },
    { categorie: "Cybersecurity",
      items: ["Securing workstations (passwords, updates, antivirus)",
              "Data backup and secure data erasure"] }
  ],

  experiences: [
    { lieu: "Repair Itech", niveau: "Internship, 2nd year of Bac Pro", date: "9 March to 4 April 2026",
      details: ["Installing and configuring Windows 11",
                "Cleaning and testing PC components (RAM, CPU, motherboard...)",
                "Testing resistors on an electronic board",
                "Disassembling and reassembling Samsung phones",
                "On-site IT support at customers' homes",
                "Stock management with Phonilab software",
                "Creating customer records"] },
    { lieu: "Espace culturel Bressuire", niveau: "Internship, 2nd year of Bac Pro", date: "19 November to 20 December 2025",
      details: ["Optimising a laptop's battery life",
                "Selling IT equipment",
                "Advising customers",
                "Stocking shelves and product facing"] },
    { lieu: "Bressuire Informatique", niveau: "Internship, 1st year of Bac Pro", date: "26 May to 4 July 2025",
      details: ["Installing Windows and Linux operating systems",
                "Installing and configuring a server",
                "Setting up virtual machines with Hyper-V",
                "Installing Docker on Windows Server",
                "Installing and configuring a NAS",
                "Configuring a printer",
                "Assembling and disassembling a desktop computer",
                "Testing the performance of the main components with software",
                "Wiping a hard drive"] }
  ],

  jobsEte: [
    "Corn detasseling (July 2025 and 2026)",
    "Waiting service at a wedding (14 June 2025)"
  ],

  projets: [
    { nom: "Console repair",
      description: "Recently, I invested in equipment to start repairing game consoles at home. I have loved video games since I was little, so it was natural that, once I started my current course, I became interested in how these machines work. That is why I decided to buy broken consoles on resale websites to give them a second life. My goal is twofold: to preserve these retro consoles and to earn a little income. I started by cleaning my own old consoles, then gradually learned to replace some parts (buttons, shells, screens...). Today, I am also learning to use a soldering iron to repair faulty components." },
    { nom: "Casinodé",
      description: "An online dice game that I created myself in HTML, CSS and JavaScript.",
      texteLien: "Play Casinodé" }
  ],

  loisirs: [
    { nom: "Video games",
      description: "“My number one passion is video games. Far from being simple entertainment, it is a medium that has taught me a great deal. Through it, I have become attached to memorable characters, followed captivating stories and pushed myself against great design challenges. As a passionate fan of JRPGs such as Persona or Final Fantasy, I particularly enjoy the tactical side: analysing a situation in battle to find the best strategy, or optimising each teammate's equipment beforehand. I enjoy adventure games such as Zelda or The Last of Us just as much, which immerse me in rich worlds and stories. For me, video games are an art form in their own right, and it is this richness that fascinates me.”" },
    { nom: "Repairing, cleaning and refurbishing consoles",
      description: "As mentioned earlier on the <button class='lien-texte-interne' data-aller='projets' style='color:var(--accent); background:none; border:none; padding:0; font:inherit; font-weight:bold; cursor:pointer; text-decoration:underline;'>My projects</button> page, I am currently working on cleaning and repairing consoles." }
  ],

  contact: [
    { label: "Email" },
    { label: "Phone" },
    { label: "GitHub" },
    { label: "City" }
  ]
};

const TEXTES = {
  fr: {
    menu: { accueil: "Accueil", competences: "Compétences", projets: "Mes projets", experiences: "Expériences", loisirs: "Loisirs", contact: "Contact/Réseau" },
    altPhoto: "Photo de",
    intro: "Parcourez les pages pour découvrir qui je suis et ce que je sais faire.",
    voirCompetences: "Voir mes compétences",
    competencesIntro: "Voici les compétences que j'ai acquises pendant les cours et chez moi.",
    experiencesIntro: "Mes trois stages en entreprise. Cliquez sur un stage pour afficher ou masquer le détail.",
    saisonniers: "Jobs saisonniers",
    loisirsIntro: "Il est temps que je parle de ce que j'aime faire en dehors des cours..",
    titrePage: "CV de",
    langueBouton: "Switch to English"
  },
  en: {
    menu: { accueil: "Home", competences: "Skills", projets: "My projects", experiences: "Experience", loisirs: "Hobbies", contact: "Contact" },
    altPhoto: "Photo of",
    intro: "Browse the pages to find out who I am and what I can do.",
    voirCompetences: "See my skills",
    competencesIntro: "These are the skills I have gained in class and at home.",
    experiencesIntro: "My three work placements. Click on a placement to show or hide the details.",
    saisonniers: "Seasonal jobs",
    loisirsIntro: "Time to talk about what I like to do outside of class..",
    titrePage: "CV of",
    langueBouton: "Passer en français"
  }
};

const fusion = (fr, en) => fr.map((x, i) => ({ ...x, ...((en && en[i]) || {}) }));

function donneesPourLangue(l) {
  if (l === "fr") return donnees;
  return {
    ...donnees,
    titre: donneesEN.titre,
    accroche: donneesEN.accroche,
    competences: fusion(donnees.competences, donneesEN.competences),
    experiences: fusion(donnees.experiences, donneesEN.experiences),
    jobsEte: donneesEN.jobsEte,
    projets: fusion(donnees.projets, donneesEN.projets),
    loisirs: fusion(donnees.loisirs, donneesEN.loisirs),
    contact: fusion(donnees.contact, donneesEN.contact)
  };
}

let langue = "fr";
let d = donnees;          
let ui = TEXTES.fr;       

const carte = p => `
  <article class="projet">
    <h3>${p.nom}</h3>
    ${p.description ? `<p>${p.description}</p>` : ""}
    ${p.points && p.points.length ? `<ul class="puces">${p.points.map(x => `<li>${x}</li>`).join("")}</ul>` : ""}
    ${p.lien ? `<a class="lien-bouton" href="${p.lien}" ${p.lien.startsWith("http") ? 'target="_blank" rel="noopener"' : ""}>${p.texteLien || "Voir"}</a>` : ""}
  </article>`;

const sections = {
  accueil: () => `
    <section class="hero">
      <div class="photo">
        <span>${d.initiales}</span>
        <img src="${d.photo}" alt="${ui.altPhoto} ${d.nom}" onerror="this.remove()">
      </div>
      <div class="hero-texte">
        <h1>${d.nom}</h1>
        <p class="titre">${d.titre}</p>
        <p>${d.accroche}</p>
        <p class="doux">${ui.intro}</p>
        <button class="lien-bouton" data-aller="competences">${ui.voirCompetences}</button>
      </div>
    </section>`,

  competences: () => `
    <h2>${ui.menu.competences}</h2>
    <div class="onglets">
      ${d.competences.map((c, i) => `<button class="onglet" data-i="${i}">${c.categorie}</button>`).join("")}
    </div>
    <p class="doux">${ui.competencesIntro}</p>
    <ul id="liste-competences" class="puces"></ul>`,

  experiences: () => `
    <h2>${ui.menu.experiences}</h2>
    <p class="doux">${ui.experiencesIntro}</p>
    ${d.experiences.map((e, i) => `
      <details class="stage" ${i === 0 ? "open" : ""}>
        <summary>${e.lieu}<span>${e.niveau}, ${e.date}</span></summary>
        <ul class="puces">${e.details.map(x => `<li>${x}</li>`).join("")}</ul>
      </details>`).join("")}
    <p class="saisonnier">${ui.saisonniers} : ${d.jobsEte.join(" ; ")}.</p>`,

  projets: () => `
    <h2>${ui.menu.projets}</h2>
    ${d.projets.map(carte).join("")}`,

  loisirs: () => `
    <h2>${ui.menu.loisirs}</h2>
    <p class="doux">${ui.loisirsIntro}</p>
    ${d.loisirs.map(carte).join("")}`,

  contact: () => `
    <h2>${ui.menu.contact}</h2>
    <div class="liste-contact" style="max-width: 550px; margin: 20px auto; display: flex; flex-direction: column; gap: 16px;">
      ${d.contact.map(c => `
        <div class="ligne-contact" style="display: flex; align-items: center; justify-content: space-between; background: var(--fond); padding: 12px 20px; border-radius: 12px; border: 1px solid var(--trait);">
          <div class="contact-gauche" style="display: flex; align-items: center; gap: 12px;">
            <div class="rond-mini-image" style="width: 32px; height: 32px; background: var(--panneau); border: 2px solid var(--accent); border-radius: 50%; display: flex; align-items: center; justify-content: center; overflow: hidden; flex-shrink: 0;">
              ${c.image ? `<img src="${c.image}" alt="" style="width:100%; height:100%; object-fit:cover;">` : ""}
            </div>
            <span style="font-weight: 600; color: var(--texte);">${c.label}</span>
          </div>
          <div class="contact-droit" style="color: var(--texte-doux); font-size: 1.15rem; text-align: right; word-break: break-all; padding-left: 10px;">
            ${c.valeur}
          </div>
        </div>
      `).join("")}
    </div>`
};

const contenu = document.getElementById("contenu");
const coteGauche = document.getElementById("cote-gauche");
const coteDroit = document.getElementById("cote-droite");
const boutonsMenu = document.querySelectorAll("#menu button");

const VERSION_PHOTOS = 3;
const avecVersion = src => src + (src.includes("?") ? "&" : "?") + "v=" + VERSION_PHOTOS;

const photosChargees = {};   
const imagesEnMemoire = [];  

function precharger() {
  try {
    const liste = [];
    Object.values(d.photos || {}).forEach(p => {
      if (!p) return;
      [...(Array.isArray(p.gauche) ? p.gauche : []), ...(Array.isArray(p.droite) ? p.droite : [])]
        .forEach(s => { if (typeof s === "string" && s.trim()) liste.push(s.trim()); });
    });
    (d.contact || []).forEach(c => { if (c && c.image) liste.push(c.image); });
    [...new Set(liste)].forEach(src => {
      const img = new Image();
      img.onload = () => { photosChargees[src] = img.naturalWidth / img.naturalHeight; };
      img.onerror = () => console.warn("Photo introuvable : " + src + " (vérifie le nom, les majuscules et le dossier)");
      img.src = avecVersion(src);
      if (img.decode) img.decode().catch(() => {});
      imagesEnMemoire.push(img);
    });
  } catch (e) {
    console.warn("Préchargement ignoré :", e);  
  }
}
precharger();

function cadres(liste) {
  return (liste || []).map((src, i) => {
    const ratio = photosChargees[src];   
    return `
    <div class="cadre-photo${ratio ? " remplie" : ""}" style="--i:${i}${ratio ? `;--ratio:${ratio}` : ""}">
      <span>Photo à ajouter</span>
      ${src ? `<img src="${avecVersion(src)}" alt="" onload="this.parentElement.style.setProperty('--ratio', this.naturalWidth / this.naturalHeight); this.parentElement.classList.add('remplie')" onerror="this.remove()">` : ""}
    </div>`;
  }).join("");
}

function afficherPhotos(nom) {
  const p = nom === "accueil" ? {} : (d.photos[nom] || {});
  coteGauche.innerHTML = cadres(p.gauche);
  coteDroit.innerHTML = cadres(p.droite);
}

let pageActuelle = "accueil";

function afficher(nom) {
  pageActuelle = nom;
  boutonsMenu.forEach(b => {
    const actif = b.dataset.section === nom;
    b.classList.toggle("actif", actif);
    if (actif) b.setAttribute("aria-current", "page");
    else b.removeAttribute("aria-current");
  });

  contenu.innerHTML = sections[nom]();
  contenu.classList.toggle("accueil", nom === "accueil");
  contenu.classList.toggle("competences", nom === "competences");

  afficherPhotos(nom);

  [contenu, coteGauche, coteDroit].forEach(el => {
    el.classList.remove("entree");
    void el.offsetWidth;
    el.classList.add("entree");
  });

  contenu.querySelectorAll("[data-aller], .lien-texte-interne").forEach(b => {
    b.addEventListener("click", () => afficher(b.dataset.aller));
  });

  if (nom === "competences") activerCompetences();
}

function activerCompetences() {
  const onglets = contenu.querySelectorAll(".onglet");
  const liste = document.getElementById("liste-competences");

  function choisir(i) {
    onglets.forEach((o, n) => o.classList.toggle("actif", n === i));
    liste.innerHTML = d.competences[i].items.map(x => `<li>${x}</li>`).join("");
  }

  onglets.forEach((o, i) => o.addEventListener("click", () => choisir(i)));
  choisir(0);
}

boutonsMenu.forEach(b => b.addEventListener("click", () => afficher(b.dataset.section)));

const DRAPEAUX = {
  fr: `<svg viewBox="0 0 3 2" aria-hidden="true"><rect width="1" height="2" fill="#0055A4"/><rect x="1" width="1" height="2" fill="#fff"/><rect x="2" width="1" height="2" fill="#EF4135"/></svg>`,
  en: `<svg viewBox="0 0 60 30" aria-hidden="true"><clipPath id="drapeau-en"><path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/></clipPath><path d="M0,0 v30 h60 v-30 z" fill="#012169"/><path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" stroke-width="6"/><path d="M0,0 L60,30 M60,0 L0,30" clip-path="url(#drapeau-en)" stroke="#C8102E" stroke-width="4"/><path d="M30,0 v30 M0,15 h60" stroke="#fff" stroke-width="10"/><path d="M30,0 v30 M0,15 h60" stroke="#C8102E" stroke-width="6"/></svg>`
};

const boutonLangue = document.createElement("button");
boutonLangue.id = "langue";
boutonLangue.type = "button";
document.getElementById("menu").appendChild(boutonLangue);

function appliquerLangue(l) {
  langue = l;
  d = donneesPourLangue(l);
  ui = TEXTES[l];
  document.documentElement.lang = l;
  document.title = ui.titrePage + " " + d.nom;
  boutonsMenu.forEach(b => { b.textContent = ui.menu[b.dataset.section]; });
  boutonLangue.innerHTML = DRAPEAUX[l];
  boutonLangue.title = boutonLangue.ariaLabel = ui.langueBouton;
  try { localStorage.setItem("langue-cv", l); } catch (e) {}
  afficher(pageActuelle);
}

boutonLangue.addEventListener("click", () => appliquerLangue(langue === "fr" ? "en" : "fr"));

let langueDepart = "fr";
try { if (localStorage.getItem("langue-cv") === "en") langueDepart = "en"; } catch (e) {}
appliquerLangue(langueDepart);

const menu = document.getElementById("menu");
let dernierY = window.scrollY;
window.addEventListener("scroll", () => {
  const y = window.scrollY;
  if (Math.abs(y - dernierY) < 8) return;                    
  if (y > dernierY && y > 80) menu.classList.add("cache");   
  else menu.classList.remove("cache");                       
  dernierY = y;
}, { passive: true });
