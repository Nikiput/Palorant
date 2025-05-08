//Agent Detail
const skillData = [
    {
        video : '../../1_image/agents/Sage/HealingOrb.mp4',
        title : 'Life Bloom',
        description :
            "Sawi channels healing energy in a small radius, gradually restoring health to allies within the zone. This ability affects multiple teammates but requires them to stay inside the area.",
    },

    {
        video : '../../1_image/agents/Sage/SlowOrb.mp4',
        title : 'Binding Mist',
        description :
            "Sawi conjures a mystical mist that expands over an area, drastically slowing enemy movement and muffling footsteps. The mist is semi-transparent, reducing vision within its radius.",
    },    
    
    {
        video : '../../1_image/agents/Sage/Resurrection.mp4',
        title : 'Spirit Rebirth',
        description :
            "Sawi channels her energy to bring a fallen ally back into battle. The revived teammate reawakens with a protective shield that absorbs one fatal shot before breaking.",
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