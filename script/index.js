const homePage = document.getElementById("home");
const aboutPage = document.getElementById("about");
const skillsPage = document.getElementById("skills");
const contactPage = document.getElementById("contact");

function showPage(pageToShow) {
    const pages = document.querySelectorAll('.page');
    document.getElementById(pageToShow).style.display = 'block';  // Show selected page
}
aboutPage.addEventListener('click',function(){
    window.location.href = 'About.html'; 
});
skillsPage.addEventListener('click', function() {
    window.location.href = 'Skills.html'; // Redirect to Skills page
});

contactPage.addEventListener('click', function() {
    window.location.href = 'Contact.html'; // Redirect to Contact page
});