import React, {useState} from 'react'
import './PostItem.scss'
import CustomIcons from '../custom-icons/CustomIcons';
import relativeTime from '../../utils/relativeTime';
import useLocalStorage from '../../hooks/useLocalStorage';
import { useDoubleTap } from 'use-double-tap';


export default function PostItem({ id, title, date, imageSrc, filter }) {
    const [feedData, setFeedData] = useLocalStorage('sg-feed-data', []);
    const [activeAnimation, setAnimation] = useState(false);
    const now = Date.now()
    const formattedDate = relativeTime(now, date)
    const liked = feedData.find(item => item.id === id).liked
    const bind = useDoubleTap(e => handleLike(e));

    const handleLike = (e) => {
        e.preventDefault()
        handleAnimation()
        const newState = feedData.map(item => {
            if (item.id === id) {
              return {id, title, date, imageSrc, filter, liked: !liked}
            }
            return item;
          })
        setFeedData(newState);
    }

    const handleAnimation = () => {
        setAnimation(false)
        setAnimation(true)
        setTimeout(() => {
            setAnimation(false)
        }, 300);
    }

    return (
        <section className='sg-post-item'>
            <h2 className='sg-post-item__title'>{ title }</h2>
            <p className='sg-post-item__date'> { formattedDate } </p>
            <img {...bind} onDoubleClick={handleLike} loading='lazy' className={`sg-post-item__image sg-filters--${filter}`} src={ imageSrc } alt={ title }></img>
            <button className={`sg-post-item__like-button sg-post-item__like-button${ liked ? '--liked' : ''}`} onClick={handleLike}>
                <CustomIcons icon='like' altText='Like' />
            </button>
            <div className={`sg-post-item__animated-heart ${activeAnimation ? 'sg-post-item__animated-heart--active' : ''}`}>
                <CustomIcons icon='like' altText='Like' />
            </div>
        </section>
  )
}
