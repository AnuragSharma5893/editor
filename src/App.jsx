//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'
import { Box } from '@chakra-ui/react'
import CodeEditor from './components/CodeEditor';

function App() {
  return (
    <Box  minH = {"100vh"} minW={"100vw"} bg={'#0f0a19'} color='gray.500' px={8} py={8}>
      <CodeEditor/>
    </Box>
  )
}

export default App;
