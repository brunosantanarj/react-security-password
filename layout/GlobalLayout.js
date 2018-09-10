import React, { Fragment, Component } from 'react';
import withRedux from 'next-redux-wrapper';
import { bindActionCreators } from 'redux';

import VerifyViewPortAction from '../container/actions/FirstRenderAction';
import initStore from '../container/store';
import Head from '../components/Head/Head';

class GlobalLayout extends Component {
	constructor(props) {
		super(props);
		this.viewportWidth = typeof window !== 'undefined' ? window.innerWidth : 0;
	}

	componentWillMount() {
		this.props.VerifyViewPortAction(this.viewportWidth);
	}

	render = () => (
		<Fragment>
			<Head />
			<header>HEADER</header>
			<main>{this.props.children}</main>
			<footer>FOOTER</footer>
		</Fragment>
	);
}

const mapDispatchToProps = dispatch => bindActionCreators({ VerifyViewPortAction }, dispatch);

export default withRedux(initStore, null, mapDispatchToProps)(GlobalLayout);
