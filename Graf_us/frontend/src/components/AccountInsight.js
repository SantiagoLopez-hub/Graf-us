import React from 'react';
import { Avatar, Box, HStack, IconButton, Menu, MenuButton, MenuItem, MenuList, Stack, useBreakpointValue } from '@chakra-ui/react';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';

import { colors, textStyles } from '../themeData';
import CText from './CText';

function AccountInsight() {
    const isMobile = useBreakpointValue({ base: true, lg: false })

    return (
        <Box>
            <HStack>
                <Avatar cursor={'pointer'} name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                {!isMobile && 
                <>
                <Stack spacing={0}>
                    <CText>Fabian Simon</CText>
                    <CText textStyle={textStyles.body2} style={{ color: colors.mediumGrey }}>Student</CText>
                </Stack>
                <Menu>
                    <MenuButton
                        as={IconButton}
                        bg={colors.backgroundColor}
                        borderRadius={100}
                        aria-label='Account Setting'
                        icon={<KeyboardArrowDownRoundedIcon />}
                        variant='outline'
                    />
                    <MenuList>
                        <MenuItem icon={<KeyboardArrowDownRoundedIcon />} command='⌘T'>
                        Account Details
                        </MenuItem>
                        </MenuList>
                </Menu>
                </>}
            </HStack>
        </Box>
    );
}

export default AccountInsight;