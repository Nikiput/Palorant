//Agent Detail
const skillData = [
    {
        video : '../../1_image/agents/Killjoy/Alarmbot.mp4',
        title : 'WatchDog',
        description :
            "Killsad deploys a small robotic sentry that lurks in stealth mode until an enemy enters its range. When triggered, the bot dashes toward the target, applying a weaken effect that reduces their armor and damage output for a short time..",
    },

    {
        video : '../../1_image/agents/Killjoy/Nanoswarm.mp4',
        title : 'Nano Swarm',
        description :
            "Killsad throws an electrified device that attaches to surfaces. When activated, it releases a grid of shocking pulses in a small area, stunning and dealing gradual damage to enemies caught inside.",
    },    
    
    {
        video : '../../1_image/agents/Killjoy/Turret.mp4',
        title : 'Turret',
        description :
            "Killsad deploys a stationary turret that automatically fires at enemies in its range. Sentry Core deals constant chip damage and applies a slight movement slow to tagged enemies, making it harder for them to escape.",
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