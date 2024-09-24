import React, { useState } from 'react';

const AccordionItem = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="w-full bg-[#F2E9E0]">
        <div className="border-b border-gray-200">
            <button
                className="w-full text-left p-4 focus:outline-none"
                onClick={toggleAccordion}
            >
                <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium">{title}</h3>
                    <span>{isOpen ? '-' : '+'}</span>
                </div>
            </button>
            {isOpen && (
                <div className="p-4 text-gray-700">
                    <p dangerouslySetInnerHTML={{ __html: content }}></p>
                </div>
            )}
        </div>
        </div>
    );
};

const Faq = () => {
    const accordionData = [
        {
            title: '1. What is React.js and Explain the concept of "components" in React?',
            content: "React.js is an open-source JavaScript library developed by Facebook for building user interfaces (UIs), especially for single-page applications. It focuses on efficiently rendering and updating the UI in response to changes in data. React allows developers to build web applications that can update and render dynamic data without reloading the entire page.<br/><b>The Concept of Components in React</b><br/>Components are the building blocks of a React application. Each component in React represents a part of the user interface (UI), such as a button, form, or an entire section of a webpage. Components are independent, reusable pieces of code that define how a particular part of the UI should look and behave. A React application is typically made up of many components that work together to create a complete user interface.<br/><b>Key Concepts of React Components : </b><br/>Reusability, Functional Components, Class Components, JSX (JavaScript XML), Props (Properties), State, Lifecycle Methods, Component Composition",
        },
        {
            title: '2. What is JSX in React, and how does it work?',
            content: 'JSX stands for JavaScript XML. JSX allows us to write HTML in React. JSX makes it easier to write and add HTML in React. <br/> JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement()  and/or appendChild() methods. JSX converts HTML tags into react elements.',
        },
        {
            title: '3. What is the Virtual DOM, and how does React use it to optimize performance?',
            content: 'The virtual DOM is an in-memory representation of the real DOM, which helps improve the performance of web applications. Instead of directly manipulating the real DOM, changes are first made to the virtual DOM, which is then compared to the real DOM to apply only the necessary changes. <br/> the virtual DOM is a powerful tool that has revolutionized the development of web applications. By creating a virtual representation of the DOM in memory, React can update only the parts that have changed, resulting in faster, more efficient web applications.',
        },
        {
            title: '4. Explain the concept of "props" in React and how they are used.',
            content: 'In ReactJS, the props are a type of object where the value of attributes of a tag is stored. The word “props” implies “properties”, and its working functionality is quite similar to HTML attributes. <br/> Using the “this.props”, we can make the props available inside the components. Then, the dynamic data can be rendered through the render method. We need to add the props to the reactDOM.render() in the Main.js file of our ReactJS project of ReactJS if we need immutable data in the component. Then we can use it in the component where we want to use those dynamic data.',
        },
        {
            title: '5. What is "state" in React, and how does it differ from props?',
            content: 'In React, state is used to manage the internal data of a component. It is an object that stores the data that can change within a component.When the state of a component changes, React will re-render the component with the updated data.State can only be modified within the component where it is defined and cannot be accessed or modified by any other component.The state can be initialized in the constructor of a component, and it can be updated using the setState() method.<br/>State refers to the internal data of a component that can change over time, while props are used to pass data between components. By keeping these differences in mind and using them appropriately, developers can create robust and scalable applications with React.',
        },
    ];

    return (
        <div className="w-full bg-[#F2E9E0]">
                <div className="lg:w-5/6 mx-auto border border-gray-300 rounded-lg">
                    {accordionData.map((item, index) => (
                        <AccordionItem key={index} title={item.title} content={item.content} />
                    ))}
                </div>
                </div>   
    );
};

export default Faq;
