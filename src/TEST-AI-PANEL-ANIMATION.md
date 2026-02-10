# AI Panel Animation - Visual Test Checklist ✅

**Test Time:** 5 minutes  
**Focus:** Verify smooth animations and UX behavior

---

## 🎬 Desktop Animation Tests

### Test 1: Panel Slides In from Right ✅

**Steps:**
1. Navigate to Validation Board
2. Click ✨ icon on Current Bet card
3. Watch panel animation

**Expected:**
```
✅ Panel starts off-screen (right edge)
✅ Panel slides in smoothly over 200ms
✅ Panel settles at right edge (420px wide)
✅ Main content stays in place (NO shift/reflow)
✅ Current Bet card shows emerald border + ring
✅ Panel shows "Current Bet" in header
✅ Loading spinner appears (1.5s)
✅ Suggestions load and display
```

**Visual Check:**
- Animation feels smooth (not jumpy)
- Panel doesn't "pop" into place
- Main content doesn't move
- Border appears immediately on click

---

### Test 2: Panel Content Updates (No Animation) ✅

**Steps:**
1. Panel already open (from Test 1)
2. Click ✨ icon on first Assumption card
3. Watch panel behavior

**Expected:**
```
✅ Panel STAYS in place (NO slide out/in)
✅ Content updates instantly
✅ Current Bet border → normal gray
✅ Assumption card border → emerald
✅ Panel header updates to "Assumption"
✅ Loading spinner appears (1.5s)
✅ New suggestions load
✅ NO animation/flicker
```

**Visual Check:**
- Panel doesn't move
- Border switches instantly
- No visual "jump" or reflow

---

### Test 3: Panel Slides Out to Right ✅

**Steps:**
1. Panel open (from Test 2)
2. Click ✕ button in panel header
3. Watch panel animation

**Expected:**
```
✅ Panel slides out smoothly over 200ms
✅ Panel disappears off-screen (right edge)
✅ Assumption card border → normal gray
✅ Main content stays in place (NO shift)
✅ Panel removed from DOM after animation
```

**Visual Check:**
- Reverse of opening animation
- Smooth slide (not jumpy)
- Border fades with panel

---

### Test 4: ESC Key Closes Panel ✅

**Steps:**
1. Click ✨ on Current Bet to open panel
2. Wait for panel to fully open
3. Press `ESC` key
4. Watch panel animation

**Expected:**
```
✅ Panel slides out smoothly (same as ✕ button)
✅ Duration: 200ms
✅ Border returns to normal
✅ ESC key works from any input focus
✅ No console errors
```

---

## 📱 Mobile Animation Tests

### Test 5: Bottom Sheet Slides Up ✅

**Steps:**
1. Resize browser to mobile width (< 768px)
2. Click ✨ icon on Current Bet card
3. Watch animation

**Expected:**
```
✅ Dark backdrop fades in (black/40 opacity)
✅ Bottom sheet slides up from bottom edge
✅ Duration: 250ms
✅ Sheet has rounded top corners
✅ Drag handle visible at top (gray bar)
✅ Max height: 85vh
✅ Content scrollable if longer
✅ Current Bet shows emerald border
```

**Visual Check:**
- Backdrop and sheet animate together
- Sheet feels "lifted" above backdrop
- Drag handle visible and centered

---

### Test 6: Backdrop Click Closes (Mobile Only) ✅

**Steps:**
1. Panel open (from Test 5)
2. Click on dark backdrop area
3. Watch animation

**Expected:**
```
✅ Bottom sheet slides down to bottom edge
✅ Backdrop fades out
✅ Duration: 250ms
✅ Sheet fully hidden below screen
✅ Border returns to normal
```

**Visual Check:**
- Sheet and backdrop animate together
- Smooth reverse of opening animation

---

## 🔄 Multiple Interactions

### Test 7: Rapid Click Handling ✅

**Steps:**
1. Click ✨ on Current Bet
2. Immediately click ✨ on Assumption (before animation finishes)
3. Watch behavior

**Expected:**
```
✅ Panel opens for Current Bet
✅ If clicked during animation, switches to Assumption smoothly
✅ No "double panel" or visual glitch
✅ Border updates correctly
✅ Content loads for correct card
```

---

### Test 8: Open → Close → Open Again ✅

**Steps:**
1. Click ✨ on Current Bet (panel opens)
2. Press ESC (panel closes)
3. Click ✨ on Current Bet again (panel reopens)

**Expected:**
```
✅ First open: Smooth slide in
✅ Close: Smooth slide out
✅ Second open: Same smooth slide in (no stutter)
✅ No animation lag or delay
✅ Suggestions regenerate (new 1.5s load)
```

---

## ⚡ Performance Tests

### Test 9: Animation Smoothness ✅

**During animation, watch for:**
```
✅ 60fps smooth motion (no stuttering)
✅ No frame drops
✅ Text stays crisp (no blur)
✅ Border transition smooth
✅ GPU-accelerated (check DevTools Performance tab)
```

**How to verify 60fps:**
- Open Chrome DevTools
- Performance tab → Record
- Click ✨ to open panel
- Stop recording
- Check frame rate graph (should be steady ~60fps)

---

### Test 10: No Layout Thrashing ✅

**Check Developer Tools:**
```
✅ Console: No warnings
✅ Performance: No layout recalculations during animation
✅ Memory: Clean mount/unmount (no leaks)
✅ Network: No unnecessary requests
```

---

## 🎨 Visual Polish Tests

### Test 11: Active State Highlight ✅

