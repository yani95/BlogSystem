import { FormControl } from '@angular/forms';

export function UrlValidation(control: FormControl): { [s: string]: boolean }
{
  let regex = new RegExp(/((?:www\.|(?!www))[^\s\.]+\.[^\s]{2,})/);

  if (!regex.test(control.value) && control.value != '') {
    return { invalidURL: true };
  }
}