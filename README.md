# Found & Aligned - Premium Matchmaking Service

## Project Overview

Found & Aligned is a premium matchmaking service website built for discerning individuals seeking meaningful, lifestyle-aligned relationships.

**Repository**: https://github.com/AventuraSandbox/Found-Aligned

## Technology Stack

- **Vite** - Build tool and dev server
- **TypeScript** - Type-safe JavaScript
- **React 18** - UI framework
- **React Router** - Client-side routing
- **shadcn-ui** - Component library
- **Tailwind CSS** - Utility-first CSS
- **Supabase** - Backend as a service (Database, Auth, Edge Functions)
- **Zod** - Schema validation
- **React Hook Form** - Form management
- **Vitest** - Testing framework

## Development Setup

### Prerequisites

- Node.js 18+ (install with [nvm](https://github.com/nvm-sh/nvm#installing-and-updating))
- npm or bun

### Installation

```sh
# Clone the repository
git clone https://github.com/AventuraSandbox/Found-Aligned.git
cd Found-Aligned

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run test` - Run tests in watch mode
- `npm run test:run` - Run tests once
- `npm run test:coverage` - Run tests with coverage report
- `npm run lint` - Run ESLint
- `npm run typecheck` - Type check without emitting files

## Testing

The project includes comprehensive test coverage:

- Unit tests for utilities (validation, security, error handling)
- Component tests for ErrorBoundary and ProtectedRoute
- Hook tests for useAuth
- See `TEST_SUMMARY.md` for details

## Deployment

The project is configured for deployment on Netlify. See `DEPLOYMENT_GUIDE.md` for detailed deployment instructions.

### Quick Deploy

1. Connect your GitHub repository to Netlify
2. Set environment variables in Netlify dashboard
3. Build command: `bun run build` (or `npm run build`)
4. Publish directory: `dist`

## Environment Variables

Required environment variables (see `env.example`):

- `VITE_SUPABASE_URL` - Supabase project URL
- `VITE_SUPABASE_ANON_KEY` - Supabase anonymous key
- `VITE_TURNSTILE_SITE_KEY` - Cloudflare Turnstile site key

## Security Features

- CAPTCHA verification (Cloudflare Turnstile)
- Rate limiting (client and server-side)
- Input sanitization
- Protected admin routes
- Row Level Security (RLS) policies
- Security headers (CSP, HSTS, etc.)

## Project Structure

```
src/
├── components/      # React components
├── hooks/          # Custom React hooks
├── lib/            # Utilities and validation
├── pages/          # Page components
├── integrations/   # External service integrations
└── test/           # Test setup files
```

<!-- Documentation refresh commit: 2026-05-05 -->
