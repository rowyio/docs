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
