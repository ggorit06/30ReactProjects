import React from 'react'

export default function Title({text}) {
  return (
    <div>
      <h1 className={'title text-center'}>{!text ? "Title" :text}</h1>
      <Title/>
    </div>
  )
}
