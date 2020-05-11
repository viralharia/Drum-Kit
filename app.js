if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', domLoaded);
}else{
    domLoaded();
}

function domLoaded(){
    console.log("dom ready");
    
    const keys = Array.from(document.querySelectorAll(`.key`));
    //console.log(keys);
    keys.forEach(key => key.addEventListener('transitionend',removeTransition));

    window.addEventListener('keydown', playSound);
}

function playSound(e){  

    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(!audio) return;

    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();

}

function removeTransition(e){
    //console.log(e);
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}