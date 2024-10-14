window.addEventListener("load", function () {
    if (document.getElementById("live2d")) {
        return;
    }

    var tips = ["What are you doing? ", "Mouse the mouse is in the wrong place！", "You, quickly take your hands away～～", "Meow meow meow?",  "I'm going to be angry", "Don't move your hands or feet!", "Hentai！"];

    var wrap = document.createElement("div");
    wrap.id = "live2d-wrap";
    wrap.width = "280";
    wrap.height = "280";
    wrap.style = `position:fixed;left:0;bottom:0;text-align: center;`;

    var canvas = document.createElement("canvas");
    canvas.id = "live2d";
    canvas.width = "280";
    canvas.height = "250";
    canvas.className = "live2d";

    var tip = document.createElement('div');
    tip.id = 'live-tip';
    tip.innerText = tips[0];
    tip.style = `visibility: hidden;
    animation: shake 50s ease-in-out 5s infinite;
    background-color: rgba(236, 217, 188, .5);
    border: 1px solid rgba(224, 186, 140, .62);
    border-radius: 12px;
    box-shadow: 0 3px 15px 2px rgba(191, 158, 118, .2);
    font-size: 14px;
    line-height: 24px;
    margin: -30px 20px;
    min-height: 70px;
    opacity: 0;
    overflow: hidden;
    padding: 5px 10px;
    position: absolute;
    text-overflow: ellipsis;
    transition: opacity 1s;
    width: 250px;
    word-break: break-all;`

    this.setTimeout(()=> {
        tip.style.visibility = 'visible';
    }, 4000);


    wrap.appendChild(tip);
    wrap.appendChild(canvas);
    document.body.appendChild(wrap);

    loadlive2d("live2d", "https://fastly.jsdelivr.net/gh/CheshireJCat/live2d@latest/live2d/model/tia/model.json");

    var index = 0;
    canvas.addEventListener('click', function(){
        if (index < tips.length - 1) {
            index++;
        }
        else {
            index = 0;
        }
        
        tip.innerText = tips[index];
    })
});
