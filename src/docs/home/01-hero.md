# Hero Section Wireframe

## Layout Structure

```
┌────────────────────────────────────────────────────────────────┐
│                                                                │
│                         ROW 1: HEADLINE                        │
│                                                                │
│                  Start with a conversation.                    │
│                     End with clarity.                          │
│                                                                │
│          From idea to execution, guided by AI.                 │
│                                                                │
└────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────┐
│                                                                │
│                    ROW 2: CHAT WINDOW (Full Width)             │
│                                                                │
│  ┌──────────────────────────────────────────────────────────┐ │
│  │                                                          │ │
│  │  System Message (Top Bar):                              │ │
│  │  "Describe your startup idea, problem, or goal.         │ │
│  │   I'll help turn it into a clear plan."                 │ │
│  │                                                          │ │
│  ├──────────────────────────────────────────────────────────┤ │
│  │                                                          │ │
│  │  ┌────────────────────────────────────────────────────┐ │ │
│  │  │                                                    │ │ │
│  │  │  I'm thinking about building...                   │ │ │
│  │  │  [Blinking cursor]                                │ │ │
│  │  │                                                    │ │ │
│  │  │                                                    │ │ │
│  │  └────────────────────────────────────────────────────┘ │ │
│  │                                                          │ │
│  ├──────────────────────────────────────────────────────────┤ │
│  │                                                          │ │
│  │  Press Enter to start     [Start Conversation Button]   │ │
│  │                                                          │ │
│  ├──────────────────────────────────────────────────────────┤ │
│  │                                                          │ │
│  │  AI suggests. You decide. • No credit card required.    │ │
│  │                                                          │ │
│  └──────────────────────────────────────────────────────────┘ │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

## Desktop Layout Detail

### Row 1: Centered Headline
```
Padding: 80px top, 48px bottom
Max-width: 1200px centered
Text-align: center

┌────────────────────────────────────────┐
│                                        │
│    Start with a conversation.         │
│         End with clarity.              │
│                                        │
│   From idea to execution, guided       │
│            by AI.                      │
│                                        │
└────────────────────────────────────────┘

Typography:
- Main headline: 48px serif, near-black
- Supporting: 18px sans-serif, charcoal
```

### Row 2: Full-Width Chat Container
```
Padding: 48px top, 96px bottom
Max-width: 800px centered
Background: White card with hairline border

┌──────────────────────────────────────────┐
│ System Message Bar (canvas bg)           │
│ "Describe your startup idea..."          │
├──────────────────────────────────────────┤
│                                          │
│ Input Area (large textarea)              │
│ "I'm thinking about building..."         │
│ [Cursor blinks here]                     │
│                                          │
├──────────────────────────────────────────┤
│ Meta text          [Primary Button]     │
├──────────────────────────────────────────┤
│ Trust note (small, centered)             │
└──────────────────────────────────────────┘
```

---

## Mobile Layout

```
┌──────────────────────┐
│                      │
│  Start with a        │
│  conversation.       │
│  End with clarity.   │
│                      │
│  From idea to        │
│  execution,          │
│  guided by AI.       │
│                      │
├──────────────────────┤
│                      │
│  System Message      │
│  "Describe your..."  │
│                      │
├──────────────────────┤
│                      │
│  Input Field         │
│  (4 lines)           │
│  [Cursor]            │
│                      │
├──────────────────────┤
│                      │
│  Press Enter         │
│  [Start Button]      │
│                      │
├──────────────────────┤
│                      │
│  AI suggests. You    │
│  decide. • No card.  │
│                      │
└──────────────────────┘
```

---

## Component Breakdown

### 1. Row 1 Container
```
<Section padding="80px 0 48px">
  <Container maxWidth="1200px" textAlign="center">
    <Headline>Start with a conversation. End with clarity.</Headline>
    <Supporting>From idea to execution, guided by AI.</Supporting>
  </Container>
