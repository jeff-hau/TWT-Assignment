import React, { useEffect } from 'react';
import '../styles/News.css';

function loadRssAppScript() {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = 'https://widget.rss.app/v1/magazine.js';
    script.type = 'text/javascript';
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Failed to load RSS widget script'));
    document.body.appendChild(script);
  });
}

function News() {
  useEffect(() => {
    let script;
    loadRssAppScript()
      .then(() => {
        console.log('RSS widget script loaded');
      })
      .catch(error => {
        console.error('Error loading RSS widget script:', error);
      });

    return () => {
      script = document.querySelector('script[src="https://widget.rss.app/v1/magazine.js"]');
      if (script) document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="news-container">
      <rssapp-magazine id="Bmv9BqOx6FkvZETm"></rssapp-magazine>
    </div>
  );
}

export default News;
