const GENRE_MAP: [RegExp, string][] = [
  [/country/i,                                          'Country'],
  [/hip.?hop|rap|trap|drill/i,                         'Hip Hop'],
  [/r.?b|soul|rhythm/i,                                'R&B'],
  [/metal/i,                                           'Metal'],
  [/punk/i,                                            'Punk'],
  [/electronic|edm|house|techno|dance|synth|electro/i, 'Electronic'],
  [/jazz/i,                                            'Jazz'],
  [/classical|orchestra|chamber|opera/i,               'Classical'],
  [/folk|americana|bluegrass/i,                        'Folk'],
  [/latin|reggaeton|salsa|cumbia|bossa/i,              'Latin'],
  [/blues/i,                                           'Blues'],
  [/reggae|ska/i,                                      'Reggae'],
  [/rock|indie|alternative|grunge|emo/i,               'Rock'],
  [/pop/i,                                             'Pop'],
];

export function normalizeGenre(raw: string): string {
  for (const [pattern, label] of GENRE_MAP) {
    if (pattern.test(raw)) return label;
  }
  return '';
}
