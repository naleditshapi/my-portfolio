// src/hooks/useContent.js
import { useContext } from 'react';
import { ContentContext } from '../context/ContentContext';

export function useContent() {
  const context = useContext(ContentContext);

  if (context === undefined) {
    throw new Error('useContent must be used inside a ContentProvider');
  }

  return context;
}

/* This hook is a simple wrapper around useContext for the ContentContext, providing a more convenient API for accessing 
content data and update functions throughout the app. It also includes an error check to ensure it's used within the appropriate 
provider.*/

/* A custom hook is just a JavaScript function whose name starts with use. That naming convention is a signal to React — and to 
other developers — that this function uses React's built-in hooks inside it.

Line by line:

useContext(ContentContext) — this is React's built-in hook that reads the nearest ContentContext.Provider value up the component tree
The if check is a professional safety net — if someone accidentally uses useContent outside the provider, they get a clear error message 
instead of a confusing undefined crash. We export the function so any component can import it from one consistent place
*/