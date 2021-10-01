

var back_top_btn = document.querySelector(".back-top");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20) {
        back_top_btn.style.display = "block";
    } else {
        back_top_btn.style.display = "none";
    }
}

function back_top(){
    document.body.scrollTop = '0';
    document.documentElement.scrollTop = '0';
}

scrollFunction();