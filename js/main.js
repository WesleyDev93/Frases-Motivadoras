// trilha


const play = document.querySelector ('.play');

const pause = document.querySelector ('.pause');

const musica1 = document.querySelector ('.musica');

const musica2 = document.querySelector ('.musica2');

const proximo = document.querySelector ('.proximo');

const anterior = document.querySelector ('.anterior');

play.addEventListener ('click', () =>{
       musica1.play();
});


proximo.addEventListener ('click', () => {
    
        musica2.play();
        musica1.pause ();
        musica1.currentTime =0;      

});

anterior.addEventListener ('click', () => {
    
    musica1.play();
    musica2.pause ();
    musica2.currentTime =0       

});




pause.addEventListener ('click', () => {
        musica1.currentTime = 0;
        musica2.currentTime = 0;
        musica1.pause ();
        musica2.pause ();
});




// frases 