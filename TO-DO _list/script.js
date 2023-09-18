let input = document.getElementById('inputfield')
let listcontainer= document.getElementById('tasklist')
let button = document.getElementById('btn1')
console.log(button.innerHTML)

console.log(listcontainer.innerHTML)



button.addEventListener('click', function add(){
if(input.value==''){
    alert('add some task')
}
else{
    let li = document.createElement("LI")
    li.innerHTML=input.value
    listcontainer.appendChild(li)
    let span = document.createElement("SPAN")
    span.innerHTML="\u00d7"
    console.log(span)
    li.appendChild(span)
}


console.log("recentaly added task is "+ input.value)
input.value = ""
savedata()

} ) 


listcontainer.addEventListener('click',function (d){
 if(d.target.tagName==="LI"){
    d.target.classList.toggle("completed")
    console.log("clicked on list element")
    savedata()
 }

 else if(d.target.tagName==="SPAN"){
    d.target.parentElement.remove()
    console.log("you clicked on span")
    savedata()
 }

},false)

function savedata(){
    localStorage.setItem("data",listcontainer.innerHTML)
}

function showtask(){
    listcontainer.innerHTML = localStorage.getItem("data")
}

showtask()