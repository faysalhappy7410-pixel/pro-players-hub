export const features = [
  { icon: 'pickaxe', title: 'Survival', description: 'Gather resources, explore new terrain, and build a world of your own.', tag: 'EXPLORE & SURVIVE', color: 'green' },
  { icon: 'swords', title: 'PvP Arena', description: 'Put your skills to the test with friendly player-versus-player battles.', tag: 'FRIENDLY COMPETITION', color: 'purple' },
  { icon: 'blocks', title: 'Creative Builds', description: 'Dream up your next big creation and bring it to life, block by block.', tag: 'DREAM & BUILD', color: 'green' },
  { icon: 'gamepad', title: 'Minigames', description: 'Enjoy quick challenges and playful adventures with friends.', tag: 'PLAY YOUR WAY', color: 'purple' },
  { icon: 'calendar', title: 'Community Events', description: 'Come together for community challenges and shared adventures.', tag: 'BETTER TOGETHER', color: 'green' },
  { icon: 'shield', title: 'Friendly Staff', description: 'A welcoming team focused on a respectful, enjoyable community.', tag: 'COMMUNITY FIRST', color: 'purple' },
] as const;

// Detailed Information previews are separate from Home's six feature cards.
export const serverFeatures = {
  title: 'Server Features',
  description: 'Planned feature previews — availability and exact details will be confirmed before launch.',
  status: 'Details to be confirmed',
  items: [
    { icon: 'puzzle', title: 'Custom Plugins', description: 'Server-specific tools and gameplay additions designed for the community. The plugin list and supported commands will be announced here.' },
    { icon: 'coins', title: 'Economy', description: 'A potential player economy for trading and earning in-game currency. Shops, balances, and trading rules are still to be confirmed.' },
    { icon: 'shield', title: 'Land Claim', description: 'Protection tools to help keep builds safe. Claim limits, permissions, and setup commands will be published before this feature opens.' },
    { icon: 'scroll', title: 'Quests', description: 'Goals and challenges that give your adventures a new direction. Quest types, progress tracking, and rewards are to be announced.' },
    { icon: 'calendar', title: 'Events', description: 'Shared challenges, build celebrations, and community activities. Dates and participation details will be announced by the team.' },
    { icon: 'sparkles', title: 'Quality-of-Life Features', description: 'Convenient tools for everyday play, such as travel and inventory improvements. Available tools and their limits are not yet confirmed.' },
  ],
} as const;