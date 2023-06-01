import React from 'react';
import { format, isSameYear } from 'date-fns';
import { fr } from 'date-fns/locale';

const Footer: React.FC = () => {
  const currentDate = new Date();
  const formattedDate = format(currentDate, 'MMMM yyyy', { locale: fr });
  const formattedMonth = formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);

  const isCurrentYear = (date: Date): boolean => {
    return isSameYear(date, currentDate);
  };

  return (
    <footer className="bg-transparent py-3 text-center fixed left-0 bottom-0 w-9/12 mt-6 transition-all duration-600">
      <p className="text-sm text-sky-600 dark:text-sky-800 transition-all duration-600">
        &copy; Nicola Corradini &amp; Wilhem de Baerdemaker,{' '}
        {isCurrentYear(currentDate) && (
          <React.Fragment>{formattedMonth}</React.Fragment>
        )}
      </p>
    </footer>
  );
};

export default Footer;
