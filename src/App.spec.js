import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('<App/>', () => {
	it('should have component is not null', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.html()).not.toBeNull();
	});
});
