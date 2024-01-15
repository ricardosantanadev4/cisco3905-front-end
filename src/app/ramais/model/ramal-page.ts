import { Ramais } from "./ramais";

export interface RamalPage {
    ramais: Ramais[];
    totalElements: number;
    totalPages?: number;
}