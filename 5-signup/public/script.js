// SIGNUP LOGIC
const signupForm = document.getElementById('signupForm');
if (signupForm) {
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (password.length < 6) {
      alert('Password must be at least 6 characters long.');
      return;
    }

    let users = JSON.parse(localStorage.getItem('users')) || [];

    const userExists = users.some((user) => user.email === email);
    if (userExists) {
      alert('User already exists! Please login.');
      return;
    }

    users.push({ name, email, password });
    localStorage.setItem('users', JSON.stringify(users));

    alert('Signup successful! You can now login.');
    window.location.href = 'login.html';
  });
}

// LOGIN LOGIC
const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value.trim();

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const validUser = users.find((user) => user.email === email && user.password === password);

    if (validUser) {
      alert('Login successful!');
      localStorage.setItem('loggedInUser', JSON.stringify(validUser));
      window.location.href = 'dashboard.html';
    } else {
      alert('Invalid email or password.');
    }
  });
}

// DASHBOARD LOGIC
if (window.location.pathname.includes('dashboard.html')) {
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

  if (!loggedInUser) {
    alert('Please login first.');
    window.location.href = 'login.html';
  } else {
    document.getElementById('welcomeMsg').textContent = `Hello, ${loggedInUser.name}!`;
  }

  document.getElementById('logoutBtn').addEventListener('click', () => {
    localStorage.removeItem('loggedInUser');
    window.location.href = 'login.html';
  });
}
