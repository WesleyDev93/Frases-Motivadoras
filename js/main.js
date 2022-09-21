// trilha


const play = document.querySelector ('.play');

const pause = document.querySelector ('.pause');

const trilha = document.querySelector ('.musica');

play.addEventListener ('click', () =>{
    for (let index = 0; index < trilha.length; index++) {
        const element = trilha[index];
        
    }
        trilha.play();
});


pause.addEventListener ('click', () => {
        trilha.currentTime = 0;
        trilha.pause ();
});