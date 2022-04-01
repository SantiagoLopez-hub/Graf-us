import { Avatar, Center, Divider, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Stack } from '@chakra-ui/react';
import React from 'react';

import utils from '../utils/utils';
import { colors, textStyles } from '../themeData';
import CButton from './CButton';
import CText from './CText';
import InfoRow from './InfoRow';
import LinkedInButton from './LinkedInButton';

function SideProfile({ user, isOpen, onClose, btnRef }) {

    return (
        <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
            finalFocusRef={btnRef}
        >
            <DrawerOverlay/>
            <DrawerContent>
                <DrawerCloseButton/>
                <DrawerHeader>
                        <CText textStyle={textStyles.headline4}>{`Member since ${user.accountCreatedIn}`}</CText>
                        <CText textStyle={textStyles.body2} style={{ color: colors.mediumGrey }}>{`${user.age} years old • ${user.city}, ${user.country}`}</CText>
                        <Center>
                            <Avatar h={150} w={150} marginTop={4} cursor={'pointer'} boxShadow={'lg'} borderColor={colors.white} borderWidth={2} name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                        </Center>
                    </DrawerHeader>

                    <DrawerBody>
                        <Stack spacing={2.5} divider={<Divider />}>
                            <InfoRow description='Name' title={`${user.firstName} ${user.lastName}`} />
                            <InfoRow description='Job title' title={`${user.jobTitle}`} ceo/>
                            <InfoRow description='Highest Education' title={`${user.highestEducation}`} />
                            <InfoRow description='Languages' title={user.languages.join(', ')} />
                            <InfoRow description='Skills' chipList={user.skills} />
                            <InfoRow description='Estimated Salary' salary={user.estimatedSalary} percentage={100.3}/>
                        </Stack>
                    </DrawerBody>

                    <DrawerFooter>
                        <Stack width={'100%'}>
                            <LinkedInButton label={'See on LinkedIn'} onClick={() => utils.openInNewTab(user.linkedinUrl)}/>
                            <CButton borderColor={colors.blue.main} variant='outline' label={'Contact Him'} onClick={() => utils.openInNewTab(`mailto:${user.email}?subject=Hey! Just saw you on Grafs-Us!&body=Sent from GrafUs.co.uk`)}/>
                        </Stack>
                    </DrawerFooter>
            </DrawerContent>    
        </Drawer>
    );
}

export default SideProfile;