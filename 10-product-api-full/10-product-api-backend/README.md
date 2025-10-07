# Product API Backend

This is the backend REST API for the Product API project. Built using Node.js and Express, it provides endpoints to create, read, update, and delete products.

## Features

- RESTful endpoints for product management (CRUD)
- JSON API responses
- Simple, modular Express structure
- Easy integration with a React frontend

## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB or another database running (if used)

### Installation

Clone the repository and navigate to the backend folder:

```bash
git clone https://github.com/siddhraj1412/FSWD-Mini-Projects.git
cd FSWD-Mini-Projects/10-product-api-full/10-product-api-backend
```

Install dependencies:

```bash
npm install
```

### Running the API

Start the server:

```bash
npm start
```

By default, the API runs at `http://localhost:5000` (or as specified in your code or `.env`).

### API Endpoints

Typical endpoints include:

- `GET /api/products` — List all products
- `GET /api/products/:id` — Get details for a specific product
- `POST /api/products` — Add a new product
- `PUT /api/products/:id` — Update an existing product
- `DELETE /api/products/:id` — Remove a product

## Project Structure

```
├── controllers/
├── models/
├── routes/
├── app.js
├── package.json
└── README.md
```

- `controllers/` handles business logic for product operations
- `models/` defines data schema (if using MongoDB/Mongoose)
- `routes/` registers API endpoints

## Usage

- Connect the React frontend to this backend API for full stack product management.
- Test endpoints using tools like Postman or curl.

## Customization

- Update database configuration or middleware in `app.js` as required.
- Extend data model and routes for additional functionality.

## License

MIT License

***
