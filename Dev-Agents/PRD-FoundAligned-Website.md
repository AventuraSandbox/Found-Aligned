# Found & Aligned Website PRD

## Summary
Deliver production-ready copy and structure for core marketing pages using the provided copywriting. No authentication or database is required. Pages: Home, Services, Add-Ons, Our Approach, Regions, Contact. Footer shown on all pages.

## Goals
- Publish clear, professional, Midwest-focused matchmaking messaging.
- Implement consistent content blocks per page with provided copy.
- Ensure responsive layout and accessibility using existing UI system.

## Non-Goals
- No user accounts, admin, or database-backed features.
- No forms that persist to a backend; contact CTA links only.

## Routing and Pages
- / (Home)
- /services (Services)
- /add-ons (Add-On Services)
- /our-approach (Our Approach)
- /regions (Regions)
- /contact (Contact)

## Page Specifications (Content-Accurate)

### 1) Home (/)
- Hero
  - Headline: "Find Love Through Alignment"
  - Subheadline: "Intentional matchmaking for emotionally intelligent professionals"
  - Body: "Premium matchmaking for high-achieving professionals in the Midwest seeking meaningful, value-aligned partnerships. Serving Illinois, Wisconsin, Michigan, and Indiana."
  - CTA: "Start Your Journey"
- Who We Serve
  - Headline: "Designed for Midwest Professionals"
  - Body: "Found & Aligned serves successful professionals ages 30-55 across Chicago, Milwaukee, Madison, Indianapolis, and Detroit. Our clients are emotionally aware, time-conscious, and seeking intentional partnership over app culture."
  - Target Audience (bullets):
    - Corporate executives and entrepreneurs
    - Healthcare and medtech professionals
    - Finance and auto-tech leaders
    - Academic and startup communities
    - Income: $200K+

### 2) Services (/services)
- Page Headline: "Our Services"
- Subheadline: "Personalized matchmaking designed for your unique journey"
- Tier 1: Discovery Alignment
  - Tagline: "Foundational compatibility and clarity package"
  - Price: $750 (one-time)
  - Includes:
    - 90-minute 1:1 onboarding session
    - Compatibility and attachment-style assessment
    - Personalized "Alignment Blueprint"
    - Inclusion in Found & Aligned match pool
  - Ideal For: "Professionals exploring matchmaking or seeking clarity on their dating patterns before committing to active matching."
- Tier 2: Signature Alignment
  - Tagline: "Active matchmaking package"
  - Price: $4,800 (6-month program)
  - Includes:
    - Dedicated regional matchmaker
    - Up to 3 personalized matches per month (local only)
    - Pre-date alignment coaching and post-date feedback loop
    - Monthly progress sessions
  - Ideal For: "Busy professionals ready for curated introductions with Midwest-based matches who share their values and lifestyle."
- Tier 3: Elevated Alignment
  - Tagline: "Full-service concierge matchmaking and transformation"
  - Price: $9,500 (12-month program)
  - Includes:
    - 3 curated matches per month (regional or national)
    - Dedicated senior matchmaker
    - Image & Presence Coaching (included)
    - Emotional Intelligence Mastery Sessions - 3 sessions (included)
    - Personal Brand Dating Photoshoot (included)
    - Priority access to Found & Aligned Circle events
  - Ideal For: "High-achieving professionals seeking comprehensive support, personal transformation, and premium concierge-level service."

### 3) Add-On Services (/add-ons)
- Page Headline: "Enhance Your Experience"
- Subheadline: "Additional services to support your journey to intentional love"
- Items:
  - Image & Presence Coaching — $950
    - "Develop confident, magnetic presence in person and online. Refine your personal style, body language, and first-impression impact."
  - Emotional Intelligence Mastery Sessions — $750 (3 sessions)
    - "Build self-awareness, communication skills, and dating EQ. Learn to navigate attachment patterns and create secure connection."
  - Personal Brand Dating Photoshoot — $1,200
    - "Lifestyle shoot with professional styling and brand direction. Authentic, high-quality images for your dating profiles and personal brand."
  - Post Break-Up / Divorce Healing Series — $900 (3-part series)
    - "Guided recovery and renewal journey with a coach. Process your past relationship, rebuild confidence, and prepare for healthy love."
  - Long-Distance Search Upgrade — $1,500
    - "Expand your search beyond the 4-state Midwest region to include national matches aligned with your values and lifestyle."
  - Found & Aligned Circle (Membership) — $1,200/year
    - "Annual community membership featuring curated events, private mixers, and growth sessions. Connect with like-minded professionals in an intentional, supportive environment."

### 4) Our Approach (/our-approach)
- Page Headline: "Our Approach"
- Subheadline: "Modern matchmaking grounded in emotional intelligence"
- Values:
  - Emotionally Intelligent
    - "We believe lasting love begins with self-awareness. Our process emphasizes emotional maturity, attachment styles, and genuine alignment over superficial attraction. We guide you to understand yourself deeply so you can recognize compatible partnership."
  - Curated & Personal
    - "No algorithms. No apps. Just thoughtful, human matchmaking tailored to your values, lifestyle, and vision for partnership. Every introduction is handpicked by your dedicated matchmaker who knows you personally."
  - Regionally Rooted
    - "We understand Midwest culture, values, and lifestyle. Our network is carefully curated within Illinois, Wisconsin, Michigan, and Indiana for authentic local compatibility. We know these cities, their communities, and what makes relationships thrive here."
  - Transformation-Focused
    - "Beyond introductions, we offer coaching and support to help you show up as your best self in dating and relationships. Our process includes feedback loops, emotional intelligence development, and personal growth alongside matchmaking."

