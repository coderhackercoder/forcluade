import SimplePage from "@/components/SimplePage";

export default function DisclaimerPage() {
  return (
    <SimplePage title="Disclaimer">
      <p>
        NonTox evaluates products against our own published ingredient standard. Listing does not
        constitute a medical, dermatological, or safety guarantee. We are not perfect but we do
        our best — see{" "}
        <a href="/our-standard" className="underline">
          Our Standard
        </a>{" "}
        for what we do and don&apos;t claim.
      </p>
    </SimplePage>
  );
}
