import { isLoading } from "./loading";
const fItems = {
    id:{
        input: 'input-id',
        filterType: e => e.id== document.getElementById('input-id').value,
        sortType: (e1, e2) => e1.id-e2.id
    },
    userId:{
        input: 'input-userId',
        filterType: e => e.userId== document.getElementById('input-userId').value,
        sortType: (e1, e2) => e1.userId-e2.userId
    },
    title:{
        input: 'input-title',
        filterType: e => e.title.search(document.getElementById('input-title').value)>0,
        sortType: (e1, e2) => {
            return e1.title >= e2.title ? 1 : -1
        }
    }
}

export function makeFilters(){

    for(const key in fItems){
        let input = document.createElement('input');
        let menu = document.querySelector('#filter-menu');
        let td = document.querySelector(`#${key}`);
        input.setAttribute('type', 'text');
        input.setAttribute('id', `input-${key}`);

        td.appendChild(input);
    }
}

export function filtering(posts){
    let place;

    for(const key in fItems){
        place = document.getElementById(fItems[key].input)

        if(place.value!=''){
            posts = posts.filter(fItems[key].filterType)
        }    
    }
return posts;
}

export function sorting(posts){

    let sort_item = document.getElementById('sort-item');

    posts = posts.sort(fItems[sort_item.value].sortType);


    if(sort.value=='desc'){
        return posts.reverse();
    }else{
        return posts;
    }

}

    /*
    switch(item.value){
        case "id":
            if(filter.value){
                posts = posts.filter(e => e.id== filter.value)
            }
            if(sort.value=="asc"){
                posts = posts.sort((e1, e2) => e1-e2);
            }else if(sort.value=="desc"){
                posts = posts.sort((e1, e2) => e1-e2);
                posts = posts.reverse();
            }
            break;
        case "userId":
            if(filter.value){
                posts = posts.filter(e => e.userId== filter.value)
            }
            if(sort.value=="asc"){
                posts = posts.sort((e1, e2) => e1-e2);
            }else if(sort.value=="desc"){
                posts = posts.sort((e1, e2) => e1-e2);
                posts = posts.reverse();
            }
            break;
        case "title":
            if(filter.value){
                posts = posts.filter(e => e.title.search(filter.value)>0)
            }
            if(sort.value=="asc"){
                posts = posts.sort();
            }else if(sort.value=="desc"){
                posts = posts.sort();
                posts = posts.reverse();
            }
            break;
    }
    */