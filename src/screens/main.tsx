import React, { useState } from "react";
import {
    Text,
    Box,
    Center,
    VStack,
    useColorMode,
    useColorModeValue,
} from 'native-base';
import Checkbox from "expo-checkbox";
import ThemeToggle from "../components/theme-toggle";

export default function MainScreen(){
    const [isChecked, setChecked] = useState(false);

    return (
        <Center 
            _dark={{bg: 'blueGray.900'}} 
            _light={{bg: 'blueGray.50'}} 
            px={4} 
            flex={1}
        >
            <VStack space={5} alignItems="center">
                <Checkbox
                    value={isChecked}
                    onValueChange={setChecked}
                    color={isChecked ? '#4630EB' : undefined}
                />
                <Box p={10} bg={useColorModeValue("red.500", "yellow.500")}>
                    <Text>Hello</Text>
                </Box>
                <ThemeToggle/>
            </VStack>
        </Center>
    )
}