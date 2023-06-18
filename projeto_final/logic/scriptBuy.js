
function payMethod() {
    let nome = document.getElementById(`name`)
    let Lname = document.getElementById(`Lname`)
    let email = document.getElementById(`email`)
    let cpf = document.getElementById(`cpf`)


    document.getElementById(`edit`).innerHTML = ``
    document.getElementById(`edit`).innerHTML = ` <button type="button" class="btn btn-success active">Prosseguir</button>`

    document.getElementById(`obj-R`).innerHTML = `<p class="display-6">Forma de Pagamento:</p>  
    <div class="form-check">
    <input type="radio" class="form-check-input" id="radio1" name="optradio" value="1">
    <label class="form-check-label" for="radio1">Boleto - 2 Dias de Compensação</label>
    </div>

    <div class="form-check">
    <input type="radio" class="form-check-input" id="radio2" name="optradio" value="2" checked>
    <label class="form-check-label" for="radio2">Pix - 5% de Desconto</label>
    </div>

    <div class="form-check">
    <input type="radio" class="form-check-input" id="radio3" name="optradio" value="3">
    <label class="form-check-label" for="radio3">Crédito - 3x Sem juros </label>

    <div class="form-check">
    <input type="radio" class="form-check-input" id="radio4" name="optradio" value="4">
    <label class="form-check-label" for="radio4">6x 15% de Juros</label>
    </div>
    <div class="form-check">
    <input type="radio" class="form-check-input" id="radio5" name="optradio" value="5">
    <label class="form-check-label" for="radio5">12x 20% de Juros</label>


    <br>
    <br>
    <img src="../images/master.png" alt="MasterCard" width="70px">
    <img src="../images/visa.png" alt="Visa" width="70px">
    <img src="../images/elo.png" alt="Elo" width="70px">

    <div id="edit2" style="margin-top: 5%;">
    <button type="button" class="btn btn-primary marginB" onclick="busSelect()">Seguinte</button>
    </div>

    `
}
function busSelect() {
    document.getElementById(`edit2`).innerHTML = ``
    document.getElementById(`edit2`).innerHTML = ` <button type="button" class="btn btn-success active">Seguinte</button>`
    var pay = document.getElementsByName(`optradio`)

    for (i = 0; i < pay.length; i++) {
        if (pay[i].checked)

            pay = pay[i].value
    }
    if (pay == 1) {
        document.getElementById(`obj-S`).innerHTML = `<p class="display-6">Selecione seu lugar:</p>`
        document.getElementById(`obj-S`).innerHTML =
            ` <p class="display-6">Selecione seu lugar:</p>
            <button type="button" class="btn btn-success my-button" disabled>1 - A</button> 
            <button type="button" class="btn btn-success my-button">2 - A</button>
            <button type="button" class="btn btn-success my-button">3 - A</button>
            <button type="button" class="btn btn-success my-button" disabled>4 - A</button> 
            <br>
            <button type="button" class="btn btn-success my-button">1 - B</button>
            <button type="button" class="btn btn-success my-button">2 - B</button>
            <button type="button" class="btn btn-success my-button" disabled>3 - B</button> 
            <button type="button" class="btn btn-success my-button" disabled>4 - B</button> 
            <br>
            <button type="button" class="btn btn-success my-button" disabled>1 - C</button> 
            <button type="button" class="btn btn-success my-button" disabled>2 - C</button> 
            <button type="button" class="btn btn-success my-button" disabled>3 - C</button> 
            <button type="button" class="btn btn-success my-button">4 -C</button>
            <br>
            <button type="button" class="btn btn-success my-button">1 - D</button>
            <button type="button" class="btn btn-success my-button">2 - D</button>
            <button type="button" class="btn btn-success my-button">3 -D</button>
            <button type="button" class="btn btn-success my-button">4 -D</button>
            <br>
            <button type="button" class="btn btn-success my-button">1 - E</button>
            <button type="button" class="btn btn-success my-button" disabled>2 - E</button> 
            <button type="button" class="btn btn-success my-button">3 - E</button>
            <button type="button" class="btn btn-success my-button" disabled>4 - E</button> 
            <br>
            <button type="button" class="btn btn-success my-button">1 - F</button>
            <button type="button" class="btn btn-success my-button">2 - F</button>
            <button type="button" class="btn btn-success my-button" disabled>3 - F</button> 
            <button type="button" class="btn btn-success my-button" disabled>4 - F</button> 
            <br>
            <div id="edit3" style="margin-top: 5%;">
            <a href="../html/index.html">
            <button type="button" class="btn btn-primary marginB" onclick="finish()">Concluir</button>
            </a>
            </div>


            `
        const buttons = document.querySelectorAll('.my-button');
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove a classe 'btn-primary' de todos os botões
                buttons.forEach(btn => {
                    btn.classList.remove('btn-success');
                });

                // Adiciona a classe 'btn-primary' apenas ao botão clicado
                button.classList.add('btn-primary');
            });
        });
    }
    else if (pay == 2) {
        document.getElementById(`obj-S`).innerHTML = `<p class="display-6">Selecione seu lugar:</p>`
        document.getElementById(`obj-S`).innerHTML =
            ` <p class="display-6">Selecione seu lugar:</p>
            <button type="button" class="btn btn-success my-button" disabled>1 - A</button> 
            <button type="button" class="btn btn-success my-button" disabled>2 - A</button> 
            <button type="button" class="btn btn-success my-button">3 - A</button>
            <button type="button" class="btn btn-success my-button">4 - A</button>
            <br>
            <button type="button" class="btn btn-success my-button">1 - B</button>
            <button type="button" class="btn btn-success my-button">2 - B</button>
            <button type="button" class="btn btn-success my-button">3 - B</button>
            <button type="button" class="btn btn-success my-button" disabled>4 - B</button> 
            <br>
            <button type="button" class="btn btn-success my-button" disabled>1 - C</button> 
            <button type="button" class="btn btn-success my-button">2 -C</button>
            <button type="button" class="btn btn-success my-button">3 -C</button>
            <button type="button" class="btn btn-success my-button" disabled>4 -C</button> 
            <br>
            <button type="button" class="btn btn-success my-button">1 - D</button>
            <button type="button" class="btn btn-success my-button">2 - D</button>
            <button type="button" class="btn btn-success my-button" disabled>3 -D</button> 
            <button type="button" class="btn btn-success my-button">4 -D</button>
            <br>
            <button type="button" class="btn btn-success my-button" disabled>1 - E</button> 
            <button type="button" class="btn btn-success my-button">2 - E</button>
            <button type="button" class="btn btn-success my-button" disabled>3 - E</button> 
            <button type="button" class="btn btn-success my-button">4 - E</button>
            <br>
            <button type="button" class="btn btn-success my-button" disabled>1 - F</button> 
            <button type="button" class="btn btn-success my-button" disabled>2 - F</button> 
            <button type="button" class="btn btn-success my-button">3 - F</button>
            <button type="button" class="btn btn-success my-button" disabled>4 - F</button> 
            <br>
            <div id="edit3" style="margin-top: 5%;">
            <a href="../html/index.html">
            <button type="button" class="btn btn-primary marginB" onclick="finish()">Concluir</button>
            </a>
            </div>


            `
        const buttons = document.querySelectorAll('.my-button');
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove a classe 'btn-primary' de todos os botões
                buttons.forEach(btn => {
                    btn.classList.remove('btn-success');
                });

                // Adiciona a classe 'btn-primary' apenas ao botão clicado
                button.classList.add('btn-primary');
            });
        });
    }
    else if (pay == 3) {
        document.getElementById(`obj-S`).innerHTML = `<p class="display-6">Selecione seu lugar:</p>`
        document.getElementById(`obj-S`).innerHTML =
            ` <p class="display-6">Selecione seu lugar:</p>
            <button type="button" class="btn btn-success my-button">1 - A</button>
            <button type="button" class="btn btn-success my-button" disabled>2 - A</button> 
            <button type="button" class="btn btn-success my-button">3 - A</button>
            <button type="button" class="btn btn-success my-button">4 - A</button>
            <br>
            <button type="button" class="btn btn-success my-button">1 - B</button>
            <button type="button" class="btn btn-success my-button">2 - B</button>
            <button type="button" class="btn btn-success my-button">3 - B</button>
            <button type="button" class="btn btn-success my-button" disabled>4 - B</button> 
            <br>
            <button type="button" class="btn btn-success my-button" disabled>1 - C</button> 
            <button type="button" class="btn btn-success my-button" disabled>2 - C</button> 
            <button type="button" class="btn btn-success my-button">3 - C</button>
            <button type="button" class="btn btn-success my-button" disabled>4 - C</button> 
            <br>
            <button type="button" class="btn btn-success my-button" disabled>1 - D</button> 
            <button type="button" class="btn btn-success my-button">2 - D</button>
            <button type="button" class="btn btn-success my-button" disabled>3 - D</button> 
            <button type="button" class="btn btn-success my-button" disabled>4 -D</button> 
            <br>
            <button type="button" class="btn btn-success my-button">1 - E</button>
            <button type="button" class="btn btn-success my-button">2 - E</button>
            <button type="button" class="btn btn-success my-button" disabled>3 - E</button> 
            <button type="button" class="btn btn-success my-button">4 - E</button>
            <br>
            <button type="button" class="btn btn-success my-button" disabled>1 - F</button> 
            <button type="button" class="btn btn-success my-button">2 - F</button>
            <button type="button" class="btn btn-success my-button">3 - F</button>
            <button type="button" class="btn btn-success my-button" disabled>4 - F</button> 
            <br>
            <div id="edit3" style="margin-top: 5%;">
            <a href="../html/index.html">
            <button type="button" class="btn btn-primary marginB" onclick="finish()">Concluir</button>
            </a>
            </div>


            `
        const buttons = document.querySelectorAll('.my-button');
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove a classe 'btn-primary' de todos os botões
                buttons.forEach(btn => {
                    btn.classList.remove('btn-success');
                });

                // Adiciona a classe 'btn-primary' apenas ao botão clicado
                button.classList.add('btn-primary');
            });
        });
    }
    else if (pay == 4) {
        document.getElementById(`obj-S`).innerHTML = `<p class="display-6">Selecione seu lugar:</p>`
        document.getElementById(`obj-S`).innerHTML =
            ` <p class="display-6">Selecione seu lugar:</p>
            <button type="button" class="btn btn-success my-button" disabled>1 - A</button> 
            <button type="button" class="btn btn-success my-button">2 - A</button>
            <button type="button" class="btn btn-success my-button">3 - A</button>
            <button type="button" class="btn btn-success my-button">4 - A</button>
            <br>
            <button type="button" class="btn btn-success my-button">1 - B</button>
            <button type="button" class="btn btn-success my-button" disabled>2 - B</button> 
            <button type="button" class="btn btn-success my-button" disabled>3 - B</button> 
            <button type="button" class="btn btn-success my-button" disabled>4 - B</button> 
            <br>
            <button type="button" class="btn btn-success my-button" disabled>1 - C</button> 
            <button type="button" class="btn btn-success my-button" disabled>2 - C</button> 
            <button type="button" class="btn btn-success my-button">3 - C</button>
            <button type="button" class="btn btn-success my-button" disabled>4 -C</button> 
            <br>
            <button type="button" class="btn btn-success my-button">1 - D</button>
            <button type="button" class="btn btn-success my-button">2 - D</button>
            <button type="button" class="btn btn-success my-button" disabled>3 -D</button> 
            <button type="button" class="btn btn-success my-button">4 -D</button>
            <br>
            <button type="button" class="btn btn-success my-button">1 - E</button>
            <button type="button" class="btn btn-success my-button">2 - E</button>
            <button type="button" class="btn btn-success my-button" disabled>3 - E</button> 
            <button type="button" class="btn btn-success my-button">4 - E</button>
            <br>
            <button type="button" class="btn btn-success my-button">1 - F</button>
            <button type="button" class="btn btn-success my-button">2 - F</button>
            <button type="button" class="btn btn-success my-button" disabled>3 - F</button> 
            <button type="button" class="btn btn-success my-button" disabled>4 - F</button> 
            <br>
            <div id="edit3" style="margin-top: 5%;">
            <a href="../html/index.html">
            <button type="button" class="btn btn-primary marginB" onclick="finish()">Concluir</button>
            </a>
            </div>


            `
        const buttons = document.querySelectorAll('.my-button');
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove a classe 'btn-primary' de todos os botões
                buttons.forEach(btn => {
                    btn.classList.remove('btn-success');
                });

                // Adiciona a classe 'btn-primary' apenas ao botão clicado
                button.classList.add('btn-primary');
            });
        });
    }
    else if (pay == 5) {
        document.getElementById(`obj-S`).innerHTML = `<p class="display-6">Selecione seu lugar:</p>`
        document.getElementById(`obj-S`).innerHTML =
            ` <p class="display-6">Selecione seu lugar:</p>
            <button type="button" class="btn btn-success my-button" disabled>1 - A</button> 
            <button type="button" class="btn btn-success my-button">2 - A</button>
            <button type="button" class="btn btn-success my-button" disabled>3 - A</button> 
            <button type="button" class="btn btn-success my-button">4 - A</button>
            <br>
            <button type="button" class="btn btn-success my-button">1 - B</button>
            <button type="button" class="btn btn-success my-button" disabled>2 - B</button> 
            <button type="button" class="btn btn-success my-button">4 - B</button>
            <button type="button" class="btn btn-success my-button" disabled>5 - B</button> 
            <br>
            <button type="button" class="btn btn-success my-button" disabled>1 - C</button> 
            <button type="button" class="btn btn-success my-button">2 - C</button>
            <button type="button" class="btn btn-success my-button">3 -C</button>
            <button type="button" class="btn btn-success my-button" disabled>4 -C</button> 
            <br>
            <button type="button" class="btn btn-success my-button">1 - D</button>
            <button type="button" class="btn btn-success my-button" disabled>2 - D</button> 
            <button type="button" class="btn btn-success my-button" disabled>3 -D</button> 
            <button type="button" class="btn btn-success my-button">4 -D</button>
            <br>
            <button type="button" class="btn btn-success my-button">1 - E</button>
            <button type="button" class="btn btn-success my-button" disabled>2 - E</button> 
            <button type="button" class="btn btn-success my-button">3 - E</button>
            <button type="button" class="btn btn-success my-button">4 - E</button>
            <br>
            <button type="button" class="btn btn-success my-button">1 - F</button>
            <button type="button" class="btn btn-success my-button" disabled>2 - F</button> 
            <button type="button" class="btn btn-success my-button">3 - F</button>
            <button type="button" class="btn btn-success my-button" disabled>4 - F</button> 
            <br>
            <div id="edit3" style="margin-top: 5%;">
            <a href="../html/index.html">
            <button type="button" class="btn btn-primary marginB" onclick="finish()">Concluir</button>
            </a>
            </div>


            `
        const buttons = document.querySelectorAll('.my-button');
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove a classe 'btn-primary' de todos os botões
                buttons.forEach(btn => {
                    btn.classList.remove('btn-success');
                });

                // Adiciona a classe 'btn-primary' apenas ao botão clicado
                button.classList.add('btn-primary');
            });
        });
    }
}
function finish() {
    document.getElementById(`edit3`).innerHTML = ` <button type="button" class="btn btn-success active marginB">Concluir</button>`
    window.alert(`Pedido Reservado! Em breve mais especificações serão enviadas ao seu email!`)
}
