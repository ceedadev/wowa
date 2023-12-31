import PhoneNumberInput from "@/components/phone-input";

export default function Home() {
  return (
    <div className="mb-auto">
      <div className="mt-32 mx-16">
        <h1 className="text-center mb-24 font-semibold tracking-tight">
          Send Whatsapp Messages, without saving the number to contact.
        </h1>
        <PhoneNumberInput />
      </div>
    </div>
  );
}
