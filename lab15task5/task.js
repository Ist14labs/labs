//Some very strange method to read from console. For laboratory's work, maybe, it's great, but for real life...?
var readline = require('readline'),
    rl = readline.createInterface(process.stdin, process.stdout);

function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

var xval,yval=''
rl.setPrompt('Please input x>');
rl.prompt()
rl.on('line', function(line) {
    if (!isNumber(line)) {
        console.log('Please use only correct dot-separated number; for example: 24.12')
        rl.prompt()
        return(false)
    }
    if (!xval) {
        xval = parseFloat(line)
        rl.setPrompt('Please input y>');
        rl.prompt()
    }
    else {
        yval = parseFloat(line)
        if((xval+yval<4)&&(yval>0)&&(yval<xval+4)){
            console.log('Is valid x and y')
        }else{
            console.log('Is invalid x and y')
        }
    }
})