import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Best Store`;
  }, [title]);
};

export default useTitle;
