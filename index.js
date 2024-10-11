window.addEventListener("load", function () {
    if (document.getElementById("live2d")) {
        return;
    }
    var canvas = document.createElement("canvas");
    canvas.id = "live2d";
    canvas.width = "280";
    canvas.height = "250";
    canvas.className = "live2d";
    canvas.style = `position:fixed;left:0;bottom:0;`;
    document.body.appendChild(canvas);
    loadlive2d("live2d", "https://fastly.jsdelivr.net/gh/CheshireJCat/live2d@latest/live2d/model/tia/model.json");
});
