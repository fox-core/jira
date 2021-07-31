import { useState, useEffect } from "react";
import qs from "qs";
import { List } from "./list";
import { SearchPanel } from "./search-pannel";
// import { cleanObject } from "../utils";
import { cleanObject } from "../../utils";

const apiUrl = process.env.REACT_APP_API_URL;

export const ProjectListScreen = () => {
  const [params, setParams] = useState({
    id: "",
    name: "",
  });

  const [list, setList] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(params))}`).then(
      async (response) => {
        if (response.ok) {
          setList(await response.json());
        }
      }
    );
  }, [params]);

  useEffect(() => {
    fetch(`${apiUrl}/users`).then(async (response) => {
      if (response.ok) {
        setUsers(await response.json());
      }
    });
  }, []);

  return (
    <div>
      <SearchPanel params={params} setParams={setParams} users={users} />
      <List list={list} users={users} />
    </div>
  );
};
