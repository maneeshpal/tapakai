import component from 'omniscient';
import './_demo.scss';
import React from 'react';
import reactToJsx from '../utils/reactToJsx';
import 'prismjs';
import './prism.css';

const Heading = component(function ({ children }) {
    return (
        <h3>{children}</h3>
    );
});

const SampleCode = component(function ({ children }) {
    let str = reactToJsx(children, { indent: '\t'});

    return (
        <pre>
            <code className="language-html">
            {str}
            </code>
        </pre>
    );
});

const Example = component(function ({ children }) {
    return (
        <div className="example">
            <h4>Example</h4>
            {children}
            <h4>Sample Code</h4>
            <SampleCode>{children}</SampleCode>

        </div>
    );
});

const Comment = component('Comment', function ({ children }) {
    return <span></span>;
});

const Demo = component(function ({ children }) {
    
    return (
        <div className="demo">
            {children}
        </div>
    );
});

export default Demo;
export { SampleCode, Example, Heading, Comment };