**Steps:**
1. Click ✨ on Pivot Log
2. Observe card border
3. Click ✨ on Current Bet
4. Observe border changes

**Expected:**
```
✅ Pivot Log: border-[#0d5f4e] + ring-2 ring-[#0d5f4e]/20
✅ Border appears crisp and visible
✅ Ring adds subtle depth/glow
✅ When switching: Pivot Log → gray, Current Bet → emerald
✅ Transition smooth (not instant flash)
```

---

### Test 12: Loading State ✅

**Steps:**
1. Click ✨ on any card
2. Watch loading phase (1.5s)

**Expected:**
```
✅ Panel opens immediately
✅ Header shows correct entity type
✅ Entity title visible
✅ Content area shows:
   - Spinning loader (animated)
   - "Generating AI suggestions..." text
   - Centered vertically
✅ Footer hidden during load
✅ No content "jump" when suggestions load
```

---

### Test 13: Populated Panel ✅

**Steps:**
1. Wait for suggestions to load
2. Scroll through panel content

**Expected:**
```
✅ 4 sections visible:
   - Summary (1-2 lines)
   - Suggested Improvements (3-5 with buttons)
   - Next Experiment Ideas (2-4 with steps)
   - Risks & Unknowns (1-3 warnings)
✅ Each suggestion has [+ Add to Card] button
✅ Each experiment has [+ Add as Experiment] button
✅ Footer shows [Regenerate] [Copy All]
✅ Scroll works smoothly
✅ Content doesn't overflow panel width
```

---

## 🧪 Edge Cases

### Test 14: Resize During Animation ✅

**Steps:**
1. Click ✨ to open panel (desktop)
2. During animation, resize to mobile width
3. Observe behavior

**Expected:**
```
✅ Panel adapts to new layout
✅ Desktop panel → Mobile bottom sheet
✅ Animation completes smoothly
✅ No visual glitch or overlap
```

---

### Test 15: Regenerate Button ✅

**Steps:**
1. Panel open with suggestions loaded
2. Click [Regenerate] button
3. Watch behavior

**Expected:**
```
✅ Loading state returns (spinner)
✅ Old suggestions disappear
✅ 1.5s delay
✅ New suggestions appear
✅ Panel stays open
✅ Active card stays highlighted
```

---

### Test 16: Copy All Button ✅

**Steps:**
1. Panel open with suggestions loaded
2. Click [Copy All] button
3. Paste into text editor

**Expected:**
```
✅ Clipboard contains formatted text:
   AI Suggestions for: [Card Title]
   
   Summary:
   [summary text]
   
   Improvements:
   1. [suggestion 1]
   2. [suggestion 2]
   ...
   
   Experiments:
   1. [experiment title]
      • [step 1]
      • [step 2]
   ...
   
   Risks & Unknowns:
   1. [risk 1]
   ...

✅ Text formatted for readability
✅ All sections included
```

---

## ✅ Final Verification

### Desktop Checklist

```
✅ Panel slides in from right (200ms)
✅ Panel slides out to right (200ms)
✅ Content updates without animation
✅ ESC key closes panel
✅ ✕ button closes panel
✅ Active card highlighted (emerald border)
✅ Main content stays in place
✅ 60fps smooth animation
✅ No console errors
```

### Mobile Checklist

```
✅ Bottom sheet slides up (250ms)
✅ Backdrop fades in (200ms)
✅ Drag handle visible
✅ Backdrop click closes panel
✅ ESC key closes panel
✅ ✕ button closes panel
✅ Max height: 85vh
✅ Content scrollable
✅ No console errors
```

### UX Checklist

```
✅ Click ✨ opens panel
✅ Click another ✨ updates panel (no close/reopen)
✅ Only ONE panel exists
✅ Active card always highlighted
✅ Loading state smooth
✅ Error state with retry
✅ [+ Add] buttons work (alert)
✅ [Regenerate] works
✅ [Copy All] works
```

---

## 🎯 Pass Criteria

**All tests must pass:**
- Animation smooth (60fps)
- No visual glitches or jumps
- ESC key works
- Mobile bottom sheet works
- Active highlight works
- No console errors

**Grade:**
- 16/16 tests passed: ✅ SHIP IT
- 14-15/16 tests passed: ⚠️ Fix minor issues
- <14/16 tests passed: ❌ Needs work

---

## 📝 Test Results

**Tester:** _____________________  
**Date:** _____________________  
**Browser:** _____________________  
**Device:** _____________________  

**Results:**

| Test | Pass | Notes |
|------|------|-------|
| 1. Desktop Slide In | ☐ | |
| 2. Content Update | ☐ | |
| 3. Desktop Slide Out | ☐ | |
| 4. ESC Key | ☐ | |
| 5. Mobile Slide Up | ☐ | |
| 6. Backdrop Click | ☐ | |
| 7. Rapid Click | ☐ | |
| 8. Open/Close/Open | ☐ | |
| 9. Smoothness | ☐ | |
| 10. No Thrashing | ☐ | |
| 11. Active State | ☐ | |
| 12. Loading State | ☐ | |
| 13. Populated Panel | ☐ | |
| 14. Resize | ☐ | |
| 15. Regenerate | ☐ | |
| 16. Copy All | ☐ | |

**Total:** ___/16 tests passed

**Overall Status:** ☐ PASS  ☐ FAIL

**Notes:**
_________________________________________________
_________________________________________________
_________________________________________________

---

**Ready to test!** 🧪

Run through all 16 tests and verify the AI panel animations work perfectly.
