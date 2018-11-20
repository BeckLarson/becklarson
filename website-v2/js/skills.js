let skillList = [];

function skillController() {
    let key = event.target.id;
    let rawSkill = document.getElementById('skillInput').value;
    let skill = rawSkill.trim();
    let skillset = document.getElementById('skillz');
    switch (key) {
        case "add":
            skillset.innerHTML = '';
            if (skillList.indexOf(skill) == -1 && skill !='') {
                skillList.push(skill);
                for (let i = 0; i < skillList.length; i++) {
                    let h6 = document.createElement("h6");
                    h6.setAttribute('class', 'skills')
                    h6.innerText = skillList[i];
                    skillset.appendChild(h6);
                }

            } else {
                for (let i = 0; i < skillList.length; i++) {
                    let h6 = document.createElement("h6");
                    h6.setAttribute('class', 'skills')
                    h6.innerText = skillList[i];
                    skillset.appendChild(h6);
                }
            }
            document.getElementById('skillInput').value = '';
            break;

        case "remove":
            skillset.innerHTML = '';
            let index = (skillList.indexOf(skill));
            if (index > -1) {
                skillList.splice(index, 1);
                for (let i = 0; i < skillList.length; i++) {
                    let h6 = document.createElement("h6");
                    h6.setAttribute('class', 'skills')
                    h6.innerText = skillList[i];
                    skillset.appendChild(h6);
                }

            } else {
                for (let i = 0; i < skillList.length; i++) {
                    let h6 = document.createElement("h6");
                    h6.setAttribute('class', 'skills')
                    h6.innerText = skillList[i];
                    skillset.appendChild(h6);
                }
            }
            document.getElementById('skillInput').value = '';
            break;
    }
}