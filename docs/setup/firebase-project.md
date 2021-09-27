---
id: firebase-project
title: Set up a Firebase project
slug: /setup/firebase-project
---

Rowy connects to your existing Firebase projects and requires Firestore and
Authentication enabled.

1. Create a new project using the
   [Firebase Console](https://console.firebase.google.com/).

   ![Screenshot of Firebase project creation UI](./assets/create-firebase-project.png)

2. Create a Firestore database using the
   [Firebase Console](https://console.firebase.google.com/project/_/firestore).  
   [Firebase instructions&nbsp;↗️](https://firebase.google.com/docs/firestore/quickstart#create)

   ![Screenshot of Firestore database creation UI](./assets/create-database.png)

3. Set up Firestore Security Rules. You have three options:

   1. Use Test Mode in the database creation workflow.
   2. If you didn’t select Test Mode, but would like to allow unlimited access
      to the entire database for testing purposes, use the following rules.
      Paste the following code in the
      [Rules tab](https://console.firebase.google.com/project/_/firestore/rules)
      in the Cloud Firestore section of the Firebase Console.
      ```js
      rules_version = '2';
      service cloud.firestore {
        match /databases/{database}/documents {
          match /{document=**} {
            allow read, write: if true;
          }
        }
      }
      ```
   3. Set up your own custom rules with role-based access
      [using our guide](./roles).

4. Upgrade project to the Blaze Plan. This is required to deploy any Cloud
   Functions. You can stay on the Spark Plan (free) until you upload a Cloud
   Function.

5. Enable the Google sign-in method in
   [Authentication > Sign-in method](https://console.firebase.google.com/project/_/authentication/providers).  
   [Firebase instructions&nbsp;↗️](https://firebase.google.com/docs/auth/web/google-signin)

   ![Screenshot of Firebase Auth UI](./assets/enable-google-sign-in.png)
