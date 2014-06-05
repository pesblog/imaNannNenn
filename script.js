
function setIconCookie(cName) {
  var date=new Date();
  var year = date.getFullYear();
  var nextEndOfYear = new Date(year+1, 12, 0);
  document.cookie = cName + '=' + escape(year)
                  + '; expires=' + nextEndOfYear.toGMTString();
}

function mkPostposition(type) {
  if (typeof type !== 'string' || type === '') return '';

  if (type === 'thin' ) return '_helvetica-ul_yugothic-el';
  if (type === 'thin2') return '_helvetica-t_yugothic-l';
}

function loadYearIcon(type) {
  var postposition = mkPostposition(type);

  var date = new Date();
  var year = date.getFullYear();
  var cName = 'yearcookie' + postposition;
  var findYearCookie = false;
  if (document.cookie) {
    var cookies = document.cookie.split("; ");
    for (var i = 0; i < cookies.length; i++) {
      var str = cookies[i].split('=');
      if (str[0] === cName) {
        findYearCookie = true;
        var cookie_value = unescape(str[1]);
        if (Number(cookie_value) !== year) {
          setIconCookie(cName);
          location.reload();
        }
      }
    }
  }

  if (!findYearCookie) {
    setIconCookie(cName);
  }

  var calImg = 'img/' + year + postposition + '.png';
  document.getElementById('icon').setAttribute('href',calImg);
  document.getElementById('iconimg').setAttribute('src',calImg);
}
