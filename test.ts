// // Importar la función FenextjsValidator desde el archivo actual ("." representa el archivo actual)
import { ErrorFenextjs } from "fenextjs-error/cjs/Fenextjs";
import { FenextjsValidator } from "./src";

// // Ejemplo: Crear un validador y establecer la regla "isRequired"
// const ValidateIsRequired = FenextjsValidator()
//     .setName("ValidateIsRequired") // Establecer un nombre para esta instancia de validador (opcional)
//     .isRequired() // Establecer la regla "isRequired", que verifica si el valor es requerido (no puede estar vacío o ser nulo).
//     .onValidate(""); // Realizar la validación con el valor "" (cadena vacía)

// console.log(ValidateIsRequired);
// // En este caso, el resultado de la validación será un objeto de tipo ErrorInputRequired.
// // El mensaje de este objeto puede ser algo como "Input Required [ValidateIsRequired]".
// // Esto indica que el valor proporcionado para la validación está vacío, lo que no cumple con la regla de "isRequired".

// // Nota: Si el valor proporcionado en "onValidate()" hubiera sido diferente de una cadena vacía,
// // la validación habría sido exitosa, y el resultado habría sido "true" (indicando que el valor es válido).

// // Ejemplo: Crear un validador y establecer la regla "isBoolean"
// const ValidateIsBoolean = FenextjsValidator()
//     .setName("ValidateIsBoolean") // Establecer un nombre para esta instancia de validador (opcional)
//     .isBoolean() // Establecer la regla "isBoolean", que verifica si el valor es un booleano.
//     .onValidate("false"); // Realizar la validación con el valor "false" (cadena)

// console.log(ValidateIsBoolean);
// // En este caso, el resultado de la validación será un objeto de tipo ErrorInputInvalid.
// // El mensaje de este objeto puede ser algo como "Invalid Input [ValidateIsBoolean]".
// // Esto indica que el valor proporcionado para la validación ("false" en este caso) no es un booleano válido.

// // Nota: Si el valor proporcionado en "onValidate()" hubiera sido "true" (valor booleano válido),
// // la validación habría sido exitosa, y el resultado habría sido "true" (indicando que el valor es válido).

// // Ejemplo: Crear un validador y establecer la regla "isEqual"
// const ValidateIsEqual = FenextjsValidator()
//     .setName("ValidateIsEqual") // Establecer un nombre para esta instancia de validador (opcional)
//     .isEqual("aaaa") // Establecer la regla "isEqual", que verifica si el valor es igual al valor "aaaa".
//     .onValidate("bbbb"); // Realizar la validación con el valor "bbbb" (cadena)

// console.log(ValidateIsEqual);

// const ValidateIsEqualMultiple = FenextjsValidator()
//     .setName("ValidateIsEqual") // Establecer un nombre para esta instancia de validador (opcional)
//     .isEqual(["aaaa", "bbbb"]) // Establecer la regla "isEqual", que verifica si el valor es igual al valor "aaaa".
//     .onValidate("bbbb"); // Realizar la validación con el valor "bbbb" (cadena)

// console.log("ValidateIsEqualMultiple", ValidateIsEqualMultiple);
// // En este caso, el resultado de la validación será un objeto de tipo ErrorInputNotEqual.
// // El mensaje de este objeto puede ser algo como "Not Equal Input [ValidateIsEqual]".
// // Esto indica que el valor proporcionado para la validación ("bbbb" en este caso) no es igual al valor esperado "aaaa".

// // Nota: Si el valor proporcionado en "onValidate()" hubiera sido "aaaa" (valor igual al valor esperado),
// // la validación habría sido exitosa, y el resultado habría sido "true" (indicando que el valor es válido).

// // Ejemplo: Crear un validador y establecer la regla "isNumber"
// const ValidateIsNumber = FenextjsValidator()
//     .setName("ValidateIsNumber") // Establecer un nombre para esta instancia de validador (opcional)
//     .isNumber() // Establecer la regla "isNumber", que verifica si el valor es un número.
//     .onValidate("not Number"); // Realizar la validación con el valor "not Number" (cadena)

