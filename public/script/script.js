import {checkNum, checkAS, checkLet, checkID, checkDateFromId, checkYearFromId } from './universal/check'
import {invalidID, invalidNum} from './universal/validInput'

document.getElementById('saveButton').addEventListener('click',save)
document.getElementById('name').addEventListener('input',invalidNum)
document.getElementById('surname').addEventListener('input',invalidNum)
document.getElementById('id').addEventListener('input',invalidID)

let block = document.createElement('p');
block.setAttribute("id", "block"); 

export function fireAlert(mess) {
    let alert = document.createElement('div');
    let alertTxt = document.createElement('div');
    let alertBtt = document.createElement('button');
    let block = document.querySelector('#block');
    
    alertTxt.innerText=mess;
    alertBtt.innerText="OK";
    alert.setAttribute("id", "alertDiv");
    alertTxt.setAttribute("id", "alertTxt");
    alertBtt.setAttribute("id", "alertBtt");
    alertBtt.setAttribute("type", "button");
    alert.style.display="flex";
    alert.style.justifyContent="center";

    let body = document.querySelector('body');

    body.appendChild(alert);
    alert.appendChild(alertTxt);
    alert.appendChild(alertBtt);

    function alertRemove(){
        alert.remove();
    }

    setTimeout(alertRemove, 4000);
    alertBtt.onclick = alertRemove;
    if(block){
        block.remove();
    }
}

function save(event){
    let form = document.querySelector('form');
    let main = document.querySelector('#main');
    let name = document.getElementById('name').value;
    let surname = document.getElementById('surname').value;
    let email = document.getElementById('email').value;
    let desc = document.getElementById('desc').value;
    let id = document.getElementById('id').value;
    let gender;

    if(id[9]%2==0){
        gender="kobieta";
    }else{
        gender="mężczyzna";
    }
    let date = new Date();
    let fullYear = date.getFullYear();
    let age = fullYear-checkYearFromId(id);

        if(name && surname && email && id && age){
            if(!checkNum(name) && !checkNum(surname) && checkAS(email) && !checkLet(id)){
                if(checkID(id)){
                    block.innerText=`Imie: ${name} 
                                Nazwisko: ${surname} 
                                Wiek: ${age} 
                                E-mail: ${email} 
                                Płeć: ${gender}
                                Pesel: ${id}
                                Data urodzenia: 
                                ${checkDateFromId(id)}
                                Opis: ${desc}`;
                main.appendChild(block);
                }else{
                    fireAlert("Wpowadź poprawny pesel");
                }
            }else{
                fireAlert("Wprowadź poprawne dane");
            }
        }else{
            fireAlert("Wprowadź dane");
        }
    }