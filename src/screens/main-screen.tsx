import React, { useCallback, useState } from "react";
import {
    Text,
    Box,
    Center,
    VStack,
    useColorMode,
    useColorModeValue,
    Fab,
    Icon,
} from 'native-base';
import Checkbox from "expo-checkbox";
import { AntDesign } from '@expo/vector-icons';
import shortid from "shortid";

import ThemeToggle from "../components/theme-toggle";
import TaskItem from "../components/task-item";
import TaskList from "../components/task-list";


const initialData = [
    {
        id: shortid.generate(),
        subject: 'Buy movie tickets for Friday',
        done: false,
    },
    {
        id: shortid.generate(),
        subject: 'Make a React Native Tutorial',
        done: false,
    }
]

export default function MainScreen(){
    const [data, setData] = useState(initialData);
    const [editingItemId, setEditingItemId] = useState<string | null>(null);
    // const [isChecked, setChecked] = useState(false);
    // const [subject, setSubject] = useState('Task Item');
    // const [isEditing, setEditing] = useState(false);
    
    // const handlePressCheckbox = useCallback(() => {
    //     setChecked(prev => !prev);
    // }, []);

    const handleToggleTaskItem = useCallback(item => {
        setData(prevData => {
            const newData = [...prevData];
            const index = prevData.indexOf(item);
            newData[index] = {
                ...item,
                done: !item.done
            }
            return newData
        });
    }, []);

    const handleChangeTaskItemSubject = useCallback((item, newSubject) => {
        setData(prevData => {
            const newData = [...prevData];
            const index = prevData.indexOf(item);
            newData[index] = {
                ...item,
                subject: newSubject,
            }
            return newData;
        });
    }, []);

    const handleFinishEditingTaskItem = useCallback(_item => {
        setEditingItemId(null);
    }, []);

    const handlePressTaskItemLabel = useCallback(item => {
        setEditingItemId(item.id);
    }, []);

    const handleRemoveItem = useCallback(item => {
        setData(prevData => {
            const newData = prevData.filter(i => i !== item);
            return newData;
        })
    }, []);

    return (
        <Center 
            _dark={{bg: 'blueGray.900'}} 
            _light={{bg: 'blueGray.50'}} 
            flex={1}
        >
            <VStack space={5} alignItems="center" w="full">
                    <TaskList 
                        data={data}
                        onToggleItem={handleToggleTaskItem}
                        onChangeSubject={handleChangeTaskItemSubject}
                        onFinishEditing={handleFinishEditingTaskItem}
                        onPressLabel={handlePressTaskItemLabel}
                        onRemoveItem={handleRemoveItem}
                        editingItemId={editingItemId}
                    />
                {/* <Box w="full" h="50px">
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
                </Box> */}
                <ThemeToggle/>
            </VStack>
            <Fab 
                position="absolute" 
                renderInPortal={false} 
                size="sm"
                icon={<Icon color="white" as={<AntDesign name="plus"/>} size="sm"/>}
                colorScheme={useColorModeValue('blue', 'darkBlue')}
                bg={useColorModeValue('blue.500', 'blue.400')}
                onPress={() => {
                    const id = shortid.generate();
                    setData([
                        {
                            id,
                            subject: '',
                            done: false,
                        },
                        ...data
                    ]);
                    setEditingItemId(id)
                }}
            />
        </Center>
    )
}