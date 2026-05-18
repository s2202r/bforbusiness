# bfor.business

Corporate website for **BUILTFORBUSINESS LLP** (LLPIN: ACQ-7687).

## Stack

Plain HTML + CSS. No build step. Vercel serves the static files directly.

## Local preview

Any static file server will do. Quickest:

```bash
npx serve .
# or
python3 -m http.server 4000
```

Open http://localhost:3000 (or :4000 for python).

## Deploy

```bash
# one-time, from the project root
npx vercel link
npx vercel --prod
```

Or push to the `main` branch — Vercel auto-deploys.

After the first deploy, attach the custom domain `bfor.business` from
the Vercel dashboard → Domains. Two DNS records:

| Type  | Name            | Value                |
|-------|-----------------|----------------------|
| A     | @               | 76.76.21.21          |
| CNAME | www             | cname.vercel-dns.com |

## Pages

- `/` — landing (hero, products, about, CTA)
- `/contact` — emails, phones, registered office
- `/privacy` — privacy policy (DPDP-aligned)
- `/terms` — terms of use
