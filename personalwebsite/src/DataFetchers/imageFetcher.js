export default function ImageFetcher(urlObj){
    /**
     * @param {Object} urlObj: URI to be fetched
     * @param {String} urlObj.uri: URI of URL object
     * @param {String} urlObj.title: Title of URL object. This is matched with our routes to figure out what content we are actually rendering. 
     * @returns {Object.<String, ReactElement>} 
     * fetched data with new data.
     * 
     */
    return fetch(urlObj["url"])
    .then(url => {
        // console.log(text)
        // let script = wrapper.getElementsByTagName("script")[0]
        // // let scriptElem =;
        // // console.log(script.innerHTML)
        
        // if (script){
        //     wrapper.removeChild(script)
        //     document.body.appendChild(script)
        // }
        // return {["/" + urlObj.page + "/" + urlObj.title]: <div dangerouslySetInnerHTML={{__html: text}}/>}
        return <img src={url}/> /** We can just update the object that we previously passed in */
            
    })
    .catch(e => { throw e })

}