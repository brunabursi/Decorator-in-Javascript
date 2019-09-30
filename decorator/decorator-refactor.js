// npm install --save-dev @babel/cli @babel/core @babel/preset-env @babel/plugin-proposal-decorators @babel/node

function addStringToName(target, name, descriptor) {
    const fn = descriptor.value;
    //saving a reference to our decorated method so we can use it later

    descriptor.value = wrestler => {
        fn.call(target, wrestler + ' is a wrestler');
    };
}

class Wrestler {
    @addStringToName
    setName(name) {
        this.name = name;
    }

    sayName() {
        console.log(this.name)
    }
}

//cenario utilizavel 

const hulkHogan = new Wrestler();
hulkHogan.setName('Hulk Hogan');
hulkHogan.sayName(); //Hulk Hogan is a wrestler

const w = new Wrestler()
w.setName('muy macho')
w.sayName();

//It is a function that receives other function as parameter and extends its behaviour without modifying it explicitly!!!!