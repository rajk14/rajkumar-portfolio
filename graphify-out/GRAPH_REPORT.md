# Graph Report - rajkumar-portfolio  (2026-04-25)

## Corpus Check
- 76 files · ~21,595 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 261 nodes · 211 edges · 8 communities detected
- Extraction: 97% EXTRACTED · 3% INFERRED · 0% AMBIGUOUS · INFERRED: 7 edges (avg confidence: 0.8)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 9|Community 9]]
- [[_COMMUNITY_Community 10|Community 10]]
- [[_COMMUNITY_Community 11|Community 11]]
- [[_COMMUNITY_Community 13|Community 13]]
- [[_COMMUNITY_Community 14|Community 14]]
- [[_COMMUNITY_Community 18|Community 18]]

## God Nodes (most connected - your core abstractions)
1. `installUiEventListeners()` - 5 edges
2. `logUiEvent()` - 4 edges
3. `ErrorBoundary` - 4 edges
4. `useFormField()` - 4 edges
5. `useComposition()` - 4 edges
6. `writeToLogFile()` - 3 edges
7. `sanitizeValue()` - 3 edges
8. `formatArg()` - 3 edges
9. `pruneBuffer()` - 3 edges
10. `elText()` - 3 edges

## Surprising Connections (you probably didn't know these)
- `MapView()` --calls--> `usePersistFn()`  [INFERRED]
  client\src\components\Map.tsx → client\src\hooks\usePersistFn.ts
- `Input()` --calls--> `useDialogComposition()`  [INFERRED]
  client\src\components\ui\input.tsx → client\src\components\ui\dialog.tsx
- `Textarea()` --calls--> `useDialogComposition()`  [INFERRED]
  client\src\components\ui\textarea.tsx → client\src\components\ui\dialog.tsx
- `Input()` --calls--> `useComposition()`  [INFERRED]
  client\src\components\ui\input.tsx → client\src\hooks\useComposition.ts
- `Toaster()` --calls--> `useTheme()`  [INFERRED]
  client\src\components\ui\sonner.tsx → client\src\contexts\ThemeContext.tsx

## Communities

### Community 0 - "Community 0"
Cohesion: 0.13
Nodes (6): useDialogComposition(), Input(), MapView(), Textarea(), useComposition(), usePersistFn()

### Community 1 - "Community 1"
Cohesion: 0.25
Nodes (13): compactText(), describeElement(), elText(), formatArg(), formatArgs(), getInputValueSafe(), installUiEventListeners(), isSensitiveField() (+5 more)

### Community 9 - "Community 9"
Cohesion: 0.33
Nodes (2): SidebarMenuButton(), useSidebar()

### Community 10 - "Community 10"
Cohesion: 0.47
Nodes (3): ensureLogDir(), trimLogFile(), writeToLogFile()

### Community 11 - "Community 11"
Cohesion: 0.53
Nodes (4): FormControl(), FormDescription(), FormMessage(), useFormField()

### Community 13 - "Community 13"
Cohesion: 0.4
Nodes (1): ErrorBoundary

### Community 14 - "Community 14"
Cohesion: 0.5
Nodes (2): CarouselNext(), useCarousel()

### Community 18 - "Community 18"
Cohesion: 0.4
Nodes (2): Toaster(), useTheme()

## Knowledge Gaps
- **Thin community `Community 9`** (7 nodes): `sidebar.tsx`, `cn()`, `handleKeyDown()`, `SidebarMenu()`, `SidebarMenuButton()`, `SidebarMenuItem()`, `useSidebar()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 13`** (5 nodes): `ErrorBoundary.tsx`, `ErrorBoundary`, `.constructor()`, `.getDerivedStateFromError()`, `.render()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 14`** (5 nodes): `Carousel()`, `CarouselNext()`, `cn()`, `useCarousel()`, `carousel.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 18`** (5 nodes): `sonner.tsx`, `ThemeContext.tsx`, `Toaster()`, `ThemeProvider()`, `useTheme()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Are the 3 inferred relationships involving `useComposition()` (e.g. with `Input()` and `Textarea()`) actually correct?**
  _`useComposition()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.13 - nodes in this community are weakly interconnected._