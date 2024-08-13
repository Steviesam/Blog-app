// conf.js
// Configuration settings for Appwrite integration, utilizing environment variables.

const conf = {
    appwriteUrl: import.meta.env.VITE_APPWRITE_URL || 'http://localhost:5173/',
    appwriteProjectId: import.meta.env.VITE_APPWRITE_PROJECT_ID || 'your-default-project-id',
    appwriteDatabaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID || 'your-default-database-id',
    appwriteCollectionId: import.meta.env.VITE_APPWRITE_COLLECTION_ID || 'your-default-collection-id',
    appwriteBucketId: import.meta.env.VITE_APPWRITE_BUCKET_ID || 'your-default-bucket-id',
};

// Provide default values to prevent runtime errors if environment variables are missing
// This is especially useful in development environments or when new team members setup the project

export default conf;
