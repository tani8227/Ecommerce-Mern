import cloudinary from "./cloudnary.js";

export async function deleteImages(publicIds) {

   
    
   
        const deletionPromises = publicIds.map(publicId => {
            return cloudinary.uploader.destroy(publicId)
                .then(result => console.log(`Image deleted from Cloudinary: ${result}`))
                .catch(error => console.error(`Error deleting image from Cloudinary with ID ${publicId}:`, error));
        });


        await Promise.all(deletionPromises);

}