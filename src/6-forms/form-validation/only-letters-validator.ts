import { AbstractControl, ValidatorFn } from '@angular/forms';

export function onlyLettersValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value = control.value;

    // Eğer değer yoksa veya 6 karakterden kısa ise hata döndür.
    if (!value || value.length < 6) {
      return { 'minLength': { value: control.value } };
    }

    // Sadece harfler (Türkçe karakterler dahil) ve boşluk karakterine izin ver.
    const regex = /^[a-zA-ZğüşıöçĞÜŞİÖÇ\s]+$/;

    // Eğer regex'e uymuyorsa hata döndür.
    if (!regex.test(value)) {
      return { 'onlyLetters': { value: control.value } };
    }

    // Eğer her şey geçerliyse null döndür.
    return null;
  };
}
