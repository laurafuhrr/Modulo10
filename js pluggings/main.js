$(document).ready(function(){
    $('#carousel-imagens').slick({
        autoplay: true,
        arrows: true
    });
    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle(); /*faz com que o elemento apareça ou desapareça suavemente, deslizando para cima ou para baixo*/ 
    })

    $('#campo-telefone').mask('(00) 0000-0000')

    $('form').validate({ /*o plugging de validate trabalha com o atributo name das funçoes que vào ser chamadas*/
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome'
        },
        submitHandler: function(form){
            console.log(form)
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numbersofInvalids();
            if (camposIncorretos) {
                alert ('Existem ${camposIncorretos} campos incorretos')
            }
        }
    })
    $('.lista-veiculos button').click(function(){
        const destino = $(çontato);
        $(html).animate({
            scrollTop: destino.offset().top
        }, 100)
    })
})
