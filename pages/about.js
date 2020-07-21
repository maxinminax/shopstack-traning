import Title from '../components/Title'

export default function About() {
  const list = ['Mr. A', 'Mrs. B', 'Mr. C']
  return (
    <div>
      <Title>Shopstack title</Title>
      <ul>
      {
        list.map((item, index) => {
          return <li key={index}>- {item}</li>
        })
      }
      </ul>
    </div>
  )
} 