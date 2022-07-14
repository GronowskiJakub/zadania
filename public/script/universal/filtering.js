import { isLoading } from "./loading";
import {removeDisBox, displayBlocks} from "../display";
import {invalidLet, invalidNum} from "./validInput";

document.getElementById('fBtt').addEventListener('click', removeDisBox)
document.getElementById('fBtt').addEventListener('click', displayBlocks)

export function makeFilters(fItems){

    for(const key in fItems){
        let block = document.createElement('input');
        let menu = document.querySelector('#filter-menu');
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
}

export function filtering(posts, fItems){
    let place;

    for(const key in fItems){
        place = document.getElementById(fItems[key].input)

        if(place.value!=''){
            posts = posts.filter(fItems[key].filterType)
        }    
    }
return posts;
}

export function sorting(posts, fItems){

    let sort_item = document.getElementById('sort-item');

    posts = posts.sort(fItems[sort_item.value].sortType);


    if(sort.value=='desc'){
        return posts.reverse();
    }else{
        return posts;
    }

}