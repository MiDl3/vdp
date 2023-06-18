let transform
let destiny
let date1
let date2
let img

function search() {
    var clas = document.getElementsByName('optradio');
    var price = 150
    for (i = 0; i < clas.length; i++) {
        if (clas[i].checked)

            clas = clas[i].value
        transform = document.getElementById(`obj-R`)
        destiny = document.getElementById(`destiny`).value
        date1 = document.getElementById(`date1`).value
        date2 = document.getElementById(`date2`).value
        img = document.getElementById(`bus`)

        if (clas == `1`) {
            price = price
        }
        else {
            price = price + 80
        }
        if (date1 === "" || date2 === "" || date2 <= date1) {
            window.alert(`Você não selecionou uma data válida!`)
        }
        else {
            switch (destiny) {
                case `1`:
                    img.innerHTML = `<img src="../images/paris.png" alt="Paris" width=100%>`
                    transform.innerHTML = ``
                    transform.innerHTML = `<p class='display-6'>Passagens Disponíveis:</p>
                <div class="row">
                <div class="col-sm-4">
                <h6>Companhia Catarinense</h6>
                <p>Partida: ${date1} <br> Chegada: ${date2} <br> Preço: ${price}</p>
                </div>
                <div class="col-sm-8"> <a href="buy.htm"> <br> <button type="button" class="btn btn-success" style="margin-top: 3%;" >Comprar</button> </a> </div>

                <div class="col-sm-4">
                <h6>Companhia Penha</h6>
                <p>Partida: ${date1} <br> Chegada: ${date2} <br> Preço: ${price + 40}</p>
                </div>
                <div class="col-sm-8"> <a href="buy.htm"> <br> <button type="button" class="btn btn-success" style="margin-top: 3%;" >Comprar</button> </a> </div>

                
                <div class="col-sm-4">
                <h6>Companhia Ouro e Prata</h6>
                <p>Partida: ${date1} <br> Chegada: ${date2} <br> Preço: ${price + 90}</p>
                </div>
                <div class="col-sm-8"> <a href="buy.htm"> <br> <button type="button" class="btn btn-success" style="margin-top: 3%;" >Comprar</button> </a> </div>
               
                </div>`




                    break;
                case `2`:
                    img.innerHTML = `<img src="../images/londres.png" alt="Londres" width=100%>`
                    transform.innerHTML = ``
                    transform.innerHTML = `<p class='display-6'>Passagens Disponíveis:</p>
                    <div class="row">
                    <div class="col-sm-4">
                    <h6>Companhia Catarinense</h6>
                    <p>Partida: ${date1} <br> Chegada: ${date2} <br> Preço: ${price + 140}</p>
                    </div>
                    <div class="col-sm-8"> <a href="buy.html"> <br> <button type="button" class="btn btn-success" style="margin-top: 3%;" >Comprar</button> </a> </div>
    
                    <div class="col-sm-4">
                    <h6>Companhia Penha</h6>
                    <p>Partida: ${date1} <br> Chegada: ${date2} <br> Preço: ${price + 160}</p>
                    </div>
                    <div class="col-sm-8"> <a href="buy.html"> <br> <button type="button" class="btn btn-success" style="margin-top: 3%;" >Comprar</button> </a> </div>
    
                    
                    <div class="col-sm-4">
                    <h6>Companhia Ouro e Prata</h6>
                    <p>Partida: ${date1} <br> Chegada: ${date2} <br> Preço: ${price + 200}</p>
                    </div>
                    <div class="col-sm-8"> <a href="buy.html"> <br> <button type="button" class="btn btn-success" style="margin-top: 3%;" >Comprar</button> </a> </div>
                   
                    </div>`


                    break;
                case `3`:
                    img.innerHTML = `<img src="../images/orlando.png" alt="Orlando" width=120%>`
                    transform.innerHTML = ``
                    transform.innerHTML = `<p class='display-6'>Passagens Disponíveis:</p>
                    <div class="row">
                    <div class="col-sm-4">
                    <h6>Companhia Catarinense</h6>
                    <p>Partida: ${date1} <br> Chegada: ${date2} <br> Preço: ${price + 100}</p>
                    </div>
                    <div class="col-sm-8"> <a href="buy.html"> <br> <button type="button" class="btn btn-success" style="margin-top: 3%;" >Comprar</button> </a> </div>
    
                    <div class="col-sm-4">
                    <h6>Companhia Penha</h6>
                    <p>Partida: ${date1} <br> Chegada: ${date2} <br> Preço: ${price + 130}</p>
                    </div>
                    <div class="col-sm-8"> <a href="buy.html"> <br> <button type="button" class="btn btn-success" style="margin-top: 3%;" >Comprar</button> </a> </div>
    
                    
                    <div class="col-sm-4">
                    <h6>Companhia Ouro e Prata</h6>
                    <p>Partida: ${date1} <br> Chegada: ${date2} <br> Preço: ${price + 170}</p>
                    </div>
                    <div class="col-sm-8"> <a href="buy.html"> <br> <button type="button" class="btn btn-success" style="margin-top: 3%;" >Comprar</button> </a> </div>
                   
                    </div>`

                    break;
                case `4`:
                    img.innerHTML = `<img src="../images/zurique.png" alt="Zurique" width=100%>`
                    transform.innerHTML = ``
                    transform.innerHTML = `<p class='display-6'>Passagens Disponíveis:</p>
                    <div class="row">
                    <div class="col-sm-4">
                    <h6>Companhia Catarinense</h6>
                    <p>Partida: ${date1} <br> Chegada: ${date2} <br> Preço: ${price + 105}</p>
                    </div>
                    <div class="col-sm-8"> <a href="buy.html"> <br> <button type="button" class="btn btn-success" style="margin-top: 3%;" >Comprar</button> </a> </div>
    
                    <div class="col-sm-4">
                    <h6>Companhia Penha</h6>
                    <p>Partida: ${date1} <br> Chegada: ${date2} <br> Preço: ${price + 145}</p>
                    </div>
                    <div class="col-sm-8"> <a href="buy.html"> <br> <button type="button" class="btn btn-success" style="margin-top: 3%;" >Comprar</button> </a> </div>
    
                    
                    <div class="col-sm-4">
                    <h6>Companhia Ouro e Prata</h6>
                    <p>Partida: ${date1} <br> Chegada: ${date2} <br> Preço: ${price + 180}</p>
                    </div>
                    <div class="col-sm-8"> <a href="buy.html"> <br> <button type="button" class="btn btn-success" style="margin-top: 3%;" >Comprar</button> </a> </div>
                   
                    </div>`



                    break;

                default:
                    console.log(`${destiny}, não é valido`)

                    break;
            }
        }
    }
}