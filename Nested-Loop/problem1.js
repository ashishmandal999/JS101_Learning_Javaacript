

for(let month = 1; month<=12; month++)
  {
    for(let date=1; date<=31; date++)
      {
        if(month == 1 ||month == 3 ||month == 5 ||month == 7 ||month == 8 ||month == 10 ||month == 12)
        {
          console.log(date + "-" + month)
        }
        else if(month == 2)
        {
          if(date>29){
            continue;
          }
          else{
            console.log(date + "-" + month)
          }
        }
        else
        {
          if(date>30)
          {
            continue;            
          }
          else
          {
            console.log(date + "-" + month)  
          }
        }
      }
  }
