let allImagesSrc = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
let eachImgEl = document.querySelector(".eachImg");

eachImgEl.id = allImagesSrc[1];


document.onkeydown = function (ev) {
    console.log(ev.code);
    if(ev.code == "ArrowUp" || ev.code == "ArrowRight"){
        next();
    }else if(ev.code == "ArrowDown" || ev.code == "ArrowLeft"){
        previous();
    }
}

$('.main').mousedown(function(event) {
    let mouseClickedEl = document.getElementById("mouseClicked");
    switch (event.which) {
        case 1:
            next();
            break;
        case 2:
            break;
        case 3:
            previous();
            break;
        default:
            alert('You have a strange Mouse!');
    }
});


function next() {
    let crrImgId = eachImgEl.id;
    let crIdx = allImagesSrc.indexOf(crrImgId);
    if(crIdx<9){
        eachImgEl.id = allImagesSrc[crIdx+1];
    }
    else{
        eachImgEl.id = allImagesSrc[0];
    }
}


function previous() {
    let crrImgId = eachImgEl.id;
    let crIdx = allImagesSrc.indexOf(crrImgId);
    if(crIdx>0){
        eachImgEl.id = allImagesSrc[crIdx-1];
    }else{
        eachImgEl.id = allImagesSrc[9];
    }
}
