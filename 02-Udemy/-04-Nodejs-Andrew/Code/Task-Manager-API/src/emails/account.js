const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "ali.abdelfadeel97@gmail.com",
    subject: "Thanks for joining in!",
    text: `Welcome to the app, ${name}. Let me know how you get along with the app`,
  });
};

const sendCancelEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "ali.abdelfadeel97@gmail.com",
    subject: "Please don't leave us",
    text: `We feel sorry that you had to leave us. We hope that you can let us know why you left. Goodbye ${name}`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelEmail,
};
