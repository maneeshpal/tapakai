
import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import './_alertbox.scss';

const AlertBox = React.createClass({
	mixins: [PureRenderMixin],
	render: function () {
		return <div className="alertbox">{this.props.children}</div>;
	}
});

export default AlertBox;