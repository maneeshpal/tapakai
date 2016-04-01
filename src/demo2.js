import React from 'react';
import ReactDom from 'react-dom';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { H1, H2 } from './components/Typography';
import AlertBox from './components/AlertBox';
import immstruct from 'immstruct';
import AlertBoxDemo from './components/AlertBoxDemo';

const structure = immstruct({
    items: [{
        item: 'first todo item'
    },
    {
        item: 'second todo item'
    }],
    newItemValue: '' 
});


const App = React.createClass({
	mixins: [PureRenderMixin],
	render: function () {
		return (
			<div>
				<H2>Checkout my alertbox</H2>
				<AlertBox>Hello, im an alert</AlertBox>
				<AlertBoxDemo />
			</div>
		);
	}
});

ReactDom.render(<App data={structure.cursor()} />, document.getElementById('mount'));