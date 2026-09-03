# Apni Chhat Mehfooz Chhat — Android App (Capacitor)

Yeh app **dynamic** hai: yeh aapki live website `https://acmc-five.vercel.app/` ko seedha
`capacitor.config.ts` ke andar `server.url` se load karti hai. Matlab jab bhi aap Vercel par
website update karenge, app mein bhi wohi update **automatically** show hoga — dobara APK
banane ki zaroorat nahi.

## Requirements
1. **Android Studio** (latest version) — install karein: https://developer.android.com/studio
2. **Node.js** (v18+) — agar aap config ya code change karna chahein

## Build karne ke steps

1. Is poore folder ko apne computer par unzip karein.
2. Terminal me is folder ke andar jayein:
   ```
   cd acmc-app
   npm install
   ```
3. Android Studio kholein → **Open** → `acmc-app/android` folder select karein.
4. Android Studio khud Gradle sync kar lega (thoda time lagega, internet chahiye).
5. Upar toolbar me device/emulator select karein → **Run (▶️)** button dabayein.
   - Real phone par test karne ke liye USB debugging on karke phone connect karein.
6. Final APK/AAB banane ke liye:
   - Android Studio me **Build → Generate Signed Bundle / APK**
   - Apna keystore banayein (ya select karein), aur **APK** ya **AAB** choose karein.
   - Play Store ke liye AAB behtar hai; direct install ke liye APK.

## Agar aap koi setting change karna chahein

`capacitor.config.ts` file me:
```ts
server: {
  url: 'https://acmc-five.vercel.app/',   // <- yahan URL change kar sakte hain
  cleartext: false,
  allowNavigation: ['acmc-five.vercel.app', '*.vercel.app']
}
```

Config change karne ke baad yeh command chalayein taake Android project sync ho:
```
npx cap sync android
```

## App Icon / Splash Screen badalne ke liye
`android/app/src/main/res/` folder ke andar `mipmap-*` folders me icons hain.
Best tareeqa: `@capacitor/assets` package use karke ek command se sab icons generate karwa lein:
```
npm install @capacitor/assets --save-dev
npx capacitor-assets generate
```
(Iske liye aapko `assets/icon.png` (1024x1024) aur `assets/splash.png` (2732x2732) files chahiye hongi.)

## Notes
- Yeh app pure WebView shell hai — saari logic (search, export, login) wahi hai jo aapki
  website me hai, kyunke app live website hi load karti hai.
- Agar aap chahein ke app offline bhi kaam kare (bina internet), to woh alag approach hogi
  (bundled/local HTML + sync) — bata dein to woh version bhi bana dun.
