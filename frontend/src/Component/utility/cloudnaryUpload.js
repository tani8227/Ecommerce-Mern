
export async function uploadImage(imageFile) {
    const formData = new FormData();
    formData.append('file', imageFile);
    formData.append('upload_preset', process.env.REACT_APP_CLOUDNARY_PRESET);
  
    try {
      const response = await fetch(process.env.REACT_APP_CLOUDNARY_URL, {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      console.log(data);
      return data.url;
    } catch (error) {
      console.error('Error uploading image:', error);
      return null;
    }
  }
  