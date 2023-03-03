---
id: doc-sync
title: Doc Sync
slug: /extensions/doc-sync
---

import docsync1 from './assets/docsync1.png';

The **DocSync Extension** is an extension for syncing data-fields between two documents on firestore.

<img src={docsync1} alt= "DocSync Extension" />

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
