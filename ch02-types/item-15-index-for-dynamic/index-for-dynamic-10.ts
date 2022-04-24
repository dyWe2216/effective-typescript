type Vec3D = {[k in 'x' | 'y' | 'z']: number};
/**
 * Type VEC3D = {
 *  x: number;
 *  y: number;
 *  z: number
 * }
 */

type ABC = {[k in 'a' | 'b' | 'c']: k extends 'b' ? string: number};
/**
 * Type ABC = {
 *  a: number;
 *  b: string;
 *  c: number
 * }
 */