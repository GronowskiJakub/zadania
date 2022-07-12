import {getApi} from './api'
document.getElementById('fBtt').addEventListener('click', removeDisBox)
document.getElementById('fBtt').addEventListener('click', displayBlocks)


let disBox = document.createElement('div');
let main = document.querySelector('#main');
disBox.setAttribute("id", "disBox");
main.appendChild(disBox)

async function displayBlocks(){
    let disBlock = document.createElement('div');
    disBlock.setAttribute("id", "disBlock");
    let filter = document.getElementById('filter');
    let sort = document.getElementById('sort')
    let item = document.getElementById('item');

    let posts = await getApi('/posts');
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