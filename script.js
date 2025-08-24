document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");
  const reviewForm = document.getElementById("reviewForm");

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Login successful!");
    });
  }

  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Registration successful!");
    });
  }

  if (reviewForm) {
    reviewForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = reviewForm.elements[0].value;
      const message = reviewForm.elements[1].value;
      const reviewDisplay = document.getElementById("reviews");
      const p = document.createElement("p");
      p.innerHTML = `<strong>${name}:</strong> ${message}`;
      reviewDisplay.appendChild(p);
      reviewForm.reset();
    });
  }
});

document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault(); 

  

  // Redirect to next page (e.g. products.html)
  window.location.href = 'products.html';
});

document.getElementById('reviewsBtn').addEventListener('click', function(e) {
  e.preventDefault(); 
  window.location.href = 'reviews.html';
});









