import terminal from "./terminal";

export default class Progresso {
    private barra:any;

    constructor(private qtdTotal: number) {
        this.barra = terminal.progressBar({
            width: 200,
            title: 'Processando',
            eta: true,
            percent: true,
            syncMode: true,
            items: this.qtdTotal
        });
        this.barra.update(0);
    }

    atualizar(qtde : number){
        this.barra.update(qtde/this.qtdTotal);
    }
};



