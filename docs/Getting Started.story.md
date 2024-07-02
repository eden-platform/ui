# Getting Started

This page will help you with setting up `eden-ui` in a new project as well as an
existing Eden project.

## Quick start

TODO: Add Quickstart project

### 1. Create your Eden app

```sh
bench new-app todo
```

### 2. Setup eden-ui

```sh
cd apps/todo
# this will setup a vue project with eden-ui set up
# inside the frontend directory
#npx degit netchampfaris/eden-ui-starter frontend
```

Refer [eden-ui-starter](https://github.com/netchampfaris/eden-ui-starter) for
more details.

### 3. ignore_csrf config

```sh
bench --site todo.test set-config ignore_csrf 1
```

This will prevent CSRFToken errors while using the vite dev server. In
production environment, the csrf_token is attached to the window object in
index.html for you.

### 4. Start dev server

```sh
cd frontend
yarn
yarn dev
```

The Vite dev server will start on the port `8080`. This can be changed from
`vite.config.js`. The development server is configured to proxy your eden app
(usually running on port 8000). If you have a site named `todo.test`, open
`http://todo.test:8080` in your browser. If you see a button named "Click to
send 'ping' request", congratulations!

If you notice the browser URL is `/frontend`, this is the base URL where your
frontend app will run in production. To change this, open `src/router.js` and
change the base URL passed to `createWebHistory`.
