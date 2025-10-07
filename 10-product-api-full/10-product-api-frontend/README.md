# Product API Frontend

This is the frontend application for the Product API project. Built with React, it connects to the backend API to fetch and display products.

## Features

- View a list of products loaded from the API
- Responsive and modern UI with React
- API communication using Axios
- Extensible architecture for adding more features

## Getting Started

### Prerequisites

- Node.js and npm installed
- Backend API running (typically at `http://localhost:5000` or a specified endpoint)

### Installation

Clone the repository and move into the `10-product-api-frontend` directory:

```bash
git clone https://github.com/siddhraj1412/FSWD-Mini-Projects.git
cd FSWD-Mini-Projects/10-product-api-full/10-product-api-frontend
```

Install dependencies:

```bash
npm install
```

### Running the Project

Start the frontend with:

```bash
npm start
```

Access the application at [http://localhost:3000](http://localhost:3000).  
Ensure the backend API is running for product data to load.

### Project Structure

```
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── App.js
│   └── index.js
├── package.json
├── README.md
```

- `components/` contains reusable UI components (ProductList, etc.)
- `pages/` may have Product or Home views

## Usage

- On startup, the app fetches products via Axios from the API endpoint.
- Products are displayed in a list or grid with details.
- Extend components and add features as needed.

## Customization

- Update API endpoint URLs in Axios configuration to match your backend server.
- Extend UI by adding new components and pages to `src/`.

## Tech Stack

- React
- Axios
- CSS/Styled Components (modify as required)

## License

MIT License

***
