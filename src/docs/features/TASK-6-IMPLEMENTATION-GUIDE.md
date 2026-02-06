# Task 6: Canvas → Database Integration - Implementation Guide

**Status:** ✅ COMPLETE  
**Date:** 2026-02-04  
**Time to Complete:** 4 hours

---

## 📦 What Was Built

### 1. Core Infrastructure Files

| File | Purpose | Status |
|------|---------|--------|
| `/lib/supabase.ts` | Supabase client setup | ✅ |
| `/lib/AuthContext.tsx` | Auth state management | ✅ |
| `/lib/auth.ts` | Auth helper functions | ✅ |
| `/lib/canvas-api.ts` | Canvas CRUD operations | ✅ |
| `/components/ProtectedRoute.tsx` | Route protection | ✅ |
| `/app/lean-canvas-db/page.tsx` | Canvas UI with DB | ✅ |
| `/supabase/migrations/20260204_initial_schema.sql` | Database schema | ✅ |
| `/.env.example` | Environment template | ✅ |

### 2. Database Schema

#### Tables Created
- `startups` - User's startup profiles
- `lean_canvases` - Canvas data storage
- `validation_sessions` - Coach state machine
- `validation_assessments` - 7-dimension scores
- `validation_campaigns` - 90-day validation cycles
- `validation_sprints` - 2-week PDCA sprints
- `validation_experiments` - Hypothesis testing
- `validation_conversations` - Chat history
- `traction` - KPI metrics

#### Security
- ✅ Row Level Security (RLS) enabled on all tables
- ✅ Policies ensure users can only access their own data
- ✅ Foreign key constraints maintain referential integrity
- ✅ Indexes added for query performance

---

## 🚀 Setup Instructions

### Step 1: Install Dependencies

```bash
npm install @supabase/supabase-js
```

### Step 2: Create Supabase Project

