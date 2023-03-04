function movingImage(e, objToMove) {
    objToMove.style.left = e.clientX - objToMove.width / 2 + "px";
    objToMove.style.top = e.clientY - objToMove.height / 2 + "px";
}
window.onload = function () {
    var sample = document.getElementById("sample");

    sample.onmousedown = function () {
        var self = this;
        document.onmousemove = function (e) {
            movingImage(e, self);
        };
    };

    sample.onmouseup = function () {
        document.onmousemove = null;
    };

    sample.ondragstart = function (e) {
        e.preventDefault();
    };
};