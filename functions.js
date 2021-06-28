 function hide(id) {
    document.getElementById(id).style.display='none';
 }
 function show(id) {
    document.getElementById(id).style.display='block';
 }
 function hideAllPages() {
    var pages = Array.from(document.getElementsByClassName('page'));
    pages.forEach(function(page){
        hide(page.id);

    });
   /* var pageIds=["home", "skills", "projects", "languages"];
    pageIds.forEach(function(pageId, index){
        hide(pageId);
    });*/
 }
function showPage(id) {
    hideAllPages();
    show(id);
}

show("home");
