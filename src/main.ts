import { pacientes } from "./datos";
import {Pacientes} from "./modelo";

//Apartado 1

//a) Queremos extraer la lista de paciente que están asignados a la especialidad de Pediatría

const obtenPacientesAsignadosAPediatria = (pacientes : Pacientes[]) : Pacientes[] => {
    let obternerPacientesPediatria : Pacientes[] = [];
    obternerPacientesPediatria = pacientes.filter((paciente) => {
        return paciente.especialidad === "Pediatra";
    })
    return obternerPacientesPediatria;
    }

console.log(obtenPacientesAsignadosAPediatria(pacientes));

//b) Queremos extraer la lista de pacientes asignados a Pediatría y que tengan una edad menor de 10 años.

const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (pacientes: Pacientes[]) : Pacientes[] => {
    let listPacientesPediatria : Pacientes[] = [];
    pacientes.map((paciente) => {
        if(paciente.especialidad === "Pediatra" && paciente.edad < 10){
            listPacientesPediatria = [...listPacientesPediatria, paciente]
        }
        return paciente;
    })
    return listPacientesPediatria;
  };

console.log(obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes))

//Apartado 2

const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  let activarProctolo = false;
  activarProctolo = pacientes.some((paciente)=>paciente.frecuenciaCardiaca > 100 && paciente.temperatura > 39);
  return activarProctolo;
};

console.log(activarProtocoloUrgencia(pacientes))

  //Apartado 3

const reasignaPacientesAMedicoFamilia = (
  pacientes: Pacientes[]
): Pacientes[] => {
  const reasignacionPacientes: Pacientes[] = pacientes.map((paciente) => {
    if (paciente.especialidad === "Pediatra") {
      return { ...paciente, especialidad: "Medico de familia" };
    }
    return paciente;
  });
  return reasignacionPacientes;
};
console.log(reasignaPacientesAMedicoFamilia(pacientes))

  //Apartado 4
  const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
    let hayPacientes : boolean = false;
    hayPacientes = pacientes.some((paciente)=>paciente.especialidad === "Pediatra")
    return hayPacientes
  };
  console.log(HayPacientesDePediatria(pacientes))

  //Apartado 5

  interface NumeroPacientesPorEspecialidad {
    medicoDeFamilia: number;
    pediatria: number;
    cardiologia: number;
  }
  let numeroPacientes : NumeroPacientesPorEspecialidad = {
    medicoDeFamilia: 0,
    pediatria: 0,
    cardiologia: 0,
  };

  const cuentaPacientesPorEspecialidad = (
    pacientes: Pacientes[]
  ): NumeroPacientesPorEspecialidad => {
    pacientes.forEach((paciente)=>{
      if(paciente.especialidad === "Cardiólogo"){
        numeroPacientes.cardiologia += 1;
    }else if (paciente.especialidad === "Medico de familia"){
        numeroPacientes.medicoDeFamilia += 1;
    }else{
        numeroPacientes.pediatria += 1;
    }
    })
    return numeroPacientes;
  };

  console.log(cuentaPacientesPorEspecialidad(pacientes))