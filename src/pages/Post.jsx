import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true); // Add loading state
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);
    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        const fetchPost = async () => {
            if (slug) {
                try {
                    const fetchedPost = await appwriteService.getPost(slug);
                    if (fetchedPost) setPost(fetchedPost);
                    else navigate("/");
                } catch (error) {
                    console.error("Failed to fetch post:", error);
                    navigate("/");
                } finally {
                    setLoading(false); // Set loading to false once data is fetched
                }
            } else {
                navigate("/");
            }
        };

        fetchPost();
    }, [slug, navigate]);

    const deletePost = async () => {
        try {
            const status = await appwriteService.deletePost(post.$id);
            if (status) {
                await appwriteService.deleteFile(post.featuredImage);
                navigate("/");
            }
        } catch (error) {
            console.error("Failed to delete post:", error);
        }
    };

    if (loading) {
        return (
            <div className="py-8 text-center">
                <Container>
                    <p>Loading post...</p>
                </Container>
            </div>
        );
    }

    return post ? (
        <div className="py-8">
            <Container>
                <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2 bg-white shadow-md">
                    <img
                        src={appwriteService.getFilePreview(post.featuredImage)}
                        alt={post.title}
                        className="rounded-xl max-w-full h-auto object-cover"
                    />

                    {isAuthor && (
                        <div className="absolute right-6 top-6 flex space-x-2">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button bgColor="bg-green-500" className="mr-3">
                                    Edit
                                </Button>
                            </Link>
                            <Button bgColor="bg-red-500" onClick={deletePost}>
                                Delete
                            </Button>
                        </div>
                    )}
                </div>
                <div className="w-full mb-6">
                    <h1 className="text-4xl font-bold text-gray-800">{post.title}</h1>
                </div>
                <div className="prose prose-lg max-w-none text-gray-700">
                    {parse(post.content)}
                </div>
            </Container>
        </div>
    ) : (
        <div className="py-8 text-center">
            <Container>
                <p>Post not found.</p>
            </Container>
        </div>
    );
}
