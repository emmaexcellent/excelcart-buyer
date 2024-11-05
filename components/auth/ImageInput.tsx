import React, { useState } from 'react';
import Image from 'next/image';


const ImageInput = () => {
  const [preview, setPreview] = useState('/testimonial/test2.png');
  const [file, setFile] = useState(null);

  const handleImageChange = (e: { target: { files: any[]; }; }) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setPreview(URL.createObjectURL(selectedFile));
      setFile(selectedFile);
    }
  };

  // const handleSave = async () => {
  //   if (file) {
  //     try {
  //       const response = await storage.createFile('YOUR_BUCKET_ID', file);
  //       console.log('File uploaded successfully', response);
        
  //       // Optionally, save file information to a database collection
  //       await databases.createDocument('YOUR_DATABASE_ID', 'YOUR_COLLECTION_ID', {
  //         fileId: response.$id,
  //         fileUrl: response.$url,
  //       });

  //       alert('Image saved successfully!');
  //     } catch (error) {
  //       console.error('Error uploading file', error);
  //       alert('Failed to save image!');
  //     }
  //   } else {
  //     alert('No image selected!');
  //   }
  // };

  return (
    <div className="flex flex-col justify-center items-center gap-3 pt-3">
      <div className="relative w-28 h-28 rounded-full overflow-hidden shrink-0">
        <Image
          id='preview_img'
          width={120}
          height={120}
          className="absolute inset-0 w-full h-full object-cover rounded-full"
          src={preview}
          alt="Current profile photo"
        />
      </div>
      <label className="block">
        <span className="sr-only">Choose profile photo</span>
        <input
          type="file"
          onChange={handleImageChange}
          className="cursor-pointer text-sm w-56 text-slate-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border file:border-input
            file:text-xs file:font-semibold
            file:bg-background file:text-primary truncate
          "
        />
      </label>
    </div>
  );
}

export default ImageInput;
