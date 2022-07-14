//function checking for any number
export function checkNum(string) {
    return /[0-9]/.test(string);
} 
//function checking for @ symbol
export function checkAS(string){
    for(var key in string){
        if(string[key]=="@"){
            return true;
        }
    }
    return false;
}
//function checking for any letter
export function checkLet(string){
    return /[a-z]/.test(string);
}
//function checking for valid year
export function checkYear(date){
    let time = new Date();
    let year = time.getFullYear();

    return year>=date;
}
//function checking if id is correct with alghoritm
export function checkID(id){
    let x = 1*id[0]+3*id[1]+7*id[2]+9*id[3]+1*id[4]+3*id[5]+7*id[6]+9*id[7]+1*id[8]+3*id[9];
    let y = x.toString();
    let z = 10-y.slice(-1);
    return id[10]==z;
}
//function checking length of string
export function checkLen(string){
    let x = 0;
    for(var key in string){
        x++;
    }
    return x;
}
//function checking date of birth from id
export function checkDateFromId(id){
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
    return birthY+"-"+birthM+"-"+birthD;
}
//function checking year of birth from id
export function checkYearFromId(id){
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
