import { Outlet } from 'react-router';
import { MobileFrame } from '../components/MobileFrame';
import { ShowsProvider } from '../context/ShowsContext';

export function MobileAppLayout() {
  return (
    <ShowsProvider>
      <MobileFrame>
        <Outlet />
      </MobileFrame>
    </ShowsProvider>
  );
}
