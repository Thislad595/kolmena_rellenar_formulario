import { expect } from '@playwright/test';
import { Given, When, Then } from '@cucumber/cucumber';
import { BASEURL } from '../config';
import { pages } from '../hooks/hook';
import { validateFirstLocator } from '../utils/validations';
import {
  inputNamePlaceHolder,
  inputLastName,
  inputEmailPlaceholder,
  inputUsername,
  inputRegisterLocation,
  inputpasswordLocation,
  formSuccess,
} from '../locators/exampleLocators';
import {
  getByPlaceholderAndClickIt,
  getByPlaceholderAndFillIt,
  getElementByRole,
  getByText,
  getByTestId,
} from '../utils/interactions';

const path = require('path');
const fs = require('fs');


Given("El usuario ingresa a la pagina del formulario", async () => {
  for (const page of pages) {
    console.log(`Ejecutando prueba en navegador: ${page.context().browser()?.browserType().name()}`);
    await page.goto(BASEURL);
  }
});

When('El usuario llena el campo Nombre con {string}', async function (Nombre) {
  // const nombre = this.parameters.name;
  for (const page of pages) {
    await getByPlaceholderAndClickIt(page, inputNamePlaceHolder);
    await getByPlaceholderAndFillIt(page, inputNamePlaceHolder, Nombre);
    console.log(Nombre)
  }
});

When('El usuario llena el campo Apellido con {string}', async function (Apellido) {
  // const nombre = this.parameters.name;
  for (const page of pages) {
    const input = page.getByTestId(inputLastName);
    await input.click(); // Opcional: enfoca el campo
    await input.fill(Apellido); // Rellena con el valor proporcionado
    console.log(`Apellido ingresado: ${Apellido}`);
  }
});

When('El usuario especifica su genero con {string}', async function (genero) {
  const testIdMap = {
    Masculino: 'radio-masculino',
    Femenino: 'radio-femenino',
    Otro: 'radio-otro',
  };
  
  const testId = testIdMap[genero];
  
  if (!testId) {
    throw new Error(`Género no reconocido: ${genero}`);
  }
  
  for (const page of pages) {
    await page.getByTestId(testId).check();
    console.log(`Género seleccionado: ${genero}`);
  }
});

When('El usuario especifica su correo electronico {string}', async function (Email) {
  for (const page of pages) {
    await getByPlaceholderAndClickIt(page, inputEmailPlaceholder);
    await getByPlaceholderAndFillIt(page, inputEmailPlaceholder, Email);
    console.log(Email)
  }
});

When('El usuario especifica su pais {string}', async function (pais) {
  console.log(`País seleccionado: ${pais}`);
  for (const page of pages) {
    const select = page.getByTestId('select-country');
    await select.selectOption({ value: pais }); // Ej: "AR", "CL", "US"
    
  }
});

When('El usuario especifica su nickname {string}', async function (string) {
  console.log('estoy aqui')
  // const nombre = this.parameters.name;
  for (const page of pages) {
    const input = page.locator(inputUsername);
    console.log(input)
    await input.click(); // Opcional: enfoca el campo
    await input.fill(string); // Rellena con el valor proporcionado
  }
});

When('Contrasena del usuario {string}', async function (string) {
  console.log(`Password seleccionado: ${string}`);
  // const nombre = this.parameters.name;
  for (const page of pages) {
    const input = page.locator(inputpasswordLocation);
    console.log(input)
    await input.click(); // Opcional: enfoca el campo
    await input.fill(string); // Rellena con el valor proporcionado
    
  }
});

When('El usuario da click al boton Registro', async function () {
  for (const page of pages) {
    const successLocator = page.getByTestId('formSuccess');
    const emailErrorLocator = page.getByTestId('emailError');
    const nameErrorLocator = page.getByTestId('firstNameError');
    const passwordErrorLocator = page.getByTestId('radio-passwordError');

    if (await successLocator.isVisible()) {
      console.log('TODO CORRECTO');
      await page.locator(inputRegisterLocation).click();
    }

    if (await emailErrorLocator.isVisible()) {
      console.log('Error en el correo');
    }

    if (await nameErrorLocator.isVisible()) {
      console.log('Error en nombre');
    }

    if (await passwordErrorLocator.isVisible()) {
      console.log('Error en el password');
    }
  }
});


Then('Resultado del registro', async function () {
  for (const page of pages) {
    const success = page.locator(formSuccess);
    if (await success.isVisible()){
      page.locator(formSuccess);
      console.log('Exitoso');
    }
  }

});