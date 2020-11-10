var IComponent = require('./icomponente');

class Nodo extends IComponent {
    constructor(nom){
        super();
        this.nombre = nom;
        this.contenido = "";
        this.grupo = [];
        this.atributos = [];
    }

    addAtributo(a){
        this.atributos.push(a);
    };

    getNombre(){
        return this.nombre;
    };

    getContenido(){};

    getGroup(){};

    agregar(e){
        this.grupo.push(e);
    };

    eliminar(e){};

    toString(){

        var cadena = "";
        for(var i=0;i<this.grupo.length;i++){
            cadena = cadena + this.grupo[i].toString();
        }

        var strAtrib = "";
        for(var i=0;i<this.atributos.length;i++){
            strAtrib = strAtrib + this.atributos[i].nombre +" =  '"+ this.atributos[i].valor+ "' ";
        }
        return "<"+this.nombre+" "+strAtrib+" > "+cadena+" </"+ this.nombre +">";
    }
}

module.exports = Nodo;