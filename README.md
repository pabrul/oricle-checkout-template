# **Oricle Checkout Template**

A fully customizable checkout solution built with **Next.js**, **TypeScript**, and **Tailwind CSS**, designed to support multiple checkout templates with ease.

## **Overview**

This project implements a **template switching system**, allowing users to seamlessly switch between different checkout templates.

- **Template 1:** A basic example to serve as a reference.  
- **Template 2:** The real, improved design incorporating usability and UI/UX enhancements.

I took the liberty to introduce creative improvements to enhance the overall usability, accessibility, and maintainability of the project.

---

## **Features**

- 🚀 **Template Switching:** Easily toggle between Template 1 (example) and Template 2 (enhanced version).  
- 💻 **Responsive Design:** Fully optimized for mobile, tablet, and desktop screens.  
- 🔐 **TypeScript Integration:** Ensuring type safety and maintainability.  
- 🎨 **Tailwind CSS Styling:** Clean, scalable, and customizable styles.  
- 📝 **Markdown-Based Content Management:** Easily manage checkout content using markdown files.  

---

## **Getting Started**

### **1. Clone the repository:**
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

##  Template Switching
To switch between templates, modify the template field in /_checkout/splash-foam-checkout.md:
```bash
---
template: 1 # or 2 for Oricle template
---
```

##  Project Structure
```bash
oricle-checkout-template/
│-- src/
│   ├── app/                   # Next.js pages and routes
│   ├── components/             # Reusable UI components
│   ├── lib/                     # Utility functions and API integrations
│   ├── styles/                  # Tailwind CSS configuration and global styles
│   ├── app/api/checkout/         # API route for fetching checkout data
│-- _checkout/                    # Markdown content files
│-- public/                       # Static assets (images, icons)
│-- README.md                      # Project documentation
│-- next.config.js                  # Next.js configuration
│-- tailwind.config.js               # Tailwind CSS configuration
│-- tsconfig.json                    # TypeScript configuration
```


##  Built With
- Next.js
- TypeScript
- Tailwind CSS
- Gray Matter (for Markdown parsing)

