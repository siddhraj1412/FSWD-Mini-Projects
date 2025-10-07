# Express EJS Addition App

A simple web application built with Express.js and EJS that performs addition of two numbers and displays the result.

## Features

- Server-side rendering using EJS templates
- User input form to enter two numbers
- Displays the sum of the numbers dynamically
- Clean and simple UI
- Demonstrates Express and EJS integration

## Technologies Used

- Node.js
- Express.js
- EJS templating engine
- HTML & CSS

## Getting Started

### Prerequisites

- Node.js and npm installed

### Installation

Clone the repository and navigate to the project directory:

```bash
git clone https://github.com/siddhraj1412/FSWD-Mini-Projects.git
cd FSWD-Mini-Projects/8-express-ejs-addition
```

Install dependencies:

```bash
npm install
```

### Running the App

Start the Express server:

```bash
npm start
```

By default, the app will be running on:

```
http://localhost:3000
```

Open the URL in your browser to access the Addition app.

## Project Structure

```
├── views/
│   ├── index.ejs
│   └── result.ejs
├── index.js
├── package.json
└── README.md
```

- `views/`: Contains EJS template files including partials for reusable components such as header and footer.
- `public/`: Static assets including CSS files.

## Usage

- Access the home page with an input form for two numbers.
- Enter any two numbers and submit the form.
- View the computed sum rendered using EJS on the same page.

## How It Works

- The Express server handles GET requests to serve the form.
- On form submission (POST request), the server processes the two input numbers.
- The server calculates their sum and passes the result back to the EJS template.
- The page is rendered with the displayed result dynamically.

## License

MIT License

***
