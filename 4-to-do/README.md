# To-Do List Application

A simple and efficient to-do list application built with Node.js, Express, and EJS for templating. It allows users to add, delete, and manage tasks seamlessly.

## Features

- Add new tasks
- Delete completed tasks
- Dynamic task list update
- Responsive UI with EJS templates
- Data persistence with server-side rendering

## Technologies Used

- Node.js
- Express framework
- EJS templating engine
- Body-parser for parsing request bodies

## Getting Started

### Prerequisites

- Node.js installed
- Basic understanding of Node.js and Express

### Installation

Clone the repository and navigate into the folder:

```bash
git clone https://github.com/siddhraj1412/FSWD-Mini-Projects.git
cd FSWD-Mini-Projects/4-to-do
```

Install the necessary dependencies:

```bash
npm install
```

### Running the Application

Launch the server:

```bash
npm start
```

The application will be available at `http://localhost:3000`. Open this URL in your web browser to start using the to-do list.

### Folder Structure

```
├── views/
│   ├── index.ejs
│   └── partials/
│       ├── header.ejs
│       └── footer.ejs
├── public/
│   ├── css/
│   └── js/
├── app.js
├── package.json
└── README.md
```

- `views/`: Contains EJS templates
- `public/`: Static assets like CSS and JS files
- `app.js`: Main server file

## Usage

- Enter tasks in the input box
- Click add to include a new task
- Mark tasks as completed and delete them
- View the real-time list update on the page

## License

MIT License

***
