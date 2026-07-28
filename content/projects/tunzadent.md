---
title: "Tunzadent"
summary: "ML web app that predicts dental cavities from bitewing X-rays."
stack: ["Python", "Django", "React.js", "MySQL"]
status: "4th year project — 2025"
link: "https://tunzadent.vercel.app/"
---

Tunzadent is a web-based machine learning application that predicts dental
cavities in bitewing dental X-rays, built as my 4th year project at
Strathmore.

## Approach

The core of the system uses a self-supervised vision transformer
architecture to classify X-ray images. This lets the model learn useful
representations from unlabeled dental imagery before fine-tuning on the
cavity-detection task.

## Stack

Backend built with Django (Python), frontend in React.js, with MySQL for
storage.

Live at [tunzadent.vercel.app](https://tunzadent.vercel.app/).
