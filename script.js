document.getElementById('saveButton').addEventListener('click',save)
document.getElementById('name').addEventListener('input',invalidNum)
document.getElementById('surname').addEventListener('input',invalidNum)
document.getElementById('id').addEventListener('input',invalidID)
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
    main.appendChild(alert);
    alert.appendChild(alertTxt);
    alert.appendChild(alertBtt);

    function alertRemove(){
        alert.remove();
    }

    setTimeout(alertRemove, 4000);
    alertBtt.onclick = alertRemove;
    block.remove();
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
function invalidID(e){
    if(checkLen(e.target.value)==11){
        if(checkID(e.target.value)){
            e.target.style.color="black";
        }else{
            e.target.style.color="red";
        }
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
    //let gender = document.getElementById('gender').value;
    //let birth = document.getElementById('birth').value;
    let id = document.getElementById('id').value;

    let yearB = new Array;
    let birthY = 0;
    let birthM = 0;
    let birthD = 0;
    let gender;
    yearB[2] = id[0];
    yearB[3] = id[1];
    let pom = Number(id[2]);
    if(pom%2==1){
        pom--;
    }
    switch(pom){
        case 0:
            yearB[0] = "1";
            yearB[1] = "9";
            if((id[2]+id[3])<=12){
                birthM = (id[2]+id[3]);
                break;
            }
        case 2:
            yearB[0] = "2";
            yearB[1] = "0";
            if((id[2]+id[3])<=32){
                birthM = (id[2]+id[3])-20;
                break;
            }
        case 4:
            yearB[0] = "2";
            yearB[1] = "1";
            if((id[2]+id[3])<=52){
                birthM = (id[2]+id[3])-40;
                break;
            }
        default:
            fireAlert("Wpowadź poprawny pesel");
            break;
    }
    birthY = yearB[0]+yearB[1]+yearB[2]+yearB[3];
    birthD = id[4]+id[5];
    if(birthM<10){
        birthM="0"+birthM;
    }

    if(id[9]%2==0){
        gender="kobieta";
    }else{
        gender="mężczyzna";
    }
    //date = new Date(birth);
    //let year = date.getFullYear();

        if(name && surname && email){
            if(!checkNum(name) && !checkNum(surname) && checkAS(email) && !checkLet(id)){
                if(birthM<=12 && birthD<=31){
                    block.innerText=`Imie: ${name} 
                                Nazwisko: ${surname} 
                                Wiek: ${age} 
                                E-mail: ${email} 
                                Płeć: ${gender}
                                Pesel: ${id}
                                Data urodzenia: ${birthY}-${birthM}-${birthD}
                                Opis: ${desc}`;
                form.appendChild(block);
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