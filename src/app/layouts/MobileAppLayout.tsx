import { Outlet } from 'react-router';
import { MobileFrame } from '../components/MobileFrame';

/**
 * MobileAppLayout - Wraps mobile app pages in a fixed mobile frame
 * This ensures proper mobile dimensions when copying designs to Figma
 */
export function MobileAppLayout() {
  return (
    <MobileFrame>
      <Outlet />
    </MobileFrame>
  );
}
