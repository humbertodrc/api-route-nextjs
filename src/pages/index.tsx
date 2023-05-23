import {GetServerSideProps, NextPage} from "next";
import {Inter} from "next/font/google";
import {useState} from "react";

const inter = Inter({subsets: ["latin"]});

interface Post {
	name: string;
	author: string;
	id: number;
	text: string;
}

interface HomeProps {
	posts: Post[];
}

const Home : NextPage<HomeProps> = ({posts}) => {
	const [postID, setPostID] = useState("");
	const [post, setPost] = useState<Post>({
		name: "",
		author: "",
		id: 0,
		text: "",
	});

	const getPost = async () => {
		const res = await fetch(`/api/posts/${postID}`);
		const newPost = await res.json();
		setPost(newPost);
	};

	console.log(posts);

	return (
		<main
			className={`flex min-h-screen flex-col items-center p-24 ${inter.className}`}
		>
			<div>
				<input
					type="text"
					name="buscar"
					id="buscar"
					value={postID}
					onChange={(e) => setPostID(e.target.value)}
				/>
				<button type="button" onClick={getPost}>
					Buscar
				</button>
			</div>
			<div>
				<h1 className="text-2xl font-bold">{post.name}</h1>
				<p className="text-xl">{post.author}</p>
			</div>
		</main>
	);
};

export const getServerSideProps: GetServerSideProps = async () => {
	const response = await fetch("http://localhost:3000/api/posts");
	const posts = await response.json();

	return {
		props: {
			posts,
		},
	};
};

export default Home;
