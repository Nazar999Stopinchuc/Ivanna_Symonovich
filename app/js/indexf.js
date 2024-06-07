const TELEGRAM_BOT_TOKEN = '6812199003:AAGQdUMhfDA_r5qIuBwtx3VXzUVtpNdVW5o';
const TELEGRAM_CHAT_ID = '@IvannaSymonovychFoto';
const API = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`


async function sendEmailTelegram(event) {
  event.preventDefault();

  const form = event.target;
  const formBtn = document.querySelector('.form__btn')
  const formSendResult = document.querySelector('.form__send-result')
  formSendResult.textContent = '';


  const { name, tel, } = Object.fromEntries(new FormData(form).entries());

  const text = `Лист від: ${name}! \nТелефон: ${tel}`;


  try {
    formBtn.textContent = 'Loading...';

    const response = await fetch(API, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text,
      })
    })

    if (response.ok) {
      formSendResult.textContent = 'Thank you for message!';
      form.reset()
    } else {
      throw new Error(response.statusText);
    }

  } catch (error) {
    console.error(error);
    formSendResult.textContent = 'message not sent. Please try again later.';
    formSendResult.style.color = 'red';

  } finally {
    formBtn.textContent = 'Send';
  }
};