import React, { useCallback, useState } from "react";
import {
    Pressable
} from 'react-native';
import { 
    Box,
    HStack,
    Text,
    useTheme,
    themeTools,
    useColorModeValue,
    Icon
} from "native-base";
import { PanGestureHandlerProps } from "react-native-gesture-handler";
import Checkbox from "expo-checkbox";
import AnimatedTaskLabel from "./animated-task-label";
import SwipeView from "./swipable-view";
import { Feather } from '@expo/vector-icons';

interface Props extends Pick<PanGestureHandlerProps, 'simultaneousHandlers'>{
    isDone: boolean,
    onToggleCheckbox?: () => void,
    onPressLabel?: () => void,
    onRemove?: () => void,
    subject: string,
}

const TaskItem = (props: Props) => {
    const { isDone, onToggleCheckbox, subject, onPressLabel, onRemove, simultaneousHandlers } = props;

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
        <SwipeView 
            simultaneousHandlers={simultaneousHandlers}
            onSwipeLeft={onRemove}
            backView={
                <Box w="full" h="full" bg="red.500" alignItems="flex-end" justifyContent="center" pr={4}>
                    <Icon color="white" as={<Feather name="trash-2"/>} size="sm"></Icon>
                </Box>
            }
        >
            <HStack 
                alignItems="center" 
                w="full" 
                px={4} 
                py={2} 
                bg={useColorModeValue('warmGray.50','primary.900')}
            >
                <Box>
                    <Pressable onPress={onToggleCheckbox}>
                        <Checkbox
                            value={isDone}
                            onValueChange={onToggleCheckbox}
                            color={isDone ? '#4630EB' : undefined}
                        />
                    </Pressable>
                </Box>
                <AnimatedTaskLabel 
                    textColor={activeTextColor} 
                    inactiveTextColor={doneTextColor}
                    strikethrough={isDone}
                >
                    { subject }
                </AnimatedTaskLabel>
            </HStack>
        </SwipeView>
    )

}

export default TaskItem;