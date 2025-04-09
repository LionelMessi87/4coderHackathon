const btn = document.querySelector('.btn');
const btn2 =  document.querySelector("#submit-btn")
let hpage = document.querySelector(".homepage");
    btn.addEventListener('click', function (e) {
      e.preventDefault();
  
      const heroContent = document.querySelector('.hero');
      heroContent.style.display = 'none';
  
      const container = document.getElementById('auth-box');
      container.style.display = 'block';
    });

    btn2.addEventListener("click", ()=>
    {
      window.location.href = 'home.html';
    })


   
