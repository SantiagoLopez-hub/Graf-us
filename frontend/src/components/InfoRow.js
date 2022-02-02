import { Box, Center, Stack, Tag, Wrap, WrapItem } from '@chakra-ui/react';
import React from 'react';
import StarRoundedIcon from '@mui/icons-material/StarRounded';

import { textStyles, colors } from '../themeData';
import CText from './CText';
import utils from '../utils/utils';

function InfoRow({ description, title, chipList = [], ceo = false, salary, percentage, children, ...rest }) {

    const getChipList = () => {
        return <Wrap>
            {chipList.map((skill) => (
                <WrapItem>
                    <Tag size={'md'} key={skill} bg={colors.blue.main} color={colors.white}>{skill}</Tag>
                </WrapItem>
            ))}
        </Wrap>
    }
    
    const ceoStar = () => {
        return (
            <Box h={30} w={30} borderRadius={100} pos='absolute' right={30} bg={colors.yellow.main} display={'flex'}>
                <StarRoundedIcon style={{ color: colors.white, fontSize: 20, alignSelf: 'center', marginLeft: '15%'}}/>
            </Box>
            )
    }

    return (
        <Stack {...rest} >
            <CText textStyle={textStyles.body2} style={{ color: colors.mediumGrey }}>{description}</CText>
            {!chipList.length > 0 && title && <CText textStyle={textStyles.body1}>{title}</CText>}
            {chipList.length > 0 && getChipList()}
            {salary && <CText textStyle={textStyles.headline1}>{`$ ${utils.intToString(salary)}`}</CText>}
            {percentage && <Tag size='md' pos='absolute' right={30} bg={percentage < 0 ? colors.error : colors.green.main} color={colors.white} borderRadius='full'>
                <CText textStyle={textStyles.subtitle1}>{`${percentage < 0 ? '' : '+'}${percentage}%`}</CText>
            </Tag>}
            {ceo && ceoStar()}
            {children}
        </Stack>
    );

}

export default InfoRow;