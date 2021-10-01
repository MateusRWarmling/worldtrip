import { Flex, Image } from "@chakra-ui/react"

export function Header() {
    return (
        <Flex 
            justify="center"
            align="center"
            h="100px"
        >
            <Image src="/images/logo.png" alt="logo"/>
        </Flex>
    )
}