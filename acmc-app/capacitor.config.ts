import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'pk.gov.acag.acmc',
  appName: 'Apni Chhat Mehfooz Chhat',
  webDir: 'www',
  server: {
    // App hamesha live website se load hogi — koi bhi update
    // website par karein, app mein khud reflect ho jayega.
    url: 'https://acmc-five.vercel.app/',
    cleartext: false,
    allowNavigation: ['acmc-five.vercel.app', '*.vercel.app']
  },
  android: {
    allowMixedContent: false
  }
};

export default config;
