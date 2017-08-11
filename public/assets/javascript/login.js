var userArr = ["Drew", "Jeff", "Jalil"];
var passArr = ["Drew", "Jeff", "Jalil"];


$('#logInBtn').on('click', function(event){
    event.preventDefault();

    var name = $('#userName').val().trim();
    var password = $('#passWord').val().trim();
    var id = "";

    switch(name){
        case "Drew":
            id = 1
            break;
        case "Jalil":
            id = 2
            break;
        case "Jeff":
            id = 3
            break;
    }

    var logInPage = function(){
        window.location.assign("/users/" + id);
    }

    console.log(name);
    
    for (i = 0; i < userArr.length; i++){
        if(name === userArr[i] && password === passArr[i]){
            logInPage();
        }
    }

    
});
