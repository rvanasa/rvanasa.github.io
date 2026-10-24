---
order: 4
section: software
title: Incremental Computation Visualizer
type: Programming language theory
relatedRole: cu-boulder-research
summary: "An online visualization tool for the paper 'Fungi: Typed incremental computation with names.'"
---

Built an interactive visualization tool in Rust to accompany research on typed incremental computation with names. The project made the programming language output explorable in a browser.

Incremental computations reuse work that is unaffected when their inputs change. To do this in a general-purpose language, programmers need a way to identify which dynamic allocations (data and subcomputations) correspond across runs. Fungi, a typed functional language by Matthew A. Hammer, Jana Dunfield, Kyle Headley, Monal Narasimhamurthy, and Dimitrios J. Economou, makes these names formal and statically verifiable. Its type-and-effect system lets programmers encode local invariants about names and use them to prove global uniqueness, meaning names are used correctly. The paper proves that well-typed Fungi programs respect global uniqueness, and a Rust prototype of the language was applied to a library of incremental collections.

The visualizer lets readers step through Fungi programs and inspect their incremental behavior directly in the browser, instead of reading only the formal semantics.

[Paper on arXiv](https://arxiv.org/abs/1808.07826)
