function cleanApi(articleData) {
 
  const fixedArticleResults = articleData.map((article) => {
    const articleResults = {}
    articleResults.title = article.title
    articleResults.abstract = article.abstract
    articleResults.url = article.url
    articleResults.uri = article.uri
    articleResults.byline = article.byline
    articleResults.updatedDate = article.updated_date.split('T')[0].replaceAll('-','/')
    articleResults.createdDate = article.created_date.split('T')[0].replaceAll('-','/')
    articleResults.publishedDate =  article.published_date.split('T')[0].replaceAll('-','/')
    articleResults.multimedia = article.multimedia
    articleResults.shortUrl = article.short_url
    articleResults.id = article.short_url.split('/')[3]
    return articleResults
  })
  return fixedArticleResults
}
export  default cleanApi