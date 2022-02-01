import { Box, Center, Input, InputGroup, InputLeftElement, InputRightElement, Kbd } from '@chakra-ui/react';
import React from 'react';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

import { colors, textStyles } from '../themeData';
import CText from './CText';

function FilterBox(props) {
    return (
        <Box minW={280} h={85} bg={colors.white} borderRadius={10} boxShadow={'sm'} padding={2}>
            <InputGroup>
                <InputLeftElement
                pointerEvents='none'
                children={<SearchRoundedIcon color={colors.mediumGrey} />}
                />
                <Input placeholder='Filter connections' bg={colors.backgroundColor}/>
                <InputRightElement paddingRight={4} children={
                    <span>
                        <Kbd>⌘ K</Kbd> 
                    </span>
                } />
            </InputGroup>
            <Center paddingTop={2}>
                <CText textStyle={textStyles.body2} style={{color: colors.lightGrey}}>No results</CText>    
            </Center>   
        </Box>
    );
}

export default FilterBox;