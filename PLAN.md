# Portrait Alternatives

These are three competing designs for the character's default portrait.

## A — Freckled face

- Use 120 small visible circles arranged in two patches of 60 freckles across the cheeks, below the eyes.
- Give the character an open, cheerful smile.
- Use brown freckles against the golden head to create a playful look.

## B — Adventurer face

- Use transparent SVG image of a small explorer hat and put it on his head.
- Use transparent SVG image of a bandage and position it on one cheek.
- Give the character a confident expression to suggest a bold adventurer.

## C — Dreamy face

- Color the head with a linear gradient from soft lavender at the top to pale blue at the bottom.
- Use a Bézier curve to draw a gentle smile.
- Give the character a calm expression with relaxed eyes.

## Selection criterion

Choose the portrait whose expression and personality read most clearly
at a small size.

## Exploration status

- A: Explored on branch A. Added freckles across two cheek patches
  and an open smile and the friendly smile.
- B: Explored on branch B. Added adventurer hat and bandage SVG
  images with a smile.
- C: Explored on branch C. Added lavender to blue gradient shading,
  relaxed eyes, and a Bézier curve smile.

All three alternatives remain on their own branches. None has been
merged or chosen yet.

## Final decision

I chose branch C: the dreamy portrait with purple to blue gradient.My criterion was how clearly the expression and personality read at a
small size. C's simple features and color transition communicate
a calm personality clearly.

C was rebased onto main's refactor, and main was then forwarded
to C. The portrait is constructed inside buildFace(). A and B remain on their original branches as separate explorations.
