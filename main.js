'use strict'

const pesquisarCep = async (cep) => {
    const url = `https://viacep.com.br/ws/${cep}/json/#`

    const response = await fetch(url)

    const data = await response.json()

    console.log(data)
}
pesquisarCep('06140050')

