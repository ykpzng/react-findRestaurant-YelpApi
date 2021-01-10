require("dotenv").config();

// const clientID = "XutwFXhPapBTBh7BKnXFwQ";



export const Yelp = {
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}
      `, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.businesses) {
          return data.businesses.map(business => {
            return {
              id: business.id,
              imageSrc: business.image_url,
              name: business.name,
              address: business.location.address1,
              city: business.location.city,
              state: business.location.state,
              zipCode: business.location.zip_code,
              category: business.categories[0].title,
              rating: business.rating,
              reviewCount: business.review_count,
              url: business.url
            }

          })
        }
      })
  }
}

export default Yelp


// api key anahtarını .env de tutabilmem için kurmam gereken
// npm install dotenv --save
