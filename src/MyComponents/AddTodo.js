import React, { useState } from 'react';
const AddTodo = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const getImageForTitle = (title) => {
    const lowerTitle = title.toLowerCase();
    if (lowerTitle === 'work') return '/work.jpeg';
    if (lowerTitle === 'study') return '/study.jpeg';
    if (lowerTitle === 'exercise') return '/mol.png';
    if (lowerTitle === 'chill') return '/chill.jpeg';
    else{
      
      return '/bean.jpeg';
    }
  };


  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title or Description cannot be blank");
    } else {
      setIsLoading(true);
      const img = getImageForTitle(title);
      props.addTodo(title, desc, img);
      setTitle("");
      setDesc("");
      setIsLoading(false);
    }
  };

  return (
    <div className="container my-3">
      <h3>Add Your Task</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Work Title</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="title" />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">Work Description</label>
          <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} className="form-control" id="desc" />
        </div>

        <button type="submit" className="btn btn-sm btn-success" disabled={isLoading}>
          {isLoading ? (
            <div className="spinner-grow spinner-grow-sm text-light" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : "AddTodo"}
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
