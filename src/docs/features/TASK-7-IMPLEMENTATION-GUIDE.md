# Task 7: Chat → Gemini AI Integration - Implementation Guide

**Status:** ✅ COMPLETE  
**Date:** 2026-02-04  
**Time to Complete:** 6 hours

---

## 📦 What Was Built

### 1. Core Files Created

| File | Purpose | Status |
|------|---------|--------|
| `/supabase/functions/ai-chat/index.ts` | Edge function for AI | ✅ |
| `/lib/chat-api.ts` | Chat API helpers | ✅ |
| `/components/ai-chatbot/AIChatbotDB.tsx` | Chat UI (connected) | ✅ |
| `/app/chat-test/page.tsx` | Test page | ✅ |

### 2. Features Implemented

- ✅ Gemini AI integration via edge function
- ✅ Context-aware responses (reads canvas data)
- ✅ Conversation history persistence
- ✅ Auto-load previous conversations
- ✅ Real-time message streaming
- ✅ Error handling and retry
- ✅ Loading states
- ✅ Message timestamps

---

## 🚀 Setup Instructions

### Step 1: Get Gemini API Key

1. Go to [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Click "Create API Key"
3. Select your Google Cloud project (or create new)
4. Copy the API key (starts with `AIza...`)
5. Save to password manager

### Step 2: Configure Environment Variables

#### Local Development

1. Update `.env.local`:
   ```bash
   VITE_SUPABASE_URL=https://your-project.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-key
   GEMINI_API_KEY=your-gemini-api-key-here  # Add this line
   ```

#### Supabase Edge Functions

1. Go to Supabase Dashboard → Edge Functions
2. Click on your project settings
3. Add environment variable:
   - **Name:** `GEMINI_API_KEY`
   - **Value:** Your Gemini API key
   - Click "Add"

### Step 3: Deploy Edge Function

#### Option A: Supabase Dashboard (Easiest)

1. Go to Supabase Dashboard → Edge Functions
2. Click "Deploy New Function"
3. **Name:** `ai-chat`
4. Copy/paste contents of `/supabase/functions/ai-chat/index.ts`
5. Click "Deploy"
6. Wait for deployment (~30 seconds)
7. Test function in dashboard

#### Option B: Supabase CLI (Recommended for Production)

```bash
# Install Supabase CLI (if not already)
npm install -g supabase

# Login
supabase login

# Link to project
supabase link --project-ref your-project-id

# Deploy function
supabase functions deploy ai-chat

# Set environment variable
supabase secrets set GEMINI_API_KEY=your-key-here
```

### Step 4: Verify Deployment

1. Go to Supabase Dashboard → Edge Functions
2. Click on `ai-chat` function
3. Click "Invoke Function"
4. Send test request:
   ```json
   {
     "message": "Hello",
     "startupId": "test-id"
   }
   ```
5. **Expected:** Response with AI message

---

## 🧪 Testing

### Test 1: Basic Chat

1. Start dev server: `npm run dev`
2. Navigate to `/chat-test`
3. Click chat button (bottom-right)
4. Type: "Hello"
5. Press Enter
6. **Expected:** AI responds within 5-10 seconds

**Pass Criteria:**
- ✅ Message sends
- ✅ Loading indicator shows
- ✅ AI response appears
- ✅ Timestamp shows

### Test 2: Context Awareness

1. Navigate to `/lean-canvas-db`
2. Fill in Problem: "HR teams waste 10 hours per week"
3. Wait for auto-save
4. Navigate to `/chat-test`
5. Open chat
6. Type: "What's my problem?"
7. **Expected:** AI mentions "HR teams waste 10 hours per week"

**Pass Criteria:**
- ✅ AI references canvas data
- ✅ Response is specific to your problem
- ✅ Not generic advice

### Test 3: Conversation History

1. Open chat
2. Send message: "What should I do first?"
3. AI responds
4. Close chat window
5. Refresh page
6. Open chat again
7. **Expected:** Previous conversation is still there

**Pass Criteria:**
- ✅ Messages persist
- ✅ Order preserved
- ✅ Timestamps correct

### Test 4: Multi-Turn Conversation

1. Open chat
2. Send: "I want to validate my idea"
3. AI responds
4. Send: "How?"
5. AI responds with context
6. **Expected:** AI remembers previous message

**Pass Criteria:**
- ✅ AI understands "How?" refers to validation
- ✅ Response builds on previous context
- ✅ Coherent conversation

### Test 5: Error Handling

#### Test 5A: Network Error

1. Open chat
2. Open DevTools → Network
3. Set throttling to "Offline"
4. Try to send message
5. **Expected:** Error message appears

#### Test 5B: Invalid API Key

1. Temporarily set wrong Gemini API key in Supabase
2. Try to send message
3. **Expected:** User-friendly error (not raw API error)

**Pass Criteria:**
- ✅ Error messages are clear
- ✅ No stack traces shown to user
- ✅ Can retry after fixing issue

---

## 📊 Performance Benchmarks

| Metric | Target | Measurement |
|--------|--------|-------------|
| First message latency | < 10s | Time from send to response |
| Subsequent messages | < 5s | After first message |
| History load | < 1s | Time to load 50 messages |
| Message save | < 500ms | Time to persist to DB |

### How to Measure

```typescript
// In chat-api.ts, add timing
const start = Date.now();
const response = await sendMessage(message);
const duration = Date.now() - start;
console.log(`AI response took ${duration}ms`);
```

---

## 🐛 Troubleshooting

### Issue: "Failed to get AI response"

**Possible Causes:**
1. Gemini API key not set
2. API key invalid
3. Network error
4. Edge function not deployed

**Solution:**
```bash
# Check edge function exists
supabase functions list

# Check environment variable
supabase secrets list

# Test edge function directly
curl -X POST https://your-project.supabase.co/functions/v1/ai-chat \
  -H "Authorization: Bearer your-anon-key" \
  -H "Content-Type: application/json" \
  -d '{"message":"test","startupId":"test"}'
```

### Issue: "Conversation history not loading"

**Solution:**
1. Check `validation_conversations` table exists
2. Verify RLS policies are active
3. Check user is authenticated
4. Look for errors in browser console

```sql
-- Check table exists
SELECT * FROM validation_conversations LIMIT 1;

-- Check RLS policies
SELECT * FROM pg_policies WHERE tablename = 'validation_conversations';
```

### Issue: "AI responses are generic, not context-aware"

**Solution:**
1. Verify canvas data is saved
2. Check edge function is reading canvas correctly
3. Test with SQL:

```sql
-- Verify canvas exists
SELECT * FROM lean_canvases WHERE startup_id = 'your-startup-id';

-- Check if edge function can access it
-- (should work if RLS is correct)
```

### Issue: "Rate limiting errors"

**Gemini API Free Tier Limits:**
- 15 requests per minute
- 1,500 requests per day
- 1 million tokens per day

**Solution:**
1. Add rate limiting to edge function
2. Implement request queuing
3. Upgrade to Gemini API paid tier

---

## 🔒 Security Considerations

### What's Protected

✅ **API Key Security:**
- Gemini API key stored in Supabase secrets
- Never exposed to frontend
- Only accessible by edge function

✅ **User Data Isolation:**
- RLS ensures users only see their own conversations
- Edge function verifies auth token
- No cross-user data leaks

✅ **Input Validation:**
- Message length limits (checked in edge function)
- Startup ID validation
- SQL injection prevention (parameterized queries)

### What to Add (Future)

⚠️ **Rate Limiting:**
- Per-user message limits (e.g., 100/day)
- Prevent API abuse
- Cost control

⚠️ **Content Filtering:**
- Block inappropriate content
- Detect prompt injection attempts
- Sanitize user input

⚠️ **Audit Logging:**
- Log all AI interactions
- Track token usage
- Monitor for abuse

---

## 💰 Cost Estimates

### Gemini API Pricing

**Free Tier:**
- 15 RPM (requests per minute)
- 1,500 RPD (requests per day)
- 1 million TPD (tokens per day)
- **Cost:** $0

**Paid Tier (gemini-2.0-flash):**
- Input: $0.075 per 1M tokens
- Output: $0.30 per 1M tokens
- **Average conversation:** ~500 input + 300 output tokens = $0.00013

### Supabase Edge Functions

**Free Tier:**
- 500K invocations/month
- 50 active functions
- 100 MB memory
- **Cost:** $0

**Usage Projections (1,000 users):**
- Average: 5 conversations/user/day = 5,000 messages/day
- Monthly: 150,000 messages
- Edge function calls: 150,000
- Gemini API tokens: ~120M (well within free tier)

**Total Cost:** $0/month (within free tiers)

---

## 📈 Monitoring

### Key Metrics to Track

1. **Response Latency**
   - P50, P95, P99 response times
   - Track in Supabase Dashboard → Functions → Metrics

2. **Error Rate**
   - Failed requests / total requests
   - Alert if > 1%

3. **Token Usage**
   - Input/output tokens per request
   - Monitor via Google Cloud Console

4. **User Engagement**
   - Messages per user
   - Active conversations
   - Average conversation length

### Setup Monitoring

```sql
-- Create view for chat metrics
CREATE VIEW chat_metrics AS
SELECT 
  DATE(created_at) as date,
  COUNT(*) as total_messages,
  COUNT(DISTINCT session_id) as active_sessions,
  COUNT(*) FILTER (WHERE role = 'user') as user_messages,
  COUNT(*) FILTER (WHERE role = 'assistant') as ai_messages
FROM validation_conversations
GROUP BY DATE(created_at)
ORDER BY date DESC;

-- Query metrics
SELECT * FROM chat_metrics LIMIT 30;
```

---

## 🎯 Success Criteria

After completing setup, you should have:

- ✅ Gemini API key configured
- ✅ Edge function deployed
- ✅ Chat UI loads
- ✅ Can send messages
- ✅ AI responds with context
- ✅ Conversation persists
- ✅ Error handling works
- ✅ Performance targets met

---

## 🚀 Next Steps

With Task 7 complete, you're ready for:

**Task 8: Validator Frontend**
- Display 7-dimension scores
- Show overall validation score
- Identify constraint
- Suggest next actions

**Requirements:**
- Task 7 complete ✅
- Edge function: `validator-run`
- UI for displaying scores
- Integration with chat

---

## 📝 Code Quality Checklist

- ✅ TypeScript types for all functions
- ✅ Error handling on async operations
- ✅ Loading states for network requests
- ✅ User feedback for actions
- ✅ Mobile responsive
- ✅ Accessibility (keyboard nav, ARIA)
- ✅ Comments and JSDoc
- ✅ Environment variables externalized
- ✅ No secrets in code
- ✅ Conversation history optimized

---

**Status:** ✅ Task 7 Complete - Ready for Task 8!
