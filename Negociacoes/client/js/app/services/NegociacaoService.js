class NegociacaoService{

    obterNegociacaoDaSemana(){
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', 'http://localhost:3000/negociacoes/semana');

            xhr.onreadystatechange = () => {
                if(xhr.readyState == 4 ){
                    if(xhr.status == 200){
                        console.log('Obtendo as negociações do servidor.');
                        resolve(JSON.parse(xhr.responseText)
                            .map(obj => new Negociacao(new Date(obj.data), obj.quantidade, obj.valor)))

                    } else {
                        console.log(xhr.responseText);
                        reject('Não foi possível obter as negociações da semana.');
                    }
                }
            };

            xhr.send();
        })        
    }   

    obterNegociacaoDaSemanaAnterior(){
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', 'http://localhost:3000/negociacoes/anterior');

            xhr.onreadystatechange = () => {
                if(xhr.readyState == 4 ){
                    if(xhr.status == 200){
                        console.log('Obtendo as negociações do servidor.');
                        resolve(JSON.parse(xhr.responseText)
                            .map(obj => new Negociacao(new Date(obj.data), obj.quantidade, obj.valor)))

                    } else {
                        console.log(xhr.responseText);
                        reject('Não foi possível obter as negociações da semana anterior.');
                    }
                }
            };

            xhr.send();
        })
    }

    obterNegociacaoDaSemanaRetrasada(){
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', 'http://localhost:3000/negociacoes/retrasada');

            xhr.onreadystatechange = () => {
                if(xhr.readyState == 4 ){
                    if(xhr.status == 200){
                        console.log('Obtendo as negociações do servidor.');
                        resolve(JSON.parse(xhr.responseText)
                            .map(obj => new Negociacao(new Date(obj.data), obj.quantidade, obj.valor)))

                    } else {
                        console.log(xhr.responseText);
                        reject('Não foi possível obter as negociações da semana retrasada.');
                    }
                }
            };

            xhr.send();
        })
    }
}