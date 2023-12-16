// function solve(input) {
//     let students = JSON.parse(input);
//     let htmlText = ['<table>'];
//     let objNames = students[0];

//     htmlText.push(makeKeyRow(objNames));
//     students.forEach(obj => htmlText.push(makeValueRow(obj)));
//     htmlText.push('</table>');

//     function makeKeyRow(arr) {
//         let keys = [];
//         Object.keys(arr).forEach(key => {
//             keys.push(`<th>${escapeHTML(key)}</th>`);
//         });
//         return ("  <tr>" + keys.join('') + "</tr>");
//     }

//     function makeValueRow(obj) {
//         let rows = [];
//         Object.values(obj).forEach(value => {
//             rows.push(`<td>${escapeHTML(value)}</td>`);
//         });
//         return ("  <tr>" + rows.join('') + "</tr>");
//     }

//     function escapeHTML(value) {
//         return value
//             .toString()
//             .replace(/&/g, '&amp;')
//             .replace(/</g, '&lt;')
//             .replace(/>/g, '&gt;')
//             .replace(/"/g, '&quot;')
//             .replace(/'/g, '&#39;')
//             .replace(/`/g, '&#96;')
//             .replace(/\//g, '&#x2F;')
//             .replace(/ /g, '&nbsp;')
//             .replace(/-/g, '&ndash;')
//             .replace(/_/g, '&mdash;')
//             .replace(/©/g, '&copy;')
//             .replace(/®/g, '&reg;')
//             .replace(/™/g, '&trade;')
//             .replace(/≈/g, '&asymp;')
//             .replace(/≠/g, '&ne;')
//             .replace(/£/g, '&pound;')
//             .replace(/°/g, '&deg;')
//             .replace(/€/g, '&euro;')
            
//     }

//     return(htmlText.join('\r\n'));
// }




// function fromJsonToHtml(json) {

//     let arr = JSON.parse(json);
//     let text = `<table>\n\t<tr>`;

//     for (const key of Object.keys(arr[0])) {
//         text += `<th>${escape(key)}</th>`;
//     }
//     text += `</tr>\n`;


//     for (const el of arr) {
//         text += `\t<tr>`
//         for (const value of Object.values(el)) {
//             text += `<td>${escape(value.toString())}</td>`;

//         }
//         text += `</tr>\n`
//     }
//     text += '</table>';

//     function escape(par) {
//         return par.replace(/[&<>" –—©®™≈≠£€°]/g, (result) => {
//             const map = {
//                 "&": "&amp;",
//                 "<": "&lt;",
//                 ">": "&gt;",
//                 "'": "&quot;",
//                 " ": "&nbsp;",
//                 "–": "&ndash;",
//                 "—": "&mdash;",
//                 "©": "&copy;",
//                 "®": "&reg;",
//                 "™": "&trade;",
//                 "≈": "&asymp;",
//                 "≠": "&ne;",
//                 "£": "&pound;",
//                 "€": "&euro;",
//                 "°": "&deg;",
//             }
//             if (map[result]) {
//                 return map[result];
//             }
//             return result;
//         })
//     }

//     return text;
// }




function solve(dataAsJson){
    let result = [];
    result.push('<table>');

    const data = JSON.parse(dataAsJson);

    const props = Object.keys(data[0]);

    result.push(`  <tr>${props.map(p => `<th>${escapeHtml(p)}</th>`).join('')}</tr>`)

    for(let entry of data){

        
        result.push(`  <tr>${props.map(p => `<td>${escapeHtml(entry[p])}</td>`).join('')}</tr>`)
    }

    result.push('</table>');
    console.log(result.join('\n'));

    function escapeHtml(str) {
        // html escape from Underscore.js https://coderwall.com/p/ostduq/escape-html-with-javascript
        let entityMap = {
            "&": "&amp;",
                            "<": "&lt;",
                            ">": "&gt;",
                            "'": "&quot;",
                            " ": "&nbsp;",
                            "–": "&ndash;",
                            "—": "&mdash;",
                            "©": "&copy;",
                            "®": "&reg;",
                            "™": "&trade;",
                            "≈": "&asymp;",
                            "≠": "&ne;",
                            "£": "&pound;",
                            "€": "&euro;",
                            "°": "&deg;",
        };
        return str.toString().replace(/[&<>" –—©®™≈≠£€°]/g, (s) => entityMap[s]);
    }

}



// console.log(solve(`[{"Name":"Stamat",
//  "Score":5.5},
//  {"Name":"Rumen",
//  "Score":6}]`))

// solve(['[{"Name":"Stamat","Price":5.5},{"Name":"Rumen","Price":6}]']);
solve(`[{"Name":"Pesho",
 "Score":4,
 " Grade":8},
 {"Name":"Gosho",
 "Score":5,
 "Grade":8},
 {"Name":"Angel",
 "Score":5.50,
 "Grade":10}]`)

solve(`[{"Name":"Pesho",
 "Score":4,
 " Grade":8,
"Points": 6,
"Letter":3,
"Likes":10},
{"Name":"Pesho",
 "Score":4,
 " Grade":8,
"Points": 6,
"Letter":3,
"Likes":10},
{"Name":"Pesho",
 "Score":4,
 " Grade":8,
"Points": 6,
"Letter":3,
"Likes":10},
{"Name":"Pesho",
 "Score":4,
 " Grade":8,
"Points": 6,
"Letter":3,
"Likes":10},
{"Name":"Pesho",
 "Score":4,
 " Grade":8,
"Points": 6,
"Letter":3,
"Likes":10},
{"Name":"Pesho",
 "Score":4,
 " Grade":8,
"Points": 6,
"Letter":3,
"Likes":10}
 ]`)
