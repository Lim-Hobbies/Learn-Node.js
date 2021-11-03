// install nodemailer with npm.
// Turn on "Less Access" option in gmail.
// Replace <EMAIL> with your email account.
// Replace <PASSWORD> with your password.
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: '<EMAIL>',
        pass: '<PASSWORD>'
    }
});
// send mail in "text" format.
var mailOptions = {
    from: 'e22jzh@gmail.com',
    to: 'pornchai@mappointasia.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
    if(error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});

// send mail in "html" format.
mailOptions = {
    from: 'e22jzh@gmail.com',
    to: 'pornchai@mappointasia.com',
    subject: 'Sending Email using Node.js in HTML format.',
    html: '<h1>Welcome</h1><p>That was also easy too!</p>'
};

transporter.sendMail(mailOptions, function(error, info){
    if(error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});