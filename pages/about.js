import Title from '../components/Title'

export default function About() {
  const list = ['Mr. A', 'Mrs. B', 'Mr. C']
  return (
    <div>
      <Title title="About page" subtitle="shopstack" />
      <ul>
      {
        list.map((item) => {
          return <li>- {item}</li>
        })
      }
      </ul>
    </div>
  )
} 