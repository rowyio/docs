---
id: install
title: Setup
slug: /setup/install
---

import Video from "../../src/components/Video.js";

Set up Rowy on your Google Cloud or Firebase project in minutes.

## Option 1: Quick setup — ✅ Recommended

This takes less will take less than 2 minutes to get setup. 

<p>
<a href="https://rowy.app/" class="button button--lg">Setup now</a>
</p>

You can use Rowy with an existing Firebase project or create a new one during the setup.

<i>Don't worry if you have not used Firebase before, Rowy will guide you through the process. </i>  <br/><br/>

<Video controls url="https://www.youtube.com/watch?v=7Vc-ZJDNYbM" />

## Option 2: Manual install

This option is only recommended if you want to develop and contribute to the project. 

:::warning Important note

- This setup is for developers wanting to contribute to Rowy open source project
- You have familiarity with Firebase and GCP console
- This option will not get automatic updates with latest feature. To get automatic updates, use [Option 1](/setup/install#option-1-quick-setup---recommended)
- There are also some [known issues](/setup/install#common-issues-with-option-2---manual-install) with manual install and we are not able to provide support for this option

If you want a nocode / lowcode like setup experience use Option 1 above. Also, to get Rowy Pro features and latest updates use 

- Before starting, make sure you have a Google Cloud or Firebase project with
**Firestore** and **Firebase Authentication** enabled.

Don’t have a project? [Learn how to create one&nbsp;→](./firebase-project.md)

:::

:::note Required software

- [Git](https://git-scm.com/downloads)
- [Node](https://nodejs.org/en/download/) 16+ (it’s easiest to install using
  [nvm](https://github.com/nvm-sh/nvm#intro))
- [Yarn](https://classic.yarnpkg.com/en/docs/install/) 1
- [Firebase CLI](https://firebase.google.com/docs/cli) 8+

:::

1. Make sure you’re logged in to your Firebase account in the Firebase CLI:

   ```bash
   firebase login
   ```

2. Clone the Rowy repo and open the created directory.

   ```bash
   git clone https://github.com/rowyio/rowy.git
   cd rowy
   ```

3. Set environment variables.

   - Create a `.env` file.
   - Get the **Project ID** and **Web API key** in the
     [Firebase Console&nbsp;&UpperRightArrow;](https://console.firebase.google.com/project/_/settings/general)  
     Can’t see it?
     [Enable Firebase Authentication&nbsp;&UpperRightArrow;](https://console.firebase.google.com/project/_/authentication)
     first.
   - Paste them in the `.env` file:
     ```bash
     VITE_APP_FIREBASE_PROJECT_ID=
     VITE_APP_FIREBASE_PROJECT_WEB_API_KEY=
     ```

4. Install frontend dependencies using Yarn.

   ```bash
   yarn
   ```

5. Run the app locally.

   ```bash
   yarn start
   ```

6. Sign in with your Google account. You’ll see an Access denied screen.

7. Set the `ADMIN` role for your account using
   [these instructions&nbsp;&RightArrow;](/how-to/roles?set-user-roles-tabs=admin-sdk#set-user-roles)

8. Sign out and sign in again from the browser, not the terminal to access your Rowy project.

9. Some backend features require Rowy Run to be installed on your project. You’ll
need to install [Rowy Run](/rowy-run) manually. 

10. You will not get updates to Rowy automatically, and would require [manual update](/rowy-run). To get automatic updates to the Rowy App, use the [Option 1](/setup/install#option-1-quick-setup---recommended).

### Common Issues with Option 2 - manual install

1. **ERROR MESSAGE:** `rowy@3.0.0: The engine "node" is incompatible with this module. Expected version ">=16". Got "14.19.0`.

   **FIX:** 
   - Update your node version to 16 or higher by downloading the latest LTS version from https://nodejs.org/en/download/.


2. **ERROR MESSAGE:** `auth/invalid-api-key: Firebase: Error (auth/invalid-api-key).`

   **FIX:** 
   - Login to the firebase account using the **Firebase CLI**. Install Firebase CLI globally using `npm install -g firebase-tools`.
   - **Setting up environment variables** as described in the 3rd step of the manual installation process.
