

function clock(time, rot) {
   return (360 * time) / rot
}

// ------Calculator---------//

let arr = [];
function cal(val) {
    
    arr.push(val);
    document.querySelector('.cal .top').innerHTML = arr.join('');
    document.querySelector('.cal .ans').innerHTML = 0;
}

function all_clear() {
    arr = [];
    document.querySelector('.cal .top').innerHTML = 0;
    document.querySelector('.cal .ans').innerHTML = '';
}

function back() {
    arr.pop();
    document.querySelector('.cal .top').innerHTML = arr.join('');
}

function ans() {
    let stt = arr.join('');
    document.querySelector('.cal .ans').innerHTML = eval(stt);
}