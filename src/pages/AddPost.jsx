import React from 'react';
import { Container, PostForm } from '../components';

function AddPost() {
  return (
    <div className='py-8'>
        <Container>
            <h1 className="text-4xl font-bold text-center mb-6">Create a New Post</h1> {/* Adding a header for context */}
            <PostForm />
        </Container>
    </div>
  );
}

export default AddPost;
