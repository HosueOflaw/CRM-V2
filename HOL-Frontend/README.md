<div align="center">
  <img src="electron/icon.ico" width="120" height="120" alt="House of Law Logo">
  <h1>⚖️ House of Law (بيت القانون)</h1>
  <p><strong>Premium CRM & Command Center for Legal Firms</strong></p>

  [![Angular](https://img.shields.io/badge/Angular-20+-dd0031?style=for-the-badge&logo=angular&logoColor=white)](https://angular.io/)
  [![PrimeNG](https://img.shields.io/badge/PrimeNG-20-06d6a0?style=for-the-badge&logo=primeng&logoColor=white)](https://primeng.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38bdf8?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![Electron](https://img.shields.io/badge/Electron-31-47848F?style=for-the-badge&logo=electron&logoColor=white)](https://www.electronjs.org/)
  [![GSAP](https://img.shields.io/badge/GSAP-3.13-88CE02?style=for-the-badge&logo=greensock&logoColor=white)](https://greensock.com/)

  <p align="center">
    <a href="#key-features">Key Features</a> •
    <a href="#tech-stack">Tech Stack</a> •
    <a href="#getting-started">Getting Started</a> •
    <a href="#deployment">Deployment</a>
  </p>
</div>

---

## 🌟 Overview | نظرة عامة
**House of Law** is a high-performance, enterprise-grade CRM system designed specifically for law firms. It combines the power of a modern web application with the reliability of a cross-platform desktop application using **Electron**. Featuring a high-density **Command Center**, precise employee tracking, and real-time performance analytics.

---

## 🚀 Key Features | المميزات الرئيسية

### 📊 Advanced Command Center
*   **Deep Analytics**: Real-time metrics for Team Pulse, Efficiency Rates, and Workload Distribution.
*   **Live Charts**: Interactive visualizations using Chart.js for task priority, workload heatmaps, and permission coverage.
*   **Employee Radar**: High-density table featuring live status indicators and performance progress bars.

### ⏱️ Break Management System
*   **Precision Tracking**: Accurate monitoring of daily breaks with automated completion checks.
*   **Smart Reporting**: Comprehensive daily break reports with late-minutes calculation and unused time tracking.
*   **Real-time Status**: Global indicators for active breaks across the organization.

### 📝 Strategic Task Engine
*   **O(1) Data Optimization**: High-performance Map-based indexing for handling 1000+ employees with zero lag.
*   **Multi-level Filtering**: Advanced search by status, priority, department, and custom date ranges.
*   **Smart Delegations**: Secure permission delegation system with real-time notifications.

### 🎨 Premium Aesthetics
*   **Glassmorphism UI**: Modern, translucent interface with subtle hardware-accelerated animations (GSAP).
*   **Dual Mode Support**: Fully optimized Dark and Light modes.
*   **RTL Ready**: Seamless Arabic (RTL) and English (LTR) support.

---

## 🛠️ Tech Stack | التقنيات المستخدمة

- **Framework**: [Angular 20](https://angular.dev/) (Standalone Architecture)
- **UI Library**: [PrimeNG 20](https://primeng.org/) & [PrimeIcons](https://primeng.org/icons)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) (Next-gen utility-first CSS)
- **Animations**: [GSAP (GreenSock)](https://gsap.com/) for cinematic transitions.
- **Desktop Wrapper**: [Electron](https://www.electronjs.org/)
- **Real-time**: [SignalR](https://dotnet.microsoft.com/en-us/apps/aspnet/signalr) for live notifications.
- **State & Data**: RxJS, Map-based Performance Indexing, and Intelligent Caching.

---

## ⚙️ Getting Started | البداية

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) (v9 or higher)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/houseoflaw-frontend.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Development
**Web Version:**
```bash
npm run dev:web
```

**Electron (Desktop) Version:**
```bash
npm start
```

---

## 📦 Deployment | النشر

### Build Web Production
```bash
npm run build:web
```

### Pack Electron (Windows/Mac/Linux)
```bash
npm run dist
```

---

## 🛡️ Security & Performance
- **Client-side Caching**: Built-in `CacheService` for heavy API responses (Tasks, Breaks, Users).
- **JWT Authentication**: Secure token-based access with role-based guard protection.
- **Responsive Optimization**: Virtual scrolling and lazy loading for massive datasets (1000+ records).

---

<div align="center">
  <p>Developed with ❤️ for <strong>House of Law</strong></p>
  <p>© 2026 HOUSE OF LAW • CRM V2.0.0</p>
</div>
