var img = new Array();
img[0] = 'https://drive.google.com/thumbnail?id=1C4YibFakf_cHi_nf0xrxeJ4ujACgnVXs&sz=s4000'
img[1] = 'https://drive.google.com/thumbnail?id=1N0qjdS6vobwdjf9Lr2TWmt2ksXU_0LtR&sz=s4000'
img[2] = 'https://drive.google.com/thumbnail?id=1VHtEYRzSmJGrfXp6xOHjmf892S0g1IPc&sz=s4000'
img[3] = 'https://drive.google.com/thumbnail?id=1dVhiB49QMn483IPZEL64CDuC1bF5PoSF&sz=s4000'
img[4] = 'https://drive.google.com/thumbnail?id=1l3TOBg-DhFYohHQYMWgH5YT4S8QXrj7X&sz=s4000'
img[5] = 'https://drive.google.com/thumbnail?id=12lDgy8Yk-buRxIIW-gqhTtxvjcfSbseQ&sz=s4000'
img[6] = 'https://drive.google.com/thumbnail?id=1JbyTrYhkXlFEcEfXfI1Zotr7oz-u6nCj&sz=s4000'
img[7] = 'https://drive.google.com/thumbnail?id=17MzW-paVzbfvWCrOww9gkRajxeC4HkNr&sz=s4000'
img[8] = 'https://drive.google.com/thumbnail?id=1HlJGhtKzBwWImyLPvqRHLkyjeRaduqg5&sz=s4000'
img[9] = 'https://drive.google.com/thumbnail?id=163I1QkkvOVGKdS8LvtT8_vCpQ5FI-0i2&sz=s4000'
img[10] = 'https://drive.google.com/thumbnail?id=1YRWbR1pdNqZYHnp2aJcUkQoVXbCdMxIQ&sz=s4000'
img[11] = 'https://drive.google.com/thumbnail?id=1K00CHSVz5yoyRNhz2kPGf_2mfaRK-O3s&sz=s4000'
img[12] = 'https://drive.google.com/thumbnail?id=1bZlhuej-mai0-_Pvj7JjPQ6jcCzJShLK&sz=s4000'
img[13] = 'https://drive.google.com/thumbnail?id=1A2U_j80PAy5GZR2FoB7EFoJZEEzVgnIp&sz=s4000'
img[14] = 'https://drive.google.com/thumbnail?id=1RM8quTuZnowiCtheMh4xsSlTj3lYhKjc&sz=s4000'
img[15] = 'https://drive.google.com/thumbnail?id=1TwLpy8H2pij2fzIl2ykVDdkI2meM4LfT&sz=s4000'
img[16] = 'https://drive.google.com/thumbnail?id=1SykacmCynkIFvzHxXaq_dMq1dHaYZBlj&sz=s4000'
img[17] = 'https://drive.google.com/thumbnail?id=1dR0DreDpHXyrAhPvCOM7dNgj3NPYbRwm&sz=s4000'
img[18] = 'https://drive.google.com/thumbnail?id=1aB_5YrajAjSyJtXFZgRtyW1BTCCDGESC&sz=s4000'
img[19] = 'https://drive.google.com/thumbnail?id=13uhGbrzGADZpcPr6vn1aw-9gRweCCDhQ&sz=s4000'



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
