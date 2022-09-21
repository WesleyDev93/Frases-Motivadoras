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


const div = document.querySelector ('.frases');

const primeiraFrase = document.querySelector ('.primeiraFrase');

const frasesProximo = document.querySelector ('.frasesProximo');

const frasesAnterior = document.querySelector ('.frasesAnterior');

const CriaP = document.createElement ('p');

function CriaTexto () {
      
       div.appendChild (CriaP);
       CriaP.classList.add ('estiloTexto');
       CriaP.textContent = "É parte da cura o desejo de ser curado.";
      
}



primeiraFrase.addEventListener ('click' , function () {
     
       CriaTexto ();
       
});






frasesProximo.addEventListener ('click', () =>{
    div.appendChild (CriaP);
    CriaP.classList.add ('estiloTexto');
   CriaP.textContent = "Toda ação humana, quer se torne positiva ou negativa, precisa depender de motivação.";

});



frasesAnterior.addEventListener ('click', () =>{
    div.appendChild (CriaP);
    CriaP.classList.add ('estiloTexto');
   CriaP.textContent = "O meio da dificuldade encontra-se a oportunidade.";

});