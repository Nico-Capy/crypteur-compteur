import React from 'react';
import { format, isSameYear } from 'date-fns';
import { fr } from 'date-fns/locale';
import '../assets/fonts.css';

const Footer: React.FC = () => {
  const currentDate = new Date();
  const formattedDate = format(currentDate, 'MMMM yyyy', { locale: fr });
  const formattedMonth = formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);

  const isCurrentYear = (date: Date): boolean => {
    return isSameYear(date, currentDate);
  };

  return (
    <footer className="bg-transparent py-1 text-center fixed bottom-0 left-0 right-0 w-full transition-all duration-600" style={{ fontFamily: 'American Typewriter' }}>
      <p className="text-sm text-sky-600 text-indigo-700 dark:text-white transition-all duration-600">
        &copy; Nicola Corradini &amp; Wilhem de Baerdemaeker,{' '}
        {isCurrentYear(currentDate) && (
          <React.Fragment>{formattedMonth}</React.Fragment>
        )}
      </p>
    </footer>
  );  
};

export default Footer;
