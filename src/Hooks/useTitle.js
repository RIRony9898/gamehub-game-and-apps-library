import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Gamehub`;
  }, [title]);
};

export default useTitle;
