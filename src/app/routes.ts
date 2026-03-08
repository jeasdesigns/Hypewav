import { createBrowserRouter } from "react-router";
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

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MobileAppLayout,
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