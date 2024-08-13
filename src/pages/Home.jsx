import React, { useEffect, useState } from 'react';
import { Container, PostCard } from '../components';
import appwriteService from "../appwrite/config";

function Home() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const fetchedPosts = await appwriteService.getPosts();
                if (fetchedPosts && fetchedPosts.documents) {
                    setPosts(fetchedPosts.documents);
                }
                if (fetchedPosts.documents.length === 0) {
                    setError('No posts available.');
                }
            } catch (err) {
                setError('Failed to load posts.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    if (loading) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <p>Loading posts...</p>
                </Container>
            </div>
        );
    }

    if (error) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <p>{error}</p>
                </Container>
            </div>
        );
    }

    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default Home;
