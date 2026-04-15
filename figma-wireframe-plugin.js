// Hype.Wav — Discover Page Wireframe Builder (v3 — shapes only, no text, no font loading)
// Run this in Figma: Plugins → Development → Open Console → paste & run

(function () {

  var BG       = { r: 0.051, g: 0.051, b: 0.102 };
  var GREY     = { r: 0.18,  g: 0.18,  b: 0.22  };
  var SKELETON = { r: 0.22,  g: 0.22,  b: 0.28  };
  var ACCENT   = { r: 0.38,  g: 0.38,  b: 0.9   };
  var NAV_BG   = { r: 0.07,  g: 0.07,  b: 0.14  };
  var FILTER   = { r: 0.267, g: 0.267, b: 0.267 }; // #444444
  var PURPLE   = { r: 0.655, g: 0.545, b: 0.98  }; // #a78bfa
  var DIM_LINE = { r: 0.3,   g: 0.3,   b: 0.38  };

  var FRAME_W = 390;
  var FRAME_H = 844;
  var GAP     = 40;

  // ── helpers ────────────────────────────────────────────────────────────────

  function solid(color, opacity) {
    return [{ type: "SOLID", color: color, opacity: opacity === undefined ? 1 : opacity }];
  }

  function rect(parent, x, y, w, h, color, radius, opacity, name) {
    var r = figma.createRectangle();
    r.x = x; r.y = y;
    r.resize(w, h);
    r.fills = solid(color, opacity);
    r.cornerRadius = radius || 0;
    if (name) r.name = name;
    parent.appendChild(r);
    return r;
  }

  function ellipse(parent, x, y, w, h, color, name) {
    var e = figma.createEllipse();
    e.x = x; e.y = y;
    e.resize(w, h);
    e.fills = solid(color);
    if (name) e.name = name;
    parent.appendChild(e);
    return e;
  }

  function makeFrame(name, x, y) {
    var f = figma.createFrame();
    f.name = name;
    f.x = x; f.y = y;
    f.resize(FRAME_W, FRAME_H);
    f.fills = solid(BG);
    f.clipsContent = true;
    return f;
  }

  // ── reusable components ────────────────────────────────────────────────────

  // Header: location bar, logo bar, avatar, filter icon
  function addHeader(f) {
    rect(f, 16, 20, 100, 10, DIM_LINE, 2,  1,   "Location-Bar");
    rect(f, 16, 36, 80,  14, SKELETON, 2,  1,   "Logo-Bar");
    ellipse(f, 350, 24, 32, 32, SKELETON,        "Avatar");
    // Fix 1: filter icon placeholder (24x24, #444444, radius 4)
    rect(f, 318, 28, 24, 24, FILTER, 4, 1,       "Filter-Icon");
  }

  // Genre pill row: 5 pills, active one filled with ACCENT
  function addGenrePills(f, activeIndex) {
    var widths = [36, 44, 64, 80, 40]; // approx pill widths for All/Indie/Hip-Hop/Electronic/Rock
    var px = 16;
    var py = 78;
    for (var i = 0; i < widths.length; i++) {
      rect(f, px, py, widths[i], 28, i === activeIndex ? ACCENT : SKELETON, 14, 1, "Pill-" + i);
      px += widths[i] + 8;
    }
  }

  // Section divider bar (stands in for section label text)
  function addSectionBar(f, y) {
    rect(f, 16, y, 120, 10, DIM_LINE, 2, 1, "Section-Label");
  }

  // Hero card: image area + two metadata bars below
  function addHeroCard(f, y, heatBadge) {
    rect(f, 16, y,      358, 96, GREY,     8, 1, "Hero-Image");
    rect(f, 24, y + 62, 160, 10, DIM_LINE, 2, 1, "Hero-Name-Bar");
    rect(f, 24, y + 80,  80,  8, DIM_LINE, 2, 1, "Hero-Meta-Bar");
    // Fix 2: heat badge (64x20, #a78bfa, radius 10, opacity 0.8)
    if (heatBadge) {
      rect(f, 310, y + 8, 64, 20, PURPLE, 10, 0.8, "Heat-Badge");
    }
  }

  // Small card: thumbnail + two text bars
  function addSmallCard(f, y) {
    rect(f, 16, y,      60, 60, GREY,     6, 1, "Small-Image");
    rect(f, 84, y + 10, 140, 10, DIM_LINE, 2, 1, "Small-Name-Bar");
    rect(f, 84, y + 30, 100,  8, DIM_LINE, 2, 1, "Small-Meta-Bar");
  }

  // Bottom nav: background + 4 tab indicators
  function addBottomNav(f, activeIndex) {
    rect(f, 0, 794, FRAME_W, 50, NAV_BG, 0, 1, "Nav-BG");
    var itemW = FRAME_W / 4;
    for (var i = 0; i < 4; i++) {
      var cx = i * itemW + (itemW / 2) - 16;
      rect(f, cx, 808, 32, 8,
        i === activeIndex ? ACCENT : DIM_LINE,
        4, 1, "Nav-Tab-" + i);
    }
  }

  // Skeleton block rows
  function addSkeletonCards(f, y) {
    rect(f, 16, y,       358, 108, SKELETON, 8, 1, "Skeleton-Hero-1");
    rect(f, 16, y + 116, 358, 108, SKELETON, 8, 1, "Skeleton-Hero-2");
    var sy = y + 240;
    for (var i = 0; i < 3; i++) {
      rect(f, 16, sy, 358, 52, SKELETON, 6, 1, "Skeleton-Small-" + (i + 1));
      sy += 60;
    }
  }

  // Empty / error state: icon circle + title bar + subtitle bar + button
  function addEmptyState(f) {
    ellipse(f, 165, 310, 60, 60, SKELETON, "State-Icon");
    rect(f, 120, 382, 150, 12, DIM_LINE, 2, 1, "State-Title-Bar");
    rect(f, 100, 402,  190,  8, DIM_LINE, 2, 1, "State-Sub-Bar");
    rect(f, 125, 436, 140, 36, ACCENT,    8, 1, "State-CTA-Button");
  }

  // ── page setup ─────────────────────────────────────────────────────────────

  var page = null;
  for (var pi = 0; pi < figma.root.children.length; pi++) {
    if (figma.root.children[pi].name === "m2 \u2014 Discover Page") {
      page = figma.root.children[pi];
      break;
    }
  }
  if (!page) {
    page = figma.createPage();
    page.name = "m2 \u2014 Discover Page";
  }
  figma.currentPage = page;

  var existing = page.children.slice();
  for (var ci = 0; ci < existing.length; ci++) {
    existing[ci].remove();
  }

  // ── Frame 1: Default ───────────────────────────────────────────────────────
  (function () {
    var x = 0 * (FRAME_W + GAP);
    var f = makeFrame("Frame 1 \u2014 Default", x, 0);
    page.appendChild(f);
    addHeader(f);
    addGenrePills(f, 0);
    addSectionBar(f, 118);
    addHeroCard(f, 130, true);
    addHeroCard(f, 242, true);
    addSectionBar(f, 356);
    addSmallCard(f, 374);
    addSmallCard(f, 444);
    addSmallCard(f, 514);
    addBottomNav(f, 0);
  })();

  // ── Frame 2: Loading ───────────────────────────────────────────────────────
  (function () {
    var x = 1 * (FRAME_W + GAP);
    var f = makeFrame("Frame 2 \u2014 Loading", x, 0);
    page.appendChild(f);
    addHeader(f);
    addGenrePills(f, 0);
    addSkeletonCards(f, 118);
    addBottomNav(f, 0);
  })();

  // ── Frame 3: Empty ─────────────────────────────────────────────────────────
  (function () {
    var x = 2 * (FRAME_W + GAP);
    var f = makeFrame("Frame 3 \u2014 Empty", x, 0);
    page.appendChild(f);
    addHeader(f);
    addGenrePills(f, 0);
    addEmptyState(f);
    addBottomNav(f, 0);
  })();

  // ── Frame 4: Error ─────────────────────────────────────────────────────────
  (function () {
    var x = 3 * (FRAME_W + GAP);
    var f = makeFrame("Frame 4 \u2014 Error", x, 0);
    page.appendChild(f);
    addHeader(f);
    addGenrePills(f, 0);
    addEmptyState(f);
    addBottomNav(f, 0);
  })();

  // ── Frame 5: Genre Filter Active ───────────────────────────────────────────
  (function () {
    var x = 4 * (FRAME_W + GAP);
    var f = makeFrame("Frame 5 \u2014 Genre Filter Active", x, 0);
    page.appendChild(f);
    addHeader(f);
    addGenrePills(f, 4); // Rock active
    addSectionBar(f, 118);
    addHeroCard(f, 130, false);
    addHeroCard(f, 242, false);
    addSectionBar(f, 356);
    addSmallCard(f, 374);
    addSmallCard(f, 444);
    addBottomNav(f, 0);
  })();

  // ── Frame 6: Search Active ─────────────────────────────────────────────────
  (function () {
    var x = 5 * (FRAME_W + GAP);
    var f = makeFrame("Frame 6 \u2014 Search Active", x, 0);
    page.appendChild(f);
    addHeader(f);
    // Search bar
    rect(f, 16, 74, 358, 36, SKELETON, 8, 1, "Search-Bar");
    // Cursor line inside search bar
    rect(f, 28, 83, 2, 18, PURPLE, 0, 1, "Search-Cursor");
    // Result rows
    addSectionBar(f, 124);
    addSmallCard(f, 140);
    addSmallCard(f, 210);
    addBottomNav(f, 1); // Search tab active
    // Fix 3: annotation marker (8x8, #a78bfa) top-left corner
    rect(f, 0, 0, 8, 8, PURPLE, 0, 1, "Annotation-Marker");
  })();

  // ── zoom to fit ────────────────────────────────────────────────────────────
  var frameNodes = [];
  for (var fi = 0; fi < page.children.length; fi++) {
    if (page.children[fi].type === "FRAME") frameNodes.push(page.children[fi]);
  }
  figma.viewport.scrollAndZoomIntoView(frameNodes);

  figma.notify("\u2713 Hype.Wav wireframes built \u2014 m2 Discover Page", { timeout: 4000 });

  figma.closePlugin();

})();
