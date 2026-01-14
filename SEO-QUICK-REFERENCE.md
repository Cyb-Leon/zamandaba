# SEO Quick Reference Guide
**For www.zamandaba.co.za**

---

## 🚀 When Deploying Updates

### 1. Build Your Site
```bash
npm run build
```

### 2. Upload to cPanel
- Go to cPanel → File Manager
- Navigate to `public_html`
- Upload contents from: `dist/zamandaba/browser/`
- **Important:** Enable "Show Hidden Files" to see `.htaccess`

### 3. After Upload
- Clear browser cache
- Test: https://www.zamandaba.co.za
- Test: https://www.zamandaba.co.za/hackathon

---

## 📝 When Adding New Pages

### 1. Create the Component
```bash
ng generate component my-new-page
```

### 2. Add Route
**File:** `src/app/app.routes.ts`
```typescript
{
  path: 'new-page',
  component: NewPageComponent
}
```

### 3. Add SEO Method
**File:** `src/app/services/seo.service.ts`
```typescript
setNewPageSeo(): void {
  this.updateSeoTags({
    title: 'Page Title',
    description: 'Page description under 160 characters',
    keywords: 'relevant, keywords, here',
    url: '/new-page'
  });
}
```

### 4. Call SEO in Component
**File:** `src/app/new-page/new-page.ts`
```typescript
ngOnInit(): void {
  this.seoService.setNewPageSeo();
}
```

### 5. Update Sitemap
**File:** `public/sitemap.xml`
```xml
<url>
  <loc>https://www.zamandaba.co.za/new-page</loc>
  <lastmod>2026-01-15</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.7</priority>
</url>
```

### 6. Submit to Google
- Google Search Console → Sitemaps
- Remove old sitemap, add new one

---

## 🔧 Common SEO Updates

### Update Your Job Title/Description
**File:** `src/index.html` (lines 5-12)
```html
<title>Your Name | New Title | Location</title>
<meta name="description" content="New description...">
```

### Add New Skills
**File:** `src/index.html` (lines 76-91)
```json
"knowsAbout": [
  "Angular",
  "New Skill Here"
]
```

### Update Social Links
**File:** `src/index.html` (lines 71-75)
```json
"sameAs": [
  "https://new-social-link.com"
]
```

---

## 🐛 Troubleshooting

### Favicon Not Showing
1. Check file exists: `public/favicon.ico`
2. Use absolute URL in `<link>` tags
3. Clear browser cache (Ctrl+Shift+Delete)
4. Wait 24-48 hours for Google to re-crawl

### Routes Not Working (404 Errors)
1. Verify `.htaccess` uploaded to cPanel
2. Check Apache mod_rewrite enabled (usually is on cPanel)
3. Test URL manually: `https://www.zamandaba.co.za/hackathon`

### Not Ranking on Google
1. Submit sitemap in Google Search Console
2. Request indexing for specific pages
3. Wait 2-4 weeks for initial indexing
4. Check for crawl errors in Search Console

### Meta Tags Not Updating
1. Clear browser cache
2. Check SEO service called in `ngOnInit()`
3. Test with: View Source (Ctrl+U)

---

## 📊 Monthly SEO Checklist

- [ ] Check Google Search Console for errors
- [ ] Review search performance (clicks, impressions)
- [ ] Add new projects to portfolio
- [ ] Update `lastmod` in sitemap.xml
- [ ] Check site speed (https://pagespeed.web.dev)
- [ ] Verify all social links working

---

## 🎯 SEO Don'ts

❌ **Don't** use relative URLs for favicon  
❌ **Don't** forget to update sitemap when adding pages  
❌ **Don't** use duplicate meta descriptions  
❌ **Don't** stuff keywords unnaturally  
❌ **Don't** forget to test on mobile  
❌ **Don't** use HTTP (always HTTPS)  

## ✅ SEO Do's

✅ **Do** use absolute URLs (https://www.zamandaba.co.za/...)  
✅ **Do** keep descriptions under 160 characters  
✅ **Do** update content regularly  
✅ **Do** compress images before uploading  
✅ **Do** use semantic HTML tags  
✅ **Do** test in Google's Rich Results Test  

---

## 📞 Quick Commands

```bash
# Start dev server
npm start

# Build for production
npm run build

# Check for linter errors
ng lint

# Run tests
npm test
```

---

## 🔗 Important URLs

| Purpose | URL |
|---------|-----|
| **Your Site** | https://www.zamandaba.co.za |
| **Sitemap** | https://www.zamandaba.co.za/sitemap.xml |
| **Robots** | https://www.zamandaba.co.za/robots.txt |
| **Google Console** | https://search.google.com/search-console |
| **Bing Webmaster** | https://www.bing.com/webmasters |
| **Rich Results Test** | https://search.google.com/test/rich-results |
| **PageSpeed Insights** | https://pagespeed.web.dev |

---

**Remember:** SEO takes time. First page rankings can take 2-8 weeks for your name, longer for competitive keywords.

**Questions?** Review the full `SEO-DOCUMENTATION.md` file for detailed explanations.
