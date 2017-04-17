// current structure
/*
{
    id: "",
    title: "",
    summary: "",
    userStories: [
    
    ],
    tools: [
    
    ],
    tags: [
    
    ],
    image: "",
    github: "",
    webpage: "",
}
*/

var Projects = {

    projectData:  [
        {
            id: 'rep-finder',
            title: 'Know Your Official',
            shortSummary: 'Know your Official is a web app where you can look up your local officials and learn about them through multiple sources.',
            summary: 'This is a personal project that I thought up when I struggled to find out who my elected officials were and what their positions are. I decided to build a simple web app to help address this problem. I used a variety of data sources and public APIs to build the "Know Your Official" web app. I addressed the following user stories:',
            userStories: [
                "I can input my street address and retrieve a list of all of my officials from the national, state to local level.",
                "I can scroll through a simply formatted list of all of the officials and for each official there is a picture, contact information, and a list of their social media accounts",
                "For officials that have twitter accounts,  I can stay on the page while scrolling through their twitter feeds",
                "I can read an official's Wikipedia summary without leaving the page.",
                "I can read through a list of news headlines from news articles that mention the official."
            ],
            tools: [
                "Javascript",
                "jQuery",
                "HTML and CSS",
                "Bootstrap",
                "Google Civic Information for local official data",
                "Twitter API for embedding twitter feeds",
                "NY times API for gathering news stories",
                "Wikipedia's API"
            ],
            tags: ["APIs", "Bootstrap", "jQuery", "HTML", "CSS", "Javascript"],
            image: "/static/images/rep-finder.png",
            webpage: "https://jonathanwmaddison.github.io/rep-finder/",
            github: "https://github.com/jonathanwmaddison/rep-finder"
        },
        {
            id: 'game-of-life',
            title: 'Game Of Life',
            shortSummary: 'The Game of Life is a simulation of a very simple cellular network where each cell lives or dies based on the status of its neighbors.',
            summary: 'The Game of Life is a simulation that I developed as part of freeCodeCamp\'s data visualization certificate. It is a model of a simple system where each lives or dies based on the status of their neighbors. I addressed the following user stories:',
            userStories: [
                "When I first arrive at the game, it will randomly generate a board and start playing",
                "I can start and stop the board, and I can set up the board.",
                "Each time the board changes, I can see how many generations have gone by."
            ],
            tools: [
                "Javascript",
                "React",
                "HTML and CSS",
                "Webpack",
            ],
            tags: ["Javascript", "HTML", "CSS", "React", "Webpack", "npm"],
            webpage: "https://jonathanwmaddison.github.io/gameoflife/build/index.html",
            image: "/static/images/gameoflife4.gif",
            github: "https://github.com/jonathanwmaddison/gameoflife"
        },
        {
            id: "rising-circles",
            title: "Rising Circles: Drum Machine",
            summary: "Rising Circles started off as a clone of another web app called patatap and evolved into a drum machine. Two libraries were helpful in building this project, Howler JS and Paper JS.",
            shortSummary: 'Rising Circles is a drum machine where you can make colorful beats',
            userStories: ["I can create a simple drum beat by pressing keys on my keyboard", "I can change the tempo of the beat", "I can change the soundbank and try out new sounds", "I can pause and rest the drum machine"],
            tools: ["Paper JS", "Howler", "Javascript", "CSS", "HTML"],
            tags: ["Javascript", "HTML", "CSS", "Javascript Libraries"],
            image: "/static/images/rising-circles.png",
            github: "https://github.com/jonathanwmaddison/rising-circles",
            webpage: "https://jonathanwmaddison.github.io/rising-circles",
        },
        {
            id: "dungeon-crawler",
            title: "Pixel Labryinth",
            shortSummary: 'Pixel Labryinth is a randomly generated dungeon crawler I built for freeCodeCamp',
            summary: "I built Pixel Labryinth as part of freeCodeCamp's challenge. The goal of Pixel Labryinth is to explore and survive a randomly generated labryinth. The most interesting aspect of this project was writing the map generating algorithm. Generating a random map is easy, but making the map feel maze took some more creativity. React was a useful tool here because it allowed to manage state in one class, and then pass down updates into rendering components",
            userStories: [
                "I have health, a level, and a weapon",
                "I can move through the map discovering items",
                "All the items, rooms, corridors on the map are arranged randomly",
                "I can move anywhere within the map's boundaries, but I can't move through an enemy until I've beaten it",
                "Much of the map is hidden, but when I take a step all spaced with in a certain area are revealed",
                "When I fight an enemy, we take turns damaging each other until one of us loses. My damage is determined by my level and weapon.",
                "When I beat an enemy, the enemy goes away and I get experience that can increase my level"
            ],
            tools: ["React", "Webpack testing and building the project", "Javascript (ES6)", "npm for package management", "HTML", "CSS"],
            tags: ["React", "Webpack", "Javascript", "npm"],
            image:  "/static/images/pixel-labryinth.png",
            github: "https://github.com/jonathanwmaddison/Dungeon-Crawler",
            webpage: "https://jonathanwmaddison.github.io/Dungeon-Crawler/build/index.html",
        },
        {
            id: "simon",
            title: "Simon",
            shortSummary: "Simon is a early pattern matching/rhythm game from the 80's. This web app was built as part of freeCodeCamp's Front End Certification Program",
            summary: "Simon is a early pattern matching/rhythm game from the 80's. This web app was built as part of freeCodeCamp's Front End Certification Program",
            userStories: [
            
            ],
            tools: [
                "Javascript",
                "jQuery",
                "HTML & CSS",
                "Bootstrap"
            ],
            tags: [
                "Javascript",
                "jQuery"
            ],
            image: "/static/images/simon.png",
            github: "https://github.com/jonathanwmaddison/Simon-game",
            webpage: "https://jonathanwmaddison.github.io/Simon-game/index.html",
        },
        
        ],
        findProject: function (id) {
            return this.projectData.filter((project)=> project.id === id)[0]
        }
}
/*
Projects I'm not including
{
            id: "recipe-box",
            title: "Recipe Box",
            summary: "A very simple app for keeping track of recipes and ingredients, built with React",
            userStories: [
            
            ],
            tools: [
            
            ],
            tags: [
                "React",
                "Javascript",
            ],
            image: "",
            github: "https://github.com/jonathanwmaddison/recipe-box",
            webpage: "https://jonathanwmaddison.github.io/recipe-box/build/index.html",
        }
*/
module.exports = Projects
