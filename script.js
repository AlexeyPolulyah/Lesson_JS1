function checking(){
    let password=document.getElementById('password');
    password.value
    let name=document.getElementById('name');
    name.value;
if ( name.value == 'Alexey' ){
    if (password.value == 123456789){
        alert('Правильно!')
    }else{
        alert('Неправильно!')
    }
}else{
    alert('Неправильно!')
}
}