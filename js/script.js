let cryptoOption = document.getElementById(`cryptoOption`);
let cryptoMount = document.getElementById("cryptoMount");
let buttonCompra = document.getElementById(`buttonCompra`);
let result = document.getElementById(`result`);
let verSaldos = document.getElementById(`verSaldos`);

buttonCompra.onclick = (e) => {
    //Se previene la recarga de la pagina
    e.preventDefault();

    //Se parsea el monto a comprar, suma la cantidad a la wallet
    cryptoMount.value = +(cryptoMount.value);

    let compraActual = cryptoMount.value / (monedasListadas)[+(cryptoOption.value)].valor;


    cargarSaldo (+(cryptoOption.value), compraActual)



    result.innerHTML = `<h1>Compraste:</h1>
                        <p>Cantidad: ${compraActual}</p>
                        <p>Moneda: ${(monedasListadas)[+(cryptoOption.value)].nombre}</p>`


    cryptoMount.value = ``;


}

cargarSaldo = (index, cantidad) =>{
    
    let monedasListadas = JSON.parse(localStorage.getItem(`monedasListadasenJSON`))
    monedasListadas[index].wallet += cantidad;

    localStorage.setItem(`monedasListadasenJSON`, JSON.stringify(monedasListadas));
}


verSaldos.onclick = (e) =>{
    e.preventDefault();

    mostrarSaldo();

}


mostrarSaldo = () => {
    let saldos = JSON.parse(localStorage.getItem(`monedasListadasenJSON`));

    result.innerHTML = `<h1>Wallet</h1>`;

    for (i = 0; i < monedasListadas.length; i++){
        let walletVision = document.createElement(`div`)
        walletVision.className = `contenedorSaldos`
        walletVision.innerHTML = `<p>Moneda: ${saldos[i].nombre}</p>
                                <p>Cantidad: ${saldos[i].wallet}</p>`

        result.append(walletVision);
    }

}

