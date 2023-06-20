import { Box, Flex, Text, Heading, Select } from '@chakra-ui/react'

import Indivisual from '@/components/Individual';
import Huf from '@/components/huf';
import Aop_Boi from '@/components/Aop_Boi';
import Domestic from '@/components/Domestic';
import Foreign from '@/components/Foreign';
import Firms from '@/components/Firms';
import Llp from '@/components/Llp';
import Co_operative_society from '@/components/Co_operative_society';
import { useState } from 'react';

const tax = () => {

    const [selected, set_selected] = useState(0);

    const forms = [
        <Indivisual />,
        <Huf />,
        <Aop_Boi />,
        <Domestic />,
        <Foreign />,
        <Firms />,
        <Llp />,
        <Co_operative_society />
    ]

    return (
        <Box mt={[36, 36, 20, 20]}>
            <Text textAlign={'center'}> (As amended upto Finance Act, 2023) </Text>
            <Heading fontSize={[10, 13, 20, 20]} bg={'gray.600'} w={[300, 380, 600, 600]} py={4} px={2} color={'white'} fontWeight={500} mt={10} > ADVANCE TAX CALCULATOR FOR FINANCIAL YEAR 2023-24 </Heading>
            <Flex direction={['column', 'column', 'column', 'row']} alignItems={['flex-start', 'flex-start', 'flex-start', 'center']} justifyContent={'space-between'} px={[4, 4, 10, 20]} bg={'gray.100'} py={2} mt={2} gap={2} >
                <Text fontWeight={'medium'} fontSize={[13, 14, 18, 18]} > Basic Salary </Text>
                <Select value={selected} onChange={(event) => set_selected(event.target.value)} w={['100%', '100%', '100%', 400]} border={'1px solid gray'}  >
                    <option value={0}> Individual </option>
                    <option value={1}> HUF </option>
                    <option value={2}> AOPs/BOI </option>
                    <option value={2}> Domestic Company </option>
                    <option value={4}> Foreign Company </option>
                    <option value={5}> Firms </option>
                    <option value={6}> LLP </option>
                    <option value={7}> Co-operative Society </option>
                </Select>
            </Flex>

            {forms[selected]}
        </Box>
    )
}

export default tax
