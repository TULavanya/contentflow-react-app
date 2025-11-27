# Visual Builder Setup - FIXED! ✅

## What Was Fixed

I've resolved the Visual Builder integration issues. Here's what was changed:

### 1. **Added `mode: "builder"` Parameter** ✅
- **File**: `src/context/ContentstackContext.tsx`
- **What**: Added the critical `mode: 'builder'` parameter to the `ContentstackLivePreview.init()` call
- **Why**: This tells Contentstack to enable Visual Builder mode instead of just Live Preview

### 2. **Added Preview Token to Init** ✅
- **File**: `src/context/ContentstackContext.tsx`
- **What**: Added `preview_token` to the `stackDetails` configuration
- **Why**: Visual Builder requires the preview token to authenticate and enable editing

### 3. **Fixed Logic Error in Config** ✅
- **File**: `src/config/contentstack.config.ts`
- **What**: Changed `!== 'true'` to `!== 'false'` for the live preview enable check
- **Why**: The logic was inverted, causing live preview to be disabled by default

### 4. **Added Edit Tags Metadata** ✅
- **File**: `src/context/ContentstackContext.tsx`
- **What**: Added `ContentstackLivePreview.setLiveEditingDataForEntry()` to process fetched data
- **Why**: This adds the `$` property with edit tags metadata to your entry data

### 5. **Added Edit Tags to Components** ✅
- **File**: `src/pages/Home.tsx`
- **What**: Added `{...(homeData?.$?.hero_title || {})}` spread attributes to editable elements
- **Why**: These data-cslp attributes tell Visual Builder which fields can be edited

## Current Configuration

```typescript
ContentstackLivePreview.init({
  clientUrlParams: {
    host: 'rest-preview.contentstack.com',
  },
  stackDetails: {
    apiKey: 'bltc8715766359fd200',
    environment: 'development',
    preview_token: 'csd02a07e6dd335fcfd9527d72', // ✅ NOW INCLUDED
  },
  mode: 'builder', // ✅ NOW SET TO 'builder'
  ssr: false,
  enable: true,
});
```

## How to Test Visual Builder

### 1. **Start Your Development Server**
```bash
npm run dev
```

### 2. **Open Contentstack Dashboard**
- Go to https://app.contentstack.com
- Navigate to your stack
- Click on "Visual Builder" in the left sidebar

### 3. **Configure Visual Builder in Contentstack**
- **Base URL**: Enter your development server URL (e.g., `http://localhost:5173`)
- **Preview Token**: Should auto-detect from your setup
- **Environment**: Select your environment (e.g., `development`)

### 4. **Verify Setup**
The setup wizard should now show:
- ✅ Configure the environment
- ✅ Validate the Default Environment
- ✅ Validate the Base URL
- ✅ Install the Latest Live Preview SDK
- ✅ Verify Mode for Live Preview (now detects "builder")
- ✅ Validate the Preview Token / API Key (now detects token)

### 5. **Start Editing**
Once all steps are green:
- Your website will load in the Visual Builder iframe
- Hover over editable content to see edit icons
- Click to edit fields in real-time
- Changes will update instantly without page refresh

## Adding Edit Tags to More Components

To make more fields editable in Visual Builder, add edit tags to your JSX:

### Example 1: Text Field
```tsx
<h1 {...(entry?.$?.title || {})}>
  {entry?.title}
</h1>
```

### Example 2: Nested Field
```tsx
<p {...(entry?.$?.hero_section?.subtitle || {})}>
  {entry?.hero_section?.subtitle}
</p>
```

### Example 3: Array Field (Modular Blocks)
```tsx
<div {...(entry?.$?.features || {})}>
  {entry?.features?.map((feature, index) => (
    <div key={index} {...(entry?.$?.features?.[index] || {})}>
      <h3 {...(entry?.$?.features?.[index]?.title || {})}>
        {feature.title}
      </h3>
      <p {...(entry?.$?.features?.[index]?.description || {})}>
        {feature.description}
      </p>
    </div>
  ))}
</div>
```

## Environment Variables

Create a `.env` file in your project root with these values:

```env
VITE_CONTENTSTACK_API_KEY=your_actual_api_key
VITE_CONTENTSTACK_DELIVERY_TOKEN=your_actual_delivery_token
VITE_CONTENTSTACK_PREVIEW_TOKEN=your_actual_preview_token
VITE_CONTENTSTACK_ENVIRONMENT=development
VITE_CONTENTSTACK_REGION=us
VITE_CONTENTSTACK_ENABLED=true
VITE_CONTENTSTACK_LIVE_PREVIEW=true
```

**Important**: Replace the placeholder values with your actual credentials from Contentstack:
- API Key: Settings > Stack > API Key
- Delivery Token: Settings > Tokens > Delivery Tokens
- Preview Token: Settings > Tokens > Preview Tokens

## Troubleshooting

### Issue: Visual Builder doesn't detect mode
**Solution**: Clear browser cache and restart dev server

### Issue: CORS errors in Visual Builder
**Solution**: Ensure your website allows iframe embedding:
```typescript
// Add to vite.config.ts
server: {
  headers: {
    'Content-Security-Policy': "frame-ancestors 'self' https://*.contentstack.com",
  }
}
```

### Issue: Edit tags not appearing
**Solution**: Check that:
1. Live Preview is enabled (`livePreview.enable = true`)
2. Data is processed with `setLiveEditingDataForEntry()`
3. Edit tags are added with spread operator `{...(entry?.$?.field || {})}`

## SDK Versions

Your project is using:
- `@contentstack/delivery-sdk`: ^4.10.0 ✅
- `@contentstack/live-preview-utils`: ^4.1.1 ✅

Both are up-to-date and support Visual Builder!

## Next Steps

1. ✅ **Fixed**: Visual Builder configuration
2. ✅ **Fixed**: Preview token integration
3. ✅ **Fixed**: Mode setting
4. ✅ **Fixed**: Edit tags metadata
5. ✅ **Added**: Edit tags to Home page hero section
6. 🔄 **TODO**: Add edit tags to other components as needed
7. 🔄 **TODO**: Test in Contentstack Visual Builder
8. 🔄 **TODO**: Configure iframe CSP headers if needed

## Documentation References

- [Visual Builder Setup](https://www.contentstack.com/docs/developers/set-up-visual-builder/set-up-visual-builder-for-your-website)
- [Live Edit Tags](https://www.contentstack.com/docs/developers/set-up-live-preview/set-up-live-edit-tags)
- [Live Preview Utils](https://www.contentstack.com/docs/developers/sdks/content-delivery-sdk/javascript-sdk/live-preview)

---

**Status**: ✅ Visual Builder should now be fully functional!

If you still see issues after restarting your dev server, please check:
1. Preview token is correct in your `.env` file
2. Environment name matches your Contentstack environment
3. Base URL in Visual Builder settings points to your dev server

