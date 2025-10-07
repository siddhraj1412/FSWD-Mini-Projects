# React Navigation App

This project is a simple React app demonstrating navigation between multiple screens using React Navigation.

## Features

- Multiple screens (Home, About, Help, etc.)  
- Navigation managed using React Navigation's stack navigator  
- Easy setup and usage with `npm start`  

## Getting Started

### Prerequisites

- Node.js and npm installed  
- Basic understanding of React

### Installation

Clone the repository and navigate to the project folder:

```bash
git clone https://github.com/siddhraj1412/FSWD-Mini-Projects.git
cd FSWD-Mini-Projects/1-react-navigation-app
```

Install dependencies:

```bash
npm install
```

### Running the Project

Start the development server:

```bash
npm start
```

After running this command, the app will be available at `http://localhost:3000` or a similar URL displayed in your terminal.

### Project Structure

```
├── public/
├── src/
│   ├── screens/
│   │   ├── Home.js
│   │   ├── About.js
│   │   └── Help.js
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

- `src/screens` contains the app's screen components.
- `App.js` sets up navigation using React Navigation.

## Usage

- On load, the app navigates to the Home screen.
- Use navigation links or buttons to go to different screens.

## Dependencies

- `@react-navigation/native`
- `@react-navigation/stack`
- `react-native-screens`
- `react-native-safe-area-context`

Install extra dependencies if prompted by an error or missing package.

## Customization

You can add new screens to the `src/screens` folder and register them in `App.js`.

## Resources

- [React Navigation Documentation](https://reactnavigation.org/docs/getting-started/)[1]
- [React Navigation Example Repo](https://github.com/keremcubuk/react-navigation-demo)[3]

## License

MIT License

***
