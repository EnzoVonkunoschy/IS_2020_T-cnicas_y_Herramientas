
 class IComponent{
    constructor(){
        this.nombre="";
        this.valor = "";
        this.grupo = [];
        this.atributos = [];
    }
    addAtributo(a){};
    getNombre(){};
    getContenido(){};
    getGroup(){};
    agregar(e){};
    eliminar(e){};
}

module.exports = IComponent;