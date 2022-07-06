class ContaBancaria{
    constructor(agencia, numero, tipo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }
    get saldo(){
        return this._saldo;
    }
    set saldo(valor){
        this._saldo = valor;
    }
    sacar(valor){
        if (valor > this.saldo){
            return "Operação negada";
        }else{
            this._saldo -= valor;
            return this._saldo;
        }
    }
    
    depositar(valor){
        this._saldo += valor;
        return this._saldo;
    }
}

class ContaCorrente extends ContaBancaria{
    constructor(agencia, numero, cartaoCredito){
        super(agencia, numero);
        this.tipo = 'corrente';
        this._cartaoCredito = cartaoCredito;
    }
    get cartaoCredito(){
        return this._cartaoCredito;
    }
    set cartaoCredito(valor){
        this._cartaoCredito = valor;
    }
}

class ContaPoupanca extends ContaBancaria{
    constructor(agencia, numero, cartaoCredito){
        super(agencia, numero);
        this.tipo = 'poupança';
        this._cartaoCredito = cartaoCredito;
    }
}

class ContaUniversitaria extends ContaBancaria{
    constructor(agencia, numero, cartaoCredito){
        super(agencia, numero);
        this.tipo = 'universitária';
        this._cartaoCredito = cartaoCredito;
    }
    sacar(valor){
        if(valor > 500 || valor > this._saldo){
            return "Operação negada!"
        }else{
            return this._saldo -= valor
        }

    }
}