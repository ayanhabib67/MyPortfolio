// const projects = {
//   boycottedProductChecker: {
  const projects = {
    boycottedProductChecker: {
      title: "Boycotted Product Checker",
      description: "Identify products linked to Israeli companies and make ethical shopping decisions with this intuitive boycott checker.",
      link: "https://ayanhabib67.github.io/Boycotted-Product-Checker/",
    },
    addToCard: {
      title: "Add-to-Card",
      description: "A sleek, interactive shopping cart system that leverages localStorage to retain and manage your selected items with ease.",
      link: "https://ayanhabib67.github.io/Add-to-Card/",
    },
    searchingApp: {
      title: "Searching App",
      description: "An instant, responsive search tool that dynamically filters content as you type — ideal for product lists and catalogs.",
      link: "https://ayanhabib67.github.io/Searching-Car-App/",
    },
    toDoAppUpdated: {
      title: "To-Do App (Updated)",
      description: "A powerful task management tool with full CRUD operations, designed for productivity and persistent storage.",
      link: "https://ayanhabib67.github.io/To-Do-App-updated/",
    },
    githubProfileFetcher: {
      title: "GitHub Profile Fetcher",
      description: "Search and display GitHub user profiles in real-time using GitHub’s API — perfect for developers and recruiters.",
      link: "https://ayanhabib67.github.io/GitHub-Profile-Fetcher/",
    },
    passwordGenerator: {
      title: "Password Generator",
      description: "Generate secure, customizable passwords with advanced options for enhanced online safety and privacy.",
      link: "https://ayanhabib67.github.io/password-generator/",
    },
    postApp: {
      title: "Post App",
      description: "Create, edit, and manage content effortlessly in this lightweight CRUD app — perfect for blogging or notes.",
      link: "https://ayanhabib67.github.io/post-App/",
    },
    StopWatch: {
      title: "Stopwatch",
      description: "A precise and responsive stopwatch app with start, stop, and reset features — ideal for workouts or productivity tracking.",
      link: "https://ayanhabib67.github.io/Stop-Watch/",
    },
    studentAttendancePortal: {
      title: "Student Attendance Portal",
      description: "Track student attendance in real-time with a user-friendly portal that saves records using localStorage.",
      link: "https://ayanhabib67.github.io/Student-Attendance-Portal/",
    },
    expenseTracker: {
      title: "Expense Tracker",
      description: "Monitor income and expenses with ease using this real-time financial tracker with persistent local data storage.",
      link: "https://ayanhabib67.github.io/Expense-Tracker/",
    }
  };
  
    
      

  
  

  
  let caards = document.getElementById("cards");
  

caards.innerHTML += Object.values(projects).map(({ title, description, link }) =>  

  `
   <div class="col-md-4 mb-4">
  <div class="card h-100 bg-dark border-0 shadow-lg rounded-4" style="background: #1e1e1e;">
    <div class="card-body d-flex flex-column justify-content-between p-4">
      <div>
        <h3 class="card-title fw-bold text-neon mb-3">${title}</h3>
        <p class="card-text text-light">
          <strong>Description:</strong> ${description}
        </p>
      </div>
      <button class="custom-btn" onclick="window.open('${link}', '_blank')">
        🚀 Open Project
      </button>
    </div>
  </div>
</div>


  `).join('');
  
  const projectsHtml = {
    preciousburge: {
      title: "Precious Burger",
      description: "An enticing online menu for a gourmet burger restaurant, featuring a variety of beef and chicken burgers, combo meals, and gourmet fries. The interface showcases detailed descriptions and pricing for each item, providing users with an appetizing browsing experience.",
      link: "https://ayanhabib67.github.io/precious-burger/",
      image: ""
    },
    pepsi: {
      title: "Pepsi",
      description: "A sleek promotional landing page for Pepsi, highlighting the latest product drops with engaging visuals and a modern layout. The design emphasizes brand aesthetics and user engagement.",
      link: "https://ayanhabib67.github.io/pepsi/",
      image: ""
    },
    saltnpaper: {
      title: "Salt n Paper",
      description: "An informative website for Salt'n Pepper Restaurants, offering details about various franchise locations, contact information, and online ordering options. The site serves as a comprehensive portal for customers seeking information about the brand's offerings.",
      link: "https://ayanhabib67.github.io/salt-n-paper/",
      image: ""
    }
  };
  
  
  

    let caards1 = document.getElementById("cards1");
  

    caards1.innerHTML += Object.values(projectsHtml).map(item => `
         <div class="col-md-4 mb-4">
  <div class="card h-100 bg-dark border-0 shadow-lg rounded-4" style="background: #1e1e1e;">
    <div class="card-body d-flex flex-column justify-content-between p-4">
      <div>
        <h3 class="card-title fw-bold text-neon mb-3">${item.title}</h3>
        <p class="card-text text-light">
          <strong>Description:</strong> ${item.description}
        </p>
      </div>
      <button class="custom-btn" onclick="window.open('${item.link}', '_blank')">
        🚀 Open Project
      </button>
    </div>
  </div>
</div>
      `).join('');





window.onload =()=> {
  swal({
    title: "Welcome to My Portfolio 👋",
    text: "I'm Ayan Habib — a passionate Front-End Developer. Explore and enjoy the journey!",
    icon: "https://avatars.githubusercontent.com/u/192097471?v=4",
    button: {
      text: "Let's Explore 🚀",
      className: "custom-btn"
    },
    closeOnClickOutside: false
  });
};
