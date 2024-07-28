import { Button } from "@/components/ui/button";
import {
  CreditCard,
  CreditCardFooter,
  CreditCardHeader,
  CreditCardName,
  CreditCardNumber,
} from "@/components/ui/creditCard";
import { Input } from "@/components/ui/input";
import { useState } from "react";

function Home() {
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardExpMonth, setCardExpMonth] = useState("");
  const [cardExpYear, setCardExpYear] = useState("");
  const [cardCvc, setCardCvc] = useState("");

  return (
    <section className="flex min-h-[100dvh] flex-col md:flex-row">
      <div className="flex flex-col gap-6 rounded-b-3xl bg-gradient-to-tl from-purple-900 via-purple-500 to-purple-900 py-6 lg:w-2/3 lg:rounded-b-none">
        <CreditCard className="frontcard">
          <CreditCardHeader>
            <div className="flex flex-row items-center gap-4">
              <div className="size-12 rounded-full bg-purple-800 lg:size-16" />
              <div className="size-3 rounded-full ring-1 ring-purple-200 lg:size-4" />
            </div>
          </CreditCardHeader>

          <CreditCardFooter>
            <CreditCardNumber>{cardNumber}</CreditCardNumber>
            <div className="flex flex-row justify-between">
              <CreditCardName>{cardName}</CreditCardName>

              <CreditCardName>
                {cardExpMonth}/{cardExpYear}
              </CreditCardName>
            </div>
          </CreditCardFooter>
        </CreditCard>

        <CreditCard className="backcard">
          <CreditCardHeader className="space-y-6">
            <div className="mt-6 h-12 w-full bg-neutral-700 lg:mt-8 lg:h-16" />
            <div className="mx-auto flex h-8 max-w-56 items-center justify-end rounded-lg bg-slate-400 px-4 text-white lg:h-12 lg:max-w-xs">
              {cardCvc}
            </div>
          </CreditCardHeader>
        </CreditCard>
      </div>

      <div className="flex min-h-[42dvh] flex-col items-center justify-center space-y-6 md:w-full lg:min-h-[100dvh]">
        <label className="w-full max-w-xs">
          CARDHOLDER NAME
          <Input
            placeholder="e.g. Raphael Elias"
            value={cardName}
            onChange={(e) => {
              setCardName(e.target.value);
            }}
          />
        </label>
        <label className="w-full max-w-xs">
          CARD NUMBER
          <Input
            placeholder="e.g. 1234 5678 9123 0000"
            value={cardNumber}
            onChange={(e) => {
              setCardNumber(e.target.value);
            }}
            maxLength={16}
          />
        </label>

        <div className="flex w-full max-w-xs flex-row gap-6">
          <label className="w-full max-w-xs text-nowrap">
            EXP. DATE {"(MM/YY)"}
            <div className="flex flex-row gap-2">
              <Input
                placeholder="MM"
                value={cardExpMonth}
                onChange={(e) => {
                  setCardExpMonth(e.target.value);
                }}
                maxLength={2}
              />
              <Input
                placeholder="YY"
                value={cardExpYear}
                onChange={(e) => {
                  setCardExpYear(e.target.value);
                }}
                maxLength={2}
              />
            </div>
          </label>
          <label className="w-full max-w-xs">
            CVC
            <Input
              placeholder="e.g. 123"
              value={cardCvc}
              onChange={(e) => {
                setCardCvc(e.target.value);
              }}
              maxLength={3}
            />
          </label>
        </div>

        <Button className="w-full max-w-xs bg-purple-700 font-sans hover:bg-purple-800">
          Enviar
        </Button>
      </div>
    </section>
  );
}

export default Home;
