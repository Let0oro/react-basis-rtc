import React from 'react'

const SpanDecored = ({children}) => <span style={style.span}>{children}</span>

const ParagraphDecored = ({children}) => <p style={style.p}>{children}</p>;

const ShowCount = ({count}) => {
  return (
    <>
      <ParagraphDecored>You clicked here <SpanDecored>{count.number}</SpanDecored> times</ParagraphDecored>
      <ParagraphDecored><SpanDecored>{count.text}!</SpanDecored></ParagraphDecored>
      <ParagraphDecored>Real positive adds: <SpanDecored>{count.originNumber}</SpanDecored></ParagraphDecored>
    </>
  )
}

const style = {
  span: {
    color: "#646cff",
  },
  p: {
    fontSize: "1.2rem",
  }

}
export default ShowCount
