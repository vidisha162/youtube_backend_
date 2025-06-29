    import dotenv from 'dotenv';
    import { v2 as cloudinary } from 'cloudinary';
    import fs from 'fs';
    
    // Load environment variables from .env file
    dotenv.config();
    
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET 
    });
    
    const uploadOnCloudinary = async (localFilePath) => {
        try {
            if (!localFilePath) return null;
    
            // Upload the file to Cloudinary
            const response = await cloudinary.uploader.upload(localFilePath, {
                resource_type: "auto"
            });
    
            console.log("File uploaded to Cloudinary:", response.url);
            return response;
        } catch (error) {
            fs.unlinkSync(localFilePath); // Remove local file if upload fails
            console.error("Error uploading to Cloudinary:", error);
            return null;
        }
    };
    
    export { uploadOnCloudinary };
    