$('#submitDay').on("click", function() {
    $.ajax({
      url: `https://api.npoint.io/f1e229f2bd42717c2eee`, 
      method: 'GET',
      success: function(data){
        renderHTML(data)
        if (pageCounter > 3) {
          btn.addClass("hide-me")
        }
      },
      error: function() {
        console.log('Connection error')
      }
    })
})

function renderHTML(data) {
    let htmlString = ''
    data.forEach(function(animal){
      htmlString+= `<p>${animal.name} is a ${animal.species} that likes to eat`
      animal.foods.likes.forEach(function(like, index){
        htmlString += index === 0 ? like: ` and ${like}`
      })
      htmlString += ' and dislikes '
      animal.foods.dislikes.forEach(function(dislike, index){
        htmlString += index === 0 ? dislike: ` and ${dislike}`
      })
      htmlString += '.</p>'
    })
    animalContainer.append(htmlString)
  }