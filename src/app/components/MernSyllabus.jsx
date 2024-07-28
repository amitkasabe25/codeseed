import React from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
const MernSyllabus = () => {
  return (
    <>
      <Navbar />
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Full Course Syllabus</h1>

        <h2 className="text-2xl font-semibold mt-4 mb-2">HTML Course Syllabus</h2>
        <ul className="list-disc list-inside">
          <li className="ml-4 mb-2">Module 1: Introduction to HTML
            <ul className="list-circle list-inside ml-4">
              <li>What is HTML?</li>
              <li>HTML syntax and structure</li>
              <li>Basic HTML tags</li>
              <li>Creating your first HTML page</li>
            </ul>
          </li>
          <li className="ml-4 mb-2">Module 2: HTML Elements
            <ul className="list-circle list-inside ml-4">
              <li>Paragraphs and headings</li>
              <li>Lists and links</li>
              <li>Images and multimedia</li>
              <li>Tables and forms</li>
            </ul>
          </li>
          <li className="ml-4 mb-2">Module 3: Advanced HTML
            <ul className="list-circle list-inside ml-4">
              <li>Semantic HTML5 elements</li>
              <li>Canvas and SVG</li>
              <li>HTML APIs</li>
              <li>Best practices for writing HTML</li>
            </ul>
          </li>
          <li className="ml-4 mb-2">Module 4: HTML Project
            <ul className="list-circle list-inside ml-4">
              <li>Building a complete web page with HTML</li>
              <li>Applying all the concepts learned</li>
              <li>Testing and deploying your HTML project</li>
            </ul>
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-4 mb-2">CSS Course Syllabus</h2>
        <ul className="list-disc list-inside">
          <li className="ml-4 mb-2">Module 1: Introduction to CSS
            <ul className="list-circle list-inside ml-4">
              <li>What is CSS?</li>
              <li>CSS syntax and selectors</li>
              <li>Inline, internal, and external CSS</li>
              <li>Basic styling: colors, fonts, and backgrounds</li>
            </ul>
          </li>
          <li className="ml-4 mb-2">Module 2: CSS Box Model
            <ul className="list-circle list-inside ml-4">
              <li>Understanding the box model</li>
              <li>Margins, borders, padding, and content</li>
              <li>Width and height</li>
              <li>Box-sizing property</li>
            </ul>
          </li>
          <li className="ml-4 mb-2">Module 3: CSS Layout Techniques
            <ul className="list-circle list-inside ml-4">
              <li>Positioning elements: static, relative, absolute, fixed, sticky</li>
              <li>Flexbox layout</li>
              <li>Grid layout</li>
              <li>Responsive design with media queries</li>
            </ul>
          </li>
          <li className="ml-4 mb-2">Module 4: Advanced CSS
            <ul className="list-circle list-inside ml-4">
              <li>Transitions and animations</li>
              <li>Pseudo-classes and pseudo-elements</li>
              <li>CSS variables (custom properties)</li>
              <li>Best practices for writing CSS</li>
            </ul>
          </li>
          <li className="ml-4 mb-2">Module 5: CSS Project
            <ul className="list-circle list-inside ml-4">
              <li>Building a complete web page with CSS</li>
              <li>Applying all the concepts learned</li>
              <li>Testing and deploying your CSS project</li>
            </ul>
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-4 mb-2">Tailwind CSS Course Syllabus</h2>
        <ul className="list-disc list-inside">
          <li className="ml-4 mb-2">Module 1: Introduction to Tailwind CSS
            <ul className="list-circle list-inside ml-4">
              <li>What is Tailwind CSS?</li>
              <li>Setting up Tailwind CSS</li>
              <li>Basic utility classes</li>
              <li>Responsive design with Tailwind</li>
            </ul>
          </li>
          <li className="ml-4 mb-2">Module 2: Tailwind CSS Layouts
            <ul className="list-circle list-inside ml-4">
              <li>Flexbox and Grid utilities</li>
              <li>Creating responsive layouts</li>
              <li>Spacing and alignment</li>
              <li>Customizing the default theme</li>
            </ul>
          </li>
          <li className="ml-4 mb-2">Module 3: Tailwind CSS Components
            <ul className="list-circle list-inside ml-4">
              <li>Building reusable components</li>
              <li>Using component libraries</li>
              <li>Styling forms and buttons</li>
              <li>Applying animations and transitions</li>
            </ul>
          </li>
          <li className="ml-4 mb-2">Module 4: Advanced Tailwind CSS
            <ul className="list-circle list-inside ml-4">
              <li>Optimizing for production</li>
              <li>Custom directives and plugins</li>
              <li>Integrating with frameworks (React, Vue, etc.)</li>
              <li>Best practices for using Tailwind CSS</li>
            </ul>
          </li>
          <li className="ml-4 mb-2">Module 5: Tailwind CSS Project
            <ul className="list-circle list-inside ml-4">
              <li>Building a complete web application with Tailwind CSS</li>
              <li>Applying all the concepts learned</li>
              <li>Testing and deploying your Tailwind CSS project</li>
            </ul>
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-4 mb-2">JavaScript Course Syllabus</h2>
        <ul className="list-disc list-inside">
          <li className="ml-4 mb-2">Module 1: Introduction to JavaScript
            <ul className="list-circle list-inside ml-4">
              <li>What is JavaScript?</li>
              <li>JavaScript in the browser</li>
              <li>Basic syntax and data types</li>
              <li>Variables and constants</li>
            </ul>
          </li>
          <li className="ml-4 mb-2">Module 2: JavaScript Fundamentals
            <ul className="list-circle list-inside ml-4">
              <li>Operators and expressions</li>
              <li>Control flow: conditionals and loops</li>
              <li>Functions and scope</li>
              <li>Arrays and objects</li>
            </ul>
          </li>
          <li className="ml-4 mb-2">Module 3: Advanced JavaScript Concepts
            <ul className="list-circle list-inside ml-4">
              <li>Asynchronous JavaScript: callbacks, promises, async/await</li>
              <li>Working with the DOM</li>
              <li>Event handling and delegation</li>
              <li>Using fetch API and AJAX</li>
            </ul>
          </li>
          <li className="ml-4 mb-2">Module 4: JavaScript and the Browser
            <ul className="list-circle list-inside ml-4">
              <li>Browser APIs: localStorage, sessionStorage, cookies</li>
              <li>Working with forms and validation</li>
              <li>Creating interactive web applications</li>
              <li>Using third-party libraries and frameworks</li>
            </ul>
          </li>
          <li className="ml-4 mb-2">Module 5: JavaScript Project
            <ul className="list-circle list-inside ml-4">
              <li>Building a complete web application with JavaScript</li>
              <li>Applying all the concepts learned</li>
              <li>Testing and deploying your JavaScript project</li>
            </ul>
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-4 mb-2">Node.js Course Syllabus</h2>
        <ul className="list-disc list-inside">
          <li className="ml-4 mb-2">Module 1: Introduction to Node.js
            <ul className="list-circle list-inside ml-4">
              <li>What is Node.js?</li>
              <li>Setting up Node.js environment</li>
              <li>Node.js modules and packages</li>
              <li>Building a simple server</li>
            </ul>
          </li>
          <li className="ml-4 mb-2">Module 2: Node.js Core Modules
            <ul className="list-circle list-inside ml-4">
              <li>File system module</li>
              <li>HTTP module</li>
              <li>Events module</li>
              <li>Stream module</li>
            </ul>
          </li>
          <li className="ml-4 mb-2">Module 3: Asynchronous Programming in Node.js
            <ul className="list-circle list-inside ml-4">
              <li>Understanding asynchronous programming</li>
              <li>Callbacks, promises, and async/await</li>
              <li>Working with databases (MongoDB, SQL)</li>
              <li>Handling errors and exceptions</li>
            </ul>
          </li>
          <li className="ml-4 mb-2">Module 4: Building APIs with Node.js
            <ul className="list-circle list-inside ml-4">
              <li>Creating RESTful APIs</li>
              <li>Using Express.js framework</li>
              <li>Middleware and routing</li>
              <li>Authentication and authorization</li>
            </ul>
          </li>
          <li className="ml-4 mb-2">Module 5: Node.js Project
            <ul className="list-circle list-inside ml-4">
              <li>Building a complete application with Node.js</li>
              <li>Applying all the concepts learned</li>
              <li>Testing and deploying your Node.js project</li>
            </ul>
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-4 mb-2">Express.js Course Syllabus</h2>
        <ul className="list-disc list-inside">
          <li className="ml-4 mb-2">Module 1: Introduction to Express.js
            <ul className="list-circle list-inside ml-4">
              <li>What is Express.js?</li>
              <li>Setting up Express.js</li>
              <li>Basic routing</li>
              <li>Handling requests and responses</li>
            </ul>
          </li>
          <li className="ml-4 mb-2">Module 2: Middleware in Express.js
            <ul className="list-circle list-inside ml-4">
              <li>Understanding middleware</li>
              <li>Built-in middleware</li>
              <li>Third-party middleware</li>
              <li>Creating custom middleware</li>
            </ul>
          </li>
          <li className="ml-4 mb-2">Module 3: Advanced Express.js Concepts
            <ul className="list-circle list-inside ml-4">
              <li>Template engines (EJS, Pug)</li>
              <li>Error handling</li>
              <li>File uploads and downloads</li>
              <li>Session management and cookies</li>
            </ul>
          </li>
          <li className="ml-4 mb-2">Module 4: Building APIs with Express.js
            <ul className="list-circle list-inside ml-4">
              <li>Creating RESTful APIs</li>
              <li>Versioning and documentation</li>
              <li>Authentication and authorization</li>
              <li>Testing and debugging APIs</li>
            </ul>
          </li>
          <li className="ml-4 mb-2">Module 5: Express.js Project
            <ul className="list-circle list-inside ml-4">
              <li>Building a complete application with Express.js</li>
              <li>Applying all the concepts learned</li>
              <li>Testing and deploying your Express.js project</li>
            </ul>
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-4 mb-2">React Course Syllabus</h2>
        <ul className="list-disc list-inside">
          <li className="ml-4 mb-2">Module 1: Introduction to React
            <ul className="list-circle list-inside ml-4">
              <li>What is React?</li>
              <li>Setting up React environment</li>
              <li>JSX and components</li>
              <li>Props and state</li>
            </ul>
          </li>
          <li className="ml-4 mb-2">Module 2: React Components and Lifecycle
            <ul className="list-circle list-inside ml-4">
              <li>Functional and class components</li>
              <li>Component lifecycle methods</li>
              <li>Handling events</li>
              <li>Conditional rendering</li>
            </ul>
          </li>
          <li className="ml-4 mb-2">Module 3: Advanced React Concepts
            <ul className="list-circle list-inside ml-4">
              <li>React hooks</li>
              <li>Context API</li>
              <li>React Router for navigation</li>
              <li>Code splitting and lazy loading</li>
            </ul>
          </li>
          <li className="ml-4 mb-2">Module 4: State Management in React
            <ul className="list-circle list-inside ml-4">
              <li>Managing state with Redux</li>
              <li>Redux toolkit and middleware</li>
              <li>React Query for data fetching</li>
              <li>Optimizing performance</li>
            </ul>
          </li>
          <li className="ml-4 mb-2">Module 5: React Project
            <ul className="list-circle list-inside ml-4">
              <li>Building a complete application with React</li>
              <li>Applying all the concepts learned</li>
              <li>Testing and deploying your React project</li>
            </ul>
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-4 mb-2">Python Course Syllabus</h2>
        <ul className="list-disc list-inside">
          <li className="ml-4 mb-2">Module 1: Introduction to Python
            <ul className="list-circle list-inside ml-4">
              <li>What is Python?</li>
              <li>Setting up Python environment</li>
              <li>Basic syntax and data types</li>
              <li>Variables and constants</li>
            </ul>
          </li>
          <li className="ml-4 mb-2">Module 2: Python Fundamentals
            <ul className="list-circle list-inside ml-4">
              <li>Operators and expressions</li>
              <li>Control flow: conditionals and loops</li>
              <li>Functions and scope</li>
              <li>Lists, tuples, and dictionaries</li>
            </ul>
          </li>
          <li className="ml-4 mb-2">Module 3: Advanced Python Concepts
            <ul className="list-circle list-inside ml-4">
              <li>Object-oriented programming</li>
              <li>Working with files and directories</li>
              <li>Error handling and exceptions</li>
              <li>Modules and packages</li>
            </ul>
          </li>
          <li className="ml-4 mb-2">Module 4: Data Handling in Python
            <ul className="list-circle list-inside ml-4">
              <li>Working with CSV, JSON, and XML files</li>
              <li>Using libraries like Pandas and NumPy</li>
              <li>Data visualization with Matplotlib</li>
              <li>Introduction to web scraping</li>
            </ul>
          </li>
          <li className="ml-4 mb-2">Module 5: Python Project
            <ul className="list-circle list-inside ml-4">
              <li>Building a complete application with Python</li>
              <li>Applying all the concepts learned</li>
              <li>Testing and deploying your Python project</li>
            </ul>
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-4 mb-2">JSON Course Syllabus</h2>
        <ul className="list-disc list-inside">
          <li className="ml-4 mb-2">Module 1: Introduction to JSON
            <ul className="list-circle list-inside ml-4">
              <li>What is JSON?</li>
              <li>JSON syntax and structure</li>
              <li>Parsing and serializing JSON</li>
              <li>Working with JSON in different programming languages</li>
            </ul>
          </li>
          <li className="ml-4 mb-2">Module 2: JSON and APIs
            <ul className="list-circle list-inside ml-4">
              <li>Using JSON with RESTful APIs</li>
              <li>Fetching JSON data from APIs</li>
              <li>Sending JSON data to APIs</li>
              <li>Handling JSON errors</li>
            </ul>
          </li>
          <li className="ml-4 mb-2">Module 3: Advanced JSON Concepts
            <ul className="list-circle list-inside ml-4">
              <li>JSON Schema for validation</li>
              <li>Nested JSON structures</li>
              <li>Working with large JSON files</li>
              <li>Optimizing JSON performance</li>
            </ul>
          </li>
          <li className="ml-4 mb-2">Module 4: JSON Tools and Libraries
            <ul className="list-circle list-inside ml-4">
              <li>Popular JSON libraries (e.g., Jackson, Gson)</li>
              <li>Online JSON tools and editors</li>
              <li>Using JSON with databases (NoSQL)</li>
              <li>Integrating JSON with frontend frameworks</li>
            </ul>
          </li>
          <li className="ml-4 mb-2">Module 5: JSON Project
            <ul className="list-circle list-inside ml-4">
              <li>Building a complete application with JSON</li>
              <li>Applying all the concepts learned</li>
              <li>Testing and deploying your JSON project</li>
            </ul>
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-4 mb-2">REST API Module</h2>
        <ul className="list-disc list-inside">
          <li className="ml-4 mb-2">Module 1: Introduction to REST API
            <ul className="list-circle list-inside ml-4">
              <li>What is a REST API?</li>
              <li>RESTful principles and architecture</li>
              <li>Setting up a REST API</li>
              <li>Testing and documenting REST APIs</li>
            </ul>
          </li>
        </ul>
      </div>
      <Footer/>
    </>
  );
};

export default MernSyllabus;
