document.getElementById('Submit').addEventListener('click', function() {
    // Lấy giá trị từ textarea
     const text = document.getElementById('textarea').value;
     const lines = text.split('\n'); // Tách từng dòng thành mảng
    

    for (const [index, line] of lines.entries()) {
        const trimmedLine = line.trim().toLowerCase(); 
        // Tách từ theo dấu gạch dưới
        const words = trimmedLine.split('_'); //words = ['this', 'is', 'a', 'test']

        const camelCaseWord = words.map((word, i) => { //word = 'this', i = 0
          if (i === 0) 
              return word;
           return word[0].toUpperCase() + word.slice(1);
         }).join(''); // 'thisIsAT

        // Thêm dấu :white_check_mark: tùy theo thứ tự xuất hiện
        const checkMarks = '✅'.repeat(index + 1); 

        // In ra kết quả
        console.log(`${camelCaseWord.padEnd(20)}${checkMarks}`); //.padEnd(20) thêm khoảng trắng vào cuối chuỗi
        document.write(`${camelCaseWord.padEnd(20)}${checkMarks}<br>`);
}
});