# Getting Started with Create React App

## Intro
Reactjs is a library from FaceBook for creating UI Pages in a faster manner using the DOM features of HTML. React uses a concept called Virtual DOM based on XML which will create a DOM Structure virtually within UR App before it is placed on the actual DOM of the HTML page. The structure is created virtually and will not take more time while it transfers the contents from the V-DOM to the physical DOM of an HTML Page. Using JS, React allows to create APIs for designing the DOM elements in the memory. This will be rendered when the Page is requested by the browser. React is purely for UI enhancement, not any thing with Back end. U have to depend on other APIs and Frameworks to get the state, REST API calls and many more, we call these external APIs as HOOKs of ReactJs. 

## Software requirements:
1. Nodejs installed 
2. React Commandline tools
3. TypeScript. 
4. VS Code or any popular Text editor. 
5. Install External Pluggins like ES7+ React/Redux/React-Native snippets

## Documentation: 
Available from the React Web Site. 

### Commands:
```
npm install -g npx ->Install the command line tools for React.
npx create-react-app myapp -> Creates the boiler plate code for React application. 
cd myapp ->Move to the directory of the created application. 
npm start -> starts the App to see the React svg file displaying and rotating. 
```

## Files of React App
1. index.js -> Main File of the App that contains the Root element of the DOM
2. App.js -> Component of the Application that renders the DOM structure.
3. App.css -> CSS for the Elements once displayed on DOM. 

## Notes for creating Components in Reactjs Application
-  U can create Functional Component, Class based Component and Arrow Function based Component. 
-  Create the component in the Components Folder as .js File.
-  The Component must implement a render function that returns the V-DOM of the Component as JSX code: JavaScript-Xml Code.
-  U can use react-router-dom for applying routing feature in React.
-  U can use axios or fetch API for interacting with RESTFull Services.
-  Use useState for persisting state in React Components. The State can be modified using setState API, dont set the values directly to the state
-  If U want the Parent Component to send data to the Component, use props as they can be set like attributes and are read only.
-  Use refs for storing the inputs by the User. refs need to be bound using binding functionality
-  Use the new Link and Navigate APIs for routing feature
-  Use useParams() API to get the parameter values from the Query String. 
