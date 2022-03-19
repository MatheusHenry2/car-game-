const dino = document.getElementById("dino");
const cone = document.getElementById("cone");


function jump() {

    if (dino.classList != "jump") {

        dino.classList.add("jump");
        setTimeout(function() {
            dino.classList.remove("jump");
        }, 300);
    }
}

let tavivo = setInterval(function() {
    //pegando posicao do dinossauro
    let dinoT = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    console.log(dinoT);
    //pegando posicao do cone;
    let coneT = parseInt(window.getComputedStyle(cone).getPropertyValue("left"));
    console.log(coneT)

    if (coneT < 50 && coneT > 0 && dinoT >= 140) {
        alert("BATEU NO CONE GAME OVER");
    }

}, 10)

document.addEventListener("keydown", function(event) {
    jump();
});