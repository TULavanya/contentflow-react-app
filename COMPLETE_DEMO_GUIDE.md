# 📋 ContentFlow - Complete Demo Guide

## All-in-One Reference for Your Presentation

---

# SECTION 1: QUICK SETUP

```bash
cd "Contentstack project - Copy"
npm run dev
```

**Website:** http://localhost:3000  
**Contentstack:** https://app.contentstack.com

---

# SECTION 2: DEMO CHEAT SHEET

## ✅ Pre-Demo Checklist

- [ ] `npm run dev` running
- [ ] Website opens at localhost:3000
- [ ] Logged into Contentstack
- [ ] `home_page` entry is published
- [ ] Live Preview working (test edit → save)
- [ ] Two browser windows ready (side by side)

---

## 🎬 Demo Flow (5-10 minutes)

### 1️⃣ LIVE PREVIEW (2 min) ⭐ Most Impressive!

| Do This | Say This |
|---------|----------|
| Open website + Contentstack side by side | "This website is powered by Contentstack CMS" |
| Edit `hero_title` in Contentstack | "Watch what happens when I change this..." |
| Save | "BOOM! Instant update - no refresh needed!" |

---

### 2️⃣ DYNAMIC CONTENT (2 min)

| Do This | Say This |
|---------|----------|
| Scroll to Features section | "All these cards come from CMS" |
| Hover on cards (animation) | "Beautiful hover animations" |
| Show `features` array in Contentstack | "Add/remove/reorder anytime" |

---

### 3️⃣ BRAND MARQUEE (30 sec)

| Do This | Say This |
|---------|----------|
| Point to scrolling brands | "Auto-scrolling brand logos" |
| Hover to pause | "Pauses on hover" |

---

### 4️⃣ CONSOLE LOGS (1 min) - For Technical Audience

| Do This | Say This |
|---------|----------|
| Open DevTools → Console | "Here's the live data from Contentstack" |
| Show data structure | "All fields mapped to UI components" |

---

## 🗣️ Key Talking Points

| Feature | Business Value |
|---------|---------------|
| **Live Preview** | Editors see changes instantly |
| **Headless CMS** | One content source → multiple channels |
| **CDN Images** | Fast loading worldwide |
| **Fallback Content** | Site never breaks |
| **React + TypeScript** | Modern, maintainable code |

---

## 📁 Content Type: `home_page`

```
home_page
├── hero_title ........... Main headline
├── hero_subtitle ........ Subheadline  
├── hero_stats[] ......... Stats (500+, 150+, 99.9%)
├── cta_primary .......... "Start Free Trial" button
├── cta_secondary ........ "Request Demo" button
├── trusted_brands[] ..... Brand names in marquee
├── features[] ........... Feature cards
│   ├── title
│   ├── description
│   └── icon (image)
├── testimonials[] ....... Customer quotes
└── seo_metadata ......... SEO settings
```

---

## 🆘 Troubleshooting

| Problem | Solution |
|---------|----------|
| Site not loading | Run `npm run dev` |
| Content not showing | Check `.env` has correct tokens |
| Live Preview not working | Refresh Contentstack, re-publish entry |
| Images broken | Check image URLs in Contentstack Assets |

---

## 🔑 Credentials Location

```
.env file (local only - not in Git!)
├── VITE_CONTENTSTACK_API_KEY
├── VITE_CONTENTSTACK_DELIVERY_TOKEN
├── VITE_CONTENTSTACK_PREVIEW_TOKEN
├── VITE_CONTENTSTACK_ENVIRONMENT=development
└── VITE_CONTENTSTACK_REGION=us
```

---

# SECTION 3: TECHNICAL DEMO SCRIPT

## Complete Presentation Script (15-20 minutes)

---

## INTRODUCTION (1 minute)

> "Good morning/afternoon everyone! Today I'm going to walk you through ContentFlow - a modern React application integrated with Contentstack, a headless CMS."

> "I'll show you how content flows from the CMS to the website in real-time, and explain the technical architecture behind it."

> "Let's start by looking at what makes this application special."

---

## PART 1: ARCHITECTURE OVERVIEW (2 minutes)

### Open: `src/config/contentstack.config.ts`

> "First, let me show you the configuration. This is where we connect to Contentstack."

