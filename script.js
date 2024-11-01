$('#submitDay').on("click", function() {
  const selectedDay = $('#dayInput').val().toUpperCase()
  if (!["A", "B", "C", "D", "E", "F", "G"].includes(selectedDay)) {
    alert("Please enter a valid day: A, B, C, D, E, F, or G.")
  }
  $.ajax({
      url: `https://api.npoint.io/f1e229f2bd42717c2eee`, 
      method: 'GET',
      success: function(data) {
          const schedule = data.schedule
          const daySchedule = schedule.filter(classInfo => classInfo.days.includes(selectedDay))
          $('#scheduleList').empty()
          daySchedule.forEach(classInfo => {
              $('#scheduleList').append(`
                  <tr>
                      <td>${classInfo.period}</td>
                      <td>Eventually</td>
                      <td>${classInfo.class}</td>
                      <td>${classInfo.teacher}</td>
                      <td>${classInfo.room}</td>
                  </tr>
              `)
          })
      },
      error: function() {
          console.log('Connection error')
      }
  })
})
