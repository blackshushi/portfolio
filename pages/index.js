import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'
import {
  Container,
  Box,
  Button,
  Heading,
  useColorModeValue
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import Instruction from './_introduction'
import Bio from './_bio'
import Contacts from './_contacts'

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        p={3}
        mt={5}
        mb={6}
        align="center"
      >
        <p>Hi! Welcome to my page.</p>

        <p>
          I’m a Senior Backend Engineer specializing in Golang and Ruby on
          Rails, currently open to new opportunities. Feel free to reach out!
        </p>
      </Box>

      <Section delay={0.3}>
        <Instruction />
      </Section>
      <Section delay={0.5}>
        <Heading as="h3" variant="section-title">
          I ❤️
        </Heading>
        <Paragraph>DotA2, Basketball, Coding!</Paragraph>
      </Section>
      <Section delay={0.8}>
        <Box align="center" my={4}>
          <NextLink href="/resume">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              View My Resume
            </Button>
          </NextLink>
        </Box>
      </Section>
      <Section delay={1}>
        <Bio />
      </Section>
      <Section delay={1}>
        <Contacts />
      </Section>
    </Container>
  )
}

export default Page
