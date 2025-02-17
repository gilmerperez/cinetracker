import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { retrieveUsers } from "../api/userAPI";
import type { UserData } from "../interfaces/UserData";
import ErrorPage from "./ErrorPage";
import UserList from "../components/Users";
import Auth from "../utils/auth";

const Movies = () => {
  const [users, setUsers] = useState<UserData[]>([]);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const fetchUsers = useCallback(async () => {
    try {
      const data = await retrieveUsers();
      setUsers(data);
    } catch (err) {
      console.error("Failed to retrieve users:", err);
      setError(true);
    }
  }, []);

  useEffect(() => {
    if (!Auth.loggedIn()) {
      navigate("/");
    } else {
      fetchUsers();
    }
  }, [navigate, fetchUsers]);

  if (error) {
    return <ErrorPage />;
  }

  return (
    <div className="movies-page">
      <h1>Movies</h1>
      <UserList users={users} />
    </div>
  );
};

export default Movies;