```typescript
export const stackConfig = {
  apiKey: import.meta.env.VITE_CONTENTSTACK_API_KEY || '',
  deliveryToken: import.meta.env.VITE_CONTENTSTACK_DELIVERY_TOKEN || '',
  environment: import.meta.env.VITE_CONTENTSTACK_ENVIRONMENT || 'development',
  region: import.meta.env.VITE_CONTENTSTACK_REGION || 'us'
};
```

> "We store sensitive credentials in environment variables - the `.env` file. This keeps our API keys secure and out of version control."

> "The configuration includes:
> - **API Key** - identifies our Contentstack stack
> - **Delivery Token** - for fetching published content
> - **Preview Token** - enables live preview while editing
> - **Environment** - development, staging, or production"

---

## PART 2: CONTENTSTACK CONTEXT (3 minutes)

### Open: `src/context/ContentstackContext.tsx`

> "Now let's look at the heart of our CMS integration - the Contentstack Context."

### Section 1: Stack Initialization

```typescript
const Stack = Contentstack.Stack({
  api_key: stackConfig.apiKey,
  delivery_token: stackConfig.deliveryToken,
  environment: stackConfig.environment,
  region: stackConfig.region,
  live_preview: {
    preview_token: contentstackConfig.previewToken,
    enable: true,
    host: 'rest-preview.contentstack.com'
  }
});
```

> "Here we initialize the Contentstack SDK. Notice the `live_preview` configuration - this enables real-time updates when content editors make changes in the CMS."

### Section 2: Live Preview SDK

```typescript
ContentstackLivePreview.init({
  enable: true,
  mode: 'builder',
  ssr: false,
  stackSdk: Stack,
  editButton: { enable: true }
});
```

> "We also initialize the Live Preview SDK. This creates a WebSocket connection to Contentstack, allowing instant content updates without page refresh."

### Section 3: The fetchContent Function

```typescript
const fetchContent = async (contentType: string) => {
  const Query = stack.ContentType(contentType).Query();
  
  // Include nested references
  Query.includeReference(['testimonials', 'author']);
  
  // Execute the query
  const response = await Query.toJSON().find();
  
  // Return the first entry
  return response[0][0];
};
```

> "This is our main data fetching function. It:
> 1. Creates a query for a specific content type
> 2. Includes any referenced content - like testimonials linked to a page
> 3. Executes the query and returns JSON data
> 
> All components use this single function to fetch their content."

---

## PART 3: LANDING PAGE COMPONENT (5 minutes)

### Open: `src/pages/Home.tsx`

> "Now let's see how the landing page uses this context."

### Section 1: State Setup

```typescript
const Home: React.FC = () => {
  const { fetchContent } = useContentstack();
  const [homeData, setHomeData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
```

> "We have two pieces of state:
> - `homeData` stores all content from Contentstack
> - `isLoading` controls our loading spinner
> 
> We also grab `fetchContent` from our context using `useContentstack()`."

### Section 2: Data Fetching with useEffect

```typescript
useEffect(() => {
  const loadContent = async () => {
    setIsLoading(true);
    try {
      const data = await fetchContent('home_page');
      setHomeData(data);
    } catch (error) {
      console.error('Error loading home content:', error);
    } finally {
      setIsLoading(false);
    }
  };

  loadContent();
```

> "When the component mounts, this `useEffect` runs. It:
> 1. Sets loading to true - showing a spinner
> 2. Calls `fetchContent('home_page')` - fetching our landing page content
> 3. Stores the result in `homeData`
> 4. Sets loading to false - hiding the spinner
> 
> The `'home_page'` string matches our Content Type UID in Contentstack."

### Section 3: Live Preview Listener

```typescript
  // Listen for Live Preview content changes
  onEntryChange(() => {
    console.log('Content changed - reloading...');
    loadContent();
  });
}, [fetchContent]);
```

> "This is the magic of live preview! `onEntryChange` listens for any content updates in Contentstack. When an editor saves changes, this callback fires and re-fetches the content. The page updates instantly - no refresh needed."

---

## PART 4: RENDERING DYNAMIC CONTENT (3 minutes)

### Section 1: Safe Content Rendering

```typescript
<h1>{safeTextContent(homeData?.hero_title, 'Default Title')}</h1>
```

> "We use a helper function called `safeTextContent`. It:
> - Returns the CMS value if it exists
> - Returns a fallback if the value is null or undefined
> 
> This prevents the app from crashing if content is missing."

