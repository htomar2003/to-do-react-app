import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    Button,
    Text,
    useDisclosure,
    IconButton
} from '@chakra-ui/react';
import { FiTrash2 } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { deleteTask, deleteTaskAll } from '../store';

function DeleteAllTask() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const dispatch = useDispatch();

    return (
        <>
            <Button
                colorScheme='gray'
                px='8'
                h='45'
                color='gray.500'
                mt='8'
                onClick={onOpen}
            >
                Delete All
            </Button>

            <Modal isCentered isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent w='90%'>
                    <ModalHeader>
                        Are you sure you want to delete all task?
                    </ModalHeader>
                    <ModalFooter>
                        <Button mr={3} onClick={onClose}>No</Button>
                        <Button
                            colorScheme='blue'
                            onClick={() => {
                                dispatch(deleteTaskAll());
                                onClose();
                            }}
                        >
                            Yes
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
    }

function DeleteTask({ task }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const dispatch = useDispatch();

    return (
        <>
            <IconButton
                icon={<FiTrash2 />}
                isRound='true'
                onClick={onOpen}
            />

            <Modal isCentered isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent w='90%'>
                    <ModalHeader>
                    Do you really want to delete the task?
                    </ModalHeader>
                    <ModalBody>
                        <Text>{task.body}</Text>
                    </ModalBody>
                    <ModalFooter>
                        <Button mr={3} onClick={onClose}>No</Button>
                        <Button
                            colorScheme='blue'
                            onClick={() => {
                                dispatch(deleteTask(task.id));
                                onClose();
                            }}
                        >
                            Yes
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
    }

    export { DeleteTask, DeleteAllTask };