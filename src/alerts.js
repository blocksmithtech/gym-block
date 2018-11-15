let alerts = {};

alerts.alertMessage = (type,  message) => {
  let alertElem = null;
  switch(type) {
    case 'error':
      alertElem = alerts.errorMessageComponent(message);
      break;
    case 'notice':
      alertElem = alerts.noticeMessageComponent(message);
      break;
    default:
      alertElem = alerts.noticeMessageComponent(message);
  }
  document.body.appendChild(alertElem);
}

alerts.errorMessageComponent = (message) => {
  let element = document.createElement('div');
  element.innerHTML = message;
  element.classList.add('error-msg');
  return element;
}

alerts.noticeMessageComponent = (message) => {
  let element = document.createElement('div');
  element.innerHTML = message;
  element.classList.add('notice-msg');
  return element;
}

module.exports = alerts;
