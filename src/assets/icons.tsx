import React from 'react';

function CloseIcon() {
	return (
		<svg
			width="16"
			height="20"
			viewBox="0 0 16 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M15.128 1.89703L8.64012 9.95479L14.9599 17.8038L13.9178 19.0981L7.59803 11.249L1.1438 19.2651L0.168945 18.0543L6.62317 10.0383L0.269792 2.14753L1.31188 0.853279L7.66526 8.74404L14.1531 0.686279L15.128 1.89703Z"
				fill="#71809F"
			/>
		</svg>
	);
}

function RemoveIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			width="24"
			height="24"
		>
			<path fill="none" d="M0 0h24v24H0z" />
			<path d="M4 8h16v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8zm3-3V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2h5v2H2V5h5zm2-1v1h6V4H9zm0 8v6h2v-6H9zm4 0v6h2v-6h-2z" />
		</svg>
	);
}

function Add24() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			width="24"
			height="24"
		>
			<path fill="none" d="M0 0h24v24H0z" />
			<path
				d="M11 11V7h2v4h4v2h-4v4h-2v-4H7v-2h4zm1 11C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"
				fill="#f4e6ae"
			/>
		</svg>
	);
}

function Edit24() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			width="24"
			height="24"
		>
			<path fill="none" d="M0 0h24v24H0z" />
			<path d="M15.728 9.686l-1.414-1.414L5 17.586V19h1.414l9.314-9.314zm1.414-1.414l1.414-1.414-1.414-1.414-1.414 1.414 1.414 1.414zM7.242 21H3v-4.243L16.435 3.322a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414L7.243 21z" />
		</svg>
	);
}

export { CloseIcon, RemoveIcon, Edit24, Add24 };
