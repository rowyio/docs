---
id: cost
title: Cost of using Rowy
sidebar_label: Cost
slug: /faqs/cost
---

## What would using Rowy cost me?

You can use Rowy in two modes. Rowy Base and Rowy Pro.

## Rowy Base

- A fully free and open-source hosted version of the Rowy App
- Get access to the core features: CMS for one Firestore project. Ability to import and export data in bulk - csv, tsv, json formats Automate tasks and workflows with cloud functions (unlocked by deploying of Rowy Run).

    
   ### **Rowy Cost**
    
    Under Rowy Base, you will not incur any charge from Rowy

    
   ### **GCP Cost**
    
    - Rowy is 100% serverless, which means theres no ongoing server cost. You only pay for what you use on GCP. With Rowy, you are mainly using Firestore, cloud functions and cloud run. GCP’s free tier is quite generous with $300 in credits for all Firebase projects and if you are a startup you get up-to [$100K in credits](https://cloud.google.com/startup).
    - Table below details the cost breakdown by main usecases of Rowy. You can also use Google Cloud [price calculator](https://cloud.google.com/products/calculator) to further analysis your long term costs depending on how heavy your usage will be.
        
        
        | Usecase | Free Tier of GCP | Post Free Tier and after exhausting free credits from GCP |
        | --- | --- | --- |
        | CMS without installing Rowy Run for workflow automations | Free upto 1GB of stored data, see GCP’s free quota tier pricing | On average, $0.1/GB/ month based on the region. See the cost by region for storage/read/write here |
        | Workflows and automations with cloud functions by deploying Rowy Run | Free upto 2M invocations/month. Free upto 120 build minutes per day.  | Invocations: $0.04/million. Building: $0.003/min |

## Rowy Pro

Rowy Pro is currently being built and launching soon. Rowy Pro will be our paid model that will unlock further features of Rowy for you to expedite development and your product building process. You can join our beta program to access Rowy Pro features early and free for 6 months. Help us shape Rowy with your inputs and feedback 🙏 [**Sign up now.**](https://rowyio.typeform.com/to/GbCw5B9E?typeform-source=docs.rowy.io)

### **Pro features**

- Multiple Firebase projects
- CMS with advanced filtering, sorting and full-text search
- Code sandbox and testing environment for cloud functions, derivatives and extensions
- Move/clone data tables from one project to another
- View data in Table and Gallery modes
- Embeddable tables and sharable URLs
- Custom support

Join [**our beta users group**](https://rowyio.typeform.com/to/GbCw5B9E?typeform-source=docs.rowy.io) to get early access to features, be part of the core team and give valuable feedback to shape the direction of the open-source project 💜