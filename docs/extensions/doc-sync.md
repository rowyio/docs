---
id: doc-sync
title: DocSync
slug: /extensions/doc-sync
---

import docsync1 from './assets/docsync1.png';
import docsync2 from './assets/docsync2.png';

The **DocSync Extension** is an extension for syncing data-fields between two documents on firestore.

<img src={docsync1} alt= "DocSync Extension" />

## Working

The extension works by **listening to changes on a document and then syncing the data** to another document.


The DocSync extension accepts three properties:

- `row`: It is an object representing a row of data. It is the data that is being synced.
- `targetPath`: It is a string representing the path of the document in Firebase Firetore, to which the data is being synced.
- `fieldsToSync`: It is an array of strings representing the fields in row that should be synced to Firestore.

### Working based on trigger types

The extension will perform actions based on its trigger type, which is defined in the extension's configuration modal.

<img src={docsync2} alt="DocSync Extension Modal" />

- If the Trigger Event is `delete`, the function will **attempt to delete the document** at `targetPath` in the Firestore database.

- If Trigger Event is `update`, the function will **check** if any of the fields in `fieldsToSync` have changed between the before and after states of the document. If any of these fields have changed, the function will **attempt to update the document at targetPath with the new data**.

- If Trigger Event is `create`, the function will **attempt to create a new document** at targetPath with the data in the record object.


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
