import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import './_button.scss';

const Button = React.createClass({
	mixins: [PureRenderMixin],
	render: function () {
		return <button className="button">{this.props.children}</button>;
	}
});

export default Button;