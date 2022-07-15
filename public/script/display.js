import {getApi} from './api'
import {filtering, makeFilters, sorting} from './universal/filtering'
import { checkNum, checkLet } from './universal/check'
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
//Listens to event 'filter' in filtering.js 
document.addEventListener('filter', () => {
    removeDisBox()
    displayBlocks()
})
let button = document.getElementById('fBtt');

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
makeFilters(fItems);


let disBox = document.createElement('div');
let main = document.querySelector('#main');
let input_id = document.getElementById('input-id');
let input_userid = document.getElementById('input-userId');
let input_title = document.getElementById('input-title');

disBox.setAttribute("id", "disBox");
main.appendChild(disBox)

export async function displayBlocks(){
    let posts = await getApi('/posts');

    if(filtering(posts, fItems)!=undefined){
        posts = filtering(posts, fItems)
    };
    sorting(posts, fItems);

    let x = 0;
    while(x<posts.length){
        let disBlock = document.createElement('div');
        disBlock.setAttribute("id", "disBlock");
        disBlock.innerText=`userId: ${posts[x].userId}
                        id: ${posts[x].id}
                        title: ${posts[x].title}
                        `
        disBox.appendChild(disBlock)
        x++;
    }
    if(input_id.value || input_userid.value || input_title.value){
        if(checkLet(input_id.value) || checkLet(input_userid.value) || checkNum(input_title.value)){
            fireAlert('Wprowadź poprawne filtry');
        }
    }
    if(posts == ''){
        disBox.innerHTML="<h3 style='text-align: center;'>Brak danych</h3>";
    }
}

export function removeDisBox(){
    let disbox = document.querySelector('#disBox');
    disBox.innerHTML="";
}

displayBlocks()
