import { PageHeader, Row, Col } from 'antd'
import { getCategory } from '../../lib/api'
import ProductListItem from '../../components/products/ProductListItem'

const Category = ({ category }) => {
  return (
    <>
      <PageHeader
        title={category.name}
        sub-title={category.description}
      />
      <Row gutter={[16, 16]}>
      {
        category.products.items.map((product) => {
          return (
            <Col key={product.id} className="gutter-row" span={6}>
              <ProductListItem product={product} />
            </Col>
          )
        })
      }
      </Row>
    </>
  )
}

export async function getServerSideProps({ params, query }) {
  const category = await getCategory({
    categoryId: params.cid,
    currentPage: query.page
  })

  console.log(category)

  return {
    props: {
      category
    }
  }
}


export default Category