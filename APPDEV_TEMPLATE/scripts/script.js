document.addEventListener("input", function(event) {
    if (event.target && event.target.classList.contains("generic-textarea")) {
    var textarea = event.target;
    textarea.style.height = "auto";
    textarea.style.height = (textarea.scrollHeight) + "px";
    }
});

function rl_showLogin() {
    var register_div = document.getElementById('register-container');
    var login_div = document.getElementById('login-container');

    if (login_div.style.display === 'none') {
        login_div.style.display = 'block';
        register_div.style.display = 'none';
    }
}

function rl_swapContentBox() {
    var register_div = document.getElementById('register-container');
    var login_div = document.getElementById('login-container');

    if (login_div.style.display === 'none') {
        login_div.style.display = 'block';
        register_div.style.display = 'none';
    } else {
        login_div.style.display = 'none';
        register_div.style.display = 'block';
    }
}