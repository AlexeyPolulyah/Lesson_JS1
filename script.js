var credentials = {
    login: 'admin',
    password: 'qwerty',
};

let password=document.querySelector("#password");
let name1=document.querySelector("#name");

let sost=document.querySelector("#sost");

function checking(){
if ( name1.value == credentials.login && password.value == credentials.password){
        sost.innerText="Congrats!"
        sost.style.color = 'green';
    }else{
        sost.innerText="Error, wrong name or password!" 
        sost.style.color = 'red';
    }
}
