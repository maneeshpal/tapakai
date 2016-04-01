import React from 'react';
import ReactDom from 'react-dom';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { H1, H2 } from './components/Typography';
import Button from './components/Button';
import immstruct from 'immstruct';


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
				<H1>Im Header 1</H1>
				<Button>Hello</Button><Button>Yello</Button>
			</div>
		);
	}
});

ReactDom.render(<App data={structure.cursor()} />, document.getElementById('mount'));