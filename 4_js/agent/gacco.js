//Agent Detail
const skillData = [
    {
        video : '../../1_image/agents/Gekko/Dizzy.mp4',
        title : 'Bytebug',
        description :
            "Gacco deploys a small flying drone that scans the battlefield. After a short delay, it emits an electromagnetic pulse, briefly distorting enemy vision instead of blinding them. The drone can be picked up and reused after deployment.",
    },

    {
        video : '../../1_image/agents/Gekko/Wingman.mp4',
        title : 'Wingman',
        description :
            "Gacco deploys a small robotic companion that autonomously moves toward a bomb site. Once it reaches the site, it plants the bomb or defuses it if it finds the enemy planted there.",
    },    
    
    {
        video : '../../1_image/agents/Gekko/Thrash.mp4',
        title : 'OVERCLOCK',
        description :
            "Gacco unleashes his most advanced bot, which dashes forward and overloads enemy systems, stunning all affected targets in a small radius. If retrieved within a short window, Overclock can be redeployed once before shutting down.",
    },
];

const video = document.getElementById('video');
const title = document.getElementById('title');
const description = document.getElementById('description');
const skills = document.querySelectorAll('.skill-image .skill');
const videoContainer = document.querySelector('.left-skill-container')

skills.forEach(( skill, key) => {
    skill.addEventListener('click', function(){
        
        let lastActiveskill = document.querySelector('.skill-image .skill.active');
        lastActiveskill.classList.remove('active');
    
        skill.classList.add('active');

        video.src = skillData[key].video;
        // video.load();
        title.innerText = skillData[key].title;
        description.innerText = skillData[key].description;
    })
})