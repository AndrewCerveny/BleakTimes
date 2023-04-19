const getArticles = () => {
 const url = 'https://api.nytimes.com/svc/topstories/v2/us.json?api-key='
 const apiKey ='IncPXxDhLTioCj842WteukrUvw5vCeap'
 
 return fetch(`${url}${apiKey}`)
  .then((res) => {
    if(!res.ok) {
      throw new Error()
    }else{
      return res.json()
    }
  })
}

export default getArticles