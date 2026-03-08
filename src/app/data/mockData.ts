export interface Artist {
  id: string;
  name: string;
  image: string;
  genres: string[];
  followers: number;
  monthlyListeners?: number;
  popularity: number;
  bio: string;
  topTracks: Track[];
  spotifyUrl?: string;
  spotifyId?: string;
  instagramUrl?: string;
  twitterUrl?: string;
  youtubeUrl?: string;
  facebookUrl?: string;
}

export interface Track {
  id: string;
  name: string;
  plays: number;
  duration: string;
}

export interface Show {
  id: string;
  artist: Artist;
  supportingActs?: string[];
  venue: Venue;
  date: string;
  time: string;
  heatScore: number;
  ticketPrice: string;
  ticketStatus: 'available' | 'selling-fast' | 'sold-out' | 'free';
  image: string;
  description?: string;
  ticketUrl?: string;
}

export interface Venue {
  id: string;
  name: string;
  address: string;
  capacity: number;
  distance?: string;
}

export const mockArtists: Artist[] = [
  {
    id: '1',
    name: 'Enumclaw',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80',
    genres: ['Indie Rock', 'Alternative', 'Seattle'],
    followers: 24500,
    monthlyListeners: 150000,
    popularity: 94,
    bio: 'Tacoma-based indie rock band known for their raw, energetic sound and introspective lyrics. Rising stars in the Pacific Northwest scene.',
    topTracks: [
      { id: 't1', name: 'Fast N All', plays: 2100000, duration: '3:42' },
      { id: 't2', name: 'Park Lodge', plays: 1800000, duration: '4:15' },
      { id: 't3', name: '2002', plays: 1500000, duration: '3:28' },
    ],
    spotifyUrl: 'https://open.spotify.com/artist/enumclaw'
  },
  {
    id: '2',
    name: 'Ravenna Woods',
    image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&q=80',
    genres: ['Alt Rock', 'Indie', 'Folk'],
    followers: 18200,
    monthlyListeners: 100000,
    popularity: 87,
    bio: 'Seattle indie rock collective blending atmospheric soundscapes with heartfelt storytelling. Known for intimate live performances.',
    topTracks: [
      { id: 't4', name: 'Eye to Eye', plays: 950000, duration: '4:02' },
      { id: 't5', name: 'Thumb', plays: 820000, duration: '3:55' },
      { id: 't6', name: 'Saddle', plays: 710000, duration: '4:31' },
    ],
    spotifyUrl: 'https://open.spotify.com/artist/ravennawoods'
  },
  {
    id: '3',
    name: 'Stas THEE Boss',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&q=80',
    genres: ['Hip-Hop', 'Rap', 'Seattle'],
    followers: 32100,
    monthlyListeners: 120000,
    popularity: 71,
    bio: 'Dynamic Seattle rapper and producer bringing authentic storytelling and infectious energy to the Pacific Northwest hip-hop scene.',
    topTracks: [
      { id: 't7', name: 'Comfortable', plays: 1300000, duration: '3:18' },
      { id: 't8', name: 'No Doubt', plays: 980000, duration: '2:54' },
      { id: 't9', name: 'Boss Talk', plays: 870000, duration: '3:35' },
    ],
    spotifyUrl: 'https://open.spotify.com/artist/stastheeboss'
  },
  {
    id: '4',
    name: 'Whitney Mongé',
    image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=800&q=80',
    genres: ['R&B', 'Soul', 'Pop'],
    followers: 15800,
    monthlyListeners: 80000,
    popularity: 76,
    bio: 'Seattle-based R&B artist with velvet vocals and genre-bending production. Creating intimate, emotionally resonant music.',
    topTracks: [
      { id: 't10', name: 'Slow Fade', plays: 720000, duration: '3:47' },
      { id: 't11', name: 'Golden Hour', plays: 650000, duration: '4:12' },
      { id: 't12', name: 'Waves', plays: 590000, duration: '3:29' },
    ],
    spotifyUrl: 'https://open.spotify.com/artist/whitneymongé'
  },
  {
    id: '5',
    name: 'The Lavender Flu',
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&q=80',
    genres: ['Psychedelic', 'Garage Rock', 'Experimental'],
    followers: 12300,
    monthlyListeners: 60000,
    popularity: 68,
    bio: 'Seattle psych-rock experimentalists crafting kaleidoscopic soundscapes. Known for wild, unpredictable live shows.',
    topTracks: [
      { id: 't13', name: 'Heavy Air', plays: 480000, duration: '5:22' },
      { id: 't14', name: 'Barbarian Dust', plays: 420000, duration: '4:48' },
      { id: 't15', name: 'Tangled Vines', plays: 390000, duration: '6:15' },
    ],
    spotifyUrl: 'https://open.spotify.com/artist/thelavenderflu'
  },
  {
    id: '6',
    name: 'Naked Giants',
    image: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=800&q=80',
    genres: ['Rock', 'Garage', 'Punk'],
    followers: 28700,
    monthlyListeners: 180000,
    popularity: 82,
    bio: 'High-energy Seattle rock trio delivering explosive performances and infectious hooks. Garage rock revivalists with modern edge.',
    topTracks: [
      { id: 't16', name: 'Slow Descending', plays: 1600000, duration: '3:31' },
      { id: 't17', name: 'Everybody Thinks They Know', plays: 1400000, duration: '3:08' },
      { id: 't18', name: 'Turns Blue', plays: 1200000, duration: '4:02' },
    ],
    spotifyUrl: 'https://open.spotify.com/artist/nakedgiants'
  },
];

