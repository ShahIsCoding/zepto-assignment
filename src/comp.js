import React from "react";
import useFetch from "./useFetch";

const Comp = () => {
  const url = "https://reqbin.com/echo/post/json";
  const method = "GET";

  const { data, loading, error } = useFetch(url, method, requestBody);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {data && (
        <ul>
          {data.map((item) => (
            <li key={item.sucess}>{item.sucess}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Comp;
