const projects = {
  boycottedProductChecker: {
    title: "Boycotted Product Checker",
    description: "A tool to check if a product is on the Israel boycott list and support ethical choices by avoiding Israeli products.",
    link: "https://ayanhabib67.github.io/Boycotted-Product-Checker/", 
    image: ""  
  },
  bookmarkManager: {
  title: "Bookmark Manager",
  description: "A simple tool to manage your bookmarks with the help of localStorage. Users can add, remove, and organize their favorite links.",
  link: "https://ayanhabib67.github.io/Bookmark-Manager/",
  image: ""
},
  addCurrencyConverter: {
  title: "Currency Converter",
  description: "A tool to convert between various currencies using real-time exchange rates fetched from an API.",
  link: "https://ayanhabib67.github.io/Currency-Converter/",
  image: ""
},


  weatherAPIFetch: {
  title: "Weather API Fetch",
  description: "A simple tool to fetch and display real-time weather information using an external API based on user input.",
  link: "https://ayanhabib67.github.io/Weather-Forecast/", 
  image: ""  
  },
    addToCard: {
      title: "Add-to-Card",
      description: "An interactive shopping cart interface using localStorage.",
      link: "https://ayanhabib67.github.io/Add-to-Card/",
      image: ""
    },
    searchingApp: {
      title: "Searching App",
      description: "A real-time search interface using JavaScript filtering.",
      link: "https://ayanhabib67.github.io/Searching-Car-App/",
      image: "c:\Users\ADMINI~1\AppData\Local\Temp\Rar$DRa8156.14233\Add to Card_page-0002.jpg"
    },
    toDoAppUpdated: {
      title: "To-Do-App-updated",
      description: "A task manager app with edit, delete, and save functionality.",
      link: "https://ayanhabib67.github.io/To-Do-App-updated/",
      image: "https://via.placeholder.com/286x180?text=To-Do-App"
    },
    githubProfileFetcher: {
      title: "GitHub Profile Fetcher",
      description: "Fetch and display GitHub user info via GitHub API.",
      link: "https://ayanhabib67.github.io/GitHub-Profile-Fetcher/",
      image: "https://via.placeholder.com/286x180?text=GitHub+Fetcher"
    },
    passwordGenerator: {
      title: "Password Generator",
      description: "A secure password generator with customizable options.",
      link: "https://ayanhabib67.github.io/password-generator/",
      image: "https://via.placeholder.com/286x180?text=Password+Generator"
    },
    postApp: {
        title: "Post App",
        description: "A simple app to create, view, and manage posts.",
        link: "https://ayanhabib67.github.io/post-App/",
        image: "https://via.placeholder.com/286x180?text=Post+App"
      },
      StopWatch: {
        title: "Stop-Watch",
        description: "A simple and responsive stopwatch web app built with HTML, CSS, and JavaScript. It features start, stop, and reset functionality, making it perfect for timing events or workouts with precision.",
        link: "https://ayanhabib67.github.io/Stop-Watch/",
        image: ""
      }
      
  };
  
  
  
  let caards = document.getElementById("cards");
  

caards.innerHTML += Object.values(projects).map(item => `
    <div class="col-md-4 mb-4">
      <div class="card h-100">
        
        <div class="card-body d-flex flex-column">
          <h1 class="card-title">${item.title}</h1>
          <p class="card-text">Description : ${item.description}</p>
         <button class="btn custom-btn" onclick="window.open('${item.link}', '_blank')">Open Project</button>
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
          <div class="card h-100">
            
            <div class="card-body d-flex flex-column">
              <h1 class="card-title">${item.title}</h1>
              <p class="card-text">Description : ${item.description}</p>
             <button class="btn custom-btn" onclick="window.open('${item.link}', '_blank')">Open Project</button>
            </div>
          </div>
        </div>
      `).join('');





window.onload = function() {
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

