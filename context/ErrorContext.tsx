import React, { useCallback, useContext, useState, createContext } from 'react';

const ErrorContext = createContext({});

export const ErrorProvider = ({ children }: { children: React.ReactNode }) => {
  const [error, setError] = useState('');

  const dispatchError = useCallback((message) => {
    setError(message);

    setTimeout(() => {
      setError('');
    }, 7000);
  }, []);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  return <ErrorContext.Provider value={{ error, dispatchError }}>{children}</ErrorContext.Provider>;
};

export const useError = () => {
  const errorContext = useContext(ErrorContext);

  if (!errorContext) {
    throw Error('useAuth needs to be used inside AuthContext');
  }

  return errorContext;
};
