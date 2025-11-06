# Google Search Console Setup Guide
## Richy Electrical Services

**Purpose:** Complete guide for setting up Google Search Console and submitting your sitemap.

---

## 🎯 What to Submit to Google

### Primary Sitemap URL
**Submit this URL to Google Search Console:**
```
https://www.richyelectricals.co.uk/sitemap.xml
```

This is your **main sitemap** that includes:
- ✅ Homepage
- ✅ All core pages (About, Services, Contact, FAQ, Gallery, etc.)
- ✅ All 7 service pages
- ✅ All 3 location pages (London, Walsall, Birmingham)
- ✅ Legal pages (Privacy Policy, Terms of Service)
- ✅ HTML Sitemap page

**Total Pages:** 20+ pages

---

## 📋 Step-by-Step Submission Guide

### Step 1: Access Google Search Console
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Sign in with your Google account
3. If you haven't added your property yet, click "Add Property"

### Step 2: Add Your Property
**Option A: Domain Property (Recommended)**
- Select "Domain" property type
- Enter: `richyelectricals.co.uk`
- This covers both www and non-www versions

**Option B: URL Prefix Property**
- Select "URL prefix" property type
- Enter: `https://www.richyelectricals.co.uk`
- You'll need to verify ownership

### Step 3: Verify Ownership
Choose one verification method:

**Method 1: HTML File Upload (Easiest)**
1. Download the HTML verification file
2. Upload it to your `public` folder
3. Access it at: `https://www.richyelectricals.co.uk/google[verification-code].html`
4. Click "Verify" in Search Console

**Method 2: HTML Tag**
1. Copy the meta tag provided
2. Add it to your `src/pages/_document.js` in the `<Head>` section
3. Click "Verify" in Search Console

**Method 3: DNS Record**
1. Add the TXT record to your domain's DNS
2. Wait for DNS propagation (can take up to 48 hours)
3. Click "Verify" in Search Console

