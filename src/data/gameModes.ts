export const gameModes = {
  title: 'Game Modes', description: 'Explore the planned ways to play. These access commands are placeholders, not confirmed live commands.', commandLabel: 'Access command · Placeholder',
  items: [
    { icon: 'pickaxe', title: 'Survival', description: 'Explore, gather resources, and build your home in a shared survival world.', command: '/survival' },
    { icon: 'blocks', title: 'Creative', description: 'Bring ambitious ideas to life and share your builds with the community.', command: '/creative' },
    { icon: 'swords', title: 'PvP', description: 'Challenge fellow players in designated arenas with fair, friendly competition.', command: '/pvp' },
    { icon: 'gamepad', title: 'Minigames', description: 'Jump into bite-sized challenges and games with friends.', command: '/minigames' },
  ],
} as const;