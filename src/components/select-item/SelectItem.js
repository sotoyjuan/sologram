import React from 'react'

export default function SelectItem({id, label, selectedFilter, imageURL, errorImage, handler}) {
    return (
        <div className={`sg-forms__select-image-item 
            ${selectedFilter === id ? 'sg-forms__select-image-item--checked' : ''}`}
        >
            <label htmlFor={id}> {label} 
                <img 
                    className={`sg-filters--${id}`}
                    src={imageURL} 
                    alt={label}                         
                    onError={e => {
                        e.target.src = errorImage
                        e.onerror = null
                    }} 
                />
            <div className='sg-forms__select-image-frame'></div>
            </label>
            <input 
                type='radio' 
                id={id}
                value={id}
                checked={selectedFilter === id}
                onChange={handler}
            />
        </div>
    )
}

