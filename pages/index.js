import styles from '../styles/Home.module.css';
import React, { useState, useEffect, useReducer } from 'react'
import { Flex, Box, Text, Input, Grid, GridItem, SimpleGrid } from '@chakra-ui/react';
import Layout from '../Components/Layout';


export default function Home({movies}) {
 
  
  return (
    
    <Layout>
      <header>
    <Flex flexWrap='wrap' 
    alignItems='center' 
    backgroundImage='/hero.png'
    backgroundPosition="center"
  backgroundRepeat="no-repeat"
  height='500'>
    <Box p='77px'>
     
    <Text color='#ffffff' fontFamily='DM Sans' fontSize='72px' fontWeight='700' lineHeight='94px' 
     fontStyle='normal'
     letterSpacing='-0.05em' mr='873px' >Watch something incredible.</Text>
    
    </Box>
  </Flex>
  </header>
  <section>
  <Flex mt='63px' mb='98' pl='77'  pr='77' flexDirection='column'> 
  <Text mb='8px' fontFamily='DM Sans' fontSize='24px' fontWeight='400' lineHeight='31px' 
     fontStyle='normal' color='#000000'>Search</Text>
  <Input variant='outline' />

 <Text mt='48px' fontFamily='DM Sans' fontSize='24px' fontStyle='normal' fontWeight='400' color='#000000' >Star Wars</Text>
  <Grid templateColumns='repeat(6, 1fr)' gap={6} mt='18px'> 
  {movies.Search.map((movie) => (
  <GridItem w='300px' h='300px'  bg='#000000' key={movie.imdbID} borderRadius='12px' color='#ffffff' justifyContent='center' alignItems='center' display='flex' >
    {movie.Title}
    </GridItem>
  ))}

</Grid>
 <Text mt='48px' fontFamily='DM Sans' fontSize='24px' fontStyle='normal' fontWeight='400' color='#000000' >Star Wars</Text>
  <Grid templateColumns='repeat(6, 1fr)' gap={6} mt='18px'> 
  {movies.Search.map((movie) => (
  <GridItem w='300px' h='300px'  bg='#000000' key={movie.imdbID} borderRadius='12px' color='#ffffff' justifyContent='center' alignItems='center' display='flex' >
    {movie.Title}
    </GridItem>
  ))} 
</Grid>
   </Flex>
  </section>
  </Layout>
  )
}


export async function getStaticProps(context) {

  const res = await fetch('https://www.omdbapi.com/?s=starwars&apikey=1c905d62')
  const movies = await res.json()
  return {
     props: { movies }, 
  }
}