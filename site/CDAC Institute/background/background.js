var i = 0;
function changeColor() {
    var colors = ["red", "blue", "green", "cyan", "yellow", "purple", "lime-green"];
    for (let i = 0; i < colors.length; i++) {
        document.getElementsByTagName("body")[0].style.background = colors[i];

    }
    if(colors > colors.length -1 )
    {
        i = 0;
    }
}


// ------------------------------------
// var index = 0;

// function changeColor() {

//     var colors = ["red", "blue", "green", "yellow", "cyan", "purple"];

//     document.getElementsByTagName("body")[0].style.background = colors[index++];

//     if (colors > colors.length - 1) {
//         index = 0;
//     }


// }