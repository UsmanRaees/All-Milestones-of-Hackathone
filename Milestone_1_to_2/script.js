const toggleButton = document.getElementById('toggle-skills');
const skills = document.getElementById('skill-section');
toggleButton.addEventListener('click', function () {
    if (skills.style.display === "none") {
        skills.style.display = "block";
    }
    else {
        skills.style.display = "none";
    }
});
