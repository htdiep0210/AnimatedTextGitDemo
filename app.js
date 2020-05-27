function randomRGB(){
    const r = Math.floor(Math.random() *255);
    const r = Math.floor(Math.random() *255);
    const r = Math.floor(Math.random() *255);
    return `rgb${r},${g},${b}`
}

const letters= document.querySelectorAll(.letter);
const intervalId = setInterval(function(){
    for (let letter of letters){
        letter.style.color = randomRGB()
    }
}, 500);