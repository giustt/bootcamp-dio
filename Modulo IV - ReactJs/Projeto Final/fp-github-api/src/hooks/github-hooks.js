import { useContext } from "react";
import { GitHubContext } from "../providers/githubProvider";

const useGithub = () =>{

    const {githubState, getUser, getUserRepos, getUserStarred} = useContext(GitHubContext);
    return {githubState, getUser, getUserRepos, getUserStarred}

};

export default useGithub;
