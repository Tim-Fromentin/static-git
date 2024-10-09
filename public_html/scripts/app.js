var app = document.getElementById('typewrittereffect-home');
var typewriter = new Typewriter(app, {
    loop: true,
    cursor: "",
});
typewriter.typeString('Web <strong>Developer</strong>')
    .pauseFor(1)
    .deleteAll(100)
    .typeString('Passionate')
    .pauseFor(5)
    .deleteAll(100)
    .typeString('<span>Student at the</span> <span style="color: #EF197C;">Fabrique Numérique</span> ')
    .pauseFor(5)
    .start();


    