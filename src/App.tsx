import React from 'react'
import { Outlet, RootRoute, Route, Router } from '@tanstack/react-router'
import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import Landing from './Pages/Landing/Landing'
import Community from './Pages/Community/Community';
import Progress from './Pages/Progress/Progress';


const rootRoute = new RootRoute({
  component: App,
})

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Landing,
})

// example of another route to add
const communityRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/community',
  component: Community,
})

const progressRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/progress',
  component: Progress,
})

const routeTree = rootRoute.addChildren([indexRoute, communityRoute, progressRoute]) // add more created routes in the list
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
        <Outlet />
      </FluentProvider>
    </>
  )
}

export default App
