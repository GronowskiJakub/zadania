document.getElementById('saveButton').addEventListener('click',save)

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

        if(name && surname && email){
            if(!checkNum(name) && !checkNum(surname) && checkAS(email)){
                block.innerText=`Imie: ${name} 
                                Nazwisko: ${surname} 
                                Wiek: ${age} 
                                E-mail: ${email} 
                                Opis: ${desc}
                                Płeć: ${gender}`;
                form.appendChild(block);
            }else{
                alert("Wprowadź poprawne dane");
            }
        }else{
            alert("Wprowadź dane");
        }
    }