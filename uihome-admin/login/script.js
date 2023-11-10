$(function(){
    $('#form-login').submit(function(event){
        event.preventDefault();
        var userName = $('#login-username').val();
        var password = $('#login-password').val();
        var storeLocalUser = localStorage.getItem(userName)
        if(storeLocalUser && JSON.parse(storeLocalUser).password === password){
            setTimeout(function(){
                localStorage.setItem("isLoggedIn", true);
            window.location.href = "../admin/index.html"
            })
            
        }else{
            setTimeout(function(){
                $("#login-error").text("vui long nhap lai")
                $("#login-error").css("text-align","center")
            },500)
        }
    })
})
function toPageRegister(){
    window.location.href = "../register/index.html"   
}
