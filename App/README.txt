npm install -g @capacitor/cli (for cap commands)

- To run on android (requires android studio setup)
    - npm run build
    - npx cap add android
    - npx cap sync android
    - npx cap open android

- To run on ios (requires xcode setup)
    - npm run build
    - npx cap add ios
    - npx cap sync ios
    - npx cap open ios

- For Capacitor google-maps
    - We are waiting for a release of some google maps native dependencies to add Swift Package Manager support and ship with everything up to date.

    -For the moment you can install the RC version with npm install @capacitor/google-maps@next, but have in mind that the final version will require iOS 14 (while Capacitor itself still allows iOS 13) because of the google maps dependencies requiring iOS 14 or newer.

- Add GOOGLE_MAPS_API_KEY=YOUR_API_KEY in android/.env