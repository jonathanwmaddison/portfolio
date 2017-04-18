/*
*/

var ResumeData = {
    addJob: function(title, organization, date, summary, responsibilities, specialProjects){
        var job = {
            title: title,
            organization: organization,
            date: date,
            summary: summary,
            responsibilities: responsibilities,
            specialProjects: specialProjects
        }
        this.jobs.push(job);
        return job
    },
    addEducation: function(title, date, organization, description, awards){
        var ed = {
            title: title,
            date: date,
            organization: organization,
            description: description,
            awards: awards,
        }
        this.education.push(ed)
        return ed;
    },
    jobs: [],
    education: []
}
///JOBS
var freeCodeCamp = ResumeData.addJob(
    "Self-Directed Learner",
    "freeCodeCamp",
    "Sept 2016 - Present",
    "I am following freeCodeCamp's model to become a full stack software engineer. I am also involved in a cohort of other learners organized by the freeCodeCamp community to facilitate pair-programming, team projects and a community-oriented learning environment.",
    [
        "Completing a project based curriculum that requires a mastery of the fundamentals of full stack software engineering.",
        "Maintaining a clear direction, focus, and discipline to achieve personal mastery of a new skillset.",
        "Networking with other learners to build cooperative, engaging and rich learning environments.",
    ]
)
var programManager = ResumeData.addJob(
    "Way2Go Program Manager",
    "Cornell Cooperative Extension",
    "2013-2016",
    "After a year at Cornell Extension I was promoted to the leadership position of Way2Go, a transportation education and outreach program. I managed a team of community educators that led programs designed to address people's transportaiton needs in Tompkins County. Under my leadership, I expanded Way2Go regionally and supported a sister program in Utica, NY, I grew the biannual Streets Alive event by building partnerships and event sponsors, and recieved over $200K in new grants to support innovative programming",
    [
        "Program direction and strategy for the Way2Go program through synthesizing input from community outreach with residents, local officials, and other partners",
        "Recruit, hire, support and supervise a team of community educators and interns who are implementing programs",
        "Secure funding to achieve Way2Go's Strategic Goals including over $100 thousand in funding for new progams",
        "Oversee administrative tasks including reporting, budgeting, and grant wrtiing"
    ]
)
var travelTraining = ResumeData.addJob(
   "Way2Go Travel Training Coordinator",
   "Cornell Cooperative Extension",
   "2012-2013",
   "I was hired at Way2Go to develop and implement programs to address the needs of people with disabilities, older adults, and people with limited english proficiency. I built a network of stakeholders to identify travel training needs, built a train the trainer program, and lead how-to workshops for community members",
   [
        "Coordinated three workshops for front line staff and parents to educate them on travel training techniques resulting in over 30 individuals with capacity to conduct travel training in their community.",
        "Designed and implemented a bus buddy pilot program that operated in 2012-2013 that engaged older adult volunteers to help other older adults use the local transit system.",
        "Conducted outreach with more than two dozen agencies that provide service to people with disabilities, older adults, or people with limited English proficiency that helped increase collaboration and community coordination around serving the transportation needs of these audiences."

]
)
var ameriCorps = ResumeData.addJob(
    "AmeriCorps Disaster Prepardness Educator",
    "American Red Cross/AmeriCorps",
    "2011-2012",
    "After graduate school I served as an AmeriCorps volunteer with the American Red Cross. I was hired to coordinate a disaster preparedness education program in a three county region in upstate New York, right after major floods hit the region. I conducted disaster preparedness workshops, built relationships with program partners, recruited volunteers, and represented the American Red Cross at community events"
)

var researcher = ResumeData.addJob(
    "Graduate Research Assistant",
    "UVM Transportation Research Center",
    "2009-2011",
    "When I was studying for my Master of Public Administration, I was also funded as a graduate research assistant at the Transportation Research Center. My research advisor, Richard Watts, and I had a research interest in how the media reports on transportation issues. We published several papers on how the media reports on vehicle emissions which also contributed to my Masters Thesis."
)

//EDUCATION
var codeCampEducation = ResumeData.addEducation(
    "freeCodeCamp Full Stack Certification",
    "2016 to Present",
    "freeCodeCamp",
    "I am learning full stack software engineering with a focus on javascript. I have completed the full stack certification and am currently working through Data Visualization, and Back End Certification programs.",
    "Thesis: The Social Construction and Framing of Tailpipe Emissions in the Media. /n Honors: Transportation Research Center Student of the Year 2011"
)
var MPA = ResumeData.addEducation(
    "Masters of Public Administration",
    "2009-2011",
    "University of Vermont",
    "The Masters of Public Administration Program provided me with theoretical and practical foundations of public administration focusing on the complexity of governance systems and the democratic, collaborative traditions. The curriculum focused on a range of areas to prepare dynamic leaders in public and not-profit work: public budgeting, policy analysis, sustainable transportation systems, governance, and public policy.",
    ""
)
var CDAE = ResumeData.addEducation(
    "B.S. Community and International Development",
    "2007-2009",
    "University of Vermont",
    "The Community and International Development Program prepared me to be a dynamic leader through a rigorous service learning based curiculum. I learned project management, team leadership, economics, research methods, statistics and more.",
    "Honors: Summa Cum Laude (top 1%), Departmental and College Honors for ‘Academic Excellence and Professional Potential’, Dean’s List (every semester)"
)
module.exports = ResumeData;
