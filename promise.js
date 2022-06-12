const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  try{
    let jumlah = 0
    const filmIxx = await promiseTheaterIXX();
    const filmVGC = await promiseTheaterVGC();
    filmIxx.forEach(element => {
      if(element.hasil == emosi){
        jumlah += 1;
      }
    });
    filmVGC.forEach(element => {
      if(element.hasil == emosi){
        jumlah += 1;
      }
    });

    return jumlah;

  }catch(rejectMessage){
    console.log(rejectMessage);
  }
}

module.exports = {
  promiseOutput,
};
