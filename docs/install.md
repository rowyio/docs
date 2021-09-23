---
id: install
title: Installing Rowy
sidebar_label: Install
---

### Using one click deploy - ✅ Recommended

<p>You can easily setup Rowy on your Google Cloud/Firebase project using this one-click deploy. This will install Rowy using a Cloud Run instance and guide you with a step by step process to getting started effortlessly.  
<a href="https://deploy.cloud.run/?git_repo=https://github.com/rowyio/rowyRun.git" target="_blank">
<img src="../docs/assets/button.svg" alt="One Click Deploy" title="One Click Deploy" width="250" height="100" /></a></p> 
Once installed you will be guided in the Rowy UI to 

### Using Yarn - Manual

If you don’t want to [setup Rowy](install#using-one-click-deploy----recommended) as described above, then follow these steps to install it manually. Note these steps involve familiarity with roles based access controls.

#### Installation requirements

- [Git](https://git-scm.com/downloads)
- [Node](https://nodejs.org/en/download/) 10+
- [Yarn](https://classic.yarnpkg.com/en/docs/install/) 1
- [Firebase CLI](https://firebase.google.com/docs/cli) 8+

Before proceeding, make sure you are logged in to your Firebase account in the Firebase CLI:
```
firebase login
```

#### 1. Clone this repo.
```
git clone https://github.com/rowyio/rowy.git
```    

#### 2. Set React app environment variables.
- Create a .env file
- Get the Firebase **Project ID** and **Web API Key** from your Firebase project’s **Settings** page. Click the cog icon on the left sidebar (under the Firebase logo) and click **Project settings.**
    ``` 
    REACT_APP_FIREBASE_PROJECT_ID = 
    REACT_APP_FIREBASE_PROJECT_WEB_API_KEY = 
    ```
- (Optional) Get the generated **Application ID** and **Search-Only API Key** from the Algolia **API Keys** page.
    ```
    REACT_APP_ALGOLIA_APP_ID = 
    REACT_APP_ALGOLIA_SEARCH_API_KEY = 
    ```

#### 3. Install front-end dependencies using Yarn.
```
cd www
yarn
```
