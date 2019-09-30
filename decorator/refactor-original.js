function addStringToName(fn) {
    return function (name) {
        //this function gets returned when addStringToName is used to wrap a method

        const wrestleString = name + ' is a wrestler';
        //concat the string

        fn.call(this, wrestleString);
        //call the passed function with the modified string and right context
    }
}

function Wrestler() { }
//create Object

Wrestler.prototype.setName = addStringToName(function (name) {
    this.name = name;
});
//wrap the the setName function in our higher order function addStringToName (decorate it!)

Wrestler.prototype.sayName = function () {
    console.log(this.name);
};

const hulkHogan = new Wrestler();
hulkHogan.setName('Hulk Hogan');
hulkHogan.sayName(); //Hulk Hogan is a wrestler