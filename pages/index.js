import 'isomorphic-fetch';
import React from 'react';
import withRedux from 'next-redux-wrapper';

import { PasswordSecurity } from '../components';
import initStore from '../container/store';
import GlobalLayout from '../layout/GlobalLayout';

const Index = () => (
	<GlobalLayout>
		<PasswordSecurity />
	</GlobalLayout>
);

export default withRedux(initStore)(Index);
