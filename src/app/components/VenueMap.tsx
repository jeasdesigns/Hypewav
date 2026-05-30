import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import { MapPin } from 'lucide-react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix Leaflet's default marker icons broken by bundlers
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

// Custom violet marker to match app theme
const violetIcon = new L.Icon({
  iconUrl: "data:image/svg+xml;base64," + btoa(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 36" width="24" height="36">
      <path d="M12 0C5.4 0 0 5.4 0 12c0 9 12 24 12 24s12-15 12-24C24 5.4 18.6 0 12 0z" fill="#A78BFA"/>
      <circle cx="12" cy="12" r="5" fill="white"/>
    </svg>
  `),
  iconSize: [24, 36],
  iconAnchor: [12, 36],
  popupAnchor: [0, -36],
  shadowUrl: '',
});

// Recenter map when coords change
function Recenter({ lat, lng }: { lat: number; lng: number }) {
  const map = useMap();
  useEffect(() => { map.setView([lat, lng], 15); }, [lat, lng, map]);
  return null;
}

interface VenueMapProps {
  address: string;
  venueName: string;
  googleMapsUrl: string;
}

export function VenueMap({ address, venueName, googleMapsUrl }: VenueMapProps) {
  const [coords, setCoords] = useState<{ lat: number; lng: number } | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!address) return;
    let cancelled = false;

    fetch(
      `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(address)}&format=json&limit=1`,
      { headers: { 'Accept-Language': 'en', 'User-Agent': 'HypeWav/1.0' } }
    )
      .then(r => r.json())
      .then(data => {
        if (cancelled || !data[0]) { if (!cancelled) setError(true); return; }
        setCoords({ lat: parseFloat(data[0].lat), lng: parseFloat(data[0].lon) });
      })
      .catch(() => { if (!cancelled) setError(true); });

    return () => { cancelled = true; };
  }, [address]);

  if (error) {
    return (
      <a
        href={googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center h-36 rounded-lg bg-hype-bg-primary border border-hype-bg-secondary hover:border-hype-cyan/50 transition-colors group"
      >
        <div className="flex flex-col items-center gap-2">
          <MapPin className="w-7 h-7 text-hype-cyan opacity-60 group-hover:opacity-100 transition-opacity" />
          <span className="text-xs text-hype-cyan font-medium">View on Map →</span>
        </div>
      </a>
    );
  }

  if (!coords) {
    return (
      <div className="h-36 rounded-lg bg-hype-bg-secondary animate-pulse flex items-center justify-center">
        <MapPin className="w-6 h-6 text-hype-text-secondary opacity-40" />
      </div>
    );
  }

  return (
    <a
      href={googleMapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block relative h-44 rounded-lg overflow-hidden group ring-1 ring-white/5 hover:ring-hype-cyan/30 transition-all"
      aria-label={`Open ${venueName} in Google Maps`}
    >
      <MapContainer
        center={[coords.lat, coords.lng]}
        zoom={15}
        scrollWheelZoom={false}
        dragging={false}
        zoomControl={false}
        doubleClickZoom={false}
        className="w-full h-full pointer-events-none"
        attributionControl={false}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/">CARTO</a>'
        />
        <Marker position={[coords.lat, coords.lng]} icon={violetIcon} />
        <Recenter lat={coords.lat} lng={coords.lng} />
      </MapContainer>

      {/* "Open in Maps" overlay label */}
      <div className="absolute bottom-2 right-2 z-[400] bg-hype-bg-primary/80 backdrop-blur-sm px-2 py-1 rounded text-xs text-hype-cyan flex items-center gap-1 group-hover:bg-hype-bg-primary transition-colors">
        <MapPin className="w-3 h-3" />
        Open in Maps
      </div>
    </a>
  );
}
