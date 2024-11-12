export default {
  id: "FenextjsValidator",
  name: "FenextjsValidator",
  description: "Clase para validar datos de entrada, proporcionando métodos para verificar requerimientos, longitudes, y tipos específicos de validaciones.",
  useImport: true,
  useBreadcrumb: false,
  functions: [
    {
      id: "isEqual",
      name: "isEqual",
      description: "Método para definir la validación 'isEqual'. Establece la regla de que los datos deben ser iguales al valor especificado.",
      useImport: false,
      props: [
        {
          id: "d",
          type: "T[] | T",
          require: true,
          description: "Valor o lista de valores con los que se compararán los datos a validar.",
        },
        {
          id: "msg",
          type: "string",
          require: false,
          description: "Mensaje de error personalizado que se mostrará si la validación falla.",
        }
      ],
      returns: [
        {
          id: "this",
          type: "FenextjsValidatorClass",
          description: "Devuelve la instancia de la clase para permitir el encadenamiento de métodos.",
        }
      ],
      useExample: [
        {
          text: "Definir validación de igualdad",
          content: `const validator = FenextjsValidator();
validator.isEqual('value1');
                        `
        },
        {
          text: "Definir validación con mensaje de error personalizado",
          content: `const validator = FenextjsValidator();
validator.isEqual('value1', 'Los valores no son iguales');
                        `
        }
      ]
    },
    {
      id: "isRequired",
      name: "isRequired",
      description: "Método para habilitar la validación 'isRequired'. Establece la regla de que los datos deben estar presentes y no ser nulos o indefinidos.",
      useImport: false,
      props: [
        {
          id: "msg",
          type: "string",
          require: false,
          description: "Mensaje de error personalizado que se mostrará si la validación falla.",
        }
      ],
      returns: [
        {
          id: "this",
          type: "FenextjsValidatorClass",
          description: "Devuelve la instancia de la clase para permitir el encadenamiento de métodos.",
        }
      ],
      useExample: [
        {
          text: "Definir validación de requerimiento",
          content: `const validator = FenextjsValidator();
validator.isRequired();
                        `
        },
        {
          text: "Definir validación con mensaje de error personalizado",
          content: `const validator = FenextjsValidator();
validator.isRequired('Los datos son obligatorios');
                        `
        }
      ]
    },
    {
      id: "isBoolean",
      name: "isBoolean",
      description: "Método para habilitar la validación 'isBoolean'. Establece la regla de que los datos deben ser de tipo booleano.",
      useImport: false,
      props: [
        {
          id: "msg",
          type: "string",
          require: false,
          description: "Mensaje de error personalizado que se mostrará si la validación falla.",
        }
      ],
      returns: [
        {
          id: "this",
          type: "FenextjsValidatorClass",
          description: "Devuelve la instancia de la clase para permitir el encadenamiento de métodos.",
        }
      ],
      useExample: [
        {
          text: "Definir validación de tipo booleano",
          content: `const validator = FenextjsValidator();
validator.isBoolean();
                        `
        },
        {
          text: "Definir validación con mensaje de error personalizado",
          content: `const validator = FenextjsValidator();
validator.isBoolean('Debe ser un valor booleano');
                        `
        }
      ]
    },
    {
      id: "isNumber",
      name: "isNumber",
      description: "Método para habilitar la validación 'isNumber'. Establece la regla de que los datos deben ser de tipo número.",
      useImport: false,
      props: [
        {
          id: "msg",
          type: "string",
          require: false,
          description: "Mensaje de error personalizado que se mostrará si la validación falla.",
        }
      ],
      returns: [
        {
          id: "this",
          type: "FenextjsValidatorClass",
          description: "Devuelve la instancia de la clase para permitir el encadenamiento de métodos.",
        }
      ],
      useExample: [
        {
          text: "Definir validación de tipo número",
          content: `const validator = FenextjsValidator();
validator.isNumber();
                        `
        },
        {
          text: "Definir validación con mensaje de error personalizado",
          content: `const validator = FenextjsValidator();
validator.isNumber('Debe ser un número');
                        `
        }
      ]
    },
    {
      id: "isString",
      name: "isString",
      description: "Método para habilitar la validación 'isString'. Establece la regla de que los datos deben ser de tipo cadena (string).",
      useImport: false,
      props: [
        {
          id: "msg",
          type: "string",
          require: false,
          description: "Mensaje de error personalizado que se mostrará si la validación falla.",
        }
      ],
      returns: [
        {
          id: "this",
          type: "FenextjsValidatorClass",
          description: "Devuelve la instancia de la clase para permitir el encadenamiento de métodos.",
        }
      ],
      useExample: [
        {
          text: "Definir validación de tipo cadena",
          content: `const validator = FenextjsValidator();
validator.isString();
                        `
        },
        {
          text: "Definir validación con mensaje de error personalizado",
          content: `const validator = FenextjsValidator();
validator.isString('Debe ser una cadena');
                        `
        }
      ]
    },
    {
      id: "isLength",
      name: "isLength",
      description: "Método para habilitar la validación de longitud. Establece la regla de que los datos deben tener una longitud específica.",
      useImport: false,
      props: [
        {
          id: "length",
          type: "number",
          require: true,
          description: "La longitud que deben tener los datos para que la validación sea válida.",
        },
        {
          id: "msg",
          type: "string",
          require: false,
          description: "Mensaje de error personalizado que se mostrará si la validación falla.",
        }
      ],
      returns: [
        {
          id: "this",
          type: "FenextjsValidatorClass",
          description: "Devuelve la instancia de la clase para permitir el encadenamiento de métodos.",
        }
      ],
      useExample: [
        {
          text: "Definir validación de longitud",
          content: `const validator = FenextjsValidator();
validator.isLength(5);
                        `
        },
        {
          text: "Definir validación con mensaje de error personalizado",
          content: `const validator = FenextjsValidator();
validator.isLength(5, 'La longitud debe ser 5');
                        `
        }
      ]
    },
    {
      id: "isDate",
      name: "isDate",
      description: "Método para habilitar la validación 'isDate'. Establece la regla de que los datos deben ser de tipo Date (fecha).",
      useImport: false,
      props: [
        {
          id: "msg",
          type: "string",
          require: false,
          description: "Mensaje de error personalizado que se mostrará si la validación falla.",
        }
      ],
      returns: [
        {
          id: "this",
          type: "FenextjsValidatorClass",
          description: "Devuelve la instancia de la clase para permitir el encadenamiento de métodos.",
        }
      ],
      useExample: [
        {
          text: "Definir validación de tipo fecha",
          content: `const validator = FenextjsValidator();
validator.isDate();
                        `
        },
        {
          text: "Definir validación con mensaje de error personalizado",
          content: `const validator = FenextjsValidator();
validator.isDate('Debe ser una fecha válida');
                        `
        }
      ]
    },
    {
      id: "isObject",
      name: "isObject",
      description: "Método para habilitar la validación 'isObject'. Establece la regla de que los datos deben ser de tipo objeto.",
      useImport: false,
      props: [
        {
          id: "obj",
          type: "{ [id in keyof T]?: FenextjsValidatorClass } | undefined",
          require: true,
          description: "Objeto con las reglas de validación para cada propiedad del objeto.",
        },
        {
          id: "msg",
          type: "string",
          require: false,
          description: "Mensaje de error personalizado que se mostrará si la validación falla.",
        }
      ],
      returns: [
        {
          id: "this",
          type: "FenextjsValidatorClass",
          description: "Devuelve la instancia de la clase para permitir el encadenamiento de métodos.",
        }
      ],
      useExample: [
        {
          text: "Definir validación de tipo objeto",
          content: `const validator = FenextjsValidator();
validator.isObject({
    propertyName: FenextjsValidator().isString(),
});
                        `
        },
        {
          text: "Definir validación con reglas de propiedades y mensaje de error personalizado",
          content: `const validator = FenextjsValidator();
validator.isObject({
    propertyName: FenextjsValidator().isString('Debe ser una cadena'),
}, 'El objeto no es válido');
                        `
        }
      ]
    },
    {
      id: "isArray",
      name: "isArray",
      description: "Método para habilitar la validación 'isArray'. Establece la regla de que los datos deben ser un array.",
      useImport: false,
      props: [
        {
          id: "item",
          type: "FenextjsValidatorClass | undefined",
          require: false,
          description: "Instancia de FenextjsValidatorClass que define las reglas de validación para cada elemento del array.",
        },
        {
          id: "msg",
          type: "string",
          require: false,
          description: "Mensaje de error personalizado que se mostrará si la validación falla.",
        }
      ],
      returns: [
        {
          id: "this",
          type: "FenextjsValidatorClass",
          description: "Devuelve la instancia de la clase para permitir el encadenamiento de métodos.",
        }
      ],
      useExample: [
        {
          text: "Definir validación de tipo array",
          content: `const validator = FenextjsValidator();
validator.isArray();
                        `
        },
        {
          text: "Definir validación de array con reglas para sus elementos",
          content: `const validator = FenextjsValidator();
validator.isArray(FenextjsValidator().isString());
                        `
        },
        {
          text: "Definir validación con mensaje de error personalizado",
          content: `const validator = FenextjsValidator();
validator.isArray(
  FenextjsValidator().isString('Cada elemento debe ser una cadena')
);
                        `
        }
      ]
    },
    {
      id: "isMin",
      name: "isMin",
      description: "Método para habilitar la validación 'isMin'. Establece la regla de que los datos deben ser mayores que un valor específico.",
      useImport: false,
      props: [
        {
          id: "min",
          type: "number | Date",
          require: true,
          description: "Valor mínimo que los datos deben superar para que la validación sea válida.",
        },
        {
          id: "msg",
          type: "string",
          require: false,
          description: "Mensaje de error personalizado que se mostrará si la validación falla.",
        }
      ],
      returns: [
        {
          id: "this",
          type: "FenextjsValidatorClass",
          description: "Devuelve la instancia de la clase para permitir el encadenamiento de métodos.",
        }
      ],
      useExample: [
        {
          text: "Definir validación de valor mínimo",
          content: `const validator = FenextjsValidator();
validator.isMin(10);
                        `
        },
        {
          text: "Definir validación con mensaje de error personalizado",
          content: `const validator = FenextjsValidator();
validator.isMin(10, 'El valor debe ser mayor que 10');
                        `
        },
        {
          text: "Definir validación con valor mínimo de fecha",
          content: `const validator = FenextjsValidator();
validator.isMin(new Date('2024-01-01'));
                        `
        }
      ]
    },
    {
      id: "isMinOrEqual",
      name: "isMinOrEqual",
      description: "Método para habilitar la validación 'isMinOrEqual'. Establece la regla de que los datos deben ser mayores o iguales que un valor específico.",
      useImport: false,
      props: [
        {
          id: "min",
          type: "number | Date",
          require: true,
          description: "Valor mínimo que los datos deben superar o igualar para que la validación sea válida.",
        },
        {
          id: "msg",
          type: "string",
          require: false,
          description: "Mensaje de error personalizado que se mostrará si la validación falla.",
        }
      ],
      returns: [
        {
          id: "this",
          type: "FenextjsValidatorClass",
          description: "Devuelve la instancia de la clase para permitir el encadenamiento de métodos.",
        }
      ],
      useExample: [
        {
          text: "Definir validación de valor mínimo o igual",
          content: `const validator = FenextjsValidator();
validator.isMinOrEqual(10);
`
        },
        {
          text: "Definir validación con mensaje de error personalizado",
          content: `const validator = FenextjsValidator();
validator.isMinOrEqual(10, 'El valor debe ser mayor o igual a 10');
`
        },
        {
          text: "Definir validación con valor mínimo o igual de fecha",
          content: `const validator = FenextjsValidator();
validator.isMinOrEqual(new Date('2024-01-01'));
`
        }
      ]
    },
    {
      id: "isMax",
      name: "isMax",
      description: "Método para habilitar la validación 'isMax'. Establece la regla de que los datos deben ser menores que un valor específico.",
      useImport: false,
      props: [
        {
          id: "max",
          type: "number | Date",
          require: true,
          description: "Valor máximo que los datos deben ser menores que él para que la validación sea válida.",
        },
        {
          id: "msg",
          type: "string",
          require: false,
          description: "Mensaje de error personalizado que se mostrará si la validación falla.",
        }
      ],
      returns: [
        {
          id: "this",
          type: "FenextjsValidatorClass",
          description: "Devuelve la instancia de la clase para permitir el encadenamiento de métodos.",
        }
      ],
      useExample: [
        {
          text: "Definir validación de valor máximo",
          content: `const validator = FenextjsValidator();
validator.isMax(100);
                        `
        },
        {
          text: "Definir validación con mensaje de error personalizado",
          content: `const validator = FenextjsValidator();
validator.isMax(100, 'El valor debe ser menor que 100');
                        `
        },
        {
          text: "Definir validación con valor máximo de fecha",
          content: `const validator = FenextjsValidator();
validator.isMax(new Date('2024-01-01'));
                        `
        }
      ]
    },
    {
      id: "isMaxOrEqual",
      name: "isMaxOrEqual",
      description: "Método para habilitar la validación 'isMaxOrEqual'. Establece la regla de que los datos deben ser menores o iguales que un valor específico.",
      useImport: false,
      props: [
        {
          id: "max",
          type: "number | Date",
          require: true,
          description: "Valor máximo que los datos deben ser menores o iguales que él para que la validación sea válida.",
        },
        {
          id: "msg",
          type: "string",
          require: false,
          description: "Mensaje de error personalizado que se mostrará si la validación falla.",
        }
      ],
      returns: [
        {
          id: "this",
          type: "FenextjsValidatorClass",
          description: "Devuelve la instancia de la clase para permitir el encadenamiento de métodos.",
        }
      ],
      useExample: [
        {
          text: "Definir validación de valor máximo o igual",
          content: `const validator = FenextjsValidator();
validator.isMaxOrEqual(100);
`
        },
        {
          text: "Definir validación con mensaje de error personalizado",
          content: `const validator = FenextjsValidator();
validator.isMaxOrEqual(100, 'El valor debe ser menor o igual que 100');
`
        },
        {
          text: "Definir validación con valor máximo o igual de fecha",
          content: `const validator = FenextjsValidator();
validator.isMaxOrEqual(new Date('2024-01-01'));
`
        }
      ]
    },
    {
      id: "isCompareRef",
      name: "isCompareRef",
      description: "Método para habilitar la comparación de valores de referencia. Establece la regla de que los datos deben ser iguales a otro valor de referencia almacenado en la instancia.",
      useImport: false,
      props: [
        {
          id: "refKey",
          type: "string",
          require: true,
          description: "La clave que identifica el valor de referencia almacenado en la instancia para la comparación.",
        },
        {
          id: "msg",
          type: "string",
          require: false,
          description: "Mensaje de error personalizado que se mostrará si la validación falla.",
        }
      ],
      returns: [
        {
          id: "this",
          type: "FenextjsValidatorClass",
          description: "Devuelve la instancia de la clase para permitir el encadenamiento de métodos.",
        }
      ],
      useExample: [
        {
          text: "Definir validación de comparación con valor de referencia",
          content: `const validator = FenextjsValidator();
validator.isCompareRef('myRefKey');
`
        },
        {
          text: "Definir validación con mensaje de error personalizado",
          content: `const validator = FenextjsValidator();
validator.isCompareRef('myRefKey', 'Los valores no coinciden');
`
        }
      ]
    },
    {
      id: "isWhen",
      name: "isWhen",
      description: "Método para habilitar la validación 'isWhen'. Establece la regla de comparación cuando se cumpla una condición específica.",
      useImport: false,
      props: [
        {
          id: "data",
          type: "FenextjsValidatorClassIsWhenProps",
          require: true,
          description: "Objeto que contiene las reglas de validación a aplicar cuando la condición especificada sea verdadera. La estructura de 'FenextjsValidatorClassIsWhenProps' incluye los campos 'key', 'is', 'then', 'otherwise', y opcionalmente 'dataIsCurrent'.",
        }
      ],
      returns: [
        {
          id: "this",
          type: "FenextjsValidatorClass",
          description: "Devuelve la instancia de la clase para permitir el encadenamiento de métodos.",
        }
      ],
      extras: [
        {
          id: "condiciones",
          title: "Condiciones en 'isWhen'",
          description:
            "El método 'isWhen' permite aplicar validaciones condicionales basadas en los valores de las propiedades. A continuación se describen las posibles condiciones y el comportamiento de cada una:",
          tableItems: [
            {
              "Condición": "key",
              "Descripción": "El campo 'key' es el nombre de la propiedad a evaluar. Se usará para determinar si la validación debe aplicarse a esa propiedad.",
            },
            {
              "Condición": "is",
              "Descripción": "La propiedad 'is' contiene una instancia de 'FenextjsValidatorClass' que define las reglas de validación para aplicar cuando se cumpla la condición.",
            },
            {
              "Condición": "then",
              "Descripción": "La propiedad 'then' contiene una instancia de 'FenextjsValidatorClass' que define las reglas de validación a aplicar si la condición es verdadera.",
            },
            {
              "Condición": "otherwise",
              "Descripción": "La propiedad 'otherwise' contiene una instancia de 'FenextjsValidatorClass' que define las reglas de validación a aplicar si la condición es falsa. Este campo es opcional.",
            },
            {
              "Condición": "dataIsCurrent",
              "Descripción": "La propiedad 'dataIsCurrent' es un valor booleano opcional que indica si se debe comparar la propiedad con los datos actuales. Si no se establece, se asumirá como 'false'.",
            },
          ],
        },
      ],
      useExample: [
        {
          text: "Definir validación 'isWhen' con una condición",
          content: `const validator = FenextjsValidator();
validator.isWhen({ 
  key: 'age', 
  is: validator.isNumber(), 
  then: validator.isMin(18) 
});`
        },
        {
          text: "Definir validación 'isWhen' con condiciones múltiples y alternativa",
          content: `const validator = FenextjsValidator();
validator.isWhen({ 
  key: 'age', 
  is: validator.isNumber(), 
  then: validator.isMin(18), 
  otherwise: validator.isMax(65) 
});
validator.isWhen({ 
  key: 'name', 
  is: validator.isString(), 
  then: validator.isLength(3) 
});`
        }
      ]
    },
    {
      id: "isRegex",
      name: "isRegex",
      description: "Método para habilitar la validación 'isRegex'. Establece la regla de que los datos deben coincidir con una expresión regular especificada.",
      useImport: false,
      props: [
        {
          id: "data",
          type: "RegExp",
          require: true,
          description: "Expresión regular con la que los datos deben coincidir para que la validación sea éxitosa.",
        },
        {
          id: "msg",
          type: "string",
          require: false,
          description: "Mensaje de error personalizado que se muestra si la validación falla.",
        }
      ],
      returns: [
        {
          id: "this",
          type: "FenextjsValidatorClass",
          description: "Devuelve la instancia actual de la clase FenextjsValidatorClass, lo que permite el encadenamiento de métodos.",
        }
      ],
      useExample: [
        {
          text: "Habilitar validación 'isRegex'",
          content: `const validator = FenextjsValidator();
validator.isRegex(/^[a-zA-Z0-9]+$/, 'El valor debe contener solo caracteres alfanuméricos');`
        }
      ]
    },
    {
      id: "isEmail",
      name: "isEmail",
      description: "Método para habilitar la validación 'isEmail'. Establece la regla de que los datos deben ser un correo electrónico válido.",
      useImport: false,
      props: [
        {
          id: "msg",
          type: "string",
          require: false,
          description: "Mensaje de error personalizado que se muestra si la validación falla.",
        }
      ],
      returns: [
        {
          id: "this",
          type: "FenextjsValidatorClass",
          description: "Devuelve la instancia actual de la clase FenextjsValidatorClass, lo que permite el encadenamiento de métodos.",
        }
      ],
      useExample: [
        {
          text: "Habilitar validación 'isEmail'",
          content: `const validator = FenextjsValidator();
validator.isEmail('Por favor, ingresa un correo electrónico válido');`
        }
      ]
    },
    {
      id: "isCustom",
      name: "isCustom",
      description: "Método para habilitar la validación 'onCustom'. Establece la regla de que los datos deben cumplir con una validación personalizada definida por una función.",
      useImport: false,
      props: [
        {
          id: "data",
          type: "(data: T) => true | ErrorFenextjs",
          require: true,
          description: "Función que define la validación personalizada. Si la validación falla, debe retornar un error de tipo ErrorFenextjs.",
        },
        {
          id: "msg",
          type: "string",
          require: false,
          description: "Mensaje de error personalizado que se muestra si la validación falla.",
        }
      ],
      returns: [
        {
          id: "this",
          type: "FenextjsValidatorClass",
          description: "Devuelve la instancia actual de la clase FenextjsValidatorClass, lo que permite el encadenamiento de métodos.",
        }
      ],
      useExample: [
        {
          text: "Habilitar validación 'isCustom'",
          content: `const validator = FenextjsValidator();
validator.isCustom((data) => {
    if (data.length < 5) return new ErrorFenextjs('El valor es demasiado corto');
    return true;
}, 'Error en validación personalizada');`
        }
      ]
    },
    {
      id: "isOr",
      name: "isOr",
      description: "Método para definir la validación 'isOr'. Establece la regla de que los datos deben cumplir al menos una validación de las proporcionadas.",
      useImport: false,
      props: [
        {
          id: "d",
          type: "FenextjsValidatorClass[]",
          require: true,
          description: "Lista de instancias de FenextjsValidatorClass que representan las validaciones a comparar con los datos.",
        },
        {
          id: "msg",
          type: "string",
          require: false,
          description: "Mensaje de error personalizado que se muestra si la validación falla.",
        }
      ],
      returns: [
        {
          id: "this",
          type: "FenextjsValidatorClass",
          description: "Devuelve la instancia actual de la clase FenextjsValidatorClass, lo que permite el encadenamiento de métodos.",
        }
      ],
      useExample: [
        {
          text: "Habilitar validación 'isOr'",
          content: `const validator = FenextjsValidator();
const validator1 = FenextjsValidator().isRequired();
const validator2 = FenextjsValidator().isEmail();
validator.isOr([validator1, validator2], 'Debe ser un valor requerido o un email válido');`
        }
      ]
    },
    {
      id: "isEnum",
      name: "isEnum",
      description: "Método para habilitar la validación 'isEnum'. Establece la regla de que los datos deben coincidir con uno de los valores especificados en un objeto enumerado.",
      useImport: false,
      props: [
        {
          id: "data",
          type: "object",
          require: true,
          description: "Objeto que define los valores permitidos para la validación. Los datos deben coincidir con uno de estos valores.",
        },
        {
          id: "msg",
          type: "string",
          require: false,
          description: "Mensaje de error personalizado que se muestra si la validación falla.",
        }
      ],
      returns: [
        {
          id: "this",
          type: "FenextjsValidatorClass",
          description: "Devuelve la instancia actual de la clase FenextjsValidatorClass, lo que permite el encadenamiento de métodos.",
        }
      ],
      useExample: [
        {
          text: "Habilitar validación 'isEnum'",
          content: `const validator = FenextjsValidator();
enum enumValues { 
  'VALUE_1'= 'VALUE_1', 
  'VALUE_2'= 'VALUE_2' 
};
validator.isEnum(enumValues, 'El valor debe estar en el enum especificado');`
        }
      ]
    },
    //-------------------------------
    {
      id: "onValidate",
      name: "onValidate",
      description: "Método para validar los datos proporcionados según las reglas establecidas. Ejecuta todas las reglas de validación habilitadas previamente para los datos.",
      useImport: false,
      props: [
        {
          id: "d",
          type: "T",
          require: true,
          description: "Datos que se deben validar, los cuales serán evaluados contra las reglas de validación previamente habilitadas.",
        }
      ],
      returns: [
        {
          id: "true",
          type: "boolean",
          description: "Devuelve 'true' si los datos cumplen con todas las reglas de validación habilitadas.",
        },
        {
          id: "ErrorFenextjs",
          type: "ErrorFenextjs",
          description: "Si alguna regla de validación falla, retorna el error que indica qué regla de validación falló.",
        }
      ],
      useExample: [
        {
          text: "Validación de datos con las reglas habilitadas",
          content: `const validator = FenextjsValidator();
const data = { name: 'Juan', age: 30 };
const result = validator.onValidate(data)
if (result === true) {
    console.log('Datos válidos');
} else {
    console.log('Error de validación:', result);
}`
        }
      ]
    },
    //-------------------------------
    {
      id: "getObjectValidator",
      name: "getObjectValidator",
      description: "Método para obtener la validación 'isObject'. Devuelve el objeto con las reglas de validación definidas para las propiedades del objeto.",
      useImport: false,
      props: [],
      returns: [
        {
          id: "objectValue",
          type: "{ [id in keyof T]?: FenextjsValidatorClass } | undefined",
          description: "Devuelve el objeto con las reglas de validación para cada propiedad si 'isObject' está habilitado, o undefined si no lo está.",
        }
      ],
      useExample: [
        {
          text: "Obtener las reglas de validación del objeto",
          content: `const validator = FenextjsValidator();
const objectValidator = validator.getObjectValidator();
console.log(objectValidator);`
        }
      ]
    },
    {
      id: "getArrayValue",
      name: "getArrayValue",
      description: "Método público para obtener el valor de validación de array. Devuelve las reglas de validación definidas para los elementos del array.",
      useImport: false,
      props: [],
      returns: [
        {
          id: "arrayValue",
          type: "FenextjsValidatorClassIsWhenProps | undefined",
          description: "Devuelve el valor de validación del array si está habilitada, o undefined si no lo está.",
        }
      ],
      useExample: [
        {
          text: "Obtener el valor de validación de array",
          content: `const validator = FenextjsValidator();
const arrayValidator = validator.getArrayValue();
console.log(arrayValidator);`
        }
      ]
    },
    {
      id: "getWhenValue",
      name: "getWhenValue",
      useImport:false,
      description: "Método público para obtener el valor de validación de 'when'. Devuelve las condiciones definidas para la validación 'isWhen'.",
      returns: [
        {
          id: "this.whenValue",
          type: "FenextjsValidatorClassIsWhenProps[] | undefined",
          description: "Devuelve el valor de 'when' como un array de objetos de tipo 'FenextjsValidatorClassIsWhenProps', o 'undefined' si no se ha definido.",
        }
      ],
      useExample: [
        {
          text: "Obtener valor de validación 'when'",
          content: `const whenValue = validator.getWhenValue();`
        }
      ]
    }

  ]
};
