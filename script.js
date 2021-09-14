const Modal = {
    open(){
         // Abrir modal
         // Adicionar a class active ao modal
        document.querySelector('.modal-overlay')
        .classList
        .add('active')
        },
    close(){
        // Fechar modal
        // retirar a class active ao modal
        document.querySelector('.modal-overlay')
        .classList
        .remove('active')
    }
}

const transactions = [
{ 
    id: 1,
    description: 'luz',
    amount: 50000,
    date:'23/01/2021',
},
{ 
    id: 2,
    description: 'luz',
    amount: 50000,
    date:'23/01/2021',
},
{ 
    id: 3,
    description: 'luz',
    amount: -20000,
    date:'23/01/2021',
},
]

// Eu preciso somar as entradas
// depois somar as saídas
//remover das entradas o valor das saídas
// assim eu terei o total

const Transaction = {
    incomes() {
        // somar as entradas
    },
    expenses() {
        //somar as saídas
    },
    Total() {
        // entradas - saídas
    }

}

// substituir os dados do HTML com os dados do JS

const DOM = {
    addTransaction(transaction, index) {
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransacition()
    },
    innerHTMLTransacition() {
const html = `
<tr>
<td class="description">Luz</td>
<td class="expense">-R$ 500,00</td>
<td class="data" >23/01/2021</td>
<td>
    <img src="./assets/saida.svg" height="30">
</td>
</tr>
`

return html
    }
}

DOM.addTransaction("cheguei aqui")