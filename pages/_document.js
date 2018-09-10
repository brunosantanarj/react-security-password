import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import Helmet from 'react-helmet';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
	static getInitialProps({ renderPage }) {
		const sheet = new ServerStyleSheet();
		const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
		const styleTags = sheet.getStyleElement();
		return { ...page, styleTags, helmet: Helmet.renderStatic() };
	}

	get helmetHtmlAttrComponents() {
		return this.props.helmet.htmlAttributes.toComponent();
	}

	get helmetBodyAttrComponents() {
		return this.props.helmet.bodyAttributes.toComponent();
	}

	get helmetHeadComponents() {
		return Object.keys(this.props.helmet)
			.filter(el => el !== 'htmlAttributes' && el !== 'bodyAttributes')
			.map(el => this.props.helmet[el].toComponent());
	}

	static get helmetJsx() {
		return (<Helmet
			htmlAttributes={{ lang: 'en' }}
			title="Hello next.js!"
			meta={[
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
				{ property: 'og:title', content: 'Hello next.js!' },
			]}
		/>);
	}

	render() {
		return (
			<html lang="pt-BR" {...this.helmetHtmlAttrComponents}>
				<Head>
					<title>My page</title>
					{this.props.styleTags}
					{ this.helmetJsx }
					{ this.helmetHeadComponents }
				</Head>
				<body {...this.helmetBodyAttrComponents}>
					<Main />
					<NextScript />
				</body>
			</html>
		);
	}
}
