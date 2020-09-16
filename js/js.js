/*
 * fil: js.js
 * purpose: Script til Webdokumentaren
 */
console.log('file: js/js.js loaded');

// A $( document ).ready() block.
$(document).ready(function () { // kører så snart DOM er klar

    console.log("jQuery 3.5.1 running. Alert level green.");

    // ... din kode herfra ...
    
    //Klik for at fjerne den sort box
    $('#blackbox').click(function(){
        $(this).css('display', 'none');
        ourVideos[0].play();
    })
    
    //Lyd og Videoer gemt i array
    let ourVideos = [
        document.getElementById('tekstVideo'),
        document.getElementById('pictureVideo')
    ];

    //Knap function til at pause og spille stemnings videoen med tekst og lyd
    $('#topPauseButton').click(function(){
        if (ourVideos[0].paused) {
            ourVideos[0].play();
        } else {
            ourVideos[0].pause();
        }
    });

    //Function til at afspille lydinterview når man hover over billederne, og pause dem når man ikke gør
    let student = [
        '#arthur',
        '#amy',
        '#sofus'
    ];
    
    let soundInterview = [
        document.getElementById('arthurSound'),
        document.getElementById('amySound'),
        document.getElementById('sofusSound')
    ];
    
    //Arthur interview
    $(student[0]).mouseover(function(){
        soundInterview[0].play();
    });
    $(student[0]).mouseout(function(){
        soundInterview[0].pause();
    });
    
    //Amy interview
    $(student[1]).mouseover(function(){
        soundInterview[1].play();
    });
    $(student[1]).mouseout(function(){
        soundInterview[1].pause();
    });
    
    //Sofus interview
    $(student[2]).mouseover(function(){
        soundInterview[2].play();
    });
    $(student[2]).mouseout(function(){
        soundInterview[2].pause();
    });
    
    
    
    // ... din kode slut ...

}); // denne line må ikke slettes
