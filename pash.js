
var pash = function (terminal) {
    var lineCount = 0;
    var psh = document.getElementById('psh');
    var displayLast = document.getElementsByClassName('last-command');
    psh.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            displayLast[0].innerHTML = `${displayLast[0].innerHTML}<p id="p${lineCount}"> ${psh.value}`;
            psh.value = '';
        }
    });
}
    (function () {
        var start = new pash;
    });