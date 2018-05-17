// ==UserScript==
// @name         Wyprawki
// @namespace    http://tampermonkey.net/
// @version      0.3
// @match        https://r*.bloodwars.interia.pl/?a=quest
// @grant        none
// @include     https://r*.bloodwars.interia.pl/?a=quest
// ==/UserScript==

function Main() {
    const on = localStorage.getItem('Wyprawki');
	const menu = document.getElementsByClassName('menu');
	if(on == 'true') {
		menu[12].innerHTML += '<li style="padding: 1px; margin-bottom: -5px; font-size: 10px;"><span style="background: transparent; color: #F3F877; text-decoration: none; font-weight: bold; text-align: center; cursor: pointer;" onclick="localStorage.setItem(`Wyprawki`, `false`); location.reload();">OFF</span>';
	} else {
		menu[12].innerHTML += '<li style="padding: 1px; margin-bottom: -5px; font-size: 10px;"><span style="background: transparent; color: #F3F877; text-decoration: none; font-weight: bold; text-align: center; cursor: pointer;" onclick="localStorage.setItem(`Wyprawki`, `true`); location.reload();">ON</span>';
	}

    if(on != 'true') {
     console.log('Wyprawki są wyłączone');
        return;
    }
    if(!document.getElementById('quest_timeleft')) {
     document.getElementById('startQuest').click();
    }
    const timerStop = Math.floor(Math.random() * 3000) + 1000;
    const odliczanie = setInterval(function(){
    const time = document.getElementById('quest_timeleft').innerText;
        if(time.search('Zakończono') == 0) {
            clearInterval(odliczanie);
            setTimeout(function(){
                location.reload();
            }, timerStop);
        }

    }, 1000);

}

Main();