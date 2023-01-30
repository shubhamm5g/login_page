let fname=[]
let display=document.getElementById("display");
 let users_name=document.getElementById("user_name");
let submit=document.getElementById("submit");
let passport=document.getElementById('passport')
 submit.addEventListener("click",function(){
    if (users_name==="users" && passport==="123"){
        alert("successfully login")
    }
    else{
        alert("Invalid username and passport")
    }
 })

