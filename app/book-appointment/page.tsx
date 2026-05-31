import { BookingClient } from "@/app/book-appointment/booking-client";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Book a free online functional health consultation",
  description:
    "Schedule a free 20-minute virtual functional health consultation with Pristine Functional Health for root-cause wellness support.",
  path: "/book-appointment",
  keywords: [
    "book functional health consultation",
    "free online functional health call",
    "virtual functional nutrition consultation",
  ],
});

export default function BookAppointmentPage() {
  return <BookingClient />;
}
