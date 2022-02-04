---
id: overview
title: Extensions
sidebar_label: Overview
slug: /extensions
---

Extensions are Cloud Functions that simplify integrations with Firestore.
Extensions require [Rowy Run](https://github.com/rowyio/rowyrun) to be set up.

Extensions that integrate third-party services use
[Google Secret Manager](https://cloud.google.com/secret-manager) to store and
access the secrets of the services. Ensure that the Secret Manager is enabled
and the required secret added before using the extension in Rowy.

## Extension anatomy

- type - name of the extension
- triggers - create/update/delete events
- Condition - a function that returns a true or false, to determine if an extension should be executed
- requiredFields - required columns fields for this extension
- extensionBody - function that structures the data for your extension


## 🚨 Secret Mananger Access
Before using extensions that require secrets, ensure that you have given the cloud function service account access to secret manager, by assigning it `Secret Manager Accessor Roles`
You can manage IAM permissions [here](https://console.cloud.google.com/iam-admin/iam).

The cloud function default service account is `projectId@appspot.gserviceaccount.com`

⚠️ Skipping this step can cause premission error
