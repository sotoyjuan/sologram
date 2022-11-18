import React, { useState } from 'react'
import SelectItem from '../../components/select-item/SelectItem'
import './NewPost.scss'
import useLocalStorage from "../../hooks/useLocalStorage";
import { errorImage, filters } from '../../constants'

export default function NewPost() {
    const [imageURL, setimageURL] = useState(errorImage)
    const [name, setName] = useState('')
    const [selectedFilter, setFilter] = useState()
    const [feedData, setFeedData] = useLocalStorage('sg-feed-data', []);
    const [isValidImage, setValidImage] = useState(false); 

    const handleFilterSelect = e => {
          setFilter(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (name === '' || imageURL === errorImage || !isValidImage) {
            alert('Please give your post a name and a valid image URL')
            return
        }   
        const newFeedData = buildNewItemData(name, imageURL, selectedFilter)
        if (feedData.length > 0) {
            setFeedData((currentFeedData) => ([...currentFeedData, newFeedData]));
        } else {
            console.log('you should enter here');
            setFeedData([newFeedData])
        }
            setimageURL(errorImage)
            setName('')
            setFilter('normal')
            alert('Posted!')
      };

    const filterSelectItems = filters.map(item => {
        const {id, label} = item
            return (
                <SelectItem
                    key={id}     
                    id={id} 
                    label={label} 
                    selectedFilter={selectedFilter} 
                    imageURL={imageURL}
                    errorImage={errorImage}
                    handler={handleFilterSelect} 
                />
            );
        })

  return (
    <main className='sg-new-post'>
        <form className='sg-forms__wrapper' onSubmit={handleSubmit}>
            <div className='sg-forms__field-container-text'>
                <label className='sg-forms__field-label sg-forms__field-label--quiet'>Enter and image URL</label>
                <input type='text' id='' name='' value={imageURL === errorImage ? '' : imageURL  || ''} onChange={e => setimageURL(e.target.value)}/>
            </div>
            <div className='sg-new-post__viewer'>
                <img 
                    src={imageURL} 
                    className={`sg-new-post__preview sg-filters--${selectedFilter}`} 
                    alt='Preview'
                    onError={e => {
                            e.target.src = errorImage
                            setValidImage(false)
                            e.onerror = null
                        }
                    }
                    onLoad={e => {
                            if (e.target.src === errorImage) {
                                setValidImage(false)
                            } else {
                                setValidImage(true)
                            }
                        }
                    }
                />
            </div>
            <div className='sg-forms__field-container-text'>
                <label className='sg-forms__field-label sg-forms__field-label--loud'>Give it a name:</label>
                <input type='text' id='' name='' value={name} onChange={e => setName(e.target.value) }/>
            </div>
            <div className='sg-forms__field-container-select-filter'>
            { filterSelectItems }
            </div>
            <button type='submit' className='sg-forms__submit-button'>Post now!</button>
        </form>
    </main>
  )
}


function buildNewItemData(name, url, filter) {
    const now = Date.now()
    const data = {
        id: name + now,
        title: name,
        date: now,
        imageSrc: url,
        filter: filter,
        liked: false
    }
    return data
}