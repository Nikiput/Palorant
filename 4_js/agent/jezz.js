//Agent Detail
const skillData = [
    {
        video : '../../1_image/agents/Jett/Cloudburst.mp4',
        title : 'VORTEX VEIL',
        description :
            "Jez throws a fast-moving wind orb that expands into a swirling vortex on impact, blocking vision and slightly pulling enemies towards its center.",
    },

    {
        video : '../../1_image/agents/Jett/Tailwind.mp4',
        title : 'GALE DASH',
        description :
            "Jez dashes instantly in the direction she's moving, allowing her to reposition or evade danger. If she secures an elimination, the ability refreshes for another quick escape or follow-up attack.",
    },    
    
    {
        video : '../../1_image/agents/Jett/Updraft.mp4',
        title : 'Razor Wind',
        description :
            "Jez performs a sudden aerial flip, launching herself upward while releasing a crescent-shaped wind blade that damages enemies below.",
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