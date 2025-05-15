import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";

const AllPosts = () => {
    const [posts, setPosts] = useState([]);
    const login = useSelector((state) => state.auth.userData);

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents);
            }
        });
    }, []);

    if (posts.length === 0) {
        return (
            <div className="w-full py-4 sm:py-8 text-center">
                <Container className="p-2">
                    { login ? (
                        <h1 className="text-2xl font-bold">Create Posts to read. </h1>
                    ) : (
                        <h1 className="text-2xl font-bold"> Login to read Posts. </h1>
                    )}
                </Container>
            </div>
        );
    }

    return (
        <div className="w-full py-4 sm:py-8">
            <Container>
                <div className="flex flex-wrap flex-col sm:flex-row">
                    {posts.map((post) => (
                        <div key={post.$id} className="p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default AllPosts;
