class NegociacaoService{

    constructor(){
        this._httpService = new HttpService();
    }

    obterNegociacaoDaSemana(){
        return new Promise((resolve, reject) => {
            this._httpService.get('http://localhost:3000/negociacoes/semana')
            .then(negociacoes => {
                resolve(negociacoes.map(obj => new Negociacao(new Date(obj.data), obj.quantidade, obj.valor)))
            })
            .catch(erro => {
                console.log(erro);
                reject('Não foi possível obter as negociações da semana.');
            });
        })
    }   

    obterNegociacaoDaSemanaAnterior(){
        return new Promise((resolve, reject) => {
            this._httpService.get('http://localhost:3000/negociacoes/anterior')
            .then(negociacoes => {
                resolve(negociacoes.map(obj => new Negociacao(new Date(obj.data), obj.quantidade, obj.valor)))
            })
            .catch(erro => {
                console.log(erro);
                reject('Não foi possível obter as negociações da semana passada.');
            });
        })
    }

    obterNegociacaoDaSemanaRetrasada(){
        return new Promise((resolve, reject) => {
            this._httpService.get('http://localhost:3000/negociacoes/retrasada')
            .then(negociacoes => {
                resolve(negociacoes.map(obj => new Negociacao(new Date(obj.data), obj.quantidade, obj.valor)))
            })
            .catch(erro => {
                console.log(erro);
                reject('Não foi possível obter as negociações da semana retrasada.');
            });
        })
    }
}