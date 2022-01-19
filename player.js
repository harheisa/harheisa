
var Mediaplayer = function () {
	console.log("mediaplayer luotu")

	var audio = document.getElementById("audio");

	var songs = ["http://opengameart.org/sites/default/files/caravan.ogg.ogg",
				       "http://opengameart.org/sites/default/files/Searching.ogg",
               "http://opengameart.org/sites/default/files/ForgottenVictory.ogg"];
  
  // otetaan soitettava tiedosto arraysta
  var i = 0;
	audio.src = songs[0];

  // volumen säätämisen määrittely ja linkitys funktioihin
  audio.volume = 0.5;
  var volPercent = Math.round(audio.volume * 100);
  document.getElementById("volNumber").innerHTML = "Volume level: " + volPercent;
  document.getElementById("btnVolup").addEventListener("click", volUp, false);
  document.getElementById("btnVoldown").addEventListener("click", volDown, false);
  
  // muiden nappien toiminnon linkittäminen funktioihin
  document.getElementById("btnPlay").addEventListener("click", playMusic, false);
  document.getElementById("btnPause").addEventListener("click", pauseMusic, false);
  document.getElementById("btnStop").addEventListener("click", stopMusic, false);
  document.getElementById("btnPrevsong").addEventListener("click", prevSong, false);
  document.getElementById("btnNextsong").addEventListener("click", nextSong, false);

  
  //vaihtaa kappaletta klikkaamalla nimeä kerran
  document.getElementById("song1").addEventListener("click", function(e) {
    stopMusic();
    audio.src = songs[0];
    i=0;
    document.getElementById("nowplaying").innerHTML = "Now playing: " + audio.src
    playMusic();
  });
  document.getElementById("song2").addEventListener("click", function(e) {
    stopMusic();
    audio.src = songs[1];
    i=1;
    document.getElementById("nowplaying").innerHTML = "Now playing: " + audio.src
    playMusic();
  });
  document.getElementById("song3").addEventListener("click", function(e) {
    stopMusic();
    audio.src = songs[2];
    i=2;
    document.getElementById("nowplaying").innerHTML = "Now playing: " + audio.src
    playMusic();
  });

	/*soitetaan biisi*/
	function playMusic() {
    console.log("play painettu");
    audio.addEventListener("canplaythrough", songDuration(), false);
    songDuration();
    audio.play();
    document.getElementById("nowplaying").innerHTML = "Now playing: " + audio.src
	};

  /*musiikki pauselle*/
  function pauseMusic() {
    console.log("pause painettu")
    audio.pause();
    document.getElementById("nowplaying").innerHTML = "Paused"
  }

	/*lopetetaan soitto*/
	function stopMusic() {
    console.log("stop painettu");
    audio.pause();
    audio.currentTime = 0;
    document.getElementById("nowplaying").innerHTML = "Stopped"
	};

  function prevSong() {
    console.log("prev painettu");
    audio.pause();
    audio.currentTime = 0;
    i--;
    if (i < 0) {
      i = 2;
      audio.src = "http://opengameart.org/sites/default/files/ForgottenVictory.ogg";
      playMusic();
    }
    else {
    audio.src = songs[i];
    playMusic();
    }
  };

  function nextSong() {
    console.log("next painettu");
    audio.pause();
    audio.currentTime = 0;
    i++;
    if (i > 2) {
      i = 0;
      audio.src = "http://opengameart.org/sites/default/files/caravan.ogg.ogg";
      playMusic();
    }
    else {
    audio.src = songs[i];
    playMusic();
    }
  };

  /*otetaan metatiedoista kappaleen pituus, muutetaan hh:mm:ss
  muotoon ja tulostetaan sivulle*/
  /*mallia otettu osoitteesta http://stackoverflow.com/questions/31149899/convert-audio-time-to-mmss käyttäjän "Ryan" vastauksesta*/
  /*myös mallia otettu http://stackoverflow.com/questions/11203773/how-can-i-get-the-html5-audios-duration-time */
  function songDuration() {
    audio.addEventListener("canplaythrough", function (e) {
    var audio_duration = document.querySelector("audio").duration;
    var hours = "0" + Math.floor(audio_duration / 3600);
    var minutes = "0" + Math.floor(audio_duration / 60);
    var seconds = "0" +  Math.floor(audio_duration - minutes * 60);
    audio_duration = hours.substr(-2) + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
    document.getElementById("songlength").innerHTML = audio_duration;
  }, false);
  };
  
  //säätää audion äänentasoa
  //volume normaalisti numero 0 ja 1 välillä -> 0.5 on 50% normaalivolumesta
  //funktiot nostaa/laskee äänentasoa 0.05 (5%) per klikki
  //päivittää volumen tason näkyviin 
  function volUp() {
    audio.volume += 0.01;
    volPercent = Math.round(audio.volume * 100)
    document.getElementById("volNumber").innerHTML = "Volume level: " + volPercent;
  };

  function volDown() {
    audio.volume -= 0.01;
    volPercent = Math.round(audio.volume * 100)
    document.getElementById("volNumber").innerHTML = "Volume level: " + volPercent;
  };
}