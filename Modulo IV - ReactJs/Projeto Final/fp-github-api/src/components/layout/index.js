import React, { Children } from 'react'
import useGithub from '../../hooks/github-hooks';
import Header from '../header';
import * as S from "./styled"

function Layout({ children }) {

    const {githubState} = useGithub();
    return (
        <div>
            <S.WrapperLayout>
                <Header/>
                    {children}
            </S.WrapperLayout>
        </div>
    )
}

export default Layout;
