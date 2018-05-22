var canvas = document.getElementById('canvas');
var contextCancas = canvas.getContext('2d');

document.addEventListener('keydown', function(event){
    var moveTo = eventController.move[event.key];
    moveTo();
});