import React, { useState } from "react";

function Slides({ slides }) {
  const [page, setPage] = useState(0)
  const handleNext = (e) => {
    setPage(page + 1)
  }
  const handlePre = (e) => {
    setPage(page - 1)
  }
  const handleReset = (e) => {
    setPage(0)
  }
  return (
    <div>
      <div id="navigation" className="text-center">
        <button disabled={page === 0} data-testid="button-restart" className="small outlined" onClick={handleReset}>
          Restart
        </button>
        <button disabled={page === 0} data-testid="button-prev" className="small" onClick={handlePre}>
          Prev
        </button>
        <button disabled={page === slides.length - 1} data-testid="button-next" className="small" onClick={handleNext}>
          Next
        </button>
      </div>
      <div id="slide" className="card text-center">
        <h1 data-testid="title">{slides[page].title}</h1>
        <p data-testid="text">{slides[page].text}</p>
      </div>
    </div>
  );
}

export default Slides;
