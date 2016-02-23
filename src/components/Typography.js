import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

require('./_typography.scss');

const H1 = React.createClass({
	mixins: [PureRenderMixin],
	render: function () {
		return <h1>{this.props.children}</h1>;
	}
});

const H2 = React.createClass({
	mixins: [PureRenderMixin],
	render: function () {
		return <h2>{this.props.children}</h2>;
	}
});

export { H1, H2 };