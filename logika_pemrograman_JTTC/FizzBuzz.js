//menampilkan angka 1 - 100, dibelakang angka tambahkan kata 'Fizz', 'Buzz', atau 'FizzBuzz' dengan ketentuan sebagai berikut : 
// 1. jika habis dibagi 3 tambahkan fizz
// 2. jika habis dibagi 5 tambahkan buzz
// 3. jika habis dibagi 3 dan 5 tambahkan fizzbuzz


for (let i = 1; i <= 100; i++) {
    let output = '';
    if (i % 3 === 0) {
        output += 'Fizz';
    }
    if (i % 5 === 0) {
        output += 'Buzz';
    }
    // Jika tidak habis dibagi 3 atau 5, output tetap angka itu sendiri
    if (output === '') {
        output = i;
    }
    console.log(output);
}