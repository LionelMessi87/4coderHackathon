const btn = document.querySelector('.btn');
    btn.addEventListener('click', function (e) {
      e.preventDefault();
  
      const heroContent = document.querySelector('.hero');
      heroContent.style.display = 'none';
  
      const container = document.getElementById('auth-box');
      container.style.display = 'block';
    });