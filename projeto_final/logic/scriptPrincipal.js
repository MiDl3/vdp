let transform
let destiny
let date1
let date2
let img

function search() {
    var clas = document.getElementsByName('optradio');
    for (i = 0; i < clas.length; i++) {
        if (clas[i].checked)

            clas = clas[i].value
        transform = document.getElementById(`obj-R`)
        destiny = document.getElementById(`destiny`).value
        date1 = document.getElementById(`date1`).value
        date2 = document.getElementById(`date2`).value
        img = document.getElementById(`bus`)

        switch (destiny) {
            case `1`:
                img.innerHTML = `<img src="../images/paris.png" alt="Paris" width=100%>`
                transform.innerHTML = ``
                transform.innerHTML = `<p class='display-6'>Passagens Disponíveis:</p>
                <div class="row">
                <div class="col-sm-4">.col-sm-4</div>
                <div class="col-sm-8">.col-sm-8</div>
                </div>`

                break;
            case `2`:
                img.innerHTML = `<img src="../images/londres.png" alt="Londres" width=100%>`
                transform.innerHTML = ``
                transform.innerHTML = `<p class='display-6'>Passagens Disponíveis:</p>
                <div class="row">
                <div class="col-sm-4">.col-sm-4</div>
                <div class="col-sm-8">.col-sm-8</div>
                </div>`

                break;
            case `3`:
                img.innerHTML = `<img src="../images/orlando.png" alt="Orlando" width=120%>`
                transform.innerHTML = ``
                transform.innerHTML = `<p class='display-6'>Passagens Disponíveis:</p>
                <div class="row">
                <div class="col-sm-4">.col-sm-4</div>
                <div class="col-sm-8">.col-sm-8</div>
                </div>`

                break;
            case `4`:
                img.innerHTML = `<img src="../images/zurique.png" alt="Zurique" width=100%>`
                transform.innerHTML = ``
                transform.innerHTML = `<p class='display-6'>Passagens Disponíveis:</p>
                <div class="row">
                <div class="col-sm-4">.col-sm-4</div>
                <div class="col-sm-8">.col-sm-8</div>
                </div>`

                break;

            default:
                console.log(`${destiny}, não é valido`)

                break;
        }

    }
}