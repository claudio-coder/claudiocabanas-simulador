let turnoCintya = 0; tiempoEsperaCintya = 0;
let turnoEduardo = 0; tiempoEsperaEduardo = 0;
let turnoPatricia = 0; tiempoEsperaPatricia = 0;
let turnoDaniel = 0; tiempoEsperaDaniel = 0;
let turnoElvira = 0; tiempoEsperaElvira = 0;
let turnoSilvina = 0; tiempoEsperaSilvina = 0;
let turnoAlejandra = 0; tiempoEsperaAlejandra = 0;
let turnoLeonardo = 0; tiempoEsperaLeonardo = 0;
let turnoSusana = 0; tiempoEsperaSusana = 0;

const MAX_TURNOS = 5;
const TIEMPO_TURNO = 15;

let servicio;
let nombre;
// let turno;
// let tiempoDeServicio;
// let turnoDeServicio;

function asignarTurno(turnoProfesional, tiempoEspera, nombreProfesional) {
    alert(nombreProfesional);
    if (turnoProfesional < MAX_TURNOS) {
        do {
            nombre = prompt("Ingrese el nombre del paciente");
        } while (nombre === "")

        turnoProfesional++;
        if (turnoProfesional > 1) {
            tiempoEspera += TIEMPO_TURNO;
        }

        alert(`Turno #${turnoProfesional} Nombre : ${nombre} ${nombreProfesional} Tiempo de espera: ${tiempoEspera}`);
    } else {
        alert("se terminaron los turnos")
    }

    return {
        turnoDeServicio: turnoProfesional,
        tiempoDeServicio: tiempoEspera,
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
            const { turnoDeServicio, tiempoDeServicio } = asignarTurno(turnoElvira, tiempoEsperaElvira, "Dra. Elvira")
            turnoElvira = turnoDeServicio;
            tiempoEsperaElvira = tiempoDeServicio;
            break;
        }
        case "2": {
            const { turnoDeServicio, tiempoDeServicio } = asignarTurno(turnoEduardo, tiempoEsperaEduardo, "Dr. Eduardo")
            turnoEduardo = turnoDeServicio;
            tiempoEsperaEduardo = tiempoDeServicio;
            break;
        }
        case "3": {
            const { turnoDeServicio, tiempoDeServicio } = asignarTurno(turnoPatricia, tiempoEsperaPatricia, "Dra. Patricia")
            turnoPatricia = turnoDeServicio;
            tiempoEsperaPatricia = tiempoDeServicio;
            break;
        }
        case "4": {
            const { turnoDeServicio, tiempoDeServicio } = asignarTurno(turnoCintya, tiempoEsperaCintya, "Dra. Cintya")
            turnoCintya = turnoDeServicio;
            tiempoEsperaCintya = tiempoDeServicio;
            break;
        }
        case "5": {
            const { turnoDeServicio, tiempoDeServicio } = asignarTurno(turnoDaniel, tiempoEsperaDaniel, "Dr. Daniel")
            turnoDaniel = turnoDeServicio;
            tiempoEsperaDaniel = tiempoDeServicio;
            break;
        }
        case "6": {
            const { turnoDeServicio, tiempoDeServicio } = asignarTurno(turnoAlejandra, tiempoEsperaAlejandra, "Dra. Alejandra")
            turnoAlejandra = turnoDeServicio;
            tiempoEsperaAlejandra = tiempoDeServicio;
            break;
        }
        case "7": {
            const { turnoDeServicio, tiempoDeServicio } = asignarTurno(turnoLeonardo, tiempoEsperaLeonardo, "Dr. Leonardo")
            turnoLeonardo = turnoDeServicio;
            tiempoEsperaLeonardo = tiempoDeServicio;
            break;
        }
        case "8": {
            const { turnoDeServicio, tiempoDeServicio } = asignarTurno(turnoPatricia, tiempoEsperaPatricia, "Dra. Patricia")
            turnoPatricia = turnoDeServicio;
            tiempoEsperaPatricia = tiempoDeServicio;
            break;
        }
        case "9": {
            const { turnoDeServicio, tiempoDeServicio } = asignarTurno(turnoSilvina, tiempoEsperaSilvina, "Sra. Silvina")
            turnoSilvina = turnoDeServicio;
            tiempoEsperaSilvina = tiempoDeServicio;
            break;
        }
        case "10": {
            const { turnoDeServicio, tiempoDeServicio } = asignarTurno(turnoSusana, tiempoEsperaSusana, "Sra. Susana")
            turnoSusana = turnoDeServicio;
            tiempoEsperaSusana = tiempoDeServicio;
            break;
        }
        default:
            break;

    }
}

setTimeout(() => {
    do {
        comenzarDiaLaboral()
    }
    while (turnoCintya < MAX_TURNOS || turnoEduardo < MAX_TURNOS || turnoPatricia < MAX_TURNOS || turnoDaniel < MAX_TURNOS
    || turnoElvira < MAX_TURNOS || turnoSilvina < MAX_TURNOS || turnoAlejandra < MAX_TURNOS || turnoLeonardo < MAX_TURNOS || turnoSusana < MAX_TURNOS)

}, 500)
