const Nodo = require('./nodo');

class div extends Nodo{
    constructor(){
        super("div");
    }
}

class form extends Nodo{
    constructor(){
        super("form")
    }
}

class head extends Nodo{
    constructor(){
        super("head");
    }
}

class html extends Nodo{
    constructor(){
        super("html");
    }
}

class body extends Nodo{
    constructor(){
        super("body");
    }
}

module.exports = div;
module.exports = form;
module.exports = head;
//module.exports = html;
//module.exports = body;