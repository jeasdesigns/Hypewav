import { Link } from "react-router";
import { ArrowLeft, MapPin, Calendar, Clock, DollarSign, Flame } from "lucide-react";

export function DiscoverOptionAVariationsPage() {
  // Image URLs
  const showImages = {
    show1: "https://images.unsplash.com/photo-1767462372392-31b5b98e480e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpZSUyMHJvY2slMjBiYW5kJTIwY29uY2VydCUyMHN0YWdlJTIwbGlnaHRzfGVufDF8fHx8MTc3MjkyNDE1Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    show2: "https://images.unsplash.com/photo-1761163924901-2ed45af2c8c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljJTIwbXVzaWMlMjBhcnRpc3QlMjBkaiUyMHBlcmZvcm1hbmNlfGVufDF8fHx8MTc3MjkyNDE1OXww&ixlib=rb-4.1.0&q=80&w=1080",
    show3: "https://images.unsplash.com/photo-1760160741895-eade1f12d01e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbHRlcm5hdGl2ZSUyMHJvY2slMjBiYW5kJTIwbGl2ZSUyMHNob3d8ZW58MXx8fHwxNzcyOTI0MTYxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    show4: "https://images.unsplash.com/photo-1723100042618-46db123c6cd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXAlMjBob3AlMjByYXAlMjBjb25jZXJ0JTIwcGVyZm9ybWFuY2V8ZW58MXx8fHwxNzcyOTI0MTY0fDA&ixlib=rb-4.1.0&q=80&w=1080",
  };

  return (
    <div className="min-h-screen bg-[#09090F] text-[#F1F0FB]">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-[#13121E] bg-[#09090F]/95 backdrop-blur-md">
        <div className="max-w-md mx-auto px-4 py-4">
          <Link 
            to="/design-system"
            className="inline-flex items-center gap-2 text-[#9CA3AF] hover:text-[#F1F0FB] transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-medium">Back to Design System</span>
          </Link>
        </div>
      </header>

      <main className="max-w-md mx-auto">
        <div className="px-4 py-8">
          <h1 className="text-3xl font-bold mb-2">Option A: Date Grouped Feed</h1>
          <p className="text-[#9CA3AF] mb-8">Adding Price + Genre Tag — 5 Layout Variations</p>
        </div>

        {/* VARIATION 1: Genre Badge Top + Price in Metadata */}
        <section className="mb-12 border-t border-[#13121E] pt-8">
          <div className="px-4 mb-6">
            <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-[#10B981] text-[#09090F] text-sm font-bold flex items-center justify-center">1</span>
              Flame Icon Color Options
            </h2>
            <p className="text-sm text-[#9CA3AF] ml-10">Compare different flame icon treatments</p>
          </div>

          <div className="mb-8">
            <div className="px-4 mb-3">
              <h3 className="text-sm font-semibold text-[#67E8F9]">Option A: White Flame on Cyan</h3>
            </div>
            
            <div className="px-4 space-y-4">
              <div className="relative h-48 rounded-2xl overflow-hidden">
                <img 
                  src={showImages.show1}
                  alt="The Decemberists"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(to top, rgba(0,0,0,0.98) 0%, rgba(0,0,0,0.85) 25%, rgba(0,0,0,0.4) 45%, transparent 60%)' }}></div>
                
                {/* Genre Badge - Top Left */}
                <div className="absolute top-3 left-3 px-3 py-1.5 bg-[#A78BFA]/90 backdrop-blur-sm rounded-full">
                  <span className="text-xs font-medium text-[#09090F]">Indie Rock</span>
                </div>

                {/* Status Badge - White on Cyan */}
                <div className="absolute top-3 right-3 w-9 h-9 bg-[#09090F]/90 backdrop-blur-sm rounded-full flex items-center justify-center" aria-label="Selling Fast">
                  <Flame className="w-5 h-5 text-red-500 fill-orange-500" />
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold mb-2">The Decemberists</h3>
                  <div className="flex items-center flex-wrap gap-x-3 gap-y-1 text-sm text-[#9CA3AF]">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      Neumos
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      8:00 PM
                    </span>
                    <span className="text-[#67E8F9]">
                      From $32
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <div className="px-4 mb-3">
              <h3 className="text-sm font-semibold text-[#67E8F9]">Option B: Red/Orange Gradient on Dark</h3>
            </div>
            
            <div className="px-4 space-y-4">
              <div className="relative h-48 rounded-2xl overflow-hidden">
                <img 
                  src={showImages.show2}
                  alt="ODESZA"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(to top, rgba(0,0,0,0.98) 0%, rgba(0,0,0,0.85) 25%, rgba(0,0,0,0.4) 45%, transparent 60%)' }}></div>
                
                <div className="absolute top-3 left-3 px-2 py-0.5 bg-[#09090F]/70 backdrop-blur-md rounded-md">
                  <span className="text-[11px] font-semibold tracking-wide text-[#C4B5FD] uppercase">Electronic</span>
                </div>

                {/* Status Badge - Red/Orange on Dark */}
                <div className="absolute top-3 right-3 w-9 h-9 bg-[#09090F]/90 backdrop-blur-sm rounded-full flex items-center justify-center border border-red-500/30" aria-label="Selling Fast">
                  <Flame className="w-5 h-5 text-red-500 fill-orange-500" />
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold mb-1.5">The Decemberists</h3>
                  <div className="flex items-center flex-wrap gap-x-3 gap-y-1 text-sm text-[#9CA3AF]">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      Neumos
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      8:00 PM
                    </span>
                    <span className="text-[#67E8F9]">
                      From $32
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <div className="px-4 mb-3">
              <h3 className="text-sm font-semibold text-[#67E8F9]">Option C: Cyan Flame (Brand Colors)</h3>
            </div>
            
            <div className="px-4 space-y-4">
              <div className="relative h-48 rounded-2xl overflow-hidden">
                <img 
                  src={showImages.show3}
                  alt="Car Seat Headrest"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(to top, rgba(0,0,0,0.98) 0%, rgba(0,0,0,0.85) 25%, rgba(0,0,0,0.4) 45%, transparent 60%)' }}></div>
                
                <div className="absolute top-3 left-3 px-2 py-0.5 bg-[#09090F]/70 backdrop-blur-md rounded-md">
                  <span className="text-[11px] font-semibold tracking-wide text-[#C4B5FD] uppercase">Alt Rock</span>
                </div>

                {/* Status Badge - Cyan on Dark */}
                <div className="absolute top-3 right-3 w-9 h-9 bg-[#09090F]/90 backdrop-blur-sm rounded-full flex items-center justify-center border border-[#67E8F9]/40" aria-label="Selling Fast">
                  <Flame className="w-5 h-5 text-[#67E8F9] fill-[#67E8F9]" />
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold mb-1.5">Car Seat Headrest</h3>
                  <div className="flex items-center flex-wrap gap-x-3 gap-y-1 text-sm text-[#9CA3AF]">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      The Showbox
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      Sun Mar 9
                    </span>
                    <span className="text-[#67E8F9]">
                      From $28
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <div className="px-4 mb-3">
              <h3 className="text-sm font-semibold text-[#67E8F9]">Option D: Red/Orange on White</h3>
            </div>
            
            <div className="px-4 space-y-4 pb-24">
              <div className="relative h-48 rounded-2xl overflow-hidden">
                <img 
                  src={showImages.show4}
                  alt="Macklemore"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(to top, rgba(0,0,0,0.98) 0%, rgba(0,0,0,0.85) 25%, rgba(0,0,0,0.4) 45%, transparent 60%)' }}></div>
                
                <div className="absolute top-3 left-3 px-2 py-0.5 bg-[#09090F]/70 backdrop-blur-md rounded-md">
                  <span className="text-[11px] font-semibold tracking-wide text-[#C4B5FD] uppercase">Hip Hop</span>
                </div>

                {/* Status Badge - Red/Orange on White */}
                <div className="absolute top-3 right-3 w-9 h-9 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center" aria-label="Selling Fast">
                  <Flame className="w-5 h-5 text-red-500 fill-orange-500" />
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold mb-1.5">Macklemore</h3>
                  <div className="flex items-center flex-wrap gap-x-3 gap-y-1 text-sm text-[#9CA3AF]">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      WaMu Theater
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      9:00 PM
                    </span>
                    <span className="text-[#67E8F9]">
                      From $45
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VARIATION 2: Genre + Price Both as Badges */}
        <section className="mb-12 border-t border-[#13121E] pt-8">
          <div className="px-4 mb-6">
            <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-[#67E8F9] text-[#09090F] text-sm font-bold flex items-center justify-center">2</span>
              Genre + Price as Top Badges
            </h2>
            <p className="text-sm text-[#9CA3AF] ml-10">Both genre and price as prominent top badges</p>
          </div>

          <div className="px-4 mb-3">
            <h3 className="text-lg font-semibold text-[#A78BFA]">Today</h3>
          </div>
          
          <div className="px-4 space-y-4 pb-24">
            <div className="relative h-48 rounded-2xl overflow-hidden">
              <img 
                src={showImages.show1}
                alt="The Decemberists"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/90"></div>
              
              {/* Top badges row */}
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="px-3 py-1.5 bg-[#A78BFA]/90 backdrop-blur-sm rounded-full">
                    <span className="text-xs font-medium text-[#09090F]">Indie Rock</span>
                  </div>
                  <div className="px-3 py-1.5 bg-[#67E8F9]/90 backdrop-blur-sm rounded-full">
                    <span className="text-xs font-medium text-[#09090F]">From $32</span>
                  </div>
                </div>
                
                <div className="w-9 h-9 bg-[#09090F]/90 backdrop-blur-sm rounded-full flex items-center justify-center border border-red-500/30" aria-label="Selling Fast">
                  <Flame className="w-5 h-5 text-red-500 fill-orange-500" />
                </div>
              </div>

              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-2xl font-bold mb-1.5">The Decemberists</h3>
                <div className="flex items-center flex-wrap gap-x-3 gap-y-1 text-sm text-[#9CA3AF]">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    Neumos
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    8:00 PM
                  </span>
                </div>
              </div>
            </div>

            <div className="relative h-48 rounded-2xl overflow-hidden">
              <img 
                src={showImages.show2}
                alt="ODESZA"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/90"></div>
              
              <div className="absolute top-3 left-3 flex items-center gap-2">
                <div className="px-3 py-1.5 bg-[#A78BFA]/90 backdrop-blur-sm rounded-full">
                  <span className="text-xs font-medium text-[#09090F]">Electronic</span>
                </div>
                <div className="px-3 py-1.5 bg-[#67E8F9]/90 backdrop-blur-sm rounded-full">
                  <span className="text-xs font-medium text-[#09090F]">From $85</span>
                </div>
              </div>

              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-2xl font-bold mb-1.5">ODESZA</h3>
                <div className="flex items-center flex-wrap gap-x-3 gap-y-1 text-sm text-[#9CA3AF]">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    Climate Pledge Arena
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    Sat Mar 8  7 PM
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VARIATION 3: Genre Below Title + Price in Metadata */}
        <section className="mb-12 border-t border-[#13121E] pt-8">
          <div className="px-4 mb-6">
            <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-[#67E8F9] text-[#09090F] text-sm font-bold flex items-center justify-center">3</span>
              Genre Below Title
            </h2>
            <p className="text-sm text-[#9CA3AF] ml-10">Genre tag right under artist name, price in metadata</p>
          </div>

          <div className="px-4 mb-3">
            <h3 className="text-lg font-semibold text-[#A78BFA]">Today</h3>
          </div>
          
          <div className="px-4 space-y-4 pb-24">
            <div className="relative h-48 rounded-2xl overflow-hidden">
              <img 
                src={showImages.show1}
                alt="The Decemberists"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/90"></div>
              
              <div className="absolute top-3 right-3 px-3 py-1.5 bg-[#67E8F9]/90 backdrop-blur-sm rounded-full flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 text-[#09090F]" />
                <span className="text-xs font-semibold text-[#09090F]">Selling Fast</span>
              </div>

              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-2xl font-bold mb-1">The Decemberists</h3>
                
                {/* Genre tag as small badge */}
                <div className="mb-1.5">
                  <span className="inline-block px-2 py-0.5 bg-[#A78BFA]/20 border border-[#A78BFA]/40 rounded text-xs text-[#A78BFA]">
                    Indie Rock
                  </span>
                </div>
                
                <div className="flex items-center flex-wrap gap-x-3 gap-y-1 text-sm text-[#9CA3AF]">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    Neumos
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    8:00 PM
                  </span>
                  <span className="flex items-center gap-1 text-[#67E8F9]">
                    <DollarSign className="w-3.5 h-3.5" />
                    From $32
                  </span>
                </div>
              </div>
            </div>

            <div className="relative h-48 rounded-2xl overflow-hidden">
              <img 
                src={showImages.show2}
                alt="ODESZA"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/90"></div>

              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-2xl font-bold mb-1">ODESZA</h3>
                
                <div className="mb-1.5">
                  <span className="inline-block px-2 py-0.5 bg-[#A78BFA]/20 border border-[#A78BFA]/40 rounded text-xs text-[#A78BFA]">
                    Electronic
                  </span>
                </div>
                
                <div className="flex items-center flex-wrap gap-x-3 gap-y-1 text-sm text-[#9CA3AF]">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    Climate Pledge Arena
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    Sat Mar 8
                  </span>
                  <span className="flex items-center gap-1 text-[#67E8F9]">
                    <DollarSign className="w-3.5 h-3.5" />
                    From $85
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VARIATION 4: Compact Two-Row Metadata */}
        <section className="mb-12 border-t border-[#13121E] pt-8">
          <div className="px-4 mb-6">
            <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-[#67E8F9] text-[#09090F] text-sm font-bold flex items-center justify-center">4</span>
              Two-Row Metadata
            </h2>
            <p className="text-sm text-[#9CA3AF] ml-10">Genre badge top, metadata split into two rows</p>
          </div>

          <div className="px-4 mb-3">
            <h3 className="text-lg font-semibold text-[#A78BFA]">Today</h3>
          </div>
          
          <div className="px-4 space-y-4 pb-24">
            <div className="relative h-48 rounded-2xl overflow-hidden">
              <img 
                src={showImages.show1}
                alt="The Decemberists"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/90"></div>
              
              <div className="absolute top-3 left-3 px-3 py-1.5 bg-[#A78BFA]/90 backdrop-blur-sm rounded-full">
                <span className="text-xs font-medium text-[#09090F]">Indie Rock</span>
              </div>

              <div className="absolute top-3 right-3 px-3 py-1.5 bg-[#67E8F9]/90 backdrop-blur-sm rounded-full">
                <span className="text-xs font-medium text-[#09090F]">Selling Fast</span>
              </div>

              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-2xl font-bold mb-2">The Decemberists</h3>
                
                {/* Row 1: Venue + Time */}
                <div className="flex items-center gap-3 text-sm text-[#9CA3AF] mb-1">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    Neumos
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    8:00 PM
                  </span>
                </div>
                
                {/* Row 2: Price */}
                <div className="text-sm">
                  <span className="text-[#67E8F9] font-medium">From $32</span>
                </div>
              </div>
            </div>

            <div className="relative h-48 rounded-2xl overflow-hidden">
              <img 
                src={showImages.show2}
                alt="ODESZA"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/90"></div>
              
              <div className="absolute top-3 left-3 px-3 py-1.5 bg-[#A78BFA]/90 backdrop-blur-sm rounded-full">
                <span className="text-xs font-medium text-[#09090F]">Electronic</span>
              </div>

              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-2xl font-bold mb-2">ODESZA</h3>
                
                <div className="flex items-center gap-3 text-sm text-[#9CA3AF] mb-1">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    Climate Pledge Arena
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    Sat Mar 8
                  </span>
                </div>
                
                <div className="text-sm">
                  <span className="text-[#67E8F9] font-medium">From $85</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VARIATION 5: Minimal - Genre + Price at Bottom */}
        <section className="mb-12 border-t border-[#13121E] pt-8">
          <div className="px-4 mb-6">
            <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-[#67E8F9] text-[#09090F] text-sm font-bold flex items-center justify-center">5</span>
              Minimal - All Info Bottom
            </h2>
            <p className="text-sm text-[#9CA3AF] ml-10">No top badges, genre and price with other metadata</p>
          </div>

          <div className="px-4 mb-3">
            <h3 className="text-lg font-semibold text-[#A78BFA]">Today</h3>
          </div>
          
          <div className="px-4 space-y-4 pb-24">
            <div className="relative h-48 rounded-2xl overflow-hidden">
              <img 
                src={showImages.show1}
                alt="The Decemberists"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/90"></div>
              
              {/* Only status badge at top if needed */}
              <div className="absolute top-3 right-3 px-3 py-1.5 bg-[#67E8F9]/90 backdrop-blur-sm rounded-full">
                <span className="text-xs font-medium text-[#09090F]">Selling Fast</span>
              </div>

              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-2xl font-bold mb-2">The Decemberists</h3>
                
                {/* All metadata in one place */}
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="px-2 py-0.5 bg-[#A78BFA]/20 border border-[#A78BFA]/40 rounded text-xs text-[#A78BFA]">
                      Indie Rock
                    </span>
                    <span className="text-[#67E8F9] font-medium">From $32</span>
                  </div>
                  
                  <div className="flex items-center gap-3 text-sm text-[#9CA3AF]">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      Neumos
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      8:00 PM
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-48 rounded-2xl overflow-hidden">
              <img 
                src={showImages.show2}
                alt="ODESZA"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/90"></div>

              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-2xl font-bold mb-2">ODESZA</h3>
                
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="px-2 py-0.5 bg-[#A78BFA]/20 border border-[#A78BFA]/40 rounded text-xs text-[#A78BFA]">
                      Electronic
                    </span>
                    <span className="text-[#67E8F9] font-medium">From $85</span>
                  </div>
                  
                  <div className="flex items-center gap-3 text-sm text-[#9CA3AF]">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      Climate Pledge Arena
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      Sat Mar 8 · 7 PM
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* COMPARISON SUMMARY */}
        <section className="mb-12 border-t border-[#13121E] pt-8">
          <div className="px-4 pb-24">
            <h2 className="text-2xl font-semibold mb-4">Layout Comparison</h2>
            
            <div className="bg-gradient-to-br from-[#A78BFA]/10 to-[#67E8F9]/10 rounded-2xl p-6 border border-[#A78BFA]/20 space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-[#10B981] mb-2">Variation 1: Genre Badge + Price Inline</h3>
                <p className="text-sm text-[#9CA3AF] mb-1">✅ Clear genre identification with prominent badge</p>
                <p className="text-sm text-[#9CA3AF] mb-1">✅ Price treated same as venue/time — not overwhelming</p>
                <p className="text-sm text-[#9CA3AF]">✅ Balanced visual hierarchy</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#67E8F9] mb-2">Variation 2: Genre + Price Both as Badges</h3>
                <p className="text-sm text-[#9CA3AF] mb-1">✅ Price gets high visibility</p>
                <p className="text-sm text-[#9CA3AF] mb-1">✅ Clean top row of information</p>
                <p className="text-sm text-[#9CA3AF]">⚠️ Top may feel busy with multiple badges</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#67E8F9] mb-2">Variation 3: Genre Below Title</h3>
                <p className="text-sm text-[#9CA3AF] mb-1">✅ Genre close to artist name for context</p>
                <p className="text-sm text-[#9CA3AF] mb-1">✅ Subtle, elegant badge style</p>
                <p className="text-sm text-[#9CA3AF]">⚠️ Takes more vertical space</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#67E8F9] mb-2">Variation 4: Two-Row Metadata</h3>
                <p className="text-sm text-[#9CA3AF] mb-1">✅ Price gets its own line — high visibility</p>
                <p className="text-sm text-[#9CA3AF] mb-1">✅ Clear separation of info types</p>
                <p className="text-sm text-[#9CA3AF]">⚠️ Uses more bottom space</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#67E8F9] mb-2">Variation 5: Minimal</h3>
                <p className="text-sm text-[#9CA3AF] mb-1">✅ Clean image with minimal badges</p>
                <p className="text-sm text-[#9CA3AF] mb-1">✅ All info in one logical section</p>
                <p className="text-sm text-[#9CA3AF]">⚠️ Genre may be less scannable</p>
              </div>
            </div>

            <div className="mt-6">
              <div className="bg-[#13121E] rounded-xl p-5 border border-[#A78BFA]/30">
                <h3 className="text-lg font-semibold text-[#10B981] mb-3">💡 Recommendation: Variation 1</h3>
                <p className="text-sm text-[#9CA3AF] mb-3">
                  The genre badge at top-left provides instant visual context about the show type, while price inline with venue/time keeps all "decision-making" info together without overwhelming the card.
                </p>
                <p className="text-sm text-[#9CA3AF]">
                  This layout maintains the clean, uncluttered feel you wanted while adding both requested pieces of information in a balanced way.
                </p>
              </div>
            </div>

            <div className="mt-6 text-center">
              <Link 
                to="/design-system"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#A78BFA] text-[#09090F] rounded-xl font-medium hover:bg-[#9370DB] transition-colors"
              >
                View All Layout Options
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}