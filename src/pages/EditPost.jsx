import React, { useEffect, useState } from 'react';
import { Container, PostForm } from '../components';
import appwriteService from "../appwrite/config";
import { useNavigate, useParams } from 'react-router-dom';

function EditPost() {
    const [post, setPost] = useState(null); // Rename to singular since it handles a single post
    const [loading, setLoading] = useState(true); // Handle loading state
    const [error, setError] = useState(""); // Handle errors
    const { slug } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (!slug) {
            navigate('/'); // Redirect if no slug is provided
            return;
        }

        const fetchPost = async () => {
            try {
                const fetchedPost = await appwriteService.getPost(slug);
                if (fetchedPost) {
                    setPost(fetchedPost);
                } else {
                    setError("Post not found."); // Set error if no post is returned
                    navigate('/');
                }
            } catch (error) {
                setError(error.message);
                navigate('/'); // Navigate back if there's an error fetching the post
            } finally {
                setLoading(false); // Set loading to false regardless of the outcome
            }
        };

        fetchPost();
    }, [slug, navigate]);

    if (loading) {
        return <p>Loading...</p>; // Display loading state
    }

    if (error) {
        return <p>Error: {error}</p>; // Display error message
    }

    return (
        <div className='py-8'>
            <Container>
                <PostForm post={post} />
            </Container>
        </div>
    );
}

export default EditPost;
