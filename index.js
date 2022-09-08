let turnosCintya = [];
let turnosEduardo = [];
let turnosPatricia = [];
let turnosDaniel = [];
let turnosElvira = [];
let turnosSilvina = [];
let turnosAlejandra = [];
let turnosLeonardo = [];
let turnosSusana = [];

const MAX_TURNOS = 5;
const TIEMPO_TURNO = 15;

let servicio;
let nombrePaciente;
let nombreCliente;


function recibirNombre(texto) {
    let nombre;
    do {
        nombre = prompt(texto);
    } while (nombre === "")

    return nombre;
}

function asignarTurno(turnosProfesional, nombreProfesional, servicio) {
    alert(nombreProfesional);
    if (turnosProfesional.length < MAX_TURNOS) {

        nombrePaciente = recibirNombre("Ingrese el nombre del paciente");
        nombreCliente = recibirNombre("Ingrese el nombre del cliente");

        const turno = {
            nombrePaciente, nombreCliente, servicio
        };

        turnosProfesional.push(turno);

        alert(`Turno #${turnosProfesional.length} Paciente: ${nombrePaciente} Cliente: ${nombreCliente} ${nombreProfesional} Tiempo de espera: ${TIEMPO_TURNO * (turnosProfesional.length - 1)}`);
    } else {
        alert("se terminaron los turnos")
    }
}


function solicitarServicioAUsuario(servicio) {
    do {
        servicio = prompt("Ingrese el numero de servicio");
    } while (servicio < 1 || servicio >= 11)

    return servicio;
}

function comenzarDiaLaboral() {
    servicio = solicitarServicioAUsuario(servicio);

    switch (servicio) {
        case "1": {
            asignarTurno(turnosElvira, "Dra. Elvira", "Clínica general")
            break;
        }
        case "2": {
            asignarTurno(turnosEduardo, "Dr. Eduardo", "Cirugía")
            break;
        }
        case "3": {
            asignarTurno(turnosPatricia, "Dra. Patricia", "Medicina Holistica")
            break;
        }
        case "4": {
            asignarTurno(turnosCintya, "Dra. Cintya", "Metodos de Diagnostico")
            break;
        }
        case "5": {
            asignarTurno(turnosDaniel, "Dr. Daniel", "Ecografias/Electrocardiogramas")
            break;
        }
        case "6": {
            asignarTurno(turnosAlejandra, "Dra. Alejandra", "Oncología")
            break;
        }
        case "7": {
            asignarTurno(turnosLeonardo, "Dr. Leonardo", "Exóticos")
            break;
        }
        case "8": {
            asignarTurno(turnosPatricia, "Dra. Patricia", "Fisioterapia")
            break;
        }
        case "9": {
            asignarTurno(turnosSilvina, "Sra. Silvina", "Farmacia")
            break;
        }
        case "10": {
            asignarTurno(turnosSusana, "Sra. Susana", "Baños y Peluqueria")
            break;
        }
        default:
            break;

    }
}

function anularTurno() {

    nombrePaciente = recibirNombre("Ingrese el nombre del paciente");
    nombreCliente = recibirNombre("Ingrese el nombre del cliente");

    const turnosTotales = [...turnosElvira, ...turnosCintya, ...turnosEduardo, ...turnosAlejandra, ...turnosDaniel, ...turnosLeonardo, ...turnosPatricia, ...turnosSilvina, ...turnosSusana];
    const turnosReservados = turnosTotales.filter(unTurno => unTurno.nombrePaciente === nombrePaciente && unTurno.nombreCliente === nombreCliente);

    const serviciosTotales = turnosReservados.map(unTurno => `${unTurno.servicio}`);
    const serviciosNoRepetidos = [...new Set(serviciosTotales)];

    let mensaje = "";
    serviciosNoRepetidos.forEach((servicio, index) => {
        mensaje += `${index + 1} - ${servicio} \n`;
    })
    const reservaAnulada = prompt("Ingrese el ITEM a Anular", mensaje);

    const reservaBajada = (reservaAnulada - 1);

    const servicioAnulado = (serviciosNoRepetidos[reservaBajada]);

    if (servicioAnulado === "Clínica general") {

        turnosElvira = turnosElvira.filter(turnoNoAnulado => turnoNoAnulado.nombrePaciente !== nombrePaciente && turnoNoAnulado.nombreCliente !== nombreCliente);

    } else if (servicioAnulado === "Cirugía") {

        turnosEduardo = turnosEduardo.filter(turnoNoAnulado => turnoNoAnulado.nombrePaciente !== nombrePaciente && turnoNoAnulado.nombreCliente !== nombreCliente);
    } else if (servicioAnulado === "Medicina Holistica") {

        turnosPatricia = turnosPatricia.filter(turnoNoAnulado => turnoNoAnulado.nombrePaciente !== nombrePaciente && turnoNoAnulado.nombreCliente !== nombreCliente);
    } else if (servicioAnulado === "Metodos de Diagnostico") {

        turnosEduardo = turnosEduardo.filter(turnoNoAnulado => turnoNoAnulado.nombrePaciente !== nombrePaciente && turnoNoAnulado.nombreCliente !== nombreCliente);
    } else if (servicioAnulado === "Ecografias/Electrocardiogramas") {

        turnosEduardo = turnosEduardo.filter(turnoNoAnulado => turnoNoAnulado.nombrePaciente !== nombrePaciente && turnoNoAnulado.nombreCliente !== nombreCliente);
    } else if (servicioAnulado === "Oncología") {

        turnosEduardo = turnosEduardo.filter(turnoNoAnulado => turnoNoAnulado.nombrePaciente !== nombrePaciente && turnoNoAnulado.nombreCliente !== nombreCliente);
    } else if (servicioAnulado === "Exóticos") {

        turnosEduardo = turnosEduardo.filter(turnoNoAnulado => turnoNoAnulado.nombrePaciente !== nombrePaciente && turnoNoAnulado.nombreCliente !== nombreCliente);
    } else if (servicioAnulado === "Fisioterapia") {

        turnosEduardo = turnosEduardo.filter(turnoNoAnulado => turnoNoAnulado.nombrePaciente !== nombrePaciente && turnoNoAnulado.nombreCliente !== nombreCliente);
    } else if (servicioAnulado === "Farmacia") {

        turnosEduardo = turnosEduardo.filter(turnoNoAnulado => turnoNoAnulado.nombrePaciente !== nombrePaciente && turnoNoAnulado.nombreCliente !== nombreCliente);
    } else if (servicioAnulado === "Baños y Peluqueria") {

        turnosEduardo = turnosEduardo.filter(turnoNoAnulado => turnoNoAnulado.nombrePaciente !== nombrePaciente && turnoNoAnulado.nombreCliente !== nombreCliente);

    }
}
setTimeout(() => {

    do {
        const opcion = prompt("Ingrese 1 para PEDIR TURNO o 2 para ANULAR");
        if (opcion === "1") {

            comenzarDiaLaboral();

        } else if (opcion === "2") {
            anularTurno();
        } else {
            alert("Pusiste algo mal");
        }

    }
    while (true)
}, 500)
