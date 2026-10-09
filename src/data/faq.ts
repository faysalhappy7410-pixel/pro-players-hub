import { siteSettings } from './siteSettings';
export const faq = [
  { id: 'offline', question: 'Why is the server sometimes offline?', answer: 'Free hosting can mean the server is not always available. If it is offline, try again later and check the official community announcements.' },
  { id: 'version', question: 'Which Minecraft version should I use?', answer: `Supported Minecraft version: ${siteSettings.home.server.version}. Java and Bedrock compatibility details will be confirmed before launch.` },
  { id: 'mods', question: 'Can I use mods or resource packs?', answer: 'The approved mods and resource packs list is still to be confirmed. Ask the team before using gameplay-changing mods; do not assume any mod is approved.' },
  { id: 'report', question: 'How can I report a player?', answer: 'The official reporting channel is to be announced. Once available, contact the team with the player name, what happened, and relevant screenshots. Avoid sharing private information publicly.' },
  { id: 'ip', question: 'Where can I find the latest server IP?', answer: `The current Java IP placeholder is ${siteSettings.server.address}. Check the connection details here and on Home for the official address once it is announced.` },
  { id: 'free', question: 'Is PRO PLAYERS free to join?', answer: 'The server access policy is to be confirmed before launch. Free hosting does not itself confirm access pricing; any official terms will be published here.' },
];