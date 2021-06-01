const myName = 'Alena Miadzvedskaya'
const today = new Date;
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');

copyright.innerHTML = `&copy; ${myName} ${thisYear} `
footer.appendChild(copyright);

const skills = [
    'JavaScript', 
    'HTML', 
    'CSS', 
    'Data Analysys', 
    'Data Management',
    'Analitical Skills', 
    'Engineering', 
    'Reserch'
];
const skillsSection = document.getElementById('skills');
const skillsList = skillsSection.querySelector('ul');
for(let i = 0; i < skills.length; i++) {
    let skill = document.createElement('li');
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}
const listItems = skillsSection.getElementsByTagName('li');
for(let i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener('mouseover', () => {
       listItems[i].textContent = listItems[i].textContent.toUpperCase()
    })
    listItems[i].addEventListener('mouseout', () => {
       listItems[i].textContent = skills[i];
    })
}

console.log(skillsSection)
console.log(listItems)