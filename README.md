# Business Landing Page

Landing page ธุรกิจที่สร้างด้วย React และ TypeScript โดยออกแบบให้หลีกเลี่ยงการ hardcode ข้อมูลโดยใช้ระบบ configuration

## ✨ Features

- 🎨 UI/UX ที่ทันสมัยและสวยงาม
- 📱 Responsive Design รองรับทุกอุปกรณ์
- ⚙️ Configuration-based - ไม่มี hardcode
- 🎯 TypeScript สำหรับ Type Safety
- 🚀 ประสิทธิภาพสูง
- ♿ Accessible

## 📂 โครงสร้างโปรเจกต์

```
src/
├── types/           # TypeScript type definitions
│   └── index.ts     # ทุก types ที่ใช้ในโปรเจกต์
├── config/          # Configuration files
│   └── siteConfig.ts # ไฟล์ config หลัก - แก้ไขเนื้อหาที่นี่
├── components/      # React components
│   ├── Header.tsx   # Navigation bar
│   ├── Hero.tsx     # Hero section
│   ├── Features.tsx # Features section
│   ├── Services.tsx # Services/Pricing section
│   ├── Team.tsx     # Team members section
│   ├── Testimonials.tsx # Customer testimonials
│   ├── Contact.tsx  # Contact form and info
│   └── Footer.tsx   # Footer
└── App.tsx          # Main app component
```

## 🎯 วิธีการปรับแต่งเนื้อหา

### 1. แก้ไขเนื้อหาทั้งหมดที่ `src/config/siteConfig.ts`

ไฟล์นี้เป็นศูนย์กลางของเนื้อหาทั้งหมด คุณสามารถแก้ไข:

- ชื่อเว็บไซต์และ navigation
- ข้อความ Hero section
- คุณสมบัติ (Features)
- แพ็คเกจบริการและราคา
- ข้อมูลทีมงาน
- รีวิวลูกค้า
- ข้อมูลติดต่อ
- Footer

ตัวอย่าง:

```typescript
export const siteConfig: LandingPageConfig = {
  siteName: "ชื่อธุรกิจของคุณ",
  hero: {
    title: "หัวข้อหลักของคุณ",
    subtitle: "คำอธิบายย่อย",
    // ...
  },
  // ...
};
```

### 2. เพิ่ม Features ใหม่

เพิ่ม feature ใหม่ใน array `features`:

```typescript
features: [
  {
    id: "unique-id",
    icon: "🎨", // emoji หรือ icon
    title: "ชื่อคุณสมบัติ",
    description: "คำอธิบาย"
  }
]
```

### 3. เพิ่ม Service/Pricing Plans

เพิ่มแพ็คเกจใหม่ใน array `services`:

```typescript
services: [
  {
    id: "plan-id",
    name: "ชื่อแพ็คเกจ",
    description: "คำอธิบาย",
    price: "฿999/เดือน",
    features: ["คุณสมบัติ 1", "คุณสมบัติ 2"],
    highlighted: true // แพ็คเกจแนะนำ
  }
]
```

### 4. เพิ่มสมาชิกทีม

เพิ่มสมาชิกใน array `team.members`:

```typescript
members: [
  {
    id: "1",
    name: "ชื่อ-นามสกุล",
    position: "ตำแหน่ง",
    bio: "ประวัติย่อ",
    socialLinks: {
      linkedin: "url",
      email: "email@example.com"
    }
  }
]
```

### 5. เปลี่ยนสี Theme

แก้ไข gradient colors ใน CSS files:
- Primary gradient: `#667eea` → `#764ba2`
- เปลี่ยนได้ทุกไฟล์ `.css`

## 🚀 การใช้งาน

### ติดตั้ง dependencies

```bash
cd business-landing-page
npm install
```

### รันโปรเจกต์

```bash
npm start
```

เปิดเบราว์เซอร์ที่ [http://localhost:3000](http://localhost:3000)

### Build สำหรับ production

```bash
npm run build
```

## 🎨 การปรับแต่ง Styles

แต่ละ component มี CSS file ของตัวเอง:

- `Header.css` - สไตล์ของ navigation
- `Hero.css` - สไตล์ของ hero section
- `Features.css` - สไตล์ของ features
- และอื่นๆ

## 📝 Type Safety

โปรเจกต์ใช้ TypeScript เพื่อ type safety ทุก types อยู่ใน `src/types/index.ts`:

- `LandingPageConfig` - Type หลักของ configuration
- `HeroSection` - Type ของ hero section
- `Feature` - Type ของแต่ละ feature
- และอื่นๆ

## 🌟 คุณสมบัติพิเศษ

### Responsive Design
- Desktop (> 968px)
- Tablet (768px - 968px)
- Mobile (< 768px)

### Smooth Scrolling
Navigation จะ scroll ไปยัง section ที่เลือกแบบ smooth

### Animations
- Fade in animations
- Hover effects
- Floating shapes

### Accessibility
- Semantic HTML
- ARIA labels
- Keyboard navigation

## 🔧 เทคโนโลยีที่ใช้

- React 18
- TypeScript
- CSS3 (No framework, pure CSS)
- Google Fonts (Inter)

## 📄 License

MIT License - ใช้งานได้อย่างอิสระ

## 🤝 Contributing

ยินดีรับ contributions! สามารถ fork และส่ง pull request ได้เลย

## 📧 ติดต่อ

หากมีคำถามหรือข้อเสนอแนะ กรุณาติดต่อผ่าน issues ในโปรเจกต์นี้
