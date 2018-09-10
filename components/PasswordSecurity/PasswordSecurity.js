import React, { PureComponent } from 'react';
import PasswordInfo from './PasswordInfo';

export default class PasswordSecurity extends PureComponent {
	state = {
		type: 'password',
		matches: [],
		password: '',
		match: null,
	}

	setMatches = match => this.setState(
		{ matches: [match, ...this.state.matches] },
		() => this.organizeMatches(),
	);

	organizeMatches = () => {
		const { matches } = this.state;
		const numberOfMatches = matches.length;

		if (numberOfMatches <= 2) {
			this.setState({ match: 'weak' });
		}

		if (numberOfMatches === 3) {
			this.setState({ match: 'medium' });
		}

		if (numberOfMatches > 3) {
			this.setState({ match: 'strong' });
		}
	};

	testPassword = (password) => {
		this.setState({ password });
		const { matches } = this.state;
		const hasMatches = Object.keys(PasswordInfo);
		hasMatches.map(match =>
			(PasswordInfo[match].test(password) && !matches.includes(match)) && this.setMatches(match));
	}

	verifyPassword = ({ target }) => this.testPassword(target.value);

	render = () => (
		<div>
			<input type={this.state.type} onChange={this.verifyPassword} value={this.state.password} />
			{ this.state.match && <span>{this.state.match}</span> }
		</div>
	);
}
