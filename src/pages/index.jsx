
import { Box, Flex, Input, Text, Heading, Checkbox, Button } from "@chakra-ui/react"
import { useEffect, useRef } from "react"

const Home = () => {

  const form_ref = useRef(null);
  const initial_focus_ref = useRef(null);

  const calculate_house_rent_allowance = (basic, da, commission, hra, rent, residing) => {

    if (!hra) {
      return {
        examption: 0,
        taxable: 0
      }
    }

    const basicAndDa = Number(basic) + Number(da);
    const hraReceived = Number(hra);
    const city_dependency_value = Math.round(residing ? basicAndDa * 50 / 100 : basicAndDa * 40 / 100);
    const rents = rent ? (Math.round(rent) - (basicAndDa * 10 / 100)) : 0;

    const examption = Math.min(hraReceived, city_dependency_value, rents);

    const examption_after_charging_commission = examption ? Math.round(examption - (commission ? Number(commission) * 10 / 100 : 0)) : 0;

    return {
      examption: examption_after_charging_commission,
      taxable: hraReceived - examption_after_charging_commission
    }

  }

  const form_handler = () => {

    const { basic, da, commission, hra, rent, residing, examption, taxable } = form_ref.current;

    const result = calculate_house_rent_allowance(
      basic.value || 0,
      da.value || 0,
      commission.value || 0,
      hra.value || 0,
      rent.value || 0,
      residing.checked || 0
    )

    examption.value = result.examption;
    taxable.value = result.taxable;
  }

  useEffect(() => {
    initial_focus_ref.current.focus()
  }, []);

  return (
    <Box mt={[36, 36, 20, 20]}>
      <Text textAlign={'center'}> (As amended upto Finance Act, 2023) </Text>
      <Heading fontSize={20} bg={'gray.600'} w={300} py={4} px={2} color={'white'} fontWeight={500} mt={10} > House Rent Allowence(HRA) </Heading>
      <form ref={form_ref}>

        <Flex direction={['column', 'column', 'column', 'row']} alignItems={['flex-start', 'flex-start', 'flex-start', 'center']} justifyContent={'space-between'} px={[4, 4, 10, 20]} bg={'gray.100'} py={2} mt={2} gap={2} >
          <Text fontWeight={'medium'} fontSize={[13, 14, 18, 18]} > Basic Salary </Text>
          <Input type="number" name="basic" ref={initial_focus_ref} placeholder="" w={['100%', '100%', '100%', 400]} border={'1px solid gray'} />
        </Flex>

        <Flex direction={['column', 'column', 'column', 'row']} alignItems={['flex-start', 'flex-start', 'flex-start', 'center']} justifyContent={'space-between'} px={[4, 4, 10, 20]} bg={'gray.100'} py={2} mt={2} gap={2} >
          <Text fontWeight={'medium'} fontSize={[13, 14, 18, 18]} > DA forming part of salary </Text>
          <Input name="da" placeholder="" w={['100%', '100%', '100%', 400]} border={'1px solid gray'} />
        </Flex>

        <Flex direction={['column', 'column', 'column', 'row']} alignItems={['flex-start', 'flex-start', 'flex-start', 'center']} justifyContent={'space-between'} px={[4, 4, 10, 20]} bg={'gray.100'} py={2} mt={2} gap={2} >
          <Text fontWeight={'medium'} fontSize={[13, 14, 18, 18]} > Commission (as % of turnover achieved by the employee) </Text>
          <Input name="commission" placeholder="" w={['100%', '100%', '100%', 400]} border={'1px solid gray'} />
        </Flex>

        <Flex direction={['column', 'column', 'column', 'row']} alignItems={['flex-start', 'flex-start', 'flex-start', 'center']} justifyContent={'space-between'} px={[4, 4, 10, 20]} bg={'gray.100'} py={2} mt={2} gap={2} >
          <Text fontWeight={'medium'} fontSize={[13, 14, 18, 18]} > HRA Received </Text>
          <Input name="hra" placeholder="" w={['100%', '100%', '100%', 400]} border={'1px solid gray'} />
        </Flex>

        <Flex direction={['column', 'column', 'column', 'row']} alignItems={['flex-start', 'flex-start', 'flex-start', 'center']} justifyContent={'space-between'} px={[4, 4, 10, 20]} bg={'gray.100'} py={2} mt={2} gap={2} >
          <Text fontWeight={'medium'} fontSize={[13, 14, 18, 18]} > Rent Paid </Text>
          <Input name="rent" placeholder="" w={['100%', '100%', '100%', 400]} border={'1px solid gray'} />
        </Flex>

        <Flex alignItems={['flex-start', 'flex-start', 'flex-start', 'center']} justifyContent={'space-between'} px={[4, 4, 10, 20]} bg={'gray.100'} py={2} mt={2} gap={2} >
          <Text fontWeight={'medium'} fontSize={[13, 14, 18, 18]} > Tick if Residing from metro city </Text>
          <Checkbox name="residing" > ( Tick if yes ) </Checkbox>
        </Flex>

        <Flex direction={['column', 'column', 'column', 'row']} alignItems={['flex-start', 'flex-start', 'flex-start', 'center']} justifyContent={'space-between'} px={[4, 4, 10, 20]} bg={'gray.100'} py={2} mt={2} gap={2} >
          <Text fontWeight={'medium'} fontSize={[13, 14, 18, 18]} > Exempted House Rent Allowance under section 10(30A) </Text>
          <Input name="examption" placeholder="" w={['100%', '100%', '100%', 400]} border={'1px solid gray'} fontWeight={'bold'} disabled _disabled={{ opacity: 1 }} />
        </Flex>

        <Flex direction={['column', 'column', 'column', 'row']} alignItems={['flex-start', 'flex-start', 'flex-start', 'center']} justifyContent={'space-between'} px={[4, 4, 10, 20]} bg={'gray.100'} py={2} mt={2} gap={2} >
          <Text fontWeight={'medium'} fontSize={[13, 14, 18, 18]} > Taxable House Rent Allowance </Text>
          <Input name="taxable" placeholder="" w={['100%', '100%', '100%', 400]} border={'1px solid gray'} fontWeight={'bold'} disabled _disabled={{ opacity: 1 }} />
        </Flex>

        <Flex alignItems={'center'} justifyContent={'center'} px={20} py={2} mt={2} gap={6} >
          <Button bg={'red.400'} color={'white'} h={8} borderRadius={0} onClick={form_handler}> Calculate </Button>
          <Button bg={'gray.400'} color={'white'} h={8} borderRadius={0} onClick={() => form_ref.current.reset()}> Reset </Button>
        </Flex>
      </form>
    </Box>
  )
}

export default Home
