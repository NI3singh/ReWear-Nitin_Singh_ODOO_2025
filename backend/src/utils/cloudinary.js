import cloudinary from 'cloudinary';
import { cloudinaryConfig } from '../config/index.js';

cloudinary.v2.config({
    cloud_name: cloudinaryConfig.cloud_name,
    api_key: cloudinaryConfig.api_key,
    api_secret: cloudinaryConfig.api_secret
});

export default cloudinary.v2;
