import { useEffect, useState } from "react";

const TodoDateTime = () => {
  const [dateTime, setDateTime] = useState("");

  // Todo date and time
  useEffect(() => {
    const formattedDateTime = setInterval(() => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString();
      const formattedTime = now.toLocaleTimeString();

      setDateTime(`${formattedDate} - ${formattedTime}`);
    }, 1000);
    return () => {
      clearInterval(formattedDateTime);
    };
  }, []);

  return (
    <h2 className="text-center text-xl font-bold text-white mb-10">
      {dateTime}
    </h2>
  );
};

export default TodoDateTime;
