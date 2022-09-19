var root=document.querySelector(':root');

var maincolor;
const colormap={
    1: "rgb(210, 68, 68)",//orange
    2:"#767B91", //gray
    3: "#7F96FF",//cornflower blue
    4: "#00A5CF",// cerulean crayola
    5: "#6AC29D",//green
    6: "#F51AA4", //pink
    7: "#FF0054",//red
    8: "#FFBD00",//amber
    9: "#7AE582",//light green
    10: "#78C3FB",//blue
    11: "#2FE6DE",//turquoise
    12: "#BE95C4",//lilac
    13: "#2B4162",//indigo dye
    14: "#C42847"//french raspberry

}
//set color everytime website is open
var randomnumber = Math.floor(Math.random() * (14- 1 + 1)) + 1;//formula i found on the internet
var maincolor=colormap[randomnumber]

root.style.setProperty('--maincolor',maincolor);
//button change color
function mouseover(){
    root.style.setProperty('--changebgcolor',maincolor);

}
function mouseout(){
    setTimeout(() => {
        root.style.setProperty('--changebgcolor',"transparent");
    }, 100);//timeout 100 ms so it doesnt feel too quick idk 
    
}
function btn1_click(){
    var randomnumber2 = Math.floor(Math.random() * (14- 1 + 1)) + 1;
    if (randomnumber2!=randomnumber){
        maincolor=colormap[randomnumber2]
        root.style.setProperty('--maincolor',maincolor);
        root.style.setProperty('--changebgcolor',maincolor);
    }
    else{
        btn1_click();
    }  
}//end of button change color


