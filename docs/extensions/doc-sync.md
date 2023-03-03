---
id: doc-sync
title: Doc Sync
slug: /extensions/doc-sync
---

import docsync1 from './assets/docsync1.png';

The **DocSync Extension** is an extension for syncing data-fields between two documents on firestore.

<img src={docsync1} alt= "DocSync Extension" />

## Working

The extension works by **listening to changes on a document and then syncing the data** to another document.


The DocSync extension accepts three properties:

- `row`: It is an object representing a row of data. It is the data that is being synced.
- `targetPath`: It is a string representing the path of the document in Firebase Firetore, to which the data is being synced.
- `fieldsToSync`: It is an array of strings representing the fields in row that should be synced to Firestore.

## Usage

```typescript
const extensionBody: DocSyncBody = async({row, db, change, ref}) => {
  // you can pull data from additional sourced here or preform data transformation here 
  return ({
    fieldsToSync: ["firstName"],    // a list of string of field names to sync
    row: row,    // object of data to sync, usually the row itself or a modified object
    targetPath: `secondaryCollection/${ref.id}`,  // path to document you need data to be synced to
  })
}
```
