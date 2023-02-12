import textField from '../../modules/TextField/textField.hbs';
import buttonComponent from '../../modules/ButtonComponent/buttonComponent.hbs';
import textLink from '../../modules/TextLink/textLink.hbs';
import { renderElementToPosition } from '../../utils'


function Login() {
  const inputPlaceholder = {
    placeHolders: [{ placeholder: 'Логин' }, { placeholder: 'Пароль' }],
  };
  const buttonName = { authorize: 'Авторизоваться' };

  const inputs = textField(inputPlaceholder);
  const buttonElement = buttonComponent(buttonName);
  const textLinkElement = textLink({link:'registration'});

  renderElementToPosition('.form__main', 'afterbegin', inputs);
  renderElementToPosition('.form__main', 'afterend', buttonElement);
  renderElementToPosition('.form__main', 'afterend', textLinkElement);
}

export default Login;
