import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { renderHook, waitFor } from '@testing-library/react';
import { useAuth } from '../useAuth';
import { supabase } from '@/integrations/supabase/client';

// Mock Supabase
vi.mock('@/integrations/supabase/client', () => ({
  supabase: {
    auth: {
      onAuthStateChange: vi.fn(),
      getSession: vi.fn(),
      signOut: vi.fn(),
    },
  },
}));

describe('useAuth', () => {
  let mockUnsubscribe: ReturnType<typeof vi.fn>;
  let mockOnAuthStateChange: ReturnType<typeof vi.fn>;
  let mockGetSession: ReturnType<typeof vi.fn>;
  let mockSignOut: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    mockUnsubscribe = vi.fn();
    mockOnAuthStateChange = vi.fn(() => ({
      data: { subscription: { unsubscribe: mockUnsubscribe } },
    }));
    mockGetSession = vi.fn();
    mockSignOut = vi.fn().mockResolvedValue({ error: null });

    vi.mocked(supabase.auth.onAuthStateChange).mockImplementation(mockOnAuthStateChange);
    vi.mocked(supabase.auth.getSession).mockImplementation(mockGetSession);
    vi.mocked(supabase.auth.signOut).mockImplementation(mockSignOut);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should initialize with loading state', () => {
    mockGetSession.mockImplementation(
      () => new Promise(() => {}) // Never resolves immediately
    );

    const { result } = renderHook(() => useAuth());

    expect(result.current.loading).toBe(true);
    expect(result.current.user).toBe(null);
    expect(result.current.session).toBe(null);
    expect(result.current.isAuthenticated).toBe(false);
  });

  it('should set up auth state listener on mount', () => {
    mockGetSession.mockResolvedValue({
      data: { session: null },
      error: null,
    });

    renderHook(() => useAuth());

    expect(supabase.auth.onAuthStateChange).toHaveBeenCalled();
  });

  it('should handle initial session with no user', async () => {
    mockGetSession.mockResolvedValue({
      data: { session: null },
      error: null,
    });

    const { result } = renderHook(() => useAuth());

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.user).toBe(null);
    expect(result.current.session).toBe(null);
    expect(result.current.isAuthenticated).toBe(false);
  });

  it('should handle initial session with user', async () => {
    const mockUser = {
      id: '123',
      email: 'user@example.com',
    } as any;

    const mockSession = {
      user: mockUser,
      access_token: 'token',
    } as any;

    mockGetSession.mockResolvedValue({
      data: { session: mockSession },
      error: null,
    });

    const { result } = renderHook(() => useAuth());

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.user).toEqual(mockUser);
    expect(result.current.session).toEqual(mockSession);
    expect(result.current.isAuthenticated).toBe(true);
  });

  it('should handle auth state change events', async () => {
    mockGetSession.mockResolvedValue({
      data: { session: null },
      error: null,
    });

    const { result } = renderHook(() => useAuth());

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    // Get the callback function passed to onAuthStateChange
    const onAuthStateChangeCall = vi.mocked(supabase.auth.onAuthStateChange).mock.calls[0];
    const authStateChangeCallback = onAuthStateChangeCall[0];

    // Simulate a sign in event
    const mockUser = {
      id: '123',
      email: 'user@example.com',
    } as any;

    const mockSession = {
      user: mockUser,
      access_token: 'token',
    } as any;

    authStateChangeCallback('SIGNED_IN', mockSession);

    await waitFor(() => {
      expect(result.current.user).toEqual(mockUser);
      expect(result.current.session).toEqual(mockSession);
      expect(result.current.isAuthenticated).toBe(true);
    });
  });

  it('should handle sign out event', async () => {
    const mockUser = {
      id: '123',
      email: 'user@example.com',
    } as any;

    const mockSession = {
      user: mockUser,
      access_token: 'token',
    } as any;

    mockGetSession.mockResolvedValue({
      data: { session: mockSession },
      error: null,
    });

    const { result } = renderHook(() => useAuth());

    await waitFor(() => {
      expect(result.current.isAuthenticated).toBe(true);
    });

    // Get the callback function
    const onAuthStateChangeCall = vi.mocked(supabase.auth.onAuthStateChange).mock.calls[0];
    const authStateChangeCallback = onAuthStateChangeCall[0];

    // Simulate sign out
    authStateChangeCallback('SIGNED_OUT', null);

    await waitFor(() => {
      expect(result.current.user).toBe(null);
      expect(result.current.session).toBe(null);
      expect(result.current.isAuthenticated).toBe(false);
    });
  });

  it('should call signOut when signOut is invoked', async () => {
    mockGetSession.mockResolvedValue({
      data: { session: null },
      error: null,
    });

    const { result } = renderHook(() => useAuth());

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    await result.current.signOut();

    expect(supabase.auth.signOut).toHaveBeenCalled();
  });

  it('should unsubscribe from auth state listener on unmount', async () => {
    mockGetSession.mockResolvedValue({
      data: { session: null },
      error: null,
    });

    const { result, unmount } = renderHook(() => useAuth());

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    unmount();

    expect(mockUnsubscribe).toHaveBeenCalled();
  });

  it('should extract user from session when session exists but user is null', async () => {
    const mockSession = {
      user: null,
      access_token: 'token',
    } as any;

    mockGetSession.mockResolvedValue({
      data: { session: mockSession },
      error: null,
    });

    const { result } = renderHook(() => useAuth());

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.user).toBe(null);
    expect(result.current.isAuthenticated).toBe(false);
  });
});

