import AppointmentForm from "@/components/forms/AppointmentForm";
import { getPatient } from "@/lib/actions/patient.actions";
import Image from "next/image";

import * as Sentry from "@sentry/nextjs";

export default async function NewAppointment({ params: { userId } }: SearchParamProps) {
    const patient = await getPatient(userId);
    Sentry.metrics.set("user_view_new-appointment", patient.name);
    return (
        <div className="flex h-screen max-h-screen">
            <section className="remove-scrollbar container my-auto">
                <div className="sub-container max-w-[860px] flex-1 justify-between">
                    <Image
                        src="/assets/icons/logo-full.svg"
                        alt="patient"
                        width={1000}
                        height={1000}
                        className="mb-12 h-10 w-fit"
                    />
                    <AppointmentForm
                        type='create'
                        userId={userId}
                        patientId={patient.$id}
                    />

                    <p className="copyright mt-10 py-12">
                        © 2024 MedLink
                    </p>
                </div>
            </section>
            <Image
                src="/assets/images/appointment-img.png"
                alt="appointment"
                width={1000}
                height={1000}
                className="size-img max-w-[390px] bg-bottom"
            />
        </div>
    );
}
