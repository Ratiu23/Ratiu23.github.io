 function hidePage(id) {
    console.info('hide page', id);
    document.getElementById(id).style.display='none';
 }
 function showPage(id) {
    console.info('show page', id);
    document.getElementById(id).style.display='block';
 }
 function hideAllPages() {
    hidePage("home");
    hidePage("skills");
    hidePage("projects");
    hidePage("languages"); 
 }
 function showHome() {
    hideallPages()
    showPage('home');
}
 function showSkills() {
    hideallPages()
    showPage('skills');
}
function showProjects() {
    hideallPages()
    showPage('projects');
}
function showLanguages() {
    hideallPages()
    showPage('languages');
}