// console.log(ValidateIsNumber);
// // En este caso, el resultado de la validación será un objeto de tipo ErrorInputInvalid.
// // El mensaje de este objeto puede ser algo como "Invalid Input [FenextjsValidator]".
// // Esto indica que el valor proporcionado para la validación ("not Number" en este caso) no es un número válido.

// // Nota: Si el valor proporcionado en "onValidate()" hubiera sido un número, la validación habría sido exitosa,
// // y el resultado habría sido "true" (indicando que el valor es válido).

// // Ejemplo: Crear un validador y establecer la regla "isString"
// const ValidateIsString = FenextjsValidator()
//     .setName("ValidateIsString") // Establecer un nombre para esta instancia de validador (opcional)
//     .isString() // Establecer la regla "isString", que verifica si el valor es una cadena de texto.
//     .onValidate({}); // Realizar la validación con el valor {} (objeto)

// console.log(ValidateIsString);
// // En este caso, el resultado de la validación será un objeto de tipo ErrorInputInvalid.
// // El mensaje de este objeto puede ser algo como "Invalid Input [FenextjsValidator]".
// // Esto indica que el valor proporcionado para la validación ({}, un objeto) no es una cadena de texto válida.

// // Nota: Si el valor proporcionado en "onValidate()" hubiera sido una cadena de texto, la validación habría sido exitosa,
// // y el resultado habría sido "true" (indicando que el valor es válido).

// // Ejemplo: Crear un validador y establecer la regla "isObject" con una regla de validación para la propiedad "key1"
// const ValidateIsObject = FenextjsValidator()
//     .setName("ValidateIsString") // Establecer un nombre para esta instancia de validador (opcional)
//     .isObject({})
//     .onValidate({
//         key1: "not Equal", // Realizar la validación con el objeto { key1: "not Equal" }

//         // Nota: Si el valor de la propiedad "key1" hubiera sido "aa" (una cadena de texto igual a "aa"),
//         // la validación habría sido exitosa, y el resultado habría sido "true" (indicando que el valor es válido).
//     });

// console.log(ValidateIsObject);
// // En este caso, el resultado de la validación será un objeto de tipo ErrorInputNotEqual.
// // El mensaje de este objeto puede ser algo como "Not Equal Input [ValidateIsString.key1]".
// // Esto indica que el valor proporcionado para la validación de la propiedad "key1" ("not Equal" en este caso)
// // no es igual al valor esperado "aa" definido en la regla "isEqual".

// // Además, el mensaje también incluye el nombre del validador asociado ("ValidateIsString.key1")
// // para indicar que la propiedad "key1" del objeto no cumple con la regla de validación "isString" e "isEqual".

// // Ejemplo: Crear un validador y establecer la regla "isArray" con una regla de validación para los elementos del array
// const ValidateIsArray = FenextjsValidator()
//     .setName("ValidateIsArray") // Establecer un nombre para esta instancia de validador (opcional)
//     .isArray
//     // Establecer la regla "isArray", que verifica si el valor es un array.
//     // FenextjsValidator().isString().isEqual("aa"), // Establecer la regla "isString" y "isEqual" para los elementos del array
//     ()
//     .onValidate(["aa", "not equal"]); // Realizar la validación con el array ["aa", "not equal"]

// console.log(ValidateIsArray);
// // En este caso, el resultado de la validación será un objeto de tipo ErrorInputNotEqual.
// // El mensaje de este objeto puede ser algo como "Not Equal Input [ValidateIsArray.1]".
// // Esto indica que el valor proporcionado para la validación del segundo elemento del array ("not equal" en este caso)
// // no es igual al valor esperado "aa" definido en la regla "isEqual".

// // Además, el mensaje también incluye el nombre del validador asociado ("ValidateIsArray.1")
// // para indicar que el segundo elemento del array no cumple con la regla de validación "isString" e "isEqual".

