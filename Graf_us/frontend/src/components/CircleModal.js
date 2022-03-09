import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Lorem, Box, Center, HStack, Select } from '@chakra-ui/react';
import { width } from '@mui/system';
import React from 'react';
import useWindowDimensions from '../hooks/useWindowDimensions';
import { colors, textStyles, shadows } from '../themeData';
import CButton from './CButton';
import CText from './CText';
import Selectable from './Selectable';

function CircleModal({ modalIsOpen, closeModal, afterOpenModal }) {

    return (
        <Box style={styles.container}>
            <CText style={textStyles.headline2}>
                Choose your Network to visualize
            </CText>
            <Box style={styles.innerContainer}>
                <HStack>
                    <Selectable placeHolder={'Education'} items={['Career', 'Friends']} />
                    <Selectable placeHolder={'University'} items={['Career', 'Friends']} />
                    <Selectable placeHolder={'Year'} items={['Career', 'Friends']} />
                    <Selectable placeHolder={'Class'} items={['Career', 'Friends']} />
                </HStack>
            </Box>
            <HStack>
                <Selectable placeHolder={'Select Preset'} bg={'pink'}/>
                <CButton label={'Cancel'} borderColor={colors.error} textColor={colors.error} variant={'outline'} onClick={closeModal}/>
                <CButton label={'Submit'} backgroundColor={colors.blue.main} textColor={colors.white} />
            </HStack>
            
        </Box>
    );
}

const styles = {
    container: {
        width: 1200,
        padding: 20,
        borderRadius: 20,
        boxShadow: shadows.xl.main,
        backgroundColor: colors.white,
    },
    innerContainer: {
        backgroundColor: colors.backgroundColor,
        flex: 1,
        borderRadius: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 15,
        paddingBottom: 15,
        marginTop: 20,
        marginBottom: 20,
        alignItems: 'center',
    },
}

export default CircleModal;