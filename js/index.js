// Get the modal
var emailModal = document.getElementById("email-modal");

// Get the button that opens the modal
var emailModalButton = document.getElementById("email-modal-btn");

// Get the <span> element that closes the modal
var closeEmailModalButton = document.getElementsByClassName("close-email-modal")[0];

// When the user clicks on the button, open the modal
emailModalButton.onclick = function() {
  emailModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closeEmailModalButton.onclick = function() {
  emailModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == emailModal) {
    emailModal.style.display = "none";
  }
}

$(".container-mail-connect-text").click(function(){
  $(".container-mail-connect-text a")[0].click();
});


function sendMessage(){
  var clientName = $("#client-name").val();
  var clientEmail = $("#client-email").val();
  var clientMessage = $("#client-message").val();

  alert(clientMessage);
}

$(document).ready(function(){
  $('section').each(function () {
            if($(this).position().top<= $(document).scrollTop() && ($(this).position().top + $(this).outerHeight()) > $(document).scrollTop()) {
              var currentSection = $(this).attr('id');
              var sectionClass = "."+currentSection+"-menu";
              $(".container-navigation a").css({"color": "white"});
              $(sectionClass).css({"color": "rgba(54,179,165,1)"});
            }
        });
});

$(document).scroll(function(){
  $('section').each(function () {
            if($(this).position().top <= $(document).scrollTop()+1 && ($(this).position().top + $(this).outerHeight())+1 > $(document).scrollTop()) {
                var currentSection = $(this).attr('id');
                var sectionClass = "."+currentSection+"-menu";
                $(".container-navigation a").css({"color": "white"});
                $(sectionClass).css({"color": "rgba(54,179,165,1)"});
            };
        });
});

function navigationIcon() {
  var x = $("#navigation-menu");
  if (x.className === "container-navigation") {
    x.className += " responsive";
  } else {
    x.className = "container-navigation";
  }
}
