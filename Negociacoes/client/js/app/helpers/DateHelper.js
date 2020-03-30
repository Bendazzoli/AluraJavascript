class DateHelper {

    dataParaTexto(data){
        return data.getDate() + "/" + (1 + data.getMonth()) + "/" + data.getFullYear();
    }
    
    textoParaData(texto){
        return new Date(...texto.split('-').map((item, indice) => item - indice % 2));
    }
}