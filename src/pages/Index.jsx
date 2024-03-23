import React, { useState } from "react";
import { Box, Button, Heading, Text, VStack, HStack, useToast } from "@chakra-ui/react";
import { FaHandRock, FaHandPaper, FaHandScissors } from "react-icons/fa";

const Index = () => {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);
  const toast = useToast();

  const choices = ["rock", "paper", "scissors"];

  const handleUserChoice = (choice) => {
    setUserChoice(choice);
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);

    if ((choice === "rock" && randomChoice === "scissors") || (choice === "paper" && randomChoice === "rock") || (choice === "scissors" && randomChoice === "paper")) {
      setResult("You win!");
      toast({
        title: "You win!",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    } else if (choice === randomChoice) {
      setResult("It's a draw!");
      toast({
        title: "It's a draw!",
        status: "info",
        duration: 2000,
        isClosable: true,
      });
    } else {
      setResult("You lose!");
      toast({
        title: "You lose!",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  return (
    <Box p={8} textAlign="center">
      <Heading as="h1" size="2xl" mb={8}>
        Rock Paper Scissors
      </Heading>
      <VStack spacing={8}>
        <HStack spacing={4}>
          <Button onClick={() => handleUserChoice("rock")} leftIcon={<FaHandRock />} colorScheme="blue" size="lg">
            Rock
          </Button>
          <Button onClick={() => handleUserChoice("paper")} leftIcon={<FaHandPaper />} colorScheme="green" size="lg">
            Paper
          </Button>
          <Button onClick={() => handleUserChoice("scissors")} leftIcon={<FaHandScissors />} colorScheme="purple" size="lg">
            Scissors
          </Button>
        </HStack>
        {userChoice && (
          <Text fontSize="xl">
            You chose: <strong>{userChoice}</strong>
          </Text>
        )}
        {computerChoice && (
          <Text fontSize="xl">
            Computer chose: <strong>{computerChoice}</strong>
          </Text>
        )}
        {result && (
          <Text fontSize="2xl" fontWeight="bold">
            {result}
          </Text>
        )}
      </VStack>
    </Box>
  );
};

export default Index;
