$(document).ready(function () {
    $('#telefone').mask('(00) 00000-0000', { placeholder: '(__) _____-____' });

    $('form').validate({
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
            nome: "Informe o seu nome",
            email: "Informe em endereço de e-mail válido",
            telefone: "Informe o número do seu telefone celular"
        },

        submitHandler: function (form) {

        },

        invalidHandler: function (evento, validador) {
            let camposInvalidos = validador.numberOfInvalids();

            if (camposInvalidos) {
                alert(`Existem ${camposInvalidos} campos inválidos.`)
            } else {
                alert('O cadastro não será realizado, mas, pelo menos, os campos estão corretos.')
            }
        }
    })
});
