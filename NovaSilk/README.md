# NovaSilk Wellness - Luxury Spa Booking Website

A modern, responsive spa treatment booking website built with HTML5, CSS3, and vanilla JavaScript.

## Features

✨ **4 Responsive Pages:**
- Homepage with service showcase and testimonials
- Services page with detailed treatment listings and packages
- Online booking system with date/time selection
- Contact page with team information and location map

📱 **Responsive Design:**
- Mobile-first approach
- Works perfectly on all devices (desktop, tablet, mobile)
- Hamburger navigation menu for mobile devices
- Optimized media queries

🛒 **Online Booking System:**
- Easy-to-use appointment booking form
- Service selection with pricing
- Date and time picker
- Therapist preference selection
- Form validation

📧 **Communication Service:**
- Contact form with email functionality
- Booking confirmation emails (via FormSubmit.co)
- Automatic customer notifications

🎨 **Modern UI/UX:**
- Luxury color scheme (gold, brown, cream)
- Smooth animations and transitions
- Card-based layouts
- Professional typography

⚡ **Performance Optimized:**
- Lazy loading for images
- Optimized CSS and JavaScript
- Fast load times
- Lighthouse-friendly

## Quick Start

### 1. Setup (No Installation Required)
This is a static website. Simply extract files and open `index.html` in your browser.

### 2. Email Configuration

The website uses **FormSubmit.co** (free service) for handling contact and booking forms.

**Setup Steps:**
1. Open `js/script.js`
2. Find the line with `https://formsubmit.co/your-email@example.com` (appears twice)
3. Replace `your-email@example.com` with your actual email address
4. Test by submitting a contact form
5. FormSubmit will send you a verification email - **click the link to activate**
6. Once verified, all form submissions will be sent to your email

**Alternative Email Solutions:**
- **EmailJS:** Sign up at emailjs.com (frontend only, no backend needed)
- **Netlify Forms:** Use when hosting on Netlify
- **Backend Service:** Set up your own PHP/Node.js backend

### 3. Customization

**Update Business Information:**
- Edit footer in all HTML files with your actual business details
- Update contact information (phone, address, hours)
- Change social media links

**Update Pricing & Services:**
- Modify service cards in `index.html` and `services.html`
- Update package offerings in `services.html`
- Adjust prices in `book.html` select options

**Brand Colors:**
Edit CSS variables in `css/styles.css`:
```css
:root {
  --primary-color: #8b6b5c;      /* Primary brown */
  --secondary-color: #d4a574;    /* Gold accent */
  --accent-color: #e8d5c4;       /* Light cream */
  --dark-color: #2c2416;         /* Dark text */
  --light-color: #f5f1ed;        /* Light background */
}
```

## File Structure

```
NovaSilk/
├── index.html              # Homepage
├── services.html           # Services listing
├── book.html              # Booking/Appointments
├── contact.html           # Contact & About
├── css/
│   └── styles.css         # Main stylesheet
├── js/
│   └── script.js          # JavaScript functionality
└── assets/               # For future images
```

## JavaScript Features

✅ **Mobile Menu Toggle** - Hamburger menu functionality
✅ **Form Validation** - Email and required field validation
✅ **Active Navigation** - Highlights current page in menu
✅ **Smooth Scrolling** - Anchor link smooth navigation
✅ **Lazy Loading** - Optimized image loading
✅ **Service Filtering** - Category-based service display (optional)

## Responsive Breakpoints

- **Desktop:** 1200px and above
- **Tablet:** 768px - 1199px
- **Mobile:** Below 768px
- **Small Mobile:** Below 480px

## Image Sources

All images are from **Unsplash.com** (Creative Commons License):
- Hero images: Professional spa and wellness photos
- Service cards: High-quality treatment photography
- Team avatars: Can be replaced with actual team photos

**How to Replace Images:**
1. Find images on Unsplash.com or similar free stock photo sites
2. Update image URLs in HTML files
3. For local images, upload to `assets/images/` folder

## Accessibility Features

- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images
- Form labels with inputs
- Keyboard navigation support
- Color contrast compliance
- ARIA attributes where needed

## Performance Optimization

**Current Features:**
- Minified CSS for production use
- Lazy loading for images
- No heavy dependencies
- Optimized font loading
- Mobile-first CSS
- Efficient JavaScript

