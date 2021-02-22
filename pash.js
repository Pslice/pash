
var pash = function (terminal) {
    var lineCount = 0;
    var psh = document.getElementById('psh');
    var displayLast = document.getElementsByClassName('last-command');
    psh.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            lineCount++
            if (lineCount % 4 === 0) {
                var removeLine = document.getElementById('p' + (lineCount - 4));
                removeLine.remove();
            }
            displayLast[0].innerHTML = `${displayLast[0].innerHTML}<b id="p${lineCount}"> ${psh.value}<br></b>`;
            psh.value = '';
        }
    });
}
    (function () {
        var start = new pash;
    });