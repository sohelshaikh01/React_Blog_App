## How Vite is Better Than Create React App (CRA)

### Faster Build Times:
Vite uses ES modules and a modern bundler (Rollup), allowing for faster builds than CRA, which relies on Webpack.
In development mode, Vite uses native ES modules without bundling, providing a near-instant start time. CRA, on the other hand, bundles everything upfront, resulting in longer startup times.

### Hot Module Replacement (HMR):
Vite has a faster and more reliable HMR system. Changes made in your code are reflected almost instantly in the browser, speeding up development. CRA's HMR can sometimes be slower due to its bundling system.

### Smaller Production Builds:
Vite, powered by Rollup, tends to produce smaller and more optimized production builds. CRA, while capable of good production builds, often requires manual tweaking to get the same level of optimization.

### Modern JavaScript Support:
Vite natively supports modern JavaScript (ES6+), and you don't need to worry about polyfills for older browsers. CRA supports modern JS but relies on Babel for compatibility, adding overhead.

### Plugin Ecosystem:
Vite has a growing ecosystem of plugins specifically designed for modern JavaScript applications. It is more flexible for projects that need customization. CRA requires ejecting to modify configurations, which can be limiting and complex.

### Built-in Support for TypeScript:
Vite has better TypeScript support out of the box compared to CRA. In CRA, TypeScript configuration often requires additional setup.


## Create-react-app is not good way to create react setup
- It is very bulky and large in size
- It take large time 
- In package.json to read the project details
- Script are different like start to run and vite contains other
- Dependancies are different than vite
- No worries about that

## So now we use 'Vite'
It is bundler
- npm create vite@latest  // latest is optional
// give the project name and details
// or use npm create vite@latest projectapp 
// Choose react framework
// Choose Javascript as simple language
- At this time all packages are just listed in package.json
// to install that all required packages
- npm i / install

### To Start running project
- npm run dev

- Difference from create-react-app
// js files are as jsx
// index.js is main.jsx

- Deleting some file that not useful for now, if they present
// This is about create-react-app files
// setup.js
// reportWebVitals
// Logo.svg
// App.test.js
// Remove all comments from index.js & useless imports
This is for making code clean


## Setting Up a React App with Vite

### Install Vite: First, create a new Vite project by running the following command:
- npm create vite@latest my-react-app

You will be prompted to select a template. Choose React from the list.

### Choose a Framework
You'll be asked to select a framework from the list. Since you're setting up a React app, choose React from the list by using the arrow keys and pressing Enter. 

- ? Select a framework:
-   vanilla
-   vue
-   vue-ts
-   react   # <-- Choose this option for React
-   react-ts

### Choose a Language
Next, Vite will ask whether you want to use JavaScript or TypeScript. Choose based on your preference:

- react (for JavaScript)
- react-ts (for TypeScript)

If you're just using JavaScript, select react by pressing Enter. 
- ? Select a variant:
-   react  # <-- Choose this for plain JavaScript (React)
-   react-ts
-   javascript (prefered) / javascript swc (faster and new)


### Navigate to the Project Directory: Once the project is created, navigate to the directory:
- cd my-react-app

### Install Dependencies: Install the required dependencies by running:
- npm install

### Run the Development Server: To start the development server:
- npm run dev

The terminal will output the local development server address, usually http://localhost:5173.

### Build for Production: To create a production build, run: 
- npm run build

### #Preview the Production Build: You can preview the production build using:
- npm run preview

Now your React app is set up using Vite, and you can enjoy faster development cycles!




## To set up Tailwind CSS in a React app using Vite, follow these steps:

### Create a New React App with Vite

If you haven't already created a React app with Vite, run the following commands:
- npm create vite@latest my-react-app
- cd my-react-app
- npm install

### Install Tailwind CSS and Dependencies

Run the following command to install Tailwind CSS and its required dependencies:
- npm install -D tailwindcss postcss autoprefixer

### Initialize Tailwind Configuration Generate the tailwind.config.js and postcss.config.js files by running:
- npx tailwindcss init -p

This will create the following two files:
- tailwind.config.js
- postcss.config.js

### Configure tailwind.config.js
In the tailwind.config.js file, set the content paths to include all React files. Replace the content section with the following:

``` javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### Add Tailwind Directives to CSS
Create a new CSS file in your src folder, for example src/index.css, and add the following Tailwind CSS directives:
- @tailwind base;
- @tailwind components;
- @tailwind utilities;

### Import the CSS File in Your App
In src/main.jsx or src/index.jsx, import the newly created index.css file:
``` javascript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'  // <-- Import Tailwind CSS here

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
```

### Run the Development Server
Now start the development server to see Tailwind in action:
- npm run dev

You can now start using Tailwind classes in your React components! For example: 

``` javascript
function App() {
  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-blue-500">
        Welcome to Tailwind with Vite and React!
      </h1>
    </div>
  )
}

export default App;
```

### Build for Production (Optional)
Once you're ready to build the project for production, run: 
npm run build
This setup ensures that Tailwind CSS works smoothly with your Vite-powered React app!


## Tailwind installation in Vite React

### Follow the commands as below:

```
Installing the tailwind dependancies: npm install -D tailwindcss postcss autoprefixer
-D: to install dev dependencies useful only in development

npx tailwindcss init -p
Create tailwind.config.js

Change the tailwind.config.js content[] with given content[]

Add the Tailwind directives to your input.css on top
@tailwind base;
@tailwind components;
@tailwind utilities;


All set Up is done and use your project running command
npm run start / dev

```
Additionally Install: VS Code Tailwind Intellisense Extension.

## Props using in React

```Javascript
    {/* we can send the value to the components by "props" */}
    {/* we can access them into components using props.name or using destructuring */}
    {/* Just passing the props doesn't make work done, we also need to handle them into components */}
```
