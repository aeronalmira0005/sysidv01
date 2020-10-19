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
