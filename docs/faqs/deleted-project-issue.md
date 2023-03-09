---
id: deleted-project
title: Can't recreate project after deletion?
# sidebar_label: deleted-project
slug: /faqs/deleted-project
---

If you have accidentally deleted your project on Rowy and are unable to re-create it, there is a manual workaround that you can perform to reinstate your lost authentication connection with Rowy. 

## Manual Workaround for Rowy Project Deletion Issue

Follow the steps below to manually re-instate your connection:

### Step 1: Deleting Cloud Run Instances

The first step is to delete the two specified Cloud Run instances that are associated with your Rowy project. These instances are:
- `rowy-backend`
- `rowy-hooks`

To delete these instances, go to https://console.cloud.google.com/run and navigate to the **Cloud Run** section. Find the `rowy-backend` and `rowy-hooks` instances associated with your project and delete them.


### Step 2: Deleting Rowy Service Accounts

The next step is to delete the Rowy service accounts that are associated with your project. These service accounts have the format of `rowy-*@projectId.iam.gserviceaccount.com`.

To delete these service accounts, go to https://console.cloud.google.com/iam-admin/iam and navigate to the **Service Accounts** section. Find the Rowy service accounts associated with your project and delete them.
