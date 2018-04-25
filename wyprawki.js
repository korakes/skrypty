// ==UserScript==
// @name         Wyprawki
// @namespace    http://tampermonkey.net/
// @version      0.1
// @match        https://r*.bloodwars.interia.pl/?a=quest
// @grant        none
// @include     https://r*.bloodwars.interia.pl/?a=quest
// ==/UserScript==

function Main() {
    const on = localStorage.getItem('Wyprawki');

    if(on != 'true') {
     console.log('Wyprawki są wyłączone');
        return;
    }
    if(!document.getElementById('quest_timeleft')) {
     document.getElementById('startQuest').click();
    }
    const timerStop = Math.floor(Math.random() * 8000) + 3000;
    const odliczanie = setInterval(function(){
        time = document.getElementById('quest_timeleft').innerText;
        if(time.search('Zakończono') == 0) {
            clearInterval(odliczanie);
            setTimeout(function(){
                location.reload();
            }, timerStop);
        }

    }, 1000);

}

Main();