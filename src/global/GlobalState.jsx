import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/url";
import Store from "./Store";
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
  todos: todosReducer,
  user: userReducer
});

export default rootReducer;