import loginHTML from './login/login.hbs';
import login from './login';
import loginHTML from './login/login.hbs';
import registration from './registration';
import registrationHTML from './registration/registration.hbs';

export default {
  login: {
    render: login,
    html: loginHTML,
  },
  registration: {
    render: registration,
    html: registrationHTML,
  }
};