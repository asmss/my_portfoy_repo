import {
  SiC, SiPython, SiDart, SiJavascript,
  SiFlutter, SiReact, SiExpo, SiHtml5, SiCss,
  SiNodedotjs, SiFlask, SiMysql, SiSqlite, SiMongodb,
  SiFirebase, SiDocker, SiPostman, SiGit, SiGithub,
  SiSupabase, SiBlender
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { FaJava } from "react-icons/fa";

export const skillsData = {
  languages: ["C", "JAVA", "PYTHON", "DART", "JAVASCRIPT"],
  mobile: ["FLUTTER", "REACT NATIVE", "Expo Go", "Expo Router", "Context API"],
  frontend: ["REACT", "HTML5", "CSS3", "EJS TEMPLATING"],
  backend: ["NODE.JS (Express.js)", "Python(flask)", "REST API"],
  database: ["MYSQL", "SQLite", "MongoDB", "FIREBASE (Firestore)"],
  devops_tools: ["DOCKER", "POSTMAN", "FIREBASE (Auth)", "Git", "Github", "Supabase"],
  design_3DModeling: ["BLENDER"]
};

export const category_names = {
  languages: "LANGUAGES",
  mobile: "MOBİLE",
  frontend: "FRONTEND",
  backend: "BACKEND",
  database: "DATABASE",
  devops_tools: "DEVOPS & TOOLS",
  design_3DModeling: "DESİGN & 3D MODELİNG"
}

export const skillIcons = {
  "C": <SiC color="#A8B9CC" size={30} />,
  "JAVA": <FaJava color="#ED8B00" size={30} />,
  "PYTHON": <SiPython color="#3776AB" size={30} />,
  "DART": <SiDart color="#0175C2" size={30} />,
  "JAVASCRIPT": <SiJavascript color="#F7DF1E" size={30} />,

  "FLUTTER": <SiFlutter color="#7a9fbdff" size={30} />,
  "REACT NATIVE": <SiReact color="#61DAFB" size={30} />,
  "Expo Go": <SiExpo color="#ffffff" size={30} />,
  "Expo Router": <SiExpo color="#ffffff" size={30} />,
  "Context API": <SiReact color="#61DAFB" size={30} />,

  "REACT": <SiReact color="#61DAFB" size={30} />,
  "HTML5": <SiHtml5 color="#E34F26" size={30} />,
  "CSS3": <SiCss color="#1572B6" size={30} />,
  "EJS TEMPLATING": <SiJavascript color="#B4CA65" size={30} />,

  "NODE.JS (Express.js)": <SiNodedotjs color="#339933" size={30} />,
  "Python(flask)": <SiFlask color="#ffffff" size={30} />,
  "REST API": <TbApi color="#009688" size={30} />,

  "MYSQL": <SiMysql color="#4479A1" size={30} />,
  "SQLite": <SiSqlite color="#003B57" size={30} />,
  "MongoDB": <SiMongodb color="#47A248" size={30} />,
  "FIREBASE (Firestore)": <SiFirebase color="#FFCA28" size={30} />,

  "DOCKER": <SiDocker color="#2496ED" size={30} />,
  "POSTMAN": <SiPostman color="#FF6C37" size={30} />,
  "FIREBASE (Auth)": <SiFirebase color="#FFA611" size={30} />,
  "Git": <SiGit color="#F05032" size={30} />,
  "Github": <SiGithub color="#ffffff" size={30} />,
  "Supabase": <SiSupabase color="#3ECF8E" size={30} />,

  "BLENDER": <SiBlender color="#F5792A" size={30} />
};
export const translations = {
  tr: {
    role: "Bilgisayar Mühendisi",
    aboutTitle: "Hakkımda",
    aboutText: "Ben Asım Karabulut, Konya Teknik Üniversitesi Bilgisayar Mühendisliği 4. sınıf öğrencisiyim. Mobil uygulama geliştirme, full-stack web programlama ve veri bilimi alanlarında aktif olarak kendimi geliştirmekteyim. Bunun yanı sıra yapay zeka alanına da büyük ilgi duyuyor, bu alandaki gelişmeleri yakından takip ediyorum. Yazılım dünyasında yetkin bir geliştirici olma hedefiyle, disiplinli ve kararlı bir şekilde ilerliyorum. Hem akademik hem de bireysel projelerle teknik becerilerimi pekiştirerek, yazılım sektöründe değer yaratan bir mühendis olmayı amaçlıyorum.",
    skillsTitle: "Yetenekler",
    projectsTitle: "Projelerim",
    navAbout: "Hakkımda",
    navProjects: "Projeler",
    navContact: "İletişim",
    contact: "İletişim",
    contactTitle: "Bana Ulaşın",
    filterAll: "Hepsi",
    filterMobile: "Mobil",
    filterWeb: "Web",
    filterAi: "Yapay Zeka",
    filterDesign: "Tasarım",
    formName: "Adınız",
    formEmail: "E-posta Adresiniz",
    formMsg: "Mesajınız",
    formBtn: "Gönder",
    projects: [
      {
        title: "CV Oluşturucu",
        category: "mobile",
        desc: "Bu proje, React Native (Expo) ile geliştirilen mobil bir arayüz üzerinden alınan kullanıcı verilerini, Node.js & Express.js tabanlı bir backend ile işleyerek PDF CV çıktısı üreten bir sistemdir. Backend tamamen Docker ortamında çalışmakta ve Render üzerinde canlıya alınmıştır.",
        link: "https://github.com/asmss/cv_olusturucu-0",
        type: "Github",
        img: "/image/cv_img.jpg",
        tags: ["React Native", "Node.js", "Express.js", "Docker", "Expo", "Postman"]
      },
      {
        title: "SnippetKRBLT",
        category: "mobile",
        desc: "Bu uygulamayı geliştirirken, kullanıcıya en iyi mobil deneyimi sunmak için Frontend katmanında React Native ve kolay dağıtım için Expo Go platformunu kullandım. Projenin Backend omurgasını ise yüksek performans ve ölçeklenebilirlik sağlamak amacıyla Node.js ve Express.js oluşturuyor. Tüm kod parçacıkları ve kullanıcı verileri ise güvenilir bir bulut tabanlı çözüm olan MongoDB Atlas üzerinde saklanmaktadır. Ayrıca, uygulamanın ana ayırt edici özelliği olarak, kod parçacıklarını analiz etmek ve yönetimi kolaylaştırmak için LLM (Llama 3) yapay zekasını projemize chatbot olacak şekilde entegre ettim.",
        link: "https://github.com/asmss/SnippetKRBLT",
        type: "Github",
        img: "/image/code-icon-png-0.jpg",
        tags: ["React Native", "Node.js", "Express.js", "MongoDB Atlas", "Llama 3", "Expo"]
      },
      {
        title: "YouTube Video & Music Converter",
        category: "web",
        desc: "Bu projede React ve Node.js kullanarak YouTube videolarını yüksek kaliteli ses ve video formatında dosyalara dönüştüren bir platform geliştirdim. Arka planda dönüşüm süreçlerini yönetmek için BullMQ ve Redis tabanlı bir kuyruk sistemi kullandım. Dockerize edilmiş yapısıyla ölçeklenebilir bir mimariye sahiptir ve Socket.io ile kullanıcıya anlık işlem durumu bildirimi sağlar.",
        link: "https://github.com/asmss/videoConventer",
        type: "Github",
        img: "/image/videoConventer.png",
        tags: ["React", "Node.js", "Redis", "BullMQ", "Docker", "Socket.io"]
      },
      {
        title: "3D İzometrik Oda Tasarımı",
        category: "design",
        desc: "Blender kullanarak tasarladığım bu projede, modern ve minimal bir oturma odası konseptini izometrik bakış açısıyla modelledim. Proje kapsamında mesh modelleme, kumaş simülasyonu (yastıklar için pofuduk yapı), gelişmiş ışıklandırma (Area & Sun Light) ve malzeme (shading/node) tekniklerini uyguladım. Özellikle 3D dünyasındaki derinlik ve ışık-gölge dengesi üzerine odaklandığım bir çalışma oldu.",
        link: "https://github.com/asmss/tnc_blender_project",
        type: "Github",
        img: "/image/AsımKarabulut.png",
        tags: ["Blender", "3D Modeling", "Isometric Design", "Shading", "Cloth Simulation"]
      }, {
        title: "e-Ticaret Demo",
        category: "web",
        desc: "React ve JavaScript kullanılarak geliştirilen bu proje, modern bir e-ticaret arayüzünün (v2) demosudur. Proje kapsamında ürün listeleme, dinamik sepet yönetimi ve detaylı ürün sayfaları geliştirilmiştir. TypeScript'in tip güvenliği avantajları kullanılarak temiz ve sürdürülebilir bir mimari oluşturulmuş, Netlify üzerinde canlıya alınmıştır.",
        link: "https://eticaretsitesidemo.netlify.app/",
        type: "Web Sitesi",
        img: "/image/eticaret.png",
        tags: ["React", "JavaScript", "Netlify", "E-Commerce UI"]
      },
      {
        title: "Mini Katalog Uygulaması",
        category: "mobile",
        desc: "Flutter ve Dart kullanılarak geliştirilen bu katalog uygulamasında, ürün listeleme ve kategori yönetimi üzerine odaklanılmıştır. Projede verilerin uygulama kapansa dahi korunabilmesi için Shared Preferences entegrasyonu yapılmıştır. Bu sayede yerel veri depolama (local storage) ve kalıcı kullanıcı tercihleri yönetimi konularında pratik bir çözüm sunulmuştur.",
        link: "https://github.com/asmss/mini_catalog_app",
        type: "Github",
        img: "/image/katalog.png",
        tags: ["Flutter", "Dart", "Shared Preferences", "Local Storage", "UI Design"]
      },
      {
        title: "Vintage Note",
        category: "mobile",
        desc: "Flutter ile geliştirilen, Offline-First mimarisine sahip gelişmiş bir not alma uygulamasıdır. Yerel veri yönetimi için yüksek performanslı Isar NoSQL veritabanı, bulut senkronizasyonu için ise MongoDB Atlas ve Flask (Python) tabanlı bir backend altyapısı kullanılmıştır(render ile yayına alınmıştır). Awesome Notifications ile hatırlatıcı sistemleri, Provider ile state yönetimi ve http.Client ile modüler API entegrasyonu sağlanmıştır. Veri tutarlılığı için local-to-cloud senkronizasyon algoritmaları ve Render uyanma süreleri için optimize edilmiş timeout mekanizmaları içermektedir.",
        link: "https://github.com/asmss/notes_project_0/",
        type: "Github",
        img: "/image/notes.png",
        tags: ["Flutter", "Flask", "MongoDB Atlas", "Isar DB", "Provider", "Offline-First", "render"]
      },
      {
        title: "Kişisel finans takip uygulaması",
        category: "mobile",
        desc: "Bu projemde flutter + firebase kullandım. Bu uygulamanın amacı başlıkta belirttiğim gibi insanların finansal manada yaptığı harcamalar, gelir-gider durumu takibi, canlı döviz verileriyle kendi gelir giderinin hesabı, hatırlatma ve planlama vb. gibi işlemlerin takibini yapmak.",
        link: "https://drive.google.com/file/d/10wudKLoNPqlIok_CjniL7hzennVgTqSI/view?usp=sharing",
        type: "İndir",
        img: "/image/app_icon_512x512_bigger.png",
        tags: ["Flutter", "Firebase", "Finance API"]
      },
      {
        title: "Ruhsal Durum Takibi",
        category: "mobile",
        desc: "Bu projemde flutter + firebase kullandım. Bu uygulamanın amacı başlıkta belirttiğim gibi insanlara psikolojik destek sağlamak, günlük olarak ruhsal durumunun değişimini görmek vb. şeyler.",
        link: "https://drive.google.com/file/d/1A0vFglOjNzFLlFsOzDtoHhd9O-h6gm5C/view?usp=sharing",
        type: "İndir",
        img: "/image/app_icon.png",
        tags: ["Flutter", "Firebase"]
      },
      {
        title: "YesilSepet",
        category: "web",
        desc: "Bu projemde küçük bir e-ticaret sitesinin belli başlı sayfalarıyla küçük bir demosunu yapmayı amaçladım. Projemde session-based authentication (oturum yönetimi) ve MYSQL veri tabanı kullandım. Backend altyapısını node.js + express.js ile geliştirerek, stateful API endpoint'leri tasarladım ayrıca bu api endpointlerini Postman ile test ettim. Proje kullanıcıların; üye olup giriş yapabileceği, ürünleri sepete ekleyebileceği, admin için ürün update işlemlerinin yapılabileceği .vb bir web sitesi.",
        link: "https://github.com/asmss/YesilSepet-0",
        type: "Github",
        img: "/image/resimss.png",
        tags: ["Node.js", "Express", "MySQL", "Postman"]
      },
      {
        title: "KimHaklı",
        category: "web",
        desc: "Bu projemde küçük ve kullanışlı bir mini anket sitesi yapmayı amaçladım. Projemde session-based authentication (oturum yönetimi)ve veri tabanı olarak firebase firestore kullandım. Backend tarafını da node.js + express.js ile geliştirdim. Postmanla testlerini yapıp render ile deploy ettim. Detaylar için sitemi ziyaret edin.",
        link: "https://www.kimhakli.site/",
        type: "Site",
        img: "/image/kimhakli.png",
        tags: ["Node.js", "Firebase", "Render", "Postman", "Html", "Css", "Ejs templating"]
      },
      {
        title: "Neobez",
        category: "mobile",
        desc: "Bu program sayesinde ;programın kendi içindeki real-time mesajlaşma sayfası sayesinde gerçek bir diyetisyenle konuşma fırsatı bulunuyor, hazır yapay zeka API sini entegre ettiğim bir sayfa sayesinde yapay zeka botuyla fikir alışverişi yapılabiliyor ,diyetisyenin kendilerine verebileceği görevleri yapıp ilerleme kontrolü yapılıyor ,yaklaşık 1500 tane yiyecek verisinin olduğu yiyeceklerin kalori,protein vb değerlerinin yazdığı bir sayfa sayesinde araştırma imkanı sunar. Program için flutter frameworkünü ,veritabanı olarak Firebase'in noSQL yapılı Firestore database'ini,auth işlemleri içinde Firebase auth servisini kullandım.",
        link: "https://drive.google.com/file/d/1L54k6Qi4Ks2A1MEanOQPNhJWdQyowcQH/view?usp=drive_link",
        type: "İndir",
        img: "/image/app_png.png",
        tags: ["Flutter", "Firebase", "AI Integration"]
      },
      {
        title: "Device Manager",
        category: "mobile",
        desc: "Flutter ile geliştirilmiş olup yazdığım Android Native (java) kodlarını entegre ettiğim bir mobil uygulamadır. Uygulama; cihazın parlaklık, ses, titreşim ve batarya gibi donanımsal özelliklerini MethodChannel aracılığıyla kontrol eder. Riverpood ile state management sağlanmıştır. Github kodlarına ve uygulama arayüzüne ulaşmak için tıklayın.",
        link: "https://github.com/asmss/DeviceManager",
        type: "Github",
        img: "/image/default-project.png",
        tags: ["Flutter", "Android Native", "Java", "MethodChannel", "Riverpod"]
      }
    ],
    certificatesTitle: "Sertifikalar & Eğitimler",
    viewCertificate: "Sertifikayı Görüntüle",
    certificates: [
      {
        title: "Python For Everybody Specialization Program",
        issuer: "University Of Michigan",
        date: "2025",
        img: "/image/michigan.jpeg",
        link: "https://www.coursera.org/account/accomplishments/specialization/1TUPP0O68EF5"
      },
      {
        title: "Using Python to Access Web Data",
        issuer: "University Of Michigan",
        date: "2025",
        img: "/image/michigan.jpeg",
        link: "https://www.coursera.org/account/accomplishments/verify/3OCQ5H8LHYBZ"
      },
      {
        title: "Getting Started With Git and Github",
        issuer: "IBM",
        date: "2026",
        img: "/image/ibm_logo.jpeg",
        link: "https://www.coursera.org/account/accomplishments/verify/ATL4P1O3WQ08"
      },
      {
        title: " Bilgisayar dosya güvenliği ve veri kurtarma",
        issuer: "ODTÜ",
        date: "2025",
        img: "/image/orta_dogu_teknik_universitesi_logo.jpeg",
        link: "https://www.linkedin.com/in/as%C4%B1m-karabulut-6a874b326/details/certifications/"
      },
    ],

  },
  en: {
    role: "Computer Engineer",

    aboutTitle: "About Me",
    aboutText:
      "I am Asım Karabulut, a 4th-year Computer Engineering student at Konya Technical University. I am actively improving myself in mobile application development, full-stack web programming, and data science. In addition, I have a strong interest in artificial intelligence and closely follow developments in this field. With the goal of becoming a competent software developer, I move forward in a disciplined and determined manner. By strengthening my technical skills through both academic and personal projects, I aim to become an engineer who creates real value in the software industry.",

    skillsTitle: "Skills",
    projectsTitle: "My Projects",

    navAbout: "About",
    navProjects: "Projects",
    navContact: "Contact",

    contact: "Contact",
    contactTitle: "Get In Touch",

    filterAll: "All",
    filterMobile: "Mobile",
    filterWeb: "Web",
    filterAi: "Artificial Intelligence",
    filterDesign: "Design",

    formName: "Your Name",
    formEmail: "Your Email",
    formMsg: "Your Message",
    formBtn: "Send",

    projects: [
      {
        title: "CV Generator",
        category: "mobile",
        desc:
          "This project is a system that generates PDF CV outputs by processing user data collected from a React Native (Expo) mobile interface using a Node.js and Express.js backend. The backend runs entirely in a Docker environment and is deployed on Render.",
        link: "https://github.com/asmss/cv_olusturucu-0",
        type: "Github",
        img: "/image/cv_img.jpg",
        tags: ["React Native", "Node.js", "Express.js", "Docker", "Expo", "Postman"]
      },
      {
        title: "SnippetKRBLT",
        category: "mobile",
        desc:
          "A mobile-focused version of the SnippetKRBLT project, offering the same AI-powered code snippet management features through a React Native interface.",
        link: "https://github.com/asmss/SnippetKRBLT",
        type: "Github",
        img: "/image/code-icon-png-0.jpg",
        tags: ["React Native", "Node.js", "Express.js", "MongoDB Atlas", "Llama 3", "Expo"]
      },
      {
        title: "YouTube Video & Music Converter",
        category: "web",
        desc: "Developed a robust platform using React and Node.js for converting YouTube videos into high-quality audio and video files format. The system features a background processing architecture powered by BullMQ and Redis for efficient task queuing. It is fully containerized using Docker and utilizes Socket.io to provide users with real-time conversion progress updates.",
        link: "https://github.com/asmss/videoConventer",
        type: "Github",
        img: "/image/videoConventer.png",
        tags: ["React", "Node.js", "Redis", "BullMQ", "Docker", "Socket.io"]
      },
      {
        title: "3D Isometric Room Design",
        category: "design",
        desc: "In this project designed with Blender, I modeled a modern and minimal living room concept from an isometric perspective. I applied techniques such as mesh modeling, cloth simulation (for the fluffy pillows), advanced lighting (Area & Sun Light), and material (shading/node) systems. This work specifically focuses on depth, light-shadow balance, and composition in the 3D environment.",
        link: "https://github.com/asmss/tnc_blender_project",
        type: "Github",
        img: "/image/AsımKarabulut.png",
        tags: ["Blender", "3D Modeling", "Isometric Design", "Shading", "Cloth Simulation"]
      },
      {
        title: "e-Commerce Demo",
        category: "web",
        desc: "Developed using React and JavaScript, this project is a demo of a modern e-commerce interface (v2). It features product listing, dynamic cart management, and detailed product pages. A clean and sustainable architecture was created using TypeScript's type safety advantages, and the project is deployed live on Netlify.",
        link: "https://eticaretsitesidemo.netlify.app/",
        type: "Website",
        img: "/image/eticaret.png",
        tags: ["React", "JavaScript", "Netlify", "E-Commerce UI"]
      },
      {
        title: "Mini Catalog App",
        category: "mobile",
        desc: "This catalog application, developed with Flutter and Dart, focuses on product listing and category management. Shared Preferences integration was implemented to ensure data persistence even when the app is closed. This provides a practical solution for local storage management and persistent user preferences.",
        link: "https://github.com/asmss/mini_catalog_app",
        type: "Github",
        img: "/image/katalog.png",
        tags: ["Flutter", "Dart", "Shared Preferences", "Local Storage", "UI Design"]
      },
      {
        title: "Vintage Note",
        category: "mobile",
        desc: "An advanced note-taking application with an Offline-First architecture, built with Flutter. It utilizes high-performance Isar NoSQL for local storage and MongoDB Atlas with a Flask (Python) backend for cloud synchronization (It has been published with a render.). The app features reminder systems via Awesome Notifications, state management with Provider, and modular API integration using http.Client. It includes robust local-to-cloud sync algorithms for data persistence and optimized timeout mechanisms to handle cold starts on Render hosting.",
        link: "https://github.com/asmss/notes_project_0/",
        type: "Github",
        img: "/image/notes.png",
        tags: ["Flutter", "Flask", "MongoDB Atlas", "Isar DB", "Provider", "Offline-First","render"]
      },
      {
        title: "Personal Finance Tracking Application",
        category: "mobile",
        desc:
          "In this project, I used Flutter and Firebase. The application allows users to track their expenses and income, analyze their financial status, calculate balances with live exchange rates, and manage reminders and planning features.",
        link: "https://drive.google.com/file/d/10wudKLoNPqlIok_CjniL7hzennVgTqSI/view?usp=sharing",
        type: "Download",
        img: "/image/app_icon_512x512_bigger.png",
        tags: ["Flutter", "Firebase", "Finance API"]
      },

      {
        title: "Mental Health Tracker",
        category: "mobile",
        desc:
          "Developed using Flutter and Firebase. The purpose of this application is to provide psychological support and allow users to track daily changes in their mental state.",
        link: "https://drive.google.com/file/d/1A0vFglOjNzFLlFsOzDtoHhd9O-h6gm5C/view?usp=sharing",
        type: "Download",
        img: "/image/app_icon.png",
        tags: ["Flutter", "Firebase"]
      },
      {
        title: "YesilSepet",
        category: "web",
        desc:
          "In this project, I developed a small demo of an e-commerce website with core pages. I implemented session-based authentication and used MySQL as the database. The backend was built with Node.js and Express.js, and all API endpoints were tested using Postman. Users can register, log in, add products to the cart, and admins can manage product updates.",
        link: "https://github.com/asmss/YesilSepet-0",
        type: "Github",
        img: "/image/resimss.png",
        tags: ["Node.js", "Express.js", "MySQL", "Postman"]
      },
      {
        title: "KimHaklı",
        category: "web",
        desc:
          "A small and practical mini survey application. I implemented session-based authentication and used Firebase Firestore as the database. The backend was developed with Node.js and Express.js, tested with Postman, and deployed using Render.",
        link: "https://www.kimhakli.site/",
        type: "Website",
        img: "/image/kimhakli.png",
        tags: ["Node.js", "Firebase", "Firestore", "Render", "HTML", "CSS", "JavaScript"]
      },
      {
        title: "Neobez",
        category: "mobile",
        desc:
          "This application provides real-time messaging with a professional dietitian, an AI-powered chatbot for consultation, task-based progress tracking, and a food database containing nutritional values for approximately 1,500 food items. The app was built using Flutter, Firebase Firestore, and Firebase Authentication.",
        link: "https://drive.google.com/file/d/1L54k6Qi4Ks2A1MEanOQPNhJWdQyowcQH/view?usp=drive_link",
        type: "Download",
        img: "/image/app_png.png",
        tags: ["Flutter", "Firebase", "AI Integration"]
      },
      {
        title: "Device Manager",
        category: "mobile",
        desc:
          "A Flutter-based mobile application that integrates Android Native (Java) code. The app controls hardware features such as brightness, volume, vibration, and battery using MethodChannel. State management is handled with Riverpod.",
        link: "https://github.com/asmss/DeviceManager",
        type: "Github",
        img: "/image/default-project.png",
        tags: ["Flutter", "Android Native", "Java", "MethodChannel", "Riverpod"]
      }
    ],
    certificatesTitle: "Certificates & Training",
    viewCertificate: "View Certificate",
    certificates: [
      {
        title: "Python For Everybody Specialization Program",
        issuer: "University Of Michigan",
        date: "2025",
        img: "/image/michigan.jpeg",
        link: "https://www.coursera.org/account/accomplishments/specialization/1TUPP0O68EF5"
      },
      {
        title: "Using Python to Access Web Data",
        issuer: "University Of Michigan",
        date: "2025",
        img: "/image/michigan.jpeg",
        link: "https://www.coursera.org/account/accomplishments/verify/3OCQ5H8LHYBZ"
      },
      {
        title: "Getting Started With Git and Github",
        issuer: "IBM",
        date: "2026",
        img: "/image/ibm_logo.jpeg",
        link: "https://www.coursera.org/account/accomplishments/verify/ATL4P1O3WQ08"
      },
      {
        title: " Computer file security and data recovery",
        issuer: "ODTÜ",
        date: "2025",
        img: "/image/orta_dogu_teknik_universitesi_logo.jpeg",
        link: "https://www.linkedin.com/in/as%C4%B1m-karabulut-6a874b326/details/certifications/"
      },
    ],

  }
};
