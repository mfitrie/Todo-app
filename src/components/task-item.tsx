import React, { useCallback, useState } from "react";
import {
    Pressable
} from 'react-native';
import { 
    Box,
    useTheme,
    themeTools,
    useColorModeValue
} from "native-base";
import Checkbox from "expo-checkbox";


interface Props{
    isDone: boolean,
    onToggleCheckbox?: () => void,
}

const TaskItem = (props: Props) => {
    const { isDone, onToggleCheckbox } = props;

    const theme = useTheme();
    const highlightColor = themeTools.getColor(
        theme,
        useColorModeValue('muted.300', 'muted.500')
    )
    const checkmarkColor = themeTools.getColor(
        theme,
        useColorModeValue('white','white'),
    )
    const activeTextColor = themeTools.getColor(
        theme,
        useColorModeValue('darkText', 'lightText')
    )
    const doneTextColor = themeTools.getColor(
        theme,
        useColorModeValue('muted.400', 'muted.600')
    )


    return (
        <Box>
            <Pressable onPress={onToggleCheckbox}>
                <Checkbox
                    value={isDone}
                    onValueChange={onToggleCheckbox}
                    color={isDone ? '#4630EB' : undefined}
                />
            </Pressable>
        </Box>
    )

}

export default TaskItem;