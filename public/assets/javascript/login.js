var userArr = ["Drew", "Jeff", "Jalil"];
var passArr = ["Drew", "Jeff", "Jalil"];

var name = $('#userName').val().trim();
var password = $('#passWord').val().trim();

var url = window.location.path;

console.log(url);

$('#logInBtn').on('click', function(event){
    event.preventDefault();
    console.log(name);
    
    for (i = 0; i < userArr.length; i++){
        if(name === userArr[i] && password === passArr[i]){
            $.get("/api/users/" + name, function(data) {
                console.log(data);
            });
        }
    }


var logInPage = function(){
    window.location.assign("/users");
}

logInPage();
    
});
