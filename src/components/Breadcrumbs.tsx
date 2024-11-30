import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
      <Link 
        to="/"
        className="flex items-center hover:text-yellow-400 transition-colors"
      >
        <Home className="w-4 h-4" />
      </Link>
      
      {pathnames.length > 0 && (
        <ChevronRight className="w-4 h-4" />
      )}
      
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;
        
        return (
          <React.Fragment key={name}>
            <Link
              to={routeTo}
              className={`capitalize ${
                isLast 
                  ? 'text-yellow-400 font-medium' 
                  : 'hover:text-yellow-400 transition-colors'
              }`}
            >
              {name.replace(/-/g, ' ')}
            </Link>
            
            {!isLast && (
              <ChevronRight className="w-4 h-4" />
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}