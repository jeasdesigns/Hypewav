import { Outlet } from 'react-router';
import { MobileFrame } from '../components/MobileFrame';
import { ShowsProvider } from '../context/ShowsContext';
import { SavedProvider } from '../context/SavedContext';

export function MobileAppLayout() {
  return (
    <ShowsProvider>
      <SavedProvider>
        <MobileFrame>
          <Outlet />
        </MobileFrame>
      </SavedProvider>
    </ShowsProvider>
  );
}
