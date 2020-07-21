import numeral from 'numeral'
import Link from 'next/link'
import { Card } from 'antd'

const { Meta } = Card

export default ({ product }) => {
  const formatPrice = (price) => {
    return `${numeral(price.value).format('0,0')}${price.currency}`
  }

  const renderPrice = () => {
    const { price_range } = product
    let { maximum_price, minimum_price } = price_range
    maximum_price = maximum_price.final_price;
    minimum_price = minimum_price.final_price;
    if (maximum_price.value === minimum_price.currency && maximum_price.currency === minimum_price.currency) {
      return formatPrice(minimum_price)
    }
    return `${formatPrice(minimum_price)} - ${formatPrice(maximum_price)}`
  }

  return (
    <Link href={`/products/${product.id}`}>
      <a>
        <Card
          hoverable
          style={{ width: 240 }}
          cover={
            <div className="frame-1x1">
              <img alt={product.thumbnail.label} src={product.thumbnail.url} />
            </div>
          }
        >
          <Meta title={product.name} description={renderPrice()} />
        </Card>
      </a>
    </Link>
  )
}