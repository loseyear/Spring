import React, { Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

const ErrorPage = React.lazy(() => import('~/container/error'))
const PageList = React.lazy(() => import('~/page/list'))
const ResizablePanels = React.lazy(() => import('~/page/resizable-panels'))

const App: React.FC = () => {
  return (
    <Suspense fallback={<div />}>
      <Routes>
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/home' element={<PageList />} />
        <Route path='/resizable-panels' element={<ResizablePanels />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </Suspense>
  )
}

export default App
