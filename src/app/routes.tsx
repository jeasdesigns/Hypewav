import { createBrowserRouter, useRouteError } from "react-router";
import { DiscoverPage } from "./pages/DiscoverPage";
import { ShowDetailPage } from "./pages/ShowDetailPage";
import { ArtistProfilePage } from "./pages/ArtistProfilePage";
import { SavedPage } from "./pages/SavedPage";
import { ProfilePage } from "./pages/ProfilePage";
import { SearchPage } from "./pages/SearchPage";
import { DesignSystemPage } from "./pages/DesignSystemPage";
import { DesignTokensPage } from "./pages/design-system/DesignTokensPage";
import { ComponentsPage } from "./pages/design-system/ComponentsPage";
import { LayoutPage } from "./pages/design-system/LayoutPage";
import { PageMockupsPage } from "./pages/design-system/PageMockupsPage";
import { FigmaGuidePage } from "./pages/design-system/FigmaGuidePage";
import { DiscoverOptionAVariationsPage } from "./pages/DiscoverOptionAVariationsPage";
import { DesignPatternMockupsPage } from "./pages/DesignPatternMockupsPage";
import { ShowDetailMockupsPage } from "./pages/ShowDetailMockupsPage";
import { MobileAppLayout } from "./layouts/MobileAppLayout";

function RouteError() {
  const err = useRouteError() as Error | null;
  console.error('[RouteError]', err);
  return (
    <div style={{ padding: '2rem', color: '#F1F0FB', background: '#09090F', minHeight: '100vh' }}>
      <h2 style={{ color: '#A78BFA', marginBottom: '0.5rem' }}>Something went wrong</h2>
      <p style={{ color: '#9CA3AF', fontSize: '0.875rem' }}>{err?.message ?? 'Unknown error'}</p>
      <button
        onClick={() => window.location.reload()}
        style={{ marginTop: '1rem', padding: '0.5rem 1.25rem', background: '#A78BFA', color: '#09090F', border: 'none', borderRadius: '9999px', cursor: 'pointer', fontWeight: 600 }}
      >
        Reload
      </button>
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MobileAppLayout,
    ErrorBoundary: RouteError,
    children: [
      {
        index: true,
        Component: DiscoverPage,
      },
      {
        path: "show/:id",
        Component: ShowDetailPage,
      },
      {
        path: "artist/:id",
        Component: ArtistProfilePage,
      },
      {
        path: "search",
        Component: SearchPage,
      },
      {
        path: "saved",
        Component: SavedPage,
      },
      {
        path: "profile",
        Component: ProfilePage,
      },
    ],
  },
  {
    path: "/discover-option-a-variations",
    Component: DiscoverOptionAVariationsPage,
  },
  {
    path: "/design-pattern-mockups",
    Component: DesignPatternMockupsPage,
  },
  {
    path: "/show-detail-mockups",
    Component: ShowDetailMockupsPage,
  },
  {
    path: "/design-system",
    Component: DesignSystemPage,
  },
  {
    path: "/design-system/tokens",
    Component: DesignTokensPage,
  },
  {
    path: "/design-system/components",
    Component: ComponentsPage,
  },
  {
    path: "/design-system/layout",
    Component: LayoutPage,
  },
  {
    path: "/design-system/pages",
    Component: PageMockupsPage,
  },
  {
    path: "/design-system/figma-guide",
    Component: FigmaGuidePage,
  },
]);
