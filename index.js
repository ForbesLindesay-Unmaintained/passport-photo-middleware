module.exports = function(photo, options){
    var opts = options || {};
    opts.useSession = opts.useSession != false;
    opts.avatarProp = opts.avatarProp || "avatar";
    return function(req,res, next){
        if(opts.useSession && req.session && req.session[opts.avatarProp]){
            if(req.user){
                req.user[opts.avatarProp] = req.session[opts.avatarProp];
            } else {
                delete req.session[opts.avatarProp];
            }
            next();
        } else if (req.user) {
            photo(req.user, function(err, avatarURL){
                if(err) return next();
                if(opts.useSession && req.session) req.session[opts.avatarProp] = avatarURL;
                req.user[opts.avatarProp] = avatarURL;
                next();
            })
        } else {
            next();
        }
    };
};