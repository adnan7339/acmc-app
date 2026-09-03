# Apni Chhat Mehfooz Chhat — Android App (Capacitor)

## 🚀 Sabse aasan tareeqa: Automatic APK (Android Studio ki zaroorat nahi!)

Is project me `.github/workflows/build-apk.yml` pehle se maujood hai jo GitHub ke
free cloud servers par khud APK build karta hai. Steps:

1. https://github.com par (agar account nahi to) free account banayein.
2. Naya **repository** banayein (public ya private, dono chalega) — masalan `acmc-app`.
3. Is poore unzip-shuda folder ke files us repo me **upload** kar dein
   (GitHub website par "Add file → Upload files" se bhi kar sakte hain, ya `git push` se).
4. GitHub repo ke **Actions** tab me jayein — "Build Android APK" workflow apne aap
   chalna shuru ho jayega (2-4 minute lagte hain).
5. Jab workflow complete ho (green tick ✅), us run ko open karein → neeche
   **Artifacts** section me `acmc-app-debug-apk` milega — download kar lein.
6. Zip ke andar `app-debug.apk` hogi — yeh seedha phone par install ho jayegi
   (phone settings me "Install from unknown sources" allow karna padega).

Yeh APK bhi **dynamic** hai — same live website (`acmc-five.vercel.app`) load karti hai.

Har baar jab bhi aap chahein nayi APK chahiye (masalan icon/naam change karne ke baad),
bas dobara files GitHub par push kar dein, Actions khud nayi APK bana dega.

---

## Doosra tareeqa: Apne computer par Android Studio se build

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
