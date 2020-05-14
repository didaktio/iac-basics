// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyCnqEmfkElWw5V8liLpvlJRX33YRCjbZZM",
    authDomain: "iac-basics.firebaseapp.com",
    databaseURL: "https://iac-basics.firebaseio.com",
    projectId: "iac-basics",
    storageBucket: "iac-basics.appspot.com",
    messagingSenderId: "685306161552",
    appId: "1:685306161552:web:a065247f7312af951eab15",
    measurementId: "G-CZTS97G1WY"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
import 'zone.js/dist/zone-error';  // Included with Angular CLI.
