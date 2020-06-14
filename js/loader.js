const style = '#_spinner{width:60px;height:60px;z-index:11;border:8px solid #f3f3f3;border-radius:50%;border-top:8px solid;-webkit-animation:spin 2s linear infinite;animation:spin 2s linear infinite}#_loader{display:flex;justify-content:center;align-items:center;position:fixed;top:0;left:0;z-index:10;background-color:#000000E5;width:100vw;height:100vh}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg)}}@keyframes spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}._animate-bottom{position:relative;-webkit-animation-name:_animatebottom;-webkit-animation-duration:1s;animation-name:_animatebottom;animation-duration:1s}@-webkit-keyframes _animatebottom{from{bottom:-100px;opacity:0}to{bottom:0;opacity:1}}@keyframes _animatebottom{from{bottom:-100px;opacity:0}to{bottom:0;opacity:1}}';

export default function() {
  let wheelColor = '#e53935';
  let baseColor = '#f3f3f3';
  let bgColor = '#000000E9';
  let thickness = '6px';
  let size = '64px';
  let cOverflow = 'auto';
  const body = document.querySelector('BODY');

  function init() {
    cOverflow = body.style.overflow || 'auto';
    if(!document.querySelector('#_style')) {
      document.querySelector('HEAD').appendChild(document.createElement('style')).innerText = style;
    }
  }

  function start() {
    body.style.overflow = 'hidden';
    if(!document.querySelector('#_loader')) {
      let el = body.insertBefore(document.createElement('div'), body.firstChild);
      el.id = '_loader';
      el.style.backgroundColor = bgColor;
      el = el.appendChild(document.createElement('div'));
      el.id = '_spinner';
      el.style.width = el.style.height = size;
      el.style.borderColor = baseColor;
      el.style.borderTopColor = wheelColor;
      el.style.borderWidth = thickness;
    }
  }

  function stop() {
    body.style.overflow = cOverflow;
    if(document.querySelector('#_loader')) body.removeChild(document.querySelector('#_loader'));
  }

  function setSize (s) {
    size = s;
  } 

  function setThickness (t) {
    thickness = t;
  }

  function setColor(base, wheel, bg) {
    baseColor = base || baseColor;
    wheelColor = wheel || wheelColor;
    bgColor = bg || bgColor;
  }

  return {
    init,
    setSize,
    setThickness,
    setColor,
    start,
    stop
  }
}