### Section 2: Dynamic Stats

```typescript
{(homeData?.hero_stats || [
  { value: '500+', label: 'Enterprise Clients' },
  { value: '150+', label: 'Countries Worldwide' },
  { value: '99.9%', label: 'Uptime Guarantee' }
]).map((stat, index) => (
  <div key={index} className="stat">
    <strong>{stat.value}</strong>
    <span>{stat.label}</span>
  </div>
))}
```

> "Stats are an array in Contentstack. We map over them to create individual stat cards. If no CMS data exists, we use hardcoded fallbacks."

### Section 3: Feature Cards

```typescript
{(homeData?.features || []).map((feature, index) => (
  <Link key={index} to="/platform">
    <img src={feature.icon?.url} alt={feature.title} />
    <p>{safeTextContent(feature.title, 'Feature')}</p>
    <p>{safeTextContent(feature.description, 'Description')}</p>
  </Link>
))}
```

> "Features are also an array. Each feature has:
> - An icon/image from Contentstack's asset CDN
> - A title
> - A description
> 
> Adding or removing features in the CMS automatically updates the website."

---

## PART 5: LIVE DEMO (3 minutes)

### Open: Browser with website + Contentstack side by side

> "Now let me show you this in action."

### Step 1: Show the website
> "Here's our landing page, fully rendered with CMS content."

### Step 2: Open Contentstack
> "And here's Contentstack where we manage that content."

### Step 3: Edit the hero title
> "Watch the website as I change this title..."

### Step 4: Save
> "I save... and BOOM! The website updates instantly. No deployment, no refresh."

### Step 5: Add a feature
> "Let me add a new feature card... save... and there it is on the website!"

> "This is the power of headless CMS with live preview. Content editors can see their changes in real-time, reducing errors and speeding up content delivery."

---

## PART 6: SUMMARY (1 minute)

> "Let me summarize what we've covered:

> 1. **Configuration** - Secure environment variables for API credentials
> 
> 2. **Context** - Centralized CMS connection with React Context
> 
> 3. **Data Fetching** - useEffect and async/await for loading content
> 
> 4. **Live Preview** - WebSocket listeners for real-time updates
> 
> 5. **Safe Rendering** - Fallbacks prevent crashes from missing content
> 
> 6. **Dynamic Content** - Arrays mapped to UI components"

---

# SECTION 4: CONTENT FLOW EXPLANATION

## How Content Types and Entries Get to Website

---

## THE FLOW DIAGRAM

```
┌─────────────────────────────────────────────────────────────────────┐
│                         CONTENTSTACK CMS                            │
│  ┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐ │
│  │ Content Type:   │    │ Content Type:   │    │ Content Type:   │ │
│  │ home_page       │    │ blog_post       │    │ company_page    │ │
│  │ ─────────────── │    │ ─────────────── │    │ ─────────────── │ │
│  │ Entry: Home     │    │ Entry: Blog 1   │    │ Entry: Company  │ │
│  │                 │    │ Entry: Blog 2   │    │                 │ │
│  └─────────────────┘    └─────────────────┘    └─────────────────┘ │
└─────────────────────────────────┬───────────────────────────────────┘
                                  │
                                  │ API Call (Delivery SDK)
                                  ▼
┌─────────────────────────────────────────────────────────────────────┐
│              ContentstackContext.tsx - fetchContent()               │
│                                                                     │
│   stack.ContentType('home_page').Query().find()                     │
│                         ↓                                           │
│   Returns JSON data from Contentstack                               │
└─────────────────────────────────┬───────────────────────────────────┘
                                  │
                                  │ Data passed to components
                                  ▼
┌─────────────────────────────────────────────────────────────────────┐
│                         Page Components                             │
│   Home.tsx ──→ fetchContent('home_page')                           │
│   Blogs.tsx ──→ fetchContent('blog_post', { allEntries: true })    │
│   Company.tsx ──→ fetchContent('company_page')                     │
│   BlogPost.tsx ──→ fetchContent('blog_post', { entryUid: '...' }) │
└─────────────────────────────────────────────────────────────────────┘
```

---

## THE 4 KEY STEPS

### STEP 1: Content Types in Contentstack

> "Content Types are created in Contentstack Dashboard - think of them as templates."

