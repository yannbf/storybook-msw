# Storybook with MSW example

This is an example repo for the ones who'd like to setup the [MSW](https://github.com/mswjs/msw) library with Storybook. It's pretty useful when you have components that do fetch requests and you want to mock them for your Storybook stories.

## Integration Steps

1 - Install MSW
```
yarn add -D msw
```

2 - Add MSW's service worker to your project (define your public dir as an argument)
```
npx msw init ./public
```
_You should re-run this command when you update the version of msw._

3 - Register MSW in Storybook.
In Storybook, `preview.js` is one of the files that execute prior to the stories being loaded, so that's where we want to register the service worker.

That's it, the service worker should be correctly registered, proxying every http request being made in your components!
