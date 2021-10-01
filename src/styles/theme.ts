import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    colors: {
        gray: {
            "50": "#F5F8FA",
            "100": "#DADADA",
            "200": "#999999",
            "300": "#47585B"
        },
        yellow: {
            "400": "#FFBA08"
        }
    },
    fonts: {
        heading: 'Poppins',
        body: 'Poppins'
    },
    styles: {
        global: {
            body: {
                bg: 'gray.50',
            }
        }
    }
})