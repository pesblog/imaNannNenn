
function saveYearCookie(cName, year) {
  var nextEndOfYear = new Date(year+1, 12, 0);
  document.cookie = cName + '=' + escape(year)
                  + '; expires=' + nextEndOfYear.toGMTString();
}

function findCookie(cName) {
  if (!document.cookie) return undefined;

  var cookies = document.cookie.split("; ");
  for (var i in cookies) {
    var cookie = cookies[i].split('=');
    if (cookie[0] === cName) {
      var cookie_value = unescape(cookie[1]);
      return cookie_value;
    }
  }

  return undefined;
}

function mkPostposition(type) {
  if (typeof type !== 'string' || type === '') return '';

  if (type === 'thin' ) return '_helvetica-ul_yugothic-el';
  if (type === 'thin2') return '_helvetica-t_yugothic-l';
}

function loadYearIcon(type) {
  var year         = (new Date()).getFullYear();
  var postposition = mkPostposition(type);
  var cName        = 'yearcookie' + postposition;
  var cValue       = findCookie(cName);
  if (typeof cValue === 'undefined' || Number(cValue) !== year) {
    saveYearCookie(cName, year);
    location.reload();
  }

  var calImg = 'img/' + year + postposition + '.png';
  document.getElementById('icon').setAttribute('href',calImg);
  document.getElementById('iconimg').setAttribute('src',calImg);
}
