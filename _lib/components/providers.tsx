import { ModalProvider } from '@frfla/react-hooks';
import { Provider } from 'jotai';
import type { ReactNode } from 'react';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <Provider>
      <ModalProvider>{children}</ModalProvider>
    </Provider>
  );
}
