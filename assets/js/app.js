 
particlesJS.load('particles-js', 'assets/js/particles.json', function() {
   console.log('callback - particles.js config loaded');
 });
 $(document).ready(function(){
   var index;

var modal= document.querySelector(".modal1");
var next= document.querySelector(".next");
var prev= document.querySelector(".prev");
				function buildModal(i)
				{
					console.log("in buildModal");
					var modal_html ="";
					var img = galleryItems[i].imgSrc;
					var img_alt = galleryItems[i].imgAlt;
					var title= galleryItems[i].heading;
					var intro = galleryItems[i].introduction;
					var live = galleryItems[i].website;
					var github = galleryItems[i].gitLink;
					console.log(img);
					modal_html+='  <div class="modal_content mx-auto" id="'+i+'">';
          modal_html+='<div class="grid-modal1">';
          modal_html+='<div class="col-grid-modal-item">';
          modal_html+='<img src="'+img+'"class="modal-img" alt ="'+img_alt+'">';
          modal_html+='</div>';
          modal_html+='<div class="col-grid-modal-item">';
          modal_html+='<h3 class="project_name">'+title+'</h3>';
          modal_html+='<p class="desc mx-auto">'+intro+'</p>';
          modal_html+='<i class="fa fa-chevron-left prev" aria-hidden="true"></i>';
          modal_html+='<i class="fa fa-chevron-right next" aria-hidden="true"></i>';
          modal_html+='<div class=" mx-auto pb-2">';
          modal_html+='<a class="button_link" target="_blank" href="'+live+'">';
          modal_html+='<button type="button"class= "buttons"  id="run_button">View Project</button></a> &nbsp;';
          modal_html+='<a  class="button_link" target="_blank" href="'+github+'"><button type="button" id="git_button" class= "buttons">Github</button></a>';
          modal_html+='</div></div></div></div>';
          $('.modal1').html(modal_html);
					$('.modal1').show();

				}
				$('.learn-more').click(function(){
					console.log("clickked card image");
			 		 index = $(this).attr('id');
					console.log('index'+index);
          buildModal(index);
           if(index==0)
                $('.prev').hide();
              else 
                $('.prev').show();
                 if(index==11)
                $('.next').hide();
              else 
                $('.next').show();

				});//closed learn-more

         modal.addEventListener('click',function(event) {
      var hasClassprev = event.target.classList.contains('prev'); 
      if(hasClassprev)
      {
        
          
              console.log("clicked prev button");
              var i=  $(this).find(".modal_content").attr("id");
              console.log("index after clicking" +i);
            
                 if(i==0)
                 {
                $('.next').show();
                $('.prev').hide();
                }
              if(i==11)
              {
                $('.next').hide();
                $('.prev').show();
                
              }
              
              if((i>0)&&(i<=10))
              {
                $('.prev').show();
                $('.next').show();
             }
                console.log("in prev button" +i);
                i--;
                buildModal(i);
              }
          });
          //closed prev
            modal.addEventListener('click',function(event)  {
            var hasClassnext = event.target.classList.contains('next'); 
      if(hasClassnext)
      {
        
              console.log("clicked next button");
               var i = $(this).find('.modal_content').attr('id');
              if(i==0)
                 {
                $('.next').show();
                $('.prev').hide();
                }
              if(i==11)
              {
                $('.next').hide();
                $('.prev').show();
                
              }
              
              if((i>0)&&(i<=10))
              {
                $('.prev').show();
                $('.next').show();
             }
                console.log("in next button" +i);
                i++;
                buildModal(i);
                
              
            }
            });//closed next
       // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }
 // OR - listen for a keyup event and close the modal when ESC key is pressed
$(document).keyup(function(e) {
     if (e.key === "Escape") { // escape key maps to keycode `27`
         modal.style.display = "none";
    }
});

  function hasClass(elem, className) {
    return elem.classList.contains(className);
}
//smooth scrolling
// Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });


  /*When Scrolled more then 100 show arrow up */
$(window).scroll(function() {
    var height = $(window).scrollTop();

    if (height > 100) {
        $('.totop').fadeIn();
    } else {
      //else remove arrow up
        $('.totop').fadeOut();
    }
});
//when  arrow up is click go to the top
    $(".totop").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });


});//closed document
