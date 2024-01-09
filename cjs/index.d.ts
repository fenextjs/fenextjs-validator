import { ErrorFenextjs } from "fenextjs-error/cjs/Fenextjs";
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
    #private;
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
     * Método para definir la validación "isEqual".
     * Establece la regla de que los datos deben ser iguales al valor especificado.
     * @param d - Valor a comparar con los datos.
     * @returns Instancia de FenextjsValidatorClass.
     */
    isEqual(d: T[] | T, msg?: string): this;
    /**
     * Método para habilitar la validación "isRequired".
     * Establece la regla de que los datos deben estar presentes y no ser nulos o indefinidos.
     * @returns Instancia de FenextjsValidatorClass.
     */
    isRequired(msg?: string): this;
    /**
     * Método para habilitar la validación "isBoolean".
     * Establece la regla de que los datos deben ser de tipo booleano.
     * @returns Instancia de FenextjsValidatorClass.
     */
    isBoolean(msg?: string): this;
    /**
     * Método para habilitar la validación "isNumber".
     * Establece la regla de que los datos deben ser de tipo número.
     * @returns Instancia de FenextjsValidatorClass.
     */
    isNumber(msg?: string): this;
    /**
     * Método para habilitar la validación "isString".
     * Establece la regla de que los datos deben ser de tipo cadena (string).
     * @returns Instancia de FenextjsValidatorClass.
     */
    isString(msg?: string): this;
    /**
     * Método para habilitar la validación de longitud.
     * Establece la regla de que los datos deben tener una longitud específica.
     *
     * @param {number} length - La longitud que deben tener los datos para que la validación sea válida.
     * @returns {FenextjsValidatorClass} - La instancia actual de la clase FenextjsValidatorClass, lo que permite el encadenamiento de métodos.
     */
    isLength(length: number, msg?: string): this;
    /**
     * Método para habilitar la validación "isDate".
     * Establece la regla de que los datos deben ser de tipo Date (fecha).
     * @returns Instancia de FenextjsValidatorClass.
     */
    isDate(msg?: string): this;
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
     * Método para habilitar la validación "isArray".
     * Establece la regla de que los datos deben ser un array.
     * @param item - Instancia de FenextjsValidatorClass que define las reglas de validación para cada elemento del array.
     * @returns Instancia de FenextjsValidatorClass.
     */
    isArray(item?: FenextjsValidatorClass | undefined, msg?: string): this;
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
     * Método para habilitar la validación "isWhen".
     * Establece la regla de que los comparacion cuando sea correcto la validacion.
     * @returns Instancia de FenextjsValidatorClass.
     */
    isWhen(data: {
        key: string;
        is: FenextjsValidatorClass;
        then: FenextjsValidatorClass;
    }): this;
    /**
     * Método para habilitar la validación "isRegex".
     * Establece la regla de que los comparacion cuando sea correcto la validacion.
     * @returns Instancia de FenextjsValidatorClass.
     */
    isRegex(data: RegExp, msg?: string): this;
    /**
     * Método para habilitar la validación "isEmail".
     * Establece la regla de que los comparacion cuando sea correcto la validacion.
     * @returns Instancia de FenextjsValidatorClass.
     */
    isEmail(msg?: string): this;
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
