# Image assets

This site currently uses CSS gradient placeholders (see `components/hero.tsx`,
`app/about/page.tsx`) instead of real images, since none of the assets below
have been provided yet (see Section 5 of the revamp plan). Drop real files in
here using these filenames and swap the corresponding placeholder markup for
an `<Image />`:

| Filename                  | Used on        | Notes                                                                                                                     |
| ------------------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `logo.svg`                | Navbar, footer | Primary wordmark/icon. Also needs a square icon variant for `app/favicon.ico` and `app/icon.png`.                         |
| `hero.jpg`                | Homepage hero  | Static photo (office, team, code on screen).                                                                              |
| `og-image.jpg`            | Social sharing | Currently generated dynamically at `app/opengraph-image.tsx`; a real photo can replace that generated image if preferred. |
| `team/<name>.jpg`         | About page     | Founder/team headshots — see `lib/team.ts`.                                                                               |
| `case-studies/<slug>.jpg` | Case studies   | Optional per-project screenshots/diagrams — see `lib/case-studies.ts`.                                                    |
