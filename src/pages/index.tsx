import Banner from "../components/Banner";
import { TravelType } from "../components/TravelType";
import { HStack, Image, Box, Text, Flex, Divider} from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Banner />
      <Flex 
        maxWidth="76.5rem" 
        mx="auto" 
        justifyContent="space-around" 
        mt="7.125rem" 
      >
        <TravelType src="/images/cocktail.svg">
          Vida noturna
        </TravelType>
        <TravelType src="/images/surf.svg">
          Praia
        </TravelType>
        <TravelType src="/images/building.svg">
          Moderno
        </TravelType>
        <TravelType src="/images/museum.svg">
          Clássico
        </TravelType>
        <TravelType src="/images/earth.svg">
          e mais...
        </TravelType>
      </Flex>

      <Divider orientation="horizontal" mt="5rem" w="5.6rem" mx="auto" borderBottom="2px" borderColor="gray.300"/>
    </>
  )
}
