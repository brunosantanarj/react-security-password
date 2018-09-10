import 'isomorphic-fetch';
import React, { PureComponent } from 'react';

import withRedux from 'next-redux-wrapper';
import initStore from '../container/store';
import GlobalLayout from '../layout/GlobalLayout';

class Index extends PureComponent {
	state = {
		minutes: 0,
		hours: 0,
		displayedDate: null,
	};

	componentDidMount() {
		this.start();
	}

	setMinutes = () => {
		const { minutes } = this.state;
		this.increase('minutes');
		if (minutes === 1) {
			this.setShownDate(`Há ${minutes} minuto`);
		} else {
			this.setShownDate(`Há ${minutes} minutos`);
		}
	}

	setHours = () => {
		const { hours } = this.state;
		this.increase('hours');
		if (hours === 1) {
			this.setShownDate(`Há ${hours} hora`);
		} else {
			this.setShownDate(`Há ${hours} horas`);
		}
	}

	setShownDate = message => this.setState({ displayedDate: message })

	start = () => {
		const { minutes } = this.state;
		if (minutes < 60) {
			this.setMinutes();
		} else {
			this.setHours();
		}
	}

	increase = unit => setInterval(() => this.setState(prevState => ({
		[unit]: prevState[unit] + 1,
	})), 1000)

	render = () => (
		<GlobalLayout>
			Essa página está online há {this.state.displayedDate}
		</GlobalLayout>
	)
}

export default withRedux(initStore)(Index);
