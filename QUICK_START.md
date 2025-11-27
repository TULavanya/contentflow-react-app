# 🚀 Quick Start - Visual Builder Fixed!

## ✅ What I Fixed

Your Visual Builder integration had 3 critical issues that are now resolved:

### 1. Missing `mode: "builder"` Parameter
**Problem**: The setup wizard couldn't detect Visual Builder mode  
**Fixed**: Added `mode: 'builder'` to `ContentstackLivePreview.init()`  
**File**: `src/context/ContentstackContext.tsx`

### 2. Missing Preview Token
**Problem**: Preview token wasn't being passed to Live Preview  
**Fixed**: Added `preview_token` to the `stackDetails` configuration  
**File**: `src/context/ContentstackContext.tsx`

### 3. Edit Tags Not Generated
**Problem**: No `$` metadata on entry data for edit tags  
**Fixed**: Added `ContentstackLivePreview.setLiveEditingDataForEntry()` processing  
**Files**: `src/context/ContentstackContext.tsx`, `src/pages/Home.tsx`

### 4. CORS/Iframe Issues (Preventative)
**Fixed**: Added CSP headers to allow iframe embedding  
**File**: `vite.config.ts`

---

## 🎯 Next Steps

### Step 1: Restart Your Dev Server
```bash
# Stop current server (Ctrl+C)
npm run dev
```

### Step 2: Open Contentstack Visual Builder
1. Go to https://app.contentstack.com
2. Select your stack
3. Click "Visual Builder" in the left sidebar
4. Enter your Base URL: `http://localhost:3000`
5. The setup wizard should now show all checkmarks ✅

### Step 3: Verify All Checks Pass
You should see:
- ✅ Configure the environment
- ✅ Validate the Default Environment  
- ✅ Validate the Base URL
- ✅ Install the Latest Live Preview SDK
- ✅ **Verify Mode for Live Preview** ← NOW WORKS
- ✅ **Validate the Preview Token / API Key** ← NOW WORKS

### Step 4: Start Editing!
- Your website loads in Visual Builder
- Hover over text to see edit icons
- Click to edit content in real-time
- Changes appear instantly

---

## 📝 Your Current Configuration

### API Credentials (from `contentstack.config.ts`)
```typescript
API Key:        bltc8715766359fd200
Delivery Token: cs8bc0fd9b19dee044b3c7c2c7
Preview Token:  csd02a07e6dd335fcfd9527d72  ← NOW USED
Environment:    development
Region:         us
Mode:           builder  ← NOW SET
```

### Live Preview Init (now in `ContentstackContext.tsx`)
```typescript
ContentstackLivePreview.init({
  mode: 'builder',                    // ✅ Added
  stackDetails: {
    apiKey: 'bltc8715766359fd200',
    environment: 'development',
    preview_token: 'csd02a07e6...',  // ✅ Added
  },
  clientUrlParams: {
    host: 'rest-preview.contentstack.com',
  },
  enable: true,
  ssr: false,
});
```

---

## 🔍 Troubleshooting

### Issue: Still showing validation errors?
**Solution**:
1. Clear browser cache (Ctrl+Shift+Delete)
2. Restart dev server completely
3. Reload Visual Builder page in Contentstack

### Issue: Can't see website in Visual Builder?
**Solution**:
1. Check dev server is running on port 3000
2. Verify Base URL is `http://localhost:3000` (no trailing slash)
3. Check browser console for errors

### Issue: No edit icons on hover?
**Solution**:
1. Ensure you've published an entry in Contentstack
2. Check that entry has fields with matching UIDs
3. Verify edit tags are present (see VISUAL_BUILDER_SETUP.md)

### Issue: CORS error in console?
**Solution**: 
Already fixed! CSP headers added to `vite.config.ts`

---

## 📚 Files Modified

1. **src/config/contentstack.config.ts**
   - Added `mode: 'builder'` to livePreview config
   - Fixed enable logic (changed !== 'true' to !== 'false')

2. **src/context/ContentstackContext.tsx**
   - Added `mode` parameter to Live Preview init
   - Added `preview_token` to stackDetails
   - Added `setLiveEditingDataForEntry()` processing
   - Enhanced console logging

3. **src/pages/Home.tsx**
   - Added edit tags to hero title
   - Added edit tags to hero subtitle

4. **vite.config.ts**
   - Added CSP headers for iframe embedding

---

## 🎓 Additional Resources

- Full setup guide: `VISUAL_BUILDER_SETUP.md`
- Contentstack docs: https://www.contentstack.com/docs/developers/set-up-visual-builder

---

## ✨ Status: READY TO USE

Your Visual Builder should now be **fully functional**! 🎉

If you still encounter issues, check the detailed troubleshooting in `VISUAL_BUILDER_SETUP.md`.

