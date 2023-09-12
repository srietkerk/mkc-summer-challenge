import React from 'react'
import './App.css'
import { RootRoute, Router } from '@tanstack/react-router'
import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import Landing from './Pages/Landing/Landing'
import config from '../appconfig.json'


const rootRoute = new RootRoute({
  component: App,
})


// example of another route to add
// const aboutRoute = new Route({
//   getParentRoute: () => rootRoute,
//   path: '/about',
//   component: About,
// })

const routeTree = rootRoute.addChildren([]) // add more created routes in the list
export const router = new Router({ routeTree })

// Register your router for maximum type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

function App() {
  return (
    <>
      <FluentProvider theme={webLightTheme}>
        <Landing config={config} />
      </FluentProvider>
    </>
  )
}

export default App
