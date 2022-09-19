const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.canvas.width= window.innerWidth;
ctx.canvas.height=window.innerHeight;

var particlenumber = 400;

let ParticleArray;
class Particle {
    constructor(x,y,directionx,directiony,size,color){
        this.x =x;
        this.y=y;
        this.directionx=directionx;
        this.directiony=directiony;
        this.size=size;
        this.color=color;
    }
}
//draw on page with prototype
Particle.prototype.draw=function(){
    ctx.beginPath();
    ctx.arc(this.x,this.y,this.size,0,Math.PI*2,false)
    ctx.fillStyle = this.color;
    ctx.fill();
}
Particle.prototype.update=function(){
    if (this.x + this.size>canvas.width || this.x-this.size<0){
        this.directionx=-this.directionx;
    }
    if (this.y + this.size>canvas.height || this.y-this.size<0){
        this.directiony=-this.directiony
    }
    //it has to update its frame every movement so
    this.x+=this.directionx;
    this.y+=this.directiony;
    this.draw();
}
function generateParticles(amount){
    ParticleArray=[];
    for (let i=0;i<amount;i++){
        let size= Math.random()*4 + 1
        let x=(Math.random()*((innerWidth - size *2)))
        let y=(Math.random()*((innerHeight - size *2)))
        let directionx=(Math.random()*.4)- .22;
        let directiony=Math.random()*.4 - .22
        let color = generatecolor();
        ParticleArray.push(new Particle(x,y,directionx,directiony,size,color));
    }
        
}
function generatecolor(){
let hexSet = "0123456789ABCDEF";
  let finalHexString = "#";
  for (let i = 0; i < 6; i++) {
    finalHexString += hexSet[Math.ceil(Math.random() * 15)];
  }
  return finalHexString;
}
function animate(){
    requestAnimationFrame(animate);
    ctx.clearRect(0,0,innerWidth,innerHeight);
    
    for(let i=0;i<particlenumber;i++){
        ParticleArray[i].update();
    }
}
generateParticles(particlenumber);
animate();