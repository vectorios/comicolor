#!/bin/bash

echo "🚀 Starting ColorVerse project setup..."

# --- Function to create a boilerplate Next.js page component ---
create_page() {
  FILE_PATH=$1
  # Derive component name from file path, handling dynamic routes and kebab-case
  COMPONENT_NAME=$(basename "$FILE_PATH" .tsx | sed -e 's/\[//g' -e 's/\]//g' -e 's/^./\U&/' -e 's/-./\U&/g' -e 's/-//g')
  
  # Create parent directories if they don't exist
  mkdir -p "$(dirname "$FILE_PATH")"

  # Write boilerplate content to the file
  echo "import React from 'react';

const ${COMPONENT_NAME}Page = () => {
  return (
    <div>
      <h1>${COMPONENT_NAME} Page</h1>
      <p>Path: ${FILE_PATH}</p>
    </div>
  );
};

export default ${COMPONENT_NAME}Page;" > "$FILE_PATH"

  echo "✅ Created: $FILE_PATH"
}

# --- 1. Create Core Directories ---
echo "📁 Creating core project structure..."
mkdir -p public/images public/icons components lib styles types pages/api

# --- 2. Create Basic Project Files ---
echo "📄 Creating basic config and style files..."
touch public/favicon.ico
touch styles/globals.css
touch README.md

# _app.tsx
echo "import '../styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;" > pages/_app.tsx
echo "✅ Created: pages/_app.tsx"

# _document.tsx
echo "import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang=\"en\">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}" > pages/_document.tsx
echo "✅ Created: pages/_document.tsx"


# --- 3. Create Page Files from the Blueprint ---
echo "🏛️ Generating all page files for ColorVerse..."

# Book I: The Public & Constitutional Portal
create_page "pages/index.tsx"
create_page "pages/discover.tsx"
create_page "pages/codex/index.tsx"
create_page "pages/codex/book/[id].tsx"
create_page "pages/codex/chapter/[id].tsx"
create_page "pages/codex/search.tsx"
create_page "pages/for-brands.tsx"
create_page "pages/for-developers.tsx"
create_page "pages/pricing.tsx"
create_page "pages/press.tsx"
create_page "pages/status.tsx"
create_page "pages/careers.tsx"
create_page "pages/contact.tsx"
create_page "pages/login.tsx"
create_page "pages/register.tsx"
create_page "pages/reset-password.tsx"
create_page "pages/legal/terms-of-service.tsx"
create_page "pages/legal/privacy-policy.tsx"
create_page "pages/legal/community-guidelines.tsx"

# Book II: The Core Application
create_page "pages/app/dashboard.tsx"
create_page "pages/app/registry/index.tsx"
create_page "pages/app/registry/public-domain.tsx"
create_page "pages/app/registry/relics.tsx"
create_page "pages/app/market/index.tsx"
create_page "pages/app/market/auctions.tsx"
create_page "pages/app/market/trades.tsx"
create_page "pages/app/market/bounties.tsx"
create_page "pages/app/market/indices.tsx"
create_page "pages/app/market/create-listing.tsx"
create_page "pages/app/market/listing/[listingId].tsx"
create_page "pages/app/verse/index.tsx"
create_page "pages/app/verse/create-post.tsx"
create_page "pages/app/verse/edit-post/[postId].tsx"
create_page "pages/app/studio/print-on-demand.tsx"
create_page "pages/app/studio/decor-designer.tsx"
create_page "pages/app/studio/artisans.tsx"
create_page "pages/app/factions/index.tsx"
create_page "pages/app/factions/rankings.tsx"
create_page "pages/app/factions/diplomacy.tsx"
create_page "pages/app/factions/create.tsx"
create_page "pages/app/factions/[factionSlug]/index.tsx"
create_page "pages/app/factions/[factionSlug]/manage.tsx"
create_page "pages/app/events/index.tsx"
create_page "pages/app/events/archives.tsx"
create_page "pages/app/events/[eventId].tsx"
create_page "pages/app/users/search.tsx"
create_page "pages/app/users/[username]/index.tsx"
create_page "pages/app/users/[username]/collection.tsx"
create_page "pages/app/users/[username]/creations.tsx"
create_page "pages/app/users/[username]/reputation.tsx"
create_page "pages/app/messages/index.tsx"
create_page "pages/app/messages/[conversationId].tsx"
create_page "pages/app/color/[hexCode].tsx"
create_page "pages/app/creation/[creationId].tsx"
create_page "pages/app/search.tsx"

