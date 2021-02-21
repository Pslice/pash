
var pash = function (terminal) {
    var psh = document.getElementById('psh');
    var displayLast = document.getElementsByClassName('last-command');
    psh.addEventListener('keypress', function (e) {
        var history = displayLast[0].innerHTML + "\n";
        if (e.key === 'Enter') {
            displayLast[0].innerHTML = history + psh.value;
            psh.value = '';
        }
    });

}
    (function () {
        var start = new pash;

    });