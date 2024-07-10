const bars = document.getElementById('bars');
const close = document.getElementById('close');
const topMenu = document.getElementById('topMenu');
bars.addEventListener('click',()=>{
    bars.style='display:none';
    close.style='display:block';
    topMenu.style='display:block';
})
close.addEventListener('click',()=>{
    bars.style='display:block';
    close.style='display:none';
    topMenu.style='display:none';
})