//your code here
const firstName= document.getElementById("first-name")
const secondName= document.getElementById("second-name")
const image= document.getElementById("image")
const profileInfo = document.getElementById("profile-info")
const refreshBtn = document.getElementById("getUser")
//const emailInfo = document.getElementById("email-info")
//const phoneInfo = document.getElementById("phone-info")

let profileData;

function call(){

const data = fetch("https://randomuser.me/api/")
data.then(pro => pro.json())
.then(maindata =>{
    //console.log(maindata)
    firstName.textContent=maindata.results[0].name.first
    secondName.textContent=""+ maindata.results[0].name.last
    image.src=maindata.results[0].picture.large
    profileData = maindata;
})
}

call();

function refresh(){
    call()
    profileInfo.textContent=""
}




function Age(){
    profileInfo.textContent=profileData.results[0].dob.age
}

function Email(){
    profileInfo.textContent=profileData.results[0].email
}

function Phone(){
    profileInfo.textContent=profileData.results[0].phone
}


    
