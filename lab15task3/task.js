var c=1
while(c<3){
  var underPower=(1-Math.tan(c))
  var func1=underPower<0?(-1)*Math.pow((-1)*underPower,2*c)+Math.cos(c):Math.pow(underPower, 2*c)+Math.cos(c)
  var func2=Math.pow((func1*func1)-(2*func1), 2)
  console.log('F1='+func1+'; F2='+func2)
  c=parseFloat(c)+0.1
  c=c.toFixed(1)
}