// // Ejemplo: Crear un validador y establecer las reglas "isString" y "isMin" (longitud mínima 3 caracteres)
// const ValidateIsMin = FenextjsValidator()
//     .setName("ValidateIsMin") // Establecer un nombre para esta instancia de validador (opcional)
//     .isString() // Establecer la regla "isString", que verifica si el valor es una cadena de texto.
//     .isMin(3) // Establecer la regla "isMin", que verifica si la longitud de la cadena es mayor o igual a 3 caracteres.
//     .onValidate("NO"); // Realizar la validación con la cadena "NO"

// console.log(ValidateIsMin);
// // En este caso, el resultado de la validación será un objeto de tipo ErrorInputInvalid.
// // El mensaje de este objeto puede ser algo como "Invalid Input [ValidateIsMin]".
// // Esto indica que el valor proporcionado para la validación ("NO" en este caso) no cumple con la regla de longitud mínima.

// // Nota: Si el valor proporcionado en "onValidate()" hubiera sido una cadena con al menos 3 caracteres (por ejemplo, "YES"),
// // la validación habría sido exitosa, y el resultado habría sido "true" (indicando que el valor es válido).

// // Ejemplo: Crear un validador y establecer las reglas "isString" y "isMinOrEqual" (longitud mínima 3 caracteres o igual)
// const ValidateIsMinOrEqual = FenextjsValidator()
//     .setName("ValidateIsMinOrEqual") // Establecer un nombre para esta instancia de validador (opcional)
//     .isString() // Establecer la regla "isString", que verifica si el valor es una cadena de texto.
//     .isMinOrEqual(3) // Establecer la regla "isMinOrEqual", que verifica si la longitud de la cadena es mayor o igual a 3 caracteres.
//     .onValidate("aaa"); // Realizar la validación con la cadena "aaa"

// console.log(ValidateIsMinOrEqual);
// // En este caso, el resultado de la validación será "true".
// // Esto indica que el valor proporcionado para la validación ("aaa" en este caso) cumple con la regla de longitud mínima (3 caracteres).

// // Nota: Si el valor proporcionado en "onValidate()" hubiera sido una cadena con menos de 3 caracteres (por ejemplo, "aa"),
// // la validación habría sido exitosa, y el resultado también habría sido "true" (indicando que el valor es válido).

// // Ejemplo: Crear un validador y establecer las reglas "isNumber" e "isMax" (valor máximo 3)
// const ValidateIsMax = FenextjsValidator()
//     .setName("ValidateIsMax") // Establecer un nombre para esta instancia de validador (opcional)
//     .isNumber() // Establecer la regla "isNumber", que verifica si el valor es un número.
//     .isMax(3) // Establecer la regla "isMax", que verifica si el valor numérico es menor o igual a 3.
//     .onValidate(20); // Realizar la validación con el valor numérico 20

// console.log(ValidateIsMax);
// // En este caso, el resultado de la validación será un objeto de tipo ErrorInputValueTooHigh.
// // El mensaje de este objeto puede ser algo como "Value Too High [ValidateIsMax]".
// // Esto indica que el valor proporcionado para la validación (20 en este caso) es mayor que el valor máximo permitido (3).

// // Nota: Si el valor proporcionado en "onValidate()" hubiera sido un número menor o igual a 3 (por ejemplo, 2),
// // la validación habría sido exitosa, y el resultado habría sido "true" (indicando que el valor es válido).

// // Ejemplo: Crear un validador y establecer las reglas "isString" e "isMaxOrEqual" (longitud máxima 3 caracteres o igual)
// const ValidateIsMaxOrEqual = FenextjsValidator()
//     .setName("ValidateIsMaxOrEqual") // Establecer un nombre para esta instancia de validador (opcional)
//     .isString() // Establecer la regla "isString", que verifica si el valor es una cadena de texto.
//     .isMaxOrEqual(3) // Establecer la regla "isMaxOrEqual", que verifica si la longitud de la cadena es menor o igual a 3 caracteres.
//     .onValidate("aaa"); // Realizar la validación con la cadena "aaa"

// console.log(ValidateIsMaxOrEqual);
// // En este caso, el resultado de la validación será "true".
// // Esto indica que el valor proporcionado para la validación ("aaa" en este caso) cumple con la regla de longitud máxima o es igual a 3 caracteres.

