import React, { createContext, useState, ReactNode, useContext } from "react";

// Create Context - provider
export const ContextAPI = createContext<
  | {
      isDetect: boolean;
      setDetect: React.Dispatch<React.SetStateAction<boolean>>;
      loading: boolean;
      error: string | null;
      setError: React.Dispatch<React.SetStateAction<string | null>>;
      setLoading: React.Dispatch<React.SetStateAction<boolean>>;
      user:  any | null;
      setUser: React.Dispatch<React.SetStateAction<any | null>>;
    }
  | undefined
>(undefined);

// Provider Component
export const GlobalContextFunction = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isDetect, setDetect] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [user, setUser] = useState<{ name: string } | null>(null);

  return (
    <ContextAPI.Provider
      value={{
        isDetect,
        setDetect,
        loading,
        setLoading,
        error,
        setError,
        user,
        setUser,
      }}
    >
      {children}
    </ContextAPI.Provider>
  );
};

// Custom Hook for using context
export const useGlobalContext = () => {
  const context = useContext(ContextAPI);
  if (!context) {
    throw new Error(
      "useGlobalContext must be used within a GlobalContextProvider"
    );
  }
  return context;
};
