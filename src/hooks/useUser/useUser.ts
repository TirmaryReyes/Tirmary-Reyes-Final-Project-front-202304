import axios from "axios";
import { UserCredentials } from "../../store/user/types";
const apiUrl = import.meta.env.VITE_API_URL;

const useUser = () => {
  const getUserToken = async (
    userCredentials: UserCredentials
  ): Promise<string> => {
    try {
      const { data } = await axios.post<{ token: string }>(
        `${apiUrl}/user/login`,
        userCredentials
      );

      return data.token;
    } catch (error) {
      throw new Error("Wrong credentials");
    }
  };
  return { getUserToken };
};

export default useUser;
