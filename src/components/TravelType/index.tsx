import { Box, Image, Text } from "@chakra-ui/react"
import { ReactElement } from "react"

interface TravelTypeProps {
    src: string;
    children: String;
}

export function TravelType({children, src}: TravelTypeProps) {
    
    return(
        <>
        <Box>
            <Image src={src} mb="24px" mx="auto"/>
            <Text 
                fontSize="24px" 
                fontWeight="600" 
                color="gray.300"
            >
                {children}
            </Text>
        </Box>
        </>
    )
}