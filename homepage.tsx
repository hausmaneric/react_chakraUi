import React from 'react';
import { Box, Button } from '@chakra-ui/react';

const HomePage = () => {
  return (
    <Box textAlign="center" mt={10}>
      <h1>Bem-vindo à minha página inicial</h1>
      <Button colorScheme="blue" size="lg" mt={4}>
        Clique em mim!
      </Button>
    </Box>
  );
};

export default HomePage;
