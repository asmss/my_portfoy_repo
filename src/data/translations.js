export const skillsData = {
  languages: ["C", "JAVA", "PYTHON", "DART", "JAVASCRIPT"],
  mobile: ["FLUTTER", "REACT NATIVE", "Expo Go", "Expo Router", "Context API"],
  frontend: ["REACT", "HTML", "CSS", "EJS TEMPLATING"],
  backend: ["NODE.JS (Express.js)", "REST API"],
  database: ["MYSQL", "SQLite", "MongoDB", "FIREBASE (Firestore)"],
  devops_tools: ["DOCKER", "POSTMAN", "FIREBASE (Auth)", "Device Manager"]
};

export const translations = {
  tr: {
    role: "Bilgisayar Mühendisi",
    aboutTitle: "Hakkımda",
    aboutText: "Ben Asım Karabulut, Konya Teknik Üniversitesi Bilgisayar Mühendisliği 4. sınıf öğrencisiyim. Mobil uygulama geliştirme, back-end programlama ve veri bilimi alanlarında aktif olarak kendimi geliştirmekteyim. Bunun yanı sıra yapay zeka alanına da büyük ilgi duyuyor, bu alandaki gelişmeleri yakından takip ediyorum. Yazılım dünyasında yetkin bir geliştirici olma hedefiyle, disiplinli ve kararlı bir şekilde ilerliyorum. Hem akademik hem de bireysel projelerle teknik becerilerimi pekiştirerek, yazılım sektöründe değer yaratan bir mühendis olmayı amaçlıyorum.",
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
    formName: "Adınız",
    formEmail: "E-posta Adresiniz",
    formMsg: "Mesajınız",
    formBtn: "Gönder",
    projects: [
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
        title: "CV Oluşturucu", 
        category: "mobile",
        desc: "Bu proje, React Native (Expo) ile geliştirilen mobil bir arayüz üzerinden alınan kullanıcı verilerini, Node.js & Express.js tabanlı bir backend ile işleyerek PDF CV çıktısı üreten bir sistemdir. Backend tamamen Docker ortamında çalışmakta ve Render üzerinde canlıya alınmıştır.", 
        link: "https://github.com/asmss/cv_olusturucu-0", 
        type: "Github", 
        img: "/image/cv_img.jpg",
        tags: ["React Native", "Node.js","Express.js", "Docker","Expo","Postman"]
      },
      { 
        title: "KimHaklı", 
        category: "web",
        desc: "Bu projemde küçük ve kullanışlı bir mini anket sitesi yapmayı amaçladım. Projemde session-based authentication (oturum yönetimi)ve veri tabanı olarak firebase firestore kullandım. Backend tarafını da node.js + express.js ile geliştirdim. Postmanla testlerini yapıp render ile deploy ettim. Detaylar için sitemi ziyaret edin.", 
        link: "https://www.kimhakli.site/", 
        type: "Site", 
        img: "/image/kimhakli.png",
        tags: ["Node.js", "Firebase", "Render","Postman","Html","Css","Ejs templating"]
      },
      { 
        title: "Neobez", 
        category: "mobile",
        desc: "Bu program sayesinde ;programın kendi içindeki real-time mesajlaşma sayfası sayesinde gerçek bir diyetisyenle konuşma fırsatı bulunuyor, hazır yapay zeka API sini entegre ettiğim bir sayfa sayesinde yapay zeka botuyla fikir alışverişi yapılabiliyor ,diyetisyenin kendilerine verebileceği görevleri yapıp ilerleme kontrolü yapılıyor ,yaklaşık 1500 tane yiyecek verisinin olduğu yiyeceklerin kalori,protein vb değerlerinin yazdığı bir sayfa sayesinde araştırma imkanı sunar. Program için flutter dilini ,veritabanı olarak Firebase'in noSQL yapılı Firestore database'ini,auth işlemleri içinde Firebase auth servisini kullandım.", 
        link: "https://drive.google.com/file/d/1L54k6Qi4Ks2A1MEanOQPNhJWdQyowcQH/view?usp=drive_link", 
        type: "İndir", 
        img: "/image/app_png.png",
        tags: ["Flutter", "Firebase", "AI Integration"]
      },
            { 
        title: "SnippetKRBLT", 
        category: "mobile",
        desc: "Bu uygulamayı geliştirirken, kullanıcıya en iyi mobil deneyimi sunmak için Frontend katmanında React Native ve kolay dağıtım için Expo Go platformunu kullandım. Projenin Backend omurgasını ise yüksek performans ve ölçeklenebilirlik sağlamak amacıyla Node.js ve Express.js oluşturuyor. Tüm kod parçacıkları ve kullanıcı verileri ise güvenilir bir bulut tabanlı çözüm olan MongoDB Atlas üzerinde saklanmaktadır. Ayrıca, uygulamanın ana ayırt edici özelliği olarak, kod parçacıklarını analiz etmek ve yönetimi kolaylaştırmak için LLM (Llama 3) yapay zekasını projemize chatbot olacak şekilde entegre ettim.", 
        link: "https://github.com/asmss/SnippetKRBLT", 
        type: "Github", 
        img: "/image/code-icon-png-0.jpg",
        tags: ["React Native", "Node.js", "Express.js", "MongoDB Atlas", "Llama 3","Expo"]
      },
      { 
        title: "Device Manager", 
        category: "mobile",
        desc: "Flutter ile geliştirilmiş olup yazdığım Android Native (java) kodlarını entegre ettiğim bir mobil uygulamadır. Uygulama; cihazın parlaklık, ses, titreşim ve batarya gibi donanımsal özelliklerini MethodChannel aracılığıyla kontrol eder. Riverpood ile state management sağlanmıştır. Github kodlarına ve uygulama arayüzüne ulaşmak için tıklayın.", 
        link: "https://github.com/asmss/DeviceManager", 
        type: "Github", 
        img: "/image/default-project.png",
        tags: ["Flutter", "Android Native", "Java", "MethodChannel","Riverpod"]
      }
    ]
  },
 en: {
    role: "Computer Engineer",

    aboutTitle: "About Me",
    aboutText:
      "I am Asım Karabulut, a 4th-year Computer Engineering student at Konya Technical University. I am actively improving myself in mobile application development, back-end programming, and data science. In addition, I have a strong interest in artificial intelligence and closely follow developments in this field. With the goal of becoming a competent software developer, I move forward in a disciplined and determined manner. By strengthening my technical skills through both academic and personal projects, I aim to become an engineer who creates real value in the software industry.",

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

    formName: "Your Name",
    formEmail: "Your Email",
    formMsg: "Your Message",
    formBtn: "Send",

    projects: [
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
        title: "KimHaklı",
        category: "web",
        desc:
          "A small and practical mini survey application. I implemented session-based authentication and used Firebase Firestore as the database. The backend was developed with Node.js and Express.js, tested with Postman, and deployed using Render.",
        link: "https://www.kimhakli.site/",
        type: "Website",
        img: "/image/default-project.png",
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
        title: "SnippetKRBLT",
        category: "mobile",
        desc:
          "A mobile-focused version of the SnippetKRBLT project, offering the same AI-powered code snippet management features through a React Native interface.",
        link: "https://github.com/asmss/SnippetKRBLT",
        type: "Github",
        img: "/image/code-icon-png-0.jpg",
        tags: ["React Native", "Node.js", "Express.js", "MongoDB Atlas", "Llama 3","Expo"]
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
    ]
  }
};