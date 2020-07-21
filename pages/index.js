import { getCategoryList } from '../lib/api'

export default function Home({ categoryList }) {
  return (
    <code>{ JSON.stringify(categoryList, null, true) }</code>
  )
}

export async function getServerSideProps(context) {
  const categoryList = await getCategoryList();
  // getCategoryList().then((categoryList) => {})
  // getCategoryList().then(function(categoryList) {})

  return {
    props: {
      categoryList
    }, // will be passed to the page component as props
  }
}