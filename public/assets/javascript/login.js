var userArr = ["Drew", "Jeff", "Jalil"];
var passArr = ["Drew", "Jeff", "Jalil"];

$('#logInBtn').on('click', function(event){
    event.preventDefault();
    
    var name = $('#userName').val().trim();
    var password = $('#passWord').val().trim();

    for (i = 0; i < userArr.length; i++){
        if(name === userArr[i] && password === userArr[i]){
            alert("This is working");
            //instead of alert() this is where we will instead open the user unique page!!
        }
    }
});