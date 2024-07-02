# What is Eden UI?

Eden UI is a set of components and utilities to build frontend apps based on the
[Eden Platform](https://eden.dpcco.me).

Along with generic components which are required to build a frontend like
Button, Link, Dialog, etc., eden-ui also contains utilities for handling
server-side data fetching, directives and utilities.

**Usage example**

```vue
<script setup>
import { Button, LoadingText, createResource } from 'eden-ui'

let todos = createResource({
  type: 'list',
  doctype: 'ToDo',
  fields: ['name', 'description'],
  cache: 'ToDos',
  auto: true,
})
</script>

<template>
  <LoadingText v-if="todos.loading" />
  <ul v-else>
    <li v-for="todo in todos.data" :key="todo.name">
      {{ todo.description }}
    </li>
  </ul>
  <Button>Add ToDo</Button>
</template>
```

## Dependencies

Eden UI is built on top of the following amazing projects &ndash;

- [Vue 3](https://vuejs.org)
- [TailwindCSS](https://tailwindcss.com)
- [Headless UI](https://headlessui.com)
- [PopperJS](https://popper.js.org/)
- [TipTap](https://tiptap.dev)
- [Feather Icons](https://feathericons.com)

See full list of dependencies:
[package.json](https://github.com/eden-platform/ui/blob/main/package.json)

## Motivation

In building the Eden Platform to create the world's best Application platform,
we needed a way to build applications that might not be easy to conform to a
CRUD application model. Highly interactive apps, or consumer facing applications
do not need the same interactivity that most business applications do. This UI
framework is designed to provide an easy starting point, connected to exisiting
business data, to give customers, employees, partners, vendors, or consumers a
application tailored to the purpose they need.

This will eventually be used as the one UI framework across the entire Eden
Platform.

## License

Eden UI is MIT licensed
