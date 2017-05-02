console.log("This source code is available under the GPL available at: https://www.gnu.org/licenses/gpl-3.0.en.html.");

var navHeight = $(".row-75").height();

var currentNavHeight = $(".row-fourth").height();

if(navHeight > currentNavHeight){
    $(".row-fourth").height(navHeight);
}
