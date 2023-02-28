const habilidadesToggle = document.getElementById('habilidadesToggle')
const interesesToggle = document.getElementById('interesesToggle')
const experienciaToggle = document.getElementById('experienciaToggle')
const abajo = document.querySelector('#abajo');
const arriba = document.querySelector('#arriba');
const abajoInt = document.querySelector('#abajoInteres');
const arribaInt = document.querySelector('#arribaInteres');
const arribaExp = document.querySelector('#arribaExp');
const abajoExp = document.querySelector('#abajoExp');


abajo.onclick  = () =>{
    habilidadesToggle.style.display = "block";
    abajo.style.display = "none";
    arriba.style.display = "block";
}

arriba.onclick  = () =>{
    habilidadesToggle.style.display = "none";
    abajo.style.display = "block";
    arriba.style.display = "none";
}

abajoInt.onclick  = () =>{
    interesesToggle.style.display = "block";
    abajoInt.style.display = "none";
    arribaInt.style.display = "block";
}

arribaInt.onclick  = () =>{
    interesesToggle.style.display = "none";
    abajoInt.style.display = "block";
    arribaInt.style.display = "none";
}

abajoExp.onclick  = () =>{
    experienciaToggle.style.display = "block";
    abajoExp.style.display = "none";
    arribaExp.style.display = "block";
}

arribaExp.onclick  = () =>{
    experienciaToggle.style.display = "none";
    abajoExp.style.display = "block";
    arribaExp.style.display = "none";
}

