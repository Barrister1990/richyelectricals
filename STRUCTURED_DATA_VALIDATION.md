# Structured Data Validation Guide
## Richy Electrical Services

**Purpose:** Guide for validating all structured data (schema markup) to ensure it's error-free and eligible for rich snippets.

---

## 🔍 Validation Tools

### 1. Google Rich Results Test
**URL:** https://search.google.com/test/rich-results

**How to Use:**
1. Enter page URL or paste HTML code
2. Click "Test URL" or "Test Code"
3. Review results for errors and warnings
4. Fix any issues found
5. Re-test until all errors are resolved

**What to Check:**
- ✅ No errors
- ⚠️ Warnings (review but may not be critical)
- ✅ Eligible for rich results
- ✅ All required properties present

### 2. Schema.org Validator
**URL:** https://validator.schema.org/

**How to Use:**
1. Enter page URL
2. Click "Run Test"
3. Review structured data found
4. Check for errors and warnings
5. Verify all schema types are correct

### 3. Google Search Console
**URL:** https://search.google.com/search-console

**How to Use:**
1. Go to "Enhancements" section
2. Check "Rich Results" reports
3. Review any errors or warnings
4. Fix issues and request re-indexing

---

## 📋 Schema Types to Validate

### 1. Organization Schema
**Location:** `src/pages/_app.js`

**Required Properties:**
- ✅ @context
- ✅ @type: "Organization"
- ✅ name
- ✅ url
- ✅ logo
- ✅ contactPoint
- ✅ address (multiple)
- ✅ sameAs (social media)

**Validation Checklist:**
- [ ] No syntax errors
- [ ] All required fields present
- [ ] Logo URL is accessible
- [ ] Address format is correct
- [ ] Phone number format is correct

### 2. LocalBusiness Schema
**Location:** `src/components/Seo.js`

**Required Properties:**
- ✅ @context
- ✅ @type: "LocalBusiness"
- ✅ @id
- ✅ name
- ✅ url
- ✅ address
- ✅ geo (coordinates)
- ✅ areaServed
- ✅ contactPoint
- ✅ openingHoursSpecification
- ✅ priceRange
- ✅ hasOfferCatalog

**Validation Checklist:**
- [ ] No syntax errors
- [ ] All required fields present
- [ ] Coordinates are accurate
- [ ] Opening hours are correct
- [ ] Service catalog is complete

### 3. FAQPage Schema
**Location:** `src/components/FaqSchema.js`

**Required Properties:**
- ✅ @context
- ✅ @type: "FAQPage"
- ✅ mainEntity (array of Questions)

**Each Question Needs:**
- ✅ @type: "Question"
- ✅ name (question text)
- ✅ acceptedAnswer
  - ✅ @type: "Answer"
  - ✅ text (answer text)

**Validation Checklist:**
- [ ] No syntax errors
- [ ] All questions have answers
- [ ] Questions are properly formatted
- [ ] Answers are complete
- [ ] Eligible for FAQ rich snippets

### 4. HowTo Schema
**Location:** `src/components/HowToSchema.js`

**Required Properties:**
- ✅ @context
- ✅ @type: "HowTo"
- ✅ name
- ✅ description
- ✅ step (array)

**Each Step Needs:**
- ✅ @type: "HowToStep"
- ✅ name
- ✅ text

**Validation Checklist:**
- [ ] No syntax errors
- [ ] All steps are complete
- [ ] Steps are in correct order
- [ ] Eligible for HowTo rich snippets

### 5. VideoObject Schema
**Location:** `src/components/VideoSchema.js`

**Required Properties:**
- ✅ @context
- ✅ @type: "VideoObject"
- ✅ name
- ✅ description
- ✅ uploadDate
- ✅ thumbnailUrl
- ✅ contentUrl
- ✅ publisher

**Validation Checklist:**
- [ ] No syntax errors
- [ ] Video URLs are accessible
- [ ] Thumbnail URLs are accessible
- [ ] Dates are in ISO format
- [ ] Eligible for video rich snippets

### 6. Service Schema
**Location:** `src/components/ServiceSchemaMarkup.js`

**Required Properties:**
- ✅ @context
- ✅ @type: "Service"
- ✅ name
- ✅ description
- ✅ provider
- ✅ areaServed

**Validation Checklist:**
- [ ] No syntax errors
- [ ] Service name is clear
- [ ] Description is complete
- [ ] Provider information is correct
- [ ] Area served is accurate

### 7. BreadcrumbList Schema
**Location:** `src/components/BreadcrumbSchema.js`

**Required Properties:**
- ✅ @context
- ✅ @type: "BreadcrumbList"
- ✅ itemListElement (array)

**Each Item Needs:**
- ✅ @type: "ListItem"
- ✅ position
- ✅ name
- ✅ item (URL)

**Validation Checklist:**
- [ ] No syntax errors
- [ ] Breadcrumbs are in correct order
- [ ] URLs are correct
- [ ] Eligible for breadcrumb rich snippets

---

## ✅ Validation Checklist by Page

### Homepage
- [ ] Organization schema
- [ ] WebSite schema
- [ ] LocalBusiness schema
- [ ] FAQPage schema (3 questions)
- [ ] BreadcrumbList schema
- [ ] All schemas validate without errors

