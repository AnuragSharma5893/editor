import {Box, Text, Button, Menu, MenuButton, MenuList, MenuItem} from "@chakra-ui/react";
import { LANGUAGE_VERSION } from "../constant";
import { version } from "react";

// making a  array 
const languages = Object.entries(LANGUAGE_VERSION);
const ACTIVE_COLOR = "blue.400";


const LanguageSelector = ({language, onSelect}) => {
    return (
        <Box ml={2} mb={4}>
           <Text mb={5} fontSize='lg' > Languages:</Text> 
           <Menu isLazy>
            <MenuButton as = {Button}>javascript</MenuButton>
            <MenuList bg="#110c1b">
                {languages.map(([lang, version]) => (
                 <MenuItem key= {lang}
                 color={
                    lang === language ? ACTIVE_COLOR : ""
                 }
                 bg={
                    lang === language ? "grey.900" : "transparent"
                 }
                 _hover={{
                    color: ACTIVE_COLOR,
                    bg: "grey.900"
                 }}
                 onClick={() => onSelect(lang)}> {lang}
                    &nbsp;
                    <Text as="span" color="gray.600" fontSize="sm"> ({version})</Text>
                 </MenuItem>
                ))}
                </MenuList>
            </Menu>
        </Box>
    );
};

export default LanguageSelector;