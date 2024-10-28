$('#submitDay').on("click", function() {
    $.ajax({
      url: `https://api.npoint.io/f1e229f2bd42717c2eee`, 
      method: 'GET',
      success: function(data){
        const schedule = data.schedule
        const daySchedule = schedule.filter(item => 
            item.days.includes(selectedDay)
        )
      },
      error: function() {
        console.log('Connection error')
      }
    })
    // Function to filter classes for a specific day
    function getClassesForDay(day) {
      return schedule.filter(classInfo => classInfo.days.includes(day));
    }

    // Example usage: Get classes for 'A' day
    const aDayClasses = getClassesForDay('A');
    console.log(aDayClasses);

    
    
})

