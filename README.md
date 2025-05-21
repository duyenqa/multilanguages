This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm install
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More
- The app has been added multiple language

```bash
The organization of the folder is as follows:
src
--app
---[locale]
-----layout.tsx
-----page.tsx
-----globals.css
-----about
-------page.tsx
-----contact
-------page.tsx
--components
----Navbar.tsx
----DropdownMenu.tsx
--i18n
middleware.ts
```
- The app is only navigation page, it has not multiple language

```bash
The organization of the folder is as follows:
src
--app
---about
----page.tsx
---contact
----page.tsx
--components
```


To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Translate language](https://next-intl.dev/docs/getting-started/app-router/with-i18n-routing) - install i18n library

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

```bash
npm run build
```
- [Fix bug](https://typescript-eslint.io/rules/)
- The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/)
