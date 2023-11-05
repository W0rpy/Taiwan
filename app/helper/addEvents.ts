export default function addGtagEvent() {
   const s = document.createElement('script')
   s.type = 'text/javascript'
   s.textContent = `gtag('event', 'click_signin', {
      'app_name': 'myAppName',
      'screen_name': 'Home'
    });`
   document.body.appendChild(s)
 }