//@flow

export function validateEmail(email: string): boolean {
  //eslint-disable-next-line
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(email);
}

export function hasMaximumLengthOf(value: string, maximumLength: number): boolean {
  return !!(value && value.length > maximumLength);
}
