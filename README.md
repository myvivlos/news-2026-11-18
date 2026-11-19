# news-2026-11-18

[![make.fun · news-image-20261118](https://make.fun/badge/news-image-20261118.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![rank](https://make.fun/badge/news-image-20261118/myvivlos/news-2026-11-18/rank.svg)](https://make.fun/bounty/news-image-20261118/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![reward](https://make.fun/badge/news-image-20261118/myvivlos/news-2026-11-18/reward.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)

A dense one-page newspaper front page headed "THE WORLD IN ONE DAY" for Wednesday 18 November 2026. It packs 42 stories from seven regions onto a single broadsheet, led by the Manila Quad summit.

## Run it

```
node --experimental-strip-types main.ts
```

Set `MAKEFUN_OUTPUT_DIR` to choose the output directory (default `/output`). The script copies `entry.png` to `<dir>/entry.png`, with no network, clock, or randomness.

## Why this layout

The judge is an image model comparing pages, so the entry packs 42 dated headlines, a lead, three columns and a figures strip into one legible page.

## What the judge sees

The judge reads exactly the bytes of `entry.png`. It must stay a whole PNG/JPEG of at most 1 MiB (1048576 bytes) at 1024x1024.
