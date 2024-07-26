import {Box, HStack} from "@chakra-ui/react";
import {Editor} from '@monaco-editor/react';
import React from 'react';
import { useState } from "react";
import { useRef } from "react";
import LanguageSelector from "./LanguageSelector";
import { CODE_SNIPPETS, LANGUAGE_VERSION } from "../constant";
import Output from "./OutPut";

const CodeEditor = () =>{
  const editorRef = useRef();
  const [value, setValue] = useState("");  
  const [language, setLanguage] = useState('javaScript')
  
  const onMount = (editor) =>{
    editorRef.current = editor;
    editor.focus();
  };

  const onSelect = (language) => {
    setLanguage(language);
    setValue(
      CODE_SNIPPETS[language]
    );
  };
  
  return (
        <Box>
          <HStack spacing={4}>
            <Box w='50%'>
            <LanguageSelector language={language} onSelect = {onSelect} />
            <Editor
            height="75vh" 
            theme="vs-dark"
            language={language}
            defaultValue={CODE_SNIPPETS[language]}
            //defaultValue="// Start Writing your code from here " 
            onMount={onMount}
            value = {value}
            onChange = {(value)=> setValue(value)}
            />
            </Box>
            <Output editorRef={editorRef} language= {language}/>
          </HStack>
           
        </Box>
    );
};

export default CodeEditor;
