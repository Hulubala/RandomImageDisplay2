var img = new Array();
img[0] = 'http://drive.google.com/uc?export=view&id=1Xl6YRKeB3Ml01Q1jN0zQsLINKXXZcRkA'
img[1] = 'http://drive.google.com/uc?export=view&id=1CB-Q3Sf3RMoGyz_UVdKMTYcWjJohw2zz'
img[2] = 'http://drive.google.com/uc?export=view&id=1GEqySXVieykhRJd6ApybPvqhwNnzVCTV'
img[3] = 'http://drive.google.com/uc?export=view&id=1rjIzluOugQmtcIOFjbkHmLprwsnOcspw'
img[4] = 'http://drive.google.com/uc?export=view&id=1GQT6EqqURpeT0uZTsrZeB9C1QYs-afGv'
img[5] = 'http://drive.google.com/uc?export=view&id=1lt2gcdaGvK74MiT2vKU4fISrovbzJR2h'
img[6] = 'http://drive.google.com/uc?export=view&id=1TpZoh1gCbP96kD_c1Z8byTy-AnvBgDNU'
img[7] = 'http://drive.google.com/uc?export=view&id=1LcmuUkIVw-OfBjfPdDFEywyMJ1vz8OPs'
img[8] = 'http://drive.google.com/uc?export=view&id=1m5U8_80Fk8ILo0s5dAbRmTqCh0DNQPCl'
img[9] = 'http://drive.google.com/uc?export=view&id=1EcgbAnL2EXNOrzsKSaWpkHkkoUgPy9qw'
img[10] = 'http://drive.google.com/uc?export=view&id=1EN-mq1TQQnXgQuHvkImFKUO4FbpT6NiD'
img[11] = 'http://drive.google.com/uc?export=view&id=1WPcELt6Q2oABwY115M1KrqSpoGsDHwgc'
img[12] = 'http://drive.google.com/uc?export=view&id=13GY_4m4PnslzyDxYl4StzFWMrk3E0Wfl'
img[13] = 'http://drive.google.com/uc?export=view&id=12MnfTkk4s8Be7RCihE8gd_Ik4gISt8Eg'
img[14] = 'http://drive.google.com/uc?export=view&id=1IMVvmPtbWpqLkINRy7zxoKafHpiKQjxp'

var i;
var p = img.length;
var preBuffer = new Array();
for (i = 0; i < p; i++) {
    preBuffer[i] = new Image();
    preBuffer[i].src = img[i];
}

var randomImg = Math.round(Math.random() * (p - 1));
function showImage() {
    document.write('<img border= "0" src="' + img[randomImg] + '"/>');
}

let pop = document.getElementById("popup");
function openPop() {
    popup.classList.add("open-pop");
}
function closePop() {
    popup.classList.remove("open-pop");
}

var aud = document.getElementById('aud');
var buttonPlay = document.getElementById('buttonPlay');

function playPause(song){
    if(song.paused && song.currentTime >= 0 && !song.ended){
        song.play();
    }else{
        song.pause();
    }
}

buttonPlay.addEventListener('click', function(){
    buttonPlay.classList.toggle('playing');
    playPause(aud);
});