export const mockVenues: Venue[] = [
  {
    id: 'v1',
    name: 'The Crocodile',
    address: '2200 2nd Ave, Seattle, WA 98121',
    capacity: 550,
    distance: '0.8mi'
  },
  {
    id: 'v2',
    name: 'Neumos',
    address: '925 E Pike St, Seattle, WA 98122',
    capacity: 600,
    distance: '1.2mi'
  },
  {
    id: 'v3',
    name: 'Chop Suey',
    address: '1325 E Madison St, Seattle, WA 98122',
    capacity: 275,
    distance: '1.5mi'
  },
  {
    id: 'v4',
    name: 'Barboza',
    address: '925 E Pike St, Seattle, WA 98122',
    capacity: 250,
    distance: '1.8mi'
  },
  {
    id: 'v5',
    name: 'The Showbox',
    address: '1426 1st Ave, Seattle, WA 98101',
    capacity: 1000,
    distance: '0.5mi'
  },
  {
    id: 'v6',
    name: 'Sunset Tavern',
    address: '5433 Ballard Ave NW, Seattle, WA 98107',
    capacity: 175,
    distance: '3.2mi'
  },
];

export const mockShows: Show[] = [
  {
    id: 's1',
    artist: mockArtists[0],
    supportingActs: ['Local Support TBA'],
    venue: mockVenues[0],
    date: '2026-03-06',
    time: '8:00 PM',
    heatScore: 94,
    ticketPrice: '$25',
    ticketStatus: 'selling-fast',
    image: mockArtists[0].image,
    description: 'Enumclaw brings their explosive indie rock energy to The Crocodile for an unforgettable night.'
  },
  {
    id: 's2',
    artist: mockArtists[1],
    supportingActs: ['The Lavender Flu'],
    venue: mockVenues[1],
    date: '2026-03-07',
    time: '9:00 PM',
    heatScore: 87,
    ticketPrice: '$20',
    ticketStatus: 'available',
    image: mockArtists[1].image,
    description: 'Ravenna Woods headlines with special guest The Lavender Flu for a night of atmospheric indie rock.'
  },
  {
    id: 's3',
    artist: mockArtists[2],
    venue: mockVenues[2],
    date: '2026-03-08',
    time: '10:00 PM',
    heatScore: 71,
    ticketPrice: '$18',
    ticketStatus: 'available',
    image: mockArtists[2].image,
    description: 'Stas THEE Boss takes over Chop Suey with a high-energy hip-hop showcase.'
  },
  {
    id: 's4',
    artist: mockArtists[3],
    supportingActs: ['Local R&B Collective'],
    venue: mockVenues[3],
    date: '2026-03-09',
    time: '8:30 PM',
    heatScore: 76,
    ticketPrice: '$22',
    ticketStatus: 'available',
    image: mockArtists[3].image,
    description: 'Whitney Mongé delivers soulful R&B vibes in the intimate Barboza setting.'
  },
  {
    id: 's5',
    artist: mockArtists[5],
    supportingActs: ['The Lavender Flu', 'Local Openers'],
    venue: mockVenues[4],
    date: '2026-03-10',
    time: '7:30 PM',
    heatScore: 82,
    ticketPrice: '$30',
    ticketStatus: 'selling-fast',
    image: mockArtists[5].image,
    description: 'Naked Giants bring garage rock mayhem to The Showbox with a stacked lineup.'
  },
  {
    id: 's6',
    artist: mockArtists[4],
    venue: mockVenues[5],
    date: '2026-03-11',
    time: '9:00 PM',
    heatScore: 68,
    ticketPrice: '$15',
    ticketStatus: 'available',
    image: mockArtists[4].image,
    description: 'The Lavender Flu creates psychedelic soundscapes at the intimate Sunset Tavern.'
  },
  {
    id: 's7',
    artist: mockArtists[0],
    supportingActs: ['Ravenna Woods'],
    venue: mockVenues[1],
    date: '2026-03-14',
    time: '9:00 PM',
    heatScore: 94,
    ticketPrice: '$28',
    ticketStatus: 'available',
    image: mockArtists[0].image,
    description: 'Enumclaw returns with Ravenna Woods for a special co-headlining show.'
  },
  {
    id: 's8',
    artist: mockArtists[5],
    venue: mockVenues[2],
    date: '2026-03-15',
    time: '8:00 PM',
    heatScore: 82,
    ticketPrice: '$25',
    ticketStatus: 'available',
    image: mockArtists[5].image,
    description: 'Naked Giants bring their signature garage rock sound to Chop Suey.'
  },
];

export const genres = [
  'All',
  'Indie',
  'Hip-Hop',
  'Electronic',
  'Rock',
  'R&B',
  'Folk',
  'Punk',
  'Metal',
  'Jazz',
];