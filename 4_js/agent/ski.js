//Agent Detail
const skillData = [
    {
        video : '../../1_image/agents/Skye/GuildingLight.mp4',
        title : 'Pack Howl',
        description :
            "Releases a spectral wolf that automatically moves forward, marking enemies with an echo pulse if they’re in its path. Marked enemies are briefly revealed to Ski and her team.",
    },

    {
        video : '../../1_image/agents/Skye/Seekers.mp4',
        title : 'Primal Hunt',
        description :
            "Summons a massive spectral beast that automatically locks onto the nearest enemy. Once it reaches its target, it lets out a deafening Ski, stunning and fully revealing them for a short duration.",
    },    
    
    {
        video : '../../1_image/agents/Skye/Trailblazer.mp4',
        title : 'TANGLE TRAP',
        description :
            "Deploys thorned vines in a targeted area, slowing and rooting enemies caught in them. The trap remains active for a short time, forcing enemies to reposition.",
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