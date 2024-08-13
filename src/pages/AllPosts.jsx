import React, { useState, useEffect } from 'react';
import { Container, PostCard } from '../components';
import appwriteService from "../appwrite/config";

function AllPosts() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true); // Add loading state

    useEffect(() => {
        // Fetch posts only once when the component mounts
        const fetchPosts = async () => {
            setLoading(true);
            try {
                const fetchedPosts = await appwriteService.getPosts([]); // Assuming getPosts accepts filters
                if (fetchedPosts && fetchedPosts.documents) {
                    setPosts(fetchedPosts.documents);
                }
            } catch (error) {
                console.error('Failed to fetch posts:', error); // Error handling
            }
            setLoading(false);
        };

        fetchPosts();
    }, []); // Ensure this effect runs only once

    return (
        <div className='w-full py-8'>
            <Container>
                {loading ? (
                    <p>Loading posts...</p> // Show loading indicator
                ) : (
                    <div className='flex flex-wrap'>
                        {posts.map((post) => (
                            <div key={post.$id} className='p-2 w-full md:w-1/2 lg:w-1/4'> {/* Responsive grid */}
                                <PostCard {...post} />
                            </div>
                        ))}
                    </div>
                )}
            </Container>
        </div>
    );
}

export default AllPosts;
