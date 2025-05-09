//Agents Filtered
const expData = [
    {
        exp : "",
    },
    {
        exp : "Tactictor specialize in disrupting enemy positions and setting up fights in their team’s favor. Whether through scouting, stunning, or controlling space, they help coordinate attacks and ensure teammates enter engagements with an advantage.",
    },
    {
        exp : "Guardians are the defensive backbone of any team, focused on securing key areas, supporting allies, and denying enemy advances. With traps, barriers, and healing abilities, they maintain control over the battlefield and ensure their team stays in the fight.",
    },
    {
        exp : "Strikers are frontline combatants who thrive in aggressive engagements. With abilities designed for self-sufficiency, they excel in securing eliminations and pushing forward. A skilled Striker can create openings for their team with pure firepower and mobility.",
    },
];

const explanations = document.getElementById('explanation');
const filterButtons = document.querySelectorAll(".filter-buttons-desktop button");
const dropdown = document.querySelector(".filter-buttons-mobile");
const filterCard = document.querySelectorAll(".card-agent");

const filterCards = (selectedName) => {
    filterButtons.forEach(btn => {
        btn.classList.remove("active");
        if (btn.dataset.name === selectedName) {
            btn.classList.add("active");
        }
    });

    filterCard.forEach(card => {
        card.classList.add("hide");
        if (card.dataset.name === selectedName || selectedName === "all") {
            card.classList.remove("hide");
        }
    });

    explanations.classList.remove("show");
    explanations.innerText = expData[0].exp;

    if (selectedName === "tactictor") {
        explanations.innerText = expData[1].exp;
        explanations.classList.add("show");
    } else if (selectedName === "guardian") {
        explanations.innerText = expData[2].exp;
        explanations.classList.add("show");
    } else if (selectedName === "striker") {
        explanations.innerText = expData[3].exp;
        explanations.classList.add("show");
    }
};

// Desktop
filterButtons.forEach(button => {
    button.addEventListener("click", e => {
        filterCards(e.target.dataset.name);
    });
});

// Mobile
dropdown.addEventListener("change", e => {
    filterCards(e.target.value);
});
