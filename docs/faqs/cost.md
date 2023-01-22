---
id: cost
title: Cost of using Rowy
sidebar_label: Cost
slug: /faqs/cost
---

## What would using Rowy cost me?

You can use Rowy in two modes. Rowy Base and Rowy Pro.

Rowy Base is the free tier and Rowy Pro Team is the paid tier offereing advanced features. Detailed breakdown of the featues and pricing is available [here](https://www.rowy.io/pricing).

## Rowy Base - Free

- A fully free and open-source hosted version of the Rowy App
- Get access to the core features: CMS for one Firestore project. Ability to import and export data in bulk - csv, tsv, json formats Automate tasks and workflows with cloud functions (unlocked by deploying of Rowy Run).

    
   ### **Rowy Cost**
    
    Under Rowy Base, you will not incur any charge from Rowy

    
   ### **Rowy Base - GCP Cost**
    
    - Rowy is connected to your own Firebase/GCP project and is 100% serverless, which means theres no ongoing server cost on GCP. 
    - You can use Rowy's CMS without turning on billing on your GCP project and you only need to turn it on if you want to use Rowy with cloud functions. 
    - Note the billing referred here is on your own GCP project and not Rowy. <b>Infact, you can build unlimited cloud functions on Rowy, even on the free base tier. </b>This is driven by our core vision to enable you to build products without limitations and to be aligned with our users in our pricing. 

    <b>Pricing Calculator</b>: With Rowy, you are mainly using Firestore, cloud functions and cloud run. GCP’s free tier is quite generous with $300 in credits for all Firebase projects and if you are a startup you get up-to [$100K in credits](https://cloud.google.com/startup).
    - Table below details the cost breakdown by main usecases of Rowy. You can also use Google Cloud [price calculator](https://cloud.google.com/products/calculator) to further analysis your long term costs depending on how heavy your usage will be.
        
        
        | Usecase | Free Tier of GCP | Post Free Tier and after exhausting free credits from GCP |
        | --- | --- | --- |
        | CMS without installing Rowy Run for workflow automations | Free upto 1GB of stored data, see GCP’s free quota tier pricing | On average, $0.1/GB/ month based on the region. See the cost by region for storage/read/write here |
        | Workflows and automations with cloud functions by deploying Rowy Run | Free upto 2M invocations/month. Free upto 120 build minutes per day.  | Invocations: $0.04/million. Building: $0.003/min |

## Rowy Pro - Paid (First month free)

Rowy Pro is paid and you can see the full details of the pricing [here](https://rowy.io/pricing)

### **Pro features**

- Multiple Firebase projects
- CMS with advanced filtering, sorting and full-text search
- Code sandbox and testing environment for cloud functions, derivatives and extensions
- Move/clone data tables from one project to another
- View data in Table and Gallery modes
- Embeddable tables and sharable URLs
- Custom support