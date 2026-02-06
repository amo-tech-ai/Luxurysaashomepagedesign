# Validator Pipeline - Setup Guide

## Quick Start (5 minutes)

### 1. Database Setup

```bash
# Navigate to Supabase project
cd your-project

# Run migration
supabase db reset

# OR in production
supabase migration up
```

**Verify:**
- Tables created: `validator_sessions`, `validator_runs`, `validator_reports`
- RLS policies active (check Supabase dashboard)

### 2. Environment Variables

**Supabase Dashboard → Settings → Edge Functions:**
```bash
GEMINI_API_KEY=your-gemini-api-key
```

**Frontend `.env`:**
```bash
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

### 3. Deploy Edge Functions

```bash
# Deploy all functions
supabase functions deploy validator-start
supabase functions deploy validator-status
supabase functions deploy validator-regenerate
```

**Test with cURL:**
```bash
curl -X POST https://your-project.supabase.co/functions/v1/validator-start \
  -H "Authorization: Bearer YOUR_ANON_KEY" \
  -H "Content-Type: application/json" \
  -d '{"input_text": "We are building an AI-powered OS for founders"}'
```

### 4. Run Frontend

```bash
npm install
npm run dev
```

Navigate to: `http://localhost:5173/validator`

---

## Troubleshooting

### "Supabase not configured"
- Check `.env` file exists
- Verify `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` are set
- Restart dev server

### "GEMINI_API_KEY not configured"
- Go to Supabase Dashboard → Settings → Edge Functions
- Add `GEMINI_API_KEY` environment variable
- Redeploy edge functions

### "Failed to create session"
- Check RLS policies are enabled
- Verify user is authenticated (or using anon key)
- Check database logs in Supabase dashboard

### "Agent timeout"
- Gemini API may be slow (normal for search grounding)
- Wait 60 seconds before assuming failure
- Check edge function logs for errors

### "No citations"
- Search grounding may not have found results
- Check `validator_runs.citations` is populated
- Verification will show warning but still create report

---

## Development Tips

### Mock Data
For faster development, use mock data instead of calling Gemini:

```typescript
// In validator-start/index.ts
const USE_MOCK_DATA = Deno.env.get('USE_MOCK_DATA') === 'true';

if (USE_MOCK_DATA) {
  const mockProfile = {
    one_liner: "AI OS for founders",
    problem_description: "Manual validation",
    // ... rest of mock data
  };
  // Skip AI call, use mock data
}
```

### Local Testing
Run edge functions locally:

```bash
supabase functions serve validator-start --env-file ./supabase/.env.local
```

### Database Inspection
View all sessions:

```sql
SELECT * FROM validator_sessions ORDER BY created_at DESC LIMIT 10;
```

View runs for a session:

```sql
SELECT agent_name, status, error_message, citations
FROM validator_runs
WHERE session_id = 'your-session-id'
ORDER BY created_at;
```

---

## Production Checklist

- [ ] Migration applied to production database
- [ ] Environment variables set in Supabase
- [ ] Edge functions deployed
- [ ] Frontend environment variables set
- [ ] RLS policies tested with real users
- [ ] End-to-end flow tested
- [ ] Error handling tested (empty input, timeouts, etc.)
- [ ] Citations verified (at least 2 per section)
- [ ] Verification logic tested (all sections present)
- [ ] Trace drawer displays correct data

---

## Performance Optimization

### Speed Up Generation (Current: 30-60s)

**Option 1:** Use gemini-2.0-flash-exp for all agents
- Current: Pro for Research, Competitor, Scoring, Composer
- Change to: Flash for everything
- Trade-off: Slightly lower quality, 2-3x faster

**Option 2:** Parallelize agents where possible
- Run Research + Competitor + Scoring in parallel (after Extractor)
- Requires refactoring edge function
- Reduces total time by ~50%

**Option 3:** Cache common market data
- Store TAM/SAM/SOM for known industries in database
- Skip ResearchAgent if cache hit
- Reduces time by ~10-15s

---

## Scaling Considerations

**Current Limits:**
- 1 validation at a time per user (sequential)
- ~60s per validation
- No rate limiting

**To Scale:**
1. Add queue system (BullMQ, Redis)
2. Implement rate limiting (max 5 validations/day per user)
3. Add webhooks for async completion notifications
4. Cache agent outputs (de-dupe similar requests)
5. Use database connection pooling

---

## Security Notes

**RLS Policies:**
- Users can only view their own sessions/reports
- Service role bypasses RLS (used in edge functions)
- Anon users must authenticate before creating sessions

**API Keys:**
- Gemini API key stored in Supabase (server-side only)
- Never expose service role key in frontend
- Use anon key for frontend requests

**Input Validation:**
- Max input length: 10,000 chars (prevent abuse)
- Rate limit: 5 validations/hour per user
- Content filtering: Block offensive/spam input

---

## Support Resources

**Documentation:**
- `/docs/validator-pipeline-README.md` - Full system overview
- `/types/validator.ts` - TypeScript type definitions

**Supabase Resources:**
- [Edge Functions Docs](https://supabase.com/docs/guides/functions)
- [RLS Guide](https://supabase.com/docs/guides/auth/row-level-security)
- [Database Migrations](https://supabase.com/docs/guides/cli/local-development#database-migrations)

**Gemini Resources:**
- [Gemini API Docs](https://ai.google.dev/docs)
- [Structured Output Guide](https://ai.google.dev/docs/structured_output)
- [Search Grounding](https://ai.google.dev/docs/grounding)

---

**Status:** ✅ Ready for deployment

**Last Updated:** February 4, 2026
