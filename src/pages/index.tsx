import Banner from "../components/Banner";
import { HStack, Image, Box, Text, Flex } from "@chakra-ui/react"

export default function Home() {
  return (
    <>
      <Banner />
      <Flex 
        maxWidth="76.5rem" 
        mx="auto" 
        justifyContent="space-around" 
        mt="7.125rem" 
        fontSize="24px" 
        fontWeight="600" 
        color="gray.300"
      >
        <Box>
          <Image src="/images/cocktail.svg" mb="24px" mx="auto"/>
          <Text>vida noturna</Text>
        </Box>
        <Box>
          <Image src="/images/surf.svg" mb="24px" mx="auto"/>
          <Text>praia</Text>
        </Box>
        <Box>
          <Image src="/images/building.svg" mb="24px" mx="auto"/>
          <Text>moderno</Text>
        </Box>
        <Box justifyContent="center">
          <Image src="/images/museum.svg" mb="24px" mx="auto"/>
          <Text>clássico</Text>
        </Box>
        <Box>
          <Image src="/images/earth.svg" mb="24px" mx="auto"/>
          <Text>e mais...</Text>
        </Box>
      </Flex>
    </>
  )
}
