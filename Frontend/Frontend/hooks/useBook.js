import { useState } from "react";
import axios from "axios";
import { ApiEndPoint } from "../helpers/common";

const useBook = () => {
  const [book, setBook] = useState([]);

  const getBook = async () => {
    try {
      const response = await axios.get(
        ApiEndPoint + "/getBook"
      );
      setBook(response.data)
      return response.data
    } catch (error) {
        console.log(error);}
  };
  return {
    book,
    getBook
  };
}

export default useBook;
