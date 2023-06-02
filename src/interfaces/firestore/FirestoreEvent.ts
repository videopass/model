import { FieldPaths } from "./FieldPaths";

export interface FireStoreEvent {
	updateMask: FieldPaths[];
}
