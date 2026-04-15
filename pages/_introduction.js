import { Box, Heading, Image } from '@chakra-ui/react'
const Instruction = () => {
  return (
    <Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        flexDirection={{ base: 'column', md: 'row' }}
        mb={6}
      >
        <Box
          mb={{ base: 4, md: 0 }}
          textAlign={{
            base: 'center',
            md: 'left'
          }}
          order={{ base: 2, md: 1 }}
        >
          <Heading as="h2" variant="page-title">
            Alex
          </Heading>
          <p>Senior Software Engineer</p>
        </Box>
        <Image
          border="2px solid"
          borderColor="whiteAlpha.800"
          boxSize={{ base: '180px', md: '180px' }}
          objectFit="cover"
          borderRadius="full"
          src="/images/profile_pic.jpeg"
          alt="Profile Image"
          order={{ base: 1, md: 2 }}
        />
      </Box>
      <Box>
        <p>
          Hi, I’m Alex, a backend engineer with 5+ years of experience building
          high-traffic distributed systems.
        </p>

        <p>
          Currently at Oracle NetSuite, I work on localization and compliance
          systems across China, Singapore, and Malaysia, focusing on performance
          and correctness.
        </p>

        <p>
          Previously, I built event-driven systems with Golang and Kafka (~1k
          QPS), focusing on reliability, idempotency, and data consistency.
        </p>

        <p>
          I enjoy backend architecture, scalability, and performance
          optimization, and I’m looking for a senior role where I can contribute
          to high-impact systems.
        </p>
      </Box>
    </Box>
  )
}

export default Instruction
