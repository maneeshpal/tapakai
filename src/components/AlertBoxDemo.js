import component from 'omniscient';
import React from 'react';
import Demo, { 
    Example,
    SampleCode,
    Heading,
    Comment
} from './Demo';

import AlertBox from './AlertBox';

const AlertBoxDemo = component(function () {
    return (
        <Demo>
            <Heading>AlertBox</Heading>
            <p>Some description. This shit is optional</p>
            <Example>
                <AlertBox aSimple={124} yodle="xxx">{'hello'}</AlertBox>
                <Comment>
                    {'Hello dirty Fella Yello flelel'}
                </Comment>
                <button className="button primary">Button</button>
            </Example>
            <SampleCode>
                <button className="button primary">Button</button>
            </SampleCode>
            <pre>
                <code className="language-javascript">
                   &lt;button className=&quot;button primary&quot;&gt;Button&lt;/button&gt;
                </code>
            </pre>
        </Demo>
    );
});

export default AlertBoxDemo;