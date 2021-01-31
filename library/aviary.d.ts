export function ap <X, Y, Z>(f: (x: X) => (y: Y) => Z): (g: (x: X) => Y) => (x: X) => Z;
export function ap <X, Y, Z>(f: (x: X) => (y: Y) => Z, g: (x: X) => Y): (x: X) => Z;
export function ap <X, Y, Z>(f: (x: X) => (y: Y) => Z, g: (x: X) => Y, x: X): Z;
export function ap (f: Function, g?: Function, x?: any): any;

export function apply <X, Y>(f: (x: X) => Y): (x: X) => Y;
export function apply <X, Y>(f: (x: X) => Y, x: X): Y;
export function apply (f: Function, x?: any): any;

export function applyTo <X, Y>(x: X): (f: (x: X) => Y) => Y;
export function applyTo <X, Y>(x: X, f: (x: X) => Y): Y;
export function applyTo (x: any, f?: Function): any;

export function compose2 <X, Y, Z>(f: (y: Y) => Z): (g: (x: X) => Y) => (x: X) => Z;
export function compose2 <X, Y, Z>(f: (y: Y) => Z, g: (x: X) => Y): (x: X) => Z;
export function compose2 <X, Y, Z>(f: (y: Y) => Z, g: (x: X) => Y, x: X): Z;
export function compose2 (f: Function, g?: Function, x?: any): any;

export function compose3 <W, X, Y, Z>(f: (y: Y) => Z): (g: (x: X) => Y) => (h: (w: W) => X) => (w: W) => Z;
export function compose3 <W, X, Y, Z>(f: (y: Y) => Z, g: (x: X) => Y): (h: (w: W) => X) => (w: W) => Z;
export function compose3 <W, X, Y, Z>(f: (y: Y) => Z, g: (x: X) => Y, h: (w: W) => X, w: W): Z;


export function constant <X, Y>(x: X): (y: Y) => X;
export function constant <X, Y>(x: X, y: Y): X;
export function constant (x: any, y?: any): any;

export function flip <X, Y, Z>(f: (x: X) => (y: Y) => Z): (x: X) => (y: Y) => Z;
export function flip <X, Y, Z>(f: (x: X) => (y: Y) => Z, x: X, y: Y): Z;
export function flip (f: Function, x?: any, y?: any): any;

export function identity <X>(x: X): X;
export function identity (x: any): any;

