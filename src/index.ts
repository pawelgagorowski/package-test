import InfoReturnType from './types/types';

export function print(arg: string): string {
    return arg;
};

export function info(arg: string): InfoReturnType {
    return {
        name: "Pawel",
        surname: "Gagor",
        email: "pawel.gagor@gmail.com"
    }
};



