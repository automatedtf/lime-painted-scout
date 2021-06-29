# lime-painted-scout

### **Table of Contents**
- **Introduction**
- **Usage**
- **Composition**
- **Examples**

## Introduction

A module for generating 3-word-long phrases suitable for generating a unique identifier randomly or by hashing an input. These words are derived from the game Team Fortress 2, with the module being heavily inspired by [angry-purple-tiger](https://github.com/helium/angry-purple-tiger).

## Usage
This module exports the function `tf2Hash: (input?: string) => string`.

##### Example Usage
```
import tf2Hash from "@automatedtf/lime-painted-scout";
...
let hash = tf2Hash("sometext"); // Hash of "sometext"
...
let randomHash = tf2Hash(); // A randomly generated hash
...
```

## Composition
All phrases are composed of the form `firstAdjective-secondAdjective-noun`.

##### First Adjective
A `firstAdjective` is a word from any of the following categories:
- Paints
- Qualities

##### Second Adjective
A `secondAdjective` is a word from any of the following categories:
- Modifications

##### Noun
A `noun` is a word from any of the following categories:
- Classes
- Weapons
- Maps

## Examples
These are examples of strings that can be generated from the hashing function `tf2Hash`.
- `lime-painted-scout`
- `vintage-gifted-ravine`
- `genuine-spelled-cauldron`
- `selfmade-killstreaked-spy`