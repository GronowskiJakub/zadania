import {getApi} from './api'
    
async function displayBlocks(){
    let disBlock = document.createElement('div');
    disBlock.setAttribute("id", "disBlock");
    let body = document.querySelector('body');
    

    let posts = await getApi('/posts');
    let x = 0;
    while(x<posts.length){
        let disBlock = document.createElement('div');
        disBlock.setAttribute("id", "disBlock");
        disBlock.innerText=`userId: ${posts[x].userId}
                        id: ${posts[x].id}
                        title: ${posts[x].title}
                        `
        body.appendChild(disBlock)
        x++;
    }
}
displayBlocks();