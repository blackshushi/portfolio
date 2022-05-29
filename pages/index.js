import NextLink from 'next/link'
import { Container, Button, Box, Heading, Image, Link, useColorModeValue } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'

const Page = () => {
    return(
        <Container>
            <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
                Hello, I&apos;m a software engineer based in Malaysia!
            </Box>

            <Box display={{md:'flex'}}>
                <Box flexGrow={1}>
                    <Heading as='h2' variant="page-title">
                        Shushi
                    </Heading>
                    <p>
                        Backend software engineer
                    </p>
                </Box>
                <Box flexShrink={0} mt={{base:4, md: 0}} ml={{md: 6}} align="center">
                    <Image borderColor="whiteAlpha.800" borderWidth={2} borderStyle='solid' macWidth='100px' display="inline-block" borderRadius="full" src="/images/shushi.jpg" alt="Profile Image"/>
                </Box>
            </Box>
            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Work
                </Heading>
                <Paragraph>
                    Paragraph
                    <NextLink href="/works/xx">
                        <Link>
                            XX
                        </Link>
                    </NextLink>
                </Paragraph>
                <Box align='center' my={4}>
                    <NextLink href="/works">
                        <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                            My portfolio
                        </Button>
                    </NextLink>
                </Box>
            </Section>
            <Section delay={0.2}>
                <Heading as='h3' variant='section-title' >
                    Bio
                </Heading>
                <BioSection>
                    <BioYear>1996</BioYear>
                    Born in Klang (Selangor), Malaysia.
                </BioSection>
                <BioSection>
                    <BioYear>2019</BioYear>
                    Graduated from Zhejiang University in September with a bachelor&apos;s degree in Physics.
                </BioSection>
                <BioSection>
                <BioYear>2019</BioYear>
                    Join KM Studio as Backend engineer.
                </BioSection>
            </Section>
            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    I ❤️
                </Heading>
                <Paragraph>
                    DotA2, Basketball, Coding! 
                </Paragraph>
            </Section>
        </Container>
    )
}

export default Page
