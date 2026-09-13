# Financial Partner Portal

A mobile-first, GitHub-ready static website for Channel Partner recruitment, document checklists, financial product information, and indicative Bond / Unlisted Share information.

## Quick start

No backend is required for Version 1.

1. Replace the WhatsApp number and contact details in `config.js`.
2. Edit `data/bonds.js` with your approved/verified current information.
3. Edit `data/unlistedShares.js` with your approved/verified current information.
4. Open `index.html` locally to preview, or use any static hosting service.

For local development, VS Code + Live Server is recommended.

## Updating daily opportunities

Edit:
- `data/bonds.js`
- `data/unlistedShares.js`

Update the `updated` field whenever information changes. Never use sample/placeholder values as live prices.

## WhatsApp

Set `SITE_CONFIG.whatsappNumber` to digits only, including country code. Example format:
`919876543210`

The website creates pre-filled WhatsApp messages for:
- Channel Partner onboarding
- Demat document submission
- Insurance quotations
- Vehicle policy login
- Life/Health quotation
- Bond enquiries
- Unlisted-share enquiries

## GitHub deployment

Create a repository, then upload the project files. For GitHub Pages:
1. Repository Settings → Pages.
2. Select the deployment branch/folder.
3. Save and wait for deployment.

## Important security note

This Version 1 intentionally does NOT upload or store Aadhaar/PAN/customer documents on the website. Do not add confidential documents, passwords, API keys, or private credentials to the repository.

If a future document-upload feature is added, use authenticated private storage and a secure backend.

## Compliance note

Review all product descriptions, disclosures, branding, regulatory wording and partner/customer communication with the relevant compliance/legal team before public launch. Prices and yields should be verified before publication and clearly identified as indicative where appropriate.


## Personal Branding / Contact

- **Name:** Aravind Chaudhary
- **Role:** Area Manager | Financial Services
- **Location:** Ahmedabad, Gujarat, India
- **WhatsApp:** +91 91733 34069
- **Email:** aravindchaudhary90@gmail.com

The site includes an **About Me** section and centralized contact configuration in `config.js`.
