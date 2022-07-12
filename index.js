const path = window.location.pathname.substring(1)

if(path == '') {
    import("./index.html").then(function (page) {
    });
}

if(path == 'form') {
    import("./form.html").then(function (page) {
        document.getElementById('main').innerHTML=page.toString()
        
        import("./public/script/script.js").then(function (page){
        });
    });
}

if(path == 'entries') {
    import("./entries.html").then(function (page) {
        document.getElementById('main').innerHTML=page.toString()

        import("./public/script/display.js").then(function (page){
        });
    });
}
 