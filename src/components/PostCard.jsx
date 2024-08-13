import React from 'react';
import { Link } from 'react-router-dom';
import appwriteService from "../appwrite/config"; // Ensure this path matches where your service configuration file is located

function PostCard({ $id, title, featuredImage }) {
    // Function to handle cases where the image fails to load
    const handleImageError = (e) => {
        e.target.src = "https://via.placeholder.com/400x300?text=No+Image"; // Placeholder image URL
        e.target.alt = "No available image";
    };

    // Generate image URL if `featuredImage` is provided, else use a placeholder
    const imageURL = featuredImage ? appwriteService.getFilePreview(featuredImage) : 'https://via.placeholder.com/400x300?text=No+Image';

    return (
        <Link to={`/post/${$id}`} className="block no-underline">
            <div className='w-full bg-gray-100 rounded-xl p-4 hover:bg-gray-200 transition-colors duration-300'>
                <div className='w-full flex justify-center mb-4'>
                    <img 
                        src={imageURL} 
                        alt={title} 
                        className='rounded-xl max-w-full h-auto object-cover'
                        onError={handleImageError}
                    />
                </div>
                <h2 className='text-xl font-bold text-gray-800'>{title}</h2>
            </div>
        </Link>
    );
}

export default PostCard;


