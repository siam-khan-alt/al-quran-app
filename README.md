# 📖 Al-Quran Web (Premium Experience) 🌙✨

**Al-Quran Web** is a high-performance, minimalist, and feature-rich Holy Quran reading platform. Built with **Next.js 16 (App Router)** and **Tailwind CSS v4**, it offers a seamless reading experience with dual-language support (Bengali & English), advanced search, and full UI customization.

## 🔗 Quick Links
- 🌐 **Live Demo:** [https://al-quran-app-psi.vercel.app/]
- 📁 **Repository:** [https://github.com/siam-khan-alt/al-quran-app]

---

## 📸 Visual Showcase (Light & Dark Experience)

<div align="center">
  <table>
    <tr>
      <td align="center" width="50%">
        <p><b>☀️ Home - Light Mode</b></p>
        <img src="https://i.ibb.co.com/9HrxYMnS/image.png" alt="Home Light" height="350" />
      </td>
      <td align="center" width="50%">
        <p><b>🌙 Home - Dark Mode</b></p>
        <img src="https://i.ibb.co.com/cchf9Wcs/image.png" alt="Home Dark" height="350" />
      </td>
    </tr>
    <tr>
      <td align="center" width="50%">
        <p><b>☀️ Surah Details - Light</b></p>
        <img src="https://i.ibb.co.com/PZ4TWkYH/image.png" alt="Details Light" height="350" />
      </td>
      <td align="center" width="50%">
        <p><b>🌙 Settings Panel - Dark</b></p>
        <img src="https://i.ibb.co.com/vx1Cx3Kj/image.png" alt="Settings Dark" height="350" />
      </td>
    </tr>
  </table>
  <p><i>The app features premium glassmorphism and smooth theme transitions.</i></p>
</div>

---

## 🚀 Key Features

### 🕋 Surah & Ayah Management
- **Full Library:** Display all 114 Surahs with Arabic names and English meanings.
- **SSG Powered:** Surah detail pages are generated using **Static Site Generation (SSG)** for instant loading.
- **Uthmani Script:** Clean and beautiful Arabic text for a traditional reading feel.

### 🔍 Advanced Search
- **Surah Filter:** Quick search on the homepage to find any Surah by its name.
- **Ayah Search:** Real-time search inside Surah details to find ayahs through **Bengali or English** translations.

### ⚙️ Customizable Reading Panel (Sidebar)
- **Bilingual Translation:** Toggle between **Bengali**, **English**, or **Both** translations.
- **Font Customization:** Choose between multiple Arabic fonts (**Amiri** & **Lateef**).
- **Size Adjuster:** Fine-tune Arabic and Translation font sizes via interactive sliders.
- **Persisted Settings:** User preferences are saved using **Zustand Persistence** (localStorage).

---

## 🛠 Tech Stack

### Frontend
- **Next.js 16 (App Router):** Leveraging SSG and Server Components.
- **Tailwind CSS v4:** Using the latest @theme variables for styling.
- **Zustand:** Professional state management with persistence middleware.
- **Lucide React:** Minimalist and high-quality iconography.
- **Axios:** High-efficiency data fetching from Quran API.

### Performance Optimizations
- **Loading States:** Implemented `loading.tsx` for smooth data fetching transitions.
- **Content Visibility:** Optimized large Surah rendering (e.g., Al-Baqarah) using `content-visibility: auto`.

---