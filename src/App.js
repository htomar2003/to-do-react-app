import { Heading, IconButton, VStack, useColorMode, Link, Flex } from "@chakra-ui/react";
import TaskList from './components/tasks';
import AddTask from './components/AddTask';
import { FaSun, FaMoon, FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux';
import { addTask, deleteTask, deleteTaskAll, checkTask, updateTask } from './store';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers';


function App() {
    const dispatch = useDispatch();
    const tasks = useSelector(state => state.tasks);
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <VStack p={4} minH='100vh' pb={28}>
            <IconButton 
                icon={colorMode === 'light' ? <FaSun /> : <FaMoon />}
                isRound='true'
                size='md'
                alignSelf='flex-end'
                onClick={toggleColorMode}
            />

            <Heading
                p='5'
                fontWeight='extrabold'
                size='xl'
                bgGradient='linear(to-l, teal.300, blue.500)'
                bgClip='text'
            >
                Todo List
            </Heading>
            <AddTask addTask={(task) => dispatch(addTask(task))} />
            <TaskList 
                tasks={tasks} 
                updateTask={(id, body, onClose) => dispatch(updateTask({ id, body }))} 
                deleteTask={(id) => dispatch(deleteTask(id))} 
                deleteTaskAll={() => dispatch(deleteTaskAll())} 
                checkTask={(id) => dispatch(checkTask(id))} 
            />
            
            <Flex position='absolute' bottom='5'>
                <Link href='https://github.com/htomar2003' target='_blank' >
                    <IconButton 
                    icon={<FaGithub/>}
                    isRound='true'
                    size='md'
                    m='1'
                /> 
                </Link>
                <Link href='https://www.linkedin.com/in/htomar2003/' target='_blank'>
                    <IconButton 
                    icon={<FaLinkedin/>}
                    isRound='true'
                    size='md'
                    m='1'
                /> 
                </Link>
                <Link href='https://www.instagram.com/jaat_himanshu_3490/' target='_blank'>
                    <IconButton 
                    icon={<FaInstagram/>}
                    isRound='true'
                    size='md'
                    m='1'
                /> 
                </Link>
                <Link href='https://x.com/htomar3490' target='_blank'>
                    <IconButton 
                    icon={<FaTwitter/>}
                    isRound='true'
                    size='md'
                    m='1'
                /> 
                </Link>
                <Link href='https://www.facebook.com/himanshu.tomar.12576' target='_blank'>
                    <IconButton 
                    icon={<FaFacebook/>}
                    isRound='true'
                    size='md'
                    m='1'
                /> 
                </Link>
            </Flex>
        </VStack>
    );
}

export default App;
