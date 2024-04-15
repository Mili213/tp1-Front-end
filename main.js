 function validarFormulario() {
        var form = document.getElementById("alumno-form");
        var nombre = form.nombre.value;
        var apellido = form.apellido.value;
        var legajo = form.legajo.value;
        var email = form.email.value;

        if (!nombre || !apellido || !legajo || !email) {
            mostrarError("Todos los campos son obligatorios.");
            return false;
        }

        if (!validarEmail(email)) {
            mostrarError("El formato del correo electrónico no es válido.");
            return false;
        }

        return true;
    }

    function mostrarError(mensaje) {
        var errorDiv = document.getElementById("error-message");
        errorDiv.innerText = mensaje;
        errorDiv.style.display = "block";
        setTimeout(function() {
            errorDiv.style.display = "none";
        }, 3000);
    }

    function validarEmail(email) {
        var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    function calcularPromedio() {
        var nota1 = parseFloat(document.getElementById("nota1").value);
        var nota2 = parseFloat(document.getElementById("nota2").value);
        var nota3 = parseFloat(document.getElementById("nota3").value);
        var nota4 = parseFloat(document.getElementById("nota4").value);
        var nota5 = parseFloat(document.getElementById("nota5").value);

        var totalNotas = 0;
        var cantidadNotas = 0;

        if (!isNaN(nota1)) {
            totalNotas += nota1;
            cantidadNotas++;
        }
        if (!isNaN(nota2)) {
            totalNotas += nota2;
            cantidadNotas++;
        }
        if (!isNaN(nota3)) {
            totalNotas += nota3;
            cantidadNotas++;
        }
        if (!isNaN(nota4)) {
            totalNotas += nota4;
            cantidadNotas++;
        }
        if (!isNaN(nota5)) {
            totalNotas += nota5;
            cantidadNotas++;
        }

        if (cantidadNotas > 0) {
        var promedio = totalNotas / cantidadNotas;
        document.getElementById("resultado-promedio").innerText = "Promedio: " + promedio.toFixed(2);
    } else {
        document.getElementById("resultado-promedio").innerText = "";
    }
    }
