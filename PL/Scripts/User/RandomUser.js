$(document).ready(function () {
    GetAll();
});


function GetAll() {
        $.ajax({
            type: "GET",
            url: "https://randomuser.me/api/",
          
            success: function (result) {
                var filas =
                    "<tr>"
                    + "<td class='text-center'>" + result.results[0].name.title + " " + result.results[0].name.first + " " + result.results[0].name.last + "</td>"
                    + "<td class='text-center'>" + result.results[0].email + "</td>"
                    + "<td class='text-center'>" + result.results[0].location.street.number + "" + result.results[0].location.street.name + "</td>"
                    + "<td class='text-center'>" + result.results[0].gender + "</td>"
                    + "<td class='text-center'>" + "<img src=" + result.results[0].picture.large + ">" + "</td>"
                    + "</tr>";
                $("#table tbody").append(filas);
              
            },
            error: function (result) {
                alert('Error al consultar' + result.responseJSON.ErrorMessage);
            }
        });
};

