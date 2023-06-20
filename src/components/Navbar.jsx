import Link from "next/link";
import { useRouter } from "next/router";

import { Flex, Heading, Text } from "@chakra-ui/react"

const Navbar = () => {

    const router = useRouter();

    return (
        <Flex
            gap={4}
            direction={['column', 'column', 'row', 'row']}
            w={'100%'}
            justifyContent={'center'}
            py={4}
            bg={'whiteAlpha.600'}
            backdropFilter={'blur(10px)'}
            position={'fixed'}
            top={0}
            left={0}
            right={0}
            zIndex={100}
        >
            <Flex
                justifyContent={'center'}
                alignItems={'center'}
                w={'100%'}
            >
                <Heading
                    fontFamily={'Designer'}
                    letterSpacing={4}
                >
                    Easy<span style={{ color: 'cornflowerblue' }}>Tax</span>
                </Heading>
            </Flex>

            <Flex
                justifyContent={'center'}
                alignItems={'center'}
                gap={[2, 2, 10, 10]} w={'100%'}
                fontSize={[13, 15, 15, 18]}
                fontWeight={500}
                whiteSpace={'nowrap'}
            >
                <Text
                    px={6}
                    py={2}
                    borderRadius={18}
                    bg={router.pathname === '/' ? 'gray.300' : ''}
                >
                    <Link href={'/'}> House Rent Allowence </Link>
                </Text>

                <Text
                    px={6}
                    py={2}
                    borderRadius={18}
                    bg={router.pathname === '/tax' ? 'gray.300' : ''}
                >
                    <Link href={'/tax'}> Advance Tax </Link>
                </Text>
            </Flex>

        </Flex>
    )
}

export default Navbar
