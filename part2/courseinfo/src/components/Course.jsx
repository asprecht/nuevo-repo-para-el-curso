const Header = (props)=>{
  const {name}=props

  return <div>{name}</div>
}


const Course = (props)=>{
  const {course}=props 

  return <div>
    <Header name={course.name}/>
    <Content parts={course.parts} />
    <Total parts={course.parts} />
    </div>

}

const Part = (props)=>{
  const {part}=props

  return <li> 
    {part.name} {part.exercises} 
    </li>
}

const Content = (props)=> {
  const {parts} = props

  return (
    <ul>
    {parts.map(part => <Part key={part.id} part={part} />)}
    </ul>
  )

}
const Total =({parts}) =>{

  const total = parts.reduce((sum, part) =>{
    return sum + part.exercises 

  }, 0)

  return <p>Total of {total} exercises</p>
}

export default Course