let body=document.getElementsByTagName("body")
let mainMobile=document.getElementById("main-mob")
let mobs=document.querySelectorAll("section img")
let a=document.getElementById("a")

mobs[0].addEventListener("click",function(){
    document.body.style.backgroundColor="#97B1C8"
    mainMobile.src="images/1.png"
})

mobs[1].addEventListener("click",function(){
    document.body.style.backgroundColor="#6E6D68"
    mainMobile.src="images/2.png"
})

mobs[2].addEventListener("click",function(){
    document.body.style.backgroundColor="#EDD9BE"
    mainMobile.src="images/3.png"
})

mobs[3].addEventListener("click",function(){
    document.body.style.backgroundColor="#D12626"
    mainMobile.src="images/4.png"
})


mobs[4].addEventListener("click",function(){
    document.body.style.backgroundColor="black"
    mainMobile.src="images/0.png"
})


