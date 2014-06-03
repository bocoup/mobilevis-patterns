this["JST"] = this["JST"] || {};

this["JST"]["welcome"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<section id="welcome">\n\n  <div class="control close">\n    X\n  </div>\n\n  <p>\n    Welcome to <span class="mobilevis">MobileVis</span>!\n    Here offer some observed best practices\n    for building your mobile data visualization interfaces. These suggestions\n    are based on our <a href="http://mobilev.is">gallery of examples</a>.\n  </p>\n\n  <p>\n    <h3>Add Examples!</h3>\n    You should add some examples to our gallery!\n  </p>\n  <p>\n    <h3>Learn More!</h3>\n      Learn more about <span class="mobilevis">MobileVis</span> <a href="http://mobilev.is/about">here</a>\n      or submit any issues on <a href="http://github.com/bocoup/mobilevis">github</a>.\n  </p>\n\n</section>\n';

}
return __p
};