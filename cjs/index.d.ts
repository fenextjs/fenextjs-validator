import { ErrorFenextjs } from "fenextjs-error/cjs/Fenextjs";
import { ErrorCode } from "fenextjs-interface";
export interface FenextjsValidatorClassIsWhenProps {
    key: string;
    is: FenextjsValidatorClass;
    then: FenextjsValidatorClass;
    otherwise?: FenextjsValidatorClass;
    dataIsCurrent?: boolean;
}
/**
 * Interfaz que define las propiedades del constructor de la clase FenextjsValidatorClass.
 */
export interface FenextjsValidatorClassConstructorProps {
    /**
     * Nombre asociado a la instancia de FenextjsValidatorClass.
     * @type {string | undefined}
     */
    name?: string;
}
/**
 * Clase que proporciona validación de datos en TypeScript/JavaScript.
 * @template T - Tipo de los datos a validar.
 */
export declare class FenextjsValidatorClass<T = any> {
    /** Propiedad privada que almacena name del validador. */
    private name?;
    /** Propiedad privada que almacena la clase superior. */
    private parent?;
    /** Propiedad privada que almacena los datos a validar. */
    private data;
    /** Bandera que indica si se debe aplicar la validación "isEqual". */
    private equal;
    /** Valor con el que se compararán los datos en la validación "isEqual". */
    private equalValue;
    /** Bandera que indica si se debe aplicar la validación "isRequired". */
    private required;
    /** Bandera que indica si los datos deben ser un booleano en la validación "isBoolean". */
    private boolean;
    /** Bandera que indica si los datos deben ser un número en la validación "isNumber". */
    private number;
    /** Bandera que indica si los datos deben ser un email en la validación "onEmail". */
    private email;
    /** Bandera que indica si los datos deben ser una cadena en la validación "isString". */
    private string;
    /** Bandera que indica si los datos deben ser una cadena en la validación "isLength". */
    private length;
    /** Valor que contiene las reglas de validación para cada propiedad del objeto en la validación "isLength". */
    private lengthValue;
    /** Bandera que indica si los datos deben ser una cadena en la validación "isCompareRef". */
    private compareRef;
    /** Valor que contiene key para cada propiedad del objeto en la validación "isCompareRef". */
    private compareRefKey;
    /** Valor que contiene las reglas de validación para cada propiedad del objeto en la validación "isCompareRef". */
    private compareRefValue;
    /** Bandera que indica si los datos deben ser una fecha en la validación "isDate". */
    private date;
    /** Bandera que indica si los datos deben ser un objeto en la validación "isObject". */
    private object;
    /** Valor que contiene las reglas de validación para cada propiedad del objeto en la validación "isObject". */
    private objectValue;
    /** Bandera que indica si los datos deben ser una cadena en la validación "isWhen". */
    private when;
    /** Value que contiene la validacion de "isWhen" */
    private whenValue;
    /** Bandera que indica si los datos deben ser un array en la validación "isArray". */
    private array;
    /** Valor que contiene las reglas de validación para cada elemento del array en la validación "isArray". */
    private arrayValue;
    /** Bandera que indica si los datos deben ser mayor que un valor específico en la validación "isMin". */
    private min;
    /** Bandera que indica si los datos deben ser mayor o igual que un valor específico en la validación "isMinOrEqual". */
    private minOrEqual;
    /** Valor con el que se compararán los datos en las validaciones "isMin" y "isMinOrEqual". */
    private minValue;
    /** Bandera que indica si los datos deben ser menor que un valor específico en la validación "isMax". */
    private max;
    /** Bandera que indica si los datos deben ser menor o igual que un valor específico en la validación "isMaxOrEqual". */
    private maxOrEqual;
    /** Valor con el que se compararán los datos en las validaciones "isMax" y "isMaxOrEqual". */
    private maxValue;
    /** Bandera que indica si los datos deben ser una cadena que cumpla la regla regex. */
    private regex;
    /** Valor que contiene las reglas de validación para cada propiedad del objeto en la validación "isRegex". */
    private regexValue;
    /** Bandera que indica si los datos deben ser una cadena que cumpla la regla regex. */
    private custom;
    /** Valor que contiene las reglas de validación para cada propiedad del objeto en la validación "isRegex". */
    private customValue;
    /** Bandera que indica si los datos deben ser una cadena en la validación "isWhen". */
    private or;
    /** Value que contiene la validacion de "isWhen" */
    private orValue;
    private enum;
    /** Valor que contiene las reglas de validación para cada propiedad del objeto en la validación "isEnum". */
    private enumValue;
    /** Mensaje personalizado para error */
    private messageError;
    /**
     * Constructor de la clase FenextjsValidatorClass.
     * @param {FenextjsValidatorClassConstructorProps} props - Opcional. Propiedades que se pueden pasar al constructor.
     *                                                       Un objeto que contiene las propiedades del constructor.
     *                                                       Por ejemplo, puede contener la propiedad "name".
     * @returns {void}
     */
    constructor(props?: FenextjsValidatorClassConstructorProps);
    /**
     * Método para establecer el nombre asociado a la instancia de FenextjsValidatorClass.
     * @param {string} name - El nombre a establecer para la instancia actual de FenextjsValidatorClass.
     * @returns {FenextjsValidatorClass} - La instancia actual de la clase FenextjsValidatorClass, lo que permite el encadenamiento de métodos.
     */
    setName(name: string): this;
    /**
     * Método privado para obtener el nombre completo de la instancia actual de FenextjsValidatorClass.
     * Si esta instancia tiene un padre, obtiene el nombre completo que incluye el nombre de su padre.
     * Si no tiene un padre, devuelve solo el nombre asociado a esta instancia.
     *
     * @returns {string} - El nombre completo de la instancia actual de FenextjsValidatorClass.
     */
    getName(): any;
    /**
     * Método public para obtener el valor de data.
     * @returns {T | undefined}
     * @public
     */
    getData(): T | undefined;
    /**
     * Método para establecer el padre de la instancia actual de FenextjsValidatorClass.
     * El padre es otra instancia de FenextjsValidatorClass que se utiliza como contexto superior.
     *
     * @param {FenextjsValidatorClass} parent - La instancia de FenextjsValidatorClass que se establecerá como padre.
     * @returns {FenextjsValidatorClass} - La instancia actual de la clase FenextjsValidatorClass, lo que permite el encadenamiento de métodos.
     */
    setParent(parent: FenextjsValidatorClass): this;
    /**
     * Método para definir la validación "isEqual".
     * Establece la regla de que los datos deben ser iguales al valor especificado.
     * @param d - Valor a comparar con los datos.
     * @returns Instancia de FenextjsValidatorClass.
     */
    isEqual(d: T[] | T, msg?: string): this;
    /**
     * Método privado que valida la regla "isEqual".
     * Verifica si los datos son iguales al valor especificado en la regla de validación "isEqual".
     * @throws {ErrorInputInvalid} Si los datos no son iguales al valor especificado.
     * @returns Instancia de FenextjsValidatorClass.
     * @private
     */
    onEqual(): this | undefined;
    /**
     * Método para habilitar la validación "isRequired".
     * Establece la regla de que los datos deben estar presentes y no ser nulos o indefinidos.
     * @returns Instancia de FenextjsValidatorClass.
     */
    isRequired(msg?: string): this;
    /**
     * Método privado que valida la regla "isRequired".
     * Verifica si los datos cumplen con la regla de ser requeridos (estar presentes y no ser nulos o indefinidos).
     * @throws {ErrorInputRequired} Si los datos son nulos, indefinidos o una cadena vacía.
     * @private
     */
    onRequired(): void;
    /**
     * Método para habilitar la validación "isBoolean".
     * Establece la regla de que los datos deben ser de tipo booleano.
     * @returns Instancia de FenextjsValidatorClass.
     */
    isBoolean(msg?: string): this;
    /**
     * Método privado que valida la regla "isBoolean".
     * Verifica si los datos cumplen con la regla de ser de tipo booleano.
     * @throws {ErrorInputInvalid} Si los datos no son de tipo booleano.
     * @private
     */
    onBoolean(): void;
    /**
     * Método para habilitar la validación "isNumber".
     * Establece la regla de que los datos deben ser de tipo número.
     * @returns Instancia de FenextjsValidatorClass.
     */
    isNumber(msg?: string): this;
    /**
     * Método privado que valida la regla "isNumber".
     * Verifica si los datos cumplen con la regla de ser de tipo número.
     * @throws {ErrorInputInvalid} Si los datos no son de tipo número.
     * @private
     */
    onNumber(): void;
    /**
     * Método para habilitar la validación "isString".
     * Establece la regla de que los datos deben ser de tipo cadena (string).
     * @returns Instancia de FenextjsValidatorClass.
     */
    isString(msg?: string): this;
    /**
     * Método privado que valida la regla "isString".
     * Verifica si los datos cumplen con la regla de ser de tipo cadena (string).
     * @throws {ErrorInputInvalid} Si los datos no son de tipo cadena (string).
     * @private
     */
    onString(): void;
    /**
     * Método para habilitar la validación de longitud.
     * Establece la regla de que los datos deben tener una longitud específica.
     *
     * @param {number} length - La longitud que deben tener los datos para que la validación sea válida.
     * @returns {FenextjsValidatorClass} - La instancia actual de la clase FenextjsValidatorClass, lo que permite el encadenamiento de métodos.
     */
    isLength(length: number, msg?: string): this;
    /**
     * Método privado para validar la longitud de los datos.
     * Si se habilitó la validación de longitud con "isLength()", verifica que los datos cumplan con la longitud requerida.
     * Si no se cumple, lanza una excepción "ErrorInputInvalid" con el código "ErrorCode.INPUT_INVALID".
     *
     * @returns {void}
     * @throws {ErrorInputInvalid} - Si los datos no cumplen con la longitud requerida.
     */
    onLength(): void;
    /**
     * Método para habilitar la validación "isDate".
     * Establece la regla de que los datos deben ser de tipo Date (fecha).
     * @returns Instancia de FenextjsValidatorClass.
     */
    isDate(msg?: string): this;
    /**
     * Método privado que valida la regla "isDate".
     * Verifica si los datos cumplen con la regla de ser de tipo Date (fecha).
     * @throws {ErrorInputInvalid} Si los datos no son de tipo Date (fecha).
     * @private
     */
    onDate(): void;
    /**
     * Método para habilitar la validación "isObject".
     * Establece la regla de que los datos deben ser de tipo objeto.
     * @param obj - Objeto con las reglas de validación para cada propiedad del objeto.
     * @returns Instancia de FenextjsValidatorClass.
     */
    isObject(obj: {
        [id in keyof T]?: FenextjsValidatorClass;
    } | undefined, msg?: string): this;
    /**
     * Método para habilitar obtener la validación "isObject".
     * @returns objectValue
     */
    getObjectValidator(): {
        [id in keyof T]?: FenextjsValidatorClass;
    } | undefined;
    /**
     * Método privado que valida la regla "isObject".
     * Verifica si los datos cumplen con la regla de ser de tipo objeto y aplica las reglas de validación para cada propiedad del objeto.
     * @throws {ErrorInputInvalid} Si los datos no son de tipo objeto o alguna propiedad no cumple con las reglas de validación.
     * @private
     */
    onObject(): void;
    /**
     * Método para habilitar la validación "isArray".
     * Establece la regla de que los datos deben ser un array.
     * @param item - Instancia de FenextjsValidatorClass que define las reglas de validación para cada elemento del array.
     * @returns Instancia de FenextjsValidatorClass.
     */
    isArray(item?: FenextjsValidatorClass | undefined, msg?: string): this;
    /**
     * Método privado que valida la regla "isArray".
     * Verifica si los datos cumplen con la regla de ser un array y aplica las reglas de validación para cada elemento del array.
     * @throws {ErrorInputInvalid} Si los datos no son un array o alguno de los elementos no cumple con las reglas de validación.
     * @private
     */
    onArray(): void;
    /**
     * Método public para obtener el valor de validacion de array.
     * @returns {FenextjsValidatorClassIsWhenProps | undefined}
     * @public
     */
    getArrayValue(): FenextjsValidatorClass<any> | undefined;
    /**
     * Método para habilitar la validación "isMin".
     * Establece la regla de que los datos deben ser mayores que un valor específico.
     * @param min - Valor mínimo que los datos deben superar.
     * @returns Instancia de FenextjsValidatorClass.
     */
    isMin(min: number | Date, msg?: string): this;
    /**
     * Método para habilitar la validación "isMinOrEqual".
     * Establece la regla de que los datos deben ser mayores o iguales que un valor específico.
     * @param min - Valor mínimo que los datos deben superar o igualar.
     * @returns Instancia de FenextjsValidatorClass.
     */
    isMinOrEqual(min: number | Date, msg?: string): this;
    /**
     * Método privado que valida las reglas "isMin" y "isMinOrEqual".
     * Verifica si los datos cumplen con las reglas de ser mayores que un valor mínimo o mayores/iguales al valor mínimo.
     * @throws {ErrorInputInvalid} Si los datos no cumplen con las reglas de validación.
     * @private
     */
    onMin(): void;
    /**
     * Método para habilitar la validación "isMax".
     * Establece la regla de que los datos deben ser menores que un valor específico.
     * @param max - Valor máximo que los datos deben ser menores que él.
     * @returns Instancia de FenextjsValidatorClass.
     */
    isMax(max: number | Date, msg?: string): this;
    /**
     * Método para habilitar la validación "isMaxOrEqual".
     * Establece la regla de que los datos deben ser menores o iguales que un valor específico.
     * @param max - Valor máximo que los datos deben ser menores o igual que él.
     * @returns Instancia de FenextjsValidatorClass.
     */
    isMaxOrEqual(max: number | Date, msg?: string): this;
    /**
     * Método privado que valida las reglas "isMax" y "isMaxOrEqual".
     * Verifica si los datos cumplen con las reglas de ser menores que un valor máximo o menores/iguales al valor máximo.
     * @throws {ErrorInputInvalid} Si los datos no cumplen con las reglas de validación.
     * @private
     */
    onMax(): void;
    /**
     * Método para habilitar la comparación de valores de referencia.
     * Establece la regla de que los datos deben ser iguales a otro valor de referencia almacenado en la instancia.
     *
     * @param {string} refKey - La clave que identifica el valor de referencia almacenado en la instancia para la comparación.
     * @returns {FenextjsValidatorClass} - La instancia actual de la clase FenextjsValidatorClass, lo que permite el encadenamiento de métodos.
     */
    isCompareRef(refKey: string, msg?: string): this;
    /**
     * Método para obtener la comparación de valores de referencia.
     *
     * @returns {any} - compareRefKey.
     */
    getCompareRef(): any;
    /**
     * Método privado para establecer el valor de referencia para la comparación.
     * Se utiliza junto con "isCompareRef()" para definir el valor de referencia que se utilizará en la comparación de datos.
     *
     * @param {any} refValue - El valor de referencia que se utilizará en la comparación de datos.
     * @returns {FenextjsValidatorClass} - La instancia actual de la clase FenextjsValidatorClass, lo que permite el encadenamiento de métodos.
     */
    setCompareRef(refValue: any): this;
    /**
     * Método privado para realizar la comparación de valores de referencia.
     * Si se habilitó la comparación de valores de referencia con "isCompareRef()",
     * verifica que los datos sean iguales al valor de referencia establecido con "setCompareRef()".
     * Si no se cumple, lanza una excepción "ErrorInputInvalid" con el código "ErrorCode.INPUT_INVALID".
     *
     * @returns {void}
     * @throws {ErrorInputInvalid} - Si los datos no son iguales al valor de referencia.
     */
    onCompareRef(): void;
    /**
     * Método privado para manejar errores en la validación.
     *
     * @param {ErrorCode} code - Opcional. El código de error que indica el tipo de error ocurrido.
     * @returns {void}
     * @throws {ErrorFenextjs} - Una excepción específica basada en el código de error proporcionado o una excepción general "ErrorFenextjs".
     */
    onError(code?: ErrorCode, message?: string): void;
    /**
     * Método para habilitar la validación "isWhen".
     * Establece la regla de que los comparacion cuando sea correcto la validacion.
     * @returns Instancia de FenextjsValidatorClass.
     */
    isWhen(data: FenextjsValidatorClassIsWhenProps): this;
    /**
     * Método privado que valida la regla "onWhen".
     * Verifica si los datos cumplen con whenIs y when Key para adicionar la la validacion whenThen.
     * @throws {ErrorInputInvalid} Si los datos no son de tipo Date (fecha).
     * @private
     */
    onWhen(): void;
    /**
     * Método public para obtener el valor de validacion de when.
     * @returns {FenextjsValidatorClassIsWhenProps[] | undefined}
     * @public
     */
    getWhenValue(): FenextjsValidatorClassIsWhenProps[] | undefined;
    /**
     * Método para habilitar la validación "isRegex".
     * Establece la regla de que los comparacion cuando sea correcto la validacion.
     * @returns Instancia de FenextjsValidatorClass.
     */
    isRegex(data: RegExp, msg?: string): this;
    /**
     * Método privado que valida la regla "onRegex".
     * Verifica si los datos cumplen con la comparacion con regexValue.
     * @throws {ErrorInputInvalid} Si los datos no cumplen con la compracion.
     * @private
     */
    onRegex(): void;
    /**
     * Método para habilitar la validación "isEmail".
     * Establece la regla de que los comparacion cuando sea correcto la validacion.
     * @returns Instancia de FenextjsValidatorClass.
     */
    isEmail(msg?: string): this;
    /**
     * Método privado que valida la regla "onEmail".
     * Verifica si los datos cumplen con la comparacion con email.
     * @throws {ErrorInputInvalid} Si los datos no cumplen con la compracion.
     * @private
     */
    onEmail(): void;
    /**
     * Método para habilitar la validación "onCustom".
     * Establece la regla de que los comparacion cuando se cumpla una validacion custom.
     * @returns Instancia de FenextjsValidatorClass.
     */
    isCustom(data: (data: T, parent?: FenextjsValidatorClass) => true | ErrorFenextjs, msg?: string): this;
    /**
     * Método privado que valida la regla "onCustom".
     * Verifica si los datos cumplen con la comparacion custom.
     * @throws {ErrorInputInvalid} Si los datos no cumplen con la compracion.
     * @private
     */
    onCustom(): void;
    /**
     * Método para definir la validación "isOr".
     * Establece la regla de que los datos deben cumplir al menos una validacion.
     * @param d - Comparador para los datos.
     * @returns Instancia de FenextjsValidatorClass.
     */
    isOr(d: FenextjsValidatorClass[], msg?: string): this;
    /**
     * Método privado que valida la regla "isOr".
     * Verifica si los datos cumplen con almenos una validacion.
     * @throws {ErrorInputInvalid} Si los datos no son iguales al valor especificado.
     * @returns Instancia de FenextjsValidatorClass.
     * @private
     */
    onOr(): this | undefined;
    /**
     * Método para habilitar la validación "isEnum".
     * Establece la regla de que los comparacion cuando sea correcto la validacion.
     * @returns Instancia de FenextjsValidatorClass.
     */
    isEnum(data: object, msg?: string): this;
    /**
     * Método privado que valida la regla "onEnum".
     * Verifica si los datos cumplen con la comparacion con enumValue.
     * @throws {ErrorInputInvalid} Si los datos no cumplen con la compracion.
     * @private
     */
    onEnum(): void;
    /**
     * Método para validar los datos proporcionados según las reglas establecidas.
     * Ejecuta todas las reglas de validación habilitadas previamente para los datos.
     * @param d - Datos que se deben validar.
     * @returns True si los datos cumplen con todas las reglas de validación; de lo contrario, devuelve el error que indica la regla de validación que falló.
     */
    onValidate(d: T): ErrorFenextjs | true;
}
/**
 * Función para crear una instancia de la clase FenextjsValidatorClass y obtener un validador.
 *
 * @param {FenextjsValidatorClassConstructorProps} props - Opcional. Propiedades que se pueden pasar al constructor de FenextjsValidatorClass.
 *                                                       Un objeto que contiene las propiedades del constructor de la clase FenextjsValidatorClass.
 *                                                       Por ejemplo, puede contener la propiedad "name".
 *
 * @returns {FenextjsValidatorClass} - Una nueva instancia de la clase FenextjsValidatorClass que se utilizará para definir reglas de validación y validar datos.
 */
export declare const FenextjsValidator: <T = any>(props?: FenextjsValidatorClassConstructorProps) => FenextjsValidatorClass<T>;
export declare const FV: <T = any>(props?: FenextjsValidatorClassConstructorProps) => FenextjsValidatorClass<T>;
