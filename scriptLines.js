var img = new Array();
img[0] = 'http://drive.google.com/uc?export=view&id=1C4YibFakf_cHi_nf0xrxeJ4ujACgnVXs'
img[1] = 'http://drive.google.com/uc?export=view&id=1N0qjdS6vobwdjf9Lr2TWmt2ksXU_0LtR'
img[2] = 'http://drive.google.com/uc?export=view&id=1VHtEYRzSmJGrfXp6xOHjmf892S0g1IPc'
img[3] = 'http://drive.google.com/uc?export=view&id=1dVhiB49QMn483IPZEL64CDuC1bF5PoSF'
img[4] = 'http://drive.google.com/uc?export=view&id=1l3TOBg-DhFYohHQYMWgH5YT4S8QXrj7X'
img[5] = 'http://drive.google.com/uc?export=view&id=12lDgy8Yk-buRxIIW-gqhTtxvjcfSbseQ'
img[6] = 'http://drive.google.com/uc?export=view&id=1JbyTrYhkXlFEcEfXfI1Zotr7oz-u6nCj'
img[7] = 'http://drive.google.com/uc?export=view&id=17MzW-paVzbfvWCrOww9gkRajxeC4HkNr'
img[8] = 'http://drive.google.com/uc?export=view&id=1HlJGhtKzBwWImyLPvqRHLkyjeRaduqg5'
img[9] = 'http://drive.google.com/uc?export=view&id=163I1QkkvOVGKdS8LvtT8_vCpQ5FI-0i2'
img[10] = 'http://drive.google.com/uc?export=view&id=1YRWbR1pdNqZYHnp2aJcUkQoVXbCdMxIQ'
img[11] = 'http://drive.google.com/uc?export=view&id=1K00CHSVz5yoyRNhz2kPGf_2mfaRK-O3s'
img[12] = 'http://drive.google.com/uc?export=view&id=1bZlhuej-mai0-_Pvj7JjPQ6jcCzJShLK'
img[13] = 'http://drive.google.com/uc?export=view&id=1A2U_j80PAy5GZR2FoB7EFoJZEEzVgnIp'
img[14] = 'http://drive.google.com/uc?export=view&id=1RM8quTuZnowiCtheMh4xsSlTj3lYhKjc'
img[15] = 'http://drive.google.com/uc?export=view&id=1TwLpy8H2pij2fzIl2ykVDdkI2meM4LfT'
img[16] = 'http://drive.google.com/uc?export=view&id=1SykacmCynkIFvzHxXaq_dMq1dHaYZBlj'
img[17] = 'http://drive.google.com/uc?export=view&id=1dR0DreDpHXyrAhPvCOM7dNgj3NPYbRwm'
img[18] = 'http://drive.google.com/uc?export=view&id=1aB_5YrajAjSyJtXFZgRtyW1BTCCDGESC'
img[19] = 'http://drive.google.com/uc?export=view&id=13uhGbrzGADZpcPr6vn1aw-9gRweCCDhQ'



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

function playPause(btnOpt){
    var play = document.getElementById("playAud");
    var pause = document.getElementById("pauseAud");
    var song = document.getElementById("aud");
    if(song.paused){
        song.play();
        pause.style.display = '';
        play.style.display = 'none';
    }else{
        song.pause();
        pause.style.display = 'none';
        play.style.display = '';
    }
}
