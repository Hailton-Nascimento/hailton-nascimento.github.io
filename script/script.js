const toggleMenu = document.querySelector(".toggle-menu");
toggleMenu.onclick = () => {
    toggleMenu.classList.toggle("ativo");
    document.querySelector(".container").classList.toggle("show-menu");

}

var textContainer = document.querySelector('#typewriter');
var textWhiter = ['Apaixonado por tecnologia.', 'Disciplinado.', 'De bem com a vida.', 'Determinado.', 'Resiliente.', 'Feliz!'];

function whiter(str, done) {

    var char = str.split('').reverse();
    var typer = setInterval(function() {
        if (!char.length) {
            clearInterval(typer);
            return setTimeout(done, 1500);
        }
        var next = char.pop();
        textContainer.innerHTML += next;
    }, 100);
}

function cleaner(done) {
    var char = textContainer.innerHTML;
    var nr = char.length;
    var typer = setInterval(function() {
        if (nr-- === 0) {
            clearInterval(typer);
            return done();
        }
        textContainer.innerHTML = char.slice(0, nr);
    }, 100);
}

function footer(content) {
    var atual = -1;

    function prox() {
        if (atual < content.length - 1)
            atual++;
        else
            atual = 0;
        var str = content[atual];
        whiter(str, function() {
            cleaner(prox);
        });
    }
    prox(prox);
}

setTimeout(() => {
    footer(textWhiter);
}, 4000);