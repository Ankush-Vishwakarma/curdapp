import React, { useState } from 'react'
import Sidebar from '../sidebar/Sidebar'
import Navbar from '../navbar/Navbar'

function ImageAdd() {
   const [image, setImage] = useState(null);

    const HandelChange=(e)=>{
         if(e.target.files[0]){
              setImage(e.target.files[0]);
         }
    }
    const HandelUpload = ()=>{
    //   const storageRef = db.storageref();
    //   const uploadtask = storageRef.child(`images/${image.name}`).put(image);
    //  uploadtask.on()

    }
   return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        {/* <h1>hellow this is add image cpmponent</h1> */}
        <h2>Upload image</h2>
        <input type="file" onChange={HandelChange}/>
        <button onClick={HandelUpload} >Upload</button>
      </div>
     </div>
   )
}

export default ImageAdd