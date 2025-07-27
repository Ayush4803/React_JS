const Shimmer = () => {
  return (
    <div className="res-container">
      {/* Render 8 shimmer cards to fill layout */}
      {Array(8).fill("").map((_, index) => (
        <div key={index} className="shimmer-card">
          <div className="shimmer-img"></div>
          <div className="shimmer-line title"></div>
          <div className="shimmer-line rating"></div>
          <div className="shimmer-line time"></div>
          <div className="shimmer-line cost"></div>
          <div className="shimmer-line category"></div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
