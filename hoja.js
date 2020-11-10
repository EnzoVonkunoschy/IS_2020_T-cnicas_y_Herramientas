class Hoja{

    constructor(nom,val){
        this.nombre = nom;
        this.valor = val;
        this.atributos = [];
    }

    getNombre(){
        return this.nombre;
    }

    addAtributo(e){
        this.atributos.push(e);
    }

    toString(){
        var strAtrib = "";
        for(var i=0;i<this.atributos.length;i++){
            strAtrib = strAtrib + this.atributos[i].nombre +" =  '"+ this.atributos[i].valor+ "' ";
        }
        return "<"+this.nombre + " "+ strAtrib + ">" +this.valor+ "</"+this.nombre+" >";
        
    }

    getValor(){
        return this.valor;
    }

    getContenido(){
        return null;
    }

    agregar(e){
        console.log("--agregar()-->[Hoja] no implementado ");
    }

    eliminar(e){
        console.log("--eliminar()-->[Hoja] no implementado ");
    }


}

module.exports =  Hoja;