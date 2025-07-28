import { useRouteError } from 'react-router-dom';


const Error = () => {
  const err = useRouteError();
  console.error(err); // for debugging

  return (
    <div className="error-container">
      <div className="error-box">
        <h1 className="error-title">🚨 Oops! Something Went Wrong🤔</h1>
        <p className="error-message">
          {err.status}: {err.statusText || 'Unexpected Error'}
        </p>
        <p className="error-detail">
          {err.data || 'The page you are looking for doesn’t exist or an unexpected error occurred.'}
        </p>
        <a href="/" className="back-home-btn">🔙 Go Back Home</a>
      </div>
    </div>
  );
};

export default Error;
