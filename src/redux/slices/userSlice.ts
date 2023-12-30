import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface User {
  id: string;
  username: string;
  surname: string;
  password: string;
  email: string;
  isPublic: boolean;
  blockList: object[];
  follower: object[];
  following: object[];
  stories: object[];
  posts: [{ imgSRC: string; title: string; id: string }];
  notifications: object[];
  bio: { info: string; country: string };
}

export async function getUsers(): Promise<User[]> {
  let response = await axios.get<User[]>(
    "https://instagram-api-b2hu.onrender.com/user"
  );
  let data = response.data;
  return data;
}

export async function getDeleteUsers(id: string): Promise<User[]> {
  let response = await axios.delete<User[]>(
    `https://instagram-api-b2hu.onrender.com/user/${id}`
  );
  let data = response.data;
  return data;
}
