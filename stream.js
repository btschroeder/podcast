"use strict"

let streamApp = {

}

window.onload = () => {

    let player = document.getElementById("player");

    let handleSuccess = function(stream) {
        if (window.URL)
            player.src = window.URL.createObjectURL(stream);
        else   
            player.src = stream;
    }

    navigator.mediaDevices.getUserMedia({audio: true, video: false}).then(handleSuccess);
};