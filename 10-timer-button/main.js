$(function() {
    var timer,
        inp = $('input[type="button"]'), 
        second = 6;
    inp.val("同意 (" + second + " s)"),
    inp.attr("disabled", "disabled"),
    timer = window.setInterval(function() {
        inp.val("同意 (" + second-- + " s)"),
        -1 === second && (window.clearInterval(timer),
        inp.val("同意"),
        inp.removeAttr("disabled"))
    }, 1e3),
    inp.click(function() {
        alert("您已同意！")
    })
});
