import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useSelector } from "react-redux";

import appwriteService from "../appwrite/config";

import parse from "html-react-parser";
import { Button, Container } from "../components";

const Post = () => {
	const [post, setPost] = useState(null);
	const { slug } = useParams();
	const navigate = useNavigate();


	const userData = useSelector((state) => state.auth.userData);
	const isAuthor = post && userData ? post.userId === userData.$id : false;

	useEffect(() => {
		if (slug) {
			appwriteService.getPost(slug).then((post) => {
				if (post) setPost(post);
				else navigate("/");
			});
		} else navigate("/");
	}, [slug, navigate]);

	const deletePost = () => {
		appwriteService.deletePost(post.$id).then((status) => {
			if (status) {
				appwriteService.deleteFile(post.featuredImage);
				navigate("/");
			}
		});
	};

	return post ? (
		
		<div className="py-4 sm:py-8">
			<Container>

				<div className="w-full flex justify-center mb-4 relative border rounded-md sm:rounded-xl p-2">
					<img
						src={post.featuredImage}
						alt={post.title}
						className="rounded-md sm:rounded-xl w-full h-auto md:w-[70%] md:h-[70%] "
					/>

					{isAuthor && (
						<div className="absolute right-4 top-4">
							<Link to={`/edit-post/${post.$id}`}>
								<Button bgColor="bg-green-500 px-3 py-1 sm:px-6 sm:py-2" className="mr-3">
									Edit
								</Button>
							</Link>
							<Button bgColor="bg-red-500 px-3 py-1 sm:px-6 sm:py-2" onClick={deletePost}>
								Delete
							</Button>
						</div>
					)}
				</div>

				<div className="w-full mb-4 sm:mb-6">
					<h1 className="text-xl sm:text-2xl font-bold">{post.title}</h1>
				</div>
				<div className="browser-css text-base">
					{parse(post.content)}
				</div>

			</Container>
		</div>

	) : null;
}


export default Post;
