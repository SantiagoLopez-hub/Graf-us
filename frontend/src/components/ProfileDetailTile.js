import React from 'react';
import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, HStack, IconButton, Input, Menu, MenuButton, MenuList, Stack, useDisclosure, VStack } from '@chakra-ui/react';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';

import CText from './CText';
import { colors, textStyles } from '../themeData';

function ProfileDetailTile(props) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    const extendedContent = () => {
        return (
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Create your account</DrawerHeader>

                <DrawerBody>
                    <Input placeholder='Type here...' />
                </DrawerBody>

                <DrawerFooter>
                    <Button variant='outline' mr={3} onClick={onClose}>
                    Cancel
                    </Button>
                    <Button colorScheme='blue'>Save</Button>
                </DrawerFooter>
            </DrawerContent>    
        )
    }

    return (
        <Box minW={280} h={85} bg={colors.white} borderRadius={10} boxShadow={'sm'} padding={2}>
            <HStack justify={'space-between'} paddingX={2} paddingTop={1}>
                <Stack>
                    <CText textStyle={textStyles.headline4}>Fabian Simon</CText>
                    <CText textStyle={textStyles.body2} style={{ color: colors.mediumGrey }}>44 years old • Vienna, Austria</CText>
                </Stack>
                <Menu>
                    <MenuButton
                        ref={btnRef} 
                        onClick={onOpen}
                        as={IconButton}
                        bg={colors.backgroundColor}
                        borderRadius={100}
                        aria-label='Account Setting'
                        icon={<KeyboardArrowDownRoundedIcon />}
                        variant='outline'
                    />
                </Menu>
            </HStack>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                {extendedContent()} 
            </Drawer>
        </Box>
    );
}

export default ProfileDetailTile;