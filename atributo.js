

class Atributo{
    constructor(nom,val){
        this.nombre = nom;
        this.valor = val;
    }   

    toString(){
        return ' '+this.nombre+' : " '+this.valor+' " ';
    }
}

module.exports = Atributo;