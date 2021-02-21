
var pash = function (terminal) {
    var psh = document.getElementById('psh');
    var displayLast = document.getElementsByClassName('last-command');
    psh.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            displayLast[0].innerHTML = psh.value;
            psh.value = '';
        }
    });

}
    (function () {
        var start = new pash;

    });