import {getApi} from './api'
import {filtering, makeFilters, sorting} from './universal/filtering'
document.getElementById('fBtt').addEventListener('click', removeDisBox)
document.getElementById('fBtt').addEventListener('click', displayBlocks)
makeFilters()

let disBox = document.createElement('div');
let main = document.querySelector('#main');
disBox.setAttribute("id", "disBox");
main.appendChild(disBox)



async function displayBlocks(){
    let posts = await getApi('/posts');

    if(filtering(posts)!=undefined){
        posts = filtering(posts)
    };
    sorting(posts);

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
function removeDisBox(){
    let disbox = document.querySelector('#disBox');
    disBox.innerHTML="";
}

displayBlocks()
let menu = document.querySelector('#filter-menu');