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

for(let x in routes){
    console.log(x)
    if(path == x){
        console.log(x)
        routes[x].html.then(function (page){
            document.getElementById('main').innerHTML=page.toString()
            if(routes[x].script!=''){
                routes[x].script().then(function (page){
                    isLoaded('body')
                }); 
            }else{
                isLoaded('body')
            }
        })
    }
}






/*if(path == ''){
    routes.main.html.then(function (page) {
        document.getElementById('main').innerHTML=page.toString()
        isLoaded('body')
    });
}else if(path == 'main') {
    routes.main.html.then(function (page) {
        document.getElementById('main').innerHTML=page.toString()
        isLoaded('body')
    });
}else if(path == 'form') {
    routes.form.html.then(function (page) {
        document.getElementById('main').innerHTML=page.toString()
        import("./public/script/script.js").then(function (page){
            isLoaded('body')
        });
    });
}else if(path == 'entries') {
    routes.entries.html.then(function (page) {
        document.getElementById('main').innerHTML=page.toString()
        import("./public/script/display.js").then(function (page){
            isLoaded('body')
        });
    });
}else{
    routes.error.html.then(function (page) {
        document.getElementById('main').innerHTML=page.toString()
        isLoaded('body')
    });
}*/
