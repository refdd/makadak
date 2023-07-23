export const timeElapsed = (date, isTimeStamp) => {
    const time = Date.now() - Date.parse(date);

    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((time / 1000 / 60) % 60);
    const seconds = Math.floor((time / 1000) % 60);

    if (days >= 1) {
        return `${days}d`
    }
    else if (hours >= 1) {
        if (isTimeStamp) {
            const parsedDate = new Date(date);
            return parsedDate.getHours() + ':' + parsedDate.getMinutes();
        }
        return `${hours}h`
    }
    else if (minutes >= 1) {
        return `${minutes}m`
    } else {
        return `${seconds}s`
    }
}

