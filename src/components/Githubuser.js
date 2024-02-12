import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
function Githubuser({ Finduser }) {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);
    if (Finduser !== null && Finduser !== "") {
      axios
        .get(`https://api.github.com/users/${Finduser}`)
        .then((response) => {
          setUser(response.data);
        })
        .catch((error) => {
          setError(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [Finduser]);
  return (
    <>
      {loading ? (
        <h4 style={{ marginLeft: "100px", width: "300px" }}>Loading ...</h4>
      ) : error ? (
        <h4>{error.message}</h4>
      ) : (
        <div
          style={{
            marginTop: "10px",
            marginLeft: "100px",
            width: "300px",
            alignItems: "center",
            backgroundColor: "#f3f3f3",
          }}
        >
          <h1>{user.name}</h1>
          <img
            src={user.avatar_url}
            alt="user"
            style={{ width: "300px", height: "200px" }}
          />
          <p>{user.bio}</p>
          <p>Company:{user.company}</p>
          <p>E-mail:{user.email}</p>
          <p>Followers:{user.followers}</p>
          <p>Followings:{user.following}</p>
          <p>Repo:{user.public_repos}</p>
        </div>
      )}
    </>
  );
}

export default Githubuser;
