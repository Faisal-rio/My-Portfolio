import React, { useState, useEffect } from "react";
import "./EnhancedLoader.css";

const EnhancedLoader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 5000); // 5 seconds loading time
    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) {
    return (
      <div className="welcome-container">
        <h1 className="welcome-text">Welcome to My Website!</h1>
      </div>
    );
  }

  return (
    <div className="loader-container">
      {/* Buffering loader */}
      <div className="buffering-loader">
        {[...Array(8)].map((_, index) => (
          <div key={index} className="buffering-dot"></div>
        ))}
      </div>
      {/* Loading text */}
      <div className="loading-text">
        <span>W</span>
        <span>e</span>
        <span>l</span>
        <span>c</span>
        <span>o</span>
        <span>m</span>
        <span>e</span>
        <span>!</span>
      </div>
    </div>
  );
};

export default EnhancedLoader;
