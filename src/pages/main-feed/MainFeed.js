import React from 'react'
import PostItem from '../../components/post-item/PostItem';
import './MainFeed.scss'
import useLocalStorage from '../../hooks/useLocalStorage';

export default function MainFeed() {
    const [feedData] = useLocalStorage('sg-feed-data', []);
    const items = feedData.map(item => {
        const {id, title, date, imageSrc, filter} = item
            return (
                <PostItem key={id} id={id} title={title} date={date} imageSrc={imageSrc} filter={filter}/>
            )
        }
    )
    items.sort(function(x, y){
        return y.props.date - x.props.date;
    })

    if (items.length > 0) {
        return (
            <main className='sg-main-feed'>
                { items }
            </main>
        )
    }
    return (
        <main className='sg-main-feed--empty'>
            <h2>
                You don't have any posts yet :( Go to the New Post section to upload your first post!
            </h2>
        </main>

    )
}
