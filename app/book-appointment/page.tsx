import { BookingClient } from "@/app/book-appointment/booking-client";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Book an Appointment",
  description:
    "Schedule a free 20-minute virtual functional health consultation with Pristine Functional Health.",
  path: "/book-appointment",
  keywords: [
    "book functional health consultation",
    "free functional medicine call",
    "virtual functional nutrition consultation",
  ],
});

export default function BookAppointmentPage() {
  return <BookingClient />;
}
