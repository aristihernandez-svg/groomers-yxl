// Per-base configuration for YXL (Sioux Lookout). Mirrors YKF's baseConfig.js shape exactly —
// see that file's comment for what each field does.
//
// YXL is built from YAV (Master Task, cargo, side quests, opening screen, handoff notes) with
// YKF's look and YKF's crew cars, home designs, procedures, contacts, fleet, records and admin.
// It starts empty on purpose: crews add their own cars, aircraft, contacts, stores and
// procedures from their phones.
const BASE_CONFIG = {
  baseId: 'yxl',
  baseName: 'Skycare YXL',
  baseAddress: '17 Airport Rd, Sioux Lookout, ON P8T 1A3',
  companyName: 'Skycare Aviation Services',
  themeColor: '#1A3A5C',
  pinCorrect: '1201',
  adminPin: '0000',    // guards audit/procedure/car admin actions

  firebaseConfig: {
    apiKey: "AIzaSyDMHZfbWevezkjVx9kesLRc9hPFQ5TUta0",
    authDomain: "skycare-yxl.firebaseapp.com",
    projectId: "skycare-yxl",
    storageBucket: "skycare-yxl.firebasestorage.app",
    messagingSenderId: "1014551050381",
    appId: "1:1014551050381:web:8eb65782892a80c53c0ac4"
  },
  vapidPublicKey: "BDSgat8oU57pQUCVvCBBnGFLynP6cjFxbgErTGHFd2zq4vlzQc1kixFP9l82xzdo69UHAbGLiW871AhrGlsNIQc",
  // Matching private key is NOT here — it lives only as the GitHub Actions secret
  // VAPID_PRIVATE_KEY_YXL in the groomers-ykf repo, used by the fleet arrival job.

  // No built-in cars: YXL's cars are added in the app (Audits → Crew Cars → + Add a car),
  // starting from the seven Bouncie trackers, so crews can change photos, names and plates.
  crewCars: [],

  // Shared across all bases -- see bouncie-worker/index.js in the YKF repo
  // for why this isn't a separate per-base Worker.
  bouncieWorkerUrl: 'https://bouncie-proxy.skycare.workers.dev',

  // Metro audits; Navajo tails are listed until their checklist PDF arrives.
  aircraftFleet: {
    metro:  ['CPX','TIM','IOC','IOB','IOJ','IOA','IOH','KKC','IOE'],
    navajo: ['AJR','AQR','TJX','CJH','JHX','JRH','QXD','QXX','TJF','BHO'],   // listed on Audits; no checklist yet
    westwind: [], astra: [],   // unused at YXL
  },

  // Absence of a key (or true) means enabled.
  features: {
    fleet: true,            // Fleet tab measured from CYXL
    facilityAudits: false,  // YXL has no facility audits
  },
};
