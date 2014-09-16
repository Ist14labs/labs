//Some very strange method to read from console. For laboratory's work, maybe, it's great, but for real life...?
var readline = require('readline'),
    rl = readline.createInterface(process.stdin, process.stdout);

function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

var startx,starty=''
var verbose=process.argv[2]=='-v'?true:false
rl.setPrompt('Please input start x>');
rl.prompt()
rl.on('line', function(line){
    if(!isNumber(line)){
        console.log('Please use only correct dot-separated number; for example: 24.12')
        rl.prompt()
        return(false)
    }
    if(!startx){
        startx=line
        rl.setPrompt('Please input start y>');
        rl.prompt()
    }
    else{
        starty=line
        for(xcounter=0; xcounter<15; xcounter++){
            for(ycounter=0; ycounter<15; ycounter++){
               //Hmm, it's very strange that v8 interprets startx and math like string. Very strange. That's why I use parseFloat()
               currentx=parseFloat(startx)+parseFloat((Math.PI/3)*xcounter)
               currenty=parseFloat(starty)+parseFloat((Math.PI/12)*ycounter)
               underpower=Math.sin(Math.sqrt(currentx+1))+Math.cos(Math.sqrt(Math.pow(currenty,2)-1))
               fCurrent=underpower<0?(-1)*Math.pow((-1)*underpower, 1/3):Math.pow(underpower, 1/3)
               verbose?console.log('For x='+currentx+' and y='+currenty+' f(xy)='+fCurrent):console.log(fCurrent)

            }
        }
    }
})