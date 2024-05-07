let generate= document.getElementById("genbtn");
let copybtn= document.getElementById("copy");
let passArea=document.getElementById("pass");

let upercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercase="abcdefghijklmnopqrstuvwxyz"
let numbers = "12345678";
let symbols = "~!@#$%^&*|\?.,";

let result = upercase + lowercase + numbers + symbols;
generate.addEventListener(("click") , () =>{
    let password="";
    password += upercase[ Math.floor(Math.random() * upercase.length)];   
    password += lowercase[ Math.floor(Math.random() * lowercase.length)];   
    password += numbers[ Math.floor(Math.random() * numbers.length)];   
    password += symbols[ Math.floor(Math.random() * symbols.length)];
    
    password += result[ Math.floor(Math.random() * result.length)];

    passArea.value=password;
})

copybtn.addEventListener(('click') , () => {
    passArea.select();
    document.execCommand("copy");
})