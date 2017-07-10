# iView SSR Test Project

> iView SSR test based on nuxt framework.

## Notice

Since we use iview/iview as a git submoudle, you can only help us test the components but you cannot fix any bugs caused by iview itself beacuse users who fork this repo don't have the push permission for its submodule (iview/iview).

If you want to help us test iview components, you have to fork this repo and an iview repo, then replace the submodule in (plugins/iview) with your iview fork.

## Clone

```
git clone --recursive [project url]
```

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).


