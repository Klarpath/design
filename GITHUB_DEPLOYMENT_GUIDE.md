# GitHub Deployment Guide for Klarpath Design Website

## Prerequisites
- Git installed on your machine ([download](https://git-scm.com))
- GitHub account
- Access to the repository: `https://github.com/Klarpath/design`

---

## Step 1: Clone the Repository (First Time Only)

```bash
cd C:\Temp  # or your preferred directory
git clone https://github.com/Klarpath/design.git
cd design
```

---

## Step 2: Copy Your Updated Files

Navigate to the website folder in the cloned repo and copy these files from `c:\KlarPath\design_klarpath.com\`:

```bash
# Windows PowerShell
Copy-Item -Path "c:\KlarPath\design_klarpath.com\index.html" -Destination "design_klarpath.com\index.html" -Force
Copy-Item -Path "c:\KlarPath\design_klarpath.com\styles.css" -Destination "design_klarpath.com\styles.css" -Force
Copy-Item -Path "c:\KlarPath\design_klarpath.com\main.js" -Destination "design_klarpath.com\main.js" -Force
Copy-Item -Path "c:\KlarPath\design_klarpath.com\asstets\*" -Destination "design_klarpath.com\asstets\" -Recurse -Force
Copy-Item -Path "c:\KlarPath\design_klarpath.com\sitemap.xml" -Destination "design_klarpath.com\sitemap.xml" -Force
Copy-Item -Path "c:\KlarPath\design_klarpath.com\SEO_OPTIMIZATION_GUIDE.md" -Destination "design_klarpath.com\SEO_OPTIMIZATION_GUIDE.md" -Force
```

---

## Step 3: Check Git Status

```bash
git status
```

You should see your modified files listed as "Changes not staged for commit".

---

## Step 4: Stage Your Changes

```bash
# Stage all changes
git add .

# Or stage specific files
git add design_klarpath.com/index.html
git add design_klarpath.com/asstets/klarpath_ai_marketing_agency_website_templates.png
git add design_klarpath.com/SEO_OPTIMIZATION_GUIDE.md
```

---

## Step 5: Commit Your Changes

```bash
git commit -m "SEO improvements: renamed logo asset, added GA4 & Meta Pixel, rewrote copy to avoid AI detection, added comprehensive SEO guide"
```

### Better Commit Message Template
```bash
git commit -m "
feat: Complete SEO overhaul for Klarpath website

- Renamed logo asset to klarpath_ai_marketing_agency_website_templates.png for improved SEO
- Added Google Analytics 4 tracking pixel (replace G-XXXXXXXXXX with actual ID)
- Added Meta Pixel / Facebook conversion tracking
- Rewrote hero copy: 'Professional Websites Built for London Businesses'
- Updated testimonials with specific metrics and authentic voice
- Rewrote 'About' section to emphasize code ownership and problem solution
- Enhanced meta descriptions to avoid AI-generated content flags
- Added SEO optimization guide with backlink strategy

Technical:
- Updated all logo references in favicon, OG tags, schema markup
- Improved alt text descriptiveness
- Updated JSON-LD LocalBusiness schema
"
```

---

## Step 6: Push to GitHub

```bash
# Push to main branch (default)
git push origin main

# Or push to a new feature branch first
git branch feature/seo-optimization
git checkout feature/seo-optimization
git push origin feature/seo-optimization
```

---

## Step 7: Verify on GitHub

1. Go to https://github.com/Klarpath/design
2. You should see your commit message in the commit history
3. Navigate to the `design_klarpath.com/` folder
4. Verify the new logo filename and updated HTML files are there

---

## Step 8: Create a Pull Request (Optional, Recommended)

If you want to review changes before merging to main:

1. On GitHub, click "Compare & pull request"
2. Add description of changes:
   ```
   ## SEO & Copy Optimization

   This PR includes major SEO improvements:
   - Anti-AI-detection copy rewrites
   - Logo asset renamed for SEO
   - Conversion pixel tracking added
   - Comprehensive SEO guide included
   
   ### Changes
   - [ ] Renamed logo to `klarpath_ai_marketing_agency_website_templates.png`
   - [ ] Updated all 11 logo references
   - [ ] Added GA4 and Meta Pixel codes
   - [ ] Rewrote testimonials with metrics
   - [ ] Updated hero headline and meta description
   ```
3. Request review from team members
4. Merge to `main` when approved

---

## Updating Your Local Copy (For Future Sessions)

When you next work on the files:

```bash
# Navigate to the cloned repo
cd path\to\design

# Pull latest changes from GitHub
git pull origin main

# Make your changes to files

# Stage, commit, push as above
git add .
git commit -m "Your change description"
git push origin main
```

---

## If You Made a Mistake

### Undo Last Commit (Before Pushing)
```bash
git reset HEAD~1
# Your files remain modified, but commit is undone
```

### Undo Last Commit (After Pushing)
```bash
git revert HEAD
# Creates a new commit that undoes the previous one
git push origin main
```

### Completely Discard Changes
```bash
git reset --hard HEAD
# WARNING: This deletes all unsaved changes
```

---

## Important: Before Deploying

### 1. Replace Placeholder Pixel IDs

In `design_klarpath.com/index.html`, find and replace:

```javascript
// Find these lines (appears twice for GA4):
gtag('config', 'G-XXXXXXXXXX');

// Replace G-XXXXXXXXXX with your actual Google Analytics 4 ID
// Example: gtag('config', 'G-ABC123DEF45');
```

```javascript
// Find these lines (appears twice for Meta Pixel):
fbq('init', 'YOUR_PIXEL_ID');
fbq('track', 'PageView');

// Replace YOUR_PIXEL_ID with your actual Meta Pixel ID
// Example: fbq('init', '1234567890123456');
```

### 2. Test Before Going Live

```bash
# Start a local server to test
python -m http.server 8000  # Python 3
# or
python -m SimpleHTTPServer 8000  # Python 2
```

Then visit `http://localhost:8000/design_klarpath.com/` and test:
- [ ] Pixels load without console errors
- [ ] Logo displays correctly
- [ ] All links work
- [ ] Mobile responsive
- [ ] Forms submit (if any)

### 3. SEO Checklist Before Pushing

- [ ] All image alt texts are descriptive
- [ ] Meta description is optimized
- [ ] No broken links (use Screaming Frog)
- [ ] Mobile-friendly test passes
- [ ] Core Web Vitals score checked
- [ ] Sitemap.xml updated

---

## Folder Structure on GitHub

```
agency/
├── design_klarpath.com/
│   ├── index.html                                          (UPDATED ✅)
│   ├── styles.css
│   ├── main.js
│   ├── sitemap.xml
│   ├── SEO_OPTIMIZATION_GUIDE.md                          (NEW ✅)
│   └── asstets/
│       └── klarpath_ai_marketing_agency_website_templates.png  (RENAMED ✅)
├── README.md
├── .gitignore
└── [other folders]
```

---

## Continuous Deployment (Optional)

If your repo has CI/CD set up (GitHub Actions):

1. Your push automatically triggers a build
2. Website deploys to hosting (Netlify, Vercel, etc.)
3. Check GitHub Actions tab to see deployment status

Otherwise, you may need to manually deploy to your hosting provider.

---

## Common Git Commands Reference

```bash
# Check current status
git status

# See commit history
git log

# See differences before committing
git diff

# List branches
git branch -a

# Switch to different branch
git checkout branch-name

# Create new branch
git checkout -b new-branch-name

# Delete local branch
git branch -d branch-name

# Delete remote branch
git push origin --delete branch-name
```

---

## Troubleshooting

### "Permission denied" when pushing
```bash
# Generate SSH key (one-time)
ssh-keygen -t ed25519 -C "your-email@example.com"

# Add to GitHub: Settings → SSH and GPG keys → New SSH key
```

### "Your branch is ahead of 'origin/main'"
```bash
# You've made commits locally but haven't pushed
git push origin main
```

### "Merge conflicts"
```bash
# If someone else pushed changes to same file
git pull origin main
# Fix conflicts in the file, then:
git add .
git commit -m "Resolve merge conflicts"
git push origin main
```

### Files not showing updated in repository
```bash
# Did you remember to push?
git status  # Should show nothing if all pushed
git log     # Check if your commit is there

# Force refresh (only if necessary)
git push -f origin main  # WARNING: Can overwrite others' work
```

---

## Support

For issues:
- GitHub Docs: [https://docs.github.com](https://docs.github.com)
- Git Documentation: [https://git-scm.com/doc](https://git-scm.com/doc)

---

*Last Updated: Feb 3, 2026*