// // Nota: Si el valor proporcionado en "onValidate()" hubiera sido una cadena con más de 3 caracteres (por ejemplo, "aaaa"),
// // la validación habría sido exitosa, y el resultado también habría sido "true" (indicando que el valor es válido).

// // Ejemplo: Crear un validador y establecer las reglas "isDate" e "isMax" (fecha máxima: 100)
// const ValidateIsDate = FenextjsValidator()
//     .setName("ValidateIsDate") // Establecer un nombre para esta instancia de validador (opcional)
//     .isDate() // Establecer la regla "isDate", que verifica si el valor es una fecha válida.
//     .isMax(new Date(100)) // Establecer la regla "isMax", que verifica si la fecha es anterior o igual a la fecha máxima (100).
//     .onValidate(new Date(10)); // Realizar la validación con la fecha new Date(10)

// console.log(ValidateIsDate);
// // En este caso, el resultado de la validación será un objeto de tipo ErrorInputValueTooHigh.
// // El mensaje de este objeto puede ser algo como "Value Too High [ValidateIsDate]".
// // Esto indica que la fecha proporcionada para la validación (new Date(10) en este caso) es posterior a la fecha máxima permitida (new Date(100)).

// // Nota: Si la fecha proporcionada en "onValidate()" hubiera sido una fecha anterior o igual a new Date(100),
// // la validación habría sido exitosa, y el resultado habría sido "true" (indicando que el valor es válido).

// // Ejemplo: Crear un validador y establecer la regla "isLength" (longitud debe ser 4 caracteres)
// const ValidateIsLength = FenextjsValidator()
//     .setName("ValidateIsLength") // Establecer un nombre para esta instancia de validador (opcional)
//     .isLength(4) // Establecer la regla "isLength", que verifica si la longitud de la cadena es igual a 4 caracteres.
//     .onValidate("tesing"); // Realizar la validación con la cadena "tesing"

// console.log("ValidateIsLength", ValidateIsLength);
// // En este caso, el resultado de la validación será un objeto de tipo ErrorInputInvalid.
// // El mensaje de este objeto puede ser algo como "Invalid Input [ValidateIsLength]".
// // Esto indica que la cadena proporcionada para la validación ("tesing" en este caso) no cumple con la regla de longitud (4 caracteres).

// // Nota: Si la cadena proporcionada en "onValidate()" hubiera sido una cadena de 4 caracteres (por ejemplo, "test"),
// // la validación habría sido exitosa, y el resultado habría sido "true" (indicando que el valor es válido).

// // Definir la interfaz que describe la estructura de datos para la validación
// interface ValidateIsCompareRefInteface {
//     keyA: string;
//     keyB: string;
// }

// // Ejemplo: Crear un validador y establecer la regla "isObject" con dos reglas de validación para las propiedades "keyA" y "keyB"
// const ValidateIsCompareRef = FenextjsValidator<ValidateIsCompareRefInteface>()
//     .setName("ValidateIsCompareRef") // Establecer un nombre para esta instancia de validador (opcional)
//     .isObject({
//         keyA: FenextjsValidator()
//             .setName("ValidateIsCompareRef.keyA") // Establecer un nombre para esta instancia de validador (opcional)
//             .isString() // Establecer la regla "isString", que verifica si el valor es una cadena de texto.
//             .isCompareRef("keyB"), // Establecer la regla "isCompareRef", que compara el valor de "keyA" con el valor de "keyB".
//         keyB: FenextjsValidator()
//             .setName("ValidateIsCompareRef.keyB") // Establecer un nombre para esta instancia de validador (opcional)
//             .isString(), // Establecer la regla "isString", que verifica si el valor es una cadena de texto.
//     })
//     .onValidate({
//         keyA: "aaa",
//         keyB: "bbb",
//     }); // Realizar la validación con el objeto { keyA: "aaa", keyB: "bbb" }

// console.log(ValidateIsCompareRef);
// // En este caso, el resultado de la validación será un objeto de tipo ErrorInputInvalid.
// // Esto indica que el objeto proporcionado para la validación no cumple con todas las reglas definidas en la estructura de datos ValidateIsCompareRefInteface.

