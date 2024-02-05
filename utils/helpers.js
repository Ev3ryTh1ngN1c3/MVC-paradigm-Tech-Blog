module.exports = {
    // function to format a date & time
    format_date: (date) => {
      // options for formatting the date & time
      const options = { month: 'numeric', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric' };
  
      // convert the provided date to a localized string using the specified options
      const formattedDate = new Date(date).toLocaleString('en-US', options);
  
      // return the formatted date & time
      return formattedDate;
    },
  };