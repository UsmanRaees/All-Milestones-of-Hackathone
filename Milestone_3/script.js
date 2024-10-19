// Get referrences to the form and display area
const form = document.getElementById('resume-form');
const resumeDisplayElement = document.getElementById('resume-display');
//Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent page reload
    //Collect input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const education = document.getElementById('education').value;
    const experience = document.getElementById('experience').value;
    const skills = document.getElementById('skills').value;
    //Generate the resume content dynamically
    const resumeHtml = "\n    \n    <h2 style='text-align: center;'><b>Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b>".concat(name, "</p>\n    <p><b>Email:</b>").concat(email, "</p>\n    <p><b>Phone:</b>").concat(phone, "</p>\n\n    <h3>Education</h3>\n    <p>").concat(education, "</p>\n\n    <h3>Experience</h3>\n    <p>").concat(experience, "</p>\n\n    <h3>Skills</h3>\n    <p>").concat(skills, "</p>\n    ");
    //Display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHtml;
    }
    else {
        console.log('The resume display element is missing');
    }
});
