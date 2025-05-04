import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import appwriteService from "../appwrite/config";
import { Container, PostForm } from '../components';

const EditPost = () => {

    const [post, setPost] = useState(null);
    const {slug} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if(slug) {
            // if slug >> then call service >> give slug >> it returns post >> setpost
            appwriteService.getPost(slug).then((post) => {
                if(post) {
                    setPost(post)
                }
            })
        }
        else {
            navigate('/');
        }
    }, [slug, navigate])

  return post ? (
    <div className="py-8">
        <Container>
            <PostForm post={post} />
        </Container>
    </div>
  ) : null;
}

export default EditPost;
