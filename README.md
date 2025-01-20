# Oricle Checkout Template

A templated checkout solution using Next.js, TypeScript, and Tailwind CSS.

## Features

- Template switching capability
- Responsive design
- TypeScript support
- Tailwind CSS styling
- Markdown-based content management

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/pabrul/oricle-checkout-template.git
```

Install dependencies:
```bash
cd oricle-checkout-template
yarn install
```

Run the development server:
```bash
yarn dev
```

Template Switching
To switch between templates, modify the template field in /_checkout/splash-foam-checkout.md:
```bash
---
template: 1 # or 2 for Oricle template
---
```

Built With

Next.js
- TypeScript
- Tailwind CSS
- Gray Matter (for Markdown parsing)
