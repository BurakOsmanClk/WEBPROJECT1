function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }


let i = 0;
let images = ['url("/images/resim1.jpg")','url("images/resim2.jpg")', 'url("images/resim3.jpg")', 'url("images/resim4.jpg")', 'url("images/resim5.jpg")'];
function changeBG(){
  const element = document.getElementById("anabody");
  if (element.className == "anabody") { 
    document.body.style.backgroundImage = images[i];
      i++;
      if(i>=colors.length){
          i=0;
      };
  }
      
}
setInterval(changeBG, 5000);
