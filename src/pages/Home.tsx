import SuccessModal from "@/components/Modal/successModal";
import { Button } from "@/components/ui/button";
import {
  CreditCard,
  CreditCardFooter,
  CreditCardHeader,
  CreditCardName,
  CreditCardNumber,
} from "@/components/ui/creditCard";
import ErrMsg from "@/components/ui/errMsg";
import { Input } from "@/components/ui/input";
import { useState } from "react";

function Home() {
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpMonth, setCardExpMonth] = useState("");
  const [cardExpYear, setCardExpYear] = useState("");
  const [cardCvc, setCardCvc] = useState("");

  // Error states
  const [cardNameErr, setCardNameErr] = useState(false);
  const [cardNameErrMsg, setCardNameErrMsg] = useState("");

  const [cardNumberErr, setCardNumberErr] = useState(false);
  const [cardNumberErrMsg, setCardNumberErrMsg] = useState("");

  const [cardExpMonthErr, setCardExpMonthErr] = useState(false);
  const [cardExpMonthErrMsg, setCardExpMonthErrMsg] = useState("");

  const [cardExpYearErr, setCardExpYearErr] = useState(false);
  const [cardExpYearErrMsg, setCardExpYearErrMsg] = useState("");

  const [cardCvcErr, setCardCvcErr] = useState(false);
  const [cardCvcErrMsg, setCardCvcErrMsg] = useState("");

  const [successModal, setSuccessModal] = useState(false);

  function handleCardName() {
    if (cardName.length < 3) {
      setCardNameErr(true);
      setCardNameErrMsg("Missing or invalid card Name.");
      return false;
    } else {
      setCardNameErr(false);
      setCardNameErrMsg("");
      return true;
    }
  }

  function handleCardNumber() {
    if (cardNumber.replace(/\s+/g, "").length < 16) {
      setCardNumberErr(true);
      setCardNumberErrMsg("Missing or invalid card number.");
      return false;
    } else {
      setCardNumberErr(false);
      setCardNumberErrMsg("");
      return true;
    }
  }

  function handleCardExpMonth() {
    if (cardExpMonth.length < 2) {
      setCardExpMonthErr(true);
      setCardExpMonthErrMsg("Invalid Month.");
      return false;
    } else {
      setCardExpMonthErr(false);
      setCardExpMonthErrMsg("");
      return true;
    }
  }

  function handleCardExpYear() {
    const currentYear = new Date().getUTCFullYear().toString().slice(2);
    if (cardExpYear.length < 2 || cardExpYear < currentYear) {
      setCardExpYearErr(true);
      setCardExpYearErrMsg("Invalid Year.");
      return false;
    } else {
      setCardExpYearErr(false);
      setCardExpYearErrMsg("");
      return true;
    }
  }

  function handleCardCvc() {
    if (cardCvc.length < 3) {
      setCardCvcErr(true);
      setCardCvcErrMsg("Invalid CVC.");
      return false;
    } else {
      setCardCvcErr(false);
      setCardCvcErrMsg("");
      return true;
    }
  }

  function formatCardNumber(value: string) {
    // Remove non-numeric characters and format in blocks of 4 digits
    const cleaned = value.replace(/\D+/g, "");
    const formatted = cleaned.match(/.{1,4}/g)?.join(" ") || "";
    return formatted;
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const isNameValid = handleCardName();
    const isNumberValid = handleCardNumber();
    const isExpMonthValid = handleCardExpMonth();
    const isExpYearValid = handleCardExpYear();
    const isCvcValid = handleCardCvc();

    if (
      isNameValid &&
      isNumberValid &&
      isExpMonthValid &&
      isExpYearValid &&
      isCvcValid
    ) {
      setCardName("");
      setCardNumber("");
      setCardExpMonth("");
      setCardExpYear("");
      setCardCvc("");
      setSuccessModal(true);
    }
  }

  return (
    <>
      <section className="flex min-h-[100dvh] flex-col lg:flex-row">
        <div className="flex flex-col gap-6 rounded-b-3xl bg-gradient-to-tl from-purple-900 via-purple-500 to-purple-900 py-6 lg:w-2/3 lg:rounded-b-none">
          <CreditCard className="frontcard">
            <CreditCardHeader>
              <div className="flex flex-row items-center gap-4">
                <div className="size-12 rounded-full bg-purple-800 lg:size-16" />
                <div className="size-3 rounded-full ring-1 ring-purple-200 lg:size-4" />
              </div>
            </CreditCardHeader>
            <CreditCardFooter>
              <CreditCardNumber>
                {cardNumber || "0000 0000 0000 0000"}
              </CreditCardNumber>
              <div className="flex flex-row justify-between">
                <CreditCardName>{cardName || "Your Name"}</CreditCardName>
                <CreditCardName>
                  {cardExpMonth || "00"}/{cardExpYear || "00"}
                </CreditCardName>
              </div>
            </CreditCardFooter>
          </CreditCard>
          <CreditCard className="backcard">
            <CreditCardHeader className="space-y-6">
              <div className="mt-6 h-12 w-full bg-neutral-700 lg:mt-8 lg:h-16" />
              <div className="mx-auto flex h-8 max-w-56 items-center justify-end rounded-lg bg-slate-400 px-4 text-white lg:h-12 lg:max-w-xs">
                {cardCvc || "123"}
              </div>
            </CreditCardHeader>
          </CreditCard>
        </div>

        <form action="submit" onSubmit={handleSubmit} className="w-full py-12">
          <div className="flex min-h-[42dvh] flex-col items-center justify-center space-y-6 text-xs font-semibold lg:min-h-[100dvh] lg:w-full">
            <label className="label">
              CARDHOLDER NAME
              <Input
                className={cardNameErr ? "input-err" : ""}
                placeholder="e.g. Your Name"
                onChange={(e) => {
                  const value = e.target.value;

                  const sanitizedValue = value.replace(/[0-9]/g, "");
                  setCardName(sanitizedValue);
                }}
                value={cardName}
                maxLength={24}
              />
              {cardNameErr && <ErrMsg>{cardNameErrMsg}</ErrMsg>}
            </label>
            <label className="label">
              CARD NUMBER
              <Input
                className={cardNumberErr ? "input-err" : ""}
                placeholder="e.g. 0000 0000 0000 0000"
                onInput={(e) => {
                  const value = (e.target as HTMLInputElement).value;
                  const formattedValue = formatCardNumber(value);
                  setCardNumber(formattedValue);
                }}
                value={cardNumber}
                maxLength={19}
              />
              {cardNumberErr && <ErrMsg>{cardNumberErrMsg}</ErrMsg>}
            </label>
            <div className="flex w-full max-w-xs flex-row gap-6">
              <label className="w-full max-w-xs text-nowrap">
                EXP. DATE {"(MM/YY)"}
                <div className="flex flex-col space-y-2">
                  <div className="flex flex-row gap-2">
                    <Input
                      className={cardExpMonthErr ? "input-err" : ""}
                      placeholder="MM"
                      onInput={(e) => {
                        const value = (e.target as HTMLInputElement).value;
                        if (/^[0-9]*$/.test(value)) {
                          setCardExpMonth(value);
                        }
                      }}
                      value={cardExpMonth}
                      maxLength={2}
                    />
                    <Input
                      className={cardExpYearErr ? "input-err" : ""}
                      placeholder="YY"
                      onInput={(e) => {
                        const value = (e.target as HTMLInputElement).value;
                        if (/^[0-9]*$/.test(value)) {
                          setCardExpYear(value);
                        }
                      }}
                      value={cardExpYear}
                      maxLength={2}
                    />
                  </div>
                  {cardExpMonthErr && <ErrMsg>{cardExpMonthErrMsg}</ErrMsg>}
                </div>
              </label>
              <label className="label">
                CVC
                <Input
                  className={cardCvcErr ? "input-err" : ""}
                  placeholder="e.g. 123"
                  onInput={(e) => {
                    const value = (e.target as HTMLInputElement).value;
                    if (/^[0-9]*$/.test(value)) {
                      setCardCvc(value);
                    }
                  }}
                  value={cardCvc}
                  maxLength={3}
                />
                {cardCvcErr && <ErrMsg>{cardCvcErrMsg}</ErrMsg>}
              </label>
            </div>
            <Button
              className="w-full max-w-xs bg-purple-700 font-sans hover:bg-purple-800"
              type="submit"
            >
              Submit
            </Button>
          </div>
        </form>
      </section>
      {successModal && (
        <SuccessModal
          onClick={() => {
            setSuccessModal(false);
          }}
        />
      )}
    </>
  );
}

export default Home;
