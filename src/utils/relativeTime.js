export default function relativeTime(now, then) {
    const difference = Math.floor(now / 1000) - Math.floor(then / 1000)
    let output = ``
    let number = ''
    if (difference < 60) {
        output = 'Posted less than a minute ago';
    } else if (difference < 3600) {
        number = Math.floor(difference / 60)
        output = `Posted ${number} ${number > 1 ? 'minutes' : 'minute'} ago`
    } else if (difference < 86400) {
        number = Math.floor(difference / 3600)
        output = `Posted ${number} ${number > 1 ? 'hours' : 'hour'} ago`
    } else if (difference < 2620800) {
        number = Math.floor(difference / 86400)
        output = `Posted ${number} ${number > 1 ? 'days' : 'day'} ago`
    } else if (difference < 31449600) {
        number = Math.floor(difference / 2620800)
        output = `Posted ${number} ${number > 1 ? 'months' : 'month'} ago`
    } else {
        number = Math.floor(difference / 31449600)
        output = `Posted ${number} ${number > 1 ? 'years' : 'year'} ago`
    }
    return output
}