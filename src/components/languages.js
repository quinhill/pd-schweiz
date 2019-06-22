export const german = {
  aboutKC: 'Über KC',
  aboutPD: 'Über Positive Disziplin',
  address: 'Adresse',
  cell: 'Handy Nummer',
  city: 'Ortschaft',
  confirmButton: 'Ja, Bestätigen',
  contact: 'Kontakt',
  courselink: 'Zurück zu Kurse',
  courses: 'Kurse',
  courseSignup: 'Für Kurs anmelden',
  courseSignupButton: 'Anmelden',
  declineButton: 'Nein, nicht anmelden',
  declineCancel: 'Nein, nicht abmelden',
  declineConfirm: 'Ja, abmelden',
  email: 'Email',
  firstName: 'Vorname',
  lastName: 'Nachname',
  loading: 'am laden...',
  name: 'Name',
  password: 'Passwort',
  passwordTwo: 'Passwort wiederholen',
  PDbooks: 'Positive Discipline Bücher und Info',
  PDlinks: 'Links zur Positiven Disziplin',
  phone: 'Telefon',
  registerText: 'Wollen Sie ein Konto erstellen um zukünftig kein Anmeldungsformular mehr ausfüllen zu müssen? Sie können sich hier Registrieren',
  signin: 'Einloggen',
  signinText: 'Haben Sie bereits ein Konto erstellt? Sie können sich hier ',
  signout: 'Abmelden',
  signup: 'Konto erstellen',
  user: 'Benutzer',
  zip: 'PLZ',
  accountCreatedText: (name) => (`${name}, Sie haben ein Konto mit Positive Discipline Schweiz erstellt!`),
  cancelSuccess: (name, course, date) => (`Hallo ${name}, Sie haben sich erfolgreich vom ${course} am ${date} abgemeldet.`),
  confirmCancel: (title) => (`Wollen Sie sich wirklich vom ${title} abmelden?`),
  confirmCourse: (title) => (`Wollen Sie sich für den ${title} anmelden?`),
  newUserSignup: (name) => (`${name}, danke dass Sie ein Konto bei Positive Discipline Schweiz erstellt haben!`),
  signupSuccess: (name, course, date) => (`${name}, Danke dass Sie sich für den ${course} am ${date} angemeldet haben! Ich freue mich Sie dort zu sehen! -KC`),
  signupQuestion: (title) => (`Wollen Sie sich jetzt für den ${title} anmelden?`),
};

export const english = {
  aboutPD: 'About Positive Discipline',
  aboutKC: 'About KC',
  address: 'Address',
  cell: 'Cell phone number',
  city: 'City',
  confirmButton: 'Yes, confirm',
  contact: 'Contact',
  courses: 'Courses',
  courselink: 'Back to Courses',
  courseSignup: 'Sign up for course',
  courseSignupButton: 'Sign up',
  declineButton: "No, don't sign up",
  declineCancel: "No, cancel",
  declineConfirm: 'Yes, confirm',
  email: 'Email',
  firstName: 'First name',
  lastName: 'Last name',
  loading: 'loading...',
  name: 'Name',
  passwordTwo: 'Repeat password',
  password: 'Password',
  PDbooks: 'Positive Discipline books and information',
  PDlinks: 'Positive Discipline links:',
  phone: 'Phone',
  registerText: 'By creating an account, you will not have to fill out the course registration for any future courses. You can sign up with the form below.',
  signin: 'Log In',
  signinText: 'Already have an account? Click here to ',
  signout: 'Sign Out',
  signup: 'Create Account',
  user: 'User',
  zip: 'Postal code',
  accountCreatedText: (name) => (`${name}, you have created an account with Positive Discipline Schweiz!`),
  cancelSuccess: (name, course, date) => (`Hi ${name}, you have successfully been removed from the list of participants of the ${course} on ${date}.`),
  confirmCancel: (title) => (`Are you sure you want to be removed from the list of participants for the ${title}?`),
  confirmCourse: (title) => (`Would you like to sign up for ${title}?`),
  newUserSignup: (name) => (`${name}, Thank you for creating an account with Positive Discipline Schweiz!`),
  signupQuestion: (title) => (`Would you like to sign up for ${title} now?`),
  signupSuccess: (name, course, date) => (`${name}, thank you for signing up for ${course} on ${date}! I look forward to seeing you there! -KC`)
};


export const errorCodeDe = (code) => {
  switch (code) {
    case 'auth/user-not-found':
      return 'Es gibt keinen Benutzerdatensatz, der dieser Kennung entspricht. Bitte überprüfen Sie die Rechtschreibung oder erstellen Sie ein Konto.';
    case 'auth/wrong-password':
      return 'Das Passwort ist ungültig oder der Benutzer hat kein Passwort.'
    default:
      return null
  }
}

export const errorCodeEn = (code) => {
  switch (code) {
    case 'auth/user-not-found':
      return 'There is no user record corresponding to this identifier. Please check your spelling or create an account.';
    case 'auth/wrong-password':
      return 'The password is invalid or the user does not have a password.'
    default:
      return null
  }
}