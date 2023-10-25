function printHello() {
    console.log('Hello');
}
printHello();

function log(message) {
    console.log(message);
}
log('Hello');
log(1234);

function changeName(obj) {
    obj.name = 'conder';
}
const ellie = {name: 'ellie' };
changeName(ellie);
console.log(ellie);


let globalMessage = 'global';
function printMessage(){
    let message = 'hello';
    console.log(message);
    console.log(globalMessage);
}
printMessage();

let globalMessage = 'global';
function printMessage() {
    let message = 'hello';
    console.log(message);
    console.log(globalMessage);
    function printAnother() {
        console.log(message);
        let childMessage = 'hello';
    }
    console.log(childMessage);
}
printMessage();s
