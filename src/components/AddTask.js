import { useState } from 'react';
import { Button, HStack, Input, useToast } from "@chakra-ui/react";
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addTask } from '../store';
import { DatePicker } from 'rsuite';
import './App.css';

function AddTask() {
    const toast = useToast();
    const [content, setContent] = useState('');
    const [selectedDate, setSelectedDate] = useState(new Date()); // Ensure it's a JavaScript Date object
    const [statusInput, setStatusInput] = useState(true);
    const dispatch = useDispatch();

    function handleSubmit(e) {
        e.preventDefault();

        const taskText = content.trim();

        if (!taskText) {
            toast({
                title: 'Add a new task',
                position: 'top',
                status: 'warning',
                duration: 2000,
                isClosable: true,
            });
            setStatusInput(false);

            return setContent('');
        }

        const task = {
            id: nanoid(),
            body: taskText,
            date: selectedDate, // Format the date to a string
            check: false
        };

        dispatch(addTask(task));
        setContent('');
        setSelectedDate(new Date());
    }

    if (content && !statusInput) {
        setStatusInput(true);
    }

    return (
        <form onSubmit={handleSubmit}>
            <HStack mt='4' mb='4'>
                <Input
                    h='46'
                    borderColor={!statusInput ? 'red.300' : 'transparent'}
                    variant='filled'
                    placeholder='Add a new Task'
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
                
                    <DatePicker
                        value={selectedDate}
                        onChange={(date) => setSelectedDate(date)}
                        renderInput={(params) => <Input {...params} variant="filled" />}
                    />
                
                <Button
                    colorScheme='blue'
                    px='8'
                    pl='10'
                    pr='10'
                    h='46'
                    type='submit'>Add</Button>
            </HStack>
        </form>
    );
}

export default AddTask;
