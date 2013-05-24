before('protect from forgery', function () {
  protectFromForgery('1071abbdc934a56df8832f1aa1758b413a3852a4');
});
before(function requireManager() {
    User.find(session.passport.user, function (err, user) {
        console.log(user);
        if (user) {
            req.user = user;
        } else {
            redirect('/login');
        }
        next();
    });
});