**Further Optimization:**
- Serve images in WebP format
- Enable gzip compression on server
- Use CDN for static assets
- Implement service workers for offline support

## Browser Support

- Chrome/Edge: ✅ Latest 2 versions
- Firefox: ✅ Latest 2 versions
- Safari: ✅ Latest 2 versions
- Mobile browsers: ✅ iOS Safari, Chrome Mobile

## Hosting Recommendations

### Free Hosting Options:
1. **Netlify** (Recommended)
   - Free tier with custom domain
   - Built-in form handling
   - Continuous deployment from Git

2. **GitHub Pages**
   - Free static hosting
   - Version control
   - Custom domain support

3. **Vercel**
   - Optimized for static sites
   - Excellent performance
   - Free tier available

4. **Firebase Hosting**
   - Google's hosting platform
   - Free tier with generous limits
   - Global CDN

### Paid Hosting:
- **Bluehost, DreamHost, HostGator** - Traditional web hosting
- **AWS S3** - Cloud storage and hosting
- **DigitalOcean** - VPS and app hosting

## Deployment Instructions

### Netlify (Recommended):
1. Go to `netlify.com` and create an account
2. Drag and drop the `NovaSilk` folder
3. Site is live instantly
4. Set up custom domain and email forms

### GitHub Pages:
1. Create repository: `username.github.io`
2. Push NovaSilk files to repository
3. Site available at `https://username.github.io`
4. Use third-party for form handling

### FTP Upload:
1. Get FTP credentials from hosting provider
2. Use FileZilla or similar FTP client
3. Upload NovaSilk folder contents to `public_html`
4. Access via your domain

## Testing Checklist

- [ ] Test on mobile devices (iOS and Android)
- [ ] Test on tablets
- [ ] Test all navigation links
- [ ] Test contact form submission
- [ ] Test booking form validation
- [ ] Test email functionality
- [ ] Test on different browsers
- [ ] Check Lighthouse performance score
- [ ] Verify all images load correctly
- [ ] Test with slow internet connection

## Lighthouse Performance Target

Target scores:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 90+
- SEO: 95+

## Customization Tips

1. **Add Video:** Insert spa promotional video on homepage
2. **Customer Reviews:** Add review section with ratings
3. **Blog:** Create blog page for wellness tips
4. **Gallery:** Add service gallery with before/after
5. **Membership:** Implement membership/loyalty programs
6. **Payment Integration:** Add Stripe for online payments
7. **Appointment Reminders:** Integrate SMS reminders
8. **Live Chat:** Add customer support chat feature

## Security Considerations

- Use HTTPS for all pages
- Validate all form inputs (server-side)
- Never store sensitive data in frontend code
- Use POST method for form submissions
- Implement CORS properly
- Keep dependencies updated

## Troubleshooting

**Forms not sending emails:**
- Verify email address in `script.js`
- Check FormSubmit.co email verification
- Check spam folder
- Use browser console (F12) to check for errors

**Images not loading:**
- Verify image URLs are correct
- Check internet connection
- Ensure file paths are relative
- Use absolute URLs for external images

**Mobile menu not working:**
- Clear browser cache
- Test in different browser
- Check JavaScript is enabled
- Verify hamburger element is visible

**Performance issues:**
- Compress images
- Enable gzip compression
- Use CDN for assets
- Minimize CSS and JavaScript

## Future Enhancement Ideas

- CMS integration (WordPress, Contentful)
- Online payment processing
- Customer accounts and booking history
- Admin dashboard for management
- Email marketing integration
- Social media integration
- Multi-language support
- Dark mode toggle
- Advanced calendar with availability
- Membership programs

## Credits

- Design inspired by luxury spa websites
- Images from Unsplash.com
- Google Fonts for typography
- FormSubmit.co for email service
- Built with pure HTML5, CSS3, and JavaScript

## License

This project is created for educational purposes. Feel free to customize and use for your spa business.

## Support & Contact

For issues or questions about the website:
- Email: hello@novasilk.com
- Phone: (555) 123-4567
- Address: 123 Wellness Street, Beauty City, SPA 12345

---

**Last Updated:** April 2026
**Version:** 1.0
**Author:** NovaSilk Wellness Team
