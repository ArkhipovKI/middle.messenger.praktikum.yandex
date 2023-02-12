import textField from '../../modules/TextField/textField.hbs';
import buttonComponent from '../../modules/ButtonComponent/buttonComponent.hbs';
import textLink from '../../modules/TextLink/textLink.hbs';
import { renderElementToPosition } from '../../utils'


function Register() {
  const inputPlaceholder = {
    placeHolders: [{ placeholder: 'Создай логин' }, { placeholder: 'Новый пароль' }],
  };
  const buttonName = { authorize: 'Зарегистрироваться' };

  const inputs = textField(inputPlaceholder);
  const buttonElement = buttonComponent(buttonName);
  const textLinkElement = textLink({link:'login'});

  renderElementToPosition('.form__main', 'afterbegin', inputs);
  renderElementToPosition('.form__main', 'afterend', buttonElement);
  renderElementToPosition('.form__main', 'afterend', textLinkElement);
}

export default Register;
