//Some very strange method to read from console. For laboratory's work, maybe, it's great, but for real life...?
var readline = require('readline'),
    rl = readline.createInterface(process.stdin, process.stdout);

function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}


rl.setPrompt('Please input edge-length of cube>');
rl.prompt()
rl.on('line', function(line) {
    if (!isNumber(line)) {
        console.log('Please use only correct dot-separated number; for example: 24.12')
        rl.prompt()
        return(false)
    }
    if(line<0){
        console.log('Do you really can imagine cube with negative edge-length?')
         rl.prompt()
         return(false)
    }
    var a=line
    var s1=a*a // Side area
    var s2=6*s1// Surface area
    var s3=a*a*a//Volume
    console.log('Side area for this cube='+s1+'; surface area='+s2+'; volume='+s3)
})