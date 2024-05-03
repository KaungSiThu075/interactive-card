import React, { useState } from "react";
import "./App.css";

const holderNameReg = /[0-9]/i;

const cardNumReg = /[a-zA-Z\`\=\-]/i;

const App: React.FC = () => {
  const [cardholderName, setCardholderName] = useState("");

  const originHolderName: string = "Jamie Hank";

  const [cardNumber, setCardNumber] = useState("");

  const originNum: string = "0000 0000 0000 0000";

  const [month, setMonth] = useState("");

  const originMonth = "00";

  const handleMonth = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (+e.target.value < 10) {
      const formatValue = "0" + e.target.value;
      setMonth(formatValue);
    } else {
      setMonth(e.target.value);
    }
  };

  const [year, setYear] = useState("");

  const originYear = "00";

  const [cvc, setCvc] = useState("");

  const originNum2: string = "000";

  const [formDisplay, setFormDisplay] = useState(true);

  const [cardDisplay, setCardDisplay] = useState(false);

  const handleConfirm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormDisplay(false);
    setCardDisplay(true);
  };

  const handleBack = () => {
    setFormDisplay(true);
    setCardDisplay(false);
    setCardholderName("");
    setCardNumber("");
    setMonth("");
    setYear("");
    setCvc("");
  };

  return (
    // main div
    <div className=" h-lvh flex flex-col justify-around items-center p-8 bg-mobile bg-repeat-x md:bg-desktop md:bg-repeat-y md:flex-row md:gap-10">
      {/* main image div  */}
      <div>
        {/* start of card-front  */}
        <div className=" relative top-20 right-5 z-20 text-white xs:top-24 sm:top-44">
          <img src="../src/assets/bg-card-front.png" alt="card-front" />
          {/* card number on img  */}
          <div className=" absolute font-semibold top-16 left-12 tracking-widest text-lg md:text-3xl">
            {!cardNumber
              ? originNum
              : cardNumber.replace(/.{4}/g, "$& ").toUpperCase()}
          </div>
          {/* card number on img  */}

          {/* cardholder name on img  */}
          <div className=" absolute bottom-6 left-12">
            {!cardholderName ? originHolderName : cardholderName}
          </div>
          {/* cardholder name on img  */}

          {/* month on img  */}
          <div className=" absolute bottom-6 right-10">
            <p>
              {" "}
              {!month ? originMonth : month} / {!year ? originYear : year}
            </p>
          </div>
          {/* month on img  */}
        </div>
        {/* end of card-front  */}

        {/* start of card-back  */}
        <div className=" relative bottom-48 left-6 xs:bottom-52 430px:bottom-56">
          <img src="../src/assets/bg-card-back.png" alt="card-back" />
          <div className=" absolute font-semibold bottom-20 right-10 text-white tracking-widest 430px:bottom-24 sm:bottom-28">
            {!cvc ? originNum2 : cvc}
          </div>
        </div>
        {/* end of card-back  */}
      </div>
      {/* end of main image div  */}

      {formDisplay && (
        <form
          action=""
          onSubmit={handleConfirm}
          className=" flex flex-col gap-4 items-start"
        >
          {/* start of cardholder name input field  */}
          <div>
            <p className=" uppercase tracking-widest">cardholder name</p>
            <input
              className={
                holderNameReg.test(cardholderName)
                  ? " outline-none border border-red-500 p-1 rounded"
                  : "placeholder-stone-400 font-medium border p-1 rounded outline-purple-950"
              }
              required
              maxLength={20}
              onChange={(e) => setCardholderName(e.target.value)}
              type="text"
              placeholder="e.g. Jamie Hank"
            />
            <p
              className={
                holderNameReg.test(cardholderName)
                  ? "block text-red-500"
                  : "hidden"
              }
            >
              You can only add letters!
            </p>
          </div>
          {/* end of cardholder name input field  */}
          {/* start of card number input field  */}
          <div>
            <p className=" uppercase tracking-widest">card number</p>
            <input
              className={
                cardNumReg.test(cardNumber)
                  ? " border border-red-500 outline-none p-1 rounded"
                  : "placeholder-stone-400 font-medium border outline-purple-950 rounded p-1"
              }
              value={cardNumber}
              maxLength={16}
              type="text"
              required
              placeholder="e.g. 1111 1111 1111 1111"
              onChange={(e) => setCardNumber(e.target.value)}
            />

            {/* error message  */}
            <p
              className={
                cardNumReg.test(cardNumber) ? "block text-red-500" : "hidden"
              }
            >
              Wrong format. You can only use numbers!
            </p>
            {/* end of error message  */}
          </div>
          {/* end of card number input field  */}

          {/* start of exp date input field  */}
          <div>
            <p className=" uppercase tracking-widest">exp.date (mm/yy)</p>
            <div className=" flex flex-col gap-5">
              <div>
                {/* start of mont input field  */}
                <input
                  className={
                    cardNumReg.test(month)
                      ? " outline-none border border-red-500 p-1 rounded "
                      : " placeholder-stone-400 font-medium border rounded p-1 outline-purple-950 "
                  }
                  required
                  maxLength={2}
                  min={1}
                  max={12}
                  type="text"
                  placeholder="MM"
                  onChange={handleMonth}
                />
                {/* end of month input field  */}
                {/* month error message  */}
                <p
                  className={
                    cardNumReg.test(month) ? "block text-red-500" : "hidden"
                  }
                >
                  Only Numbers
                </p>
                {/* month error message  */}
              </div>

              <div>
                {/* start of year input field  */}
                <input
                  className={
                    cardNumReg.test(year)
                      ? " outline-none border border-red-500 rounded p-1 "
                      : " placeholder-stone-400 border font-medium rounded p-1 outline-purple-950 "
                  }
                  required
                  onChange={(e) => setYear(e.target.value)}
                  maxLength={2}
                  type="text"
                  placeholder="YY"
                />
                {/* end of year input field  */}
                {/* year error message  */}
                <p
                  className={
                    cardNumReg.test(year) ? "block text-red-500" : "hidden"
                  }
                >
                  Only Numbers
                </p>
                {/* year error message  */}
              </div>
            </div>
          </div>
          {/* end of exp date input field  */}

          {/* start of cvc input field  */}
          <div>
            <p className=" uppercase tracking-widest">cvc</p>
            <input
              className={
                cardNumReg.test(cvc)
                  ? " outline-none border border-red-500 p-1 rounded "
                  : " placeholder-stone-400 font-medium border rounded p-1 outline-purple-950"
              }
              value={cvc}
              maxLength={3}
              type="text"
              placeholder="e.g.123"
              required
              onChange={(e) => setCvc(e.target.value)}
            />
            {/* error message  */}
            <p
              className={cardNumReg.test(cvc) ? "block text-red-500" : "hidden"}
            >
              Only numbers!
            </p>
            {/* error message  */}
          </div>
          {/* end of cvc input field  */}

          {/* submit button  */}
          <div className=" flex items-center justify-center">
            <button
              className=" bg-purple-950 px-74px text-white py-2 rounded-md"
              type="submit"
            >
              Confirm
            </button>
          </div>
          {/* end of submit button  */}
        </form>
        // end of form submit
      )}

      {/* card display  */}
      {cardDisplay && (
        <div className="flex flex-col justify-center items-center gap-8">
          <img src="../src/assets/icon-complete.svg" alt="" />
          <p className=" uppercase font-semibold text-4xl tracking-wider">
            thank you!
          </p>
          <p className=" text-slate-500 font-semibold">
            We've added your card details
          </p>
          <button
            className=" bg-indigo-800 text-white py-2 px-20 rounded-lg uppercase font-semibold tracking-wide"
            type="button"
            onClick={handleBack}
          >
            continue
          </button>
        </div>
      )}
      {/* end of card display  */}
    </div>
  );
};

export default App;
