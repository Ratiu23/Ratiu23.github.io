 function hide(id) {
    document.getElementById(id).style.display='none';
 }
 function show(id) {
    var page=document.getElementById(id);
    if (page) {
    document.getElementById(id).style.display='block';
    highlight(page);
    }
    var oldLINK= document.querySelector("a[data-page].active");
    if (oldLINK)
    oldLINK.classList.remove("active");
    var link=document.querySelector(`a[data-page= ${id} ]`);
    link.classList.add("active");
 }
 function highlight(el) {
  //var oldBorderColor = el.style.borderColor;
  //console.warn('oldBorderColor %o', oldBorderColor)
  el.style.borderColor = '#00df00';
  setTimeout(function () {
    el.style.borderColor = '#55df44';
  }, 100);
  setTimeout(function () {
    el.style.borderColor = '#99df88';
  }, 200);
  setTimeout(function () {
    el.style.borderColor = '';
  }, 300);
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

show("skills");


document.querySelector('#top-menu-bar').addEventListener("click", function(e){
  if (e.target.matches("a")) {
    var id=e.target.getAttribute('data-page');
    showPage(id);
    highlight(e.target);
  }
})


var skills= [];

function showSkills(skills){
  var skillsHtml= skills.map(function(skill){
    var favorit =skill.favorit ? 'class="favorit"':'';
    var endorsements =skill.endorsements > 5 ? `<span>(${skill.endorsements})</span>` : ``;
    return `<li ${favorit}>${skill.name} ${endorsements}</li>`;
  }).join('');

  document.querySelector("#skills ul").innerHTML= skillsHtml;

}

function sortSkillsByName(a, b) {

  var aName= a.name.toUpperCase();
  var bName= b.name.toUpperCase();
  if (aName < bName) {
    return -1;
  }
  if (aName > bName) {
    return 1;
  }
  return 0;
};


function sortSkillsByEndoesements(a, b) {
  console.info(a.name, b.name, a.endorsements, b.endorsements);
  return b.endorsements - a.endorsements;
}

fetch("data/skills.json").then(function(response) {
  
  return response.json();
}).then(function(skills){
  skills.sort(sortSkillsByEndoesements);
  window.skills = skills;
  showSkills(skills);
  
})