let ytInput = document.getElementById('yt-input');
let ham = document.getElementById('ham-menu');
let links = document.getElementById('mini-menu');

ytInput.addEventListener('keyup',(e)=>{
    if(e.key == "Enter"){
        console.log(ytInput)
        window.open(`https://www.youtube.com/results?search_query=${ytInput.value.replace(' ','+')}`, "_blank");
    }
})

ham.addEventListener('click',()=>{
    links.classList.toggle('active');
})