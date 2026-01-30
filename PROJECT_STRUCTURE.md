# โครงสร้างโปรเจกต์ Business Landing Page

## 📁 โครงสร้างโฟลเดอร์

```
business-landing-page/
├── public/                      # Static files
│   ├── index.html              # HTML หลัก
│   ├── favicon.ico             # ไอคอนเว็บ
│   └── manifest.json           # PWA manifest
│
├── src/                        # Source code หลัก
│   ├── components/             # React Components
│   │   ├── Header.tsx          # Navigation bar
│   │   ├── Header.css          # Styles สำหรับ Header
│   │   ├── Hero.tsx            # Hero section
│   │   ├── Hero.css            # Styles สำหรับ Hero
│   │   ├── Features.tsx        # Features section
│   │   ├── Features.css        # Styles สำหรับ Features
│   │   ├── Services.tsx        # Services/Pricing section
│   │   ├── Services.css        # Styles สำหรับ Services
│   │   ├── Team.tsx            # Team section
│   │   ├── Team.css            # Styles สำหรับ Team
│   │   ├── Testimonials.tsx    # Testimonials section
│   │   ├── Testimonials.css    # Styles สำหรับ Testimonials
│   │   ├── Contact.tsx         # Contact section
│   │   ├── Contact.css         # Styles สำหรับ Contact
│   │   ├── Footer.tsx          # Footer
│   │   └── Footer.css          # Styles สำหรับ Footer
│   │
│   ├── config/                 # Configuration files
│   │   ├── siteConfig.ts       # ⭐ ไฟล์ config หลัก (แก้ไขที่นี่!)
│   │   ├── README.md           # คู่มือการใช้ config
│   │   └── examples/           # ตัวอย่าง config
│   │       ├── saas-example.ts      # ตัวอย่าง SaaS
│   │       └── restaurant-example.ts # ตัวอย่างร้านอาหาร
│   │
│   ├── types/                  # TypeScript types
│   │   └── index.ts            # Type definitions ทั้งหมด
│   │
│   ├── App.tsx                 # Main App component
│   ├── App.css                 # Global app styles
│   ├── index.tsx               # Entry point
│   └── index.css               # Global styles
│
├── README.md                   # 📖 คู่มือหลักของโปรเจกต์
├── CUSTOMIZATION_GUIDE.md      # 🎨 คู่มือการปรับแต่ง
├── PROJECT_STRUCTURE.md        # 📁 เอกสารนี้
├── package.json                # Dependencies
└── tsconfig.json               # TypeScript config
```

---

## 🎯 ไฟล์สำคัญที่ต้องรู้จัก

### 1. ไฟล์ที่ต้องแก้ไขบ่อย ⭐

#### `src/config/siteConfig.ts`
**ความสำคัญ: สูงมาก**
- เป็นศูนย์กลางของเนื้อหาทั้งหมด
- แก้ไขเนื้อหาโดยไม่ต้องแตะ code
- ควบคุม: ข้อความ, เมนู, ราคา, รูปภาพ, ข้อมูลติดต่อ

```typescript
// ตัวอย่างการแก้ไข
export const siteConfig = {
  siteName: "ชื่อธุรกิจของคุณ",  // แก้ที่นี่
  hero: {
    title: "หัวข้อหลัก",         // แก้ที่นี่
    // ...
  }
}
```

#### `src/components/*.css`
**ความสำคัญ: ปานกลาง**
- ปรับแต่งสี, ฟอนต์, ขนาด
- แต่ละ component มี CSS ของตัวเอง
- ใช้ global styles ใน `src/index.css`

### 2. ไฟล์ที่ไม่ควรแก้ไข (ถ้าไม่จำเป็น)

- `src/types/index.ts` - Type definitions
- `src/components/*.tsx` - Component logic
- `tsconfig.json` - TypeScript config
- `package.json` - Dependencies

---

## 🔄 Data Flow (การไหลของข้อมูล)

```
siteConfig.ts (ข้อมูล)
    ↓
App.tsx (อ่านข้อมูล)
    ↓
Components (แสดงผล)
    ↓
CSS (จัดรูปแบบ)
    ↓
Browser (แสดงผล)
```

