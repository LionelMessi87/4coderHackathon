let isLogin = true;

const btn = document.querySelector('.btn');
const btn2 = document.querySelector("#submit-btn");
const hpage = document.querySelector(".homepage");

// Show login/signup form
btn.addEventListener('click', function (e) {
  e.preventDefault();

  const heroContent = document.querySelector('.hero');
  heroContent.style.display = 'none';

  const container = document.getElementById('auth-box');
  container.style.display = 'block';
});

// Toggle Sign In / Sign Up
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

// Auth handler (login or signup)
btn2.addEventListener("click", async () => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const username = email.split('@')[0]; // or use a separate input if you prefer
  const role = document.getElementById('role').value;

  const endpoint = isLogin ? "login" : "register";

  try {
    const res = await fetch(`https://fourcoderhackathon.onrender.com/api/auth/${endpoint}`, {
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

      // Store token and role
      if (isLogin) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("userRole", role);

        // Redirect or show homepage
        window.location.href = "home.html"; // or use: hpage.style.display = 'block';
      }
    } else {
      alert(data.message || "Something went wrong");
    }

  } catch (err) {
    console.error(err);
    alert("Error connecting to server");
  }
});
