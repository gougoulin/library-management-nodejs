import React from "react";
import { useParams } from "react-router";

const UpdateBookInstance = () => {
  const { bookid, id } = useParams();
  return (
    <div>
      <h3 className="text-success">
        edit book ({bookid}) instance ({id}) single page
      </h3>
    </div>
  );
};

export default UpdateBookInstance;
