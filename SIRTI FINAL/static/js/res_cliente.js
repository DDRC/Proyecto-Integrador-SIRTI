var datos = localStorage.getItem("n_viajes");
var str = datos.replace(/[":,\{\}\[\]]/g, ' ');
console.log(str);
var datosfinales = str.split("   ");
var cosa = [];
var ac = 0;
datosfinales.forEach(function (item, index) {
    if (index % 2 === 0) {
        cosa.push(datosfinales[index]);
    }
})
console.log(cosa);
var ac = 1;
var cont = 0;
var tb = document.getElementById("tb_viajes");
var tr = document.createElement("tr");
var td = document.createElement("td");
var identificador = 0;
var identificador1 = 100;

function llenarTabla() {
    if (ac === cosa.length) {
        var entry = document.createElement("input");
        entry.setAttribute("type", "number");
        entry.setAttribute("id", identificador1);
        entry.setAttribute("min", "1");
        entry.setAttribute("max", "10");

        var rad = document.createElement("input");
        rad.setAttribute("type", "radio");
        rad.setAttribute("id", identificador);
        rad.setAttribute("name", "select");
        td = document.createElement("td");
        td1 = document.createElement("td");
        td.appendChild(entry);
        td1.appendChild(rad);
        tr.appendChild(td);
        tr.appendChild(td1);
        tb.appendChild(tr);
    } else {
        if (cont === 8) {
            var entry = document.createElement("input");
            entry.setAttribute("type", "number");
            entry.setAttribute("id", identificador1);
            entry.setAttribute("min", "1");
            entry.setAttribute("max", "10");

            var rad = document.createElement("input");
            rad.setAttribute("type", "radio");
            rad.setAttribute("id", identificador);
            rad.setAttribute("name", "select");
            td = document.createElement("td");
            td1 = document.createElement("td");
            td.appendChild(entry);
            td1.appendChild(rad);
            tr.appendChild(td);
            tr.appendChild(td1);
            tb.appendChild(tr);
            tr = document.createElement("tr");
            ac--;
            cont = 0;
            identificador++;
            identificador1++;
        } else {
            td = document.createElement("td");
            td.appendChild(document.createTextNode(cosa[ac]));
            tr.appendChild(td);
            tb.appendChild(tr);
            cont++;
        }
        ac++;
        return (llenarTabla());
    }
}
llenarTabla();

function Dts_reservas(name, lastname, phonenumber, cedula, tPagar, coop, destino, fSalida, hSalida, nUnidad, nAnden, bReservados) {
    this.name = name;
    this.lastname = lastname;
    this.phonenumber = phonenumber;
    this.cedula = cedula;
    this.tPagar = tPagar;
    this.coop = coop;
    this.destino = destino;
    this.fSalida = fSalida;
    this.hSalida = hSalida;
    this.nUnidad = nUnidad;
    this.nAnden = nAnden;
    this.bReservados = bReservados;
}
var Reservas = [];



function Reserva() {
    var nCliente = document.getElementById("nombre").value;
    var aCliente = document.getElementById("apellido").value;
    var tCliente = document.getElementById("telefono").value;
    var cCliente = document.getElementById("cedula").value;
    var vReserva = document.getElementById("valor");


    var verificador = -1;
    var seleccionainador = false;
    function check() {
        if (seleccionainador === true || verificador == identificador) {
            if (seleccionainador == false) {
                return -1;
            } else {
                console.log(verificador);
                return verificador;
            }
        } else {
            verificador++;
            if (document.getElementById(verificador).checked) {
                seleccionainador = true;
            }
            return check();
        }
    }
    switch (check()) {
        case -1:
            alert("Primero escoja una opcion de viajes")
            break;
        case 0:
            if (document.getElementById("nombre").value === "" || document.getElementById("apellido").value === "" || document.getElementById("telefono").value === "" || document.getElementById("cedula").value === "" || document.getElementById("100").value === "") {
                alert("Llene sus datos primero");
            } else {
                vReserva.value = (document.getElementById("100").value * cosa[7]);
                var ndisp = cosa[8] - document.getElementById("100").value;
                cosa.splice(8, 1, ndisp);
                Reservas.push(new Dts_reservas(nCliente, aCliente, tCliente, cCliente, vReserva.value, cosa[1], cosa[2], cosa[3], cosa[4], cosa[5], cosa[6], document.getElementById("100").value));
                confirm("La reserva ha sido realizada, por favor realize el pago de " + vReserva.value + " dolares, dentro de 24 horas, de lo contrario la reserva sera cancelada")
                document.getElementById("nombre").value = "";
                document.getElementById("apellido").value = "";
                document.getElementById("telefono").value = "";
                document.getElementById("cedula").value = "";
                document.getElementById("100").value = "";
                document.getElementById("0").checked = false;
                document.getElementById("nombre").focus();

                break;
            }
        case 1:
            if (document.getElementById("nombre").value === "" || document.getElementById("apellido").value === "" || document.getElementById("telefono").value === "" || document.getElementById("cedula").value === "" || document.getElementById("101").value === "") {
                alert("Llene sus datos primero");
            } else {
                vReserva.value = (document.getElementById("101").value * cosa[15]);
                var ndisp = cosa[16] - document.getElementById("101").value;
                cosa.splice(16, 1, ndisp);
                Reservas.push(new Dts_reservas(nCliente, aCliente, tCliente, cCliente, vReserva.value, cosa[9], cosa[10], cosa[11], cosa[12], cosa[13], cosa[14], document.getElementById("101").value));
                confirm("La reserva ha sido realizada, por favor realize el pago de " + vReserva.value + " dolares, dentro de 24 horas, de lo contrario la reserva sera cancelada")
                document.getElementById("nombre").value = "";
                document.getElementById("apellido").value = "";
                document.getElementById("telefono").value = "";
                document.getElementById("cedula").value = "";
                document.getElementById("101").value = "";
                document.getElementById("1").checked = false;
                document.getElementById("nombre").focus();

                break;
            }
        case 2:
            if (document.getElementById("nombre").value === "" || document.getElementById("apellido").value === "" || document.getElementById("telefono").value === "" || document.getElementById("cedula").value === "" || document.getElementById("102").value === "") {
                alert("Llene sus datos primero");
            } else {
                vReserva.value = (document.getElementById("102").value * cosa[23]);
                var ndisp = cosa[24] - document.getElementById("102").value;
                cosa.splice(24, 1, ndisp);
                Reservas.push(new Dts_reservas(nCliente, aCliente, tCliente, cCliente, vReserva.value, cosa[17], cosa[18], cosa[19], cosa[20], cosa[21], cosa[22], document.getElementById("102").value));
                confirm("La reserva ha sido realizada, por favor realize el pago de " + vReserva.value + " dolares, dentro de 24 horas, de lo contrario la reserva sera cancelada")
                document.getElementById("nombre").value = "";
                document.getElementById("apellido").value = "";
                document.getElementById("telefono").value = "";
                document.getElementById("cedula").value = "";
                document.getElementById("102").value = "";
                document.getElementById("2").checked = false;
                document.getElementById("nombre").focus();

                break;
            }
        case 3:
            if (document.getElementById("nombre").value === "" || document.getElementById("apellido").value === "" || document.getElementById("telefono").value === "" || document.getElementById("cedula").value === "" || document.getElementById("103").value === "") {
                alert("Llene sus datos primero");
            } else {
                vReserva.value = (document.getElementById("103").value * cosa[31]);
                var ndisp = cosa[32] - document.getElementById("103").value;
                cosa.splice(32, 1, ndisp);
                Reservas.push(new Dts_reservas(nCliente, aCliente, tCliente, cCliente, vReserva.value, cosa[25], cosa[26], cosa[27], cosa[28], cosa[29], cosa[30], document.getElementById("103").value));
                confirm("La reserva ha sido realizada, por favor realize el pago de " + vReserva.value + " dolares, dentro de 24 horas, de lo contrario la reserva sera cancelada")
                document.getElementById("nombre").value = "";
                document.getElementById("apellido").value = "";
                document.getElementById("telefono").value = "";
                document.getElementById("cedula").value = "";
                document.getElementById("103").value = "";
                document.getElementById("3").checked = false;
                document.getElementById("nombre").focus();

                break;
            }
        case 4:
            if (document.getElementById("nombre").value === "" || document.getElementById("apellido").value === "" || document.getElementById("telefono").value === "" || document.getElementById("cedula").value === "" || document.getElementById("104").value === "") {
                alert("Llene sus datos primero");
            } else {
                vReserva.value = (document.getElementById("104").value * cosa[39]);
                var ndisp = cosa[40] - document.getElementById("104").value;
                cosa.splice(40, 1, ndisp);
                Reservas.push(new Dts_reservas(nCliente, aCliente, tCliente, cCliente, vReserva.value, cosa[33], cosa[34], cosa[35], cosa[36], cosa[37], cosa[38], document.getElementById("104").value));
                confirm("La reserva ha sido realizada, por favor realize el pago de " + vReserva.value + " dolares, dentro de 24 horas, de lo contrario la reserva sera cancelada")
                document.getElementById("nombre").value = "";
                document.getElementById("apellido").value = "";
                document.getElementById("telefono").value = "";
                document.getElementById("cedula").value = "";
                document.getElementById("104").value = "";
                document.getElementById("4").checked = false;
                document.getElementById("nombre").focus();
                break;
            }
        case 5:
            if (document.getElementById("nombre").value === "" || document.getElementById("apellido").value === "" || document.getElementById("telefono").value === "" || document.getElementById("cedula").value === "" || document.getElementById("105").value === "") {
                alert("Llene sus datos primero");
            } else {
                vReserva.value = (document.getElementById("105").value * cosa[47]);
                var ndisp = cosa[48] - document.getElementById("105").value;
                cosa.splice(48, 1, ndisp);
                Reservas.push(new Dts_reservas(nCliente, aCliente, tCliente, cCliente, vReserva.value, cosa[41], cosa[42], cosa[43], cosa[44], cosa[45], cosa[46], document.getElementById("105").value));
                confirm("La reserva ha sido realizada, por favor realize el pago de " + vReserva.value + " dolares, dentro de 24 horas, de lo contrario la reserva sera cancelada")
                document.getElementById("nombre").value = "";
                document.getElementById("apellido").value = "";
                document.getElementById("telefono").value = "";
                document.getElementById("cedula").value = "";
                document.getElementById("105").value = "";
                document.getElementById("5").checked = false;
                document.getElementById("nombre").focus();

                break;
            }
        case 6:
            if (document.getElementById("nombre").value === "" || document.getElementById("apellido").value === "" || document.getElementById("telefono").value === "" || document.getElementById("cedula").value === "" || document.getElementById("106").value === "") {
                alert("Llene sus datos primero");
            } else {
                vReserva.value = (document.getElementById("106").value * cosa[55]);
                var ndisp = cosa[56] - document.getElementById("106").value;
                cosa.splice(56, 1, ndisp);
                Reservas.push(new Dts_reservas(nCliente, aCliente, tCliente, cCliente, vReserva.value, cosa[49], cosa[50], cosa[51], cosa[52], cosa[53], cosa[54], document.getElementById("106").value));
                confirm("La reserva ha sido realizada, por favor realize el pago de " + vReserva.value + " dolares, dentro de 24 horas, de lo contrario la reserva sera cancelada")
                document.getElementById("nombre").value = "";
                document.getElementById("apellido").value = "";
                document.getElementById("telefono").value = "";
                document.getElementById("cedula").value = "";
                document.getElementById("106").value = "";
                document.getElementById("6").checked = false;
                document.getElementById("nombre").focus();

                break;
            }
        case 7:
            if (document.getElementById("nombre").value === "" || document.getElementById("apellido").value === "" || document.getElementById("telefono").value === "" || document.getElementById("cedula").value === "" || document.getElementById("107").value === "") {
                alert("Llene sus datos primero");
            } else {
                vReserva.value = (document.getElementById("107").value * cosa[63]);
                var ndisp = cosa[64] - document.getElementById("107").value;
                cosa.splice(64, 1, ndisp);
                Reservas.push(new Dts_reservas(nCliente, aCliente, tCliente, cCliente, vReserva.value, cosa[57], cosa[58], cosa[59], cosa[60], cosa[61], cosa[62], document.getElementById("107").value));
                confirm("La reserva ha sido realizada, por favor realize el pago de " + vReserva.value + " dolares, dentro de 24 horas, de lo contrario la reserva sera cancelada")
                document.getElementById("nombre").value = "";
                document.getElementById("apellido").value = "";
                document.getElementById("telefono").value = "";
                document.getElementById("cedula").value = "";
                document.getElementById("107").value = "";
                document.getElementById("7").checked = false;
                document.getElementById("nombre").focus();

                break;
            }
        case 8:
            if (document.getElementById("nombre").value === "" || document.getElementById("apellido").value === "" || document.getElementById("telefono").value === "" || document.getElementById("cedula").value === "" || document.getElementById("108").value === "") {
                alert("Llene sus datos primero");
            } else {
                vReserva.value = (document.getElementById("108").value * cosa[71]);
                var ndisp = cosa[72] - document.getElementById("108").value;
                cosa.splice(72, 1, ndisp);
                Reservas.push(new Dts_reservas(nCliente, aCliente, tCliente, cCliente, vReserva.value, cosa[65], cosa[66], cosa[67], cosa[68], cosa[69], cosa[70], document.getElementById("108").value));
                confirm("La reserva ha sido realizada, por favor realize el pago de " + vReserva.value + " dolares, dentro de 24 horas, de lo contrario la reserva sera cancelada")
                document.getElementById("nombre").value = "";
                document.getElementById("apellido").value = "";
                document.getElementById("telefono").value = "";
                document.getElementById("cedula").value = "";
                document.getElementById("108").value = "";
                document.getElementById("8").checked = false;
                document.getElementById("nombre").focus();

                break;
            }
        case 9:
            if (document.getElementById("nombre").value === "" || document.getElementById("apellido").value === "" || document.getElementById("telefono").value === "" || document.getElementById("cedula").value === "" || document.getElementById("109").value === "") {
                alert("Llene sus datos primero");
            } else {
                vReserva.value = (document.getElementById("109").value * cosa[79]);
                var ndisp = cosa[80] - document.getElementById("109").value;
                cosa.splice(80, 1, ndisp);
                Reservas.push(new Dts_reservas(nCliente, aCliente, tCliente, cCliente, vReserva.value, cosa[73], cosa[74], cosa[75], cosa[76], cosa[77], cosa[78], document.getElementById("109").value));
                confirm("La reserva ha sido realizada, por favor realize el pago de " + vReserva.value + " dolares, dentro de 24 horas, de lo contrario la reserva sera cancelada")
                document.getElementById("nombre").value = "";
                document.getElementById("apellido").value = "";
                document.getElementById("telefono").value = "";
                document.getElementById("cedula").value = "";
                document.getElementById("109").value = "";
                document.getElementById("9").checked = false;
                document.getElementById("nombre").focus();

                break;
            }
    }
}

function inicio() {
    window.open(location.pathname + "../../index.html", "_top");
}

