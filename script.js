const CALCULAR = document.getElementById("calcular");
const ERROR = document.getElementById("error");
const FLU = document.getElementById("flu");
const MAN = document.getElementById("man");
const RESULTADOS = document.getElementById("resultados");

CALCULAR.addEventListener("click", () => {
    const pesoInput = document.getElementById("peso");
    const peso = parseFloat(pesoInput.value);
   
    if (!isNaN(peso)) {
        let resultadoFlu;
        let resultadoMan;

        if (peso <= 10) {
            resultadoFlu = peso * 100;
        } else if (peso <= 20) {
            resultadoFlu = 1000 + (peso - 10) * 50;
        } else {
            resultadoFlu = 1000 + 500 + (peso - 20) * 20;
        }

        resultadoMan = (peso + peso / 2) * 15;

        FLU.textContent = `Flu: ${resultadoFlu}cc/h`;
        MAN.textContent = `Man: ${resultadoMan}cc/h`;
        ERROR.style.display = "none";
        let flujo = calcFlujo(peso);
        let mantenimiento = flujo*1.5;
        FLU.innerHTML = flujo + ' cc/hr';
        MAN.innerHTML = 'm+m/2 ' + mantenimiento + ' cc/hr';
        FLU.style.display = 'block';
        MAN.style.display = 'block';

        //RESULTADOS.textContent = `Resultados:\nFlu: ${resultadoFlu}cc/h\nMan: ${resultadoMan}cc/h`;
        //RESULTADOS.style.display = "block"; 
    } else {
        ERROR.style.display = "block";
        FLU.textContent = "";
        MAN.textContent = "";
        //RESULTADOS.style.display = "none"; 
    }
});
function calcFlujo(peso){
    let resto = peso;
    let flujo = 0;
    if (resto>20){
        let aux = resto-20;
        flujo += aux*1;
        resto -= aux;
    } 
    if (resto>10){
        let aux = resto-10;
        flujo += aux*2;
        resto -= aux;
    }
    flujo += resto*4;
    return flujo;
}