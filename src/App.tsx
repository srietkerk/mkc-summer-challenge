import React from 'react'
import './App.css'
import { RootRoute, Route, Router } from '@tanstack/react-router'
import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import Landing from './Pages/Landing/Landing'
import config from '../appconfig.json'
import Community from './Pages/Community/Community';


const rootRoute = new RootRoute({
  component: App,
})


// example of another route to add
const communityRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/community',
  component: Community,
})

const routeTree = rootRoute.addChildren([communityRoute]) // add more created routes in the list
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
        <Landing config={{...config}} />
        <Community />
      </FluentProvider>
    </>
  )
}

export default App
