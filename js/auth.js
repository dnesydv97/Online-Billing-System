// Functions for login, signup, and dashboard handling

const users = []; // Array to store user credentials

function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Check if user exists and password matches (frontend only, not secure)
  const user = users.find(user => user.username === username && user.password === password);
  if (user) {
    // Successful login, show dashboard
    showDashboard();
  } else {
    alert('Invalid username or password. Try again.');
  }
}

function signup() {
  const username = document.getElementById('signupUsername').value;
  const password = document.getElementById('signupPassword').value;

  // Check if username is already taken
  if (users.some(user => user.username === username)) {
    alert('Username already exists. Please choose a different one.');
    return;
  }

  // Store user credentials (frontend only, not secure)
  users.push({ username, password });

  alert(`User ${username} signed up successfully!`);
  showLoginForm(); // Show login form after signup
}

function showSignupForm() {
  document.getElementById('loginForm').style.display = 'none';
  document.getElementById('signupForm').style.display = 'block';
}

function showLoginForm() {
  document.getElementById('signupForm').style.display = 'none';
  document.getElementById('loginForm').style.display = 'block';
}

function showDashboard() {
  document.getElementById('loginForm').style.display = 'none';
  document.getElementById('signupForm').style.display = 'none';
  document.getElementById('dashboardContent').style.display = 'block';
  // Additional code to load and display dashboard content
}
