import {
  PropsWithChildren,
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
  useEffect,
} from 'react';
import {sleep} from '../utils/sleep';

interface IAppContext {
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  isAuthenticated: boolean;
  setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
}

const AppContext = createContext<IAppContext | undefined>(undefined);

export function useAppContext() {
  const appContext = useContext(AppContext);
  if (appContext === undefined) {
    throw new Error(
      'ContextError: useAppContext can only be used within AppContextProvider',
    );
  }
  return appContext;
}

export const AppContextProvider: React.FC<PropsWithChildren> = ({children}) => {
  // LOCAL STATES
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // COMPUTED VALUES
  const value = useMemo(
    () => ({
      isLoading,
      setIsLoading,
      isAuthenticated,
      setIsAuthenticated,
    }),
    [isLoading, isAuthenticated],
  );
  // SIDE EFFECTS
  useEffect(() => {
    (async () => {
      await sleep();
      setIsLoading(false);
      setIsAuthenticated(false);
    })();
  }, []);
  // ACTIONS
  // RENDER
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

