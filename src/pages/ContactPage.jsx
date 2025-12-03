import { useState, useRef } from "react";
import { FiMapPin } from "react-icons/fi";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { toast } from "react-toastify";
import Container from "./../components/Container";
import SectionTitle from "./../components/SectionTitle";
export default function ContactPage() {
  const [isSubmit, setIsSubmit] = useState(false);
  const formRef = useRef(null);

  function handleContact(e) {
    e.preventDefault();

    setIsSubmit(true);

    setTimeout(function () {
      setIsSubmit(false);
      if (formRef.current) formRef.current.reset();
      toast.success("Sucessfully You send a message");
    }, 1000);
  }

  return (
    <section className="h-full py-14">
      <Container>
        <SectionTitle
          title="Contact Us"
          desc="Have any questions or need help? We're always here for you. Reach out anytime!"
        />
        <div className="my-20 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {/* Box 1 */}
          <div className="bg-base-200 rounded-xl border border-gray-800 px-5 py-8 text-center">
            <MdOutlineEmail className="text-primary mx-auto mb-3 text-4xl" />
            <div>
              <h3 className="heading-3">Email Us</h3>
              <p>game-matrix@gmail.com</p>
            </div>
          </div>
          {/* Box 2 */}
          <div className="bg-base-200 rounded-xl border border-gray-800 px-5 py-8 text-center">
            <IoCallOutline className="text-primary mx-auto mb-3 text-4xl" />
            <div>
              <h3 className="heading-3">Call Us</h3>
              <p>+880 1234 567 890</p>
            </div>
          </div>
          {/* Box 3 */}
          <div className="bg-base-200 rounded-xl border border-gray-800 px-5 py-8 text-center">
            <FiMapPin className="text-primary mx-auto mb-3 text-4xl" />
            <div>
              <h3 className="heading-3">Visit Us</h3>
              <p>Dhaka, Bangladesh</p>
            </div>
          </div>
        </div>
        {/* Contact Form */}
        <SectionTitle title="Send Us a Message" />
        <form ref={formRef} onSubmit={handleContact}>
          <fieldset className="fieldset">
            <div className="flex w-full flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-5">
              <div className="flex basis-1/2 flex-col gap-1">
                {/* Name */}
                <label htmlFor="name" className="label">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  className="input w-full placeholder-gray-500"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="flex basis-1/2 flex-col gap-1">
                {/* Email Address */}
                <label htmlFor="email" className="label">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  className="input w-full placeholder-gray-500"
                  placeholder="example@gmail.com"
                  required
                />
              </div>
            </div>
            {/*  Message Subject */}
            <label htmlFor="subject" className="label">
              Message Subject
            </label>
            <input
              id="subject"
              type="text"
              className="input w-full placeholder-gray-500"
              placeholder="Message Subject"
              required
            />

            {/* Message */}
            <label htmlFor="p-price" className="label">
              Message
            </label>

            <textarea
              id="p-price"
              className="textarea w-full placeholder-gray-500"
              placeholder="Message"
              required
            ></textarea>

            <button
              type="submit"
              disabled={isSubmit}
              className="btn btn-primary text-neutral mt-4"
            >
              {isSubmit ? "Sending..." : "Send Message"}
            </button>
          </fieldset>
        </form>
      </Container>
    </section>
  );
}
