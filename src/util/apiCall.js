
const getArticles = () => {
 const url = 'https://api.nytimes.com/svc/topstories/v2/us.json?api-key='
 const apiKey = process.env.REACT_APP_API_KEY 
 
 return fetch(`${url}${apiKey}`)
  .then((res) => {
    if(!res.ok) {
      throw Error('404 failed to get collect information,please try again later!')
    }else{
      return res.json()
    }
  })
}

export default getArticles