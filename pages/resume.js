import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  Stack,
  Divider,
  Badge,
  HStack,
  VStack,
  useColorModeValue
} from '@chakra-ui/react'

const Resume = () => {
  function Section({ title, children }) {
    return (
      <Box mt={6}>
        <Heading size="md" mb={3}>
          {title}
        </Heading>
        {children}
      </Box>
    )
  }

  function SkillGroup({ label, items }) {
    return (
      <HStack align="start" spacing={3}>
        <Text fontWeight="bold" minW="120px">
          {label}
        </Text>
        <HStack wrap="wrap">
          {items.map((i) => (
            <Badge key={i} colorScheme="blue" px={2} py={1} borderRadius="md">
              {i}
            </Badge>
          ))}
        </HStack>
      </HStack>
    )
  }

  function Bullet({ children }) {
    return <Text>• {children}</Text>
  }

  function Job({ title, role, period }) {
    return (
      <Box mb={4}>
        <HStack justify="space-between" align="start">
          <Box>
            <Text fontWeight="bold">{title}</Text>
            <Text
              fontSize="sm"
              color={useColorModeValue('gray.600', 'gray.300')}
            >
              {role}
            </Text>
          </Box>
          <Text fontSize="sm" color="gray.500">
            {period}
          </Text>
        </HStack>
      </Box>
    )
  }

  return (
    <Container>
      <Box maxW="800px" mx="auto" p={6} display="flex">
        <Button
          as="a"
          href="./public/AlexResume.pdf"
          download
          colorScheme="blue"
          justifyContent="flex-end"
          ml="auto"
        >
          Download Full Resume
        </Button>
      </Box>

      <Box>
        <Container
          maxW="4xl"
          bg={useColorModeValue('white', 'black')}
          p={8}
          borderRadius="2xl"
          boxShadow="md"
        >
          <VStack align="start" spacing={1}>
            <Heading size="xl">Alex Koe Syuk Heian</Heading>
            <Text
              fontSize="lg"
              color={useColorModeValue('gray.600', 'gray.300')}
            >
              Senior Software Engineer
            </Text>

            <Text
              fontSize="sm"
              color={useColorModeValue('gray.600', 'gray.300')}
            >
              📍 Puchong, Selangor, Malaysia
            </Text>
            <Text
              fontSize="sm"
              color={useColorModeValue('gray.600', 'gray.300')}
            >
              📞 (+60) 18-2911098
            </Text>
            <Text
              fontSize="sm"
              color={useColorModeValue('gray.600', 'gray.300')}
            >
              ✉️blackshushi4571@gmail.com
            </Text>
          </VStack>

          <Divider my={6} />

          <Section title="Professional Summary">
            <Text>
              Senior Backend Engineer with 5+ years of experience designing and
              scaling high-traffic distributed systems across e-commerce,
              messaging, and enterprise financial platforms.
            </Text>
            <Text mt={2}>
              Experienced in Golang, Ruby on Rails, and TypeScript, focusing on
              performance optimization, event-driven architecture, and database
              efficiency.
            </Text>
            <Text mt={2}>
              Proven track record handling 30M+ daily transactions in production
              environments.
            </Text>
          </Section>

          <Section title="Skills">
            <Stack spacing={2}>
              <SkillGroup
                label="Languages"
                items={[
                  'Golang',
                  'Ruby on Rails',
                  'Python',
                  'TypeScript',
                  'ReactJS',
                  'PHP'
                ]}
              />
              <SkillGroup
                label="Databases"
                items={['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'SuiteQL']}
              />
              <SkillGroup
                label="Tools"
                items={[
                  'Linux',
                  'Kafka',
                  'Jenkins',
                  'Rancher',
                  'Webpack',
                  'Jest'
                ]}
              />
            </Stack>
          </Section>

          <Section title="Core Competencies">
            <VStack align="start" spacing={2}>
              <Bullet>
                Delivered global e-invoicing solutions across multiple regions
              </Bullet>
              <Bullet>Improved web performance by ~50% via optimization</Bullet>
              <Bullet>Designed event-driven systems handling ~1k QPS</Bullet>
              <Bullet>Optimized database workloads using Redis caching</Bullet>
              <Bullet>Systems handling 30M+ daily transactions</Bullet>
            </VStack>
          </Section>

          <Section title="Experience">
            <Job
              title="Oracle (Remote)"
              role="Senior Software Engineer"
              period="Dec 2024 – Present"
            />
            <Job
              title="Ola Chat"
              role="Software Engineer"
              period="Apr 2024 – Nov 2024"
            />
            <Job
              title="Qisahn (Singapore)"
              role="Software Engineer"
              period="Jan 2022 – Mar 2024"
            />
            <Job
              title="BLoyalty Sdn Bhd"
              role="Ruby on Rails Developer"
              period="Sep 2021 – Dec 2021"
            />
            <Job
              title="KM Studio"
              role="Backend Engineer"
              period="Sep 2019 – Aug 2021"
            />
          </Section>

          <Section title="Education">
            <Text fontWeight="bold">Zhejiang University</Text>
            <Text>BSc Physics (Sep 2015 – Jul 2019)</Text>
          </Section>
        </Container>
      </Box>
    </Container>
  )
}

export default Resume