</Section>
```

### 2. Row 2 Container
```
<Section padding="48px 0 96px" background="canvas">
  <Container maxWidth="800px">
    <ChatWindow>
      <SystemMessage />
      <InputArea />
      <ActionBar />
      <TrustNote />
    </ChatWindow>
  </Container>
</Section>
```

---

## Spacing Specifications

### Row 1
- Top padding: 80px
- Bottom padding: 48px
- Headline margin-bottom: 24px
- Max-width: 1200px

### Row 2
- Top padding: 48px
- Bottom padding: 96px
- Chat card max-width: 800px
- Card padding: 32px

### Chat Window Internal
- System message: 24px padding
- Input area: 32px padding
- Action bar: 24px padding-top, 24px margin-top (with border)
- Trust note: 24px padding

---

## Color Specifications

```css
/* Backgrounds */
Row 1: #F7F6F3 (canvas)
Row 2: #F7F6F3 (canvas)
Chat Card: #FFFFFF (white)
System Message: #F7F6F3 (canvas)

/* Text */
Headline: #1F1F1F (near-black)
Supporting: #5A5A5A (charcoal)
System Message: #5A5A5A (charcoal)
Input Text: #1F1F1F (near-black)
Placeholder: #888888 (light grey)
Trust Note: #888888 (light grey)

/* Accents */
Cursor: #0D5F4E (emerald)
Border: #E6E4E1 (hairline)
Button Active: #0D5F4E (emerald)
```

---

## Typography Scale

```css
/* Row 1 */
Headline: 48px Georgia serif, 400 weight, 1.2 line-height
Supporting: 18px Sans-serif, 400 weight, 1.7 line-height

/* Chat Window */
System Message: 16px Sans-serif, 1.6 line-height
Input Text: 16px Sans-serif, 1.6 line-height
Meta Text: 13px Sans-serif, 0.02em letter-spacing
Trust Note: 13px Sans-serif, 0.02em letter-spacing
```

---

## Visual Flow

```
User lands on page
    ↓
Sees centered headline (Row 1)
"Start with a conversation. End with clarity."
    ↓
Reads supporting copy
"From idea to execution, guided by AI."
    ↓
Scrolls down or eyes move down
    ↓
Sees large chat window (Row 2)
    ↓
Reads system message
"Describe your startup idea..."
    ↓
Sees blinking cursor in input
    ↓
Begins typing
```

---

## Key Features

### Row 1 (Headline)
- [x] Centered alignment
- [x] Large serif headline
- [x] Clean supporting copy
- [x] No competing elements
- [x] Generous whitespace

### Row 2 (Chat Window)
- [x] Full-width container
- [x] Centered card (max 800px)
- [x] System message at top
- [x] Large input area (auto-focus)
- [x] Blinking cursor
- [x] Enter to submit
- [x] Trust note at bottom

---

## Interaction States

### Chat Input
```
Default:     Border #E6E4E1, no cursor
Focused:     Border #0D5F4E, cursor blinks
Typing:      Cursor hidden, text appears
Empty:       Placeholder visible, cursor blinks when focused
With Text:   Button enabled (emerald)
```

### Submit Button
```
Disabled:    Grey background, grey text
Enabled:     Emerald background, white text
Hover:       Darker emerald
```

---

## Success Criteria

User should understand within 3 seconds:
1. ✅ This is a conversation-based system
2. ✅ I should describe my startup idea
3. ✅ I can start immediately (cursor is ready)
4. ✅ This leads to clarity and structure

---

## Implementation Checklist

- [ ] Row 1: Headline section (centered, canvas bg)
- [ ] Row 2: Chat window section (full-width container)
- [ ] ChatWindow component (with system message)
- [ ] Auto-focus on desktop (500ms delay)
- [ ] Blinking cursor animation
- [ ] Enter key submit
- [ ] Button enable/disable logic
- [ ] Mobile responsive (stack vertically)

---

## File Structure

```
/components/home-v6/
  ├── ChatWindow.tsx (already exists)
  └── Sections.tsx (update HeroSection)

/styles/
  └── bcg-tokens.css (blink animation already exists)
```
