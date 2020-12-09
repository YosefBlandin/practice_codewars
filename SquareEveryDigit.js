function squareDigits(num) {
    num = num.toString();
    num = [num[0] ** 2, num[1] ** 2, num[2] ** 2, num[3] ** 2]
    num = num[0] + '' + num[1] + num[2] + num[3];
    num = parseInt(num);
    return num
}
squareDigits(9119)