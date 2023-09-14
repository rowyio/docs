---
id: database
title: Database
sidebar_label: Database
slug: /faqs/database
---

## Where is my data stored?

The data created and managed on Rowy is stored on your own Firebase/Firestore database on Google Cloud Platform. With Rowy, you can easily create your database on Firestore without having to know any technical details (or) if you already have existing Firestore data, you can connect to them as well. 

Rowy configuration data is stored a new collection created in your Firestore database called "_rowy_"

Rowy offers ability to get started in a no-code Airtable-like experience on production grade database - so no limitation of how many rows your can have or scalability. You can also go to code level anytime you want without limitations. You can write cloud-functions on Rowy's inbuilt code-editor (in JS, using any NPM or API) or build continue using your usual development flow in VSCode/other editors with Firebase Admin SDK. There is no limitations of functionality or disruption to your process by using Rowy. Your data and code stay on your own Firebase project.

### Can I see my existing Firestore collections in Rowy?

Yes! This is one of the main use cases for Rowy. When you click **Create
table**, you will see a list of your existing collections in **Collection name**
if you deployed [Rowy Run](../rowy-run/overview.mdx). If you did not, you can
click **Add collection** in the popup and type the collection name you want to
display in the table.

### How does Rowy perform for a large number of rows? How many rows you can render in one session? Is there any throttling?

Rowy fetches the rows of data as you keep scrolling on the screen and renders
only what you see on screen. The UI is very responsive and so you can continue
to scale to any number of tables and rows. Also, since we are built on the
Firestore database, it is the same DB throttling as what Firestore provides
which is 10MB IOPS. Rowy do not have any additional limitations than what a
production database would.

### Do you support `[another database]`?

At the moment, we only support Firestore. Let us know on
[Discord](https://discord.com/invite/B8yAD5PDX4) if you would like us to support
another database and which database. We would like to hear about your use case.