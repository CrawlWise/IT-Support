# IT Support Landing Page (Next.js Version)

A modern, responsive landing page for an IT support business specializing in off-hours and weekend technical services. Built with **Next.js, TypeScript, and Tailwind CSS**, featuring smooth animations and a sleek UI.

---

## 🚀 Project Overview

This is a **multi-section landing page** built using Next.js (App Router) to showcase an IT support company that provides 24/7 technical assistance, with a focus on evening, night, and weekend coverage.

**Target Audience:** Businesses requiring technical support outside standard 9–5 hours.

---

## 🎯 Features

### UI Sections (Pages Structure Maintained)
- Navbar – Responsive navigation with smooth scrolling
- Hero Section – Eye-catching header with CTA buttons
- Services – Grid layout showcasing IT services
- Testimonials – Customer reviews and social proof
- Contact – Lead capture form with validation
- Footer – Company info and links

> ❌ Removed: Pricing / Subscription section

---

## 🛠️ Tech Stack

### Frontend Framework
- Next.js 14+ (App Router)
- React 19
- TypeScript

### Styling
- Tailwind CSS
- class-variance-authority
- tailwind-merge
- tw-animate-css

### UI & Animation
- shadcn/ui
- lucide-react
- framer-motion

### Utilities
- next-themes (theme management)
- sonner (toast notifications)
- @tanstack/react-query (data fetching)

---

## 📁 Project Structure (Next.js)

```
IT-Support/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page (all sections)
│   ├── globals.css         # Global styles
│
├── components/
│   ├── ui/                 # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── textarea.tsx
│   │   └── sonner.tsx
│   │
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── Testimonials.tsx
│   ├── ContactForm.tsx
│   └── Footer.tsx
│
├── lib/
│   └── utils.ts
│
├── public/
│   └── assets/
│
├── components.json
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

## 🏃 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm / yarn / pnpm

### Installation

1. Navigate to project
```bash
cd IT-Support
```

2. Install dependencies
```bash
npm install
```

3. Run development server
```bash
npm run dev
```

App will be available at:
```
http://localhost:3000
```

---

## 📜 Available Scripts

| Command | Description |
|--------|-------------|
| npm run dev | Start development server |
| npm run build | Build for production |
| npm run start | Start production server |
| npm run lint | Run lint checks |

---

## 🎨 Component Breakdown

### Hero Section
- Gradient background
- Strong headline + CTA
- Key service highlights

### Services Section
- Off-Hours Support  
- Weekend Coverage  
- Emergency Response  
- Infrastructure Management  
- Network Security  
- Cloud Solutions  

### Testimonials
- Client reviews
- Social proof elements

### Contact Form
- Name, email, phone
- Message input
- Toast feedback using Sonner

---

## ⚙️ Next.js Configuration Notes

- Uses App Router (`/app` directory)
- Supports server and client components
- Optimized for performance and SEO
- Easy deployment on Vercel, DigitalOcean, or AWS

---

## 🌐 Deployment

### Recommended Platforms
- Vercel
- Netlify
- DigitalOcean App Platform

### Build Command
```bash
npm run build
```

---

## 🎯 Design Principles

- Mobile-first responsive design  
- Clean and modern UI  
- Performance optimized  
- Accessible and semantic HTML  

---

## 🚀 Future Enhancements

- Blog section for IT tips  
- Live chat support  
- Admin dashboard  
- Case studies page  
- FAQ section  
- Dark/light mode toggle UI  

---

## 📄 License

Apache License 2.0

---

## 🤝 Contributing

1. Fork the repository  
2. Create a feature branch  
3. Make changes  
4. Submit a pull request  

---

## 📞 Support

For setup or deployment help, contact the project maintainer.

---

**Built with ❤️ using Next.js, TypeScript, and modern web technologies**