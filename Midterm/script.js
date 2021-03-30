// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()


  const formPopup = document.querySelector(".form-popup");

  window.addEventListener("load", function(){
    showPopup();
  })

  function showPopup(){
    const timeLimit = 5 //seconds;
    let i=0;
  const timer =setInterval(function(){
    i++;
    if(i==timeLimit){
      clearInterval(timer);
      formPopup.classList.add("show");
    }
    console.log(i)
  },1000);
  }
