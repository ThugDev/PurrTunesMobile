import React from 'react';
import {createContext, ReactNode, useContext, useState} from 'react';
import {AlertContextType} from './type';
import {Modal, Text, TouchableOpacity, View} from 'react-native';

const AlertContext = createContext<AlertContextType | undefined>(undefined);

export const useAlert = () => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error('useAlert는 AlertProvider 내에서 사용해야 합니다.');
  }
  return context;
};

export const AlertProvider = ({children}: {children: ReactNode}) => {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState('');

  const showAlert = (msg: string) => {
    setMessage(msg);
    setVisible(true);
  };

  const hideAlert = () => {
    setVisible(false);
    setMessage('');
  };

  return (
    <AlertContext.Provider value={{showAlert}}>
      {children}
      {visible && (
        <Modal transparent animationType="fade" visible={visible}>
          <View className="flex-1 justify-center items-center bg-black/50">
            <View className="bg-white p-5 rounded-md w-3/4">
              <Text className="text-lg font-bold mb-3">{message}</Text>
              <TouchableOpacity
                className="bg-blue-500 p-2 rounded-md"
                onPress={hideAlert}>
                <Text className="text-white text-center">확인</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
    </AlertContext.Provider>
  );
};
