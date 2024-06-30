import React from 'react';
import UpdateTask from './UpdateTask';
import { DeleteTask, DeleteAllTask } from './DeleteTask';
import { HStack, Box, VStack, StackDivider, Flex, Text, Image } from '@chakra-ui/react';
import img from '../images/empty.svg';
import { useDispatch } from 'react-redux';
import { checkTask } from '../store';

function TaskList({ tasks }) {
    const dispatch = useDispatch();

    if (!tasks.length) {
        return (
            <>
                <Box maxW='80%'>
                    <Image mt='20px' w='98%' maxW='350' src={img} alt='Your list is empty :(' />
                </Box>
            </>
        );
    }

    return (
        <>
            <VStack
                divider={<StackDivider />}
                borderColor='gray.100'
                borderWidth='2px'
                p='5'
                borderRadius='lg'
                w='100%'
                maxW={{ base: '90vw', sm: '80vw', lg: '50vw', xl: '30vw' }}
                alignItems='stretch'
            >
                {tasks.map((task) => (
                    <HStack key={task.id} opacity={task.check === true ? '0.2' : '1'}>
                        <Text
                            w='100%'
                            p='8px'
                            borderRadius='lg'
                            as={task.check === true ? 's' : ''}
                            cursor='pointer'
                            onClick={() => dispatch(checkTask(task.id))}
                        >
                            {task.body} - {new Date(task.date).toLocaleDateString()}
                        </Text>
                        <DeleteTask task={task} />
                        <UpdateTask task={task} />
                    </HStack>
                ))}
            </VStack>

            <Flex>
                <DeleteAllTask />
            </Flex>
        </>
    );
}

export default TaskList;
