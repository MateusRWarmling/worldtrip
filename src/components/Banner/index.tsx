import { Flex, Image, Text, Box, Heading } from "@chakra-ui/react"

export default function Banner() {
    return (
        <Flex justifyContent="space-between">
        <Box zIndex="2" mt="5rem" ml="8.75rem">
                <Heading 
                    fontSize="2.25rem" 
                    lineHeight="3.375rem" 
                    fontWeight="500" 
                    color="white"
                >
                    5 Continentes, <br /> infinitas possibilidades.
                </Heading>
                <Text 
                    fontSize="1.25rem" 
                    lineHeight="1.875rem" 
                    mt="1.25rem" 
                    fontWeight="400" 
                    color="gray.100"
                >
                    Chegou a hora de tirar do papel a viagem que você <br /> sempre sonhou. 
                </Text>
        </Box>
            <Image 
                src="/images/airplane.png" 
                zIndex="1" 
                mt="4.75rem" 
                mr="8.75rem" 
                alt="airplane"
            />
            <Image 
                src="/images/starsBackground.png" 
                width="100%"
                alt="banner" 
                position="absolute" 
                height="335px"
            />
        </Flex>
    )
}