import { Box, Button, Center, Heading, HStack } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { TfiLinkedin, TfiLink, TfiGithub } from "react-icons/tfi";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";

function App() {
  const { appData } = useSelector((store) => store.app);
  console.log(appData);
  return (
    <div>
      <Heading textAlign={"center"} color={"blue.400"} size={"2xl"}>
        Frontend React Template
      </Heading>
      <Heading size={"lg"} textAlign={"center"} color={"red.400"} mt={5}>
        Created with ❤ by Prajwal Jaiswal
      </Heading>

      <Box
        width={"50%"}
        m={"auto"}
        mt={10}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        p={5}
        borderRadius={10}
        boxShadow={"xl"}
      >
        <Heading color={"blue.400"}>
          <ArrowLeftIcon />
          -- Follow me on --
          <ArrowRightIcon />{" "}
        </Heading>
        <HStack mt={5}>
          <Button
            color={"red.400"}
            size={"lg"}
            bgColor={"transparent"}
            _hover={{ bgColor: "transparent" }}
            rightIcon={<TfiGithub />}
          >
            GitHub
          </Button>
          <Button
            color={"red.400"}
            size={"lg"}
            bgColor={"transparent"}
            _hover={{ bgColor: "transparent" }}
            rightIcon={<TfiLink />}
          >
            Medium
          </Button>
          <Button
            color={"red.400"}
            size={"lg"}
            bgColor={"transparent"}
            _hover={{ bgColor: "transparent" }}
            rightIcon={<TfiLinkedin />}
          >
            LinkedIn
          </Button>
        </HStack>
      </Box>
    </div>
  );
}

export default App;
