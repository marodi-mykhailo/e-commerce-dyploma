const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "Ad4BcSlHZ97W7FZ-caj-Dx7lmBktBdnoAmPXiap33mJwv2zgxYuJFyMB6W4GGCl9gCXIGB1_oo8HZM58",
  client_secret: "EN80fcr6w0iS81hfEBHJkX1KraV5vMt8mWW5efRIGKqi8oySZHy0ZD5mOtPp1kHhoHwcQOK7F7OdvXYU",
});

module.exports = paypal;
