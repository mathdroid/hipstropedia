WebFontConfig = {
    google: { families: [ 'Roboto:500,300,500italic,300italic:cyrillic-ext,latin,greek-ext,greek,vietnamese,latin-ext,cyrillic', 'Lobster::latin' ] }
   // google: { families: [ 'Lobster::latin' ] }
  };
  (function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })();
