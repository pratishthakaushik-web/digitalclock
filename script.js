

// Function to get time in a specific time zone
function getTimeInTimeZone(timeZone) {
    return new Intl.DateTimeFormat('en-US', { 
        timeZone: timeZone, 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit' 
    }).format(new Date());
}

// Time zones for the countries
const timeZones = {
    india: 'Asia/Kolkata',
    china: 'Asia/Shanghai',
    pakistan: 'Asia/Karachi'
};


function showTime(country){
  if(country=="india")
  {
    const indiaTime = getTimeInTimeZone(timeZones.india);
    document.getElementById("cntry").innerHTML="India"
    document.getElementById("cntry").style.color="orange"
    document.getElementById("india").style.backgroundColor="orange"
    document.getElementById("")
    document.getElementById("pakistan").style.backgroundColor='rgb(221,212,212)'
    document.getElementById("china").style.backgroundColor='rgb(221,212,212)'
    document.getElementById("srilanka").style.backgroundColor='rgb(221,212,212)'



    document. getElementById("clock").innerHTML=indiaTime



  }

  if(country=="china")
    {
      const chinaTime = getTimeInTimeZone(timeZones.china);
      document.getElementById("cntry").innerHTML="China"
      document.getElementById("cntry").style.color="red"
      document.getElementById("china").style.backgroundColor="red"
      document.getElementById("pakistan").style.backgroundColor='rgb(221,212,212)'
      document.getElementById("india").style.backgroundColor='rgb(221,212,212)'
      document.getElementById("srilanka").style.backgroundColor='rgb(221,212,212)'


      document. getElementById("clock").innerHTML=chinaTime
  
    }
    if(country=="pakistan")
      {
        const pakistanTime = getTimeInTimeZone(timeZones.pakistan);
        document.getElementById("cntry").innerHTML="Pakistan"
        document.getElementById("cntry").style.color="green"
        document.getElementById("pakistan").style.backgroundColor="green"
        document.getElementById("china").style.backgroundColor='rgb(221,212,212)'
        document.getElementById("india").style.backgroundColor='rgb(221,212,212)'
        document.getElementById("srilanka").style.backgroundColor='rgb(221,212,212)'

        document. getElementById("clock").innerHTML=pakistanTime
    
      }
      if(country=="srilanka")
        {
          const indiaTime = getTimeInTimeZone(timeZones.india);
          document.getElementById("cntry").innerHTML="srilanka"
          document.getElementById("cntry").style.color="yellow"
          document.getElementById("srilanka").style.backgroundColor="yellow"
          document.getElementById("pakistan").style.backgroundColor='rgb(221,212,212)'
          document.getElementById("india").style.backgroundColor='rgb(221,212,212)'
          document.getElementById("china").style.backgroundColor='rgb(221,212,212)'

      
          document. getElementById("clock").innerHTML=indiaTime
      
  
        }

}
function handleclick(country)
{
  clearInterval(t)
  t=setInterval(()=>{showTime(country)},1000)
}

var t=setInterval(()=>{showTime('india')},1000)
