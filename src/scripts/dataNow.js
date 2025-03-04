export const now = () => {
    const now = new Date();
    const options = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric', 
    hour: '2-digit', 
    minute: '2-digit', 
    second: '2-digit',
    };

    const formatter = new Intl.DateTimeFormat('ru-RU', options);
    return formatter.format(now); 
}

export const nowISO = () => new Date()

export const getMilliseconds = () => {
    const now = new Date();
    return now.getMilliseconds();
}