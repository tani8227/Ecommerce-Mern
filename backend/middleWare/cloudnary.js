import { v2 as cloudinary } from 'cloudinary';
import 'dotenv/config'

cloudinary.config({
  cloud_name: process.env.CLOUDNARY_CLOUD_NAME,  
  api_key: process.env.CLOUDNARY_API,  
  api_secret: process.env.CLOUDNARY_SECRET_API,  
});

export default cloudinary;  

