//function checking for any number
function checkNum(string, x){
    x = 0;
    for(key in string){
        if(string[key]=="1"&&"2"&&"3"&&"4"&&"5"&&"6"&&"7"&&"8"&&"9"&&"0"){
             x++;
        }
    }
    return x;
}
//function checking for @ symbol
function checkAS(string, x){
    x = 0;
    for(key in string){
        if(string[key]=="@"){
             x++;
        }
    }
    return x;
}



function funct(){
    let name = document.getElementById('name').value;
    let surname = document.getElementById('surname').value;
    let age = document.getElementById('age').value;
    let email = document.getElementById('email').value;
    let desc = document.getElementById('desc').value;
    let gender = document.getElementById('gender').value;
    let block = document.getElementById('block');

    let n=0;
    let i=0;
    let y=0;
    

        if(name != "" && surname != "" && email != ""){
            if(checkNum(name, n)<1 && checkNum(surname, i)<1 && checkAS(email, y)){
                block.innerHTML=`<br>Imie: ${name} 
                                <br>Nazwisko: ${surname} 
                                <br>Wiek: ${age} 
                                <br>E-mail: ${email} 
                                <br>Opis: ${desc}
                                <br>`;
            }else{
                alert("Wprowadź poprawne dane");
            }
        }else{
            alert("Wprowadź dane");
        }

    }