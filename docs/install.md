---
id: install
title: Installing Rowy
sidebar_label: Install
slug: /install
---

### Using one click deploy - ✅ Recommended

You can easily setup Rowy on your Google Cloud/Firebase project using the
following one-click deploy button. This will install Rowy using a Cloud Run
instance and guide you with a step by step process.

####  Prerequisites ⚠️

Before starting make sure you have a firebase project setup with **Firestore** and **Firebase Auth** enabled.

#### Deploy!

Click the button👇

[![Run on Google Cloud](https://deploy.cloud.run/button.svg)](https://deploy.cloud.run/?git_repo=https://github.com/rowyio/rowyRun.git)

Note this runs Rowy Run (an open source, cloud run instance) that operates
exclusively on your GCP project and we will never have access to your service
account or any of your data.

Once installed, you will be given an URL to the Rowy App and follow it to get
started as highlighted below.

![Cloud Run Output](./assets/cloud-run.png)

### Using Yarn - Manual

If you don’t want to [setup Rowy](install#using-one-click-deploy----recommended)
as described above, then follow these steps to install it manually. Note these
steps involve familiarity with roles based access controls.

#### Installation requirements

- [Git](https://git-scm.com/downloads)
- [Node](https://nodejs.org/en/download/) 10+
- [Yarn](https://classic.yarnpkg.com/en/docs/install/) 1
- [Firebase CLI](https://firebase.google.com/docs/cli) 8+

Before proceeding, make sure you are logged in to your Firebase account in the
Firebase CLI:

```
firebase login
```

#### 1. Clone this repo.

```
git clone https://github.com/rowyio/rowy.git
```

#### 2. Set React app environment variables.

- Create a .env file
- Get the Firebase **Project ID** and **Web API Key** from your Firebase
  project’s **Settings** page. Click the cog icon on the left sidebar (under the
  Firebase logo) and click **Project settings.**
  ```
  REACT_APP_FIREBASE_PROJECT_ID =
  REACT_APP_FIREBASE_PROJECT_WEB_API_KEY =
  ```

#### 3. Install front-end dependencies using Yarn.

```
yarn
```

#### 4. Run the app locally.

```
yarn start
```
