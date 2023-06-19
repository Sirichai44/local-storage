const setting = document.getElementById('setting');
const text = document.querySelector('p');
const resetBtn = document.getElementById('reset');
const body = document.querySelector('body');

console.log(body);
setting.addEventListener('change',()=>{
    localStorage.setItem("night-mode",setting.checked)
    // console.log(setting.checked);
    loadTheme();
});
resetBtn.addEventListener('click',()=>{
    localStorage.clear();
    loadTheme();
});
function loadTheme(){
    const status = JSON.parse(localStorage.getItem("night-mode"))
    // console.log(typeof(status));
    setting.checked = status;
    if(setting.checked){
        text.innerText = "Dark Mode";
        body.style.backgroundColor = "black"
        body.style.color = "white"
        body.style.transition = "1s"
    }else{
        text.innerText = "Light Mode";
        body.style.backgroundColor = "white"
        body.style.color = "black"
        body.style.transition = "1s"
    }
}

loadTheme();