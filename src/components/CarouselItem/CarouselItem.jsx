import { useContext } from 'react'
import { CustomCursorContext } from '../../context/customCursor/customCursor.context'

const CarouselItem = ({ item, x }) => {
  const { website, image, imageMd } = item

  const { setCursorOption } = useContext(CustomCursorContext)

  const handleMouseEnter = () => setCursorOption('project')
  const handleMouseLeave = () => setCursorOption('default')

  return (
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{ x }} className="carousel__item">
          <picture>
              <source media="(max-width: 900px)" srcSet={imageMd} />
              <img src={image} alt={website} />
          </picture>
      </div>
  )
}

export default CarouselItem