| Content Type UID | Used By | Purpose |
|------------------|---------|---------|
| `home_page` | Home.tsx | Landing page content |
| `blog_post` | Blogs.tsx, BlogPost.tsx | Blog articles |
| `company_page` | Company.tsx | About us page |
| `header` | Header.tsx | Navigation data |

---

### STEP 2: Configuration File

> "The config file stores API credentials securely."

**File:** `src/config/contentstack.config.ts`

```typescript
export const stackConfig = {
  apiKey: import.meta.env.VITE_CONTENTSTACK_API_KEY || '',
  deliveryToken: import.meta.env.VITE_CONTENTSTACK_DELIVERY_TOKEN || '',
  environment: 'development',
  region: 'us'
};
```

---

### STEP 3: The Fetch Function

> "ContentstackContext provides the fetchContent function."

**File:** `src/context/ContentstackContext.tsx`

```typescript
const fetchContent = async (contentType: string) => {
  // 1. Create query for the Content Type
  const Query = stack.ContentType(contentType).Query();
  
  // 2. Include referenced content
  Query.includeReference(['testimonials', 'author']);
  
  // 3. Execute the API call
  const response = await Query.toJSON().find();
  
  // 4. Return the data
  return response[0][0];
};
```

**API Call Made:**
```
GET https://cdn.contentstack.io/v3/content_types/{contentType}/entries
```

---

### STEP 4: Page Components Render Data

> "Each page calls fetchContent and renders the result."

**File:** `src/pages/Home.tsx`

```typescript
const Home = () => {
  const { fetchContent } = useContentstack();
  const [homeData, setHomeData] = useState(null);

  useEffect(() => {
    const loadContent = async () => {
      const data = await fetchContent('home_page');  // ← FETCH
      setHomeData(data);                              // ← STORE
    };
    loadContent();
  }, []);

  // RENDER
  return (
    <h1>{homeData?.hero_title}</h1>
    <p>{homeData?.hero_subtitle}</p>
  );
};
```

---

## VISUAL: FIELD TO UI MAPPING

```
CONTENTSTACK                          WEBSITE
─────────────                         ─────────
Content Type: home_page               
    │                                 
    ├─ Field: hero_title ──────────→  <h1>The World's Best...</h1>
    │                                 
    ├─ Field: hero_subtitle ───────→  <p>Unlock your future...</p>
    │                                 
    ├─ Field: hero_stats[] ────────→  <div class="stats">
    │   ├─ value: "500+"                 <span>500+</span>
    │   └─ label: "Enterprise..."        <span>Enterprise Clients</span>
    │                                  </div>
    │                                 
    ├─ Field: features[] ──────────→  <div class="features">
    │   ├─ title: "AI Power"             <h3>AI Power</h3>
    │   ├─ description: "..."            <p>...</p>
    │   └─ icon: {url: "..."}            <img src="..." />
    │                                  </div>
    │                                 
    └─ Field: trusted_brands[] ────→  <marquee>
        ├─ "ASICS"                       ASICS | Walmart | Mattel
        ├─ "Walmart"                  </marquee>
        └─ "Mattel"
```

---

# SECTION 5: NAVIGATION FLOW

## How Navigation Works Across the Application

---

## THE ARCHITECTURE

```
App.tsx (Root)
  └── Layout.tsx (Wrapper)
        ├── Header.tsx ← Navigation lives here
        ├── {Page Content}
        └── Footer.tsx
```

---

## FILE 1: App.tsx - The Router

**File:** `src/App.tsx`

```typescript
<Router>
  <Layout>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/platform" element={<Platform />} />
      <Route path="/company" element={<Company />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/academy" element={<Academy />} />
      <Route path="/plans" element={<Plans />} />
      <Route path="/partners" element={<Partners />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/talk" element={<Talk />} />
      <Route path="/start" element={<Start />} />
    </Routes>
  </Layout>
</Router>
```

> "Layout wraps all routes, so every page gets the Header navigation."

---

## FILE 2: Layout.tsx - The Wrapper

**File:** `src/components/Layout.tsx`

```typescript
const Layout = ({ children }) => {
  return (
    <div className="app">
      <Header />           {/* Navigation at the top */}
      <main>
        {children}         {/* Page content goes here */}
      </main>
      <Footer />           {/* Footer at the bottom */}
    </div>
  );
};
```

> "This pattern ensures consistent structure across all pages."

---

