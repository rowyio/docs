---
id: deleted-project
title: Can't recreate project after deletion?
# sidebar_label: deleted-project
slug: /faqs/deleted-project
---

import deletedProject1 from './assets/deleted-project1.png';
import deletedProject2 from './assets/deleted-project2.png';
import deletedProject3 from './assets/deleted-project3.png';

If you have accidentally deleted your project on Rowy and are unable to re-create it, there is a manual workaround that you can perform to reinstate your lost authentication connection with Rowy. 

## Manual Workaround for Rowy Project Deletion Issue

Follow the steps below to manually re-instate your connection:

### Step 1: Deleting Cloud Run Instances

The first step is to delete the two specified Cloud Run instances that are associated with your Rowy project. These instances are:
- `rowy-backend`
- `rowy-hooks`

<img src = {deletedProject1} alt="Cloud Run instances to delete" />

To delete these instances, go to https://console.cloud.google.com/run and navigate to the **Cloud Run** section. Find the `rowy-backend` and `rowy-hooks` instances associated with your project and delete them.


### Step 2: Deleting Rowy Service Accounts

The next step is to delete the Rowy service accounts that are associated with your project. These service accounts have the format of `rowy-*@projectId.iam.gserviceaccount.com`.

<img src = {deletedProject2} alt="Rowy Service Accounts to delete" />

To delete these service accounts, go to https://console.cloud.google.com/iam-admin/iam and navigate to the **Service Accounts** section. Find the Rowy service accounts associated with your project and delete them.


### Step 3: Deleting Firestore Settings

Now, you need to delete the specified Firestore settings associated with your Rowy project, as given in the image below.

To delete these settings, navigate to your **Firestore console**. Find the `_rowy_` collection, inside the `settings` document delete the following fields:

<img src = {deletedProject3} alt="Rowy Firestore settings to delete" />


### Step 4: Add a Confirmation Email from Project/Workspace Owner

Once you have completed the above steps, reach out to us either via email at [support@rowy.io](mailto:support@rowy.io), or send a direct message to any of the members with the **Team** tag on our Discord server with your project and email details. 

Provide them with the necessary information about your project, such as the **Project ID**, and explain that you have performed the above steps to re-instate your connection.

:::warning Necessary Requirement!

Before proceeding with the project deletion process, we need to **confirm the request with the project/workspace owner** via email.

The project owner must email to us at [support@rowy.io](mailto:support@rowy.io). We are following this procedure to **prevent unauthorized data deletion** and only **after successful verification** will we proceed with the deletion process. 

:::

Rowy support will then fix the issue on the backend, and you should be able to re-create your project on Rowy without any further issues! 🚀