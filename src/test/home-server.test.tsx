import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { HomeServerHero } from '@/components/home-server-hero';
import { siteSettings } from '@/data/siteSettings';

afterEach(() => { cleanup(); vi.restoreAllMocks(); });

describe('Home connection placeholders', () => {
  it('uses the requested Java IP', () => { expect(siteSettings.server.address).toBe('play.example.com'); });
  it('uses Java port 25565', () => { expect(siteSettings.home.server.javaPort).toBe('25565'); });
  it('uses the requested Bedrock IP', () => { expect(siteSettings.home.server.bedrockAddress).toBe('bedrock.example.com'); });
  it('uses Bedrock port 19132', () => { expect(siteSettings.home.server.bedrockPort).toBe('19132'); });
  it('does not claim the placeholder server is online', () => { expect(siteSettings.home.server.status).toBe('Offline'); });
  it('copies only the Java IP, without the port', async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, 'clipboard', { configurable: true, value: { writeText } });
    render(<HomeServerHero/>);
    fireEvent.click(screen.getByRole('button', { name: 'Copy Server IP' }));
    await waitFor(() => expect(writeText).toHaveBeenCalledWith('play.example.com'));
    await waitFor(() => expect(screen.getByRole('status')).toHaveTextContent(siteSettings.labels.copied));
  });
  it('handles unavailable clipboard access', async () => {
    Object.defineProperty(navigator, 'clipboard', { configurable: true, value: { writeText: vi.fn().mockRejectedValue(new Error('Denied')) } });
    render(<HomeServerHero/>);
    fireEvent.click(screen.getByRole('button', { name: 'Copy Server IP' }));
    await waitFor(() => expect(screen.getByRole('status')).toHaveTextContent(siteSettings.labels.copyError));
  });
});