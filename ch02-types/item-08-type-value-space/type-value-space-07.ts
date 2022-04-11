const p: Person = { first: 'daeyoung', last: 'We'};
function email(p: Person, subject: string, body: string): Response {
    return new Response();
}

type T1 = typeof p; // 타입은 Person
type T2 = typeof email; // 타입은 (p: Person, subject: string, body: string) => Response

const v1 = typeof p; // 값은 object
const v2 = typeof email; // 값은 function