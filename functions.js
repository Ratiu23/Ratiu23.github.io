 function hide(id) {
    document.getElementById(id).style.display='none';
 }
 function show(id) {
    const page=document.getElementById(id);
    if (page) {
    document.getElementById(id).style.display='block';
    highlight(page);
    }
    const oldLINK= document.querySelector("a[data-page].active");
    if (oldLINK)
    oldLINK.classList.remove("active");
    const link=document.querySelector(`a[data-page= ${id} ]`);
    link.classList.add("active");
 }
 function highlight(el) {
  //var oldBorderColor = el.style.borderColor;
  //console.warn('oldBorderColor %o', oldBorderColor)
  el.style.borderColor = '#00df00';
  setTimeout(() => {
    el.style.borderColor = '#55df44';
  }, 100);
  setTimeout( () => {
    el.style.borderColor = '#99df88';
  }, 200);
  setTimeout( () => {
    el.style.borderColor = '';
  }, 300);
}
 function hideAllPages() {
    const pages = Array.from(document.getElementsByClassName('page'));
    pages.forEach((page) => {
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


document.querySelector('#top-menu-bar').addEventListener("click", (e) => {
  if (e.target.matches("a")) {
    const id=e.target.getAttribute('data-page');
    showPage(id);
    highlight(e.target);
  }
})


window.skills= [];

function showSkills(skills){
  const skillsHtml= skills.map((skill) => {
    const favorit =skill.favorit ? 'class="favorit"':'';
    const endorsements =skill.endorsements > 5 ? `<span>(${skill.endorsements})</span>` : ``;
    return `<li ${favorit}>${skill.name} ${endorsements}</li>`;
  }).join('');

  document.querySelector("#skills ul").innerHTML= skillsHtml;

}

function sortSkillsByName(a, b) {

  const aName= a.name.toUpperCase();
  const bName= b.name.toUpperCase();
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

fetch("data/skills.json").then((response) => {
  
  return response.json();
}).then((skills) => {
  skills.sort(sortSkillsByEndoesements);
  window.skills = skills;
  showSkills(skills);
  
})