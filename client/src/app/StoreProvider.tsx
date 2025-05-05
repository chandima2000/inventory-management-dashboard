'use client'

import { useRef } from 'react';
import { Provider } from 'react-redux';
import { makeStore, AppStore } from '@/redux/store/store';
import { setupListeners } from "@reduxjs/toolkit/query";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";


/* PROVIDER */
export default function StoreProvider({
    children,
  }: {
    children: React.ReactNode;
  }) {
    const storeRef = useRef<AppStore>();
    if (!storeRef.current) {
      storeRef.current = makeStore();
      setupListeners(storeRef.current.dispatch);
    }
    const persistor = persistStore(storeRef.current);
  
    return (
      <Provider store={storeRef.current}>
        <PersistGate loading={null} persistor={persistor}>
          {children}
        </PersistGate>
      </Provider>
    );
  }