document.addEventListener("DOMContentLoaded", function() {
   const progressBars = document.querySelectorAll('.progress');
   progressBars.forEach(function(progressBar) {
       const percent = progressBar.getAttribute('data-percent');
       progressBar.style.width = percent + '%';
   });
});

document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("modalImg");
    var images = document.getElementsByClassName('project-img');
    var prevBtn = document.getElementById("prevBtn");
    var nextBtn = document.getElementById("nextBtn");
    var currentIndex = 0;
  
    // Loop through all images and add onclick listeners
    for (var i = 0; i < images.length; i++) {
      images[i].onclick = function() {
        modal.style.display = "block";
        currentIndex = Array.from(images).indexOf(this);
        updateModalContent();
      }
    }
  
    // Close the modal when clicking the close button
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
      modal.style.display = "none";
    }
  
    // Function to update modal content based on currentIndex
    function updateModalContent() {
      modalImg.src = images[currentIndex].dataset.src;
    }
  
    // Function to show next image
    nextBtn.onclick = function() {
      currentIndex = (currentIndex + 1) % images.length;
      updateModalContent();
    }
  
    // Function to show previous image
    prevBtn.onclick = function() {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      updateModalContent();
    }
  
    // Close modal when clicking outside of the modal content
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  });
  
  
  
  