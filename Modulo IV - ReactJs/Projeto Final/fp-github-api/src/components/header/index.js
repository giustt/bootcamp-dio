import React, { useState } from 'react'
import * as S from "./styled"
import useGithub from '../../hooks/github-hooks';


const Header =() => {
  const { getUser } = useGithub();
  const [usernameForSearch, setUsernameForSearch] = useState()

  const submitGetUser = () =>{
    if(!usernameForSearch) return;
    return getUser(usernameForSearch);
  }

  return (
    <header>
        <S.Wrapper>
            <input type="text" placeholder='Try "giustt" to see a profile or another @ on github' 
            onChange={(event) => setUsernameForSearch(event.target.value)}></input>
            <button type='submit' onClick={submitGetUser}>Buscar</button>
        </S.Wrapper>
    </header>

  )
}

export default Header
