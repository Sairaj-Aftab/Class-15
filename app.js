const skill = document.querySelectorAll('.checkbox .skill');
const re_skill = document.querySelector('.checkbox .list-group');

skill.forEach(skills => {
    skills.addEventListener('change', function () {
        let all_data = document.querySelectorAll('.checkbox .skill:checked');
        
        let arr_data = [];

        all_data.forEach(data => {
            arr_data.push(data.value);
        })

        let list = '';
        arr_data.map(data => {
            list += `<li class="list-group-item">${data}</li>`
        })
        re_skill.innerHTML = list;
    })
})

// -------Clock-------------//
const s = document.querySelector('.clock .s');
const m = document.querySelector('.clock .m');
const h = document.querySelector('.clock .h');

setInterval(() => {
    let date = new Date();
    let sec  = date.getSeconds();
    let min  = date.getMinutes();
    let hour = date.getHours();

    s.style.transform = `rotate(${clock(sec, 60)}deg)`;
    m.style.transform = `rotate(${clock(min, 60)}deg)`;
    h.style.transform = `rotate(${clock(hour, 12)}deg)`;
}, 1000);

// ----------Calculator---------------//