// // Nota: Si el valor proporcionado en "onValidate()" hubiera sido un objeto con valores "keyA" == "keyB",
// // la validación no habría sido fallida, y el resultado habría sido "true"
// // que indica que los valores de "keyA" y "keyB" son iguales.

// // Definir la interfaz que describe la estructura de datos para la validación
// interface ValidateWhenInterface {
//     a: number;
//     b: string;
// }
// // Ejemplo: Crear un validador usando when
// const ValidateWhen = FenextjsValidator<ValidateWhenInterface>()
//     .setName("ValidateWhen")
//     .isObject({
//         a: FenextjsValidator()
//             .setName("ValidateWhen.a")
//             .isWhen({
//                 key: "b",
//                 is: FenextjsValidator().isEqual("bbb"),
//                 then: FenextjsValidator().setName("ValidateWhen.a").isMin(201),
//             }),
//         b: FenextjsValidator().setName("ValidateWhen.b"),
//     })
//     .onValidate({
//         a: 200,
//         b: "bbb",
//     });

// console.log(ValidateWhen);

// // En este caso, el resultado de la validación será un objeto de tipo ErrorInputInvalid.
// // Esto indica que el objeto proporcionado para la validación no cumple con todas las reglas definidas en la estructura de datos ValidateWhen.

// // Nota: Si el valor proporcionado en "onValidate()" hubiera sido un objeto con a > 201 y b !="bbb",
// // la validación no habría sido fallida, y el resultado habría sido "true"
// // que indica que los valores de a se validan xq b = "bbb" y la validacion de a falla

// const ValidateEmail = FenextjsValidator<string>()
//     .setName("ValidateEmail")
//     .isEmail()
//     .onValidate("assadasdasd@as");

// console.log(ValidateEmail);

// interface ValidateWhenMSGInterface {
//     a: number;
// }
// // Ejemplo: Crear un validador usando when
// const ValidateWhenMSG = FenextjsValidator<ValidateWhenMSGInterface>()
//     .setName("ValidateWhenMSG")
//     .isObject({
//         a: FenextjsValidator().isNumber("Custom msg error"),
//     })
//     .onValidate({
//         a: "200",
//     } as any);

// console.log(ValidateWhenMSG);

// const ValidateWhenMultipme = FenextjsValidator()
//     .setName("ValidateWhenMSG")
//     .isObject({
//         a: FenextjsValidator().isNumber("Custom msg error"),
//         b:FenextjsValidator()
//         .isWhen({
//             key:"a",
//             is:FenextjsValidator().isEqual(1),
//             then:FenextjsValidator().isEqual(1),
//             otherwise:FenextjsValidator().isWhen({
//                 key:"a",
//                 is:FenextjsValidator().isEqual(3),
//                 then:FenextjsValidator().isEqual(3)
//             })
//         })
//         .isWhen({
//             key:"a",
//             is:FenextjsValidator().isEqual(2),
//             then:FenextjsValidator().isEqual(2)
//         })
//     })
//     .onValidate({
//         a: 3,
//         b: 4
//     } as any);

// console.log(ValidateWhenMultipme);

// const VCustom = FenextjsValidator<{ a: number; b: number }>()
//     .setName("Custom")
//     .isCustom((d) => {
//         if (d.a != 3 || d.b != 4) {
//             return new ErrorFenextjs({
//                 message:"Custom Message"
//             });
//         }
//         return true;
//     })
//     .onValidate({
//         a: 3,
//         b: 5,
//     });

// console.log(VCustom);



const VCustom = FenextjsValidator<{ a: number; b: number }>()
    .setName("Custom")
    .isObject({
        a:FenextjsValidator().isNumber().isMin(0)
    })
    .isWhen({
        key: 'a',
        is: FenextjsValidator().isEqual(3),
        then: FenextjsValidator().isObject({
            b:FenextjsValidator().isNumber().isMax(10)
        }),
        dataIsCurrent:true
    })
    .onValidate({
        a: 3,
        b: 15,
    });

console.log(VCustom);
