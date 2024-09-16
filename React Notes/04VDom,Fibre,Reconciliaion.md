# Virtual DOM, Fiber and Reconciliation

- Now Virtual DOM is not used in the React

## Behind the scene in main.jsx 

- `createRoot` create DOM like tree structure
- It compares its DOM with real DOM and update only those changes
- But in cases where multiple updates came and UI get update instantaneously
- To avoid this instant update and to update for final change

## React Fiber Archietecture

### Introduction

React fiber is an ongoing reimplementation of React's core algorithm, it is the culmination of over two years of react by the React team.

The goal of React Fiber is to increase its suitability for the areas like animation, layout and gestures. Its headline feature is incremental rendering: the ability to spilit rendering into chunks and spread it out over multiple framers.

Other key features include the ability to pause, abort or reuse work as new updates in the ability to assign priority to different types of updates: and new concurrent primitives.

#### Fiber introduces several novels concepts that are difficult to grok solely looking at code.

#### Fiber is in present is well implemented and optimised.


### Prerequisits - All you read till now.

- React Components, Elements and Instances
- Reconciliation
- React Basic Theoretical Concepts
- React Design Principles

### What is reconciliation?

The algorithm react uses to diff one tree with another to determine which part need to be changed.
Just like git differ between ealier and changed file.

#### Update

A change in the data used to render a React app. Usually the result of `setState`. Eventually results in a re-render.

The central idea of React's API is to think of updates as if they cause the entire app to re-render. This allows the developer to reason declaratively, rather than worry about how to efficiently transition the app from any particular state to another (A to B, B to C, C to A and so on).

