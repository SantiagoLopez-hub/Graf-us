import { Box, Button, color, HStack, useDisclosure } from '@chakra-ui/react';
import React, { useState } from 'react';
import CircleModal from '../components/CircleModal';
import Modal from 'react-modal';


import FilterBox from '../components/FilterBox';
import NavBar from '../components/NavBar';
import ProfileDetailTile from '../components/ProfileDetailTile';
import StatsBox from '../components/StatsBox';
import { colors } from '../themeData';
import ForceGraphVis from "./ForceGraphVis";

function GrafScreen(props) {

    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        console.log('hello');
        setIsOpen(true);
    }

    function afterOpenModal() {

    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <Box flex={1}>
            <NavBar />
            <HStack paddingX={4} paddingY={3} >
                <FilterBox />
                <StatsBox openModal={openModal}/>
                <ProfileDetailTile />
            </HStack>

            <ForceGraphVis/>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={styles}
                contentLabel="Example Modal"
            >
                <CircleModal closeModal={closeModal}/>
            </Modal>
        </Box>
    );
}


const styles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        borderRadius: 0,
        borderColor: 'transparent',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

export default GrafScreen;