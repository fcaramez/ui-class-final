import { useState } from "react";
import {
  Box,
  Heading,
  Text,
  Img,
  Flex,
  Center,
  useColorModeValue,
  HStack,
} from "@chakra-ui/react";
import { BsArrowUpRight, BsHeartFill, BsHeart } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const UserCard = ({ user }) => {
  const [liked, setLiked] = useState(false);
  const navigate = useNavigate();

  return (
    <Center py={6}>
      <Box
        w="xs"
        rounded={"sm"}
        my={5}
        mx={[0, 5]}
        overflow={"hidden"}
        bg="white"
        border={"1px"}
        borderColor="black"
        boxShadow={useColorModeValue("6px 6px 0 black", "6px 6px 0 cyan")}
      >
        <Box
          h={"200px"}
          borderBottom={"1px"}
          borderColor="black"
        >
          <Img
            src={user.avatar}
            roundedTop={"sm"}
            objectFit="cover"
            h="full"
            w="full"
            alt={"Blog Image"}
          />
        </Box>
        <Box p={4}>
          <Heading
            color={"black"}
            fontSize={"2xl"}
            noOfLines={1}
          >
            {user.first_name} {user.last_name}
          </Heading>
          <Text
            color={"gray.500"}
            noOfLines={2}
          >
            {user.email}
          </Text>
        </Box>
        <HStack
          borderTop={"1px"}
          color="black"
        >
          <Flex
            p={4}
            alignItems="center"
            justifyContent={"space-between"}
            roundedBottom={"sm"}
            cursor={"pointer"}
            w="full"
            onClick={() => navigate(`/users/${user.id}`)}
          >
            <Text
              fontSize={"md"}
              fontWeight={"semibold"}
            >
              View more
            </Text>
            <BsArrowUpRight />
          </Flex>
          <Flex
            p={4}
            alignItems="center"
            justifyContent={"space-between"}
            roundedBottom={"sm"}
            borderLeft={"1px"}
            cursor="pointer"
            onClick={() => setLiked(!liked)}
          >
            {liked ? (
              <BsHeartFill
                fill="red"
                fontSize={"24px"}
              />
            ) : (
              <BsHeart fontSize={"24px"} />
            )}
          </Flex>
        </HStack>
      </Box>
    </Center>
  );
};

export default UserCard;
