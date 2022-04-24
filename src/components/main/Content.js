import React, { useEffect, useState } from 'react';

function Content() {
	const getLocalData = () => {
		const dummyPosts = [
			{ title: 'Hello6', content: 'Here comes description in detail.' },
			{ title: 'Hello5', content: 'Here comes description in detail.' },
			{ title: 'Hello4', content: 'Here comes description in detail.' },
			{ title: 'Hello3', content: 'Here comes description in detail.' },
			{ title: 'Hello2', content: 'Here comes description in detail.' },
			{ title: 'Hello1', content: 'Here comes description in detail.' },
		];
		const data = localStorage.getItem('posts');

		if (data) return JSON.parse(data);
		else return dummyPosts;
	};

	const [posts] = useState(getLocalData);

	useEffect(() => {
		localStorage.setItem('posts', JSON.stringify(posts));
	}, [posts]);

	return (
		<main>
			{posts.map((post, idx) => {
				if (idx < 3) {
					return (
						<article key={idx}>
							<h2>{post.title}</h2>
							<p>{post.content}</p>
						</article>
					);
				}
			})}
		</main>
	);
}

export default Content;
