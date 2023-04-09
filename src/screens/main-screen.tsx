import React, { useCallback, useState } from "react";
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
import TaskItem from "../components/task-item";

export default function MainScreen(){
    const [isChecked, setChecked] = useState(false);
    const [subject, setSubject] = useState('Task Item');
    const [isEditing, setEditing] = useState(false);
    
    const handlePressCheckbox = useCallback(() => {
        setChecked(prev => !prev);
    }, []);

    return (
        <Center 
            _dark={{bg: 'blueGray.900'}} 
            _light={{bg: 'blueGray.50'}} 
            flex={1}
        >
            <VStack space={5} alignItems="center" w="full">
                <Box w="full" h="50px">
                    <TaskItem
                        isEditing={isEditing}
                        isDone={isChecked} 
                        onToggleCheckbox={handlePressCheckbox} 
                        subject={subject}
                        onPressLabel={() => {
                            console.log('CLicked')
                            setEditing(true)
                        }}
                        onChangeSubject={setSubject}
                        onFinishEditing={() => setEditing(false)}
                    />
                </Box>
                <ThemeToggle/>
            </VStack>
        </Center>
    )
}