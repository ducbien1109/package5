$(document).ready(function () {
    $("#form-register").submit(function (event) {
        event.preventDefault();
        var userName = $('#register-username').val();
        var password = $('#register-password').val();

        if(password < 6){
            $('#password-error').text("Password phải có ít nhất trên 6 kí tự")
            $("#password-error").css("text-align","center")
            $("#password-error")
            return;
        }
        var newUser = {
            userName: userName,
            password: password
        }
        localStorage.setItem(userName, JSON.stringify(newUser));
        window.location.href = "../login/index.html";

    });
});
