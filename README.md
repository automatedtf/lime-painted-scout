# lime-painted-scout

### **Table of Contents**
- [Introduction](#introduction)
- [Usage](#usage)
- [Phrase Composition](#phrase-composition)
- [Examples](#examples)

## Introduction

A module for generating 3-word-long phrases suitable for generating a unique identifier randomly or by hashing an input. These words are derived from the game *Team Fortress 2*, with the module being heavily inspired by [angry-purple-tiger](https://github.com/helium/angry-purple-tiger).

## Usage
This module exports the function `tf2Hash: (input?: string) => string`.

##### Example Usage
```typescript
import tf2Hash from "@automatedtf/lime-painted-scout";
...
const hash = tf2Hash("sometext"); // Hash of "sometext"
...
const randomHash = tf2Hash(); // A randomly generated hash
...
```

## Phrase Composition
All phrases are composed of the form `firstAdjective-secondAdjective-noun`.

##### First Adjective
A `firstAdjective` is a word from any of the following categories:
- Paints (e.g `lime`, `muskelmannbraun`)
- Qualities (e.g `unique`, `genuine`)

*[🔗 All possible 'first-adjectives'](https://github.com/automatedtf/lime-painted-scout/blob/master/lib/first-adjectives.ts)*

##### Second Adjective
A `secondAdjective` is a word from any of the following categories:
- Modifications (e.g `painted`, `spelled`)
- Variations (e.g `australium`, `festive`)

*[🔗 All possible 'second-adjectives'](https://github.com/automatedtf/lime-painted-scout/blob/master/lib/second-adjectives.ts)*

##### Noun
A `noun` is a word from any of the following categories:
- Classes (e.g `spy`, `heavy`)
- Weapons (e.g `wrench`, `kunai`)
- Maps (e.g `badlands`, `foundry`)

*[🔗 All possible 'nouns'](https://github.com/automatedtf/lime-painted-scout/blob/master/lib/nouns.ts)*

## Examples
These are examples of strings that can be generated from the hashing function `tf2Hash`.
- `lime-painted-scout`
- `vintage-gifted-ravine`
- `genuine-spelled-cauldron`
- `selfmade-killstreaked-spy`