### Step 4: Submit Your Sitemap
1. Once verified, go to **Sitemaps** in the left sidebar
2. In the "Add a new sitemap" field, enter:
   ```
   sitemap.xml
   ```
   (Don't include the full URL, just `sitemap.xml`)
3. Click **Submit**
4. Wait for Google to process (usually within a few hours)

---

## ✅ What Gets Submitted

### Main Sitemap (`sitemap.xml`)
**URL:** `https://www.richyelectricals.co.uk/sitemap.xml`

**Includes:**
- Homepage (priority: 1.0)
- About page (priority: 0.8)
- Services hub page (priority: 0.9)
- Contact page (priority: 0.8)
- FAQ page (priority: 0.7)
- Gallery page (priority: 0.7)
- Privacy Policy (priority: 0.6)
- Terms of Service (priority: 0.5)
- HTML Sitemap (priority: 0.5)
- **7 Service Pages** (priority: 0.7-0.9)
- **3 Location Pages** (priority: 0.8)

**Total:** 20+ URLs

---

## 🔍 After Submission

### What to Expect
1. **Processing Time:** Google usually processes sitemaps within a few hours to a few days
2. **Status:** Check the "Status" column in Search Console
   - ✅ Success: Sitemap processed successfully
   - ⚠️ Warning: Some URLs couldn't be processed (review warnings)
   - ❌ Error: Sitemap has errors (fix and resubmit)

### Monitor Your Sitemap
1. Go to **Sitemaps** section
2. Check the status of your sitemap
3. Review any errors or warnings
4. Check "Discovered URLs" count
5. Monitor indexing status

---

## 📊 Sitemap Details

### Current Sitemap Structure
```
sitemap.xml
├── Core Pages (6 pages)
├── Location Pages (3 pages)
├── Service Pages (7 pages)
└── Legal/Other Pages (3 pages)
```

### Priority Levels
- **1.0:** Homepage
- **0.9:** Services hub, Emergency Services
- **0.8:** About, Contact, Service pages, Location pages
- **0.7:** FAQ, Gallery, Some service pages
- **0.6:** Privacy Policy
- **0.5:** Terms, HTML Sitemap

### Change Frequency
- All pages: `monthly` (standard for business websites)

---

## 🐛 Common Issues & Fixes

### Issue 1: Sitemap Not Found
**Error:** "Sitemap could not be read"
**Fix:**
- Verify sitemap is accessible at: `https://www.richyelectricals.co.uk/sitemap.xml`
- Check file exists in `public` folder
- Ensure proper XML format

### Issue 2: URLs Not Indexed
**Error:** "URLs discovered but not indexed"
**Fix:**
- Check robots.txt doesn't block pages
- Ensure pages are accessible
- Request indexing for important pages manually

### Issue 3: Invalid URLs
**Error:** "Invalid URL format"
**Fix:**
- Ensure all URLs use `https://www.richyelectricals.co.uk`
- Check for trailing slashes consistency
- Verify no duplicate URLs

### Issue 4: Sitemap Too Large
**Error:** "Sitemap exceeds 50,000 URLs"
**Fix:**
- Not applicable (you have ~20 pages)
- If you add more pages later, split into multiple sitemaps

---

## 🔄 Updating Your Sitemap

### When to Regenerate
- After adding new pages
- After adding new services
- After adding new location pages
- Monthly (to update lastmod dates)

### How to Regenerate
1. Run the sitemap generation script:
   ```bash
   node scripts/generate-services-sitemap.js
   ```
2. The script will update `public/sitemap.xml`
3. Google will automatically re-crawl (usually within a few days)
4. Or manually request re-indexing in Search Console

### Automatic Updates
- Google automatically re-crawls sitemaps periodically
- You don't need to resubmit unless you change the sitemap structure
- Lastmod dates help Google know when to re-crawl

---

## 📈 Monitoring & Analytics

### Key Metrics to Track
1. **Index Coverage**
   - How many pages are indexed
   - Which pages are excluded and why

2. **Sitemap Status**
   - Number of URLs submitted
   - Number of URLs indexed
   - Any errors or warnings

3. **Search Performance**
   - Impressions
   - Clicks
   - Average position
   - CTR (Click-Through Rate)

### Regular Checks
- **Weekly:** Check for new errors or warnings
- **Monthly:** Review indexing status
- **Quarterly:** Comprehensive SEO audit

---

## ✅ Submission Checklist

### Before Submission
- [ ] Sitemap is accessible at `/sitemap.xml`
- [ ] All URLs use correct domain (`www.richyelectricals.co.uk`)
- [ ] No duplicate URLs
- [ ] All URLs are accessible (no 404 errors)
- [ ] robots.txt allows crawling
- [ ] Sitemap is valid XML format

### Submission Steps
- [ ] Verify property ownership in Search Console
- [ ] Navigate to Sitemaps section
- [ ] Enter `sitemap.xml` in the submission field
- [ ] Click Submit
- [ ] Wait for processing

### After Submission
- [ ] Check sitemap status (should show "Success")
- [ ] Review discovered URLs count
- [ ] Check for any errors or warnings
- [ ] Monitor indexing progress
- [ ] Request indexing for important pages if needed

---

## 🎯 Additional Sitemaps (Optional)

### If You Add More Content Later
You can create additional sitemaps:

1. **Image Sitemap** (`sitemap-images.xml`)
   - For better image indexing
   - Include all images with alt text

2. **Video Sitemap** (`sitemap-videos.xml`)
   - For video content
   - Include video metadata

3. **News Sitemap** (`sitemap-news.xml`)
   - If you add a blog/news section
   - For timely content

### Sitemap Index File
If you have multiple sitemaps, create a sitemap index:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://www.richyelectricals.co.uk/sitemap.xml</loc>
  </sitemap>
  <sitemap>
    <loc>https://www.richyelectricals.co.uk/sitemap-images.xml</loc>
  </sitemap>
</sitemapindex>
```

Then submit the index file instead.

---

## 📝 Quick Reference

### Sitemap URL to Submit
```
https://www.richyelectricals.co.uk/sitemap.xml
```

### In Search Console, Enter:
```
sitemap.xml
```

### Expected Results
- **URLs Discovered:** 20+
- **URLs Indexed:** Should match discovered (after processing)
- **Status:** Success

---

## 🔗 Useful Links

- [Google Search Console](https://search.google.com/search-console)
- [Sitemap Guidelines](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview)
- [Sitemap Best Practices](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)

---

**Last Updated:** 2025-01-XX
**Next Review:** After sitemap submission

