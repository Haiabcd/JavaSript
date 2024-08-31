const poll = {
    question: "What is your favourite programming language?",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
    answers: new Array(4).fill(0),

    registerNewAnswer() {
        const answer = Number(
            prompt(
                `${this.question}\n${this.options.join('\n')}\n(viết số của lựa chọn vào đây)`
            )
        );

        // 1.2 Cập nhật mảng answers nếu đầu vào hợp lệ
        if (typeof answer === 'number' && answer >= 0 && answer < this.answers.length) {
            this.answers[answer]++;
        } else {
            alert('Nhập sai! Hãy nhập số từ 0 đến 3');
        }

        this.displayResults("string");
    },

    // Phương thức displayResults
    displayResults(type = 'array') { // type có thể là 'string' hoặc 'array', mặc định là 'array'
        if (type === 'string') {
            console.log(`Poll results are ${this.answers.join(', ')}`); 
        } else if (type === 'array') {
            console.log(this.answers);
        }
    }
 };

 document.getElementById('pollButton').addEventListener('click', function() {
    poll.registerNewAnswer();
});

// Dữ liệu kiểm tra
const testData1 = [5, 2, 3];
const testData2 = [1, 5, 3, 9, 6, 1];

// Hiển thị dữ liệu kiểm tra với kiểu 'array'
poll.displayResults.call({ answers: testData1 }, 'array');
poll.displayResults.call({ answers: testData2 }, 'array');

// Hiển thị dữ liệu kiểm tra với kiểu 'string'
poll.displayResults.call({ answers: testData1 }, 'string');
poll.displayResults.call({ answers: testData2 }, 'string'); 

//call chỉ định this cho phương thức displayResults trỏ đến đối tượng cụ thể