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


    btn2.addEventListener("click", async () => {
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const username = email.split('@')[0]; // or get from a new input if you want
      const role = document.getElementById('role').value;
    
      const endpoint = isLogin ? "login" : "register";
    
      try {
        const res = await fetch(`http://localhost:5000/api/auth/${endpoint}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(
            isLogin
              ? { email, password }
              : { username, email, password }
          )
        });
    
        const data = await res.json();
    
        if (res.ok) {
          alert(isLogin ? "Login successful!" : "Registered successfully!");
          localStorage.setItem("token", data.token || ""); // token only comes from login
          localStorage.setItem("userRole", role);
    
          // Show homepage after login
          if (isLogin) {
            /*const fcontainer = document.querySelector(".container");
            fcontainer.style.display = 'none';
            hpage.style.display = 'block';*/

            window.location.href = 'home.html';
          }
        } else {
          alert(data.message || "Something went wrong");
        }
    
      } catch (err) {
        console.error(err);
        alert("Error connecting to server");
      }
    });
    


let isLogin = true;

function toggleForm() {
  const formTitle = document.getElementById("form-title");
  const toggleLink = document.querySelector(".toggle-link");
  const submitBtn = document.getElementById("submit-btn");

  if (isLogin) {
    formTitle.innerText = "Sign Up";
    toggleLink.innerText = "Already have an account? Sign In";
    submitBtn.innerText = "Sign Up";
    isLogin = false;
  } else {
    formTitle.innerText = "Sign In";
    toggleLink.innerText = "Don't have an account? Sign Up";
    submitBtn.innerText = "Sign In";
    isLogin = true;
  }
}


    btn2.addEventListener("click", ()=>
    {
      window.location.href = 'home.html';
    })
    btn2.addEventListener("click", async () => {
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const username = email.split('@')[0]; // or get from a new input if you want
      const role = document.getElementById('role').value;
    
      const endpoint = isLogin ? "login" : "register";
    
      try {
        const res = await fetch(`http://localhost:5000/api/auth/${endpoint}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(
            isLogin
              ? { email, password }
              : { username, email, password }
          )
        });
    
        const data = await res.json();
    
        if (res.ok) {
          alert(isLogin ? "Login successful!" : "Registered successfully!");
          localStorage.setItem("token", data.token || ""); // token only comes from login
          localStorage.setItem("userRole", role);
    
          // Show homepage after login
          if (isLogin) {
            const fcontainer = document.querySelector(".container");
            fcontainer.style.display = 'none';
            hpage.style.display = 'block';
          }
        } else {
          alert(data.message || "Something went wrong");
        }
    
      } catch (err) {
        console.error(err);
        alert("Error connecting to server");
      }
    });
    


let isLogin = true;

function toggleForm() {
  const formTitle = document.getElementById("form-title");
  const toggleLink = document.querySelector(".toggle-link");
  const submitBtn = document.getElementById("submit-btn");

  if (isLogin) {
    formTitle.innerText = "Sign Up";
    toggleLink.innerText = "Already have an account? Sign In";
    submitBtn.innerText = "Sign Up";
    isLogin = false;
  } else {
    formTitle.innerText = "Sign In";
    toggleLink.innerText = "Don't have an account? Sign Up";
    submitBtn.innerText = "Sign In";
    isLogin = true;
  }
}




   
