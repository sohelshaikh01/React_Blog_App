import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";

const Home = () => {

    const [posts, setPosts] = useState([]);
    const login = useSelector((state) => state.auth.userData);

    useEffect(() => {
        appwriteService.getPosts()
            .then((posts) => {
                if (Array.isArray(posts?.documents)) {
                    setPosts(posts.documents);
                } else {
                    console.error("Invalid API response:", posts);
                }
            })
            .catch((error) => {
                console.error("Error fetching posts:", error);
            });
    }, []);

    if (posts.length === 0) {

        return (
            <div className="w-full py-4 sm:py-8 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            {login ? (
                                <h1 className="text-2xl font-bold hover:text-gray-500">
                                    Create Posts to read
                                </h1>
                            ) : (
                                <h1 className="text-2xl font-bold hover:text-gray-500">
                                    Login to read posts
                                </h1>
                            )}
                        </div>
                    </div>
                </Container>
            </div>
        );
    }

    return (
        <div className="w-full py-4 sm:py-8">
            <Container>
                <div className="flex flex-wrap flex-col sm:flex-row">
                    {posts
                        .filter((post) => post?.$id) // Ensure valid posts
                        .map((post) => (
                            <div key={post.$id} className="p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                                <PostCard {...post} />
                            </div>
                        ))}
                </div>
            </Container>
        </div>
    );
};

export default Home;


