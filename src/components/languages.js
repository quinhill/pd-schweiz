export const authDe = {
  user: 'Benutzer',
  signup: 'Konto erstellen',
  signin: 'Einloggen',
  courseSignup: 'Für Kurs anmelden',
  courseSignupButton: 'Anmelden',
  signout: 'Abmelden',
  email: 'Email',
  password: 'Passwort',
  passwordTwo: 'Passwort wiederholen',
  name: 'Name',
  firstName: 'Vorname',
  lastName: 'Nachname',
  address: 'Adresse',
  zip: 'PLZ',
  city: 'Ortschaft',
  phone: 'Telefon',
  cell: 'Handy Nummer',
  signinText: 'Haben Sie bereits ein Konto erstellt? Sie können sich hier ',
  registerText: 'Wollen Sie ein Konto erstellen um zukünftig kein Anmeldungsformular mehr ausfüllen zu müssen? Sie können sich hier Registrieren',
  accountCreatedText: (name) => (`${name}, Sie haben ein Konto mit Positive Discipline Schweiz erstellt!`),
  signupQuestion: (title) => (`Wollen Sie sich jetzt für den ${title} anmelden?`),
  courseLink: 'Zurück zu Kurse',
  confirmCourse: (title) => (`Wollen Sie sich für den ${title} anmelden?`),
  confirmButton: 'Ja, Bestätigen',
  declineButton: 'Nein, nicht anmelden',
  confirmCancel: (title) => (`Wollen Sie sich wirklich vom ${title} abmelden?`),
  declineConfirm: 'Ja, abmelden',
  declineCancel: 'Nein, nicht abmelden',
  PDlinks: 'Links zur Positiven Disziplin',
  PDbooks: 'Positive Discipline Bücher und Info'
};

export const authEn = {
  user: 'User',
  signup: 'Create Account',
  signin: 'Log In',
  courseSignup: 'Sign up for course',
  courseSignupButton: 'Sign up',
  signout: 'Sign Out',
  email: 'Email',
  password: 'Password',
  passwordTwo: 'Repeat password',
  name: 'Name',
  firstName: 'First name',
  lastName: 'Last name',
  address: 'Address',
  zip: 'Postal code',
  city: 'City',
  phone: 'Phone',
  cell: 'Cell phone number',
  signinText: 'Already have an account? Click here to ',
  registerText: 'By creating an account, you will not have to fill out the course registration for any future courses. You can sign up with the form below.',
  accountCreatedText: (name) => (`${name}, you have created an account with Positive Discipline Schweiz!`),
  signupQuestion: (title) => (`Would you like to sign up for ${title} now?`),
  courseLink: 'Back to Courses',
  confirmCourse: (title) => (`Would you like to sign up for ${title}?`),
  confirmButton: 'Yes, confirm',
  declineButton: "No, don't sign up",
  confirmCancel: (title) => (`Are you sure you want to be removed from the list of participants for the ${title}?`),
  declineConfirm: 'Yes, confirm',
  declineCancel: "No, cancel",
  PDlinks: 'Positive Discipline links:',
  PDbooks: 'Positive Discipline books and information'
};

export const navbarDe = {
  courses: 'Kurse',
  aboutPD: 'Über Positive Disziplin',
  aboutKC: 'Über KC',
  contact: 'Kontakt'
}

export const navbarEn = {
  courses: 'Courses',
  aboutPD: 'About Positive Discipline',
  aboutKC: 'About KC',
  contact: 'Contact'
}

export const courseSignupDe = {
  signupSuccess: (name, course, date) => (`${name}, Danke dass Sie sich für den ${course} am ${date} angemeldet haben! Ich freue mich Sie dort zu sehen! -KC`),
  loading: 'am laden...',
  courselink: 'Zurück zu Kurse',
  cancelSuccess: (name, course, date) => (`Hallo ${name}, Sie haben sich erfolgreich vom ${course} am ${date} abgemeldet.`)
}

export const courseSignupEn = {
  signupSuccess: (name, course, date) => (`${name}, thank you for signing up for ${course} on ${date}! I look forward to seeing you there! -KC`),
  loading: 'loading...',
  courselink: 'Back to Courses',
  cancelSuccess: (name, course, date) => (`Hi ${name}, you have successfully been removed from the list of participants of the ${course} on ${date}.`)
}