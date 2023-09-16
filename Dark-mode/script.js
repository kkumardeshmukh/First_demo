let btn= document.getElementById('btn1')
let dec= document.getElementById('dec')
console.log(btn.innerHTML)

btn.addEventListener('click', function run(){

if(btn.innerHTML=='Dark'){
    document.body.style.backgroundColor="black"
    btn.innerHTML="Light"
    console.log(dec.innerHTML)
    
}
else if(btn.innerHTML=='Light'){
    document.body.style.backgroundColor="white"
    btn.innerHTML="Dark"

}
else{
    alert("button is mulfunctioning")
}

  /* alert('button clicked ')
    document.body.style.backgroundColor="black"
    btn.innerHTML="lights"*/

})