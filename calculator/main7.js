'use strict';


let arrayA = [];
let arrayB = [];

let x = 'startX';
let y = 'startY';
let symbol = 'startS';
let number = 'startN';

// 最初に戻す
const funClear = () => {
  document.getElementById( 'sum' ).value = '0';
  arrayA = [];
  arrayB = [];
  x = 'startX';
  y = 'startY';
  symbol = 'startS';
  number = 'startN';
  countNum = 1;
  countSym = 0;
}

// ブラウザ上で数字ボタンが何回押されたかカウントする
let countNum = 1;
const countNums = () => countNum++;

// 演算子のカウントを初期値にする
// 配列に入れる(9桁まで)
const pushValue = ( n ) => {
  countSym = 0;
  if ( symbol === 'startS' && countNum <= 9 ) {
    arrayA.push( n.value );
  } else if ( countNum <= 9  ) {
    arrayB.push ( n.value );
  }
}

// 配列を繋げる
// ブラウザでの表示
// x、yに数値型に変換した数字を代入する
const assignment = () => {
  if ( symbol === 'startS' ) {
    number = arrayA[0];
    for ( let i = 1; i < arrayA.length; i++ ) {
      number = number + arrayA[i];
    }
    displayMethod();
    x = parseFloat( number );
  } else {
    number = arrayB[0];
    for ( let i = 1; i < arrayB.length; i++ ) {
      number = number + arrayB[i];
    }
    displayMethod();
    y = parseFloat( number );
  }
}

// 計算結果
const result = () => {
  if ( symbol === '+' ) {
    x = x + y;
  } else if ( symbol === '-' ) {
    x = x - y;
  } else if ( symbol === '×' ) {
    x = x * y;
  } else if ( symbol === '÷' ) {
    x = x / y;
  }
}

// ブラウザでの演算子のクリック回数を数える
let countSym = 0;

// 演算子が押されたら
const selectCalc = ( n ) => {
  if ( x === 'startX' ) {
    return;
  } else {
    const countOparator = () => countSym++;
    countOparator();
    console.log(countSym);
  }
  if ( countSym === 1 && y  === 'startY' ) {
    symbol = n.value;
  } else if ( countSym === 1 ) {
    result();
    symbol = n.value;
    // xは数値型なので文字列にして、ブラウザで表示する
    number  = String( x );
    displayMethod();
    // 配列Bと数字ボタンのカウントを戻す
    arrayB = [];
    countNum = 1;
  } else {
    symbol = n.value;
  }
}

// イコールが押されたら
const equal = () => {
  if ( x === 'startX' || y === 'startY' ) {
    return;
  } else {
    result();
    number = String( x );
    displayMethod();
    symbol = '=';
    arrayB = [];
    countNum = 1;
  }
}

// const minus = integerPart.replace(/^-/,'');

// ブラウザでの表示方法(カンマ、指数表記)
function displayMethod() {
  // 小数点があるかないか調べる
  const decimalPoint = /\d+\.\d+/;
  const decimalTest = decimalPoint.test( number );
  // 整数部分と小数部分に分ける
  const num = number.split('.');
  const integerPart = num[0];
  const fractionalPart = num[1];

  const minus = /^-/;
  const minusTest = minus.test(integerPart);

  // 整数部分をカンマ表示するために３桁で区切る
  const threeDigs = integerPart.slice( -3 );
  const sixDigs = integerPart.slice( -6, -3 );
  const nineDigs = integerPart.slice( -9, -6 );


  // 小数点ありとなしの場合の表示
  if ( integerPart.length <= 3 && decimalTest === true ) {
    const nineDigsFractional = fractionalPart.slice( 0, 9 );
    document.getElementById( 'sum' ).value = `${threeDigs}.${nineDigsFractional}`;
  } else if ( integerPart.length <= 6 && decimalTest === true ) {
    const nineDigsFractional = fractionalPart.slice( 0, 9 );
    document.getElementById( 'sum' ).value = `${sixDigs},${threeDigs}.${nineDigsFractional}`;
  } else if ( integerPart.length <= 9 && decimalTest === true ) {
    const nineDigsFractional = fractionalPart.slice( 0, 9 );
    document.getElementById( 'sum' ).value = `${nineDigs},${sixDigs},${threeDigs}.${nineDigsFractional}`;
  } else if ( integerPart.length <= 3 ) {
    document.getElementById( 'sum' ).value = threeDigs;
  } else if ( integerPart.length <= 6 ) {
    document.getElementById( 'sum' ).value = `${sixDigs},${threeDigs}`;
  } else if ( integerPart.length <= 9 ) {
    document.getElementById( 'sum' ).value = `${nineDigs},${sixDigs},${threeDigs}`;
  } else {
    const x = parseFloat( number );
    document.getElementById( 'sum' ).value = x.toExponential();
  }

  if ( minusTest === true && integerPart.length % 3 === 1 && integerPart.length <= 6 ) {
    document.getElementById( 'sum' ).value = sixDigs + threeDigs;
  } else if (minusTest === true && integerPart.length % 3 === 1 && integerPart.length <= 9) {
    document.getElementById( 'sum' ).value = `${nineDigs}${sixDigs},${threeDigs}`;
  }

}


// 追加したい機能
// マイナスプラスの場合の表示
// 小数点の計算
// 一文字ずつ消せる
// C　-/+ (%) ボタン
// css　ボタンの色変更
// memo
