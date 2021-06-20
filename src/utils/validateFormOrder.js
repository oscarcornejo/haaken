export default function validateInfo(values) {
  let errors = {};
  // eslint-disable-next-line no-useless-escape
  // const phoneRegex = /^(\+?56)?(\s?)(0?9)(\s?)[9876543]\d{7}$/;
  const phoneRegex = /[^0-9]/g;

  if (!values.name.trim() && !values.phone.trim() && !values.email.trim()) {
    errors.nameError = "*El campo Nombre es obligatorio";
    errors.phoneError = "*El campo Teléfono es obligatorio";
    errors.emailError = "*El campo Email es obligatorio";
  }

  if (!values.name.trim()) {
    errors.nameError = "*El campo Nombre es obligatorio";
  } else if (values.name.trim().length < 2) {
    errors.nameError = "*El campo Nombre debe tener más de 2 caracteres";
  } else if (!/^[A-Za-z]+/.test(values.name.trim())) {
    errors.nameError = "Favor ingresar solo letras";
  }

  if (!values.phone.trim()) {
    errors.phoneError = "*El campo Teléfono es obligatorio";
  } else if (phoneRegex.test(values.phone)) {
    errors.phoneError = "*El campo Teléfono no es válido";
  } else if (values.phone.trim().length < 11) {
    errors.phoneError = "*El campo Teléfono debe tener este formato: 56987654321";
  }

  if (!values.email.trim()) {
    errors.emailError = "El campo Email es oblogatorio";
  } else if (!values.email.includes("@")) {
    errors.emailError = "Favor ingrese un Email válido";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "El Email ingresado es inválido";
  }

  return errors;
}
