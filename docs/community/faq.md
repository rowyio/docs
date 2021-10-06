---
id: faqs
title: FAQs
slug: /community/faqs
---

### How does Rowy's perform for large number of rows? How many rows you can render in one session? Is there any throttling?

Rowy fetches the rows of data as you keep scrolling on the screen and renders only what you see on screen. The UI is very responsive and so you can continue to scale to any number of tables and rows. Also, since we are built on the Firestore database, it is the same DB throttling as what Firestore provides which is 10MB IOPS. Rowy do not have any additional limitations than what a production database would.

### Do you support `[another database]`?

At the moment, we only support Firestore. Share with us on
[Discord](https://discord.com/invite/B8yAD5PDX4) if you would like us to support
another database, we would like to hear about your usecase.