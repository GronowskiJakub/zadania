import {getApi} from './api'
import {filtering, makeFilters, sorting} from './universal/filtering'
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
makeFilters(fItems)

let disBox = document.createElement('div');
let main = document.querySelector('#main');
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
}

export function removeDisBox(){
    let disbox = document.querySelector('#disBox');
    disBox.innerHTML="";
}

displayBlocks()