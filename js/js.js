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
    
    //Videoer og mute ikoner gemt i array
    let ourVideos = [
        document.getElementById('tekstVideo'),
        document.getElementById('pictureVideo')
    ];
    
    let muteIcon = [
        '<img src="img/soundOn.svg" alt="sound icon">',
        '<img src="img/soundOff.svg" alt="sound icon">'
    ]

    //Knap function til at pause og spille stemnings videoen med tekst og lyd
    $('#topPauseButton').click(function(){
        if (ourVideos[0].paused) {
            ourVideos[0].play();
            $('#topPauseButton').html(muteIcon[0]);
        } else {
            ourVideos[0].pause();
            $('#topPauseButton').html(muteIcon[1]);
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
    
    let studentPic = [
        $('#arthurPic'),
        $('#amyPic'),
        $('#sofusPic')
    ];
    
    function picAnimation (picToAnimate) {
        picToAnimate.css({
            "width": "100%",
            "transform": "rotate(5deg)",
            "transition-duration": "1s"
        });
    }
    
    function resetPic (picToReset) {
        picToReset.css({
            "width": "90%",
            "transform": "rotate(0deg)",
            "transition-duration": "1s"
        });
    }
    
    //Arthur interview
    $(student[0]).mouseover(function(){
        soundInterview[0].play();
        picAnimation(studentPic[0]);
    });
    $(student[0]).mouseout(function(){
        soundInterview[0].pause();
        resetPic(studentPic[0]);
    });
    
    //Amy interview
    $(student[1]).mouseover(function(){
        soundInterview[1].play();
        picAnimation(studentPic[1]);
    });
    $(student[1]).mouseout(function(){
        soundInterview[1].pause();
        resetPic(studentPic[1]);
    });
    
    //Sofus interview
    $(student[2]).mouseover(function(){
        soundInterview[2].play();
        picAnimation(studentPic[2]);
    });
    $(student[2]).mouseout(function(){
        soundInterview[2].pause();
        resetPic(studentPic[2]);
    });
    
    
    
    // ... din kode slut ...

}); // denne line må ikke slettes
