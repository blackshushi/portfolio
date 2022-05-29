import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import roseblack from '../public/images/rose-black.png'

const Works = () => {
    return(
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Works
            </Heading>
            
            <SimpleGrid columns={[1,1,2]} gap={6}>
                <Section>
                    <WorkGridItem id="shushiblog" title="shushiblog" thumbnail={roseblack}>
                    </WorkGridItem>
                </Section>
            </SimpleGrid>

        </Container>
    )
}

export default Works
