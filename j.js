var istatus=document.querySelector("h5")
var add=document.querySelector("ADD")
var istatus1=document.getElementById("ADD")
var removefriend=document.querySelector("remove")

ADD.addEventListener("click",function(){
    istatus.innerHTML="FRIENDS"
    istatus.style.color= "green"
    istatus1.innerHTML="SENT"
})
remove.addEventListener("click",function(){
    istatus.innerHTML="stranger"
    istatus.style.color="red"
    istatus1.innerHTML="ADD FRIEND"

})