import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Input,
    FormControl,
    useDisclosure,
    IconButton
} from '@chakra-ui/react';
import { useState } from 'react';
import React from 'react';
import { FiEdit } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { updateTask } from '../store';
import { DatePicker } from 'rsuite';
import './App.css';

function UpdateTask({ task }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [body, setBody] = useState(task.body);
    const [selectedDate, setSelectedDate] = useState(new Date(task.date));
    const dispatch = useDispatch();
    const initialRef = React.useRef();

    return (
        <>
            <IconButton
                icon={<FiEdit />}
                isRound='true'
                onClick={onOpen}
            />
            <Modal
                isCentered
                initialFocusRef={initialRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent w='90%'>
                    <ModalHeader>Update your task</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <Input
                                ref={initialRef}
                                placeholder='Update your task'
                                defaultValue={task.body}
                                onChange={(e) => setBody(e.target.value)}
                                onFocus={(e) => setBody(e.target.value)}
                            />
                        </FormControl>
                        <DatePicker
                            value={selectedDate}
                            onChange={(date) => setSelectedDate(date)}
                            renderInput={(params) => <Input {...params} variant="filled" />}
                        />
                    </ModalBody>

                    <ModalFooter>
                        <Button mr={3} onClick={onClose}>Cancel</Button>
                        <Button
                            colorScheme='blue'
                            onClick={() => {
                                dispatch(updateTask({ id: task.id, body, date: selectedDate }));
                                onClose();
                            }}
                        >
                            Save
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}

export default UpdateTask;
