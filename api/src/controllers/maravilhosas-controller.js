const { response } = require('express')
const model = require('../models/maravilhosas-models')

//Nomes dos métodos para implementação:
model.lista
model.listaId
model.isertData
model.deleteData
model.upData

const lista = model.lista()

//getMaravilhosas - enviando a lista completa
const getMaravilhosas = (request, response) => {
    console.log(request.url)
    response.status(200).send(model.lista())
}

//getMaravilhosaById - enviando a Mavalhosa buscada por ID
const getMaravilhosasById = (request, response) => {
    const id = parseInt(request.params.id)

    if (model.listaId(id)) {
        response.status(200).send(model.listaId(id))
    } else {
        response.status(400).send({Mensagem: "ID não existe! Informe um ID valido", lista})
    }
}

//addMaravilhosa (POST) - adicionando maravilhosa a lista
const addMaravilhosas = (request, response) => {
    let newData = request.body


      if (newData.name && newData.photo && newData.subtitle && newData.about && newData.phrase && newData.history && newData.addedBy) {
        console.log('Todos os dados foram preenchidos corretamente!')
        if (!model.insertData(newData)) {
            lista.push(newData)
            response.status(200).json(model.insertData(newData))
            console.log(lista)
         } else {
            response.status(400).send({Mensagem: "Maravilhosa já existente", lista})
         }
    } else {
        response.status(400).send({Mensagem: "Insira todos os campos para o cadastro da Maravilhosa"})
    }
   
    }

//updateMaravilhosa 
const updateMaravilhosa = (request, response) => {
    const id = parseInt(request.params.id)
    const updateMara = request.body

    if (updateMara.id || updateMara.name || updateMara.photo || updateMara.subtitle || updateMara.about || updateMara.phrase || updateMara.history || updateMara.addedBy) {
        console.log('Todos os dados foram preenchidos corretamente!')
        if (model.upData(id, updateMara)) {
            //lista.push(newData)
    
            response.status(200).send({Mensagem: "Maravilhosa atualizada com sucesso", lista})
            console.log(lista)
         } else {
            response.status(400).send({Mensagem: "Insira um Id válido", lista})
         }
    } else {
        response.status(400).send({Mensagem: "Necessario inserir um campo para atualizar o cadastro da Maravilhosa"})
    }
   
    }



//deleteMaravilhosa - deletando maravilhosa atraves do ID
const deleteMaravilhosa = (request, response) => {
    const ident = parseInt(request.params.id)
    console.log(request.url)

    // const dataBase = model.deleteData(ident)
    // console.log(dataBase)
  
     if(model.deleteData(ident)){
        response.status(200).send({Messagem: "Impostora EXCLUIDA com Sucesso", lista})
    } else {
        response.status(400).send({Mensagem: "Insira um ID válido para deletar Impostora"})
    }

}


module.exports = {
    getMaravilhosas,
    getMaravilhosasById,
    addMaravilhosas,
    updateMaravilhosa,
    deleteMaravilhosa
}