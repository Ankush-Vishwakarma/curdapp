import React, { useState } from 'react';
import './Datatable1.css'; // Import CSS file for styling

const Datatable1 = () => {
  const [inputValue, setInputValue] = useState('');
  const [comments, setComments] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
  
    setComments([...comments, inputValue]);
   
    setInputValue('');
  };

  return (
    <div className="datatable1">
      <h2>User Comments</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          // placeholder="Enter your comment" 
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)} 
          className="input-field"
        />
        <button type="submit" className="submit-button">Submit</button>
      </form>
      {/* <div className="comment-list">
        {comments.map((comment, index) => (
          <div key={index} className="comment">
            {comment}
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Datatable1;
