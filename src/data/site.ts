export const site = {
  name: 'PRO PLAYERS',
  tagline: 'Your next adventure starts here.',
  description: 'A world to explore. A place to belong. A Minecraft community built for players, by players.',
  server: { address: 'play.example.com', version: 'To be announced', edition: 'Java & Bedrock — to be confirmed', status: 'Getting ready', placeholder: true },
  social: { discord: '', youtube: '', instagram: '' },
  footer: 'Built for the love of the game.',
};

export const navigation = [
  { label: 'Home', to: '/' },
  { label: 'Information', to: '/information' },
  { label: 'Community', to: '/community' },
  { label: 'Links', to: '/links' },
] as const;

export const features = [
  { icon: 'pickaxe', title: 'Make your own adventure', description: 'From your first wooden pickaxe to your next big build. There’s a whole world of possibilities.', tag: 'EXPLORE & BUILD', color: 'green' },
  { icon: 'users', title: 'Find your people', description: 'Meet fellow builders, team up with friends, and turn a new world into a place you call home.', tag: 'COMMUNITY FIRST', color: 'purple' },
  { icon: 'trophy', title: 'Make every moment count', description: 'Big ideas, friendly competition, and memories worth sharing. Play your way, together.', tag: 'PLAY TOGETHER', color: 'gold' },
] as const;

export const information = [
  { title: 'Server address', value: site.server.address, note: 'Placeholder — the real address will be announced.' },
  { title: 'Minecraft version', value: site.server.version, note: 'Supported versions will be listed before launch.' },
  { title: 'Supported editions', value: site.server.edition, note: 'Compatibility details are not yet confirmed.' },
  { title: 'Server rules', value: 'Coming soon', note: 'Official gameplay and community rules will be published here.' },
];

export const community = [
  { title: 'The gathering place', description: 'Our Discord will be the place for conversations, finding teammates, and sharing your latest creations.', label: 'Discord invite coming soon', icon: 'messages' },
  { title: 'Made by the community', description: 'A space for player builds, screenshots, and stories. Community highlights will appear here after launch.', label: 'Player highlights coming soon', icon: 'blocks' },
  { title: 'Something to look forward to', description: 'Keep an eye out for upcoming events, community challenges, and server announcements.', label: 'Events to be announced', icon: 'calendar' },
] as const;

export const links = [
  { title: 'Discord', description: 'Chat with the community.', url: site.social.discord, icon: 'messages' },
  { title: 'YouTube', description: 'Our adventures, on screen.', url: site.social.youtube, icon: 'video' },
  { title: 'Instagram', description: 'Little moments. Big builds.', url: site.social.instagram, icon: 'camera' },
] as const;