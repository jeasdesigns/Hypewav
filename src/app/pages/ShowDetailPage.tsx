import { useState } from 'react';
import { Link, useParams } from 'react-router';
import { ChevronLeft, MapPin, Clock, DollarSign, Share2, Heart, Users, Flame, ExternalLink } from 'lucide-react';
import { mockShows } from '../data/mockData';
import { AppLayout } from '../components/AppLayout';
import { ShowCard } from '../components/ShowCard';

export function ShowDetailPage() {
  const { id } = useParams();
  const show = mockShows.find(s => s.id === id);
  const [showAllTracks, setShowAllTracks] = useState(false);

  if (!show) {
    return (
      <div className="min-h-screen bg-[#09090F] text-[#F1F0FB] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Show not found</h2>
          <Link to="/" className="text-[#A78BFA]">Go back to discover</Link>
        </div>
      </div>
    );
  }

  const displayDate = new Date(show.date).toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  const similarShows = mockShows
    .filter(s => s.id !== show.id && s.artist.genres.some(g => show.artist.genres.includes(g)))
    .slice(0, 3);

  return (
    <AppLayout 
      showBottomNav={true}
    >
      {/* Hero Section - Mobile Optimized */}
      <div className="relative h-[420px] bg-gradient-to-b from-[#13121E] via-[#13121E] to-[#09090F]">
        <div className="absolute inset-0">
          <img 
            src={show.image} 
            alt={show.artist.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-[#09090F]"></div>
        </div>

        {/* Navigation - Safe Area */}
        <div className="absolute top-0 left-0 right-0 flex items-center justify-between p-4 safe-top">
          <Link 
            to="/"
            className="w-11 h-11 bg-[#09090F]/90 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-[#09090F] transition-colors active:scale-95 border border-[#13121E]"
          >
            <ChevronLeft className="w-5 h-5" />
          </Link>
        </div>

        {/* Event Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-[#09090F] via-[#09090F]/95 to-transparent">
          {/* Genre Tags */}
          <div className="flex gap-2 mb-3 flex-wrap">
            {show.artist.genres.slice(0, 3).map(genre => (
              <span 
                key={genre}
                className="px-3 py-1 bg-[#A78BFA]/20 backdrop-blur-sm text-[#A78BFA] text-xs font-medium rounded-full border border-[#A78BFA]/30"
              >
                {genre}
              </span>
            ))}
          </div>
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1 min-w-0">
              <h1 className="text-3xl font-bold mb-2">{show.artist.name}</h1>
              {show.supportingActs && show.supportingActs.length > 0 && (
                <p className="text-[#9CA3AF] mb-1">with {show.supportingActs[0]}{show.supportingActs.length > 1 ? ` +${show.supportingActs.length - 1} more` : ''}</p>
              )}
            </div>
            <div className="flex gap-2 flex-shrink-0">
              <button className="w-10 h-10 bg-[#09090F]/90 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-[#09090F] transition-colors active:scale-95 border border-[#13121E]">
                <Share2 className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 bg-[#09090F]/90 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-[#09090F] transition-colors active:scale-95 border border-[#13121E]">
                <Heart className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 pb-28">
        {/* Event Details Card */}
        <div className="bg-[#13121E] rounded-2xl p-5 mb-6 mt-6">
          {/* Date & Time */}
          <div className="mb-5 pb-5 border-b border-[#09090F]">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="w-4 h-4 text-[#A78BFA]" />
              <div className="text-xs text-[#9CA3AF] uppercase tracking-wide font-medium">Date & Time</div>
            </div>
            <div className="pl-6">
              <div className="font-semibold text-[#F1F0FB] mb-0.5">{displayDate}</div>
              <div className="text-sm text-[#9CA3AF]">Doors: {show.time}</div>
            </div>
          </div>

          {/* Price */}
          <div className="mb-5 pb-5 border-b border-[#09090F]">
            <div className="flex items-center gap-2 mb-2">
              <DollarSign className="w-4 h-4 text-[#10B981]" />
              <div className="text-xs text-[#9CA3AF] uppercase tracking-wide font-medium">Price</div>
            </div>
            <div className="pl-6 mb-4">
              <div className="font-semibold text-[#F1F0FB]">Starting from {show.ticketPrice}</div>
              <div className="text-sm text-[#9CA3AF]">Available now</div>
            </div>

            {/* Ticket Outlets */}
            <div className="pl-6 space-y-2">
              {/* Ticketmaster */}
              <a 
                href="#"
                className="flex items-center justify-between p-3 bg-[#09090F] rounded-lg hover:bg-[#09090F]/70 transition-colors group border border-[#13121E] hover:border-[#026CDF]/50"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#026CDF]/20 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#026CDF">
                      <path d="M21.7 5.6c-.4 0-.7.3-.7.7v11.3c0 .4.3.7.7.7.4 0 .7-.3.7-.7V6.3c0-.4-.3-.7-.7-.7zm-3.2 0c-.4 0-.7.3-.7.7v11.3c0 .4.3.7.7.7.4 0 .7-.3.7-.7V6.3c0-.4-.3-.7-.7-.7zm-3.3 0c-.4 0-.7.3-.7.7v11.3c0 .4.3.7.7.7.4 0 .7-.3.7-.7V6.3c0-.4-.3-.7-.7-.7zm-3.2 0c-.4 0-.7.3-.7.7v11.3c0 .4.3.7.7.7s.7-.3.7-.7V6.3c0-.4-.3-.7-.7-.7zm-3.2 0c-.4 0-.7.3-.7.7v11.3c0 .4.3.7.7.7.4 0 .7-.3.7-.7V6.3c0-.4-.3-.7-.7-.7zm-3.3 0c-.4 0-.7.3-.7.7v11.3c0 .4.3.7.7.7.4 0 .7-.3.7-.7V6.3c0-.4-.3-.7-.7-.7zm-3.2 0c-.4 0-.7.3-.7.7v11.3c0 .4.3.7.7.7.4 0 .7-.3.7-.7V6.3c0-.4-.3-.7-.7-.7z"/>
                    </svg>
                  </div>
                  <div className="text-sm font-semibold text-[#F1F0FB] group-hover:text-[#026CDF] transition-colors">Ticketmaster</div>
                </div>
                <div className="text-sm font-semibold text-[#F1F0FB]">$45.00</div>
              </a>

              {/* StubHub */}
              <a 
                href="#"
                className="flex items-center justify-between p-3 bg-[#09090F] rounded-lg hover:bg-[#09090F]/70 transition-colors group border border-[#13121E] hover:border-[#0051BA]/50"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#0051BA]/20 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#0051BA">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                    </svg>
                  </div>
                  <div className="text-sm font-semibold text-[#F1F0FB] group-hover:text-[#0051BA] transition-colors">StubHub</div>
                </div>
                <div className="text-sm font-semibold text-[#F1F0FB]">$42.50</div>
              </a>

              {/* SeatGeek */}
              <a 
                href="#"
                className="flex items-center justify-between p-3 bg-[#09090F] rounded-lg hover:bg-[#09090F]/70 transition-colors group border border-[#13121E] hover:border-[#7B5BE6]/50"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#7B5BE6]/20 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#7B5BE6">
                      <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm-1-9h2v5h-2v-5zm0-3h2v2h-2V8z"/>
                    </svg>
                  </div>
                  <div className="text-sm font-semibold text-[#F1F0FB] group-hover:text-[#7B5BE6] transition-colors">SeatGeek</div>
                </div>
                <div className="text-sm font-semibold text-[#F1F0FB]">$48.75</div>
              </a>
            </div>
          </div>

          {/* Venue */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="w-4 h-4 text-[#67E8F9]" />
              <div className="text-xs text-[#9CA3AF] uppercase tracking-wide font-medium">Venue</div>
            </div>
            <div className="pl-6">
              <div className="font-semibold text-[#F1F0FB] mb-0.5">{show.venue.name}</div>
              <div className="text-sm text-[#9CA3AF]">{show.venue.address}</div>
              <div className="text-sm text-[#67E8F9] mt-1">{show.venue.distance} away</div>
            </div>
            
            {/* Map View */}
            <div className="mt-3 rounded-lg overflow-hidden bg-[#09090F]">
              <a 
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(show.venue.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative h-32 group"
              >
                {/* Static Map Background - Replace with actual Google Maps Static API */}
                <img 
                  src={`https://maps.googleapis.com/maps/api/staticmap?center=${encodeURIComponent(show.venue.address)}&zoom=14&size=400x150&markers=color:cyan%7C${encodeURIComponent(show.venue.address)}&key=YOUR_API_KEY_HERE&style=feature:all%7Celement:geometry%7Ccolor:0x09090F&style=feature:all%7Celement:labels.text.fill%7Ccolor:0x9CA3AF&style=feature:all%7Celement:labels.text.stroke%7Ccolor:0x09090F&style=feature:road%7Celement:geometry%7Ccolor:0x13121E&style=feature:water%7Celement:geometry%7Ccolor:0x1A1927`}
                  alt={`Map of ${show.venue.name}`}
                  className="w-full h-full object-cover opacity-0"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                {/* Fallback when API key not configured */}
                <div className="absolute inset-0 bg-[#09090F] flex flex-col items-center justify-center border border-[#13121E] group-hover:border-[#67E8F9]/50 transition-colors">
                  <MapPin className="w-8 h-8 mb-2 text-[#67E8F9] opacity-60 group-hover:opacity-100 transition-opacity" />
                  <div className="text-xs text-[#67E8F9] font-medium group-hover:underline">
                    View on Map →
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Artist Spotify Profile */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-[#F1F0FB]">Artist Profile</h3>
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#1DB954]/20 rounded-full border border-[#1DB954]/30">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="#1DB954">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
              </svg>
              <span className="text-xs font-medium text-[#1DB954]">Spotify</span>
            </div>
          </div>
          
          <div className="bg-[#13121E] rounded-xl overflow-hidden">
            {/* Artist Stats */}
            <div className="p-4 border-b border-[#09090F]">
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src={show.artist.image} 
                  alt={show.artist.name}
                  className="w-16 h-16 rounded-full object-cover ring-2 ring-[#1DB954]/30"
                />
                <div className="flex-1">
                  <div className="font-semibold text-[#F1F0FB] mb-1">{show.artist.name}</div>
                  <div className="flex items-center gap-3 text-sm text-[#9CA3AF]">
                    <span>{show.artist.monthlyListeners?.toLocaleString()} listeners</span>
                    <span>•</span>
                    <span>{show.artist.followers?.toLocaleString()} followers</span>
                  </div>
                </div>
              </div>
              
              {/* Genres */}
              <div className="flex gap-2 flex-wrap mb-4">
                {show.artist.genres.slice(0, 3).map(genre => (
                  <span 
                    key={genre}
                    className="px-2.5 py-1 bg-[#09090F] text-[#9CA3AF] text-xs rounded-full"
                  >
                    {genre}
                  </span>
                ))}
              </div>
              
              {/* Social Media Links */}
              <div>
                <div className="text-xs text-[#9CA3AF] mb-2 uppercase tracking-wide font-medium">Follow Artist</div>
                <div className="flex items-center gap-2">
                  <a 
                    href="#" 
                    className="w-10 h-10 bg-[#09090F] rounded-lg flex items-center justify-center hover:bg-[#E4405F]/20 transition-colors group"
                    aria-label="Instagram"
                  >
                    <svg className="w-4.5 h-4.5 text-[#9CA3AF] group-hover:text-[#E4405F] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 bg-[#09090F] rounded-lg flex items-center justify-center hover:bg-[#000000]/40 transition-colors group"
                    aria-label="TikTok"
                  >
                    <svg className="w-4.5 h-4.5 text-[#9CA3AF] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 bg-[#09090F] rounded-lg flex items-center justify-center hover:bg-[#1877F2]/20 transition-colors group"
                    aria-label="Facebook"
                  >
                    <svg className="w-4.5 h-4.5 text-[#9CA3AF] group-hover:text-[#1877F2] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 bg-[#09090F] rounded-lg flex items-center justify-center hover:bg-[#FF0000]/20 transition-colors group"
                    aria-label="YouTube"
                  >
                    <svg className="w-4.5 h-4.5 text-[#9CA3AF] group-hover:text-[#FF0000] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Top Tracks */}
            <div className="p-4">
              <div className="text-xs text-[#9CA3AF] mb-3 uppercase tracking-wide font-medium">Top Tracks</div>
              <div className="space-y-2">
                {/* Mock top tracks - will be replaced with Spotify API data */}
                {[
                  { id: 1, name: "Good Luck, Babe!", plays: "234M" },
                  { id: 2, name: "Red Wine Supernova", plays: "189M" },
                  { id: 3, name: "Pink Pony Club", plays: "156M" },
                  { id: 4, name: "Casual", plays: "142M" },
                  { id: 5, name: "HOT TO GO!", plays: "128M" }
                ].slice(0, showAllTracks ? 5 : 3).map((track, index) => (
                  <div 
                    key={track.id}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#09090F] transition-colors cursor-pointer group"
                  >
                    <div className="w-6 text-center text-sm font-medium text-[#9CA3AF] group-hover:text-[#1DB954]">
                      {index + 1}
                    </div>
                    <div className="w-10 h-10 bg-[#09090F] rounded flex items-center justify-center flex-shrink-0 group-hover:bg-[#1DB954]/20 transition-colors">
                      <svg className="w-5 h-5 text-[#9CA3AF] group-hover:text-[#1DB954]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-[#F1F0FB] text-sm truncate">{track.name}</div>
                      <div className="text-xs text-[#9CA3AF]">{track.plays} plays</div>
                    </div>
                  </div>
                ))}
              </div>
              
              {!showAllTracks && (
                <button 
                  onClick={() => setShowAllTracks(true)}
                  className="w-full mt-3 py-2 text-[#67E8F9] text-sm font-medium hover:underline transition-colors"
                >
                  View More Tracks
                </button>
              )}
              
              <button className="w-full mt-4 py-2.5 bg-[#1DB954] text-white rounded-full font-medium text-sm hover:bg-[#1ed760] transition-colors active:scale-[0.98] flex items-center justify-center gap-2">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
                Open in Spotify
              </button>
            </div>
          </div>
        </div>

        {/* Similar Shows */}
        {similarShows.length > 0 && (
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-[#F1F0FB]">Similar Shows</h3>
              <Link to="/" className="text-sm text-[#67E8F9] font-medium hover:underline">
                See all
              </Link>
            </div>
            <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
              {similarShows.map(similarShow => (
                <Link 
                  key={similarShow.id}
                  to={`/show/${similarShow.id}`}
                  className="flex-shrink-0 w-40 bg-[#13121E] rounded-xl overflow-hidden hover:bg-[#1A1927] transition-colors active:scale-[0.98]"
                >
                  <div className="relative h-24">
                    <img 
                      src={similarShow.image} 
                      alt={similarShow.artist.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
                  </div>
                  <div className="p-3">
                    <div className="font-semibold text-sm mb-1 line-clamp-1 text-[#F1F0FB]">{similarShow.artist.name}</div>
                    <div className="text-xs text-[#9CA3AF] flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {new Date(similarShow.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </div>
                    <div className="text-xs text-[#67E8F9] mt-1">{similarShow.ticketPrice}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </AppLayout>
  );
}