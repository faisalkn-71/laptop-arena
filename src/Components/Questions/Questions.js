import React from 'react';

const Questions = () => {
    return (
        <div className='container my-5'>
            <h4>How react works?</h4>
            <p>React is a javascript library which creates UI using declarative code. First of all react converts javascript code to html code.Then react creates virtual DOM by using components. If user change anything in components, then react creates another virtual DOM and compare with previous virtual DOM. Then react find out the changes and update the actual DOM. In this process user's application wroks fast and save a lot of time.</p>

            <br />
            
            <h4>What is the difference between props and state?</h4>
            <p>Props stands for properties. Props are arguments passed data to react components. Props are read only. It cannot be modified. On the other hand state is a plane javascript object used by react to represent information about component's present situation. State can change and it will be asynchronous. State can be modified.</p>
            
            
        </div>
    );
};

export default Questions;