## FILE 3: Header.tsx - The Navigation

**File:** `src/components/Header.tsx`

### Navigation Structure:

```
Header Structure:
├── Top Utility Bar
│   ├── Announcement text
│   └── Docs | Login links
│
├── Main Header
│   ├── Logo (with CMS data)
│   ├── Navigation Links ←────────────────────┐
│   │   ├── Platform                          │
│   │   ├── Company                           │
│   │   ├── Blogs                             │ THE NAV LINKS
│   │   ├── Academy                           │
│   │   ├── Plans                             │
│   │   ├── Partners                          │
│   │   ├── Careers                           │
│   │   └── Contact                           │
│   │                                         │
│   └── CTA Buttons                           │
│       ├── Talk to Sales                     │
│       └── Start Free ───────────────────────┘
```

### Navigation Links Code (Lines 179-186):

```typescript
<nav>
  <ul style={{ display: 'flex', gap: '20px' }}>
    <li><Link to="/platform">Platform</Link></li>
    <li><Link to="/company">Company</Link></li>
    <li><Link to="/blogs">Blogs</Link></li>
    <li><Link to="/academy">Academy</Link></li>
    <li><Link to="/plans">Plans</Link></li>
    <li><Link to="/partners">Partners</Link></li>
    <li><Link to="/careers">Careers</Link></li>
    <li><Link to="/contact">Contact</Link></li>
  </ul>
</nav>
```

### Header Also Fetches CMS Data:

```typescript
const { fetchContent } = useContentstack();
const [headerData, setHeaderData] = useState(null);

useEffect(() => {
  const loadContent = async () => {
    const data = await fetchContent('header');
    setHeaderData(data[0]);
  };
  loadContent();
}, []);
```

> "Logo and company name come from Contentstack!"

---

## HOW NAVIGATION WORKS

```
1. User clicks "Platform"
         ↓
2. React Router catches the click
         ↓
3. URL changes to /platform (no page reload)
         ↓
4. Router renders Platform component inside Layout
         ↓
5. Header and Footer stay the same
         ↓
6. Only the main content area updates
```

> "This is Single Page Application navigation - fast because we're not reloading the entire page."

---

# SECTION 6: Q&A CHEAT SHEET

## Common Questions & Answers

| Question | Answer |
|----------|--------|
| "What if Contentstack is down?" | "Fallback content keeps the site running" |
| "How fast is the API?" | "Contentstack CDN serves content in <100ms globally" |
| "Can editors break the site?" | "No - we validate content types and use fallbacks" |
| "How do you handle images?" | "Contentstack CDN with automatic optimization" |
| "Is this production-ready?" | "Yes - React 19, TypeScript, error handling included" |
| "How do I add a new page?" | "1. Add route in App.tsx, 2. Add link in Header.tsx" |
| "Where are credentials stored?" | "In .env file, which is gitignored" |
| "What's the tech stack?" | "React 19, TypeScript, Vite, React Router, Contentstack" |

---

# SECTION 7: QUICK REFERENCE

## Files to Know

| File | Purpose |
|------|---------|
| `.env` | API credentials (not in Git) |
| `contentstack.config.ts` | Exports config object |
| `ContentstackContext.tsx` | SDK init + fetchContent |
| `Home.tsx` | Landing page component |
| `Header.tsx` | Navigation component |
| `Layout.tsx` | Page wrapper |
| `App.tsx` | Routes definition |

---

## The Key Code Patterns

### Fetching Content:
```typescript
const data = await fetchContent('content_type_uid');
```

### Rendering with Fallback:
```typescript
{safeTextContent(data?.field_name, 'Fallback Text')}
```

### Mapping Arrays:
```typescript
{(data?.array_field || []).map((item, i) => (
  <div key={i}>{item.title}</div>
))}
```

### Live Preview Listener:
```typescript
onEntryChange(() => loadContent());
```

---

## 🎯 30-Second Demo Script

1. *"This is ContentFlow - powered by Contentstack CMS"*
2. *"Watch this..."* → Edit hero title → Save
3. *"Instant update! No developer needed"*
4. *"Questions?"*

---

---

# SECTION 8: TECHNOLOGIES & VERSIONS

## Complete Tech Stack with Versions and Uses

---

## CORE FRAMEWORK

