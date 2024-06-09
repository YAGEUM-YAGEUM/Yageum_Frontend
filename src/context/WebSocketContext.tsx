import React, { createContext, useContext, useMemo, ReactNode } from 'react';
import WebSocketService from '../api/socket';

interface WebSocketProviderProps {
  token: string;
  children: ReactNode;
}

const WebSocketContext = createContext<WebSocketService | null>(null);

export const useWebSocket = () => {
  return useContext(WebSocketContext);
};

export function WebSocketProvider({ token, children }: WebSocketProviderProps) {
  const websocketService = useMemo(() => {
    if (token) {
      return new WebSocketService(token);
    }
    return null;
  }, [token]);

  if (!websocketService) {
    return <div>{children}</div>;
  }

  return (
    <WebSocketContext.Provider value={websocketService}>
      {children}
    </WebSocketContext.Provider>
  );
}
