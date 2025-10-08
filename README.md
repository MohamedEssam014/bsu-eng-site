# bsu-eng-site

محتوى المشروع: موقع كلية الهندسة ثنائي اللغة (عربي/إنجليزي) — scaffold جاهز للتشغيل محليًا عبر Docker.

bsu-eng-site/
├─ frontend/
│ ├─ package.json
│ ├─ next.config.js
│ ├─ tailwind.config.js
│ ├─ postcss.config.js
│ ├─ pages/
│ │ ├─ _app.js
│ │ ├─ index.js
│ │ ├─ news/[id].js
│ │ └─ api/
│ │ └─ news.js
│ ├─ public/
│ │ └─ locales/
│ │ ├─ en/common.json
│ │ └─ ar/common.json
│ └─ styles/globals.css
├─ api/
│ ├─ package.json
│ ├─ server.js
│ └─ routes/
│ └─ news.js
├─ docker-compose.yml
└─ README.md
