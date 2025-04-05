import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ZoomOut } from "lucide-react";

interface ImageLightboxProps {
  src: string;
  alt: string;
  isOpen: boolean;
  onClose: () => void;
}

export function ImageLightbox({ src, alt, isOpen, onClose }: ImageLightboxProps) {
  const [scale, setScale] = useState(1);
  
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }
    
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
  
  const handleZoomIn = () => {
    setScale(prev => Math.min(prev + 0.5, 3));
  };
  
  const handleZoomOut = () => {
    setScale(prev => Math.max(prev - 0.5, 0.5));
  };
  
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm"
          onClick={handleBackdropClick}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-70 transition-all"
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </motion.button>
            
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 flex items-center space-x-2">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                onClick={handleZoomOut}
                className="p-2 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-70 transition-all"
                aria-label="Zoom out"
              >
                <ZoomOut className="h-5 w-5" />
              </motion.button>
              
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                onClick={handleZoomIn}
                className="p-2 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-70 transition-all"
                aria-label="Zoom in"
              >
                <ZoomIn className="h-5 w-5" />
              </motion.button>
            </div>
            
            <motion.div 
              className="relative overflow-hidden max-w-[90vw] max-h-[85vh]"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src={src}
                alt={alt}
                className="max-w-full max-h-[85vh] object-contain"
                animate={{ scale }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                style={{ 
                  originX: 0.5, 
                  originY: 0.5,
                  cursor: "grab" 
                }}
                draggable="false"
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}