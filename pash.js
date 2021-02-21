
var pash = function (terminal) {
    var psh = document.getElementById('psh');
    var displayLast = document.getElementsByClassName('last-command');
    psh.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            if (displayLast[0].innerHTML !== "") {
                var history = displayLast[0].innerHTML + "<br>";
            }
            displayLast[0].innerHTML = history + psh.value;
            psh.value = '';
        }
    });

}
    (function () {
        var start = new pash;

    });