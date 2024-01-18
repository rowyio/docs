---
id: overview
title: Webhooks
sidebar_label: Overview
slug: /webhooks
---

Webhooks allow to process incoming events from external services, to notify your
system of changes.

Rowy Webhooks run on google cloud run make sure you have setup Rowy Run services
[here](https://docs.rowy.io/rowy-run)

## Webhook anatomy

#### Type

- the the service being integrated, Rowy currently Supports Typeform, Sendgrid,
  Github, and a Basic Type for support any service, Unique types support
  different verification methods based of the external service.

#### Verification

Authentication method for verifying the source of the webhook call, to insure
that the calls are not coming from Mallicous actors. Note: Webhook verification
is optional, specially during the prototyping stage.

#### Condition

A function that looks at the incoming request then returns a true or false,
based on its values or combination other data in your database to determine if
the request should be processed.

##### Base Condition
The base condition used for 
```typescript
const condition: Condition = async ({ ref, req, db }) => {
  // feel free to add your own code logic here
  return true;
};
```

##### Example Condition

```typescript
const condition: Condition = async ({ ref, req, db }) => {
  const { body, headers } = req;
  // query a settings webhook settings collection with user-agent
  const webhookSettingsQuery = await db
    .collection("webhookSettings")
    .where("application", "==", headers["user-agent"])
    .get();
  const webhookSettingsDoc = webhookSettingsQuery[0].data();
  // return false if theres no settings doc, or the settings doc is not enabled
  if (!webhookSettingsDoc || !webhookSettingsDoc.enabled) return false;
  else return true;
};
```

#### Parser

a function that takes in the request and processes it, then optionally return
object that will automatically add new row, alternatively you can write anywhere
in your database using the `db` parameter or `ref` to reference the table's
collection directly.
