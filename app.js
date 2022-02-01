const skills = document.querySelectorAll('.skill');
const skill_show = document.querySelector('.result');

skills.forEach( skill => {
    skill.addEventListener('change',function(){
        
        let all_data = document.querySelectorAll('.skill:checked');
        

        let skills_arr=[];
        all_data.forEach( data => {
            skills_arr.push(data.value);
        });
        


        let list = '';
        skills_arr.forEach( data => {
            list += `<li>${data}</li>`;
        });

        skill_show.innerHTML = list;
    });
});