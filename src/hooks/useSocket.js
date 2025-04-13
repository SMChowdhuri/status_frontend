import { useEffect, useRef } from 'react';
import socket from '../utils/socket';

export const useSocket = () => {
  const socketRef = useRef(socket);

  useEffect(() => {
    return () => {
      if (socketRef.current) {
        socketRef.current.removeAllListeners();
      }
    };
  }, []);

  return socketRef.current;
};