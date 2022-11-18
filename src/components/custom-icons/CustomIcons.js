import React from 'react'

export default function CustomIcons(props) {
    const { icon, altText} = props
    let finalIcon;

    switch (icon) {
        case 'main-feed':
            finalIcon = (
                <svg role="img" aria-label={altText} width="32" height="36" viewBox="0 0 32 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.3281 36H0V14.4L15.7906 0L31.9245 14.4V36H20.5965V23.2364H11.3281V36Z" fill="currentColor"/>
                </svg>
            )
            break;
        case 'new-post':
                finalIcon = (
                    <svg role="img" aria-label={altText} width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M36 0H0V36H36V0ZM20.0378 10.8679H16.9812V16.3019H11.5472V19.3585H16.9812V24.7925H20.0378V19.3585H25.4717V16.3019H20.0378V10.8679Z" fill="currentColor"/>
                    </svg>
                )
            break;
        case 'like':
                finalIcon = (
                    <svg role="img" aria-label={altText} width="42" height="36" viewBox="0 0 42 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M38.0206 3.36924C33.5335 -1.12308 26.2531 -1.12308 21.7609 3.36924L20.6919 4.43819L19.623 3.36924C15.1359 -1.12308 7.85549 -1.12308 3.368 3.36924C1.11942 5.61299 0 8.55716 0 11.4967C0 14.436 1.11942 17.3805 3.368 19.6242L4.43694 20.6932L19.0663 35.3264C19.9642 36.2243 21.4199 36.2246 22.3181 35.3267L38.0208 19.624C40.2642 17.3803 41.3837 14.4361 41.3837 11.4965C41.3833 8.55692 40.2639 5.61244 38.0205 3.369L38.0206 3.36924Z" fill="currentColor"/>
                    </svg>
                )
            break;
        default:
            break;
    }

    return finalIcon
}