# Signup App

A simple user signup and login system built with Node.js and Express, storing user data in browser local storage.

## Features

- User registration with client-side validation
- User login authentication using local storage data
- User session management based on local storage
- Simple HTML forms for signup and login
- Lightweight frontend-focused implementation

## Technologies Used

- Node.js and Express.js for serving pages
- JavaScript for local storage management
- HTML, CSS (Bootstrap) for frontend UI

## Getting Started

### Prerequisites

- Node.js and npm installed
- Basic knowledge of JavaScript and local storage APIs

### Installation

Clone the repository and go to the project directory:

```bash
git clone https://github.com/siddhraj1412/FSWD-Mini-Projects.git
cd FSWD-Mini-Projects/5-signup
```

Install dependencies:

```bash
npm install
```

### Running the App

Start the server with:

```bash
npm start
```

Open your browser and visit:

- `http://localhost:4000/` for the Signup form

## Usage

- Register a new user; data is saved to local storage on the client side
- Login will validate against credentials stored in local storage
- Successful login directs to the user dashboard with logout option

## Project Structure

```
├── public/
│   ├── index.html
│   ├── login.html
│   ├── scripts.js
│   └── styles.css
├── server.js
├── package.json
└── README.md
```

- `public/` contains static frontend files including HTML, CSS, and JS managing local storage
- `server.js` serves the static files and handles routing

## Notes

- No backend database used; all user data is stored and managed within browser local storage
- This app is suitable for demonstration and learning purposes, not for production use due to security limitations

## License

MIT License

***
