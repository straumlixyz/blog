---
title: Introducing Hashmarks
tags:
  - research
layout: post
---

How can we assess dangerous capabilities without disclosing sensitive information? Traditional benchmarks are like exams for AI, complete with reference solutions. However, a benchmark on bioterrorism would amount to a public FAQ on a sensitive topic.

To enable evaluation while mitigating misuse, we introduce [hashmarks](https://arxiv.org/abs/2312.00645), a simple alternative to benchmarks. In their basic form, hashmarks are benchmarks whose reference solutions have been cryptographically hashed prior to publication.

To [assess performance on a hashmark](https://arxiv.org/pdf/2312.00645.pdf#page=3), developers first get their AI to answer an exam question. Then, they hash the candidate answer and see whether the hash matches the reference one. If the model got it wrong, the correct answer remains secret.

However, things are not that simple. We investigate [the resilience of hashmarks](https://arxiv.org/pdf/2312.00645.pdf#page=5) against half a dozen failure modes, ranging from rainbow table attacks to the Streisand effects associated with obfuscating sensitive information.

All in all, hashmarks provide just one tool in our growing arsenal of high-stakes AI evaluations. We look forward to engaging with community feedback before pushing forward with concrete instances of hashmarks.
