# Aurelion Global Corporate React Website

A responsive corporate-group website created with React + Vite.

## Included
- Premium corporate UI/UX
- Responsive mobile/tablet/desktop layout
- Multiple business/company showcase cards
- Project portfolio with category filtering
- Image gallery
- Contact enquiry form with success state
- Google Maps embed
- WhatsApp click-to-chat button
- Click-to-call and email links
- Social/website-ready footer
- SEO meta title, description, keywords and Open Graph basics
- Fast-loading lazy-loaded gallery images
- HTTPS-ready static deployment
- Cross-browser-friendly CSS
- Accessible navigation labels and form controls

## Run locally

```bash
npm install
npm run dev
```

Open the local URL shown by Vite.

## Production build

```bash
npm run build
npm run preview
```

## Customize before production
1. Replace the demo Unsplash image URLs in `src/main.jsx` with your own optimized WebP/JPG images.
2. Replace the placeholder phone number, email and Hyderabad address.
3. Replace the Google Maps query with the exact office location.
4. Replace the video modal with a YouTube/Vimeo embed.
5. Connect the enquiry form to Formspree, EmailJS, a server/API, or your CRM.
6. Add Google Analytics/Tag Manager if required.
7. Add your final Privacy Policy and Terms pages.
8. Update the favicon and social sharing image.


## Phani Bhushan Hospitals entry transition
The Explore our hospitals button and hospital-card arrow open a full-screen ivory-and-gold introduction. Select **Enter Phani Bhushan Hospitals** to animate the gold curtains open and then navigate to the hospital website. **Skip intro** navigates directly.

Configure the destination before deployment by creating a `.env` file in the project root:

```env
VITE_PHANI_HOSPITAL_URL=https://your-live-phani-bhushan-hospitals-url
```

For Vercel, add `VITE_PHANI_HOSPITAL_URL` under Project Settings → Environment Variables, then redeploy. Replace the fallback URL in `src/main.jsx` with the actual deployed hospital URL before production if no environment variable is set.


## Watch overview video
The Watch overview button plays `public/aurovila.mp4` directly in an in-page video player. Replace that file to update the video; keep the filename the same or update the video source in `src/main.jsx`.
