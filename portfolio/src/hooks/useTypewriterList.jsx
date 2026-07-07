import { useState, useEffect } from 'react';

export const useTypewriterList = (texts, typeSpeed = 100, eraseSpeed = 50, delay = 1500) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentText = texts[index] || '';

    const handleType = () => {
      setDisplayText(prev => {
        if (isDeleting) {
          return currentText.substring(0, prev.length - 1);
        } else {
          return currentText.substring(0, prev.length + 1);
        }
      });
    };

    if (isDeleting) {
      if (displayText === '') {
        setIsDeleting(false);
        setIndex(prev => (prev + 1) % texts.length);
      } else {
        timer = setTimeout(handleType, eraseSpeed);
      }
    } else {
      if (displayText === currentText) {
        timer = setTimeout(() => setIsDeleting(true), delay);
      } else {
        timer = setTimeout(handleType, typeSpeed);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, index, texts, typeSpeed, eraseSpeed, delay]);

  return displayText;
};