### 5) Regions (/regions)
- Page Headline: "Serving the Midwest's Most Vibrant Cities"
- Subheadline: "Curated matchmaking across Illinois, Wisconsin, Michigan, and Indiana"
- Cities:
  - Chicago
    - "The Midwest's premier hub for corporate leaders, entrepreneurs, consultants, and healthcare executives. Found & Aligned connects Chicago's ambitious professionals who value depth, intention, and emotional intelligence in partnership."
  - Milwaukee & Madison
    - "Home to thriving academic, startup, and professional communities. We serve Wisconsin's most thoughtful leaders seeking meaningful connection rooted in shared values."
  - Indianapolis
    - "Central Indiana's medtech, healthcare, and manufacturing professionals deserve elevated matchmaking. Found & Aligned brings intentional partnership to Indianapolis's high-achieving singles."
  - Detroit
    - "Connecting auto-tech, finance, and innovation leaders across metro Detroit. We understand this city's unique culture and match professionals who are building the future while seeking lasting love."

### 6) Contact (/contact)
- Page Headline: "Ready to Find Your Alignment?"
- Body: "Book a complimentary Discovery Call to explore how Found & Aligned can support your journey to intentional love. We'll discuss your relationship goals, assess fit, and design a personalized pathway forward."
- CTA: "Schedule Your Discovery Call"
- Email: hello@foundandaligned.com
- Serving: "Illinois, Wisconsin, Michigan, Indiana"

### Footer (All Pages)
- "© 2025 Found & Aligned. All rights reserved."
- "Serving Illinois, Wisconsin, Michigan, and Indiana"
- "hello@foundandaligned.com"

## Functional Requirements
1. Display copy exactly as specified above per page.
2. Reuse existing shadcn/ui components and typography system where possible.
3. Ensure mobile-first responsive behavior and accessible headings hierarchy per page.
4. Global footer renders on all routes.
5. Primary CTAs link to "/contact" unless otherwise designed.

## User Stories (Gherkin)
```gherkin
Scenario: Visitor views Home hero
  Given I am on "/"
  When the page loads
  Then I see the headline "Find Love Through Alignment" and CTA "Start Your Journey"

Scenario: Visitor explores Services tiers
  Given I am on "/services"
  When I scroll the page
  Then I see three tiers with names, taglines, prices, and inclusions

Scenario: Visitor checks Add-On services
  Given I am on "/add-ons"
  When I view the add-on list
  Then I see each add-on with title, price, and description

Scenario: Visitor reviews Our Approach values
  Given I am on "/our-approach"
  When I scan the values
  Then I see four values with detailed descriptions

Scenario: Visitor browses Regions
  Given I am on "/regions"
  When I view the city sections
  Then I see Chicago, Milwaukee & Madison, Indianapolis, and Detroit descriptions

Scenario: Visitor goes to Contact
  Given I am on any page
  When I click a primary CTA
  Then I navigate to "/contact" with the Contact content visible
```

## Acceptance Criteria
- Copy matches provided text verbatim (punctuation and capitalization).
- Headings structure follows H1 (page title), H2 sections, H3 sub-sections where applicable.
- All pages pass basic accessibility checks (labels, contrast via theme, semantic headings).
- Footer present on every route.
- CTAs navigate to "/contact" or mailto links where designed.

## SEO Basics
- Title tags per page reflect the page headline + brand ("Found & Aligned").
- Meta descriptions summarize the first body paragraph of each page.
- Open Graph tags use site logo/hero where applicable.

## Affected Files (expected)
- src/pages/Index.tsx (Home) — hero + "Who We Serve" blocks
- src/pages/Services.tsx (new) — three service tiers
- src/pages/AddOns.tsx (new) — add-on services list
- src/pages/OurApproach.tsx — value sections
- src/pages/Regions.tsx — city sections
- src/pages/Contact.tsx — contact content and CTA
- src/components/Footer.tsx or existing layout/footer inclusion
- src/lib/faContent.ts (optional centralization of strings)

## Git Strategy
- Branch: feat/website-content-pages
- Commits:
  - scaffold routes and pages
  - add Home copy and layout
  - add Services tiers
  - add Add-Ons page
  - add Our Approach content
  - add Regions content
  - add Contact content and footer
  - polish: SEO tags, accessibility pass

## QA Strategy
- Manual content verification per page vs. PRD.
- Accessibility spot check (headings order, landmarks, keyboard focus).
- Responsive review at 360px, 768px, 1280px.

## Implementation Assumptions
- No backend/API required; CTAs route internally or use mailto.
- Existing UI kit (shadcn/ui) continues to be used.
- Global layout already renders a footer, or footer will be added.
