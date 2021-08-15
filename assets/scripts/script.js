$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

});


// Random background generation
	
function changeBG()
{
	const images = [
		'url("assets/images/background/Logo-Secret-Boutique-Watermark.png")',
		'url("assets/images/background/Maha-Fashion-Boutique-Watermark.png")',
		'url("assets/images/background/CPZ-LOGO-RGB-large-size-1-watermark.jpg")',
		'url("assets/images/background/Mom-Bro-Watermark.png")',
		'url("assets/images/background/Poster-Design-watermark.png")',
		'url("assets/images/background/RK-Laxman-Watermark.png")',
		'url("assets/images/background/fred-flyer-watermark.png")'
	];

	const bg = images[Math.floor(Math.random() * images.length)];
	
	document.getElementById("home").style.backgroundImage = bg;
	
}

setInterval(changeBG, 750);


function onGraph() {

  offIllus();
  offMake();
  
  document.getElementById("overlay_graph").style.display = "grid";
}

function offGraph() {
  document.getElementById("overlay_graph").style.display = "none";
}

function onIllus() {

    offGraph();
    offMake();
    document.getElementById("overlay_illus").style.display = "grid";
}
  
function offIllus() {
    document.getElementById("overlay_illus").style.display = "none";
}

function onMake() {
    
  offIllus();
  offGraph();
  /*document.getElementById("overlay_make").style.display = "grid";*/
  window.open('https://www.youtube.com/playlist?list=PLdo8JdbcHjFSagSVdlqHPHCVR_xt2UqpY');	
}

function offMake() {
  /*document.getElementById("overlay_make").style.display = "none";*/
  
}
