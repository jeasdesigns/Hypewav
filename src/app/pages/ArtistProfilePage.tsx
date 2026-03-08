import { useParams, Link } from "react-router";
import { ChevronLeft, Heart, Share2, Users, Play, ExternalLink, MapPin, Clock, Calendar } from "lucide-react";
import { mockArtists, mockShows } from "../data/mockData";
import { Badge } from "../components/ui/badge";
import { Flame } from "lucide-react";

export function ArtistProfilePage() {
  const { id } = useParams();
  const artist = mockArtists.find(a => a.id === id);

  if (!artist) {
    return (
      <div className="min-h-screen bg-[#09090F] text-[#F1F0FB] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Artist not found</h2>
          <Link to="/" className="text-[#A78BFA]">Go back to discover</Link>
        </div>
      </div>
    );
  }

  // Find upcoming shows for this artist
  const upcomingShows = mockShows.filter(show => show.artist.id === artist.id);

  return (
    <div className="min-h-screen bg-[#09090F] text-[#F1F0FB] pb-32">
      {/* Hero Section with Parallax Effect */}
      <div className="relative h-80 bg-gradient-to-b from-[#13121E] to-[#09090F]">
        <div className="absolute inset-0">
          <img 
            src={artist.image} 
            alt={artist.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-[#09090F]"></div>
        </div>

        {/* Navigation */}
        <div className="absolute top-0 left-0 right-0 flex items-center justify-between p-4 pt-12">
          <Link 
            to="/"
            className="w-11 h-11 bg-[#09090F]/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-[#09090F]/90 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </Link>
          <div className="flex gap-2">
            <button className="w-11 h-11 bg-[#09090F]/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-[#09090F]/90 transition-colors">
              <Share2 className="w-5 h-5" />
            </button>
            <button className="w-11 h-11 bg-[#09090F]/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-[#09090F]/90 transition-colors">
              <Heart className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-md mx-auto px-4 -mt-12">
        {/* Artist Info Card */}
        <div className="bg-[#13121E] rounded-2xl p-5 mb-6 shadow-xl">
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-[#F1F0FB] mb-2">{artist.name}</h1>
              <div className="flex items-center gap-2 text-sm text-[#9CA3AF]">
                <Users className="w-4 h-4" />
                <span>{artist.followers.toLocaleString()} followers on Spotify</span>
              </div>
            </div>
            <Badge className="bg-[#A78BFA]/20 text-[#A78BFA] border-[#A78BFA]/30 flex-shrink-0">
              <Flame className="w-4 h-4 mr-1" />
              {artist.popularity}
            </Badge>
          </div>

          {/* Genre Tags */}
          <div className="flex gap-2 flex-wrap mb-4">
            {artist.genres.map(genre => (
              <span 
                key={genre}
                className="px-3 py-1.5 bg-[#A78BFA]/20 text-[#A78BFA] text-xs rounded-full font-medium border border-[#A78BFA]/30"
              >
                {genre}
              </span>
            ))}
          </div>

          {/* Bio */}
          <p className="text-sm text-[#9CA3AF] leading-relaxed">
            {artist.bio}
          </p>

          {/* Spotify Link */}
          {artist.spotifyUrl && (
            <a 
              href={artist.spotifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-2 text-sm text-[#67E8F9] hover:underline"
            >
              <ExternalLink className="w-4 h-4" />
              Open in Spotify
            </a>
          )}
        </div>

        {/* Top Tracks */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3">Top Tracks</h3>
          <div className="space-y-2">
            {artist.topTracks.map((track, index) => (
              <div 
                key={track.id}
                className="flex items-center gap-3 bg-[#13121E] rounded-lg p-3 hover:bg-[#1A1927] transition-colors group cursor-pointer"
              >
                <div className={`w-11 h-11 rounded flex items-center justify-center flex-shrink-0 ${
                  index === 0 ? 'bg-[#A78BFA]/20' : 'bg-[#09090F]'
                }`}>
                  <Play className={`w-5 h-5 ${
                    index === 0 ? 'text-[#A78BFA]' : 'text-[#9CA3AF] group-hover:text-[#F1F0FB]'
                  }`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold text-[#F1F0FB] truncate">
                    {track.name}
                  </div>
                  <div className="text-xs text-[#9CA3AF]">
                    {(track.plays / 1000000).toFixed(1)}M plays
                  </div>
                </div>
                <div className="text-xs text-[#9CA3AF] flex-shrink-0">
                  {track.duration}
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-3 text-sm text-[#67E8F9] hover:underline">
            View all tracks on Spotify
          </button>
        </div>

        {/* Upcoming Shows */}
        {upcomingShows.length > 0 && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Upcoming Shows</h3>
            <div className="space-y-3">
              {upcomingShows.map(show => {
                const showDate = new Date(show.date);
                const month = showDate.toLocaleDateString('en-US', { month: 'short' }).toUpperCase();
                const day = showDate.getDate();

                return (
                  <Link 
                    key={show.id}
                    to={`/show/${show.id}`}
                    className="block bg-[#13121E] rounded-xl p-4 hover:bg-[#1A1927] transition-colors"
                  >
                    <div className="flex gap-4">
                      {/* Date Badge */}
                      <div className="text-center flex-shrink-0 w-14">
                        <div className="text-xs text-[#A78BFA] font-medium mb-1">{month}</div>
                        <div className="text-3xl font-bold leading-none">{day}</div>
                      </div>

                      {/* Show Info */}
                      <div className="flex-1 border-l border-[#09090F] pl-4">
                        <div className="font-semibold text-[#F1F0FB] mb-1">
                          {show.venue.name}
                        </div>
                        <div className="flex items-center gap-3 text-sm text-[#9CA3AF] mb-2">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5" />
                            <span>{show.venue.address.split(',')[0]}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            <span>{show.time}</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="text-sm text-[#67E8F9] font-medium">
                            {show.ticketPrice}
                          </div>
                          {show.ticketStatus === 'selling-fast' && (
                            <Badge className="bg-[#67E8F9]/20 text-[#67E8F9] text-xs border-[#67E8F9]/30">
                              Selling Fast
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        {/* Stats */}
        <div className="bg-[#13121E] rounded-xl p-5">
          <h3 className="text-lg font-semibold mb-4">Artist Stats</h3>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-[#A78BFA] mb-1">
                {artist.popularity}
              </div>
              <div className="text-xs text-[#9CA3AF]">Popularity</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#67E8F9] mb-1">
                {(artist.followers / 1000).toFixed(1)}K
              </div>
              <div className="text-xs text-[#9CA3AF]">Followers</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#10B981] mb-1">
                {upcomingShows.length}
              </div>
              <div className="text-xs text-[#9CA3AF]">Shows</div>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#09090F] border-t border-[#13121E] p-4 pb-8 z-50">
        <div className="max-w-md mx-auto">
          <button className="w-full bg-[#A78BFA] text-[#09090F] py-4 rounded-full font-semibold hover:bg-[#9F7FEA] transition-colors active:scale-95 flex items-center justify-center gap-2">
            <Heart className="w-5 h-5" />
            Follow Artist
          </button>
        </div>
      </div>
    </div>
  );
}
