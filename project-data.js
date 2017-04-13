function ProjectFinder (id) {

    const projectData =  [
        {
            id: 'rep-finder',
            title: 'Know Your Rep',
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
            image: "/static/images/rep-finder.png"
        },
        {
            id: 'game-of-life',
            title: 'Game Of Life',
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
            projectLink: "https://jonathanwmaddison.github.io/gameoflife/build/index.html",
            image: "/static/images/gameoflife4.gif"
        }
    ]
    return projectData.filter((project) => project.id === id)[0]
}

module.exports = ProjectFinder
