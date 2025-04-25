import * as React from 'react';

// Voorkom page refresh dmv React Router componenten
export const Navigation = () => {
	return (
		<nav>
			<ul>
				<li>
					<a href="/home">Home</a>
				</li>
				<li>
					<a href="/about">About</a>
				</li>
			</ul>
		</nav>
	);
};
