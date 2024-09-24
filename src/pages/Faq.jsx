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
            title: 'What is React.js and Explain the concept of "components" in React?',
            content: "React.js is an open-source JavaScript library developed by Facebook for building user interfaces (UIs), especially for single-page applications. It focuses on efficiently rendering and updating the UI in response to changes in data. React allows developers to build web applications that can update and render dynamic data without reloading the entire page.<br/><b>The Concept of Components in React</b><br/>Components are the building blocks of a React application. Each component in React represents a part of the user interface (UI), such as a button, form, or an entire section of a webpage. Components are independent, reusable pieces of code that define how a particular part of the UI should look and behave. A React application is typically made up of many components that work together to create a complete user interface.<br/><b>Key Concepts of React Components : </b><br/>Reusability, Functional Components, Class Components, JSX (JavaScript XML), Props (Properties), State, Lifecycle Methods, Component Composition",
        },
        {
            title: 'What is JSX in React, and how does it work?',
            content: 'This is the content for accordion item 2.',
        },
        {
            title: 'Accordion Item 3',
            content: 'This is the content for accordion item 3.',
        },
        {
            title: 'What is JSX in React, and how does it work?',
            content: 'This is the content for accordion item 2.',
        },
        {
            title: 'Accordion Item 3',
            content: 'This is the content for accordion item 3.',
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
