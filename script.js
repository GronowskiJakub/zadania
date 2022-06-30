document.getElementById('saveButton').addEventListener('click',save)
document.getElementById('name').addEventListener('input',invalidNum)
document.getElementById('surname').addEventListener('input',invalidNum)
document.getElementById('id').addEventListener('input',invalidID)

let block = document.createElement('p');
block.setAttribute("id", "block"); 

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

    return year>=date;
}
//
function checkID(id){
        let x = 1*id[0]+3*id[1]+7*id[2]+9*id[3]+1*id[4]+3*id[5]+7*id[6]+9*id[7]+1*id[8]+3*id[9];
        let y = x.toString();
        let z = 10-y.slice(-1);
        return id[10]==z;
}

function checkLen(string){
    let x = 0;
    for(key in string){
        x++;
    }
    return x;
}

function fireAlert(mess) {
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

    let main = document.querySelector('#main');
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


function validBorder(item){
    item.style.border="1px solid black";
    item.style.borderRadius="5px";
}
function invalidBorder(item){
    item.style.border="2px solid red";
    item.style.borderRadius="5px";    
}

function invalidNum(e){
    if(checkNum(e.target.value)){
        invalidBorder(e.target);
    }else{
        validBorder(e.target);
    }
}
function invalidLet(e){
    if(checkLet(e.target.value)){
        invalidBorder(e.target)
    }else{
        validBorder(e.target)
    }
}
function invalidID(e){

    if(checkLen(e.target.value)==11){
        if(!checkLet(e.target.value) && checkID(e.target.value)){
            validBorder(e.target)
        }else{
            invalidBorder(e.target)
        }
    }
}

function checkDateFromId(id){
    let yearB = new Array;
    let birthY = 0;
    let birthM = 0;
    let birthD = 0;

    yearB[1] = id[0];
    yearB[2] = id[1];
    let pom = Number(id[2]);
    let base = 19;
    base = base+(pom/2);
    yearB[0]=base;
    let dif = id[2]+"0";
    birthM = (id[2]+id[3])-dif;
    birthY = yearB[0]+yearB[1]+yearB[2];
    birthD = id[4]+id[5];
    if(birthM<10){
        birthM="0"+birthM;
    }
    if(birthD<10){
        birthD="0"+birthM;
    }
    return birthY+"-"+birthM+"-"+birthD;
}
function checkYearFromId(id){
    let yearB = new Array;
    let birthY = 0;

    yearB[1] = id[0];
    yearB[2] = id[1];
    let pom = Number(id[2]);
    let x = 19;
    x = x+(pom/2);
    yearB[0]=x;
    birthY = yearB[0]+yearB[1]+yearB[2];
    return birthY;
}



function save(event){
    let form = document.querySelector('form');
    let nav = document.querySelector('#nav');
    let name = document.getElementById('name').value;
    let surname = document.getElementById('surname').value;
    //let age = document.getElementById('age').value;
    let email = document.getElementById('email').value;
    let desc = document.getElementById('desc').value;
    //let gender = document.getElementById('gender').value;
    //let birth = document.getElementById('birth').value;
    let id = document.getElementById('id').value;
    let gender;

    if(id[9]%2==0){
        gender="kobieta";
    }else{
        gender="mężczyzna";
    }
    date = new Date();
    fullYear = date.getFullYear();
    age = fullYear-checkYearFromId(id);

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
                nav.appendChild(block);
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