document.getElementById('saveButton').addEventListener('click',save)
document.getElementById('name').addEventListener('input',invalidNum)
document.getElementById('surname').addEventListener('input',invalidNum)
document.getElementById('id').addEventListener('input', invalidLet)

//function checking for any number
function checkNum(string) {
    return /[0-9]/.test(string);
}
//function checking for @ symbol
function checkAS(string){
    for(key in string){
        if(string[key]=="@"){
            return true;
        }
    }
    return false;
}
//function checking for any letter
function checkLet(string){
    return /[a-z]/.test(string);
}
//
function checkDate(date){
    let time = new Date();
    let year = time.getFullYear();

    return year<=date;
}

function invalidNum(e){
    if(checkNum(e.target.value)){
        e.target.style.border="2px red solid";
        e.target.style.borderRadius="1px";
    }else{
        e.target.style.border="1px black solid";
        e.target.style.borderRadius="1px";
    }
}
function invalidLet(e){
    if(checkLet(e.target.value)){
        e.target.style.border="2px red solid";
        e.target.style.borderRadius="1px";
    }else{
        e.target.style.border="1px black solid";
        e.target.style.borderRadius="1px";
    }
}

let block = document.createElement('p');
block.setAttribute("id", "block"); 

function save(event){
    let form = document.querySelector('form');
    let name = document.getElementById('name').value;
    let surname = document.getElementById('surname').value;
    let age = document.getElementById('age').value;
    let email = document.getElementById('email').value;
    let desc = document.getElementById('desc').value;
    let gender = document.getElementById('gender').value;
    let birth = document.getElementById('birth').value;
    let id = document.getElementById('id').value;
        if(name && surname && email){
            if(!checkNum(name) && !checkNum(surname) && checkAS(email) && !checkLet(id)){
                block.innerText=`Imie: ${name} 
                                Nazwisko: ${surname} 
                                Wiek: ${age} 
                                E-mail: ${email} 
                                Opis: ${desc}
                                Płeć: ${gender}
                                Data urodzenia: ${birth}
                                Pesel: ${id}`;
                form.appendChild(block);
            }else{
                alert("Wprowadź poprawne dane");
            }
        }else{
            alert("Wprowadź dane");
        }
    }