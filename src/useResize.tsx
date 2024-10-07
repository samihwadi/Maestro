import { useState, useEffect } from "react";

const useResize = (size: number) => {
  const [width, setWidth] = useState<boolean>(window.innerWidth <= size); // Detect initial screen size
    useEffect(() => {
        // Add event listener to track window resizing
        const handleResize = () => {
          setWidth(window.innerWidth <= size);
        };
    
        window.addEventListener('resize', handleResize);
    
        // Cleanup the event listener when component unmounts
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
    return width;
}

export default useResize;