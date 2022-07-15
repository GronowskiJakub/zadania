import { isLoading, isLoaded } from "./loading";
import {invalidLet, invalidNum} from "./validInput";

//Custom event that is listiening for example from display.js
const filterRequest = new CustomEvent('filter')
fBtt.addEventListener('click', () => {
    document.dispatchEvent(filterRequest)
})

export function makeFilters(fItems){
    isLoading('#filter-menu');
    for(const key in fItems){
        let block = document.createElement('input');
        let td = document.querySelector(`#${key}`);
        block.setAttribute('type', 'text');
        block.setAttribute('id', `input-${key}`);

        td.appendChild(block);
        if(key!='title'){
            document.getElementById(fItems[key].input).addEventListener('input', invalidLet)
        }else{
            document.getElementById(fItems[key].input).addEventListener('input', invalidNum)
        }
    }
    function setDefaults(){
        let input_id = document.getElementById('input-id');
        let input_userid = document.getElementById('input-userId');
        let input_title = document.getElementById('input-title');

        let default_id = localStorage.getItem('id');
        let default_userid = localStorage.getItem('userId');
        let default_title = localStorage.getItem('title');

        input_id.value = default_id;
        input_userid.value = default_userid;
        input_title.value = default_title;
    }
    setDefaults();
    isLoaded('#filter-menu');
}

export function filtering(posts, fItems){
    let place

    for(const key in fItems){
        place = document.getElementById(fItems[key].input)

        if(place.value!=''){
            posts = posts.filter(fItems[key].filterType)
        }    
    } 
return posts;
}

export function sorting(posts, fItems){
    let input_id = document.getElementById('input-id');
    let input_userid = document.getElementById('input-userId');
    let input_title = document.getElementById('input-title');

    let sort_item = document.getElementById('sort-item');

    posts = posts.sort(fItems[sort_item.value].sortType);

    localStorage.removeItem('id');
    localStorage.removeItem('userId');
    localStorage.removeItem('title');
    localStorage.setItem('id', input_id.value);
    localStorage.setItem('userId', input_userid.value);
    localStorage.setItem('title', input_title.value);

    if(sort.value=='desc'){
        return posts.reverse();
    }else{
        return posts;
    }
}