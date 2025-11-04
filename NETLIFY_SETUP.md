# Netlify + Decap CMS Deployment Guide

This guide walks you through deploying The Freudian Spaceship to Netlify with Decap CMS for content management.

## Prerequisites

- Netlify account (linked to your personal GitHub)
- GitHub repository: `thefreudianspaceship/version2`

## Step 1: Deploy to Netlify

### Option A: Deploy via Netlify UI (Recommended for First Deploy)

1. **Go to Netlify Dashboard**
   - Visit https://app.netlify.com/
   - Click "Add new site" → "Import an existing project"

2. **Connect to GitHub**
   - Select "GitHub" as your Git provider
   - Authorize Netlify to access your GitHub account
   - Select the repository: `thefreudianspaceship/version2`

3. **Configure Build Settings**
   - **Branch to deploy:** `master`
   - **Build command:** `npm run build`
   - **Publish directory:** `.output/public`
   - **Build environment variables:** (none needed for now)

4. **Deploy Site**
   - Click "Deploy site"
   - Wait for build to complete (~2-5 minutes)
   - Note your site URL: `https://[random-name].netlify.app`

### Option B: Deploy via Netlify CLI (Alternative)

```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize and deploy
cd /home/valentine/freudianspaceship-nuxt
netlify init

# Follow prompts:
# - Create & configure a new site
# - Choose your team
# - Site name: freudianspaceship (or your preferred name)
# - Build command: npm run build
# - Publish directory: .output/public

# Deploy
netlify deploy --prod
```

## Step 2: Enable Netlify Identity

Decap CMS uses Netlify Identity for authentication.

1. **Go to Site Settings**
   - In your Netlify dashboard, select your site
   - Navigate to "Identity" tab
   - Click "Enable Identity"

2. **Configure Registration Settings**
   - Go to "Identity" → "Settings and usage"
   - Under "Registration preferences":
     - Select **"Invite only"** (recommended for security)
   - Under "External providers":
     - Optional: Enable GitHub provider for GitHub-based login
   - Click "Save"

3. **Enable Git Gateway**
   - Scroll down to "Services" section
   - Click "Enable Git Gateway"
   - This allows Decap CMS to commit changes to your GitHub repo

## Step 3: Invite Yourself as Admin

1. **Go to Identity Tab**
   - Click "Identity" in site dashboard
   - Click "Invite users"
   - Enter your email address
   - Click "Send"

2. **Accept Invitation**
   - Check your email for invitation
   - Click the link to set up your password
   - Complete the registration

## Step 4: Access Decap CMS

1. **Navigate to Admin Panel**
   - Go to: `https://[your-site-url].netlify.app/admin`
   - Login with your Netlify Identity credentials

2. **Test Content Management**
   - You should see "Blog Posts" collection
   - Try creating a new blog post
   - Save and publish
   - Check that the post appears on your site

## Step 5: Configure Custom Domain (Optional)

1. **Add Custom Domain**
   - Go to "Domain settings" in Netlify dashboard
   - Click "Add custom domain"
   - Enter your domain (e.g., `freudianspaceship.com`)

2. **Update DNS Records**
   - Point your domain's DNS to Netlify:
     - **A Record:** `75.2.60.5`
     - Or use **CNAME:** `[your-site].netlify.app`

3. **Enable HTTPS**
   - Netlify automatically provisions Let's Encrypt SSL
   - Wait a few minutes for SSL to activate

## Troubleshooting

### Build Fails on Netlify

**Check Node Version:**
- Netlify uses Node 20 (specified in `netlify.toml`)
- Verify locally: `node --version`

**Check Build Logs:**
- Review build log in Netlify dashboard
- Common issues:
  - Missing dependencies: Run `npm install` locally
  - Build errors: Test `npm run build` locally first

### Can't Login to /admin

**Netlify Identity Not Enabled:**
- Verify "Identity" is enabled in Netlify dashboard
- Check Git Gateway is enabled

**No Invitation Email:**
- Check spam folder
- Resend invitation from Netlify dashboard

### CMS Not Saving Changes

**Git Gateway Not Enabled:**
- Go to Identity → Services → Enable Git Gateway

**Wrong Branch:**
- Verify `config.yml` has correct branch (`master`)
- Check Netlify deploy branch matches

### Content Not Appearing on Site

**Content Path Mismatch:**
- Verify files are saved to `content/blog/`
- Check frontmatter format matches Nuxt Content expectations

**Build Not Triggered:**
- Manual deploy: Netlify dashboard → "Deploys" → "Trigger deploy"
- Auto-deploy: Check Git Gateway is working

## Files Created

- `netlify.toml` - Netlify build configuration
- `public/admin/index.html` - Decap CMS admin interface
- `public/admin/config.yml` - CMS content schema and settings

## Next Steps

1. **Test Full Workflow:**
   - Create a blog post via `/admin`
   - Verify it appears on homepage
   - Check individual post page works

2. **Customize CMS:**
   - Edit `public/admin/config.yml` to add more fields
   - Add collections (e.g., pages, authors)

3. **Enable Editorial Workflow (Optional):**
   - Uncomment `publish_mode: editorial_workflow` in `config.yml`
   - Adds draft/review/publish stages

4. **Transfer to Organization (Later):**
   - When ready, transfer site to organization account
   - Netlify: Site settings → Transfer site ownership

## Resources

- [Netlify Documentation](https://docs.netlify.com/)
- [Decap CMS Documentation](https://decapcms.org/docs/)
- [Nuxt Content Documentation](https://content.nuxt.com/)
- [Netlify Identity Documentation](https://docs.netlify.com/visitor-access/identity/)
