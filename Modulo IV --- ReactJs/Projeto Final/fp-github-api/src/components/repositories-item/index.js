import React from 'react'
import * as S from "./styled"

const RepositoryItem = ({name, linkToRepo, fullName}) => {
  return (
    <S.Wrapper>
      <S.WrapperTittle>{ name }</S.WrapperTittle>
      <h4>full name: </h4>
      <S.WrapperLink href={linkToRepo} target="_blank" rel='norefferrer'>{ fullName }</S.WrapperLink>
    </S.Wrapper>
  )
}

export default RepositoryItem
