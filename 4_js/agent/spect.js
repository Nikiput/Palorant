//Agent Detail
const skillData = [
    {
        video : '../../1_image/agents/Cypher/Cage.mp4',
        title : 'Smoke Coil',
        description :
            "Spect throws a device that, when activated, releases a cloud of dense smoke in a small radius. Enemies passing through the smoke are briefly slowed, and their vision is heavily obstructed.",
    },

    {
        video : '../../1_image/agents/Cypher/NeuralTheft.mp4',
        title : 'CAMERA LENS',
        description :
            "Spect places a small, deployable camera that grants him a live view of its surroundings. He can remotely control it to scan for enemies, marking any in its line of sight. The camera can be destroyed if not protected.",
    },    
    
    {
        video : '../../1_image/agents/Cypher/Spycam.mp4',
        title : 'SHADOW’S GRASP',
        description :
            "Spect activates a powerful ability that temporarily disables enemy vision and movement within a large radius, revealing all enemies caught in the area. This ability also provides intel on their location.",
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