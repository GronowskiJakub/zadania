import { isLoaded, isLoading } from './public/script/universal/loading';

const path = window.location.pathname.substring(1)

const routes = {
    index:{
        html: './index.html',
        script: ''
    },
    main:{
        html: import('./main.html'),
        script: ''
    },
    form:{
        html: import('./form.html'),
        script: () => import("./public/script/script.js")
    },
    entries:{
        html: import('./entries.html'),
        script: () => import("./public/script/display.js")
    },
    error:{
        html: import('./error.html'),
        script: '' 
    }
}

document.getElementById('main').innerHTML='<div id="main"></div>';
isLoading('body')

function findRoutes(path){
    for(let x in routes){
        if(path == x){
            routes[x].html.then(function (page){
                document.getElementById('main').innerHTML=page.toString()
                if(routes[x].script!=''){
                    routes[x].script().then(isLoaded('body'));
                    
                }else{
                    console.log("blad2");
                    isLoaded('body')
                }
            })
            break;
        }
        routes.error.html.then(function (page){
            document.getElementById('main').innerHTML=page.toString()
            isLoaded('body')
        })
    }
}

findRoutes(path)