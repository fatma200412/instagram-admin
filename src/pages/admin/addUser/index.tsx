import React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import { useState } from "react";
import Dashboard from "../dashboard";
import { ChangeEvent, useCallback } from "react";

type Props = {};

function AddUser({}: Props) {
  const [username, setUsername] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [isPublic, setIsPublic] = useState<boolean>(false);

  const handleFromSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://instagram-api-b2hu.onrender.com/user",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            surname,
            password,
            email,
            isPublic,
            blockList: [],
            follower: [],
            following: [],
            favorites: [],
            stories: [],
            notifications: [],
            post: [],
            bio: {},
          }),
        }
      );
    } catch (error) {
      console.log("Error add users", error);
    }
    setUsername("");
    setSurname("");
    setPassword("");
    setEmail("");
    setIsPublic(false);
  };

  const handleIsPublic = useCallback(
    (changeEvent: ChangeEvent, checked: boolean): void => {
      setIsPublic(checked);
    },
    []
  );

  return (
    <>
      <Grid container>
        <Dashboard />

        <Grid item xs={4} style={{ margin: "0 auto" }}>
          <form action="">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: "20px",
                height: "100vh",
              }}
            >
              <label htmlFor="">User Name</label>
              <input
                value={username}
                type="text"
                style={{
                  height: "60px",
                  fontSize: "22px",
                  color: "black",
                }}
                onChange={(e) => setUsername(e.target.value)}
              />

              <label htmlFor="">Surname</label>
              <input
                value={surname}
                type="text"
                style={{
                  height: "60px",
                  fontSize: "22px",
                  color: "black",
                }}
                onChange={(e) => setSurname(e.target.value)}
              />

              <label htmlFor="">Password</label>
              <input
                value={password}
                type="password"
                style={{
                  height: "60px",
                  fontSize: "22px",
                  color: "black",
                }}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="">Email</label>
              <input
                value={email}
                type="email"
                style={{
                  height: "60px",
                  fontSize: "22px",
                  color: "black",
                }}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="">Is Public?</label>
              <input
                type="checkbox"
                style={{
                  height: "60px",
                  fontSize: "22px",
                  color: "black",
                }}
              />

              <button
                style={{
                  backgroundColor: "#ffafcc",
                  color: "black ",
                  padding: "10px",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Add product
              </button>
            </div>
          </form>
        </Grid>
      </Grid>
    </>
  );
}

export default AddUser;
