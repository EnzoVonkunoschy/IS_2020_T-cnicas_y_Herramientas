//var Hoja = require ("./hoja");
var Atributo = require("./atributo");
//var Nodo = require("./Nodo");
const a = require("./A");
const h1 = require("./H1");
const img = require("./IMG");
const input = require("./INPUT");
const p = require("./P");
const button = require("./BUTTON");

const div = require("./DIV");
const form = require("./FORM");
const head = require("./HEAD");
const html = require("./HTML");
const body = require("./BODY");

//genero un documento
var documento = new html();

// agrego head
var encabezado = new head();
documento.agregar(encabezado);

// agrego body
var cuerpo = new body();
documento.agregar(cuerpo);

// agrego encabezado al body
var encabezado = new h1("Técnicas y Herramientas");
cuerpo.agregar(encabezado);

// agrego párrafo
var parrafo = new p("Este es un párrafo para probar que funciona");
cuerpo.agregar(parrafo);

//instancio un formulario
var miFormulario = new form();
 //instancio un input de texto
var entradaTexto = new input();
// instancio el atributo del input
var atributoInput = new Atributo("type","text");
//agrego el atributo al input
entradaTexto.addAtributo(atributoInput);
// agrego el input al formulario
miFormulario.agregar(entradaTexto);
// agrego el formulario al cuerpo/body
cuerpo.agregar(miFormulario);

// instancio un botón
var miBoton = new button("Click");
// instancio el atributo onClick
var miAtributoOnClick = new Atributo("onclick","myFunction()");
// agrego el atributo al botón
miBoton.addAtributo(miAtributoOnClick);
//agrego el botón (con el atributo) al formulario
miFormulario.agregar(miBoton);

//instancio un atributo para form
var atribForm = new Atributo("class","input");
// agrego el atributo a form
miFormulario.addAtributo(atribForm);


console.log(documento.toString());