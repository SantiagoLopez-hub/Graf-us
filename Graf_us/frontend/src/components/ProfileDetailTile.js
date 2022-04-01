import React from 'react';
import { Avatar, Box, Button, Center, Divider, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, HStack, IconButton, Input, Menu, MenuButton, MenuList, Stack, useDisclosure, VStack } from '@chakra-ui/react';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';

import CText from './CText';
import { colors, textStyles } from '../themeData';
import InfoRow from './InfoRow';
import LinkedInButton from './LinkedInButton';
import CButton from './CButton';
import SideProfile from './SideProfile';


function ProfileDetailTile(props) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    const userProfile = {
        firstName: props.firstName,
        lastName: props.lastName,
        email: props.email,
        age: 44,
        city: 'Vienna',
        country: 'Austria',
        jobTitle: 'CEO',
        highestEducation: 'University of Goldsmiths',
        languages: ['English', 'German'],
        skills: ['Tennis', 'Front-end', 'UI/UX', 'SQLite', 'Managerial skills'],
        estimatedSalary: 120000,
        linkedinUrl: 'https://www.linkedin.com/in/fabian-simon-dev/',
        accountCreatedIn: 2019,
    }

    return (
        <Box minW={280} h={85} bg={colors.white} borderRadius={10} boxShadow={'sm'} padding={2}>
            <HStack justify={'space-between'} paddingX={2} paddingTop={1}>
                <Stack>
                    <CText textStyle={textStyles.headline4}>{`${userProfile.firstName} ${userProfile.lastName}`}</CText>
                    <CText textStyle={textStyles.body2} style={{ color: colors.mediumGrey }}>{`${userProfile.age} years old • ${userProfile.city}, ${userProfile.country}`}</CText>
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
            <SideProfile user={userProfile} isOpen={isOpen} onClose={onClose} btnRef={btnRef}/>
        </Box>
    );
}

export default ProfileDetailTile;