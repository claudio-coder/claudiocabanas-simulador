let turnoCintya = 0;
let turnoEduardo = 0;
let turnoPatricia = 0;
let turnoDaniel = 0;
let turnoElvira = 0;
let turnoSilvina = 0;
let turnoAlejandra = 0;
let turnoLeonardo = 0;
let turnoSusana = 0;

const MAX_TURNOS = 5

let servicio;
let nombre;

setTimeout(() => {
    do {
        do {
            servicio = prompt("Ingrese el numero de servicio");
        } while (servicio < 1 || servicio >= 11)


        switch (servicio) {
            case "1":
                alert("Dra Elvira");
                if (turnoElvira < MAX_TURNOS) {
                    do {
                        nombre = prompt("Ingrese el nombre del paciente");
                    } while (nombre === "")

                    turnoElvira++;

                    alert(`Turno #${turnoElvira} Nombre : ${nombre} Dra Elvira`);
                } else {
                    alert("se terminaron los turnos")
                }
                break;
            case "2":
                alert("Dr. Eduardo");
                if (turnoEduardo < MAX_TURNOS) {
                    do {
                        nombre = prompt("Ingrese el nombre del paciente");
                    } while (nombre === "")

                    turnoEduardo++;

                    alert(`Turno #${turnoEduardo} Nombre : ${nombre} Dr. Eduardo`);
                } else {
                    alert("se terminaron los turnos")
                }
                break;
            case "3":
                alert("Dra Patricia");
                if (turnoPatricia < MAX_TURNOS) {
                    do {
                        nombre = prompt("Ingrese el nombre del paciente");
                    } while (nombre === "")

                    turnoPatricia++;

                    alert(`Turno #${turnoPatricia} Nombre : ${nombre} Dra Patricia`);
                } else {
                    alert("se terminaron los turnos")
                }
                break;
            case "4":
                alert("Dra Cintya");
                if (turnoCintya < MAX_TURNOS) {
                    do {
                        nombre = prompt("Ingrese el nombre del paciente");
                    } while (nombre === "")

                    turnoCintya++;

                    alert(`Turno #${turnoCintya} Nombre : ${nombre} Dra Cintya`);
                } else {
                    alert("se terminaron los turnos")
                }
                break;
            case "5":
                alert("Dr. Daniel");
                if (turnoDaniel < MAX_TURNOS) {
                    do {
                        nombre = prompt("Ingrese el nombre del paciente");
                    } while (nombre === "")

                    turnoDaniel++;

                    alert(`Turno #${turnoDaniel} Nombre : ${nombre} Dr. Daniel`);
                } else {
                    alert("se terminaron los turnos")
                }
                break;
            case "6":
                alert("Dra. Alejandra");
                if (turnoAlejandra < MAX_TURNOS) {
                    do {
                        nombre = prompt("Ingrese el nombre del paciente");
                    } while (nombre === "")

                    turnoAlejandra++;

                    alert(`Turno #${turnoAlejandra} Nombre : ${nombre} Dra. Alejandra`);
                } else {
                    alert("se terminaron los turnos")
                }
                break;
            case "7":
                alert("Dr. Leonardo");
                if (turnoLeonardo < MAX_TURNOS) {
                    do {
                        nombre = prompt("Ingrese el nombre del paciente");
                    } while (nombre === "")

                    turnoLeonardo++;

                    alert(`Turno #${turnoLeonardo} Nombre : ${nombre} Dr. Leonardo`);
                } else {
                    alert("se terminaron los turnos")
                }
                break;
            case "8":
                alert("Dra Patricia");
                if (turnoPatricia < MAX_TURNOS) {
                    do {
                        nombre = prompt("Ingrese el nombre del paciente");
                    } while (nombre === "")

                    turnoPatricia++;

                    alert(`Turno #${turnoPatricia} Nombre : ${nombre} Dra Patricia`);
                } else {
                    alert("se terminaron los turnos")
                }
                break;
            case "9":
                alert("Sra. Silvina");
                if (turnoSilvina < MAX_TURNOS) {
                    do {
                        nombre = prompt("Ingrese el nombre del paciente");
                    } while (nombre === "")

                    turnoSilvina++;

                    alert(`Turno #${turnoSilvina} Nombre : ${nombre} Sra. Silvina`);
                } else {
                    alert("se terminaron los turnos")
                }
                break;
            case "10":
                alert("Sra. Susana");
                if (turnoSusana < MAX_TURNOS) {
                    do {
                        nombre = prompt("Ingrese el nombre del paciente");
                    } while (nombre === "")

                    turnoSusana++;

                    alert(`Turno #${turnoSusana} Nombre : ${nombre} Sra. Susana`);
                } else {
                    alert("se terminaron los turnos")
                }
                break;

            default:
                break;

        }
    }
    while (turnoCintya < MAX_TURNOS || turnoEduardo < MAX_TURNOS || turnoPatricia < MAX_TURNOS || turnoDaniel < MAX_TURNOS
    || turnoElvira < MAX_TURNOS || turnoSilvina < MAX_TURNOS || turnoAlejandra < MAX_TURNOS || turnoLeonardo < MAX_TURNOS || turnoSusana < MAX_TURNOS)

}, 500)
