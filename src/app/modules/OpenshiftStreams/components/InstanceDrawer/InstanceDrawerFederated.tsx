import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { AlertVariant } from '@patternfly/react-core';
import { BrowserRouter } from 'react-router-dom';
import { InstanceDrawerConnected, InstanceDrawerConnectedProps } from './InstanceDrawerConnected';
import { AuthContext, IAuthContext } from '@app/auth/AuthContext';
import { ApiContext } from '@app/api/ApiContext';
import { AlertContext, AlertContextProps, RootModal } from '@app/common';
import kasi18n from '../../../../../i18n/i18n';

type InstanceDrawerFederatedProps = InstanceDrawerConnectedProps & {
  getToken: () => Promise<string>;
  getUsername: () => Promise<string>;
  addAlert: (message: string, variant?: AlertVariant) => void;
  basePath: string;
};

const InstanceDrawerFederated: React.FC<InstanceDrawerFederatedProps> = ({
  getToken,
  getUsername,
  addAlert,
  basePath,
  isExpanded,
  activeTab,
  onClose,
  'data-ouia-app-id': dataOuiaAppId,
  getConnectToRoutePath,
  onConnectToRoute,
  tokenEndPointUrl,
  children,
  mainToggle,
  instanceDetail,
  setIsOpenDeleteInstanceModal,
  isOpenDeleteInstanceModal,
}) => {
  const authContext = {
    getToken,
    getUsername,
  } as IAuthContext;

  const alertContext = {
    addAlert,
  } as AlertContextProps;

  return (
    <BrowserRouter>
      <I18nextProvider i18n={kasi18n}>
        <ApiContext.Provider
          value={{
            basePath,
          }}
        >
          <AlertContext.Provider value={alertContext}>
            <AuthContext.Provider value={authContext}>
              <RootModal>
                <InstanceDrawerConnected
                  isExpanded={isExpanded}
                  activeTab={activeTab}
                  onClose={onClose}
                  data-ouia-app-id={dataOuiaAppId}
                  getConnectToRoutePath={getConnectToRoutePath}
                  onConnectToRoute={onConnectToRoute}
                  tokenEndPointUrl={tokenEndPointUrl}
                  mainToggle={mainToggle}
                  isLoading={instanceDetail === undefined}
                  instanceDetail={instanceDetail}
                  setIsOpenDeleteInstanceModal={setIsOpenDeleteInstanceModal}
                  isOpenDeleteInstanceModal={isOpenDeleteInstanceModal}
                >
                  {children}
                </InstanceDrawerConnected>
              </RootModal>
            </AuthContext.Provider>
          </AlertContext.Provider>
        </ApiContext.Provider>
      </I18nextProvider>
    </BrowserRouter>
  );
};

export default InstanceDrawerFederated;
