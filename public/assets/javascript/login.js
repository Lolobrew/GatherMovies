var userArr = ["Drew", "Jeff", "Jalil"];
var passArr = ["Drew", "Jeff", "Jalil"];


$('#logInBtn').on('click', function(event){
    event.preventDefault();

    var name = $('#userName').val().trim();
    var password = $('#passWord').val().trim();
    var logInPage = function(){
        window.location.assign("/users/" + name);
    }

    console.log(name);
    
    for (i = 0; i < userArr.length; i++){
        if(name === userArr[i] && password === passArr[i]){
            logInPage();
        }
    }

    
});
