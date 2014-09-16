//Some very strange method to read from console. For laboratory's work, maybe, it's great, but for real life...?
var readline = require('readline'),
    rl = readline.createInterface(process.stdin, process.stdout);

function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

var xval=''
rl.setPrompt('Please x>');
rl.prompt()
rl.on('line', function(line) {
    if (!isNumber(line)) {
        console.log('Please use only correct dot-separated number; for example: 24.12')
        rl.prompt()
        return(false)
    }
    xval=line;
   var yval;
    if(xval<=1) {
        yval = Math.pow(2 * Math.E, xval - 1)
    }
    else if(xval>1 && xval<3) {
        yval = (4 - xval) / 2
    }
    else{
        yval=1/((xval-1)*(xval-2))
    }
    console.log(yval)
})