import {
  Box,
  Button,
  Center,
  Heading,
  HStack,
  Spinner,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { TfiLinkedin, TfiLink, TfiGithub } from "react-icons/tfi";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { useEffect } from "react";
import { fetchDataFromBackend } from "./store/App/app.actions";

function App() {
  const { isLoading, isError, appData } = useSelector((store) => store.app);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDataFromBackend());
  }, []);
  return (
    <div>
      <Heading textAlign={"center"} color={"blue.400"} size={"2xl"}>
        Frontend React Template
      </Heading>
      <Heading size={"lg"} textAlign={"center"} color={"blue.700"} mt={5}>
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
            color={"blue.700"}
            size={"lg"}
            bgColor={"transparent"}
            _hover={{ bgColor: "transparent" }}
            rightIcon={<TfiGithub />}
          >
            GitHub
          </Button>
          <Button
            color={"blue.700"}
            size={"lg"}
            bgColor={"transparent"}
            _hover={{ bgColor: "transparent" }}
            rightIcon={<TfiLink />}
          >
            Medium
          </Button>
          <Button
            color={"blue.700"}
            size={"lg"}
            bgColor={"transparent"}
            _hover={{ bgColor: "transparent" }}
            rightIcon={<TfiLinkedin />}
          >
            LinkedIn
          </Button>
        </HStack>
      </Box>
      <Box textAlign={"center"} mt={10}>
        {isLoading ? <Spinner /> : <Heading color={"blue.700"} size={"lg"}>{appData}</Heading>}
      </Box>
    </div>
  );
}

export default App;
