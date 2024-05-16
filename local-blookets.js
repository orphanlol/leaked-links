javascript:(function() {
  var blooketCodes = [];
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.ipify.org?format=json');
  xhr.onload = function() {
    var ipAddress = JSON.parse(xhr.responseText).ip;
    var ipPrefix = ipAddress.substring(0, ipAddress.lastIndexOf('.') + 1);
    for (var i = 1; i <= 255; i++) {
      var ip = ipPrefix + i.toString();
      var url = 'http://' + ip + ':8000';
      var img = new Image();
      img.onload = function() {
        var code = this.src.match(/\b[A-Z0-9]{6}\b/);
        if (code) {
          blooketCodes.push(code[0]);
        }
      };
      img.src = url + '/favicon.ico';
    }
    setTimeout(function() {
      if (blooketCodes.length > 0) {
        alert('Blooket codes found:\n' + blooketCodes.join('\n'));
      } else {
        alert('No Blooket codes found in your local area.');
      }
    }, 5000);
  };
  xhr.send();
})();
