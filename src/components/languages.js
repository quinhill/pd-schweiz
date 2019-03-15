export const authDe = {
  user: 'Benutzer',
  signup: 'Konto erstellen',
  signin: 'Anmelden',
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
  PDlinks: 'Links zur Positiven Disziplin',
  PDbooks: 'Positive Discipline Bücher und Info'
};

export const authEn = {
  user: 'User',
  signup: 'Sign Up',
  signin: 'Sign In',
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
  confirmCancel: (title) => (`Do you really want to sign out of ${title}?`),
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
  signupSuccess: (name, course, date) => (`Hallo ${name}, Sie haben sich erfolgreich für den ${course} am ${date} angemeldet!`),
  loading: 'am laden...',
  courselink: 'Zurück zu Kurse',
  cancelSuccess: (name, course) => (`Hallo ${name}, Sie haben sich erfolgreich vom ${course} abgemeldet.`)
}

export const courseSignupEn = {
  signupSuccess: (name, course, date) => (`Hi ${name}, you have been signed up for the ${course} on ${date}!`),
  loading: 'loading...',
  courselink: 'Back to Courses',
  cancelSuccess: (name, course) => (`Hi ${name}, you have successful dropped out of the ${course}.`)
}