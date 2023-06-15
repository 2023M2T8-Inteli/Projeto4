const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('Banco_de_dados/dbProjeto.db');

// var maxf1;
// var maxf2;
// var maxf;
// async function max1() {

//     // await new Promise(async (resolve, reject) => {
//     await db.all('SELECT MAX(f_maxima) as teste FROM Choque1', function (err, row) {
//         if (err) {
//             console.error(err.message);
//         }
//         maxf1 = row
//         console.log("f1", maxf1)
//     });
// }
// async function max2() {
//     await db.all(`SELECT MAX(f_maxima) FROM Choque2`, function (err, row) {
//         if (err) {
//             console.error(err.message);
//         }
//         maxf2 = row
//         console.log("f2", maxf2[0])
//     });
// }

// max1().then(() =>
//     max2().then(() => {
//         if (maxf1 > maxf2) {
//             maxf = maxf1
//             console.log("dsdsds")
//         } else {
//             maxf = maxf2
//         }
//         console.log("fsndfnhdishif" + maxf)
//     })
// )




// async function compara() {
//     let { f1, f2 } = await max()

// }
// async function compara() {
//     if (maxf1 > maxf2) {
//         maxf = maxf1
//     } else {
//         console.log("entrei aki")
//         maxf = maxf2
//     }
//     console.log(maxf);
//}

//max()
// compara()


//db.close();

var maxf1
var maxf2
var maxf

async function max() {
    const [row1, row2] = await Promise.all([
        new Promise((resolve, reject) => {
            db.all(`SELECT MAX(f_maxima) as maxf1 FROM Choque1`, function (err, row) {
                if (err) {
                    reject(err);
                } else {
                    console.log("Row 1:", row);
                    resolve(row);
                }
            });
        }),
        new Promise((resolve, reject) => {
            db.all(`SELECT MAX(f_maxima) as maxf2 FROM Choque1`, function (err, row) {
                if (err) {
                    reject(err);
                } else {
                    console.log("Row 2:", row);
                    resolve(row);
                }
            });
        }),
    ]);

    const maxf1 = row1[0].maxf1;
    const maxf2 = row2[0].maxf2;
    let maxf;

    if (parseFloat(maxf1) > parseFloat(maxf2)) {
        maxf = maxf1;
    } else {
        maxf = maxf2;
    }

    console.log("Max:", maxf);
}

max()