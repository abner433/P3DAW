function obtieneInformacion(pagina) {
    const url = `https://reqres.in/api/users?page=${pagina}`;
    $.ajax({
        url: url,
        method: 'GET',
        success: function(response) {
            procesaInformacion(response);
        },
        error: function(error) {
            console.error("Error al obtener información: ", error);
        }
    });
}

function procesaInformacion(data) {
    $('#tarjetas').empty();
    data.data.forEach(user => {
        const cardHTML = `
            <div class="card">
                <h3 class="card-title">${user.first_name} ${user.last_name}</h3>
                <img class="card-image" src="${user.avatar}" alt="${user.first_name}">
                <div class="bodyCard">${user.email}</div>
            </div>
        `;
        $('#tarjetas').append(cardHTML);
    });
}

$(function() {
    obtieneInformacion("1");
    $('#btnConsulta').click(function() {
        let textoBtn = $(this).text();
        if (textoBtn == "Página 2") {
            obtieneInformacion("2");
            $(this).text("Página 1");
        } else {
            obtieneInformacion("1");
            $(this).text("Página 2");
        }
    });
});
