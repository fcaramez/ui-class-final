import { Center, Spinner } from "@chakra-ui/react";
import useSwr from "swr";

const fetcher = (...args) => fetch(...args).then(res => res.json());

const UsersList = () => {
  const {
    data: response,
    error,
    isLoading,
  } = useSwr("https://reqres.in/api/users", fetcher);

  if (error) {
    return (
      <div>
        <p>Error getting Data at this moment</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <Center
        height={"100vh"}
        width={"100vw"}
      >
        <Spinner
          color="orange"
          size={"xl"}
        />
      </Center>
    );
  }

  return response.data.map(user => {
    return <p>{user.first_name}</p>;
  });
};

export default UsersList;
