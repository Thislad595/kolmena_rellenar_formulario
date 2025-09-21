@FormTesting @Smoke
Feature: Ingreso de datos al formulario
    Scenario Outline: Ingreso de datos correctos al formulario
        Given El usuario ingresa a la pagina del formulario
        When El usuario llena el campo Nombre con "<Nombre>"
        And El usuario llena el campo Apellido con "<Apellido>"
        And El usuario especifica su genero con "<Genero>"
        And El usuario especifica su correo electronico "<Email>"
        And El usuario especifica su pais "<Pais>"
        And El usuario especifica su nickname "<nickname>"
        And Contrasena del usuario "<Password>"
        When El usuario da click al boton Registro
        Then Resultado del registro
        Examples:
            | Nombre  | Apellido | Genero    | Email                         | Pais     | nickname | Password         |
            | Andres  | Sanchez  | Masculino | andressanchez@correofalso.com | AR       | Prueba1_ | Counterstrike16! |

    Scenario Outline: Ingreso de datos correctos menos el correo electronico
        Given El usuario ingresa a la pagina del formulario
        When El usuario llena el campo Nombre con "<Nombre>"
        And El usuario llena el campo Apellido con "<Apellido>"
        And El usuario especifica su genero con "<Genero>"
        And El usuario especifica su correo electronico "<Email>"
        And El usuario especifica su pais "<Pais>"
        And El usuario especifica su nickname "<nickname>"
        And Contrasena del usuario "<Password>"
        When El usuario da click al boton Registro
        Then Resultado del registro
        Examples:
            | Nombre  | Apellido | Genero    | Email                         | Pais     | nickname | Password         |
            | Miranda   | Lawson  | Femenino  | mrndlwsn@fakeemail           | CL   | vnessa  | Masseffect64-    |
    
    Scenario Outline: Ingreso de datos correctos al formulario menos el nombre del usuario
        Given El usuario ingresa a la pagina del formulario
        When El usuario llena el campo Nombre con "<Nombre>"
        And El usuario llena el campo Apellido con "<Apellido>"
        And El usuario especifica su genero con "<Genero>"
        And El usuario especifica su correo electronico "<Email>"
        And El usuario especifica su pais "<Pais>"
        And El usuario especifica su nickname "<nickname>"
        And Contrasena del usuario "<Password>"
        When El usuario da click al boton Registro
        Then Resultado del registro
        Examples:
            | Nombre  | Apellido | Genero    | Email                         | Pais     | nickname | Password         |
            | Andres1  | Sanchez  | Masculino | andressanchez@correofalso.com | UY       | 4b_ | Counterstrike16! |


Scenario Outline: Ingreso de datos correctos al formulario menos el apellido del usuario
        Given El usuario ingresa a la pagina del formulario
        When El usuario llena el campo Nombre con "<Nombre>"
        And El usuario llena el campo Apellido con "<Apellido>"
        And El usuario especifica su genero con "<Genero>"
        And El usuario especifica su correo electronico "<Email>"
        And El usuario especifica su pais "<Pais>"
        And El usuario especifica su nickname "<nickname>"
        And Contrasena del usuario "<Password>"
        When El usuario da click al boton Registro
        Then Resultado del registro
        Examples:
            | Nombre  | Apellido | Genero    | Email                         | Pais     | nickname | Password         |
            | Andres  | Sanch3z  | Masculino | andressanchez@correofalso.com | UY       | usuario23 | Counterstrike16! |

    Scenario Outline: Ingreso de datos correctos al formulario menos la contrasena
        Given El usuario ingresa a la pagina del formulario
        When El usuario llena el campo Nombre con "<Nombre>"
        And El usuario llena el campo Apellido con "<Apellido>"
        And El usuario especifica su genero con "<Genero>"
        And El usuario especifica su correo electronico "<Email>"
        And El usuario especifica su pais "<Pais>"
        And El usuario especifica su nickname "<nickname>"
        And Contrasena del usuario "<Password>"
        When El usuario da click al boton Registro
        Then Resultado del registro
        Examples:
            | Nombre  | Apellido | Genero    | Email                         | Pais     | nickname | Password         |
            | Maria  | Sanchez  | Femenino | andressanchez@correofalso.com | AR       | Prueba1_ | limbizkit |
