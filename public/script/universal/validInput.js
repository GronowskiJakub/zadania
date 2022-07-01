import {checkNum, checkLet, checkID, checkLen} from './check.js'

function validBorder(item){
    item.style.border="1px solid black";
    item.style.borderRadius="5px";
}
function invalidBorder(item){
    item.style.border="2px solid red";
    item.style.borderRadius="5px";    
}

export function invalidNum(e){
    if(checkNum(e.target.value)){
        invalidBorder(e.target);
    }else{
        validBorder(e.target);
    }
}
export function invalidLet(e){
    if(checkLet(e.target.value)){
        invalidBorder(e.target)
    }else{
        validBorder(e.target)
    }
}
export function invalidID(e){

    if(checkLen(e.target.value)==11){
        if(!checkLet(e.target.value) && checkID(e.target.value)){
            validBorder(e.target)
        }else{
            invalidBorder(e.target)
        }
    }
}