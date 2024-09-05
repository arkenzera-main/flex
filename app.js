/**
 * @author Bruno Politi Romero
 * App para flex js sei la quero morrer
 */

let gasolina, etanol

function calcular(){
    etanol = frmFlex.inputEtanol.value
    gasolina = frmFlex.inputGasolina.value
    if (etanol < 0.7 * gasolina) {
        document.getElementById('status').src = "img/etanol.png"
    } else{
        document.getElementById('status').src = "img/gasolina.png"
    }
    return false //para nao submeter o formulario 

}