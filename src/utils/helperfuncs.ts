const renderTMDBImage = (endpoint: string, size?: number)=>{
    return `https://image.tmdb.org/t/p/w${size || 500}/${endpoint}`
}

export {
    renderTMDBImage,
}