import React from 'react';
import star from '../assets/stars.webm';

const MessageArea = () => {
  const videoUrl = star;

  return (
    <div className="flex-grow" style={{
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
      }}>
        <video autoPlay muted loop style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1,
          filter: 'blur(0px)' // Apply a blur effect to the video
        }}>
          <source src={videoUrl} type="video/webm" />
          Your browser does not support the video tag.
        </video>
  
        <div style={{
          position: 'absolute',
          bottom: 0, // Adjusted background color to light gray
          color: '#333', // Adjusted text color to dark gray
          width: '100%',
          padding: '20px',
          zIndex: 10
        }}>
          <div className="flex flex-col space-y-8">
            <div className="flex items-center">
              <div className="flex-shrink-0 w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-white text-xl font-semibold">A</div> {/* Adjusted background color to dark gray */}
              <div className="ml-6 max-w-md bg-gray-700 p-6 rounded-lg shadow-lg"> {/* Adjusted background color to dark gray */}
                <p className="text-base text-white leading-relaxed">Hello! How can I assist you today?</p> {/* Adjusted text color to white */}
              </div>
            </div>
            <div className="flex items-center justify-end">
              <div className="max-w-md bg-gray-700 p-6 rounded-lg shadow-lg"> {/* Adjusted background color to white */}
                <p className="text-base text-white leading-relaxed">Sure, what do you need help with?</p> {/* Adjusted text color to dark gray */}
              </div>
              <div className="ms-6 flex-shrink-0 w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-white text-xl font-semibold">B</div> {/* Adjusted background color to white and text color to dark gray */}
            </div>
          </div>
        </div>
    </div>
  );
};

export default MessageArea;
