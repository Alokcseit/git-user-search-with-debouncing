import React, { useState, useEffect } from "react";
import { FormGroup, Label, Input } from "reactstrap";
import Githubuser from "./Githubuser";
function Home() {
  const [debouncedusers, setdebouncedusers] = useState("");
  const [users, setUsers] = useState("");
  useEffect(() => {
    const delaydebounced = setTimeout(() => {
      setdebouncedusers(users);
    }, 2000);
    return () => clearTimeout(delaydebounced);
  }, [users]);

  return (
    <>
      <div
        style={{
          marginTop: "100px",
          marginLeft: "100px",
          width: "300px",
        }}
      >
        <FormGroup>
          <Label for="exampleSearch">Search for Github User</Label>
          <Input
            id="exampleSearch"
            name="search"
            placeholder="search placeholder"
            type="search"
            onChange={(e) => setUsers(e.target.value)}
          />
        </FormGroup>
      </div>
      {!users ? (
        <h5 style={{ marginLeft: "100px", width: "300px" }}>
          please initiate search.....!
        </h5>
      ) : (
        <Githubuser Finduser={debouncedusers} />
      )}
    </>
  );
}

export default Home;
