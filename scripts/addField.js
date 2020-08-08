// Procurar o botão
document.querySelector("#add-time")
// Quando clicar no botão
.addEventListener('click', cloneField)

// Execução da ação
function cloneField() {
    // Duplicação dos campos: qual?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    // Pegar os campos
    const fields = newFieldContainer.querySelectorAll('input')
    // fields[0].value = ""
    // fields[1].value = ""

    //Limpar os campos
    fields.forEach(function(field){
        //pegar o field do momento da execução e limpa os campos
        field.value = ""
    })
    // Exibir na página: onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