| Technology | Version | Use |
|------------|---------|-----|
| **React** | ^18.3.1 | UI library for building component-based user interfaces |
| **React DOM** | ^18.3.1 | Renders React components to the DOM |
| **TypeScript** | ^5.3.3 | Adds static typing to JavaScript for better code quality and IDE support |

---

## BUILD TOOLS

| Technology | Version | Use |
|------------|---------|-----|
| **Vite** | ^5.4.11 | Lightning-fast build tool and dev server (replaces Webpack) |
| **@vitejs/plugin-react** | ^4.2.1 | Vite plugin for React - enables Fast Refresh and JSX |
| **Node.js** | 20.x | JavaScript runtime for running build tools |

---

## ROUTING

| Technology | Version | Use |
|------------|---------|-----|
| **React Router DOM** | ^6.26.0 | Client-side routing for Single Page Application navigation |

---

## CMS INTEGRATION (Contentstack)

| Technology | Version | Use |
|------------|---------|-----|
| **contentstack** | ^3.26.2 | Main Contentstack JavaScript SDK for fetching content |
| **@contentstack/delivery-sdk** | ^4.10.0 | Enhanced delivery SDK with better TypeScript support |
| **@contentstack/live-preview-utils** | ^4.1.2 | Enables real-time content updates in preview mode |

---

## SEO

| Technology | Version | Use |
|------------|---------|-----|
| **react-helmet-async** | ^2.0.4 | Manages document head (title, meta tags) for SEO |

---

## TYPE DEFINITIONS

| Technology | Version | Use |
|------------|---------|-----|
| **@types/react** | ^18.3.5 | TypeScript type definitions for React |
| **@types/react-dom** | ^18.3.0 | TypeScript type definitions for React DOM |

---

## TECHNOLOGY STACK DIAGRAM

```
┌─────────────────────────────────────────────────────────────┐
│                    FRONTEND STACK                           │
├─────────────────────────────────────────────────────────────┤
│  UI Framework:     React 18.3.1                             │
│  Language:         TypeScript 5.3.3                         │
│  Build Tool:       Vite 5.4.11                              │
│  Routing:          React Router 6.26.0                      │
│  SEO:              React Helmet Async 2.0.4                 │
├─────────────────────────────────────────────────────────────┤
│                    CMS STACK                                │
├─────────────────────────────────────────────────────────────┤
│  CMS Platform:     Contentstack (Headless CMS)              │
│  SDK:              contentstack 3.26.2                      │
│  Delivery SDK:     @contentstack/delivery-sdk 4.10.0        │
│  Live Preview:     @contentstack/live-preview-utils 4.1.2   │
├─────────────────────────────────────────────────────────────┤
│                    RUNTIME                                  │
├─────────────────────────────────────────────────────────────┤
│  Node.js:          20.x                                     │
│  Package Manager:  npm                                      │
└─────────────────────────────────────────────────────────────┘
```

---

## WHY THESE TECHNOLOGIES?

| Technology | Why Chosen |
|------------|------------|
| **React 18** | Latest stable version with Concurrent Features, automatic batching |
| **TypeScript** | Catches errors at compile time, better IDE autocomplete |
| **Vite** | 10-100x faster than Webpack, instant Hot Module Replacement |
| **React Router 6** | Latest version with data APIs and improved nested routing |
| **Contentstack SDKs** | Official SDKs with full feature support and Live Preview |
| **React Helmet Async** | SSR-compatible, prevents memory leaks |

---

## SCRIPT: EXPLAINING THE TECH STACK

> "Let me tell you about our tech stack:"

> "**React 18** - The latest version of React with improved performance features like automatic batching and concurrent rendering."

> "**TypeScript** - Adds type safety to our code, catching bugs before they reach production and providing better IDE support."

> "**Vite** - A next-generation build tool that's incredibly fast. Development server starts in milliseconds, and hot module replacement is instant."

> "**React Router 6** - Handles all our client-side navigation. When you click a nav link, only the content changes - the page doesn't reload."

> "**Contentstack SDKs** - Three packages working together:"
> - "The main SDK for basic API calls"
> - "The Delivery SDK for optimized content fetching"  
> - "Live Preview Utils for real-time content updates"

> "**React Helmet Async** - Manages SEO metadata like page titles and descriptions, all controlled from the CMS."

> "This stack gives us speed, reliability, and an excellent developer experience."

---

**Good luck with your demo! 🎉**