1. Go to [https://app.supabase.com](https://app.supabase.com)
2. Click "New Project"
3. Fill in:
   - **Name:** `startupai-production`
   - **Database Password:** Generate strong password (save to password manager)
   - **Region:** Choose closest to your users (e.g., US West)
   - **Pricing:** Free tier (500MB database, 2GB bandwidth)
4. Wait 2-3 minutes for provisioning

### Step 3: Get API Credentials

1. In Supabase Dashboard, go to **Settings → API**
2. Copy these values:
   - **Project URL:** `https://your-project-id.supabase.co`
   - **anon/public key:** `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`

### Step 4: Configure Environment Variables

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Edit `.env.local`:
   ```bash
   VITE_SUPABASE_URL=https://your-project-id.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-key-here
   ```

3. **IMPORTANT:** Add `.env.local` to `.gitignore` (should already be there)

### Step 5: Run Database Migration

#### Option A: Supabase Dashboard (Easiest)

1. Go to **SQL Editor** in Supabase Dashboard
2. Click **New Query**
3. Copy entire contents of `/supabase/migrations/20260204_initial_schema.sql`
4. Paste into editor
5. Click **Run** (or press Ctrl+Enter)
6. Verify success message: "Success. No rows returned"

#### Option B: Supabase CLI (Advanced)

```bash
# Install Supabase CLI
npm install -g supabase

# Login
supabase login

# Link to your project
supabase link --project-ref your-project-id

# Run migration
supabase db push
```

### Step 6: Verify Database Setup

1. Go to **Table Editor** in Supabase Dashboard
2. Confirm these tables exist:
   - ✅ startups
   - ✅ lean_canvases
   - ✅ validation_sessions
   - ✅ validation_assessments
   - ✅ validation_campaigns
   - ✅ validation_sprints
   - ✅ validation_experiments
   - ✅ validation_conversations
   - ✅ traction

3. Click on `lean_canvases` table
4. Check **Policies** tab → Should show 4 policies
5. Check **Indexes** tab → Should show indexes

### Step 7: Enable Email Auth

1. Go to **Authentication → Providers**
2. **Email** should be enabled by default
3. For **Google OAuth** (optional):
   - Go to [Google Cloud Console](https://console.cloud.google.com)
   - Create OAuth 2.0 credentials
   - Add redirect URI: `https://your-project-id.supabase.co/auth/v1/callback`
   - Copy Client ID and Secret
   - Paste into Supabase Google provider settings

### Step 8: Wrap App with Auth Provider

Update your main `/App.tsx`:

```tsx
import { AuthProvider } from './lib/AuthContext';

export default function App() {
  return (
    <AuthProvider>
      {/* Your existing app content */}
    </AuthProvider>
  );
}
```

---

## ✅ Testing Checklist

### Phase 1: Connection Test

```bash
# Start dev server
npm run dev

# Open browser console (F12)
# Navigate to your app
```

**Expected:** No errors about missing Supabase credentials

### Phase 2: Authentication Test

Create a simple test page at `/test-auth.tsx`:

```tsx
import { useAuth } from './lib/AuthContext';
import { signUpWithEmail, signInWithEmail } from './lib/auth';

export default function TestAuth() {
  const { user, loading } = useAuth();

  return (
    <div className="p-8">
      <h1>Auth Test</h1>
      {loading && <p>Loading...</p>}
      {user ? (
        <div>
          <p>✅ Logged in: {user.email}</p>
        </div>
      ) : (
        <div>
          <p>❌ Not logged in</p>
          <button onClick={async () => {
            await signUpWithEmail('test@example.com', 'testpassword123');
          }}>
            Test Signup
          </button>
        </div>
      )}
    </div>
  );
}
```

**Run Test:**
1. Navigate to `/test-auth`
2. Click "Test Signup"
3. Check email for verification link
4. Click verification link
5. Should see "✅ Logged in: test@example.com"

### Phase 3: Canvas Database Test

1. Navigate to `/lean-canvas-db`
2. **Expected:** Loading indicator appears briefly
3. **Expected:** Empty canvas loads
4. Click on "Problem" block
5. Type "HR teams waste 10 hours per week" → Press Enter
6. **Expected:** Item appears in block
7. **Expected:** After 2 seconds, see "Saving..." indicator
8. **Expected:** After save completes, see "Saved ✓" indicator
9. Refresh page (F5)
10. **Expected:** Canvas data persists

### Phase 4: Auto-Save Test

1. Open canvas at `/lean-canvas-db`
2. Open Supabase Dashboard → Table Editor → `lean_canvases`
3. In app: Add multiple items across different blocks
4. Wait 2 seconds after each change
5. In Supabase Dashboard: Click refresh icon
6. **Expected:** See `updated_at` timestamp change
7. **Expected:** See data in database columns

### Phase 5: RLS (Security) Test

**Test 1: Own Data Access**
1. Login as User A
2. Create canvas with data "User A's Problem"
3. Verify data saves

**Test 2: Isolation**
1. Open incognito window
2. Login as User B (different email)
3. Navigate to `/lean-canvas-db`
4. **Expected:** Empty canvas (not User A's data)
5. Create canvas with data "User B's Problem"
6. **Expected:** Data saves successfully
7. In Supabase Dashboard → Table Editor → `lean_canvases`
8. **Expected:** 2 rows, each with different `user_id`

**Test 3: Direct Database Access**
1. In Supabase Dashboard → SQL Editor
2. Run:
   ```sql
   SELECT * FROM lean_canvases;
   ```
3. **Expected:** Only see your own canvas (RLS enforced even in dashboard)

### Phase 6: Error Handling Test

**Test 1: Network Error**
1. Open canvas
2. Open DevTools → Network tab
3. Set throttling to "Offline"
4. Try to add item
5. **Expected:** After 2 seconds, see "Save Failed" error
6. **Expected:** Error banner appears with "Retry" button
7. Set network back to "Online"
8. Click "Retry"
9. **Expected:** Data saves successfully

**Test 2: Invalid Environment Variables**
1. Temporarily rename `.env.local` to `.env.local.bak`
2. Restart dev server
3. Navigate to canvas
4. **Expected:** Error message: "Missing Supabase environment variables..."

---

## 🐛 Troubleshooting

### Issue: "Missing Supabase environment variables"

**Solution:**
```bash
# Check .env.local exists
ls -la .env.local

# Check contents
cat .env.local

# Verify variables start with VITE_
# Restart dev server
npm run dev
```

### Issue: "Failed to load canvas: JWTExpired"

**Solution:**
```bash
# Clear browser cookies/localStorage
# Re-login to app
```

### Issue: RLS policy error "permission denied for table"

**Solution:**
1. Go to Supabase Dashboard → SQL Editor
2. Run:
   ```sql
   SELECT * FROM lean_canvases;
   ```
3. If no data shows, RLS is working correctly
4. Check that you're logged in to the app
5. Verify `auth.uid()` matches `user_id` in `startups` table

### Issue: Canvas not auto-saving

**Solution:**
1. Open browser console (F12)
2. Look for errors
3. Common causes:
   - Network offline
   - Invalid `startup_id`
   - Database connection timeout
4. Try manual save test:
   ```typescript
   import { saveCanvas } from './lib/canvas-api';
   
   saveCanvas({
     problem: 'test',
     solution: '',
     // ... fill other fields
   }).then(console.log).catch(console.error);
   ```

### Issue: Data not persisting after refresh

**Solution:**
1. Check browser console for errors
2. Verify `loadCanvas()` is called in `useEffect`
3. Check Supabase Dashboard → Table Editor → `lean_canvases`
4. Verify data exists in database
5. Verify `startup_id` matches

---

## 📊 Verification Report

Run this SQL query in Supabase Dashboard to verify setup:

```sql
-- Verification Query
SELECT 
  'Tables' as category,
  COUNT(*) as count
FROM information_schema.tables 
WHERE table_schema = 'public'
  AND table_name IN (
    'startups', 
    'lean_canvases', 
    'validation_sessions',
    'validation_assessments',
    'validation_campaigns',
    'validation_sprints',
    'validation_experiments',
    'validation_conversations',
    'traction'
  )

UNION ALL

SELECT 
  'RLS Policies' as category,
  COUNT(*) as count
FROM pg_policies
WHERE schemaname = 'public'

UNION ALL

SELECT 
  'Indexes' as category,
  COUNT(*) as count
FROM pg_indexes
WHERE schemaname = 'public'
  AND tablename IN (
    'startups', 
    'lean_canvases',
    'validation_sessions'
  );
```

**Expected Output:**
```
category       | count
---------------+-------
Tables         | 9
RLS Policies   | 22+
Indexes        | 10+
```

---

## 📈 Success Metrics

After completing setup, you should have:

- ✅ Supabase project created and configured
- ✅ Database schema deployed (9 tables)
- ✅ RLS policies active (22+ policies)
- ✅ Canvas loads from database
- ✅ Canvas auto-saves every 2 seconds
- ✅ Save indicator works ("Saving..." → "Saved ✓")
- ✅ Data persists across page refreshes
- ✅ Multiple users have isolated data
- ✅ Error handling shows user-friendly messages
- ✅ Authentication protects routes

---

## 🎯 Next Steps

With Task 6 complete, you're ready for:

**Task 7: Chat → Gemini AI**
- Create `/supabase/functions/ai-chat/index.ts`
- Update `AIChatbot.tsx` to call edge function
- Load conversation history from `validation_conversations`

**Task 8: Validator Frontend**
- Create `/supabase/functions/validator-run/index.ts`
- Build validator report page
- Display 7-dimension scores

---

## 📝 Code Quality Checklist

- ✅ TypeScript types defined for all functions
- ✅ Error handling on all async operations
- ✅ Loading states for all network requests
- ✅ User feedback for all actions (save indicators)
- ✅ Mobile responsive design
- ✅ Accessibility (keyboard navigation, ARIA labels)
- ✅ Comments and documentation
- ✅ Environment variables externalized
- ✅ No secrets committed to git
- ✅ Database queries optimized with indexes
- ✅ Security enforced with RLS policies

---

## 🔐 Security Notes

### What's Protected
- ✅ All database operations require authentication
- ✅ Users can only access their own data
- ✅ API keys stored in environment variables
- ✅ anon key is safe to expose (RLS protects data)
- ✅ service_role key never exposed to frontend

### What's NOT Protected (Future Work)
- ⚠️ Rate limiting (add later with Supabase Edge Functions)
- ⚠️ Input validation (add Zod schemas)
- ⚠️ XSS protection (sanitize user input)
- ⚠️ CORS configuration (configure for production domain)

---

## 📞 Support

If you encounter issues:

1. **Check this guide** - Most issues covered in Troubleshooting
2. **Supabase Docs** - https://supabase.com/docs
3. **Supabase Discord** - https://discord.supabase.com
4. **GitHub Issues** - File issue with error logs

---

**Status:** ✅ Task 6 Complete - Ready for Task 7!
