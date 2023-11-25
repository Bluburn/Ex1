const switchToggle=document.querySelector('input[type="checkbox"]');
const toggleIcon=document.getElementById('toggle-icon');
const nav=document.getElementById('nav');
const image1=document.getElementById('image1')
const image2=document.getElementById('image2')
const image3=document.getElementById('image3')

function switchMode(e){
    if(e.target.checked){
        document.documentElement.setAttribute('data-theme','dark');
        darkmode();
        imageSwitchMode('Dark');
    }else{
        document.documentElement.setAttribute('data-theme','light');
        lightmode();
        imageSwitchMode('Light');
    }
}

function darkmode(){
    toggleIcon.children[0].textContent="Dark-Mode";
    toggleIcon.children[1].classList.replace('fa-sun','fa-moon');
    nav.style.backgroundColor='rgb( 0 0 0 / 60%)';
}

function lightmode(){
    toggleIcon.children[0].textContent="Light-Mode";
    toggleIcon.children[1].classList.replace('fa-moon','fa-sun');
    nav.style.backgroundColor='rgb( 255 255 255 / 60%)';
}

function imageSwitchMode(mode){
    image1.src=`img/undraw_experience_Web-${mode}.svg`;
    image2.src=`img/undraw_select_player_${mode}.svg`;
    image3.src=`img/undraw_freelancer_${mode}.svg`;
}

switchToggle.addEventListener('change',switchMode);