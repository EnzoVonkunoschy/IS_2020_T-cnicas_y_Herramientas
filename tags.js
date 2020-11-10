const Hoja = require("./hoja");

class a extends Hoja{
    constructor(val){
        super("a",val);
    }    
}

class h1 extends Hoja{
    constructor(val){
        super("h1",val);
    }
}

class img extends Hoja{
    constructor(val){
        super("img",val);
    }
}

class input extends Hoja{
    constructor(val){
        super("input",val);
    }
}

class p extends Hoja{
    constructor(val){
        super("p",val);
    }
}

module.exports = a;
module.exports = h1;
module.exports = img;
module.exports = input;
module.exports = p;
