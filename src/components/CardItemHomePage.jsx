import { Link } from 'react-router-dom'

//card item for the homepage
function CardItemHomePage(props) {
  return (
    <>
      <div className='cards_item'>
        <Link className='cards_item_link' to={props.path}>
          <aside className="cards_item_pic-wrap" data-category={props.label}>
            <img src={props.src} alt='Adventure Image' className="cards_item_img" />
          </aside>
          <div className='cards_item_info'>
            <h5 className='cards_item_text'>{props.text}</h5>
          </div>
        </Link>
      </div>
    </>
  )
}

export default CardItemHomePage;