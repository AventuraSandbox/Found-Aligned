import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import type { ReactElement } from 'react';
import ProtectedRoute from '../ProtectedRoute';
import { supabase } from '@/integrations/supabase/client';

// Mock Supabase
vi.mock('@/integrations/supabase/client', () => ({
  supabase: {
    auth: {
      getUser: vi.fn(),
    },
    rpc: vi.fn(),
  },
}));

const renderWithRouter = (component: ReactElement) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('ProtectedRoute', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should show loading state initially', () => {
    vi.mocked(supabase.auth.getUser).mockImplementation(
      () => new Promise(() => {}) // Never resolves
    );

    renderWithRouter(
      <ProtectedRoute>
        <div>Protected Content</div>
      </ProtectedRoute>
    );

    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
  });

  it('should show custom fallback when provided', () => {
    vi.mocked(supabase.auth.getUser).mockImplementation(
      () => new Promise(() => {}) // Never resolves
    );

    renderWithRouter(
      <ProtectedRoute fallback={<div>Custom Loading</div>}>
        <div>Protected Content</div>
      </ProtectedRoute>
    );

    expect(screen.getByText('Custom Loading')).toBeInTheDocument();
  });

  it('should redirect when user is not authenticated', async () => {
    vi.mocked(supabase.auth.getUser).mockResolvedValue({
      data: { user: null },
      error: { message: 'Not authenticated', status: 401 } as any,
    });

    renderWithRouter(
      <ProtectedRoute>
        <div>Protected Content</div>
      </ProtectedRoute>
    );

    await waitFor(() => {
      // Should redirect to home, which means the protected content won't be visible
      expect(screen.queryByText('Protected Content')).not.toBeInTheDocument();
    });
  });

  it('should redirect when auth check fails', async () => {
    vi.mocked(supabase.auth.getUser).mockResolvedValue({
      data: { user: null },
      error: { message: 'Auth error', status: 500 } as any,
    });

    renderWithRouter(
      <ProtectedRoute>
        <div>Protected Content</div>
      </ProtectedRoute>
    );

    await waitFor(() => {
      expect(screen.queryByText('Protected Content')).not.toBeInTheDocument();
    });
  });

  it('should show content when user is authenticated and has correct role', async () => {
    const mockUser = {
      id: '123',
      email: 'admin@example.com',
    } as any;

    vi.mocked(supabase.auth.getUser).mockResolvedValue({
      data: { user: mockUser },
      error: null,
    });

    vi.mocked(supabase.rpc).mockResolvedValue({
      data: 'admin',
      error: null,
    } as any);

    renderWithRouter(
      <ProtectedRoute role="admin">
        <div>Protected Content</div>
      </ProtectedRoute>
    );

    await waitFor(() => {
      expect(screen.getByText('Protected Content')).toBeInTheDocument();
    });
  });

  it('should redirect when user does not have correct role', async () => {
    const mockUser = {
      id: '123',
      email: 'user@example.com',
    } as any;

    vi.mocked(supabase.auth.getUser).mockResolvedValue({
      data: { user: mockUser },
      error: null,
    });

    vi.mocked(supabase.rpc).mockResolvedValue({
      data: 'user',
      error: null,
    } as any);

    renderWithRouter(
      <ProtectedRoute role="admin">
        <div>Protected Content</div>
      </ProtectedRoute>
    );

    await waitFor(() => {
      expect(screen.queryByText('Protected Content')).not.toBeInTheDocument();
    });
  });

  it('should handle RPC error gracefully', async () => {
    const mockUser = {
      id: '123',
      email: 'user@example.com',
    } as any;

    vi.mocked(supabase.auth.getUser).mockResolvedValue({
      data: { user: mockUser },
      error: null,
    });

    vi.mocked(supabase.rpc).mockResolvedValue({
      data: null,
      error: { message: 'RPC error', status: 500 } as any,
    } as any);

    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    renderWithRouter(
      <ProtectedRoute role="admin">
        <div>Protected Content</div>
      </ProtectedRoute>
    );

    await waitFor(() => {
      expect(consoleSpy).toHaveBeenCalled();
      expect(screen.queryByText('Protected Content')).not.toBeInTheDocument();
    });

    consoleSpy.mockRestore();
  });

  it('should use default role "admin" when not specified', async () => {
    const mockUser = {
      id: '123',
      email: 'admin@example.com',
    } as any;

    vi.mocked(supabase.auth.getUser).mockResolvedValue({
      data: { user: mockUser },
      error: null,
    });

    vi.mocked(supabase.rpc).mockResolvedValue({
      data: 'admin',
      error: null,
    } as any);

    renderWithRouter(
      <ProtectedRoute>
        <div>Protected Content</div>
      </ProtectedRoute>
    );

    await waitFor(() => {
      expect(supabase.rpc).toHaveBeenCalledWith('get_current_user_role');
      expect(screen.getByText('Protected Content')).toBeInTheDocument();
    });
  });
});

