interface Person {
    first: string;
    last: string;
}
const p: Person = { first: 'daeyoung', last: 'We'};
//    -           --------------------------------- Values
//       ------ Type

function email(p: Person, subject: string, body: string): Response {
    //     ----- -          -------          ----  Values
    //              ------           ------        ------   -------- Types
    // COMPRESS
    return new Response();
}