### Service Pages
- [ ] Service schema
- [ ] FAQPage schema (service FAQs)
- [ ] HowTo schema (process steps)
- [ ] LocalBusiness schema
- [ ] BreadcrumbList schema
- [ ] All schemas validate without errors

### FAQ Page
- [ ] FAQPage schema (all 30+ questions)
- [ ] LocalBusiness schema
- [ ] BreadcrumbList schema
- [ ] All schemas validate without errors

### Gallery Page
- [ ] VideoObject schema (all videos)
- [ ] LocalBusiness schema
- [ ] BreadcrumbList schema
- [ ] All schemas validate without errors

### Location Pages
- [ ] LocalBusiness schema (location-specific)
- [ ] BreadcrumbList schema
- [ ] All schemas validate without errors

### All Other Pages
- [ ] LocalBusiness schema
- [ ] BreadcrumbList schema
- [ ] All schemas validate without errors

---

## 🐛 Common Validation Errors

### 1. Missing Required Properties
**Error:** "Missing required property: name"
**Fix:** Ensure all required properties are included

### 2. Invalid Date Format
**Error:** "Invalid date format"
**Fix:** Use ISO 8601 format (YYYY-MM-DD or YYYY-MM-DDTHH:mm:ssZ)

### 3. Invalid URL Format
**Error:** "Invalid URL"
**Fix:** Ensure URLs are absolute (include https://)

### 4. Missing @context
**Error:** "Missing @context"
**Fix:** Always include "@context": "https://schema.org"

### 5. Invalid @type
**Error:** "Invalid @type"
**Fix:** Use valid Schema.org types

### 6. Nested Schema Errors
**Error:** "Invalid nested schema"
**Fix:** Ensure nested schemas follow correct structure

---

## 📊 Validation Schedule

### Before Launch
- [ ] Validate all pages
- [ ] Fix all errors
- [ ] Review all warnings
- [ ] Test rich results eligibility
- [ ] Document any known issues

### Monthly
- [ ] Spot check key pages
- [ ] Review Search Console reports
- [ ] Fix any new errors
- [ ] Update schemas if needed

### Quarterly
- [ ] Comprehensive validation of all pages
- [ ] Review all schema types
- [ ] Update documentation
- [ ] Test new schema features

---

## 🎯 Rich Results Eligibility

### FAQ Rich Snippets
**Requirements:**
- ✅ FAQPage schema
- ✅ Minimum 2 questions
- ✅ Questions and answers properly formatted
- ✅ No errors in validation

**Pages Eligible:**
- Homepage (3 questions)
- FAQ page (30+ questions)
- Service pages (2-3 questions each)

### HowTo Rich Snippets
**Requirements:**
- ✅ HowTo schema
- ✅ Minimum 2 steps
- ✅ Steps properly formatted
- ✅ No errors in validation

**Pages Eligible:**
- All 7 service pages

### Video Rich Snippets
**Requirements:**
- ✅ VideoObject schema
- ✅ Valid video URL
- ✅ Thumbnail URL
- ✅ Upload date
- ✅ No errors in validation

**Pages Eligible:**
- Gallery page (30+ videos)

### Local Business Rich Snippets
**Requirements:**
- ✅ LocalBusiness schema
- ✅ Complete business information
- ✅ Address and coordinates
- ✅ Opening hours
- ✅ No errors in validation

**Pages Eligible:**
- All pages (via Seo component)

---

## 🔧 Fixing Validation Errors

### Step 1: Identify the Error
- Use Google Rich Results Test
- Note the exact error message
- Identify which schema has the issue

### Step 2: Locate the Code
- Find the component/file with the schema
- Review the schema structure
- Check for typos or missing properties

### Step 3: Fix the Issue
- Add missing required properties
- Fix data format issues
- Correct URL/date formats
- Ensure proper nesting

### Step 4: Re-validate
- Test again with validation tools
- Ensure no new errors introduced
- Verify rich results eligibility

### Step 5: Deploy and Monitor
- Deploy fixed code
- Request re-indexing in Search Console
- Monitor for errors in Search Console

---

## 📝 Validation Best Practices

1. **Validate Before Deploying**
   - Always test schemas before going live
   - Fix errors immediately
   - Don't deploy with validation errors

2. **Use Multiple Tools**
   - Don't rely on just one validator
   - Cross-check with different tools
   - Use Search Console for real-world validation

3. **Document Known Issues**
   - Keep track of warnings
   - Document any intentional deviations
   - Note any limitations

4. **Regular Monitoring**
   - Check Search Console regularly
   - Monitor for new errors
   - Update schemas as needed

5. **Stay Updated**
   - Keep up with Schema.org changes
   - Update schemas for new features
   - Test new schema types

---

## ✅ Current Schema Status

### Implemented Schemas
- ✅ Organization
- ✅ WebSite
- ✅ SiteNavigationElement
- ✅ LocalBusiness
- ✅ BreadcrumbList
- ✅ FAQPage
- ✅ HowTo
- ✅ VideoObject
- ✅ Service

### Validation Status
- [ ] All schemas validated
- [ ] No errors found
- [ ] Warnings reviewed
- [ ] Rich results eligible

### Next Steps
1. Run validation on all pages
2. Fix any errors found
3. Document validation results
4. Set up monitoring

---

**Last Updated:** 2025-01-XX
**Next Review:** After initial validation