### ตัวอย่างการไหลของข้อมูล:

1. **กำหนดข้อมูลใน config:**
```typescript
// src/config/siteConfig.ts
hero: {
  title: "ยกระดับธุรกิจของคุณ"
}
```

2. **ส่งข้อมูลไปยัง component:**
```typescript
// src/App.tsx
<Hero data={siteConfig.hero} />
```

3. **Component แสดงผล:**
```typescript
// src/components/Hero.tsx
<h1>{data.title}</h1>
```

---

## 🧩 Components อธิบายละเอียด

### Header Component
**ไฟล์:** `Header.tsx`, `Header.css`

**หน้าที่:**
- แสดง navigation bar
- Responsive mobile menu
- Smooth scrolling

**Props รับ:**
- `siteName`: string
- `navigation`: NavigationItem[]

**Features:**
- Fixed position เมื่อ scroll
- Mobile hamburger menu
- Smooth scroll เมื่อคลิกเมนู

---

### Hero Component
**ไฟล์:** `Hero.tsx`, `Hero.css`

**หน้าที่:**
- แสดงหัวข้อหลักและ CTA
- แสดง animated shapes

**Props รับ:**
- `data`: HeroSection

**Features:**
- Gradient background
- Floating animations
- 2 CTA buttons (primary, secondary)

---

### Features Component
**ไฟล์:** `Features.tsx`, `Features.css`

**หน้าที่:**
- แสดงคุณสมบัติหรือข้อดี

**Props รับ:**
- `data`: FeaturesSection

**Features:**
- Grid layout (responsive)
- Hover effects
- Icon animations

---

### Services Component
**ไฟล์:** `Services.tsx`, `Services.css`

**หน้าที่:**
- แสดงแพ็คเกจและราคา

**Props รับ:**
- `data`: ServicesSection

**Features:**
- Pricing cards
- Highlighted package (แนะนำ)
- Feature lists with checkmarks

---

### Team Component
**ไฟล์:** `Team.tsx`, `Team.css`

**หน้าที่:**
- แสดงทีมงาน

**Props รับ:**
- `data`: TeamSection

**Features:**
- Avatar/Initial display
- Social links
- Hover effects

---

### Testimonials Component
**ไฟล์:** `Testimonials.tsx`, `Testimonials.css`

**หน้าที่:**
- แสดงรีวิวจากลูกค้า

**Props รับ:**
- `data`: TestimonialsSection

**Features:**
- Star ratings
- Customer info
- Quote styling

---

### Contact Component
**ไฟล์:** `Contact.tsx`, `Contact.css`

**หน้าที่:**
- แสดงข้อมูลติดต่อและฟอร์ม

**Props รับ:**
- `data`: ContactSection

**Features:**
- Contact information cards
- Contact form (optional)
- Social media links
- Form validation

---

### Footer Component
**ไฟล์:** `Footer.tsx`, `Footer.css`

**หน้าที่:**
- แสดง footer พร้อมลิงก์

**Props รับ:**
- `data`: FooterSection

**Features:**
- Multi-column layout
- Company info
- Link groups
- Copyright

---

## 🎨 CSS Architecture

### Global Styles
**ไฟล์:** `src/index.css`
- Reset styles
- Font imports
- Base typography
- Smooth scrolling

### Component Styles
**แต่ละ Component:**
- ไฟล์ CSS แยกตามชื่อ component
- BEM-like naming convention
- Responsive breakpoints

### Breakpoints ที่ใช้:
```css
/* Mobile */
@media (max-width: 480px) { }

/* Tablet */
@media (max-width: 768px) { }

/* Desktop */
@media (max-width: 968px) { }
```

### Color Variables (แนะนำ):
เพื่อความสะดวก ควรสร้าง CSS variables:

```css
:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  --text-color: #333;
  --bg-color: #f8f9fa;
}
```

---

## 📦 Dependencies หลัก

### Production:
- `react` (^18.x) - UI library
- `react-dom` (^18.x) - React DOM
- `typescript` (^4.x) - Type safety

### Development:
- `react-scripts` - Build tools
- `@types/*` - TypeScript types

