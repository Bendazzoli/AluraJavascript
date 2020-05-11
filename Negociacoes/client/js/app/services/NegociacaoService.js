class NegociacaoService{

    obterNegociacaoDaSemana(callback){
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://localhost:3000/negociacoes/semana');

        xhr.onreadystatechange = () => {
            if(xhr.readyState == 4 ){
                if(xhr.status == 200){
                    console.log('Obtendo as negociações do servidor.');
                    callback(null, JSON.parse(xhr.responseText)
                        .map(obj => new Negociacao(new Date(obj.data), obj.quantidade, obj.valor)))

                } else {
                    console.log(xhr.responseText);
                    callback('Não foi possível obter as negociações.');
                }
            }
        };

        xhr.send();
    }

    obterNegociacaoDaSemanaAnterior(callback){
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://localhost:3000/negociacoes/anterior');

        xhr.onreadystatechange = () => {
            if(xhr.readyState == 4 ){
                if(xhr.status == 200){
                    console.log('Obtendo as negociações do servidor.');
                    callback(null, JSON.parse(xhr.responseText)
                        .map(obj => new Negociacao(new Date(obj.data), obj.quantidade, obj.valor)))

                } else {
                    console.log(xhr.responseText);
                    callback('Não foi possível obter as negociações.');
                }
            }
        };

        xhr.send();
    }

    obterNegociacaoDaSemanaRetrasada(callback){
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://localhost:3000/negociacoes/retrasada');

        xhr.onreadystatechange = () => {
            if(xhr.readyState == 4 ){
                if(xhr.status == 200){
                    console.log('Obtendo as negociações do servidor.');
                    callback(null, JSON.parse(xhr.responseText)
                        .map(obj => new Negociacao(new Date(obj.data), obj.quantidade, obj.valor)))

                } else {
                    console.log(xhr.responseText);
                    callback('Não foi possível obter as negociações.');
                }
            }
        };

        xhr.send();
    }
}