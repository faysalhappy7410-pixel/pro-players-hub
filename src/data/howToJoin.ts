export const howToJoin = {
  title: 'How to Join',
  description: 'Java Edition connection steps. The displayed IP is a placeholder; replace it with the official address before connecting.',
  copyLabel: 'Copy Server IP',
  steps: [
    { icon: 'copy', title: 'Copy the IP', description: 'Copy the Java server address below.' },
    { icon: 'gamepad', title: 'Open Minecraft', description: 'Launch Minecraft Java Edition using the supported version.' },
    { icon: 'users', title: 'Multiplayer', description: 'Select Multiplayer from the Minecraft main menu.' },
    { icon: 'server', title: 'Add Server / Direct Connect', description: 'Choose Add Server to save it, or Direct Connect for a quick visit.' },
    { icon: 'clipboard', title: 'Paste the IP', description: 'Paste the copied IP into the Server Address field.' },
    { icon: 'play', title: 'Join', description: 'Select the server and join when it is online.' },
  ],
} as const;