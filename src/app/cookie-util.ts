export class CookieUtil {
  static setCookie(name: string, value: string, exp: number) {
    const now = new Date();
    now.setTime(now.getTime() + exp * 1000);
    const expires = 'expires=' + now.toUTCString();
    document.cookie = name + '=' + value + ';' + expires;
  }

  static getCookie(name: string) {
    const nameEQ = name + '=';
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }
}
