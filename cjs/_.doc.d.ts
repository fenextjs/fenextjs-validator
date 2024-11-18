declare const _default: {
    id: string;
    name: string;
    description: string;
    useImport: boolean;
    useBreadcrumb: boolean;
    functions: ({
        id: string;
        name: string;
        description: string;
        useImport: boolean;
        props: {
            id: string;
            type: string;
            require: boolean;
            description: string;
        }[];
        returns: {
            id: string;
            type: string;
            description: string;
        }[];
        useExample: {
            text: string;
            content: string;
        }[];
        extras?: undefined;
    } | {
        id: string;
        name: string;
        description: string;
        useImport: boolean;
        props: {
            id: string;
            type: string;
            require: boolean;
            description: string;
        }[];
        returns: {
            id: string;
            type: string;
            description: string;
        }[];
        extras: {
            id: string;
            title: string;
            description: string;
            tableItems: {
                Condición: string;
                Descripción: string;
            }[];
        }[];
        useExample: {
            text: string;
            content: string;
        }[];
    } | {
        id: string;
        name: string;
        useImport: boolean;
        description: string;
        returns: {
            id: string;
            type: string;
            description: string;
        }[];
        useExample: {
            text: string;
            content: string;
        }[];
        props?: undefined;
        extras?: undefined;
    })[];
};
export default _default;
