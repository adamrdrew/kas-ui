import React from 'react';
import { OpenshiftStreams } from './OpenshiftStreams';
import { AlertProvider } from '@app/common/MASAlerts/MASAlerts';
import { ApiContext } from '@app/api/ApiContext';

declare const __BASE_PATH__: string;

export const OpenshiftStreamsConnected = () => {
  return (
    <ApiContext.Provider value={
      {
        basePath: __BASE_PATH__
      }
    }>
      <AlertProvider>
        <OpenshiftStreams onConnectToInstance={() => {}} getConnectToInstancePath={() => ""} />
      </AlertProvider>
    </ApiContext.Provider>
  );
};