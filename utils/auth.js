 // middleware function to check if user is logged in
const withAuth = (req, res, next) => {
    // if user is not logged in, redirect to login page
    if (!req.session.logged_in) {
      return res.redirect("/login");
    }
    
    // if user is logged in, continue to next middleware or route
    next();
  };
  
  // exporting withAuth middleware function
  module.exports = withAuth;