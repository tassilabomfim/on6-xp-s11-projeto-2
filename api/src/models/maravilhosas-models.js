let data = require('../data/data.json')

// selectAllData - selecionando toda a lista do banco de dados
const lista = () => {
    return data
}
//selectDataById - selecionando por id item no banco de dados
const listaId = (id) => {
    
    const identificador = parseInt(id)
    const encontrando = data.find(maravilhosas => maravilhosas.id == identificador)

    return encontrando
}    

   
//insertData - inserindo no banco de dados
const insertData = (newData) => {
   
    const nomeExistente = data.find(maravilhosas => maravilhosas.name === newData.name)
    
    return nomeExistente

}

//updateData
const upData = (id, updateMara) => {

    const encontrando = data.find(maravilhosa => maravilhosa.id == id)
    const idAtual = data.indexOf(encontrando)  
    
    const atualizadaComId = {id, ...updateMara}

    if(idAtual >= 0)  {
        data.splice(idAtual, 1, atualizadaComId)
        return data
    }

}

//deleteData
const deleteData = (id) => {
    //const buscarId = parseInt(id)    
    const encontrada = data.find(maravilhosa => maravilhosa.id == id)
    
    const atualizadaId = data.indexOf(encontrada)
    //console.log(atualizadaId)
    if(atualizadaId >= 0){
        data.splice(atualizadaId, 1);
        return data
    }   
}


module.exports ={
    lista,
    listaId,
    insertData,
    upData,
    deleteData
}


// const encontrada = data.find((maravilhosa, index) => {
            
        //     if(maravilhosa.id == buscarId){
        //         foundMara = true;
        //         data.splice(index, 1);
        //     }
        // })