---

## 🚀 Scripts

```bash
npm start       # รัน dev server (localhost:3000)
npm run build   # Build สำหรับ production
npm test        # รัน tests
npm run eject   # Eject CRA (ไม่แนะนำ)
```

---

## 📝 Type System

### ไฟล์:** `src/types/index.ts`

**Types หลัก:**
- `LandingPageConfig` - Type ของ config ทั้งหมด
- `HeroSection` - Type ของ Hero
- `Feature` - Type ของแต่ละ feature
- `Service` - Type ของแต่ละ service/pricing
- `TeamMember` - Type ของสมาชิกทีม
- `Testimonial` - Type ของรีวิว
- `ContactSection` - Type ของ contact
- `FooterSection` - Type ของ footer

**ประโยชน์:**
- Auto-completion ใน IDE
- Type checking compile time
- Documentation ในตัว

---

## 🔧 Customization Workflow

### ขั้นตอนการปรับแต่ง:

1. **เปลี่ยนเนื้อหา**
   - แก้ไข `src/config/siteConfig.ts`
   - บันทึกไฟล์ → hot reload อัตโนมัติ

2. **เปลี่ยนสี**
   - ค้นหาสีเดิมใน `.css` files
   - แทนที่ด้วยสีใหม่

3. **เปลี่ยนฟอนต์**
   - แก้ไข `src/index.css`
   - Import font จาก Google Fonts

4. **ซ่อน Section**
   - Comment ใน `src/App.tsx`
   ```typescript
   // {siteConfig.team && <Team data={siteConfig.team} />}
   ```

5. **เพิ่ม Section ใหม่**
   - สร้าง Component ใหม่
   - เพิ่ม Type ใน `types/index.ts`
   - เพิ่มใน `App.tsx`

---

## 🧪 Testing Checklist

เมื่อแก้ไขเสร็จ ควรทดสอบ:

- [ ] ทุก section แสดงผลถูกต้อง
- [ ] Navigation ทำงาน (smooth scroll)
- [ ] Mobile menu ทำงาน
- [ ] Responsive ทุกขนาดหน้าจอ
- [ ] Form validation ทำงาน
- [ ] Links ทั้งหมดใช้งานได้
- [ ] ไม่มี console errors
- [ ] Loading speed ไม่ช้าเกินไป

---

## 📚 เอกสารเพิ่มเติม

- `README.md` - คู่มือหลักและการติดตั้ง
- `CUSTOMIZATION_GUIDE.md` - คู่มือการปรับแต่งละเอียด
- `src/config/README.md` - คู่มือ configuration
- `src/config/examples/` - ตัวอย่าง config

---

## 💡 Tips & Best Practices

### Performance:
- ใช้รูปภาพ WebP format
- Optimize รูปภาพก่อน upload
- Lazy load รูปภาพ (ถ้าเพิ่มเยอะ)

### SEO:
- แก้ไข `public/index.html` meta tags
- ใช้ semantic HTML
- เพิ่ม alt text ในรูปภาพ

### Maintenance:
- Update dependencies เป็นประจำ
- Backup ก่อนแก้ไขครั้งใหญ่
- ใช้ Git version control

### Development:
- ใช้ TypeScript อย่างเต็มที่
- Comment code ที่ซับซ้อน
- Follow naming conventions

---

## 🆘 Troubleshooting

### ปัญหาที่พบบ่อย:

**1. Port 3000 ถูกใช้งาน**
```bash
# Kill process
lsof -ti:3000 | xargs kill -9
```

**2. Module not found**
```bash
# ลบและติดตั้งใหม่
rm -rf node_modules package-lock.json
npm install
```

**3. TypeScript errors หลัง update config**
```bash
# Restart TypeScript server ใน IDE
# หรือ restart dev server
```

**4. Hot reload ไม่ทำงาน**
```bash
# Restart dev server
npm start
```

---

## 📞 ต้องการความช่วยเหลือ?

1. ตรวจสอบ console log ใน browser
2. อ่านเอกสารประกอบ
3. ค้นหา error message ใน Google
4. ตรวจสอบ React DevTools

---

**Happy Coding! 🎉**
