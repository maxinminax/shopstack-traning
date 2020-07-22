import { useContext } from 'react'
import AppContext from '../components/common/AppContext'

const Home = () => {
  const { categoryList } = useContext(AppContext)
  return (
    <code>{ JSON.stringify(categoryList, null, 2) }</code>
  )
}

export default Home 