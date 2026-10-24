---
order: 1
section: software
title: Motoko Language Tooling
type: Developer tools
relatedRole: dfinity-foundation
summary: A suite of tools that made the Motoko programming language easier to write, test, preview, and embed.
---

Led development of programming language tooling for Motoko, the smart contract language of the Internet Computer. The tools connect editor workflows with browser and Node.js environments using TypeScript, Rust, and WebAssembly.

- **[VS Code extension](https://github.com/caffeinelabs/vscode-motoko):** type checking, IntelliSense, go to definition, hover docs, import organization, snippets, `dfx.json` validation, one-click temporary deployment, and Mops and Vessel package support. It works standalone without `dfx` on all major operating systems, has more than 85,000 installs, and has had 150+ releases.
- **[Formatter](https://github.com/caffeinelabs/prettier-plugin-motoko) (`prettier-plugin-motoko`, `mo-fmt`):** a Prettier plugin and standalone CLI with import organization, used by 550+ projects.
- **[Live-reload server](https://github.com/caffeinelabs/motoko-dev-server) (`mo-dev`, `mo-test`):** redeploys canisters, regenerates type declarations, and runs `*.test.mo` unit tests on file change; used by 400+ projects.
- **[Compiler npm package](https://github.com/caffeinelabs/node-motoko) (`motoko`):** compiles and runs Motoko in Node.js or the browser, with a virtual file system, Candid and WebAssembly output, parse trees, and GitHub package loading; used by 460+ projects.
- **[Embed service](https://github.com/caffeinelabs/embed-motoko) ([announcement](https://levelup.gitconnected.com/embed-motoko-interactive-smart-contracts-in-your-medium-story-or-blog-post-58c85719eee6)):** interactive, runnable Motoko snippets for Medium articles, blogs, and websites via iframe and oEmbed.
- **[Starter projects](https://github.com/rvanasa/vite-react-motoko):** Vite + React + Motoko template (58 stars, 30+ forks), plus [Motoko + Rust](https://github.com/rvanasa/motoko-rust-starter), [Vite + React + Rust](https://github.com/rvanasa/vite-react-icp-rust), and [Advent of Code](https://github.com/rvanasa/aoc-motoko-starter) templates.
- **Language and library utilities:** [`mo-convert`](https://github.com/rvanasa/mo-convert) (90+ consistently named base library type conversions), syntax highlighting for [highlight.js](https://github.com/rvanasa/highlightjs-motoko) and the [Discourse](https://github.com/rvanasa/discourse-highlightjs-motoko) developer forum.