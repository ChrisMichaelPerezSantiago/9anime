import axios from "axios";

interface Props {
  method: string;
  url: string;
}

export default ({ ...opts }: Props): Promise<any> => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios({ ...opts });
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};
