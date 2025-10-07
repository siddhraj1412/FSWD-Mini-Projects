# Employee CRUD API

A RESTful API built with Node.js, Express, and MongoDB to perform CRUD operations for employee data.

## Features

- Create new employee records
- Read all employees or a single employee by ID
- Update existing employee details
- Delete employee records
- JSON-formatted request and response handling
- MongoDB as the database
- MongoDB Compass for database management and visualization

## Technologies Used

- Node.js
- Express.js
- MongoDB with Mongoose
- MongoDB Compass (GUI management tool)

## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB installed locally or MongoDB Atlas cloud instance
- MongoDB Compass (optional, but recommended) for GUI database management

### Installation

Clone the repository and navigate to the project folder:

```bash
git clone https://github.com/siddhraj1412/FSWD-Mini-Projects.git
cd FSWD-Mini-Projects/9-em-crud
```

Install dependencies:

```bash
npm install
```

### MongoDB Setup

#### Local MongoDB Installation

- Download and install MongoDB Community Server from [mongodb.com](https://www.mongodb.com/try/download/community).
- Start the MongoDB server using your system's services or by running `mongod` in a terminal.

#### MongoDB Atlas (Cloud)

- Sign up for a free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
- Create a new cluster and whitelist your IP.
- Create a database user and retrieve the connection string.

### Configuring the App

- Update the MongoDB connection string in your project (commonly in a `.env` file or directly in `app.js`):

```
MONGO_URI=mongodb://localhost:27017/your_database_name
```

Or use your MongoDB Atlas connection string:

```
MONGO_URI=mongodb+srv://username:password@cluster0.mongodb.net/your_database_name?retryWrites=true&w=majority
```

### Running the API

Start the Express server:

```bash
npm start
```

The API will run at `http://localhost:3000`.

### MongoDB Compass Instructions

MongoDB Compass is a graphical user interface for MongoDB that allows you to easily manage your databases and collections.

#### Installation

- Download MongoDB Compass from [https://www.mongodb.com/products/compass](https://www.mongodb.com/products/compass) for your operating system.
- Install and launch the application.

#### Connecting to Your Database

1. Open MongoDB Compass.
2. In the "New Connection" window, enter your MongoDB URI:
   - For local MongoDB:

     ```
     mongodb://localhost:27017
     ```

   - For MongoDB Atlas, use your connection string (replace username, password, and cluster as necessary).
3. Click "Connect."

#### Managing Your Employee Data

- Once connected, select your database (e.g., `your_database_name`).
- Open the `employees` collection.
- You can:
  - View documents (employee records)
  - Insert new documents manually
  - Edit existing employees directly
  - Delete documents
- Use the filter bar to search or filter employees by fields.

#### Benefits

- Visualize your employee data easily without needing command-line queries.
- Observe how API CRUD operations change database content in real-time.

### API Endpoints

| Method | Endpoint          | Description                |
|--------|-------------------|----------------------------|
| POST   | /employees        | Create a new employee       |
| GET    | /employees        | Get all employees           |
| GET    | /employees/:id    | Get a single employee by ID |
| PUT    | /employees/:id    | Update an employee by ID    |
| DELETE | /employees/:id    | Delete an employee by ID    |

## Project Structure

```
├── app.js
├── models/
│   └── employee.js
├── routes/
│   └── employeeRoutes.js
├── package.json
└── README.md
```

- `app.js` initializes the server and database connection
- `models/employee.js` defines the employee schema with Mongoose
- `routes/employeeRoutes.js` contains API routes

## Usage

- Use Postman, curl, or your frontend to interact with the API endpoints.
- Manage your employee data visually through MongoDB Compass alongside API testing.

## License

MIT License

***
