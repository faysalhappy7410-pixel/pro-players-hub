export const siteSettings = {
  name: 'PRO PLAYERS',
  subtitle: 'MINECRAFT COMMUNITY',
  tagline: 'Your next adventure starts here.',
  description: 'A world to explore. A place to belong. A Minecraft community built for players, by players.',
  server: { address: 'play.example.com', version: 'To be announced', edition: 'Java & Bedrock — to be confirmed', status: 'Getting ready', placeholder: true },
  navigation: [{ label: 'Home', to: '/' }, { label: 'Information', to: '/information' }, { label: 'Community', to: '/community' }, { label: 'Links', to: '/links' }] as const,
  labels: {
    home: 'PRO PLAYERS home', mainNavigation: 'Main navigation', mobileNavigation: 'Mobile navigation',
    openMenu: 'Open menu', closeMenu: 'Close menu', joinServer: 'Join the server', play: "Let’s play", joinCommunity: 'Join the community',
    meetCommunity: 'Meet the community', exploreLinks: 'Explore our links', visit: 'Visit', comingSoon: 'Coming soon',
    serverIp: 'SERVER IP', placeholder: '· PLACEHOLDER', copy: 'Copy server address', copied: 'Copied!', copyError: 'Copy unavailable. Select the address to copy.',
    serverInformation: 'Server information', horizon: 'A new adventure is on the horizon',
    footer: 'Built for the love of the game.', copyright: '© 2026 PRO PLAYERS. All rights reserved.', disclaimer: 'Not affiliated with Mojang or Microsoft.',
    rules: 'Server rules', faq: 'Frequently asked questions', gameModes: 'Game modes', leaderboard: 'Leaderboard', staff: 'Meet the team', gallery: 'Community gallery', events: 'Upcoming events', news: 'Latest news', testimonials: 'Player stories',
  },
  home: {
    badge: 'A NEW WORLD. YOUR NEXT CHAPTER.', trust: ['Player-first community', 'Endless possibilities'], caption: 'YOUR WORLD IS WAITING',
    featureEyebrow: 'NOT JUST BLOCKS. POSSIBILITIES.', featureTitle: 'A place to play. A place to belong.', featureDetail: 'One community. Countless adventures.',
    communityEyebrow: 'THE BEST PART? THE PEOPLE.', communityTitle: 'Good games. Great company.', communityDescription: 'Come for the Minecraft. Stay for the friendships.', bottomNote: 'Adventure is better together.',
  },
  pages: {
    home: { title: 'Home', description: 'PRO PLAYERS — a Minecraft community built for players, by players. Explore a new world and meet your people.' },
    information: { title: 'Server information', description: 'Connection details, supported versions, and announcements for the PRO PLAYERS Minecraft community.', eyebrow: 'THE ESSENTIALS', heading: 'Server information', intro: 'Everything you need before your next adventure.' },
    community: { title: 'Community', description: 'Find your people, share Minecraft creations, and discover upcoming PRO PLAYERS community events.', eyebrow: 'BETTER TOGETHER', heading: 'More than a server.', intro: 'Behind every great world is a great community. Find yours here.' },
    links: { title: 'Official links', description: 'Find the official social links for the PRO PLAYERS Minecraft community.', eyebrow: 'STAY CONNECTED', heading: 'All roads lead here.', intro: 'The official corners of the PRO PLAYERS community.', note: 'Official links will appear here when they’re ready.' },
  },
  information: {
    details: [ { title: 'Server address', field: 'address', note: 'Placeholder — the real address will be announced.' }, { title: 'Minecraft version', field: 'version', note: 'Supported versions will be listed before launch.' }, { title: 'Supported editions', field: 'edition', note: 'Compatibility details are not yet confirmed.' } ] as const,
    eyebrow: 'YOUR NEXT WORLD', title: 'See you on the other side.', description: 'Our server is getting ready. Connection details are placeholders until the official launch announcement.',
  },
  community: {
    cards: [{ title: 'The gathering place', description: 'Our Discord will be the place for conversations, finding teammates, and sharing your latest creations.', label: 'Discord invite coming soon', icon: 'messages' }, { title: 'Made by the community', description: 'A space for player builds, screenshots, and stories.', label: 'Player highlights coming soon', icon: 'blocks' }, { title: 'Something to look forward to', description: 'Keep an eye out for community challenges and server announcements.', label: 'Events to be announced', icon: 'calendar' }] as const,
    title: 'Your story belongs here.', description: 'Community spaces are being prepared. Check back for our official Discord invitation and first events.',
  },
};