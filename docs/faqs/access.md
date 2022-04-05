---
id: access
title: Cloud platform access
sidebar_label: Access
slug: /faqs/access
---

### What does granting access to cloud platform with Google Authentication during setup mean for you?

Rowy is an Google approved app for cloud platform scope to automate the setup with a guided process end-to-end. With this access, you can avoid going back and forth to the cloud console for granting various permissions at config level during setup process. Your data and code stay on your own GCP/Firebase project, Rowy does not store them.

Rowy is [open-source](https://github.com/rowyio/rowy) and can alternatively be self hosted if you do not want to use the guided setup process.

### List of services used by Rowy during setup with the cloud platform access:

- **Creation of a new Firebase project** with a single click or getting the list of your existing Firebase projects to select from.
- **Enable Firebase and Firestore Storage**, if it is not already turned on. This is for storing any images or files that you will add to you collections.
- **Enable Firebase Authentication**, if it is not already turned on. Firebase Auth here will be used for authenticating into the Rowy App.
- **Setup the Firebase rules:**
    - In the case of a new Firebase project, this is completely automted
    - For existing Firebase project, Rowy will show you the exact rule snippet that needs to be added. You can do this manually or apply using a single click during onboarding after looking verifying at the rules diff on screen.

Once Rowy setup is complete, you will get a hosted Rowy App URL (**yourprojectid.rowy.app**). You can build and manage your tables, invite your team members with granular access controls. With Firebase Auth, only users with specific roles as per the Firestore rules will be able to access the data. Therefore you have full ability to control access permissions at table as well as field level.