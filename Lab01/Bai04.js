function tongBill(bill) {
    tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
    console.log(`Giá trị hóa đơn ${bill}, tiền tip ${tip}, và tổng giá trị là ${bill + tip}`);

}

var bill = 275;
tongBill(bill);

bill_1 = 40;
tongBill(bill_1);

bill_2 = 430;
tongBill(bill_2);