# Book III: The Legal & Judicial Citadel
create_page "pages/governance/high-court/index.tsx"
create_page "pages/governance/high-court/file-complaint.tsx"
create_page "pages/governance/high-court/case-registry.tsx"
create_page "pages/governance/high-court/my-cases.tsx"
create_page "pages/governance/high-court/council.tsx"
create_page "pages/governance/mediation/request.tsx"
create_page "pages/governance/mediation/my-dossiers.tsx"
create_page "pages/governance/legislative/proposals.tsx"
create_page "pages/governance/legislative/ballots.tsx"
create_page "pages/governance/guilds/index.tsx"
create_page "pages/governance/guilds/[guildSlug]/index.tsx"
create_page "pages/governance/guilds/[guildSlug]/manage.tsx"

# Book IV: The Personal Account Center
create_page "pages/account/profile.tsx"
create_page "pages/account/security.tsx"
create_page "pages/account/wallet/index.tsx"
create_page "pages/account/wallet/buy-prisms.tsx"
create_page "pages/account/wallet/withdrawals.tsx"
create_page "pages/account/wallet/history.tsx"
create_page "pages/account/properties/index.tsx"
create_page "pages/account/properties/colors.tsx"
create_page "pages/account/properties/creations.tsx"
create_page "pages/account/properties/licenses-issued.tsx"
create_page "pages/account/properties/licenses-acquired.tsx"
create_page "pages/account/properties/will.tsx"
create_page "pages/account/properties/insurance.tsx"
create_page "pages/account/orders.tsx"
create_page "pages/account/subscription.tsx"
create_page "pages/account/data.tsx"
create_page "pages/account/notifications.tsx"
create_page "pages/account/my-faction.tsx"
create_page "pages/account/my-business.tsx"

# Book V: The Corporate & B2B Portal
create_page "pages/corporate/dashboard.tsx"
create_page "pages/corporate/brandlock.tsx"
create_page "pages/corporate/benefits.tsx"
create_page "pages/corporate/advertising/create-campaign.tsx"
create_page "pages/corporate/advertising/my-campaigns.tsx"
create_page "pages/corporate/api.tsx"
create_page "pages/corporate/business-registry/register.tsx"
create_page "pages/corporate/business-registry/directory.tsx"
create_page "pages/corporate/billing.tsx"

# Book VI: The Panopticon (Admin Panel)
create_page "pages/admin/dashboard.tsx"
create_page "pages/admin/guardians/index.tsx"
create_page "pages/admin/guardians/[userId]/index.tsx"
create_page "pages/admin/guardians/[userId]/edit.tsx"
create_page "pages/admin/registry/overview.tsx"
create_page "pages/admin/registry/edit-color/[hexCode].tsx"
create_page "pages/admin/moderation/queue.tsx"
create_page "pages/admin/moderation/history.tsx"
create_page "pages/admin/justice/dashboard.tsx"
create_page "pages/admin/justice/case/[caseId].tsx"
create_page "pages/admin/economy/market-supervision.tsx"
create_page "pages/admin/economy/transactions.tsx"
create_page "pages/admin/economy/edit-transaction/[txId].tsx"
create_page "pages/admin/treasury.tsx"
create_page "pages/admin/partners.tsx"
create_page "pages/admin/codex/editor.tsx"
create_page "pages/admin/events/create.tsx"
create_page "pages/admin/support/tickets.tsx"
create_page "pages/admin/support/knowledge-base.tsx"
create_page "pages/admin/logs.tsx"
create_page "pages/admin/settings/general.tsx"
create_page "pages/admin/settings/roles.tsx"


echo "🎉 ColorVerse project structure created successfully!"
echo "➡️ Next steps: 'npm install react react-dom next' and then 'npm run dev'"