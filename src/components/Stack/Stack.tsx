import './Stack.css'
import { Disk } from '..'

type StackProps = {
  content: Content[]
}
const Stack = (props: StackProps) => {
  const numOfDisks = props.content.length
  return (
    <section className="stack" style={{
      height: numOfDisks * 75 + 80 + 'px'
    }}>
      <a className="stack__link" href="http://github.com/johan-st/portfolio" target="_blank" rel="noopener noreferrer">
        <h3 className="stack__headline" >this stack</h3>
      </a>

      {
        props.content.map((c: Content, i: number): JSX.Element => {
          return (<Disk key={c.title + "_disk"} active={false} path={c.path} index={i}>{c.title}</Disk>)
        })
      }
    </section >
  )
}

export default Stack
