import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import ErrorBoundary from '../ErrorBoundary';

// Component that throws an error
const ThrowError = ({ shouldThrow = false }: { shouldThrow?: boolean }) => {
  if (shouldThrow) {
    throw new Error('Test error');
  }
  return <div>No error</div>;
};

describe('ErrorBoundary', () => {
  beforeEach(() => {
    vi.spyOn(console, 'error').mockImplementation(() => {});
  });

  it('should render children when there is no error', () => {
    render(
      <ErrorBoundary>
        <ThrowError shouldThrow={false} />
      </ErrorBoundary>
    );

    expect(screen.getByText('No error')).toBeInTheDocument();
  });

  it('should render error UI when child throws error', async () => {
    // Suppress React error boundary warning in tests
    const originalError = console.error;
    console.error = vi.fn();

    render(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    );

    await waitFor(() => {
      expect(screen.getByText(/Something went wrong/i)).toBeInTheDocument();
    });

    expect(screen.getByText(/We've encountered an unexpected error/i)).toBeInTheDocument();
    
    console.error = originalError;
  });

  it('should show refresh button when error occurs', async () => {
    const originalError = console.error;
    console.error = vi.fn();

    render(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    );

    await waitFor(() => {
      expect(screen.getByText(/Refresh Page/i)).toBeInTheDocument();
    });

    console.error = originalError;
  });

  it('should show go to home button when error occurs', async () => {
    const originalError = console.error;
    console.error = vi.fn();

    render(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    );

    await waitFor(() => {
      expect(screen.getByText(/Go to Home/i)).toBeInTheDocument();
    });

    console.error = originalError;
  });

  it('should log error to console', async () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    const originalError = console.error;

    render(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    );

    await waitFor(() => {
      expect(consoleSpy).toHaveBeenCalled();
    });

    console.error = originalError;
    consoleSpy.mockRestore();
  });
});

