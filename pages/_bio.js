import { Heading } from '@chakra-ui/react'
import Section from '../components/section'
import { BioSection, BioYear } from '../components/bio'

const Bio = () => {
  return (
    <Section delay={0.2}>
      <Heading as="h3" variant="section-title">
        Bio
      </Heading>
      <BioSection>
        <BioYear>Current</BioYear>
        Working as Senior Software Engineer in Oracle!
      </BioSection>
      <BioSection>
        <BioYear>2025</BioYear>
        Married!
      </BioSection>
      <BioSection>
        <BioYear>2019</BioYear>
        Finish University with Bachelor&apos;s Degree in Physics
      </BioSection>
      <BioSection>
        <BioYear>2015</BioYear>
        Studied in Zhejiang University
      </BioSection>
      <BioSection>
        <BioYear>2014</BioYear>
        Finished my high school education.
      </BioSection>
      <BioSection>
        <BioYear>2010</BioYear>
        Study in PinHwa High School
      </BioSection>
      <BioSection>
        <BioYear>1996</BioYear>
        Born in Klang (Selangor), Malaysia.
      </BioSection>
    </Section>
  )
}

export default Bio
